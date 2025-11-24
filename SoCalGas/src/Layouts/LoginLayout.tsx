import LoginHeader from '../pages/login/LoginHeader'
import { Outlet } from 'react-router'

const LoginLayout = () => {
  return (
    <>
        <LoginHeader/>
        <Outlet/>      
    </>
  )
}

export default LoginLayout