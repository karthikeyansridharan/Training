import Logo from '../../components/common/Logo';
import useUserStore from '../../store/userStore';

const CostBreakdown = () => {

    const {userData} = useUserStore();
    const consumptionCategories = userData.currMonth.costBreakdown;

  return (
    <div className='py-4 px-4'>
        <div className="md:flex md:justify-between items-center">
            <div className="">
                <h1 className='text-[18px] font-semibold'>Cost Breakdown</h1>
                <p className='font-light text-xs'>by Appliance type compared to Last month</p>
            </div>
            <div className="">
                <div className="flex gap-5 items-baseline mt-3">
                    <p className='font-semibold textt-sm'>$<span className='text-[32px]'>{userData.currMonth.amount + userData.prevMonth.amount} </span> USD</p>
                    <p className='flex items-center gap-2 text-[#B11010] font-semibold'> 20.17% <Logo src='/up-arrow-red.png' className='h-6 w-6 inline'/></p>
                </div>
                <p className='text-xs font-semibold text-[#111111]'>Compared to Last Month</p>
            </div>
        </div>
        <div className="flex flex-col gap-5 mt-5 md:grid grid-cols-3">
            {
                consumptionCategories.map((category)=>
                    <div className="flex justify-between p-2 border border-[#E8E8E8] rounded-lg">
                        <div className="flex gap-3 items-center">
                            <Logo src={category.image} className='w-6 h-6'/>
                            <div className="">
                                <p className='text-xs font-light'>{category.usage}</p>
                                <p className='text-[#303E65] text-[18px] font-bold'>${category.amount}.00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Logo className='h-5 w-5' src={category.increase ? '/cost-breakdown/increase.png' : '/cost-breakdown/decrease.png'} />
                            <p className={`text-[24px] ${category.increase ? 'text-[#A91616]':'text-[#207B00]'}`}>{category.difference}%</p>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="md:flex items-center justify-between">
            <p className='text-[11px] font-light my-5'>Cost Break down are based on your past energy use, smart meter data and information you provided about your home, Charges and credits applied at the account level are excluded Minimum bill charge may impact accuracy</p>
            <button className='text-[#00256C] font-bold text-sm w-full text-right'>Update energy profile</button>
        </div>
    </div>
  )
}

export default CostBreakdown