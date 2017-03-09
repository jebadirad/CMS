import React from 'react';
import {Container} from "./Container.jsx";
import NavMenu from './NavMenu.jsx';
require("style-loader!css-loader!..\\node_modules\\uikit\\dist\\css\\uikit.min.css");
require("script-loader!..\\node_modules\\jquery\\dist\\jquery.js");
require("script-loader!..\\node_modules\\uikit\\dist\\js\\uikit.js");
export default class AdminPanel extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                notificationMessage :""

            }
    }
        componentDidMount(){
        }
    
        render(){
          /*  var body = <p>this is the frame</p>;
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
            */
            

            return(
                <div>
                    <NavMenu />
                    <Container>
                        {this.props.children}
                    </Container>
                </div>
            );
        }
}