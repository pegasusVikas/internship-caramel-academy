import React from 'react';
import Header from './Header';
import CoverSection1 from './CoverSection1';
import CoverSection2 from './CoverSection2';
import CoverSection3 from './CoverSection3';
import Footer from './Footer';
import NavSection from './NavSection';
import ServiceDesign from './ServiceDesign';

 const  MainCloudcomputing = () => {
    return (
        <div>
        <NavSection/>
        <Header />
        <CoverSection1 />
        <CoverSection2 />
        <ServiceDesign/>
        <CoverSection3/>
        <Footer/>
        </div>
    )
}

export default MainCloudcomputing;
