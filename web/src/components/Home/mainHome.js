import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import Certification from './Certification';
import Partners from './Partners';
import Footer from './Footer';

 const  MainHome = () => {
    return (
        <div>
        <Navbar />
        <Header />
        <Services />
        <Certification />
        <Partners/>
        <Footer/>
        </div>
    )
}

export default MainHome;
