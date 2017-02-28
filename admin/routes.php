<?php

//define each route section
$f3->route('GET /',
    function(){
        //if authenticated,
        $auther = new AuthController;
        if($auther->checkLogin()){
        echo " 
            <html>
            <head>
            </head>
            <body>
            <div id='main'></div>
            <script src='/scripts/bundle.js'></script>
            </body>
            </html>";
        }
        else{
            $f3->reroute("/login", false);
        }
        
        //else redirect to login page.
    }
);
$f3->route("GET /login", function(){
    echo " <html>
            <head>
            </head>
            <body>
            <div id='main'></div>
            <script src='/scripts/bundle.js'></script>
            </body>
            </html>";

});
//pages
$f3->route("GET /api/pages/@id [ajax]", "pagesController->get");
$f3->route("POST /api/pages/@id [ajax]", "pagesController->update");
$f3->route("GET /api/pages/query [ajax]", "pagesController->query");
//users
$f3->route("GET /api/users/new [ajax]", "usersController->newUser");
$f3->route("GET /api/users/auth", "usersController->login");
$f3->route("GET /api/users/get/@id [ajax]", "usersController->get");
$f3->route("GET /api/users/get/current [ajax]", "usersController->current");
$f3->route("GET /*", function(){
       $auther = new AuthController;
        if($auther->checkLogin()){
        echo " 
            <html>
            <head>
            </head>
            <body>
            <div id='main'></div>
            <script src='/scripts/bundle.js'></script>
            </body>
            </html>";
        }
        else{
            $f3->reroute("/login", false);
        }
    });
?>