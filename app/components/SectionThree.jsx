import Button from "@/components/Button";
import Image from "next/image";

export default function SectionThree() {
  return (
    <div className="bg-primary-400 max-w-7xl max-h-[300px] mx-auto rounded-[10px] mb-[100px] relative">
      <div className="max-w-[586px] pl-[61px] py-[52px]">
        <h3 className="text-4xl font-semibold pb-7">
          Happy <span className="text-primary-500">Chinese New Year</span>, 20%
          discount for you today
        </h3>
        <Button variant="green" className="px-6 py-4 font-bold">
          Subscribe Course
        </Button>
      </div>

      <Image
        src="/Boy.png"
        alt="Boy"
        width={289}
        height={433}
        className="w-[289px] h-[433px] absolute bottom-0 right-[143px]"
      />

      <Image
        src="/GreenDesign.png"
        alt="greenDesign"
        width={56}
        height={57}
        className="w-[56px] h-[57px] absolute top-[67px] right-[404px]"
      />
      <Image
        src="/GreenSmallDesign.png"
        alt="greenSmall"
        width={51}
        height={47}
        className="w-[51px] h-[47px] absolute bottom-[22px] right-[123px]"
      />
      <Image
        src="/SmallCircleDesign.png"
        alt="SmallCircleDesign"
        width={24}
        height={25}
        className="w-[24px] h-[25px] absolute bottom-[42px] right-[387px]"
      />

      <Image
        src="/SeconderySmallDesign.png"
        alt="SeconderySmallDesign"
        width={52}
        height={46}
        className="w-[52px] h-[46px] absolute top-[63px] right-[80px]"
      />

      <Image
        src="/LeftCircle.png"
        alt="LeftCircle"
        width={61}
        height={59}
        className="w-[61px] h-[59px] absolute top-0 left-0"
      />
      <Image
        src="/RightCircle.png"
        alt="RightCircle"
        width={61}
        height={59}
        className="w-[61px] h-[59px] absolute bottom-0 right-0"
      />
    </div>
  );
}