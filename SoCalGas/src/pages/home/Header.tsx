import ReportGas from './ReportGas'
import LocationMenu from './LocationMenu'


const Header = () => {
  return (
    <header className='hidden md:block px-5 w-full absolute font-semibold font-mulish text-xs z-50'>
      <div className='flex py-2 justify-between border-b '>
        <div className='flex items-center w-fit text-[12px] gap-8'>
          <img src="/font-size.png" alt="font-size" className='h-[10px] w-[15px] cursor-pointer'/>
          <div className='flex text-xs items-center gap-1 cursor-pointer'>
            <img src="/globe.png" alt="" className='h-[15px] w-[15px]' />
            <select name="language" id="" className='appearance-none text-white cursor-pointer'>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
              <option value="Russian">Russian</option>
            </select>
          </div> <LocationMenu forNav = {true} style='appearance-none cursor-pointer'/>
        </div>
        <div className='flex text-[12px] gap-8'>
          <ReportGas style='text-[#DB3B0D] cursor-pointer'/>
          <button className='cursor-pointer'>About SoCalGas</button>
          <button className='cursor-pointer'>Contact us</button>
        </div>
      </div>
    </header>
  )
}

export default Header