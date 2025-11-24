import Logo from '../../components/common/Logo'
import useUserStore from '../../store/userStore'

const GhcEmission = () => {
  const {userData} = useUserStore();
  return (
    <div className='p-4  border border-[#00000026] rounded-lg'>
        <h1 className='font-semibold text-[18px] w-2/3'>GHC Emission this month</h1>
        <p className='text-sm '>Over Last 6 months with Similar <span className='font-bold underline'>Energy profile</span></p>
        <p className='mt-4'><span className='text-[32px] font-semibold'>{userData.currMonth.saved}</span>kg</p>
        <p className='text-xs font-semibold text-[#111111] mb-6'>1.2% of your neighbourhood</p>
        <Logo src='/ghc-graph.png'/>
    </div>
  )
}

export default GhcEmission