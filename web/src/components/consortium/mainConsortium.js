import React from 'react';
import NavSection from './NavSection';
import Header from '../consortium/Header';
import SuccessSection  from './SuccessSection';
import YourNeeds1 from './YourNeeds1';
import YourNeeds2 from './YourNeeds2';
import ClientPartners from './ClientPartners';
import TrendingNews from './TrendingNews';
import Footer from '../consortium/Footer';


 const  MainConsortium = () => {
    return (
        <div>
        <NavSection />
        <Header />
        <SuccessSection />
        <YourNeeds1 />
        <YourNeeds2 />
        <ClientPartners />
        <TrendingNews />
        <Footer/>
        </div>
    )
}

export default MainConsortium;
