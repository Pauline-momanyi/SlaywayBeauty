import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaUser} from 'react-icons/fa'
import './Header.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'



function Slayway({user, setUser}) {
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    // { name: 'Sign out', href: '#' },
  ]

  let navigate = useNavigate()

  const userin = {
    imageUrl:
    'http://www.genocideresearchhub.org.rw/wp-content/uploads/2021/12/1024px-User-avatar.svg_.png',
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    // if (user){
    //     console.log(user);
    // }else{
    //     console.log('none');
    // }
    function handleLogoutClick() {
      fetch("/api/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) { 
          navigate('/auth')
          setUser(null);
          console.log('deleted');
         
        }
      });
    }

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
          {user?
           <div className="ml-4 flex items-center md:ml-6">

           {/* Profile dropdown */}
           <Menu as="div" className="mx-3 relative">
             <div>
               <Menu.Button className="rounded-full w-12 h-12 border-none items-center flex justify-center">
                 <span className="sr-only">Open user menu</span>
                 <img className="h-10 w-10 rounded-full border-solid p-0.5 border-pink" src={userin.imageUrl} alt="" />
               </Menu.Button>
             </div>
             <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
             >
               <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-opacity-90 text-center">
                  <p className='font-semibold'>User {user.username.toUpperCase()}</p>
                  <div className='space-x-2 underline decoration-sky-500'>
                  <a href="" onClick={handleLogoutClick}>Logout</a>
                  <Link to={'/mybookings'} className="">My Bookings</Link>
                  </div>                

               </Menu.Items>
             </Transition>
           </Menu>
         </div>
         : <Link to='/auth'>      
          <button className="bg-pink hover:bg-red-200 text-white font-bold py-2 px-2 rounded outline-none mr-10 bookbutt">
            BOOK NOW
        </button>
          </Link> 
}
        </div>       
      </div>
      
    </>
  )
}

export default Slayway