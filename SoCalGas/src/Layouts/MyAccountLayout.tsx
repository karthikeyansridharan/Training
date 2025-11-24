import { Outlet } from 'react-router'
import MyAccountHeader from '../pages/myAccount/MyAccountHeader'

const MyAccountLayout = () => {
  return (
    <>
        <MyAccountHeader/>       
        <Outlet/>
    </>
  )
}

export default MyAccountLayout
