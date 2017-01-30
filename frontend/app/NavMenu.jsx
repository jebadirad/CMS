import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require("style-loader!css-loader!..\\node_modules\\uikit\\dist\\css\\uikit.min.css");
export class NavMenu extends React.Component{

        constructor(props){
            super(props);
    }

    
        componentDidMount(){
        }
    
        render(){
           
            return(
                <div>
                    <div>
                        <ul className='uk-list uk-list-large'>
                            <li>category1</li>
                            <li>Category2</li>
                        </ul>
                    </div>
                    <div>
                        <p>this is the frame</p>
                    </div>
                </div>
            );
        }
}




ReactDOM.render(
    <AdminPanel />,
  document.getElementById('main')
);