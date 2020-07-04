import React from 'react';
import Header from './Header';
import SpecialSection1 from './SpecialSection1';
import Servicessection from './Servicessection';
import Footer from './Footer';
import NavSection from './NavSection';
import IndustriesSection from './IndustriesSection';

 const  MainArtificial = () => {
    return (
        <div>
        <NavSection/>
        <Header />
        <SpecialSection1 />
        <Servicessection />
        <IndustriesSection/>
        <Footer/>
        </div>
    )
}

export default MainArtificial;
