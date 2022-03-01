import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours'; 
import data from '../../data/db.json';

class Home extends Component {
    render() { 
        return (
            <div>
                <Header />
                <Tours tours={data} />
                <Footer />
            </div>
        );
    }
}
export default Home;
