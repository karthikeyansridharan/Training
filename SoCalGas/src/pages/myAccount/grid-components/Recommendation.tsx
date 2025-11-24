import Logo from '../../../components/common/Logo';

const Recommendation = ({ title, description, cta, icon }) => {
  return (
    <div className="min-w-full bg-[#f1f1f1] p-4 rounded-xl">
      <div className="flex justify-between items-start">
        <p className="font-bold text-sm">{title}</p>
        <img className="w-6 h-6" src={icon} alt="recommendation-icon" />
      </div>

      <p className="text-sm mt-1 w-[70%]">{description}</p>

      <button className="flex items-center gap-2 text-socal-light-blue text-sm font-bold py-2">
        <span>{cta}</span>
        <Logo className="w-4 h-4" src="/right-arrow-blue.png" alt="right-arrow" />
      </button>
    </div>
  );
};

export default Recommendation;
