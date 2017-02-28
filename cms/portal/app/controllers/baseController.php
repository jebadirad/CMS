<?php 
class baseController{
    function beforeRoute(){

    }
    function afterRoute(){
        header('Content-Type: application/json');
    }

    protected function stillLoggedIn(){
         $auther = new AuthController;
        //session will have been started.
        if(!$auther->checkLogin()){
            unset($_SESSION['user']);
            session_destroy();
            header("Location: /login");
        }
        else{
            return true;
        }

    }



}


?>