import React from 'react';
import $ from 'jquery';
import {NavUrls, Urls} from "./Constants.jsx";
import NotFound from './NotFound.jsx';
export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            html : ''
        }
    }
    componentDidMount(){
        var closure = this;
        if(this.props.routeParams.cat && this.props.routeParams.slug){
             var promise = $.ajax({
            url : Urls.pagesController +"fetch/" + this.props.routeParams.cat + "/" + this.props.routeParams.slug,
            method : "GET"
            });
        }else{
            var promise= $.ajax({
                url : Urls.pagesController + this.props.routeParams.id,
                method : "GET"
            });
        }
       
        promise.done(function(data){
            closure.setState({html : data.BODY});
        });

        promise.fail(function(data){
            closure.setState({html : -1});
        });
        //query for the right page number.
        //this.params.cat and this.params.id
    }
    render(){
        return(
            <div>
            {
            this.state.html === -1 ?
            <NotFound />:
            <div className='pageContent' ref="pageContent" dangerouslySetInnerHTML={{__html : this.state.html}}></div>
            }

            </div>
        
        );
    }
}