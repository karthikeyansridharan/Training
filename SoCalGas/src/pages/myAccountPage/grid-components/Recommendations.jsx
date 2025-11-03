import React from 'react'
import Recommendation from './Recommendation'

const Recommendations = () => {
  return (
      <div className="flex overflow-scroll gap-4 mt-2 hide-scrollbar">
        <Recommendation/>
        <Recommendation/>
        <Recommendation/>
      </div>
      
  )
}

export default Recommendations