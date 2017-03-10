<?php

class catController extends baseController{


    public function get($f3, $params){
        $cats = new DB\SQL\Mapper($f3->get("DB"), "categories");
        $cats->load(array("ID = ?", $params["id"]));
        echo json_encode($cats->cast());
    }
    public function query($f3, $params){
        $cats = new DB\SQL\Mapper($f3->get("DB"), "categories");
        $allcats = $cats->find('', array('order' => 'ID'));
        $results = array();
        foreach($allcats as $item){
            array_push($results, $item->cast());
        }
        echo json_encode($results);
    }


    public function update($f3, $params){
       if(empty($params['id']) || $params['id'] < 1){
           http_response_code(400);
       }
       else{
           if($this->stillLoggedIn()){
               $heading = $_POST['HEADING'];
               if(!empty($heading)){
                   $cats = new DB\SQL\Mapper($f3->get("DB"), "categories");
                   $cats->load(array("ID=?", $params['id']));
                   $cats->HEADING = $heading;
                   $cats->save();
                   $cats->reset();
                   $response['status'] = "ok";
                   echo json_encode($response);
               }
               else{
                   http_response_code(400);
               }
           }
       }
        
    }


}












?>