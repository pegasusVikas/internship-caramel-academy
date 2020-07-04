import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Backend from './Backend'

//import 'aos/dist/aos.css';

 const  MainBackend = () => {
   
  return (
    <div>
      <Navbar/>

      <Backend/>
      <Footer/>
    </div>
  )
}

export default MainBackend;
