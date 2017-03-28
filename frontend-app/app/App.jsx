import React from 'react';
import Container from './Container.jsx';
import NavMenu from './NavMenu.jsx';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        

    }

    render(){

        return(<div className='app-container'>
            <NavMenu />
            <Container>
                {this.props.children}
            </Container>
        </div>);
    }


}