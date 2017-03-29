import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
export default class Preview extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(<div><App>
            <div dangerouslySetInnerHTML={{__html: window['dangerousHtml']}}></div>
        </App></div>);
    }
}


ReactDOM.render(
   <Preview />,
  document.getElementById('main')
);