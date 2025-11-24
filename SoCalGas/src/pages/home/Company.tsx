import { list } from "../../constants/homePageConstants"
const Company = () => {
  return (
    <div className='font-mulish flex flex-col justify-between px-4 min-h-screen bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url("/company-bg.jpg")] bg-cover bg-no-repeat bg-position-[70%_50%]'>
      <div className="flex flex-col items-center mt-20 gap-5">
        <h1 className='font-semibold text-[28px] leading-[100%] md:text-[36px] md:font-bold'>Our Company</h1>
        <p className='w-[80%] text-center text-sm leading-[22px] md:w-[40%] md:text-[20px] md:font-normal'>Providing increasingly clean, safe and reliable energy to our customers for more than 150 years.</p>
        <button className='font-bold text-sm flex items-center border-2 px-4 py-2 rounded-3xl'>About Us <img className='w-4 h-4' src="/right-arrow.png" alt="right-arrow" /></button>
      </div>
      <div className="flex flex-col items-center gap-10 mb-10 md:flex-row md:mx-20 md:gap-20">
        {
          list.map((item,index)=>
            <button className='cursor-pointer font-medium text-[20px] leading-[100%] flex items-center w-full justify-between border-b pb-5 md:text-[24px]' key={index}>{item} <img className='w-5 h-5' src="/right-arrow.png" alt="right-arrow" /></button>
          )
        }
      </div>
    </div>
  )
}

export default Company