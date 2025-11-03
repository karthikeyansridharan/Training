import React, { createContext, useContext, useState } from 'react'
import Logo from '../../dumb-components/Logo'
import BillDetail from './BillDetail';
import SavedCards from './SavedCards';
import PaymentMethods from './PaymentMethods';
import AddNewCard from './AddNewCard';
import ModalOpenContext from './ModalOpen';


const userCards = [
  {name:"/visa.png",number:"•••• 3924",preferred:true},
  {name:"/visa.png",number:"•••• 3924",preferred:false},
];



const Bills = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  return (
    <ModalOpenContext.Provider value={{isModalOpen,setIsModalOpen}}>
      <div className=' font-mulish bg-white p-4'>                {/*Ask right 92%*/}
        <h1 className='font-semibold text-[20px] text-black '>Pay Bill</h1>     
        <div className="text-black flex flex-col gap-5 mt-10 md:grid md:grid-cols-2 md:w-2/3 md:mx-auto md:gap-5">
          <BillDetail/>
          <div className="flex flex-col gap-5 bg-white pb-40">
            <h1 className='font-semibold text-[18px]'>Payment Methods</h1>
            <div className="flex flex-col bg-white rounded-lg p-4 gap-4 border border-[#00000026]">
              <p className='font-bold text-sm'>Preferred</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <Logo src='/visa.png' className='w-8 h-[22px]'/>
                  <p className='font-medium text-sm'>•••• 3924</p>
                </div>
                <div className="">
                  <input type="checkbox"/>
                </div>
              </div>
              {/* <div className="flex flex-col items-center justify-between">
                {
                  userCards.map((card,index)=>
                    <div key={index} className={`flex w-full justify-between ${index!==userCards.length-1?'border-b border-[#00000026':''}] p-4`}>     
                      <div className="flex gap-4 items-center">
                        <Logo src={card.name} className='w-8 h-[22px]'/>
                        <p className='font-medium text-sm'>{card.number}</p>
                      </div>
                      <div className="">
                        <input type="checkbox"/>
                      </div>
                    </div>
                  )
                }
                
                
              </div> */}
            </div>
            <SavedCards/>
            <div className="flex flex-col bg-white rounded-lg border border-[#00000026]">
              <p className='font-bold text-sm p-4'>Mobile Payment</p>
              <div className="flex items-center justify-between border-b border-[#00000026] p-4">
                <div className="flex gap-4 items-center">
                  <Logo src='/apple-pay.png' className='w-8 h-8'/>
                  <p className='font-medium text-sm'>Apple Pay</p>
                </div>
                <div className="">
                  <input type="checkbox"/>
                </div>
              </div>
              <div className="flex w-full justify-start gap-4 p-4">
                  <Logo src='/add-card.png' className='h-[22px] w-8'/>
                  <p className='font-bold text-sm text-[#0141A3]'>Add New UPI ID</p>
                </div>
            </div>
            <PaymentMethods/>
          </div>
        </div>
        {
        isModalOpen && <AddNewCard/>
      }
      </div>
  </ModalOpenContext.Provider>
    
  )
}

export default Bills