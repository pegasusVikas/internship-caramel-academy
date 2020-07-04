import React from 'react';
import Header from './Header';
import ServiceSection from './ServiceSection';
import IndustriesSection from './IndustriesSection';
import Footer from './Footer';
import NavSection from './NavSection';
import CoverSection from './CoverSection';


 const  MainFutureworkforce = () => {
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

export default MainFutureworkforce;
