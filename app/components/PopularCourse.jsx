"use client";
import CourseCard from "@/components/CourseCard";
import { LeftArrow, RightArrow } from "@/components/svg/icons";
import Image from "next/image";
import { useRef } from "react";

const allCourses = [
  {
    id: 1,
    videoLink: "https://youtu.be/5bIJQkuwVik?si=GqlotcX_nZgOQHj-",
    img: "/Programer.png",
    courseName: "Basics of learning team management",
    teacherName: "Jone Owel",
    role: "IT Manager",
    participant: "120",
    price: "120",
    videos: "25",
  },
  {
    id: 2,
    videoLink: "https://youtu.be/CLSyaOb3npY?si=8tlVbwGWNuS92c1o",
    img: "/Programer.png",
    courseName: "Learn basic database structure",
    teacherName: "Roynaldo Jr",
    role: "Data Science",
    participant: "55",
    price: "180",
    videos: "20",
  },
  {
    id: 3,
    videoLink: "https://youtu.be/NWnBxQjssvQ?si=mq_HKrJj9J_UJkxA",
    img: "/Programer.png",
    courseName: "Create dynamic website with basic php",
    teacherName: "Markus Low",
    role: "Data Science",
    participant: "98",
    price: "135",
    videos: "20",
  },
  {
    id: 4,
    videoLink: "https://youtu.be/SwleWpQy5ik?si=5sItt5i6jh8ZDbE2",
    img: "/Programer.png",
    courseName: "Create dynamic website with basic php",
    teacherName: "Markus Low",
    role: "Data Science",
    participant: "98",
    price: "135",
    videos: "20",
  },
];

export default function PopularCourse() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust this value based on how much you want to scroll
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value based on how much you want to scroll
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-secondary-500 min-h-[862px] relative text-center text-white mb-[100px]">
      <h2 className="text-4xl font-semibold pb-[10px] pt-[76px]">
        Popular courses of the week
      </h2>
      <p className="pb-12 pt-2 max-w-[347px] mx-auto">
        List of the most popular lists that are often studied by our members
      </p>

      <div className="relative flex justify-center items-center w-full max-w-[1281px] mx-auto">
        <button
          className="absolute -left-6 z-10 bg-gray-300 p-2 rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <div className="p-3 rounded-full bg-white">
            <LeftArrow className="w-[18px] h-5 text-white" />
          </div>
        </button>
        <div
          ref={scrollContainerRef}
          className="flex justify-start items-center gap-5 overflow-x-scroll no-scrollbar w-full"
        >
          {allCourses.map((item) => (
            <CourseCard key={item.id} item={item} />
          ))}
        </div>
        <button
          className="absolute -right-5 z-10 bg-gray-300 p-2 rounded-full shadow-md"
          onClick={scrollRight}
        >
          <div className="p-3 rounded-full bg-secondary-500">
            <RightArrow className="w-[18px] h-5 text-white" />
          </div>
        </button>
      </div>

      <Image
        src="/SeconderySmallDesign.png"
        alt="SeconderySmallDesign"
        width={52}
        height={46}
        className="w-[52px] h-[46px] absolute top-[128px] left-[176px]"
      />

      <Image
        src="/SmallCircleDesign.png"
        alt="SmallCircleDesign"
        width={24}
        height={25}
        className="w-[24px] h-[25px] absolute top-[103px] right-[188px]"
      />
    </div>
  );
}