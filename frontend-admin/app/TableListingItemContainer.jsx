import React from 'react';
import $ from 'jquery';
import TableListingContainer from './TableListingContainer.jsx';

export default class TableListingItemContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        
        <div>
        <TableListingContainer
            router={this.props.router}
            url={this.props.route.url}
            api={this.props.route.api}
            title={this.props.route.title}
            headers={this.props.route.headers}
         />

        </div>
        
        );
    }

}