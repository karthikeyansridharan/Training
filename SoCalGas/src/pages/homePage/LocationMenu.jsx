import React from 'react'

const LocationMenu = ({style,forNav}) => {
  return (


        <div className={`flex items-center gap-1 cursor-pointer ${style}`}>
            <img src="/map-marker.png" alt="map-marker" className='h-[16px] w-[16px] '/>
            <select name="location" className={style}>
                <option value="San Diego, CA">San Diego {forNav ? ', CA' : <>&nbsp;</>}</option>
            </select>            
        </div>
  )
}

export default LocationMenu