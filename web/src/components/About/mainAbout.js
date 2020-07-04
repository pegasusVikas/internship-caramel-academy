import React from 'react';
import Header from './Header.js';
import Profiles from './Profiles';
import Footer from './Footer';
import Navbar from './Navbar';
import History from './History';
import IconSection from './IconSection';
import ImageSection from './ImageSection';

 const  MainAbout = () => {
    return (
        <div>
        <Navbar/>
        <ImageSection/>
        <Header/>
        <IconSection/>
        <Profiles/>
        <History/>
        <Footer/>
        </div>
    )
}

export default MainAbout;