import Logo from '../../../components/common/Logo'
import useUserStore from '../../../store/userStore'

const AmountDue = () => {
  const {userData} = useUserStore();
  return (
    <div className="bg-white text-black relative px-3 py-6 rounded">
        <p className="font-bold text-[18px]">Amount Due</p>
        <p className="font-bold text-[36px]">${userData.currMonth.amount}</p>
        <p className="font-semibold text-[#808080] text-xs">Due Date {userData.currMonth.due}</p>
        <div className="flex justify-between items-center mt-3">
          <button className="text-sm text-[#00256C] font-bold border border-[#00000026] rounded-3xl px-4 py-2">View Bill</button>
          <button className="flex gap-2 items-center bg-[#F27321] font-bold text-sm text-white px-4 py-2 rounded-3xl"><p>Pay Bill</p><img className="h-3 w-3" src="/right-arrow.png" alt="right-arrow" /></button>
        </div>
        <Logo className="absolute top-5 right-5 h-24 w-24" src="/dollar.png" alt="dollar-logo" />
      </div>
  )
}

export default AmountDue