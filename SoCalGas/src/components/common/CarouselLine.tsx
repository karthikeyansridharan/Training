import type { CarouselLineProps } from '../../types';

const CarouselLine = ({ style }: CarouselLineProps) => {
  return (
    <div className={`w-1/4 h-1 rounded-2xl bg-[#FFFFFF54] ${style}`}></div>
  );
};

export default CarouselLine;