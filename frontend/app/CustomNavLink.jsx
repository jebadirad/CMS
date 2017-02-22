import React from 'react';
import {NavLink} from 'react-router-dom';



export default class CustomNavLink extends React.Component{

    constructor(props){
        super(props);
    }



    render(){

        return(
            <li><NavLink to={this.props.to}>{this.props.children}</NavLink></li>
        );
    }
}