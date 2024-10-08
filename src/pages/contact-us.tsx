import { Banner, ContactDetails } from "@/components";
import { PublicLayout } from "@/layouts";

const ContactUs = () => {
  const contactUsPageArray = [
    {
      pageName: "Contact Us",
      pagePath: ``,
    },
  ];
  return (
    <PublicLayout>
      <Banner title="Contact Us" pathArr={contactUsPageArray} />
      <section className="py-24">
        <ContactDetails />
      </section>
      <div className="w-full pb-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14966.369769653851!2d85.849217!3d20.31713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a13aaaaaaab%3A0x2c362dd628ece0fa!2sAlfa%20Transformers%20Limited!5e0!3m2!1sen!2sin!4v1715256633748!5m2!1sen!2sin"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </PublicLayout>
  );
};

export default ContactUs;
