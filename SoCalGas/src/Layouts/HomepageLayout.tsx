import Header from '../pages/home/Header.tsx'
import Footer from '../pages/home/Footer.tsx'
import { Outlet } from 'react-router'


const HomepageLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default HomepageLayout