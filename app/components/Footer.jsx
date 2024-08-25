import { navLinks } from "@/common/constent/const";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-500 text-white relative">
      <div className="max-w-[1280px] mx-auto px-16 lg:px-20 pt-[104px] lg:pt-[118px] pb-10">
        <h2 className="text-center text-lg lg:text-4xl">
          Subscribe to get notified about update
        </h2>
        <p className="text-xs lg:text-base text-center pt-5">
          By subscribing with your mail, you will accept our privacy policy
        </p>

        <div className="flex gap-4 justify-center items-center pb-12 lg:pb-[150px]">
          <div className="flex flex-col lg:flex-row justify-center gap-4 items-center py-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-[280px] lg:w-[380px] text-white bg-secondary-500 placeholder-white outline-none"
            />
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg w-40">
              Subscribe us
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-12  lg:flex-row justify-center lg:justify-between items-center pb-10">
          <Logo />

          <section id="nav-links" className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center">
            {navLinks.map((item) => (
              <Link className="text-lg" key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </section>
        </div>
        <Image
        src="/GroupCircle.png"
        alt="GroupCircle"
        width={62}
        height={72}
        className="w-[62px] h-[72px] absolute top-[381px] lg:top-[216px] right-[53px] lg:right-[171px]"
      />
        <Image
        src="/FooterLine.png"
        alt="FooterLine"
        width={68}
        height={20}
        className="w-[68px] h-5 absolute top-[522px] lg:top-[308px] left-[53px] lg:left-[171px]"
      />

      </div>
    </footer>
  );
}