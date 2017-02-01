import React from 'react';
import ReactDOM from 'react-dom';
import {Editor} from "./Editor.jsx";
export class NewPageForm extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                editData : ""
            }
            this.handleEditorChange = this.handleEditorChange.bind(this);
            this.submitHandler = this.submitHandler.bind(this);
            this.previewHandler = this.previewHandler.bind(this);
        }


        handleEditorChange(text){
            //set the data;
            this.setState({editData : text});
        }
        submitHandler(){
            //ajax save and call props to navigate out
            this.props.submitCallback();
        }
        previewHandler(){
            //later
        }
        componentDidMount(){
            if(this.props.pageId){
                //ajax call to get the data. 
                //this.setState({data : new data here });
            }
        }
        render(){
            return(
                <div className="uk-padding uk-padding-remove-horizontal">
                    <h2 className="uk-heading-divider">Page Editor</h2>
                    <div className='uk-section uk-section-muted uk-padding'>
                        <p className="uk-text-lead">Use the section below to modify the contents of the web page</p>
                      <Editor value={this.state.editData} onEditorChange={this.handleEditorChange} />
                    </div>
                    <div className="uk-margin">
                        <button onClick={this.previewHandler} className="uk-button uk-button-secondary">Preview</button>
                        <button onClick={this.submitHandler} className="uk-button uk-button-primary">Submit</button>
                    </div>
                </div>


            );
        }
}