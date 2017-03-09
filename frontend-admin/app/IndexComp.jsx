import React from 'react';
import ReactDOM from 'react-dom';
import {NavUrls} from "./Constants.jsx";
import Home from './Home.jsx';
import WebPageController from "./controllers/WebPageController.jsx";
import TableListingWebPages from './TableListingWebPages.jsx';
import NewPageForm from './NewPageForm.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import AdminPanel from './app.jsx';
export default class IndexComp extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
    return( 
                 <Router history={browserHistory}>
                    <Route exact={false} strict={false} path={NavUrls.home} component={AdminPanel} >
                        <IndexRoute component={Home} />
                        <Route exact={false} strict={false} path={NavUrls.webpages} component={WebPageController}>
                            <IndexRoute component={TableListingWebPages}/>
                            <Route exact={false} strict={false} path={NavUrls.webpages + "/new"} component={NewPageForm} />
                            <Route exact={false} strict={false} path={NavUrls.webpages + "/edit/:id"} component={NewPageForm} />
                        </Route>
                        <Route exact={false} strict={false} path={NavUrls.users} component={WebPageController}>
                        </Route>
                    </Route>
                </Router>
                );
    }

}

ReactDOM.render(
   <IndexComp />,
  document.getElementById('main')
);