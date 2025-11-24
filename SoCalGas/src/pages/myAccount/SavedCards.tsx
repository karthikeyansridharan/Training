import { useContext } from 'react'
import Logo from '../../components/common/Logo'
import useUserStore from '../../store/userStore';
import ModalOpenContext from './ModalOpen';

const SavedCards = () => {
  const {isModalOpen,setIsModalOpen} = useContext(ModalOpenContext);
  const {userData} = useUserStore();
    const userCards = userData.cards;
    
  return (
    <div className="flex flex-col bg-white rounded-lg border border-[#00000026]">
        <p className='font-bold text-sm p-4'>Credit & Debit Cards</p>
        <div className="flex flex-col items-center justify-between">
            {
            userCards.map((card,index)=>
                <div key={index} className={`flex w-full justify-between border-b border-[#00000026] p-4`}>     
                <div className="flex gap-4 items-center">
                    <Logo src='/visa.png' className='w-8 h-[22px]'/>
          
                    <p className='font-medium text-sm'>{"•••• " + card.number.slice(-4)}</p>
                </div>
                <div className="">
                    <input type="checkbox"/>
                </div>
                </div>
            )
            }
            <div className="flex w-full justify-start p-4 gap-4">
              <Logo src='/add-card.png' className='h-[22px] w-8'/>
              <p onClick={()=>setIsModalOpen(true)} className='font-bold text-sm text-[#0141A3] cursor-pointer'>Add New Card</p>
            </div>
            
        </div>
    </div>
  )
}

export default SavedCards