import { Play, User, UserRight, Video } from "@/components/svg/icons";
import Image from "next/image";
const iconCss = "w-3 lg:w-6 h-3 lg:h-6 text-primary-500";
const skillsArray = [
  {
    id: 1,
    people: "15K People Join",
    icon: <User className={iconCss} />,
  },
  {
    id: 2,
    people: "Trusted Mentor",
    icon: <UserRight className={iconCss} />,
  },
  {
    id: 3,
    people: "30+ Free Videos",
    icon: <Video className={iconCss} />,
  },
  {
    id: 4,
    people: "100+ Premium Videos",
    icon: <Play className={iconCss} />,
  },
];

export default function SkillShoot() {
  return (
    <div className="flex justify-center items-start gap-[150px] max-w-[1142px] min-h-0 lg:min-h-[570px] mx-auto mb-12 lg:mb-[100px] px-11 lg:px-0">
      <div className="hidden lg:flex justify-end items-end relative min-w-[457px] min-h-[570px]">
        <Image
          src="/GreenRectangle.png"
          alt="GreenRectangle"
          width={457}
          height={338}
          className="w-full h-[338px]"
        />

        <Image
          src="/HeroManTwo.png"
          alt="Hero man"
          width={408}
          height={570}
          className="absolute w-[408px] h-[570px] bottom-0"
        />

        <Image
          src="/Pencil.png"
          alt="Pencil"
          width={46}
          height={46}
          className="absolute w-[46px] h-[46px] top-[126px] right-[31px]"
        />

        <Image
          src="/Play.png"
          alt="Play"
          width={46}
          height={46}
          className="absolute w-[46px] h-[46px] top-[92px] left-[6px]"
        />

        <Image
          src="/Calender.png"
          alt="Calender"
          width={46}
          height={46}
          className="absolute w-[46px] h-[46px] bottom-[201px] left-1"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-xl lg:text-5xl font-bold">
          Let us <span className="text-secondary-500">Skill Shoot</span>
        </h2>
        <div className="text-xs lg:text-base space-y-6 py-9">
          <p className="text-[#808080]">
            We are a company engaged in education with the aim of improving the
            skills of many people and so that younger people can reach the
            career paths they want.
          </p>
          <p className="text-[#808080]">
            we have been around since 2019 with currently 100+ updated materials
            and 15K members who have joined.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 lg:gap-x-[106px] gap-y-8">
          {skillsArray.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="p-2 lg:p-3 rounded-full bg-primary-300">{item.icon}</div>
              <p className="text-xs font-semibold">{item.people}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}