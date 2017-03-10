import React from 'react';
import ReactDOM from 'react-dom';
import {NavUrls, Urls} from "./Constants.jsx";
import Home from './Home.jsx';
import ToastWrapper from './ToastWrapper.jsx';
import TableListingItemContainer from './TableListingItemContainer.jsx';
import NewPageForm from './NewPageForm.jsx';
import NewCatForm from './NewCatForm.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import AdminPanel from './app.jsx';
export default class IndexComp extends React.Component{
    constructor(props){
        super(props);
        this.webPageTableheaders = ["ID", "TITLE", "SLUG", "CREATEDBY", "MODIFIEDBY"];
        this.CatTableHeaders = ["ID", "HEADING"];
    }
    render(){
    return(
        <Router history={browserHistory}>
        <Route exact={false} strict={false} path={NavUrls.home} component={AdminPanel} >
            <IndexRoute component={Home} />
            <Route exact={false} strict={false} path={NavUrls.webpages} component={ToastWrapper}>
                <IndexRoute url={NavUrls.webpages} api={Urls.pagesController} title="My Pages" headers={this.webPageTableheaders} component={TableListingItemContainer}/>
                <Route exact={false} strict={false} path={NavUrls.webpages + "/new"} component={NewPageForm} />
                <Route exact={false} strict={false} path={NavUrls.webpages + "/edit/:id"} component={NewPageForm} />
            </Route>
            <Route exact={false} strict={false} path={NavUrls.categories} component={ToastWrapper}>
                <IndexRoute url={NavUrls.categories} api={Urls.catController} title="My Headings" headers={this.CatTableHeaders} component={TableListingItemContainer} />
                <Route exact={false} strict={false} path={NavUrls.categories + "/new"} component={NewCatForm} />
                <Route exact={false} strict={false} path={NavUrls.categories + "/edit/:id"} component={NewCatForm} />
            </Route>
            <Route exact={false} strict={false} path={NavUrls.users} component={ToastWrapper}>
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