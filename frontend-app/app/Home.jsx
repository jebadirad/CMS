import React from 'react';
import $ from 'jquery';
import Content from './Content.jsx';
import {NavUrls, Urls} from "./Constants.jsx";
import NotFound from './NotFound.jsx';
export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            html : ''
        }
    }
    componentDidMount(){
        var promise = $.ajax({
            url : Urls.pagesController  + this.props.route.cat + "/" + this.props.route.slug,
            method : "GET"
        });
        var closure = this;
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
        return(<div>
            <h2>hi</h2>
            {
            this.state.html === -1 ?
            <NotFound />:
            <div className='pageContent' ref="pageContent" dangerouslySetInnerHTML={{__html : this.state.html}}></div>
            }
        </div>);

    }

}