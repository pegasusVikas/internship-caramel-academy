import React from 'react';
import Header from './Header.js';
import CoverSection1 from './CoverSection1';
import CoverSection2 from './CoverSection2';
import Footer from './Footer';
import NavSection from './NavSection';
import OurStories from './OurStories';

 const  MainLifescience = () => {
    return (
        <div>
        <NavSection/>
        <Header />
        <CoverSection1 />
        <CoverSection2 />
        <OurStories/>
        <Footer/>
        </div>
    )
}

export default MainLifescience;