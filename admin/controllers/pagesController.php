<?php 

class pagesController extends baseController{

   
 
    public function get($f3,  $params){
        $pages = new DB\SQL\Mapper($f3->get("DB"), "sitepages");
        $pages->load(array('ID=?', $params["id"]),array('order' => 'ID'));

        echo json_encode($pages);
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



}