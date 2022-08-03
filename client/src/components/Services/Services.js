import React from 'react'
import {Link} from 'react-router-dom'
import './Services.css'
import ehair from '../../img/ehair.png'
import enails from '../../img/enails.png'
import emakeup from '../../img/emakeup.png'
import Card from '../Card/Card'
import {motion} from 'framer-motion'

function Services() {
    const transition = {duration: 2, type: 'spring'}
    // const theme = useContext(themeContext)
    // const darkMode = theme.state.darkMode
    return (
    <div className="services" id='services'>
        <div className="awesome">
            <span>Our Awesome</span>
            <span>Services</span>
            <span>We offer a variety of services including makeup, hair braiding, nail art and many more</span>
            <Link to='/auth'><button className="bg-pink hover:bg-red-200 text-white font-bold py-2 px-2 rounded outline-none mr-10">Book Now</button></Link>
            <img src='https://media.giphy.com/media/3Zrca467dRrwc/giphy.gif' alt="gif..." className='pt-20'/>
            <div className="blur s-blur1" style={{background:'#fe7d6a40'}}></div>
            <div className="blur s-blur1" style={{background:'#fe7d6a40'}}></div>
            
        </div>
        <div className="cards">
            <motion.div 
                 initial={{left: '20rem'}}
                 whileInView={{left: '14rem'}}
                 transition={transition}
                style={{left: '14rem'}}
                >
                <Card
                emoji = {ehair}
                heading = {'Hair'}
                detail = {' Your hair, our passion · Hair is your crowning glory · Happy hair days'}
                />
            </motion.div>
            <motion.div
             initial={{left: '-30%'}}
             whileInView={{left: '-4rem'}}
             transition={transition}
            style={{left: '-4rem', top: '12rem'}}
            >
                <Card
                emoji = {enails}
                heading = {'Nails'}
                detail = {'We are committed to your nails · We got the nail art · Manicure you\'ll love'}
                />
            </motion.div>
            <motion.div             
            initial={{left: '18rem'}}
            whileInView={{left: '12rem'}}
            transition={transition}
            style={{left: '12rem', top: '19rem'}}
            >
                <Card
                emoji = {emakeup}
                heading = {'MakeUp'}
                detail = {'If you never try, you will never look hot · Makeup makes you great'}
                />
            </motion.div>
            <div className="blur s-blur1" style={{background:'#fe7d6a40'}}></div>
            <div className="blur s-blur2" style={{background: '#fe7d6a40'}}></div>
        </div>
    </div>
  )
}

export default Services