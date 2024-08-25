import Image from "next/image";

const images = [
  { id: 1, url: "/company/Uber.png" },
  { id: 2, url: "/company/Google.png" },
  { id: 3, url: "/company/Paypal.png" },
  { id: 4, url: "/company/Microsoft.png" },
  { id: 5, url: "/company/Dribble.png" },
];

export default function SectionTwo() {
  return (
    <div className="mx-auto max-w-[1040px] mt-[100px] pb-12 lg:pb-[186px] px-12 lg:px-0">
      <h2 className="text-lg lg:text-4xl font-semibold text-center">
        Trusted more than <span className="text-primary-500">100+</span> in the
        world
      </h2>
      <p className="text-xs lg:text-base text-center text-[#808080] pt-[10px] w-1/2 mx-auto">
        they have asked us more than 3 times to teach their employees about
        various things. to improve their skills
      </p>
      <div className="flex justify-center lg:justify-between gap-6 lg:gap-[90px] items-center pt-[50px] flex-wrap">
        {images.map((item) => (
          <Image
            key={item.id}
            src={item.url}
            alt={item.url}
            width={150}
            height={47}
            className="w-[111px] lg:w-[150px] h-9 lg:h-[40px]"
          />
        ))}
      </div>
    </div>
  );
}