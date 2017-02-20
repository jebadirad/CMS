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
            <script src='scripts/bundle.js'></script>
            </body>
            </html>";
    }
);
$f3->route('GET /test',
function(){
    echo"<p> this is a test</p>";
});

//pages section  - controller/method

//

$f3->route("GET /pages/@id [ajax]", "pagesController->get"
);
$f3->route("GET /pages/query", "pagesController->query");

$f3->route("GET /*", function(){
        echo " 
            <html>
            <head>
            </head>
            <body>
            <div id='main'></div>
            <script src='scripts/bundle.js'></script>
            </body>
            </html>";
    });
?>