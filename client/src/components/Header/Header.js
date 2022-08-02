import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../img/Logo.png'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaUser} from 'react-icons/fa'
import './Header.css'
// import { Button } from "@material-tailwind/react";

const userin = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
  'http://www.genocideresearchhub.org.rw/wp-content/uploads/2021/12/1024px-User-avatar.svg_.png',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Testimonials', href: '#reviews', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'Stats', href: '#stats', current: false },
  { name: 'Contact', href: '#contacts', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  // { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header({user, setUser}) {
  let navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log('deleted');
        navigate('/auth')
      }
    });
  }
  return (
    <>
      {/* <div className="top flex shadow-md max-width-7xl">
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
          <button className="bg-pink hover:bg-red-200 text-white font-bold py-2 px-2 rounded outline-none mr-10">Book Now</button>
          </Link> 
        </div>       
      </div> */}
  
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src={Logo}
                        alt="logo"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-pink text-black'
                                : 'text-black hover:bg-pink hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="rounded-full w-12 h-12 border-none items-center flex justify-center">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-10 w-10 rounded-full" src={userin.imageUrl} alt="" />
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
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                              
                            ))}
                                   <Menu.Item >
                                {({ active }) => (
                                  <a
                                    href='#'
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    onClick={handleLogoutClick}
                                  >
                                    {/* {user? 'Sign Out':'Signed in'} */}
                                    Sign Out
                                  </a>
                                )}
                              </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-4 w-4" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-4 w-4" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-0 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : ' hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={userin.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{userin.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{userin.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                        <Disclosure.Button
                        as="a"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        onClick={handleLogoutClick}
                      >
                        {user? 'Sign Out' : ''}
                      </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}

export default Header