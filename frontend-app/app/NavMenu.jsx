import React from 'react';
import $ from 'jquery';
import {NavUrls, Urls} from "./Constants.jsx";
import update from 'immutability-helper';
export default class NavMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pages : {}
        }
    }

    componentDidMount(){
        //jquery 
        var promise = $.ajax({
            url : Urls.pagesController + "queryactive",
            method : "GET"
        });
        var closure = this;
        promise.done(function(data){
            var mapped = {
                pages : {}
            };
            
            for(var i = 0; i < data.length; i ++){
                debugger;
                if(mapped.pages[data[i].HEADING] && mapped.pages[data[i].HEADING]){
                    mapped.pages[data[i].HEADING].push(data[i]);
                }else{
                    mapped.pages[data[i].HEADING] = [];
                    mapped.pages[data[i].HEADING].push(data[i]);
                }
            }
            const oldData = closure.state.pages;
            const newData = update(oldData, {$merge: {pages: mapped.pages}});
            closure.setState(newData);
        });
        promise.fail(function(data){

        });
    }

    render(){
        return(<div></div>);
    }

}