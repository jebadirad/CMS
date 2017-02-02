import React from 'react';
import ReactDOM from 'react-dom';
import {Editor} from "./Editor.jsx";
import update from 'immutability-helper';
export class NewPageForm extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                        //[page.ID, page.TITLE, page.BODY, page.SLUG, page.CREATEDBY, page.MODIFIEDBY]
                editData : {
                        ID : "",
                        TITLE : "",
                        BODY : "",
                        SLUG : "",
                        CREATEDBY : "",
                        MODIFIEDBY : ""
                    }

            }
            this.handleEditorChange = this.handleEditorChange.bind(this);
            this.submitHandler = this.submitHandler.bind(this);
            this.previewHandler = this.previewHandler.bind(this);
        }


        handleEditorChange(text){
            //set the data;
            const old = this.state.editData;
            const newData = update(old, {BODY : {$set : text}});
            //should create a does component update;
            this.setState({editData : newData});
        }
        submitHandler(){
            //ajax save and call props to navigate out
            this.props.submitCallback();
        }
        previewHandler(){
            //later
        }
        componentDidMount(){
            if(this.props.url){
            var closure = this;
            var promise = $.ajax({
                url: this.props.url + "/get?id=" + this.props.pageId,
                method: "GET",

            });
            promise.done(function(data){
                var mappedData = data[0];
                //var mappedData = [data.ID, data.TITLE, data.BODY, data.SLUG, data.CREATEDBY, data.MODIFIEDBY]
                closure.setState({editData : data[0]});
            });
            promise.fail(function(){

            });
            }
           
        }
        render(){
            return(
                <div className="uk-padding uk-padding-remove-horizontal">
                    <h2 className="uk-heading-divider">Page Editor</h2>
                    <div className='uk-section uk-section-muted uk-padding'>
                    <p className="uk-text-lead">Use the section below to modify the contents of the web page</p>
                    <input placeholder="title" value={this.state.editData.TITLE}></input>
                    <input placeholder="slug" value={this.state.editData.SLUG}></input>
                      <Editor value={this.state.editData.BODY} onEditorChange={this.handleEditorChange} />
                    </div>
                    <div className="uk-margin">
                        <button onClick={this.previewHandler} className="uk-button uk-button-secondary">Preview</button>
                        <button onClick={this.submitHandler} className="uk-button uk-button-primary">Submit</button>
                    </div>
                </div>


            );
        }
}