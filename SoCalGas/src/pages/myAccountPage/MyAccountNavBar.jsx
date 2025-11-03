import React from 'react'
import {NavLink} from 'react-router-dom';
import Logo from '../../dumb-components/Logo';
import HomeNavMobile from './HomeNavMobile';

const MyAccountNavBar = () => {
  return (
    <>
    <nav className='flex items-center justify-between px-4 py-2 md:justify-between md:px-10 md:border-b md:py-0 md:pt-8'>
      <div className="flex items-center md:w-1/3">
        <Logo className='h-9 w-22 pr-3 border-r' src='/socal-logo.png'/>
        <p className='pt-3.5 pl-3'>My Account</p>
      </div>
      <HomeNavMobile/>
        <div className="flex items-center justify-between gap-5 md:w-1/4 md:gap-5 md:justify-end">
          <Logo className='w-6 h-6' src='/notification-icon.png' alt='notification-icon'/>
          <NavLink to="profile"><Logo className='w-8 h-8 rounded-full' src='/profile-image.jpg' alt='profile-image'/></NavLink>
        </div>
    </nav>
    </>
  )
}

export default MyAccountNavBar