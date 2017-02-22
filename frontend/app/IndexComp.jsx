import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from "./Container.jsx";
import Home from './Home.jsx';
import WebPageController from "./controllers/WebPageController.jsx";
import TableListingWebPages from './TableListingWebPages.jsx';
import NewPageForm from './NewPageForm.jsx';
import Editor from './Editor.jsx';
import TableListingContainer from './TableListingContainer.jsx'
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
                    <Route path='/admin' component={AdminPanel} >
                        <IndexRoute component={Home} />
                        <Route path="/admin/webpages" component={WebPageController}>
                            <IndexRoute component={TableListingWebPages}/>
                            <Route path="/admin/webpages/new" component={NewPageForm} />
                            <Route path="/admin/webpages/edit/:ID" componet={Editor} />
                        </Route>
                        <Route path="/admin/editor" component={Editor} />
                    </Route>
                   

                </Router>
                );
    }

}

ReactDOM.render(
   <IndexComp />,
  document.getElementById('main')
);