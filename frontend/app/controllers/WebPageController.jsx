import React from 'react';
import ReactDOM from 'react-dom';
import TableListingContainer from "../TableListingContainer.jsx";
import {NewPageForm} from "../NewPageForm.jsx";
import {Urls} from '../Constants.jsx';
export default class WebPageController extends React.Component{

        constructor(props){
            super(props);
           
            //views : list edit 
}
        render(){
            return(
                <div>
                {this.props.children}
                </div>

            );
        }
}