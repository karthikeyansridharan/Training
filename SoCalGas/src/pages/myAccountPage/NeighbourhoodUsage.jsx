import React from 'react'
import Logo from '../../dumb-components/Logo'

const NeighbourhoodUsage = () => {
  return (
    <div className='p-4 border border-[#00000026] rounded-lg'>
        <h1 className='font-semibold text-[18px] w-2/3'>Neighbourhood Monthly Average Energy Usage</h1>
        <p className='text-sm '>Over Last 6 months with Similar <span className='font-bold underline'>Energy profile</span></p>
        <p className='text-[#B11010] text-[16px] flex items-center gap-2 font-bold my-4'>20.17% <Logo className='h-6 w-6' src='/up-arrow-red.png'/></p>
        <p className='text-xs font-medium my-2'>More than your neighbours</p>
        <select name="location" className='p-2 border rounded-3xl border-[#00000026] my-2'>
            <option value=""><Logo src='/map-marker.png'/>Lincoln Street, CA<Logo src='down-arrow-black.png'/></option>
        </select>
        <Logo src='/neighbour-graph.png' className='my-5'/>
        <Logo className='h-3.5 ml-6' src='/graph-indicator-neighbour.png'/>
    </div>
  )
}

export default NeighbourhoodUsage