import PricingCard from "@/components/PricingCard";

const pricingPlans = [
  {
    price: "$50",
    duration: "1 month",
    planName: "Base",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Access all videos",
      "Get Certificate",
      "Chat support",
      "Update Notification",
      "Download material",
    ],
  },
  {
    price: "$100",
    duration: "6 months",
    planName: "Pro",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Access all videos",
      "Get Certificate",
      "Chat support",
      "Update Notification",
      "Download material",
    ],
    mostPopular: true, // Indicates that this is the most popular plan
  },
  {
    price: "$200",
    duration: "12 months",
    planName: "Enterprise",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Access all videos",
      "Get Certificate",
      "Chat support",
      "Update Notification",
      "Download material",
    ],
  },
];

export default function SubscribeSection() {
  return (
    <div className="max-w-[850px] mx-auto mb-[100px] px-11 lg:px-0">
      <div className="flex flex-col justify-center items-center gap-2 pb-5 lg:pb-12 max-w-[545px] mx-auto">
        <h2 className="text-lg lg:text-4x text-center lg:text-left font-semibold">
          <span className="text-primary-500">Subscribe</span> with us now
        </h2>
        <p className="text-[#808080] text-center text-xs lg:text-base">
          by subscribing now you will be able to access the material easily and
          cheaply, so you will be very efficient and benefit
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-6 p-0 lg:p-12">
        {pricingPlans.map((plan, index) => ( 
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}