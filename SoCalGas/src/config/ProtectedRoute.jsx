import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import {useUser} from '../lib/context/user';



const ProtectedRoute = () => {
  const user = useUser();
    if(!user.current){
        return <Navigate to="/login"/>
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRoute