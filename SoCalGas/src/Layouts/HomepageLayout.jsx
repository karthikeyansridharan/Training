import React from 'react'
import Header from '../pages/homePage/Header.jsx'
import Footer from '../pages/homePage/Footer.jsx'
import { Outlet } from 'react-router'


const HomepageLayout = () => {
  return (
    <>
    <Header/>
    <main className=''>

        <Outlet/>
    </main>
        <Footer/>
    </>
  )
}

export default HomepageLayout