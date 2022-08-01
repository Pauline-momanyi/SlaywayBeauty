import React from 'react'
import './Footer.css'
import {FaFacebook, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import Wave from '../../img/footer.png'

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <div className="info">
                <h3>SlayWay<small>beauty&spa</small></h3>
                <h4>1462-0010, Rainbow Road</h4>
                <h4>slayway@gmail.com</h4>
            </div>           
            <div className="f-icons align-baseline">
                <a href="https://www.linkedin.com/in/pauline-momanyi-451a95147/"><FaInstagram color='white' size='1.5rem'/></a>
                <a href="https://github.com/Pauline-momanyi"><FaFacebook color='white' size='1.5rem'/></a>
                <a href="https://github.com/Pauline-momanyi"><FaTwitter color='white' size='1.5rem'/></a>
                <a href="https://github.com/Pauline-momanyi"><FaWhatsapp color='white' size='1.5rem'/></a>
                          
            </div>
    </div>
</div>
  )
}

export default Footer