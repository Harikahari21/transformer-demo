import { ClientLogo, ContactDetails, WhyGamma } from "@/components";
import AboutGamma from "@/components/aboutUs/AboutGamma";
import { PublicLayout } from "@/layouts";

const AboutUs = () => {
  return (
    <PublicLayout>
      <AboutGamma />
      <WhyGamma />
      <ContactDetails />
      <ClientLogo />
    </PublicLayout>
  );
};

export default AboutUs;
