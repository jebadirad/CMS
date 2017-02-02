<?php 
class baseController{
    function beforeRoute(){

    }
    function afterRoute(){
        header('Content-Type: application/json');
    }


}


?>