import React from 'react'
import Logo from '../../dumb-components/Logo'
import { useUser } from "../../lib/context/user";
import useUserStore from '../../config/useUserStore';
import { useNavigate } from 'react-router';


export const Services = () => {
  const navigate = useNavigate();
  const user = useUser();
  const {userData} = useUserStore();

  const handleNavigation = ()=>{
    if(user.current){
      navigate("/myaccount/profile");
    } else{
      navigate("/login");
    }
  }
  return (
    <div className="">
      <div onClick={handleNavigation} className='flex items-center font-bold bg-socal-light-blue px-4 py-2 rounded-3xl gap-2 cursor-pointer'>
        <Logo  src={user.current ? userData.profile :'/profile-background-none.png'} className='w-6 h-6 rounded-full ' alt='profile-icon'/>
        <p className=''>My Services</p>
        <Logo src='down-arrow.png' className='w-5 h-5' alt='down-arrow' />
      </div>
    </div>
    
  )
}
