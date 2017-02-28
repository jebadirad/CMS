import React from 'react';
import {NavLink} from 'react-router-dom';



export default class CustomNavLink extends React.Component{

    constructor(props){
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu(){
        UIkit.offcanvas("#" + this.props.menuToClose)[0].toggle();
}



    render(){
        const canvasClose = "uk-offcanvas-close";
        var active = null;
        if(this.props.exact){
            if(location.pathname == this.props.to || location.pathname.substr(0, location.pathname.length -1) == this.props.to){
                active= this.props.activeClassName;
            }
        }else{
            if(this.props.to.startsWith(location.path) ){
                active = this.props.activeClassName;
            }
        }
        return(
            <li onClick={this.closeMenu} className={active}><NavLink exact={this.props.exact} to={this.props.to} activeClassName={this.props.activeClassName}>{this.props.children}</NavLink></li>
        );
    }
}