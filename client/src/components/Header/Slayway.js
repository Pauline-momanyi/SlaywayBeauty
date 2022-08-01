import React from 'react'
import {Link} from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaUser} from 'react-icons/fa'
import './Header.css'



function Slayway() {
    // if (user){
    //     console.log(user);
    // }else{
    //     console.log('none');
    // }

  return (
    <>
      <div className="top flex shadow-md max-width-7xl">
        <div className="top-l ml-10">
            <h4 className='text-xl'><span>S</span>LAY<span>W</span>AY</h4>
            <small>beauty&spa</small>
        </div>
        <div className="top-r">
          <div className="socials p-3 space-x-2">
            <a href="https://www.facebook.com/"><FaFacebook/> </a>
            <a href="https://www.instagram.com/"><FaInstagram/></a>
            <a href="https://www.twitter.com/"><FaTwitter/></a>
            <a href="https://www.instagram.com/"><FaWhatsapp/></a>        
          </div> 
          <Link to='/auth'>      
          <button className="bg-pink hover:bg-red-200 text-white font-bold py-2 px-2 rounded outline-none mr-10">
            {/* {user? "Sign Out": "BOOK NOW"} */}
            BOOK NOW
        </button>
          </Link> 
        </div>       
      </div>
      
    </>
  )
}

export default Slayway