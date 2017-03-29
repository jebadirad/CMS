import React from 'react';
import Container from './Container.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        

    }

    render(){

        return(<div className='app-container'>
            <Header router={this.props.router} />
            <Container>
                {this.props.children}
            </Container>
            <Footer />
        </div>);
    }


}