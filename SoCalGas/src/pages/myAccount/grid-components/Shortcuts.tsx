import Logo from '../../../components/common/Logo';
import { buttons } from '../../../constants/myAccountConstants';


const Shortcuts = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-2 md:grid-cols-1'>
        {
            buttons.map ((btn,index)=><button key={index} className='flex gap-2 items-center border border-[#00000026] rounded-3xl px-4 py-3 text-xs font-semibold '><Logo className='w-4 h-4' src={btn.image} alt={btn.name}/>{btn.name}</button>)
        }
    </div>
  )
}

export default Shortcuts