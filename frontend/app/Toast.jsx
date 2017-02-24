import React from 'react';

export default class Toast extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }    
    shouldComponentUpdate(nextprops){
        if(nextprops.message){
            if(nextprops.message === this.props.message){
                return false;
            }
        }
        if(nextprops.message.length == 0){
            return false;
        }
            return true;
    }
    componentWillUpdate(nextProps){
        
        var options = this.notificationOptions;
                UIkit.notification(
                {
                    message : nextProps.message,
                    status : nextProps.status,
                    pos: this.props.pos ? this.props.pos : "bottom-center"
            });
        
    }

    render(){
        
        return(
            <div ref={(div) => this.notification = div}></div>
        )
    }
}