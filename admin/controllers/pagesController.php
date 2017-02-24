<?php 

class pagesController extends baseController{

   
 
    public function get($f3,  $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "sitepages");
        $pages->load(array("ID = ?", $params["id"]));

        echo json_encode($pages->cast());
    }



    //GET ALL DONT TOUCH
    public function query($f3, $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "sitepages");
        $allpages = $pages->find('',array('order' => 'ID'));
        $results = array();
        foreach($allpages as $item){
            array_push($results, $item->cast());
        }
        echo json_encode($results);
        //get all records from 
        
    }
    //will need to do some auth here and then insert 
    
    public function add($f3, $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "sitepages");
        $pages->TITLE= 'testtitle';
        $pages->BODY = "Body";
        $pages->SLUG="testtitle";
        $pages->CREATEDBY = 0;
        $pages->MODIFIEDBY = 0;
        $pages->save();
        $pages->reset();

        echo json_encode($arr);
    }


    public function update($f3, $params){
        if(empty($params['id']) || $params['id'] < 1){
            http_response_code(400);
        }else{
            //need to do some validation here but
            $title = $_POST['TITLE'];
            $body = $_POST['BODY'];
            $slug =  $_POST['SLUG'];
           if($this->validatePage($title, $body, $slug, 0)){
                $pages = new DB\SQL\Mapper($f3->get("DB"),"sitepages");

                $pages->load(array("ID=?", $params['id']));
                $pages->TITLE= $_POST['TITLE'];
                $pages->BODY = $_POST['BODY'];
                $pages->SLUG= $_POST['SLUG'];
                //do this later
                $pages->CREATEDBY = 0;
                $pages->MODIFIEDBY = 0;
                $pages->save();
                $pages->reset();
                $response["status"] = "ok";
                echo json_encode($response);
           }
            else{
                 http_response_code(400);
            }
        
        }
    }
    function validatePage($title, $body,$slug, $modifiedby){
        $success = false;
        if(!empty($title) && !empty($body) && !empty($slug)){
            $success = true;
        }

        return $success;
    }


}