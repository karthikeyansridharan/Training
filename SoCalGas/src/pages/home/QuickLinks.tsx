import { useNavigate } from 'react-router';
import Button from '../../components/common/Button';
import Logo from '../../components/common/Logo';
import { buttons } from '../../constants/homePageConstants';

const QuickLinks = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/myaccount/bills');
  }
  return (
    <div className='p-4 flex flex-col items-center gap-4 text-black bg-white'>
        <h1 className='text-[20px] font-semibold md:text-[36px]'>Here are some quick links</h1>
        <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:gap-20 w-full">
          {
            buttons.map((btn,index)=>
              <Button key={index} onClick={handleClick} className='flex items-center justify-center gap-2 border border-[#D6D6D6] px-4 py-2 rounded  text-sm font-semibold md:w-1/5 md:text-[18px] cursor-pointer' name={<><Logo src={btn.image} className='w-6 h-6'/> {btn.name}</>}/>
            )
          }
        </div>
    </div>
  );
};

export default QuickLinks