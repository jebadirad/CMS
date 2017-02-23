<?php

//define each route section
$f3->route('GET /',
    function(){
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
);
$f3->route('GET /api/test',
function(){
    echo"<p> this is a test</p>";
});

//pages section  - controller/method

//

$f3->route("GET /api/pages/@id [ajax]", "pagesController->get"
);
$f3->route("POST /api/pages/@id [ajax]", "pagesController->update");
$f3->route("GET /api/pages/query", "pagesController->query");

$f3->route("GET /*", function(){
        echo " 
            <html>
            <head>
            </head>
            <body>
            <div id='main'></div>
            <script src='/scripts/bundle.js'></script>
            </body>
            </html>";
    });
?>