import React from 'react';
import Header from './Header';
import CoverSection from './CoverSection';
import ServiceSection from './ServiceSection';
import IndustriesSection from './IndustriesSection';
import Footer from './Footer';
import NavSection from './NavSection';

 const  MainDatascience = () => {
    return (
        <div>
        <NavSection/>
        <Header />
        <CoverSection />
        <ServiceSection />
        <IndustriesSection/>
        <Footer/>
        </div>
    )
}

export default MainDatascience;
