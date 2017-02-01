import React from 'react';
import ReactDOM from 'react-dom';
import {TableListing} from "./TableListing.jsx";
export class TableListingContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            query : ""
        };
        this.onFilterChange = this.onFilterChange.bind(this);
}



    componentDidMount(){

    }
    onFilterChange(event){
        this.setState({query : event.target.value});
    }
    render(){

        return(
            <div className="uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-heading-divider">{this.props.title}</h2>
                <div className="uk-section uk-section-muted uk-padding">
                        <div className="uk-margin">
                            <input className="uk-input uk-form-width-medium" type="text" placeholder="Filter" onChange={this.onFilterChange}/>
                        </div>

                </div>
                <div className="uk-section uk-section-default uk-padding-remove-top">
                    <TableListing url="" filter={this.state.query}/>
                </div>
            </div>
        );


    }


}