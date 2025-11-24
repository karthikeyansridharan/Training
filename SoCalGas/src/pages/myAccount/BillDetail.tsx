import Logo from '../../components/common/Logo';
import useUserStore from '../../store/userStore';
// import { billOverview } from '../../constants/myAccountConstants';



const BillDetail = () => {
  const {userData} = useUserStore();

  const userCards = userData.cards;

  const billOverview = [
    {content:"Your latest bill is", style:"text-[18px] font-bold"},
    {content:`$${userData.currMonth.amount}`, style:"font-bold text-[36px]"},
    {content:"01 Oct - 01 Nov", style:"text-xs font-bold mt-2 mb-4"},
    {content:"It's due in 14 days on Nov 28.", style:"font-bold text-xs text-[#808080] my-1.5"},
    {content:`Account # ${userData.accNo}, ${userData.address}`, style:"font-semibold text-xs text-[#808080] mb-4"},
];

  return (
    <div className="md:order-1 md:-translate-y-15">
        <div className="bg-white border border-[#00000026] rounded-lg p-4">
        {
            billOverview.map((item,index)=>
            <p key={index} className={item.style}>{item.content}</p>
            )
        }
        <div className="flex justify-between">
            <button className='font-bold text-sm flex items-center gap-3 rounded-3xl cursor-pointer'>Bill Details {<Logo src='/down-arrow-black.png' className='h-2 w-4'/>}</button>
            <button className='font-black text-sm text-[#00256C] border border-[#00000026] px-4 py-2 rounded-3xl cursor-pointer'>Set Up Auto Pay </button>
        </div>
        </div>
        <div className="bg-white flex justify-between w-[92%] py-5 fixed bottom-16 md:static md:w-full md:p-4 md:border md:border-[#00000026] md:rounded-lg">
        <div className="text-[#000000] flex flex-col gap-1">
        <p className='font-medium text-sm text-[#00000066]'>Total <span className='font-bold text-sm text-black'>${userData.currMonth.amount}</span></p>
        <p className='text-sm font-medium flex items-center gap-4'>Using {<><Logo className='w-[22px] h-[15px]' src={userCards[0].name}/> {userCards[0].number}</>}</p>
        </div>
        <button onClick={()=>alert("Payment Success")} className='bg-[#F27321] font-bold text-sm px-12 py-2 rounded-3xl cursor-pointer'>Pay</button>
        </div>
    </div>
  )
}

export default BillDetail