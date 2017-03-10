import React from 'react';
import update from 'immutability-helper';
import {Urls, NavUrls} from './Constants.jsx';
import $ from 'jquery';

export default class NewCatForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editData : {
                ID: "",
                HEADING : ''
            }
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.returnToTable = this.returnToTable.bind(this);
    }
    componentDidMount(){
        if(this.props.params.id){
            var closure = this;
            var promise = $.ajax({
                url : Urls.catController + this.props.params.id,
                method : "GET"
            });
            promise.done(function(data){
                closure.setState({editData : data});
            });
            promise.fail(function(){

            });
        }
    }
    submitHandler(){
        var payload = {
            HEADING : this.state.editData.HEADING
        };
        var sendingId = '';

        if(this.state.editData.ID){
           sendingId = this.state.editData.ID;
        }else{
            //new page 
           sendingId = Date.now();
        }

         var promise = $.ajax({
                url : Urls.catController + sendingId,
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
    handleChange(event){
        const oldstate = this.state.editData;
        const newState = update(oldstate, {$merge : {HEADING : event.target.value}});
        this.setState({editData : newState});
    }
    returnToTable(){
        this.props.router.push(NavUrls.categories);
    }


    render(){
        return(
            <div className="uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-heading-divider">Heading Editor</h2>
                <div className="uk-section uk-section-muted uk-padding">
                    <p className="uk-text-lead">Headings are used to group pages together in a navigation menu</p>
                    <input 
                        placeholder="Heading" 
                        value={this.state.editData.HEADING} 
                        onChange={this.handleChange}/>
                </div>
                <div className="uk-margin">
                    <div className="uk-flex uk-flex-between">
                        <div>
                            <button onClick={this.returnToTable} className="uk-button uk-button-danger">Cancel</button>
                        </div>
                        <div>
                            <button onClick={this.submitHandler} className="uk-button uk-button-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}