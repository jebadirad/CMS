<?php
//define each route section
$f3->route("GET /admin", function($f3){
    $auther = new AuthController;
        if($auther->checkLogin()){
            echo \Template::instance()->render("admin.html");
        }else{
            echo \Template::instance()->render("login.html");
        }
});
/*
$f3->route('GET /',
    function($f3){
        //if authenticated,
        $auther = new AuthController;
        if($auther->checkLogin()){
        echo "<html>
            <head>
            </head>
            <body>
            <div id='main'></div>
            <script src='{{@BASE}}/scripts/admin.js'></script>
            </body>
            </html>";
        }
        else{
            $f3->reroute("/login", false);
        }
        //else redirect to login page.
    }
);*/
//login
$f3->route("GET /login", function($f3){
    $auther = new AuthController;
    $auther->destroy();
     if($auther->checkLogin()){
            echo \Template::instance()->render("admin.html");
        }else{
            echo \Template::instance()->render("login.html");
        }
});
$f3->route("POST /login", "usersController->login");
$f3->route("GET /destroy", "usersController->destroy");
//pages
$f3->route("GET /api/pages/@id [ajax]", "pagesController->get");
$f3->route("POST /api/pages/@id [ajax]", "pagesController->update");
$f3->route("GET /api/pages/query [ajax]", "pagesController->query");
//cats
$f3->route("GET /api/cats/@id [ajax]", "catController->get");
$f3->route("GET /api/cats/query [ajax]", "catController->query");
$f3->route("POST /api/cats/@id [ajax]", "catController->update");
//users
$f3->route("POST /api/users/@id [ajax]", "usersController->update");
$f3->route("GET /api/users/auth", "usersController->login");
$f3->route("GET /api/users/@id [ajax]", "usersController->get");
$f3->route("GET /api/users/query [ajax]", "usersController->query");
$f3->route("GET /api/users/get/current [ajax]", "usersController->current");
$f3->route("GET /api/users/authme [ajax]", "usersController->authme");

$f3->route("GET /admin/*", function($f3){
    $f3->reroute("/admin", false);
});

$f3->route("GET /", function($f3){
    echo \Template::instance()->render("main.html");
});
$f3->route("GET /*", function($f3){
    echo \Template::instance()->render("main.html");
});


?>