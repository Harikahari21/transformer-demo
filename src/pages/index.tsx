import {
  AboutSection,
  BlogSection,
  ClientLogo,
  CounterSection,
  HeroSection,
  MoreAboutUs,
  OneImage,
  OurTeam,
  ProjectSection,
  Testimonials,
} from "@/components/home";
import { PublicLayout } from "@/layouts";

const HomeSection = () => {
  return (
    <PublicLayout ogImage="">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <MoreAboutUs />
      <CounterSection />
      <Testimonials />
      <OurTeam />
      <OneImage />
      <BlogSection />
      <ClientLogo />
    </PublicLayout>
  );
};

export default HomeSection;
