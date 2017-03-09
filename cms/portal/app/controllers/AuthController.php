<?php

class AuthController{
    //DO NOT REDIRECT HERE. REDIRECT IN CONTROLLERS ONLY.
    public function login($password, $hashedPassword){
        return password_verify($password, $hashedPassword);
    }

    public function checkLogin(){
        //check session to see if the var is there, if so update it 
        session_start();
        session_regenerate_id();
        return isset($_SESSION['user']);
    }
    public function hasher($password){
        return password_hash($password, PASSWORD_BCRYPT);
    }
}