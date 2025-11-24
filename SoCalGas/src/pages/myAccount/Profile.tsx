
import { Link, useNavigate } from 'react-router'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button';
import { useUser } from "../../context/UserContext";
import useUserStore from '../../store/userStore';
import { accordion } from '../../constants/myAccountConstants';

const Profile = () => {
  const {userData} = useUserStore();
  const user = useUser();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    navigate("/");
    setTimeout(()=>user.logout(),100);
    
  }
  return (
    <div className='bg-linear-to-b from-[#0041A3] to-[#00256C]'>
      <div className="flex flex-col gap-4 px-3 py-4 md:w-[50%] md:ml-[30%]">
        <div className="flex gap-3">
          <Link to='/myaccount'><Logo src='/back-arrow.png' alt='previous-arrow' className='w-8 h-8 md:hidden'/></Link>
          <h1 className='text-[20px] font-semibold md:text-[24px]'>Profile</h1>
        </div>
        <div className="flex gap-5 items-center">
          <div className="relative">
            <Logo src='/profile-image.jpg' alt='profile' className='h-20 w-20 rounded-full'/>
            <Logo src='/change-image.png' alt='change-profile' className='h-10 w-10 absolute -right-3 -bottom-3'/>
          </div>
          <div className="">
            <h2 className='text-[20px] font-semibold md:text-[24px]'>{userData.name}</h2>
            <p className='text-xs text-[#FFFFFF99] md:text-sm'>{userData.email}</p>
            <p className='text-xs text-[#FFFFFF99] mt-2 md:text-sm'>Account Number</p>
            <p className='text-sm font-bold tracking-widest md:text-[16px]'>{userData.accNo}</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF1F] flex gap-2 items-center w-fit rounded-md p-4 py-2">
          <Logo src='/achievement.png' alt='badge' className='w-6 h-6'/>
          <p className='text-sm font-bold'>Neighbourhood Hero</p>
        </div>
      </div>
      <div className="bg-white p-4 pb-35">
        <div className="flex flex-col bg-white text-black border border-[#00000026] rounded-xl md:w-[40%] md:mx-auto">
          {
            accordion.map((item,index)=>
              <div key={index} className={`flex items-center py-3 px-2 ${index!==accordion.length-1 ? ' border-b border-b-[#00000026]':''}  gap-3 md:gap-4`}>
                <div className="">{<Logo className='h-6 w-6 md:h-8 md:w-8' src={item.image}/>}</div>
                <div className="flex flex-col gap-1">
                  <p className='font-semibold text-sm md:text-[18px]'>{item.heading}</p>
                  <p className='text-[#00000073] text-xs font-medium md:text-sm'>{item.details}</p>
                </div>
                <Logo src='/right-arrow-black.png' className='w-4 h-4 ml-auto' />
              </div>
            )
          }
        </div>
      <Button onClick={handleLogout} className='text-[#C84620] w-full mt-5 cursor-pointer p-4 font-bold' name='Logout'/>
      </div>
    </div>
  )
}

export default Profile