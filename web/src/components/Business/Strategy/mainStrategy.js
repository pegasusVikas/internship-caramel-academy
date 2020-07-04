import React from 'react';
import Header from './Header.js';
import CoverSection from './CoverSection';
import Footer from './Footer';
import NavSection from './NavSection';

 const  MainStrategy = () => {
    return (
        <div>
        <NavSection/>
        <Header />
        <CoverSection />
        <Footer/>
        </div>
    )
}

export default MainStrategy;