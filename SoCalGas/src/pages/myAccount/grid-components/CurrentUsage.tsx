import Logo from '../../../components/common/Logo';
import useUserStore from '../../../store/userStore';

const CurrentUsage = () => {
    const {userData} = useUserStore();
    const currMonthAmount = userData.currMonth.amount;
    const prevMonthAmount = userData.prevMonth.amount;
    const currHeight = Math.floor(0.25 * currMonthAmount - 10);
    const prevHeight = Math.floor(0.25 * prevMonthAmount - 10);
    const increasePercent = ((prevMonthAmount - currMonthAmount) / prevMonthAmount) * 100;
  return (
    <div className='bg-white border border-[#00000026] rounded p-3'>
        <div className="flex justify-between items-center text-black">
            <h2 className='font-semibold text-[16px]'>Your Current Usage</h2>
            <Logo className='w-4 h-4' src='/right-arrow-black.png' alt='right-arrow'/>
        </div>
        <div className="flex justify-between text-black px-5 py-5">
            <div className="flex gap-2 text-center">
                <div className='flex flex-col items-center gap-1 pt-5'>
                    <p className='text-xs'>${prevMonthAmount}</p>
                    <div className={`h-${prevHeight} w-10 bg-[#0041A380] rounded-md`}></div>
                    <p className='text-[#808080] text-[10px]  w-[50%] leading-[130%]'>Oct 05</p>
                </div>
                <div className='flex flex-col items-center gap-1 text-center'>
                    <p className='text-xs font-bold'>${currMonthAmount}</p>
                    <div className={`h-${currHeight} w-10 bg-[#0041A3] rounded-md`}></div>
                    <p className='text-[#808080] text-[10px] w-[50%] leading-[130%]'>Nov 01</p>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p><span className='text-[36px] font-semibold '>{userData.currMonth.watts}</span>kwh</p>
                <div className="flex items-center gap-1">
                    <p className='font-semibold text-[#B11010] text-[18px]'>{increasePercent.toFixed(2)}% </p>
                    <Logo className='w-5 h-5' src='/up-arrow-red.png' alt='up arrow'/>
                </div>
                <p className='text-[#808080] text-xs font-medium'>Compared to Last month</p>
            </div>
        </div>
    </div>
  )
}

export default CurrentUsage