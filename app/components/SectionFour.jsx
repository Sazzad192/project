import { existParagraph } from "@/common/constent/const";
import Image from "next/image";

const allItems = [
  {
    id: 1,
    img: "/Limitations.png",
    title: "Material Limitations",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: "/Mentor.png",
    title: "Unprofessional Mentor",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: "/Video.png",
    title: "Video Quality",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    img: "/Price.png",
    title: "High Price",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function SectionFour() {
  return (
    <div className="flex justify-start items-start gap-44 pb-[91px] max-w-[1250px] mx-auto">
      <section className="max-w-[477px]">
        <h2 className="text-4xl font-semibold">
          Why do we <span className="text-primary-500">exist?</span>
        </h2>
        <p className="text-[#808080] pt-5 pb-8">{existParagraph}</p>

        <div className="flex items-center gap-3 border-b pb-[30px]">
          <Image
            src="/CEO.png"
            alt="CEO"
            width={71}
            height={71}
            className="w-[71px] h-[71px] rounded-full"
          />
          <div className="">
            <p className="text-lg font-semibold">Jerony Pulquosta</p>
            <p className="text-xs font-normal">CEO Skill Shoot</p>
          </div>
        </div>

        <div className="pt-[30px] flex gap-[67px]">
          <div className="">
            <h3 className="font-bold text-4xl">100+</h3>
            <p className="text-xs text-[#808080]">Updated Material</p>
          </div>
          <div className="">
            <h3 className="font-bold text-4xl">15K</h3>
            <p className="text-xs text-[#808080]">Member Join</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-x-14 gap-y-16">
        {allItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-[30px]">
            <Image
              src={item.img}
              alt={item.title}
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="space-y-2">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-[#808080]">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
