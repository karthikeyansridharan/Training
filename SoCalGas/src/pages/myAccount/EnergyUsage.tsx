import Logo from '../../components/common/Logo'
import useUserStore from '../../store/userStore'

const EnergyUsage = () => {
  const {userData} = useUserStore();
  return (
    <div className="py-4 border-b border-[#00000026] px-4">
        <div className="flex flex-col gap-2">
          <h1 className='font-semibold text-[16px]'>Daily Energy Usage</h1>
          <div className="flex gap-5 items-baseline">
            <p><span className='text-[32px]'>{userData.currMonth.watts} </span>kWh</p>
            <p className='flex items-center gap-2 text-[#B11010] font-semibold'> {userData.currMonth.amount}% <Logo src='/up-arrow-red.png' className='h-6 w-6 inline'/></p>
          </div>
          <div className="flex items-center gap-5">
            <p className='text-xs font-semibold text-[#111111]'>Compared to</p>
            <select name="timeline" className='text-sm font-semibold border p-2 rounded-3xl border-[#00000026]'>
              <option value="last month">Last Month</option>
              <option value="">Previous Month</option>
            </select>
          </div>
          <Logo src='/usage-graph.png' className='py-6'/>
          <Logo className='h-3.5 w-[210px]' src='/graph-indicator.png'/>
          <button className='font-bold text-sm text-[#00256C] text-right mt-2'>View energy saving tips</button>
        </div>
      </div>
  )
}

export default EnergyUsage