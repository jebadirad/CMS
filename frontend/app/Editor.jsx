import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
require("style-loader!css-loader!..\\stylesheets\\quill\\quill.core.css");
require("style-loader!css-loader!..\\stylesheets\\quill\\quill.snow.css");
export default class Editor extends React.Component{

        constructor(props){
            super(props);
            this.onTextChange = this.onTextChange.bind(this);
            
}
        onTextChange(text){
            this.props.onEditorChange(text);
        }
        componentDidMount(){
        }

    
        render(){
            return(
                <div className='uk-section-default uk-box-shadow-xlarge'>
                    <ReactQuill value={this.props.value} 
                    theme="snow"
                    styles={false}
                    onChange={this.onTextChange} />
                </div>


            );
        }
}