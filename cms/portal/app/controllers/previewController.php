<?php

class previewController{

    public function preview($f3, $params){
        $f3->set('body', $_POST['preview']);
        echo \Template::instance()->render('preview.html', "text/html");
    }
}


?>