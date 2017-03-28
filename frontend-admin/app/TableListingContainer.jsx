import React from 'react';
import TableListing from './TableListing.jsx';
import $ from 'jquery';
import update from 'immutability-helper';
export default class TableListingContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editID : 0,
            
            data : [],
            query : ""
        };
        this.onFilterChange = this.onFilterChange.bind(this);
        this.handleNewClick = this.handleNewClick.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    handleNewClick(){
        this.props.router.push(this.props.url + "/new");
    }
    fetchData(api){
        var closure = this;
        var promise = $.ajax({
                url: api + "query",
                method: "GET",
            });
            promise.done(function(data){
                var mappedData = data.map(function(page){
                    var itemArr = [];
                    for(var i =0; i < closure.props.headers.length; i++){
                        itemArr.push(page[closure.props.headers[i]]);
                    }
                    return itemArr;
                });
                //implement immutable
                const oldData = closure.state;
                const newData = update(oldData, {$set : {data : mappedData, query : ""}});
                closure.setState(newData);
            });
            promise.fail(function(){
            });
            //fetch table headers bas
    }
    componentDidMount(){
        this.makeGrid.setAttribute("uk-grid", "");
        this.fetchData(this.props.api);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.api !== this.props.api || nextProps.url !== this.props.url){
            this.fetchData(nextProps.api);

        }
        
    }
    componetShouldUpdate(newprops, newstate){
        return newstate !== this.state || newprops.url !== this.props.url;
    }
    onFilterChange(event){
        const oldstate = this.state;
        const newState = update(oldstate,{$merge : {query: event.target.value}});
        this.setState(newState);
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
                                    <input value={this.state.query} className="uk-input uk-form-width-large" type="text" placeholder="Filter" onChange={this.onFilterChange}/>
                                </div>
                            </div>
                            <div className="uk-form-controls uk-width-1-4">
                                <button className="uk-button uk-button-primary" onClick={this.handleNewClick}>New Item</button>
                            </div>
                        </div>
                </div>
                <div className="uk-section uk-section-default uk-padding-remove-top">
                    <TableListing  url={this.props.url} router={this.props.router} headers={this.props.headers} data={this.state.data}  filter={this.state.query}/>
                </div>
            
            </div>
        </div>


        );


    }

}