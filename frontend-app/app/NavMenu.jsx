import React from 'react';
import $ from 'jquery';
import {NavUrls, Urls} from "./Constants.jsx";
import update from 'immutability-helper';
import NavLi from './NavLi.jsx';
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
        var nav = [];
        for(var id in this.state.pages){
            if(this.state.pages.hasOwnProperty(id)){
                const navchildren = this.state.pages[id].map(function(child){
                    return <NavLi key={child.ID} title={child.TITLE} />
                });
                nav.push(<NavLi key={id} title={id}>{navchildren}</NavLi>);
            }
        }
        return(<div>
            <ul>{nav}</ul>
        </div>);
    }

}