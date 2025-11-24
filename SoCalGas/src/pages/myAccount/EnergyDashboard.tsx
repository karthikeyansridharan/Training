import { useState } from 'react'
import Logo from '../../components/common/Logo'

const navItems = ["Energy Dashboard","Analyse Usage","Compare Bills"];

const EnergyDashboard = () => {

    const [activeIndex,setActiveIndex] = useState<number>(0);
    const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-5 items-start bg-[#00256C] p-5 text-white md:px-70 md:py-10'> 
        <button className='flex font-semibold text-[20px] items-center gap-4'><Logo className='h-6 w-6 cursor-pointer md:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)} src='/ham-menu.png'/> Energy Dashboard </button>
        {
            isMenuOpen && 
            <nav>
                <div className="flex flex-col gap-5 items-start ">
                {
                    navItems.map((item,index)=>
                        <button key={index} onClick={()=>setActiveIndex(index)} className={`font-bold text-[16px] cursor-pointer ${activeIndex===index?'bg-[#FFFFFF12]':''}  px-2 py-2 rounded-lg`}>{item}</button>
                    )
                }
                </div>
            </nav>
        }
    </div>
  )
}

export default EnergyDashboard

