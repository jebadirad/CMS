import React from 'react';
import ReactDOM from 'react-dom';
import {TableListing} from "../TableListing.jsx";
import {TableListingContainer} from "../TableListingContainer.jsx";
export class WebPageController extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                view : "list",
            };
            //views : list edit 
    }
        componentDidMount(){
            //fetch information for all pages for the site.
    }

    
        render(){
            var body = "";
            if(this.state.view === "list"){
                body = <TableListingContainer url="" />
            }
            else if(this.state.view === "edit"){
                body = null;
            }else{
                body = <TableListingContainer url="" />
            }


            return(
                <div>
                <TableListingContainer title="My Pages" url="" />
                </div>

            );
        }
}