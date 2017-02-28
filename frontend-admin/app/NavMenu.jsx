import React from 'react';
import ReactDOM from 'react-dom';
import CustomNavLink from './CustomNavLink.jsx';
import {NavUrls} from './Constants.jsx';
import $ from 'jquery';
export default class NavMenu extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                username : ""
            };
            this.changeMenu = this.changeMenu.bind(this);
    }

        changeMenu(item){
            this.props.onViewChange(item);
        }
        componentDidMount(){
            var promise = $.ajax({
                url: "",
                method :"GET"
            });
            var closure = this;
            promise.done(function(data){
                closure.setState({username : data});
            });
            promise.fail(function(data){

            })
            this.menuContainer.setAttribute("uk-navbar" , "");
            this.toggleIcon.setAttribute("uk-navbar-toggle-icon", '');
            this.toggleMenu.setAttribute("uk-toggle", "target: #offNavMenu");
            this.toggleLogo.setAttribute("uk-toggle", "target: #offNavMenu");
            this.offCanvas.setAttribute("uk-offcanvas" , "");
    }

    
        render(){
            const active = "uk-active";

            var closure = this;

            var navId = "offNavMenu"
            return(
                <div>
                    <div className='uk-navbar-container' ref={(div) => {this.menuContainer = div;}}>
                        <div className='uk-navbar-left'>
                            <a onClick={this.preventNav} className='uk-navbar-toggle'  ref={(div) => {this.toggleMenu = div;}}>
                                <span ref={(div) => {this.toggleIcon = div;}}></span>
                            </a>
                            <a onClick={this.preventNav} className="uk-navbar-item uk-logo uk-navbar-toggle" ref={(div) => {this.toggleLogo = div;}}>
                                Logo
                           </a>
                        </div>
                        <div className="uk-navbar-right">
                            <span>{this.state.username}</span>
                        </div>
                    </div>
                    <div id={navId} ref={(div) => {this.offCanvas = div;}}>
                        <div className="uk-offcanvas-bar">
                            <div className='uk-width-1-2@s uk-width-2-5@m'>
                                <ul className='uk-nav uk-nav-default'>
                                        <CustomNavLink menuToClose={navId} activeClassName="uk-active" to={NavUrls.home} exact={true} >Home</CustomNavLink>
                                        <CustomNavLink menuToClose={navId} activeClassName="uk-active" to={NavUrls.webpages} exact={true}>Web Pages</CustomNavLink>
                                        <CustomNavLink menuToClose={navId} activeClassName="uk-active" to={NavUrls.webpages} exact={true}>User Management</CustomNavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
}