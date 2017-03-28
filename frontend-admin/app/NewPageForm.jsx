import React from 'react';
import Editor from "./Editor.jsx";
import {Urls, NavUrls} from './Constants.jsx';
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
                MODIFIEDBY: "",
                CATID : -1,
                ACTIVE : false
            },
            validData :{
                
            },
            options : []
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.previewHandler = this.previewHandler.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSlugChange = this.handleSlugChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.returnToTable = this.returnToTable.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }


    handleEditorChange(text) {
        //set the data;
        const old = this.state.editData;
        const newData = update(old, { BODY: { $set: text } });
        //should create a does component update;
        this.setState({ editData: newData });
    }
    returnToTable(){
        this.props.router.push(NavUrls.webpages);
    }
    submitHandler() {
        //ajax save and call props to navigate out
        var payload = {
            TITLE : this.state.editData.TITLE,
            BODY : this.state.editData.BODY,
            SLUG : this.state.editData.SLUG,
            CREATEDBY : this.state.editData.CREATEDBY,
            MODIFIEDBY : this.state.editData.MODIFIEDBY,
            CATID : this.state.editData.CATID,
            ACTIVE: this.state.editData.ACTIVE
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
        var closure = this;
        promise.done(function(data){
            //yay this works
            //should do a toast.
            closure.props.notify({message : "Saved Successfully!", status : "success"});
            closure.returnToTable();
            });

        promise.fail(function(data){
            debugger;
            closure.props.notify({message : "Failed", status : "danger"});
    });

       
    }
    handleTitleChange(e){
        const title = e.target.value;
        var valid = false;
        if(this.isInputEmpty(title)){
           valid = true;
        }
        const originalData = this.state;
        const newData = update(originalData, {editData : {$merge: {TITLE : e.target.value}}, validData : {$merge : {title : valid}}});
        this.setState(newData);
       
    }
    isInputEmpty(value){
        return value && typeof(value) == "string";
    }
    handleSlugChange(e){
        const title = e.target.value;
        var valid = false;
        if(this.isInputEmpty(title)){
           valid = true;
        }
        const originalData = this.state;
        const newData = update(originalData, {editData : {$merge: {SLUG : e.target.value}}, validData : {$merge : {slug : valid}}});
         this.setState(newData);
    }
    handleCatChange(e){
        const title = parseInt(e.target.value);
        var valid = false;
        if(title > 0 && title < this.state.options.length){
           valid = true;
        }
        const originalData = this.state;
        const newData = update(originalData, {editData : {$merge: {CATID : e.target.value}}, validData : {$merge : {cat: valid}}});
        this.setState(newData);
    }
    handleActiveChange(e){
        const active = this.refs.active.checked;
        var activeInt;
        if(active){
            activeInt = 1;
        }else{
            activeInt = 0;
        }
        const originalData = this.state;
        const newData = update(originalData , {editData : {$merge : {ACTIVE : activeInt}}});
        this.setState(newData);
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
                if(data.ACTIVE == 1){
                        closure.refs.active.checked = true;
                }
                else{
                    closure.refs.active.checked = false;
                }
                closure.setState({ editData: data });
                
            });
            promise.fail(function () {

            });
        }
        this.getCategories();
    }
    shouldComponentUpdate(newprops, newstate){
        return newstate !== this.state;
    }
    getCategories(){
        var closure = this;
        var promise= $.ajax({
            url : Urls.catController + "query",
            method : "GET",
        });
        promise.done(function(data){
            const oldOptions = closure.state;
            const newOptions = update(oldOptions , {$merge : {
                options: data
            }});
            const blankheading = {ID: -1, HEADING : "Select..."};
            const modifiedOptions = update(newOptions, {options : {$splice : [[0,0,blankheading]]} } );
            closure.setState(modifiedOptions);
        });
        promise.fail(function(){
        });
    }
    render() {
        var closure = this;
        const Options = this.state.options.map(function(option){
            return(<option selected={closure.state.editData.CATID === option.ID ? true: false} value={option.ID}>{option.HEADING}</option>)
        });
        return (
            <div className="uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-heading-divider">Page Editor</h2>
                <div className='uk-section uk-section-muted uk-padding'>
                    <div className='uk-margin'>
                        <p className="uk-text-lead">Use the section below to modify the contents of the web page</p>
                    </div>
                    <div className='uk-margin'>
                        <input className={typeof(this.state.validData.title) == "undefined" ? "uk-input" : this.state.validData.title ? "uk-input uk-form-success" : "uk-input uk-form-danger"} placeholder="title" value={this.state.editData.TITLE} onChange={this.handleTitleChange}></input>
                    </div>
                    <div className='uk-margin'>
                        <input className={typeof(this.state.validData.slug) == "undefined" ? "uk-input" : this.state.validData.slug ? "uk-input uk-form-success" : "uk-input uk-form-danger"} placeholder="slug" value={this.state.editData.SLUG} onChange={this.handleSlugChange}></input>
                    </div>
                    <div className='uk-margin'>
                        <select className={typeof(this.state.validData.cat) == "undefined" ? "uk-select" : this.state.validData.cat ? "uk-select uk-form-success" : "uk-select uk-form-danger"} onChange={this.handleCatChange}>
                            {Options}
                        </select>
                    </div>
                    <div className="uk-margin">
                        <label><input ref="active" onChange={this.handleActiveChange} className='uk-checkbox' type='checkbox' />{" Active"}</label>
                    </div>
                    <Editor value={this.state.editData.BODY} onEditorChange={this.handleEditorChange} />
                </div>
                <div className="uk-margin">
                    <div className="uk-flex uk-flex-between">
                        <div>
                            <button onClick={this.returnToTable} className="uk-button uk-button-danger">Cancel</button>
                        </div>
                        <div>
                            <button onClick={this.previewHandler} className="uk-button uk-button-secondary">Preview</button>
                            <button onClick={this.submitHandler} className="uk-button uk-button-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}