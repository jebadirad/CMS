import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Urls} from '../app/Constants.jsx';
require("style-loader!css-loader!..\\node_modules\\uikit\\dist\\css\\uikit.min.css");
require("script-loader!..\\node_modules\\uikit\\dist\\js\\uikit.js");

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var promise = $.ajax({
            url : Urls.usersController + "authme",
            method: "GET",

        });
        promise.done(function(data){
            //nothing we should be redirected or stay here;
        });
        promise.fail(function(xhr, status ,errror){
            //
        });
    }

    render(){
        <div>
            <Container>
                <form className="uk-form-stacked">
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">
                            Login
                        </legend>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Username" />
                        </div>    
                        <div className="uk-margin">
                            <input className="uk-input" type="password" placeholder="Username" />
                        </div>     
                        <div classname="uk-margin">
                            <button className="uk-button uk-button-primary">
                                Submit
                            </button>
                        </div>                
                    </fieldset>
                </form>
            </Container>
        </div>
    }


}









ReactDOM.render(
    <Login />, document.getElementById("main") );