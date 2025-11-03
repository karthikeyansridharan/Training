import React from 'react'
import Logo from '../../dumb-components/Logo'

const paymentOptions = [
  {type:'Wallets', icon:'/wallet.png'},
  {type:'Netbanking', icon:'/bank.png'},
];

const PaymentMethods = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-[#00000026]">
        <p className='font-bold text-sm p-4'>More Payment Options</p>
        {
            paymentOptions.map((option,index)=>
            <div key={index} className={`flex items-center justify-between ${index!==paymentOptions.length-1?'border-b border-[#00000026]':''}  p-4`}>
                <div className="flex gap-4 items-center">
                <Logo src={option.icon} className='w-8 h-8'/>
                <p className='font-medium text-sm'>{option.type}</p>
                </div>
                <Logo src='/right-arrow-black.png' className='h-4 w-4'/>
            </div>    
            )
        }
    </div>
  )
}

export default PaymentMethods