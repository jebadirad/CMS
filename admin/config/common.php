<?php 
$f3 = require('vendors/fatfree/lib/base.php');
$f3->set("AUTOLOAD", './controllers/; ./classes/');
$f3->set("DB", new DB\SQL(
    'mysql:host=localhost;dbname=demosite',
    'demosite',
    'esqcde7DS9CpUu9y'
));
include ('routes.php');
$f3->run();
?>