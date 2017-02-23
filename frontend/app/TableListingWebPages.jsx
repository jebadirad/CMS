import React from 'react';
import $ from 'jquery';
import {Urls} from './Constants.jsx';
import TableListingContainer from "./TableListingContainer.jsx";

export default class TableListingWebPages extends React.Component{

    constructor(props){
        super(props);
    }

    render(){   
        return(<div>
            <TableListingContainer router={this.props.router} url ={Urls.pagesController + "query"} title="My Pages" />
        </div>
        );

    }

}