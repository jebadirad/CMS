import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
require("style-loader!css-loader!..\\stylesheets\\quill\\quill.snow.css");
export class Editor extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                value : ""
            }
            this.onTextChange = this.onTextChange.bind(this);
}
        onTextChange(text){
            this.setState({value : text});
        }
        componentDidMount(){

    }

    
        render(){
            return(
                <div className='uk-section-default'>
                    <ReactQuill value={this.state.value} 
                    theme="snow"
                    onChange={this.onTextChange} />
                </div>


            );
        }
}