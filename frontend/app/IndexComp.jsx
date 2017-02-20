import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from "./Container.jsx";
import Home from './Home.jsx';
import WebPageController from "./controllers/WebPageController.jsx";
import Editor from './Editor.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import update from "immutability-helper";
import AdminPanel from './app.jsx';
export default class IndexComp extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
    return( 
                 <Router history={browserHistory}>
                    <Route path='/' component={AdminPanel} >
                        <IndexRoute component={Home} />
                        <Route path="/webpages" component={WebPageController}>
                            <IndexRoute component={WebPageController}/>
                            <Route path="/webpages/new" component={NewPageForm} />
                        </Route>
                        <Route path="/editor" component={Editor} />
                    </Route>
                   

                </Router>
                );
    }

}

ReactDOM.render(
   <IndexComp />,
  document.getElementById('main')
);