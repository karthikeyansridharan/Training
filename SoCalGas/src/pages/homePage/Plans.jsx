import React, { useState } from 'react'
import clsx from 'clsx';

const Plans = () => {
    const features = [
        {image:'/energy-logo.png',heading:'Smart Energy Saving Tips',content:'Get real time alerts, manage payments and more. Get real time alerts, manage payments and more.'},
        {image:'/usage-logo.png',heading:'Monitor Your Usage',content:'Control your consumption, Manage your energy savings with your online account energy dashboard.'},
        {image:'/time-logo.png',heading:'Real Time Updates',content:'Get real time alerts, manage payments and more. Get real time alerts, manage payments and more.'},
    ];
    const [btnActiveIndex,setbtnActiveIndex] = useState(0);
  return (
    <div className='bg-black flex flex-col font-mulish min-h-screen gap-40 pl-4 pt-15 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,1)),url("/plans-bg.jpg")] bg-no-repeat bg-size-[300%] bg-position-[20%_20%] md:bg-cover md:bg-position[70%_20%] md:px-10 md:justify-between md:pb-15'>
        <div className="flex flex-col w-[70%]">
            <div className="flex gap-2 pb-8">
                <button onClick={()=>setbtnActiveIndex(0)} className={clsx('text-sm leading-[18px] px-4 py-2',btnActiveIndex===0 ?'text-black font-bold bg-white  rounded-2xl':'')}>Residential</button>
                <button onClick={()=>setbtnActiveIndex(1)} className={clsx('text-sm leading-[18px] px-4 py-2',btnActiveIndex===1 ?'text-black font-bold bg-white  rounded-2xl':'')}>Business</button>
            </div>
            <p className='text-[18px] leading-[100%] pb-5'>Plans & Rates</p>
            <p className='text-[32px] font-bold pb-6 leading-[120%]'>Our best Plans to fit your needs</p>
            <button className='w-fit bg-[#F27321] font-extrabold text-sm leading-5 px-4 py-2 rounded-2xl'>View Plans</button>
        </div>
        <div className="flex overflow-x-scroll gap-5 pr-4 md:justify-between md:gap-30 md:overflow-hidden md:min-w-full">
            {
                features.map((feature,index)=>
                    <div key={index} className="flex flex-col pt-3 min-w-[70%] border-t pl-4 md:min-w-[15%]">
                        <img className='w-8 h-8' src={feature.image} alt="feature-image" />
                        <p className='font-extrabold leading-[100%] py-3'>{feature.heading}</p>
                        <p className='text-xs font-medium leading-[22px]'>{feature.content}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Plans