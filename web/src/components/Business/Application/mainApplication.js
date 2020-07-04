import React from 'react';
import Header from './Header.js';
import CoverSection from './CoverSection';
import Footer from './Footer';
import NavSection from './NavSection';

 const  MainApplication = () => {
    return (
        <div>
        <NavSection/>
        <Header />
        <CoverSection />
        <Footer/>
        </div>
    )
}

export default MainApplication;