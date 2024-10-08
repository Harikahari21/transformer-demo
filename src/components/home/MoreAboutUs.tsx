import { motion } from "framer-motion";
import { useState } from "react";

const MoreAboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const moreAboutArray = [
    {
      id: 1,
      title: "WHY CHOOSE US",
      desc: "Gamma Transformer delivers expertise,technology, and tailored solutions with quality assurance and sustainability focus. Experience exceptional service and global reach for all your transformer requirements.",
      subArray: [
        {
          image: "/Gamma/small-img/SVG.png",
          title: "Assured Quality",
          desc: "Guaranteed peace of mind with our unwavering commitment to assured quality",
        },
        {
          image: "/Gamma/small-img/Icon(1).png",
          title: "Efficient & Professional Work",
          desc: "Delivering efficient and professional work with precision and expertise.",
        },
        {
          image: "/Gamma/small-img/Icon.png",
          title: "Credibility & Integrity",
          desc: "Exemplifying credibility and integrity in every action and decision.",
        },
        {
          image: "/Gamma/small-img/Icon(2).png",
          title: "Team Work",
          desc: "Fostering synergy and collaboration through effective teamwork",
        },
      ],
    },
    {
      id: 2,
      title: "MISSION & VISION",
      desc: "Gamma Transformer delivers expertise,technology, and tailored solutions with quality assurance and sustainability focus. Experience exceptional service and global reach for all your transformer requirements.",
      subArray: [
        {
          image: "/Gamma/small-img/SVG.png",
          title: "Assured Quality",
          desc: "Guaranteed peace of mind with our unwavering commitment to assured quality",
        },
        {
          image: "/Gamma/small-img/Icon(1).png",
          title: "Efficient & Professional Work",
          desc: "Delivering efficient and professional work with precision and expertise.",
        },
        {
          image: "/Gamma/small-img/Icon.png",
          title: "Credibility & Integrity",
          desc: "Exemplifying credibility and integrity in every action and decision.",
        },
        {
          image: "/Gamma/small-img/Icon(2).png",
          title: "Team Work",
          desc: "Fostering synergy and collaboration through effective teamwork",
        },
      ],
    },
    {
      id: 3,
      title: "ACHIEVEMENTS",
      desc: "Gamma Transformer delivers expertise,technology, and tailored solutions with quality assurance and sustainability focus. Experience exceptional service and global reach for all your transformer requirements.",
      subArray: [
        {
          image: "/Gamma/small-img/SVG.png",
          title: "Assured Quality",
          desc: "Guaranteed peace of mind with our unwavering commitment to assured quality",
        },
        {
          image: "/Gamma/small-img/Icon(1).png",
          title: "Efficient & Professional Work",
          desc: "Delivering efficient and professional work with precision and expertise.",
        },
        {
          image: "/Gamma/small-img/Icon.png",
          title: "Credibility & Integrity",
          desc: "Exemplifying credibility and integrity in every action and decision.",
        },
        {
          image: "/Gamma/small-img/Icon(2).png",
          title: "Team Work",
          desc: "Fostering synergy and collaboration through effective teamwork",
        },
      ],
    },
    {
      id: 4,
      title: "OUR SUMMARY",
      desc: "Gamma Transformer delivers expertise,technology, and tailored solutions with quality assurance and sustainability focus. Experience exceptional service and global reach for all your transformer requirements.",
      subArray: [
        {
          image: "/Gamma/small-img/SVG.png",
          title: "Assured Quality",
          desc: "Guaranteed peace of mind with our unwavering commitment to assured quality",
        },
        {
          image: "/Gamma/small-img/Icon(1).png",
          title: "Efficient & Professional Work",
          desc: "Delivering efficient and professional work with precision and expertise.",
        },
        {
          image: "/Gamma/small-img/Icon.png",
          title: "Credibility & Integrity",
          desc: "Exemplifying credibility and integrity in every action and decision.",
        },
        {
          image: "/Gamma/small-img/Icon(2).png",
          title: "Team Work",
          desc: "Fostering synergy and collaboration through effective teamwork",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-8 py-16">
      <div className="main-container flex flex-col gap-5">
        <h2 className="font-semibold text-4xl">Find Out More About Us</h2>
        <p className="text-sm text-gray-500 lg:w-[44%]">
          Our people are our biggest asset but the only way to unlock their
          potential is to invest in the right business systems that encourage
          innovation.
        </p>
        <div className="flex items-center">
          <div className="w-20 h-1 bg-primary"></div>
          <div className="w-20 h-[2.5px] bg-[#DEDEDE]"></div>
        </div>
      </div>
      <div className="relative hidden lg:flex">
        <img src="/Gamma/MoreAbout.jpeg" className="" />
        <div className="absolute inset-0  flex justify-end md:py-10">
          <div className="bg-white w-[54%] 2xl:w-[60%] flex flex-col gap-10 md:p-8 md:pr-12 p-4">
            <div className=" grid md:grid-cols-4 grid-cols-2 ">
              {moreAboutArray?.map((curElm, index) => (
                <motion.span
                  viewport={{ once: true }}
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {
                      scale: 0,
                    },
                    visible: {
                      scale: 1,
                      transition: {
                        duration: 0.3,
                        delay: index * 0.2,
                      },
                    },
                  }}
                  key={curElm.id}
                  className={`capitalize tracking-wide flex justify-center items-center cursor-pointer common-transition border-t-2 pt-2  ${
                    activeIndex === index ? "border-primary border-t-4" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <p className="text-sm font-semibold">{curElm.title}</p>
                </motion.span>
              ))}
            </div>
            <div className="">
              {moreAboutArray?.map((item, index) => (
                <div
                  className={`flex flex-col gap-8 2xl:gap-16 ${
                    activeIndex === index ? "visible " : "hidden"
                  } `}
                  key={item?.id}
                >
                  <div className="text-gray-500">{item?.desc}</div>

                  <div className="grid lg:grid-cols-2 grid-cols-1 px-4 gap-6">
                    {moreAboutArray?.[activeIndex]?.subArray?.map((data, i) => (
                      <div
                        className="border lg:p-4 2xl:p-8 flex gap-4 items-center"
                        key={i}
                      >
                        <img src={data?.image} alt="" />
                        <div className="flex flex-col gap-2">
                          <p className="text-lg font-semibold">{data?.title}</p>
                          <p className="text-sm text-gray-500">{data?.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex">
        <div className="bg-white flex flex-col gap-10  p-4">
          <div className=" grid  grid-cols-2 ">
            {moreAboutArray?.map((curElm, index) => (
              <motion.span
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {
                    scale: 0,
                  },
                  visible: {
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.2,
                    },
                  },
                }}
                key={curElm.id}
                className={`capitalize tracking-wide flex justify-center items-center cursor-pointer common-transition border p-2  ${
                  activeIndex === index ? "bg-primary text-white " : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <p className="text-sm font-semibold">{curElm.title}</p>
              </motion.span>
            ))}
          </div>
          <div className="">
            {moreAboutArray?.map((item, index) => (
              <div
                className={`flex flex-col gap-8 ${
                  activeIndex === index ? "visible " : "hidden"
                } `}
                key={item?.id}
              >
                <div className="text-gray-500">{item?.desc}</div>

                <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-6">
                  {moreAboutArray?.[activeIndex]?.subArray?.map((data, i) => (
                    <div className="border p-8 flex gap-4 items-center" key={i}>
                      <img src={data?.image} alt="" />
                      <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{data?.title}</p>
                        <p className="text-sm text-gray-500">{data?.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUs;
