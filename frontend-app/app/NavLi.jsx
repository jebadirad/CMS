import React from 'react';

export default class NavLi extends React.Component{
    constructor(props){
        super(props);
        this.handleNavClick = this.handleNavClick.bind(this);
    }
    handleNavClick(){
        if(this.props.url){
            this.props.router.push({pathname : this.props.url});
        }
    }

    render(){
        return(<div>
            <li onClick={this.handleNavClick}>{this.props.title}
            {
                this.props.children ? <ul>{this.props.children}</ul> : null
            }

            </li>
        </div>);
    }

}