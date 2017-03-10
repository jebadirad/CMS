import React from 'react';
import Toast from './Toast.jsx';
import update from 'immutability-helper';
export default class ToastWrapper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message : {
                message : '',
                status : "primary",
                pos : "bottom-center"
            }
        }
        this.pushNotification = this.pushNotification.bind(this);
    }
    pushNotification(message){
            this.setState({message : update(this.state.message, {$merge : message})});
        }

    render(){
        var closure = this;
        const childrenWithProps = React.Children.map(this.props.children,
        function(child){
            return React.cloneElement(child, {
                notify : closure.pushNotification
            });
        }
        );
        return(
            <div>
                {childrenWithProps}
                <Toast message={this.state.message.message} status={this.state.message.status} pos={this.state.message.pos} />
            </div>


        );
    }


}