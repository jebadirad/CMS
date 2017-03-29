import React from 'react';
import $ from 'jquery';
import {NavUrls, Urls} from "./Constants.jsx";
import NotFound from './NotFound.jsx';
export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            html : '',
            title : '',
        }
        this.getPage = this.getPage.bind(this);
    }
    getPage(cat, slug){
    var closure = this;
        if(cat && slug){
             var promise = $.ajax({
            url : Urls.pagesController + cat + "/" + slug,
            method : "GET"
            });
        }else{
            var promise= $.ajax({
                url : Urls.pagesController + "fetch/" + cat,
                method : "GET"
            });
        }
       
        promise.done(function(data){
            closure.setState({html : data.BODY, title : data.TITLE});
        });

        promise.fail(function(data){
            closure.setState({html : -1});
        });
    }
    componentWillReceiveProps(nextProps){

        if(nextProps.routeParams.slug && nextProps.routeParams.cat){
            this.getPage(nextProps.routeParams.cat, nextProps.routeParams.slug);
        }else{
            this.getPage(nextProps.routeParams.id);
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.props.routeParams !== nextProps.routeParams || this.state.html !== nextState.html;
    }
    componentDidMount(){
        if(this.props.routeParams.slug && this.props.routeParams.cat){
            this.getPage(this.props.routeParams.cat, this.props.routeParams.slug);
        }else{
            this.getPage(this.props.routeParams.id);
        }
        //query for the right page number.
        //this.params.cat and this.params.id
    }
    render(){
        return(
            <div>
            {
            this.state.html === -1 ?
            <NotFound />:
            <div className='pageContainer'>
            <div className='titleContent'><h3>{this.state.title}</h3></div>
            <div className='pageContent' ref="pageContent" dangerouslySetInnerHTML={{__html : this.state.html}}></div>
            </div>}

            </div>
        
        );
    }
}