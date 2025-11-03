import React from 'react'
import LoginHeader from '../pages/loginPage/LoginHeader'
import { Outlet } from 'react-router'

const LoginLayout = () => {
  return (
    <div className=''>
        <LoginHeader/>
        <Outlet/>      
    </div>
  )
}

export default LoginLayout