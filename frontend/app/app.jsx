import React from 'react';
import ReactDOM from 'react-dom';
import {NavMenu} from './NavMenu.jsx'
import {Container} from "./Container.jsx";
import {WebPageController} from "./controllers/WebPageController.jsx";
import {Editor} from './Editor.jsx';

import update from "immutability-helper";

require("style-loader!css-loader!..\\node_modules\\uikit\\dist\\css\\uikit.min.css");
require("script-loader!..\\node_modules\\jquery\\dist\\jquery.js");
require("script-loader!..\\node_modules\\uikit\\dist\\js\\uikit.js");
export class AdminPanel extends React.Component{

        constructor(props){
            super(props);
            this.state ={
                view : "home"
            }
            this.viewChange = this.viewChange.bind(this);
    }
        viewChange(view){
            this.setState({view : view});
        }
    
        componentDidMount(){
        }
    
        render(){
            var body = <p>this is the frame</p>;
            switch(this.state.view){
                case "home":
                body =  <p>this is the frame</p>;
                break;
                case "webpages":
                body = <WebPageController url={this.props.url + this.props.pageUrl} />;
                break;
                case "editor":
                body =<Editor />;
                break;
                default:
                body =  <p>this is home</p>
                break;
            }




            return(
                <div>
                    <NavMenu active={this.state.view} onViewChange={this.viewChange} />
                    <Container>
                        {body}
                    </Container>
                </div>
            );
        }
}




ReactDOM.render(
    <AdminPanel url="/admin" pageUrl="/pages" />,
  document.getElementById('main')
);