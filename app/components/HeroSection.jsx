import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import {
  heroTextHead,
  heroTextSubHead,
  navLinks,
} from "@/common/constent/const";
import Button from "@/components/Button";
import Image from "next/image";
import {
  ArrowRightUp,
  Discord,
  Instagram,
  Twitter,
} from "@/components/svg/icons";

export default function HeroSection() {
  return (
    <div className="w-full h-[677px] bg-secondary-500 text-white">
      <Container>
        <nav className="hidden lg:flex justify-between items-center pt-6 pb-12">
          <Logo />

          <section id="nav-links" className="flex gap-8 items-center">
            {navLinks.map((item) => (
              <Link className="text-lg" key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </section>

          <section id="buttons" className="flex gap-5 items-center">
            <Link href="#" className="text-lg">
              Login
            </Link>
            <Button>Register</Button>
          </section>
        </nav>

        <section className="flex justify-between">
          <div className="w-full lg:w-[630px]">
            {heroTextHead}
            <p className="text-secondary text-lg pt-3">{heroTextSubHead}</p>

            <div className="flex items-center gap-5 pt-8">
              <Button className="text-xl font-bold px-6 py-3 gap-4 rounded-[4px]">
                Start Journey <ArrowRightUp className="w-3 h-3" />
              </Button>
              <div className="flex items-center gap-4">
                <Instagram className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Discord className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/HeroMan.png"
              alt="Hero man"
              width={408}
              height={541}
              className="hidden lg:block w-[408px] h-[565px]"
            />

            <Image
              src="/Calender.png"
              alt="Calender"
              width={46}
              height={46}
              className="absolute w-[46px] h-[46px] bottom-12 right-0"
            />

            <Image
              src="/Play.png"
              alt="Play"
              width={46}
              height={46}
              className="absolute w-[46px] h-[46px] top-[151px] right-[38px]"
            />

            <Image
              src="/Pencil.png"
              alt="Pencil"
              width={46}
              height={46}
              className="absolute w-[46px] h-[46px] top-[43px] left-[13px]"
            />
          </div>
        </section>
      </Container>
    </div>
  );
}