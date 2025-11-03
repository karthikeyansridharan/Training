import React from 'react'
import Logo from '../../../dumb-components/Logo'

const Recommendation = () => {
  return (
    <div className="min-w-full bg-[#f1f1f1] p-4 rounded-xl">
            <div className="flex justify-between">
              <p className="font-bold text-sm">Your Bill due date is 3 days away.</p>
              <img className="w-6 h-6" src="/dollar-reload.png" alt="dollar-reload" />
            </div>
            <p className="text-sm w-[70%]">Set up Autopay and avoid last day hastles and late fee.</p>
            <button className="flex items-center gap-2 text-socal-light-blue text-sm font-bold py-2"><p>Setup Auto Pay</p><Logo className="w-4 h-4" src="/right-arrow-blue.png" alt="rigt-arrow"/></button>
    </div>
  )
}

export default Recommendation