<?php 
$f3 = require('portal/vendors/fatfree/lib/base.php');
$f3->set("AUTOLOAD", 'portal/app/controllers/; app/classes/');
$f3->set("UI", "portal/app/views/");
$f3->set("DB", new DB\SQL(
    'mysql:host=localhost;dbname=demosite',
    'demosite',
    'esqcde7DS9CpUu9y'
));
include ('portal/app/config/routes.php');
$f3->run();
?>