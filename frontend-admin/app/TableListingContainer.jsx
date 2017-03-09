import React from 'react';
import ReactDOM from 'react-dom';
import TableListing from "./TableListing.jsx";
import Toast from './Toast.jsx';
import {NavUrls} from './Constants.jsx';
export default class TableListingContainer extends React.Component{
    constructor(props){
        super(props);
         this.state = {
                
                editId : 0,
                headers : ["ID", "Title", "Slug", "Created By", "Modified By"],
                data : [],
                query: "",
                
            };
     
        this.onFilterChange = this.onFilterChange.bind(this);
        this.handleNewPageClick = this.handleNewPageClick.bind(this);
}
    handleNewPageClick(){
        this.props.router.push(NavUrls.webpages +"/new");
        
    }
    


    componentDidMount(){
    this.makeGrid.setAttribute("uk-grid" , "");
    var closure = this;
            var promise = $.ajax({
                url: this.props.url,
                method: "GET",
            });
            promise.done(function(data){
                var mappedData = data.map(function(page){
                    return [page.ID, page.TITLE, page.SLUG, page.CREATEDBY, page.MODIFIEDBY];
                });
                //implement immutable

                closure.setState({data : mappedData});
            });
            promise.fail(function(){
            });
            //fetch table headers bas
    }
    onFilterChange(event){
        this.setState({query : event.target.value});
    }
    render(){
        return(
        <div>
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
                                <button className="uk-button uk-button-primary" onClick={this.handleNewPageClick}>New Item</button>
                            </div>
                        </div>
                </div>
                <div className="uk-section uk-section-default uk-padding-remove-top">
                    <TableListing  router={this.props.router} headers={this.state.headers} data={this.state.data}  filter={this.state.query}/>
                </div>
            
            </div>
        </div>
        );


    }


}