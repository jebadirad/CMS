import React from 'react';
import ReactDOM from 'react-dom';
import TableListing from "./TableListing.jsx";
export default class TableListingContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            query : ""
        };
        this.onFilterChange = this.onFilterChange.bind(this);
        this.newItemHandler = this.newItemHandler.bind(this);
}
    componentDidMount(){
    this.makeGrid.setAttribute("uk-grid" , "");
    }
    newItemHandler(){
        this.props.newItem();
    }
    onFilterChange(event){
        this.setState({query : event.target.value});
    }
    render(){

        return(
            <div className="uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-heading-divider">{this.props.title}</h2>
                <div className="uk-section uk-section-muted uk-padding">
                        <div className="uk-margin uk-grid-small"  ref={(div) => {this.makeGrid = div;}}>
                            <div className="uk-width-3-4">
                                <div className="uk-form-controls">
                                    <input className="uk-input uk-form-width-large" type="text" placeholder="Filter" onChange={this.onFilterChange}/>
                                </div>
                            </div>
                            <div className="uk-form-controls uk-width-1-4">
                                <button onClick={this.newItemHandler} className="uk-button uk-button-primary">New Item</button>
                            </div>
                        </div>
                </div>
                <div className="uk-section uk-section-default uk-padding-remove-top">
                    <TableListing headers={this.props.headers} data={this.props.data} onClickItem={this.props.onClickItem} filter={this.state.query}/>
                </div>
            </div>
        );


    }


}