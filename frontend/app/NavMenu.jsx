import React from 'react';
import ReactDOM from 'react-dom';
export class NavMenu extends React.Component{

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
            return(
                <div>
                    <div className='uk-navbar-container' ref={(div) => {this.menuContainer = div;}}>
                        <div className='uk-navbar-left'>
                            <a onClick={this.preventNav} className='uk-navbar-toggle' href="#" ref={(div) => {this.toggleMenu = div;}}>
                                <span ref={(div) => {this.toggleIcon = div;}}></span>
                            </a>
                            <a className="uk-navbar-item uk-logo uk-navbar-toggle" href="#" ref={(div) => {this.toggleLogo = div;}}>
                                Logo
                            </a>
                        </div>
                    </div>
                    <div id='offNavMenu' ref={(div) => {this.offCanvas = div;}}>
                        <div className="uk-offcanvas-bar">
                            <div className='uk-width-1-2@s uk-width-2-5@m'>
                                <ul className='uk-nav uk-nav-default'>
                                    <li className={this.props.active === "home"? active + " " + canvasClose : canvasClose } onClick={() => this.changeMenu('home')}>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className={this.props.active === 'table'? active + ' ' + canvasClose : canvasClose } onClick={() => this.changeMenu("webpages")}>
                                        <a href="#">Web Pages</a>
                                    </li>
                                    <li className={this.props.active === 'editor'? active + ' ' + canvasClose : canvasClose }  onClick={() =>this.changeMenu("editor")}>
                                        <a href="#">Editor</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
}