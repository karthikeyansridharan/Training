import React from 'react'
import Logo from '../../dumb-components/Logo'
import useUserStore from '../../config/useUserStore'

const Achievements = () => {
  const {userData} = useUserStore();
  return (
    <div className='bg-white text-black px-4 pt-4 rounded border border-[#00000026] '>
      <div className="flex justify-between items-center text-black">
          <h2 className='font-semibold text-[16px]'>Your Latest Achievement</h2>
          <Logo className='w-4 h-4' src='/right-arrow-black.png' alt='right-arrow'/>
        </div>
        <div className="flex justify-center gap-10 py-6">
          <Logo src='/trophy.png' className='h-20 w-20' alt='trophy-image'/>
          <div className="flex flex-col w-[50%]">
            <h2 className='text-[16px] font-bold'>Neighbourhood Hero</h2>
            <p><span className='text-[32px] font-semibold'>{userData.currMonth.saved}</span> kg GHG</p>
            <div className="flex gap-2">
              <Logo className='h-4 w-4' src='/save-energy.png' alt='save-energy'/>
              <p className='text-[#36A629] font-bold text-xs'>Emmision Reduced</p>
            </div>
              <p className='text-xs font-medium'>Last month</p>
              <button className='text-[#00256C] font-bold text-sm px-4 py-2 border border-[#00000026] rounded-3xl mt-5'>Share</button>
          </div>
        </div>
    </div>
  )
}

export default Achievements