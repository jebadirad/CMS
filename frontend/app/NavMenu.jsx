import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
export default class NavMenu extends React.Component{

        constructor(props){
            super(props);
            this.changeMenu = this.changeMenu.bind(this);
    }

        changeMenu(item){
            this.props.onViewChange(item);
        }
        componentDidMount(){
            this.menuContainer.setAttribute("uk-navbar" , "");
            this.toggleIcon.setAttribute("uk-navbar-toggle-icon", '');
            this.toggleMenu.setAttribute("uk-toggle", "target: #offNavMenu");
            this.toggleLogo.setAttribute("uk-toggle", "target: #offNavMenu");
            this.offCanvas.setAttribute("uk-offcanvas" , "");
    }

    
        render(){
            const active = "uk-active";
            const canvasClose = "uk-offcanvas-close";
            var closure = this;
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
                    </div>
                    <div id='offNavMenu' ref={(div) => {this.offCanvas = div;}}>
                        <div className="uk-offcanvas-bar">
                            <div className='uk-width-1-2@s uk-width-2-5@m'>
                                <ul className='uk-nav uk-nav-default'>
                                    <li>
                                        <Link activeClassName="active" to="/" onlyActiveOnIndex={true}>Home</Link>
                                    </li>
                                    <li>
                                        <Link activeClassName="active" to="/webpages">Web Pages</Link>
                                    </li>
                                    <li>
                                        <Link activeClassName="active" to="/editor">Editor</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
}