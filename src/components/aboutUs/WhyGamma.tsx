import { leftAsideVariants } from "@/utils";
import { motion } from "framer-motion";

const WhyGamma = () => {
  const whyGammaArray = [
    {
      img: "/Gamma/about-us/Image(1).png",
      title: "Assured Quality",
      className: "lg:col-span-4 border rounded-md",
    },
    {
      img: "/Gamma/about-us/Image(2).png",
      title: "Efficient & professional workers",
      className: "lg:col-span-4",
    },
    {
      img: "/Gamma/about-us/Image(3).png",
      title: "Credibility & Integrity",
      className: "lg:col-span-4",
    },
    {
      img: "/Gamma/about-us/Image(3).png",
      title: "Team work",
      className: "lg:col-span-6 lg:col-start-4 lg:col-end-6",
    },
    {
      img: "/Gamma/about-us/Image.png",
      title: "Assured delivery on time",
      className: "lg:col-span-6 lg:col-start-7 lg:col-end-12",
    },
  ];
  return (
    <>
      <section className="main-container py-24 flex flex-col gap-8">
        <div className="flex flex-col gap-4 items-center ">
          <div className="flex items-center gap-2">
            <div className="bg-primary h-7 w-[3px]"></div>
            <p className="text-primary font-semibold text-base">
              WHY Gamma TRANSFORMER
            </p>
          </div>
          <h2 className="font-bold text-3xl lg:w-[40%] text-center  ">
            All Transformer Comes With A Several Quality Check
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2 gap-6">
          {whyGammaArray.map((item, i) => (
            <motion.div
              key={i}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 70 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.2,
                  },
                },
              }}
              className={` p-6 flex items-center justify-center ${item?.className}`}
            >
              <div className="flex flex-col gap-4 items-center">
                <div className="bg-primary rounded-full p-6 shadow-2xl w-fit">
                  <img src={item.img} alt="" />
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="main-container pb-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
          <div className="flex flex-col gap-10 text-sm lg:w-5/6 overflow-hidden text-gray-600 justify-center">
            <motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              <p className="flex flex-col gap-1">
                The company offers all types of transformers and other allied
                <span>equipments for</span>
                <span>
                  power rating 50 MVA, voltage class up to 132 KV and
                  installation work
                </span>{" "}
                for voltage class up to 11 KV.
              </p>
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              <p className="flex flex-col gap-1">
                We have proposed to install a new unit for manufacturing Power
                Transformers upto 100 MVA, 132 KV class, over a land area of
                approx
                <span>45000</span>
                sq.Ft. At Bhubaneswar, Odisha. The project is under
                implementation and is planned to be commissioned within one
                year.
              </p>
            </motion.p>
          </div>
          <div className="flex lg:justify-end">
            <img
              src="/Gamma/about-us/Transformer.png"
              alt=""
              className="h-[400px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyGamma;
