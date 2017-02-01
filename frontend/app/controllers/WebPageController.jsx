import React from 'react';
import ReactDOM from 'react-dom';
import {TableListingContainer} from "../TableListingContainer.jsx";
import {NewPageForm} from "../NewPageForm.jsx";
export class WebPageController extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                view : "list",
                editId : 0
            };
            //views : list edit 
            this.changeView = this.changeView.bind(this);
            this.clickItemCallback = this.clickItemCallback.bind(this);
}

        clickItemCallback(id){
            this.setState({
                view : "edit",
                editId : id
            });
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
                body = <TableListingContainer onClickItem={this.clickItemCallback} newItem={() => this.changeView("new")} title="My Pages" url="" />
            }
            else if(this.state.view === "edit"){
                body = <NewPageForm submitCallback={() => this.changeView("list")} pageId={this.state.editId} />;
            }
            else if (this.state.view == "new"){
                body = <NewPageForm submitCallback={() => this.changeView("list")} />;
            }
            else{
                body = <TableListingContainer onClickItem={this.clickItemCallback} newItem={() => this.changeView("new")} title="My Pages" url="" />
            }


            return(
                <div>
                {body}
                </div>

            );
        }
}