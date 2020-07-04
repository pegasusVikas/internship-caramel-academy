import React from 'react'
import Navbar from './Navbar'
//import Software1 from './Software1'
import Footer from './Footer'
import Software from './Software'
import Software2 from './Software2'


const MainProgram = () => {
  return (
    <div>
      <Navbar/>
      <Software/>
      {/* <Software1/> */}
      <Software2/>
      <Footer/>
    </div>
  )
}

export default MainProgram;
