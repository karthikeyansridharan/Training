import SvgIcons from '../../../components/common/SvgIcons'
import useUserStore from '../../../store/userStore'



const Greeting = () => {
  const {userData} = useUserStore();
  return (
    <div className="font-mulish px-4 py-4 bg-[#00256C]">
        <h1 className="font-semibold text-[20px] ">Good Morning, {userData.name}!</h1>
        <div className="flex justify-between items-center px-3 py-2 bg-[#FFFFFF12] rounded-md mt-5">
          <div className="flex items-center w-[80%] border-r border-[#FFFFFF80] gap-3">
            {SvgIcons.homeTransparent()}
            <div className="flex flex-col gap-2 py-1">
              <p className="font-bold text-sm leading-[100%] tracking-wider">
                {userData.accNo}
              </p>
              <p className="text-sm leading-[100%] tracking-wide">
                {userData.address}
              </p>
            </div>
          </div>
          <div className="font-light text-[20px]">72°F</div>
        </div>
      </div>
  )
}

export default Greeting