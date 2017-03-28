import React from 'react';
import update from 'immutability-helper';
import {Urls, NavUrls} from './Constants.jsx';
import $ from 'jquery';

export default class NewUserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editData : {
                ID : "",
                USERNAME : "",
                FIRST : "",
                LAST : "",
                EMAIL : ""
            },
            password: ""
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlepwChange = this.handlepwChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.returnToTable = this.returnToTable.bind(this);
    }
    componentDidMount(){

        if(this.props.params.id){
            var closure = this;
            var promise = $.ajax({
                url : Urls.usersController + this.props.params.id,
                method : "GET",

            });
            promise.done(function(data){
                closure.setState({editData : data});
            });
            promise.fail(function(){
                        //toast.
            });
        }
    }
    submitHandler(){
        var payload = {
            USERNAME : this.state.editData.USERNAME,
            PASSWORD : this.state.password,
            EMAIL : this.state.editData.EMAIL,
            FIRST : this.state.editData.FIRST,
            LAST : this.state.editData.LAST,
        }
        var sendingId = '';
        if(this.state.editData.ID){
            sendingId = this.state.editData.ID;
        }else{
            sendingId = Date.now();
        }
        var promise = $.ajax({
            url : Urls.usersController + sendingId,
            method : "POST",
            data : payload
        });
        var closure = this;
        promise.done(function(data){
            closure.props.notify({
                message : "Saved Successfully!", status: "success"
            });
            closure.returnToTable();
        });
        promise.fail(function(data){
             closure.props.notify({message : "Failed", status : "danger"});
        });
    }
    handleChange(event){
        const oldstate = this.state.editData;
        const newState = update(oldstate, {$merge : {USERNAME : event.target.value}});
        this.setState({editData : newState});
    }
     handlepwChange(event){
        const oldstate = this.state;
        const newState = update(oldstate, {$set : {password : event.target.value}});
        this.setState(newState);
    }

    handleEmailChange(event){
        //validate
        const oldstate = this.state.editData;
        const newState = update(oldstate, {$merge : {EMAIL : event.target.value}});
        this.setState({editData : newState});
    }
    handleFirstChange(event){
        const oldstate = this.state.editData;
        const newState = update(oldstate, {$merge : {FIRST : event.target.value}});
        this.setState({editData : newState});
    }
    handleLastChange(event){
        const oldstate = this.state.editData;
        const newState = update(oldstate, {$merge : {LAST : event.target.value}});
        this.setState({editData : newState});
    }
    returnToTable(){
        this.props.router.push(NavUrls.users);
    }
  render(){
        return(
            <div className="uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-heading-divider">User Editor</h2>
                <div className="uk-section uk-section-muted uk-padding">
                    <div className="uk-margin">
                        {this.props.params.id ?
                        <h4>{this.state.editData.USERNAME}</h4> :
                        <input className="uk-input"
                            placeholder="Username"
                            type="text"
                            value={this.state.editData.USERNAME} 
                            onChange={this.handleChange}/>}
                    </div>
                    <div className="uk-margin">
                        <input  className="uk-input"
                            placeholder="Password"
                            type="password"
                            value={this.state.password} 
                            onChange={this.handlepwChange}/>
                    </div>
                    <div className="uk-margin">
                        <input  className="uk-input"
                        placeholder="Email"
                        value={this.state.editData.EMAIL} 
                        onChange={this.handleEmailChange}/>
                    </div>
                    <div className="uk-margin">
                        <input  className="uk-input"
                        placeholder="First Name" 
                        value={this.state.editData.FIRST} 
                        onChange={this.handleFirstChange}/>
                    </div>
                    <div className="uk-margin">
                        <input  className="uk-input"
                        placeholder="Last Name" 
                        value={this.state.editData.LAST} 
                        onChange={this.handleLastChange}/>
                    </div>
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