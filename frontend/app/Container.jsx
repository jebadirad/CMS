import React from 'react';
import ReactDOM from 'react-dom';
export class Container extends React.Component{

        constructor(props){
            super(props);
    }
        componentDidMount(){

    }

    
        render(){
            return(
                <div className='uk-container'>
                   {this.props.children}
                </div>

            );
        }
}