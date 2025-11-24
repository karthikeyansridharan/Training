import Recommendation from './Recommendation';
import { recommendationData } from '../../../constants/myAccountConstants';

const Recommendations = () => {
  return (
    <div className="flex overflow-x-scroll gap-4 mt-2 hide-scrollbar">
      {recommendationData.map((item, idx) => (
        <Recommendation key={idx} {...item} />
      ))}
    </div>
  );
};

export default Recommendations;
