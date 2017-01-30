import React from 'react';
import ReactDOM from 'react-dom';
import {NavMenu} from './NavMenu.jsx'
import {Container} from "./Container.jsx";
require("style-loader!css-loader!..\\node_modules\\uikit\\dist\\css\\uikit.min.css");
require("script-loader!..\\node_modules\\jquery\\dist\\jquery.js");
require("script-loader!..\\node_modules\\uikit\\dist\\js\\uikit.js");
export class AdminPanel extends React.Component{

        constructor(props){
            super(props);
    }

    
        componentDidMount(){
        }
    
        render(){
            return(
                <div>
                    <NavMenu />
                    <Container>
                        <p>this is the frame</p>
                    </Container>
                </div>
            );
        }
}




ReactDOM.render(
    <AdminPanel />,
  document.getElementById('main')
);