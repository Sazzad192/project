import Button from "@/components/Button";
import Image from "next/image";

export default function SectionSeven() {
  return (
    <div className="bg-primary-400 max-w-7xl max-h-[300px] mx-auto rounded-[10px] mb-[100px] relative">
      <div className="flex justify-between px-[61px] py-[52px]">
        <h3 className="text-4xl font-semibold pb-7 max-w-[635px]">
          <span className="text-primary-500">Improve</span>your skills, and
          reach your career as soon as possible
        </h3>
        <div className="flex gap-5 items-center">
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