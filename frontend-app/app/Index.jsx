import React from 'react';
import ReactDOM from 'react-dom';
import {NavUrls, Urls} from "./Constants.jsx";
import App from './App.jsx';
import Content from './Content.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <Router history={browserHistory}>
        <Route exact={false} strict={false} path={NavUrls.home} component={App} >
            <IndexRoute slug="fdsa" cat="fddd1111" component={Home} />
            <Route exact={false} strict={false} path={NavUrls.home + "/contact"} component={Contact} />
            <Route exact={false} strict={false} path={NavUrls.home + ":cat/:slug"} component={Content} />
            <Route exact={false} strict={false} path={NavUrls.home + ":id"} component={Content} />
        </Route>
    </Router>
    );
    }

}

ReactDOM.render(
   <Index />,
  document.getElementById('main')
);