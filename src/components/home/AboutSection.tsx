import { rightAsideVariants } from "@/utils";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="main-container py-24 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        {/* <div className="relative">
          <img src="/Gamma/42-img-2.png" alt="" className="shadow-2xl" />
          <div className="absolute right-28 -bottom-5 ">
            <img src="/Gamma/42-img-1.png" alt="" className="shadow-2xl " />
          </div>
        </div> */}
        <div className="">
          <img src="/Gamma/Container(4).png" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary h-7 w-[3px]"></div>
            <p className="text-primary font-semibold text-base">
              42 YEARS OF EXPERIENCE
            </p>
          </div>
          <h2 className="font-bold text-3xl lg:w-4/5">
            The Leading Transformer Manufacturers in India
          </h2>
          <div className="flex flex-col gap-2 text-sm lg:w-5/6 overflow-hidden">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={rightAsideVariants}
              className="tracking-wide capitalize"
            >
              Our establishment dates back to 1982 , as a start-up unit
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
              variants={rightAsideVariants}
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
              variants={rightAsideVariants}
              className="tracking-wide capitalize"
            >
              At the core of our operations, a team of qualified engineers and
              technical excelling in the design and development of quality
              transformers. Our working ethos values integrity, reliability,
              commitment and trust, deliverables, which help to create perfect
              Transformers.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
