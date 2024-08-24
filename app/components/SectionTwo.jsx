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
    <div className="mx-auto max-w-[1040px] mt-[100px] pb-[186px]">
      <h2 className="text-4xl font-semibold text-center">
        Trusted more than <span className="text-primary-500">100+</span> in the
        world
      </h2>
      <p className="text-center text-[#808080] pt-[10px] w-1/2 mx-auto">
        they have asked us more than 3 times to teach their employees about
        various things. to improve their skills
      </p>
      <div className="flex justify-between items-center pt-[50px]">
        {images.map((item) => (
          <Image
            key={item.id}
            src={item.url}
            alt={item.url}
            width={150}
            height={47}
            className="w-[150px] h-[40px]"
          />
        ))}
      </div>
    </div>
  );
}