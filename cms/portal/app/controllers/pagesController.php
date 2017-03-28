<?php 

class pagesController extends baseController{

   
 
    public function get($f3,  $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "sitepages");
        $pages->load(array("ID = ?", $params["id"]));
        echo json_encode($pages->cast());
    }
     public function fetch($f3,  $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "site_pages_with_category_heading");
        $pages->load(array("ID = ? and ACTIVE = 1", $params["id"]));
        echo json_encode($pages->cast());
    }
    public function getBySlug($f3, $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "site_pages_with_category_heading");
        $pages->load(array("SLUG=? and HEADING=? and ACTIVE=1", $params['slug'], $params['cat']));
        $pageToSend = $pages->cast();
        if(!empty($pageToSend['BODY']) ){
            echo json_encode($pages->cast());
        }else{  
             http_response_code(400);
        }
    }
    public function queryActive($f3, $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "site_pages_with_category_heading");
        $allpages = $pages->find(array("ACTIVE=1"));
        $results = array();
        foreach($allpages as $item){
            array_push($results, $item->cast());
        }
        echo json_encode($results);
    }

    //GET ALL DONT TOUCH
    public function query($f3, $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "site_pages_with_category_heading");
        $allpages = $pages->find('',array('order' => 'ID'));
        $results = array();
        foreach($allpages as $item){
            array_push($results, $item->cast());
        }
        echo json_encode($results);
        //get all records from 
        
    }
    //will need to do some auth here and then insert 
    /*
    public function add($f3, $params){
        if($this->stillLoggedIn()){
            $title = $_POST['TITLE'];
            $body = $_POST['BODY'];
            $slug = $_POST['SLUG'];
            if($this->validatePage($title, $body, $slug, 0)){
                $pages = new DB\SQL\Mapper($f3->get("DB"), "sitepages");
                $pages->TITLE= 'testtitle';
                $pages->BODY = "Body";
                $pages->SLUG="testtitle";
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
    }*/


    public function update($f3, $params){
        if(empty($params['id']) || $params['id'] < 1){
            http_response_code(400);
        }else{
            //need to do some validation here but
             if($this->stillLoggedIn()){
                    $title = $_POST['TITLE'];
                    $body = $_POST['BODY'];
                    $slug =  $_POST['SLUG'];
                    $cat = $_POST["CATID"];
                    $active = $_POST['ACTIVE'];
                if($this->validatePage($title, $body, $slug, 0, $cat, $active)){
                        
                        $cats = new DB\SQL\Mapper($f3->get("DB"),"categories"); 
                        $catval = intval($cat);
                        $activeVal = intval($active);
                        $catCount = $cats->count(array("ID=?", $catval));
                        if($catCount ==1){
                            $pages = new DB\SQL\Mapper($f3->get("DB"),"sitepages");
                            $pages->load(array("ID=?", $params['id']));
                            $pages->TITLE= $_POST['TITLE'];
                            $pages->BODY = $_POST['BODY'];
                            $pages->SLUG= $_POST['SLUG'];
                            $pages->CATID = $catval;
                            $pages->ACTIVE = $activeVal;
                            //do this later
                            $pages->CREATEDBY = 0;
                            $pages->MODIFIEDBY = 0;
                            $pages->save();
                            $pages->reset();
                            $response["status"] = "ok";
                            echo json_encode($response);
                        }else{
                            http_response_code(400);
                        }
                        
                }
                    
                    else{
                        http_response_code(400);
                    }
             }
        
        }
    }
    function validatePage($title, $body,$slug, $modifiedby, $cat, $active){
        $success = false;
            if(!empty($title) && !empty($body) && !empty($slug) && !empty($cat) && (!empty($active) || $active == 0)){
                $success = true;
            }
        return $success;
    }


}