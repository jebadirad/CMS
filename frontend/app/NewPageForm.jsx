import React from 'react';
import Editor from "./Editor.jsx";
import {Urls} from './Constants.jsx';
import update from 'immutability-helper';
import $ from 'jquery';
export default class NewPageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //[page.ID, page.TITLE, page.BODY, page.SLUG, page.CREATEDBY, page.MODIFIEDBY]
            editData: {
                ID: "",
                TITLE: "",
                BODY: "",
                SLUG: "",
                CREATEDBY: "",
                MODIFIEDBY: ""
            }

        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.previewHandler = this.previewHandler.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSlugChange = this.handleSlugChange.bind(this);

    }


    handleEditorChange(text) {
        //set the data;
        const old = this.state.editData;
        const newData = update(old, { BODY: { $set: text } });
        //should create a does component update;
        this.setState({ editData: newData });
    }
    submitHandler() {
        //ajax save and call props to navigate out
        var payload = {
            TITLE : this.state.editData.TITLE,
            BODY : this.state.editData.BODY,
            SLUG : this.state.editData.SLUG,
            CREATEDBY : this.state.editData.CREATEDBY,
            MODIFIEDBY : this.state.editData.MODIFIEDBY
        };
        var sendingId = '';

        if(this.state.editData.ID){
           sendingId = this.state.editData.ID;
        }else{
            //new page 
           sendingId = Date.now();
        }
         var promise = $.ajax({
                url : Urls.pagesController + sendingId,
                method : "POST",
                data: payload
            });
        promise.done(function(data){
            //yay this works
            });

        promise.fail(function(data){
        });
       
    }
    handleTitleChange(e){
        const originalData = this.state.editData;
        const newData = update(originalData, {$merge: {TITLE : e.target.value}});
        this.setState({editData : newData});
    }
    handleSlugChange(e){
         const originalData = this.state.editData;
        const newData = update(originalData, {$merge: {SLUG : e.target.value}});
        this.setState({editData : newData});
    }
    previewHandler() {
        //later
    }
    componentDidMount() {
        if (this.props.params.id) {
            var closure = this;
            var promise = $.ajax({
                url: Urls.pagesController + "" + this.props.params.id,
                method: "GET",

            });
            promise.done(function (data) {
                //var mappedData = data[0];
                //var mappedData = [data.ID, data.TITLE, data.BODY, data.SLUG, data.CREATEDBY, data.MODIFIEDBY]
                closure.setState({ editData: data });
            });
            promise.fail(function () {

            });
        }
    }
    render() {
        return (
            <div className="uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-heading-divider">Page Editor</h2>
                <div className='uk-section uk-section-muted uk-padding'>
                    <p className="uk-text-lead">Use the section below to modify the contents of the web page</p>
                    <input placeholder="title" value={this.state.editData.TITLE} onChange={this.handleTitleChange}></input>
                    <input placeholder="slug" value={this.state.editData.SLUG} onChange={this.handleSlugChange}></input>
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