import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import React from 'react';


const Home = () => {
    return (
        <div>
            
            <Header/>

            <div className="container text-muted">
                <Section/>
                <Footer/>
            </div>
            
        </div>
    );
};



export default Home;
