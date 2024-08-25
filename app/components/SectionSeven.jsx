import Button from "@/components/Button";
import Image from "next/image";

export default function SectionSeven() {
  return (
    <div className="bg-primary-400 max-w-7xl max-h-[331px] lg:max-h-[300px] mx-auto rounded-[10px] mb-[100px] relative">
      <div className="flex flex-col lg:flex-row justify-between px-10 lg:px-[61px] py-11 lg:py-[52px]">
        <h3 className="text-lg lg:text-4x text-center lg:text-left font-semibold pb-5 lg:pb-7 max-w-[635px]">
          <span className="text-primary-500">Improve</span>your skills, and
          reach your career as soon as possible
        </h3>
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <Button variant="primary" className="px-6 py-4 font-bold">
            Join Now
          </Button>
          <Button variant="green" className="px-6 py-4 font-bold">
            Subscribe Course
          </Button>
        </div>
      </div>

      <Image
        src="/LeftCircle.png"
        alt="LeftCircle"
        width={61}
        height={59}
        className="w-[61px] h-[59px] absolute top-0 left-0"
      />
    </div>
  );
}