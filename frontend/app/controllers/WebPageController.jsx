import React from 'react';
import ReactDOM from 'react-dom';
import {TableListingContainer} from "../TableListingContainer.jsx";
import {NewPageForm} from "../NewPageForm.jsx";
export default class WebPageController extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                view : "list",
                editId : 0,
                headers : ["ID", "Title", "Slug", "Created By", "Modified By"],
                data : []
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
            //this.props.url for ajax.
            var closure = this;
            var promise = $.ajax({
                url: this.props.url + "/query",
                method: "GET",

            });
            promise.done(function(data){
                var mappedData = data.map(function(page){
                    return [page.ID, page.TITLE, page.SLUG, page.CREATEDBY, page.MODIFIEDBY];
                });
                closure.setState({data : mappedData});
            });
            promise.fail(function(){

            });
            //fetch table headers based on something maybe we pass in a url or a type?
    }
    
        changeView(view){
            this.setState({view : view});
        }
        render(){
            var body = "";
            if(this.state.view === "list"){
                body = <TableListingContainer onClickItem={this.clickItemCallback} headers={this.state.headers} data={this.state.data} newItem={() => this.changeView("new")} title="My Pages" />
            }
            else if(this.state.view === "edit"){

                body = <NewPageForm url={this.props.url} submitCallback={() => this.changeView("list")} pageId={this.state.editId} />;
            }
            else if (this.state.view == "new"){
                body = <NewPageForm  submitCallback={() => this.changeView("list")} />;
            }
            else{
                body = <TableListingContainer onClickItem={this.clickItemCallback} headers={this.state.headers} data={this.state.data} newItem={() => this.changeView("new")} title="My Pages" />
            }
            return(
                <div>
                    <p>hello</p>
                </div>

            );
        }
}