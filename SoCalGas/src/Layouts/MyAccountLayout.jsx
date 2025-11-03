import React from 'react'
import { Outlet } from 'react-router'
import MyAccountHeader from '../pages/myAccountPage/MyAccountHeader'

const MyAccountLayout = () => {
  return (
    <div className=''>
        <MyAccountHeader/>       
        <Outlet/>
    </div>
  )
}

export default MyAccountLayout
