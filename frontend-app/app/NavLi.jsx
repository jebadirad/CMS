import React from 'react';

export default class NavLi extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(<div>
            <li>{this.props.title}
            {
                this.props.children ? <ul>{this.props.children}</ul> : null
            }

            </li>
        </div>);
    }

}