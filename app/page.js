import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PopularCourse from "./components/PopularCourse";
import Review from "./components/Review";
import SectionFour from "./components/SectionFour";
import SectionSeven from "./components/SectionSeven";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import SkillShoot from "./components/SkillShoot";
import SubscribeSection from "./components/SubscribeSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <PopularCourse/>
      <SkillShoot/>
      <SectionSeven/>
      <SubscribeSection/>
      <Review/>
      <Footer/>
    </div>
  );
}
