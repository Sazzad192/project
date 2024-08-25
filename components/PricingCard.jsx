import Image from "next/image";
import Button from "./Button";
import { RightMark } from "./svg/icons";

const PricingCard = ({ plan }) => {
  return (
    <div className={`flex flex-col w-[292px] rounded-2xl p-6 relative ${plan.mostPopular ? 'bg-secondary-500 text-white shadow-2xl shadow-secondary-500' : 'bg-white text-black'}`}>
      {plan.mostPopular && (
        <div className="bg-primary-500 text-white text-[10px] font-semibold px-4 py-1 rounded-full self-end mb-2">
          Most Popular
        </div>
      )}
      <h2 className="text-3xl font-bold">{plan.price}<span className="text-base"> /{plan.duration}</span></h2>
      
      <h3 className="text-xl font-semibold mt-4">{plan.planName}</h3>
      <p className="text-sm mt-2">{plan.description}</p>
      <ul className="mt-4 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <RightMark className={plan.mostPopular ? "mr-2 text-white w-3 h-2" : "text-black mr-2 w-3 h-2"}/>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant={`${plan.mostPopular ? "primary" : "outline"}`} className={`mt-6 py-2 px-4 rounded-lg font-semibold`}>
        Choose Plan
      </Button>
      <Image
        src="/GroupImgs.png"
        alt="GroupImgs"
        width={150}
        height={77}
        className={`w-[150px] h-full absolute -right-9 ${plan.mostPopular ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default PricingCard;
