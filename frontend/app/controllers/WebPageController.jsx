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
            this.changeView = this.changeView.bind(this);
    }

        componentDidMount(){
            //fetch information for all pages for the site.
    }
        changeView(view){
            this.setState({view : view});
        }
        render(){
            var body = "";
            if(this.state.view === "list"){
                body = <TableListingContainer newItem={() => this.changeView("new")} title="My Pages" url="" />
            }
            else if(this.state.view === "edit"){
                body = null;
            }
            else if (this.state.view == "new"){
                body = <NewPageForm submitCallback={() => this.changeView("list")} />;
            }
            else{
                body = <TableListingContainer  newItem={() => this.changeView("new")} title="My Pages" url="" />
            }


            return(
                <div>
                {body}
                </div>

            );
        }
}