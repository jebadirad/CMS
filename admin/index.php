<?php  
$f3 = require('vendors/fatfree/lib/base.php');

$f3->route('GET /',
    function(){
        echo "hello, world!";
    }
);
$f3->route('GET /test',
function(){
    echo "test work";
});
$f3->run();
?>