import { motion } from "framer-motion";
import { Banner } from "../common";
import { leftAsideVariants, rightAsideVariants } from "@/utils";

const AboutGamma = () => {
  const aboutUsPageArray = [
    {
      pageName: "About Us",
      pagePath: ``,
    },
  ];

  return (
    <section className="flex flex-col gap-2">
      <Banner title="About Us" pathArr={aboutUsPageArray} />
      <div className="main-container grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0 py-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="bg-primary h-7 w-[3px]"></div>
            <p className="text-primary font-semibold text-base">
              42 YEARS OF EXPERIENCE
            </p>
          </div>
          <h2 className="font-bold text-3xl lg:w-4/5">About Us</h2>
          <div className="flex flex-col gap-2 text-sm lg:w-5/6 overflow-hidden text-gray-600">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              Gamma has established itself as a leading manufacturer of
              transformers and electrical equipment due to its experienced and
              skilledOur establishment dates back to 1982 , as a start-up unit
              manufacturing transformers in the small to medium range in the
              year 1988. We produce Electrical Distribution & Power Transformers
              ranging from 10KVA, 12KV Class to Transformers of 10 MVA, 36 KV
              Class. We are now a major supplier to utilities, multinationals
              and domestic corporates.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              Since 1997, our certification as an ISO 9001 company has
              positively strengthened our operators for the requirement of an
              international market. Our state of art facilities have eased our
              effort to match desired production standards. We have now exported
              to over different countries including Nepal, Bangladesh, Dubai,
              Nigeria and Suriname etc.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              At the core of our operations, a team of qualified engineers and
              technical excelling in the design and development of quality
              transformers. Our working ethos values integrity, reliability,
              commitment and trust, deliverables, which help to create perfect
              Transformers. workforce. The company produces Submerged Arc
              Melting Furnace Transformers, Induction Melting Furnace
              Transformers, Energy Efficient Power and Distribution
              Transformers, and LT Panel Boards. Our trans system services
              deliver optimised performance, efficiency, and reliability. With
              decades of experience in transformer manufacturing, Makpower has
              expanded its production capabilities and now supplies its products
              internationally.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/about-us/Checkbox.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutGamma;
