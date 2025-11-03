import React,{useState} from 'react'
import EnergyDashboard from './EnergyDashboard'
import Logo from '../../dumb-components/Logo'
import EnergyUsage from './EnergyUsage'
import CostBreakdown from './CostBreakdown'
import NeighbourhoodUsage from './NeighbourhoodUsage'
import GhcEmission from './GhcEmission'

const navItems = ["Energy Dashboard","Analyse Usage","Compare Bills"];

const Usage = () => {

      const [activeIndex,setActiveIndex] = useState(0);
  return (
    <>
    <EnergyDashboard/> 
    <div className="flex bg-white justify-start md:p-5 md:gap-20">  
        <div className="hidden py-5 md:block">
          <aside>
            {
              <div className="flex flex-col gap-5 items-start">
                {
                    navItems.map((item,index)=>
                        <button key={index} onClick={()=>setActiveIndex(index)} className={`font-bold text-[16px] cursor-pointer ${activeIndex===index?'bg-[#FFFFFF12] text-[#0141A3]':'text-black'}  px-2 py-2 rounded-lg`}>{item}</button>
                    )
                }
                </div>
            }
          </aside>
        </div>
        <div className="bg-white text-black pb-40 p-4 flex flex-col gap-4 md:w-2/3">
          <div className="border border-[#00000026] rounded-lg">
            <EnergyUsage/>
            <CostBreakdown/>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <NeighbourhoodUsage/>
            <GhcEmission/>
          </div>
        </div>
              </div>
    </>
  )
}

export default Usage