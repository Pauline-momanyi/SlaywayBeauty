import React from 'react'
import Follow from './Follow/Follow';
import Stats from './Stats/Stats';
import Services from './Services/Services';
import Reviews from './Reviews';
import Contact from './Contact/Contact';


function Home() {
  return (
    <>
    <Follow/> 
    <Services/>
    <Stats/>
    <Reviews/>
    <Contact/>
    </>
  )
}

export default Home