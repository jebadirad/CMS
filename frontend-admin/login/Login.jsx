import React from 'react';
import ReactDOM from 'react-dom';
import {Urls, NavUrls} from '../app/Constants.jsx';
import {Container} from "../app/Container.jsx";
require("script-loader!..\\node_modules\\jquery\\dist\\jquery.js");
require("style-loader!css-loader!..\\node_modules\\uikit\\dist\\css\\uikit.min.css");
require("script-loader!..\\node_modules\\uikit\\dist\\js\\uikit.js");

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        var promise = $.ajax({
            url : Urls.usersController + "authme",
            method: "GET",

        });
        promise.done(function(data){
            if(data === "true"){
                window.location = "/admin";
            }
        });
        promise.fail(function(xhr, status ,errror){
            //
        });
    }
    handleSubmit(){

    }
    render(){
        return(<div>
            <Container>
                <form className="uk-form-stacked" method="POST" action={Urls.base  + "login"}>
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">
                            Login
                        </legend>
                        <div className="uk-margin">
                            <input name='username' className="uk-input" type="text" placeholder="Username" />
                        </div>    
                        <div className="uk-margin">
                            <input name='password' className="uk-input" type="password" placeholder="Password" />
                        </div>     
                        <div className="uk-margin">
                            <button className="uk-button uk-button-primary">
                                Submit
                            </button>
                        </div>                
                    </fieldset>
                </form>
            </Container>
        </div>);
    }
}

ReactDOM.render(
    <Login />, document.getElementById("main") );