import React from 'react'
import Logo from '../../../dumb-components/Logo';

const buttons = [
    {image:'/truck.png',name:'Transfer Service'},
    {image:'/flame.png',name:'Check Appliance'},
    {image:'/service.png',name:'Service Requests'},
    {image:'/rebate.png',name:'Rebates'},
];

const Shortcuts = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-2 md:grid-cols-1'>
        {
            buttons.map ((btn,index)=><button key={index} className='flex gap-2 items-center border border-[#00000026] rounded-3xl px-4 py-3 text-xs font-semibold '><Logo className='w-4 h-4' src={btn.image} alt={btn.name}/>{btn.name}</button>)
        }
    </div>
  )
}

export default Shortcuts