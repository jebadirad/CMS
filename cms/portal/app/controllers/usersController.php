<?php


class usersController extends baseController{
    //check if user is still logged in.
    
    //used to get user profiles / data for whatever we need.
    public function get($f3, $params){
        $users = new DB\SQL\Mapper($f3->get("DB"), "users");
        $users->load(array("ID = ? OR username = ?", $params['id'], $params['id']));
        //need to create user DTO 
        $user = $users->cast();
        foreach($user as $key =>$value){
            if($key != "PASSWORD"){
                $userToSend[$key] = $value;
            }
        }
        echo json_encode($userToSend);
    }

    public function query($f3, $params){
        $auther = new AuthController;
        if($auther->checkLogin()){
            $users = new DB\SQL\Mapper($f3->get("DB"), "users");
            $allusers = $users->find('', array('order' => 'ID'));
            $results = array();
            foreach($allusers as $item){
                array_push($results, $item->cast());
            }
            echo json_encode($results);
        }else{
            $f3->reroute("/login", false);
        }

        
    }
    //get the current logged in user. just username for now.
    public function current($f3, $params){
        $auther = new AuthController;
        if($auther->checkLogin()){
            $user["username"] = $_SESSION['user'];
            echo json_encode($user);
        }
            //echo json_encode("");
    }

    //used for main login page to see if the user is authenticated. avoid double logins.
    public function authme($f3, $params){
        $auther = new AuthController;
        if($auther->checkLogin()){
            echo json_encode("true");
        }else{
            echo json_encode('false');
        }
    }

    //used to create new login must auth first and be admin and active
    public function update($f3, $params){
        if(empty($params['id']) || $params['id'] < 1){
           http_response_code(400);
       }else{
            if($this->stillLoggedIn()){
                $username = $_POST['USERNAME'];
                
                $password = $_POST['PASSWORD'];
                $email = $_POST['EMAIL'];
                $first = $_POST['FIRST'];
                $last = $_POST['LAST'];
                if($this->verify($username, $email, $first, $last)){
                    $users = new DB\SQL\Mapper($f3->get("DB"), "users");
                    $matchedUsers = $users->count(array("ID=? and USERNAME=?", $params['id'], $username));
                    $auther = new AuthController;
                    if($matchedUsers == 1){
                        //$users->load($matchedUsers[0]);
                        $users->load(array("ID=? and USERNAME=?", $params['id'], $username));
                        //$pass = "jondavid";
                        
                        if(!empty($password)){
                            $users->PASSWORD = $auther->hasher($password);
                        }
                        $users->EMAIL = $email;
                        $users->FIRST = $first;
                        $users->LAST = $last;
                        $users->save();
                        
                        $users->reset();
                        $response['status'] = "ok";
                        http_response_code(200);
                        echo json_encode($response);
                    }else{
                        if($users->count(array("USERNAME=?", $username))> 0 ){
                            http_response_code(400);   
                        }else{
                             if(empty($password)){
                                 http_response_code(400);
                            }else{
                                $users->load(array("ID=?", $params['id']));
                                $users->USERNAME = $username;
                                $users->PASSWORD = $auther->hasher($password);
                                $users->EMAIL = $email;
                                $users->FIRST = $first;
                                $users->LAST = $last;
                                $users->save();
                                $users->reset();
                                $response['status'] = "ok";
                                http_response_code(200);
                                echo json_encode($response);
                            }
                        }
                    }
                }else{
                http_response_code(400);
                }
        }else{
             $f3->reroute("/login", false);
            }
       }
    }
    private function verify($username, $email, $first, $last){
        $success = false;
        if(!empty($username) && !empty($email) && !empty($first) && !empty($last)){
            $success = true;
        }
        return  $success;
    }
    public function destroy($f3, $params){
        $auther = new AuthController;
        $auther->destroy();
        $f3->reroute("/login", false);
    }
    //login func
    public function login($f3, $params){
        session_start();
                $_SESSION['user'] = $_POST['username'];
                $f3->reroute("/admin", false);
        /*if(isset($_POST['username']) && isset($_POST['password'])){
            $users = new DB\SQL\Mapper($f3->get("DB"), "users");
            $users->load(array("USERNAME = ?", $_POST['username']));
            $expandeduser = $users->cast();
            $auther = new AuthController;
            if($auther->login($_POST['password'], $expandeduser['PASSWORD'])){
                session_start();
                $_SESSION['user'] = $_POST['username'];
                $f3->reroute("/admin", false);
            }
        }
        $f3->reroute("/login", false);*/
        
        // header("Location: /login");
        
    }
    //password reset func. will need to email

    public function resetPW($f3, $params){

    }


}




?>