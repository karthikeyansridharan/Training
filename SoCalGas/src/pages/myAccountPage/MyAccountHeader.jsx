import React from 'react'
import Header from '../../pages/homePage/Header'
import MyAccountNavBar from './MyAccountNavBar'

const MyAccountHeader = () => {
  return (
    <div className='bg-[#00256C]'>
        <Header/>
        <MyAccountNavBar/>
    </div>
  )
}

export default MyAccountHeader