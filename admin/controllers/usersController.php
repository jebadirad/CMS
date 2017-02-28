<?php


class usersController extends baseController{
    //check if user is still logged in.
    
    //used to get user profiles / data for whatever we need.
    public function get($f3, $params){
        $users = new DB\SQL\Mapper($f3->get("DB"), "users");
        
        $users->load(array("ID = ? OR username = ?", $params['id'], $params['id']));
        //need to create user DTO 
        echo json_encode($users->cast());
    }

    //get the current logged in user. just username for now.
    public function current($f3, $params){
        $auther = new AuthController;
        if($auther->checkLogin()){
            echo json_encode("{'username':" + $_SESSION['user'] + "}");
        }
            echo json_encode("");
    }

    //used for main login page to see if the user is authenticated. avoid double logins.
    public function authme($f3, $params){
        $auther = new AuthController;
        if($auther->checkLogin()){
            $f3->reroute("/admin", false);
        }
    }

    //used to create new login must auth first and be admin and active
    public function newUser($f3, $params){
        if($this->stillLoggedIn()){
            $users = new DB\SQL\Mapper($f3->get("DB"), "users");
            $pass = "jondavid";
            $auther = new AuthController;
            $users->username = "test";
            $users->password = $auther->hasher($pass);
            $users->email = "test@yahoo.com";
            $users->first = "Test";
            $users->last = "LastTest";
            $users->save();
        };
       
    }

    //login func
    public function login($f3, $params){
        if(isset($_POST['username']) && isset($_POST['password'])){
            $users = new DB\SQL\Mapper($f3->get("DB"), "users");
            $users->load(array("username = ?", $_POST['username']));
            $expandeduser = $users->cast();
            $auther = new AuthController;
            if($auther->login($_POST['password'], $expandeduser['password'])){
                session_start();
                $_SESSION['user'] = $_POST['username'];
                $f3->reroute("/admin" , false);
            }
        }
         $f3->reroute("/login", false);
        
    }
    //password reset func. will need to email

    public function resetPW($f3, $params){

    }


}




?>