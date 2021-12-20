import React, { Component } from 'react'
import FooterComponent from '../components/footer';
import HeaderHome from '../components/header';
class Home extends Component {
    render() { 
        return (
        <div>
            <HeaderHome></HeaderHome>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <FooterComponent></FooterComponent>     
        </div>
        );
    }
}
 
export default Home;