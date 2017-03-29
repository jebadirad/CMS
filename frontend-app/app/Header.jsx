import React from 'react';
import NavMenu from './NavMenu.jsx';


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>header stuff</p>
                <NavMenu router={this.props.router}/>
            </div>
        )
    }
}