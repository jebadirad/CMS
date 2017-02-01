import React from 'react';
import ReactDOM from 'react-dom';
import {TableListingContainer} from "../TableListingContainer.jsx";
import {NewPageForm} from "../NewPageForm.jsx";
export class WebPageController extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                view : "list",
            };
            //views : list edit 
            this.newWebPage = this.newWebPage.bind(this);
    }

        componentDidMount(){
            //fetch information for all pages for the site.
    }
        newWebPage(){
            this.setState({view : "new"});
        }
    
        render(){
            var body = "";
            if(this.state.view === "list"){
                body = <TableListingContainer newItem={this.newWebPage} title="My Pages" url="" />
            }
            else if(this.state.view === "edit"){
                body = null;
            }
            else if (this.state.view == "new"){
                body = <NewPageForm />;
            }
            else{
                body = <TableListingContainer  newItem={this.newWebPage} title="My Pages" url="" />
            }


            return(
                <div>
                {body}
                </div>

            );
        }
}