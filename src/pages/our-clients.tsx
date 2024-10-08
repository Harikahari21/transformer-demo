import { Banner } from "@/components";
import { PublicLayout } from "@/layouts";
import { ClassNames } from "@emotion/react";
import { motion } from "framer-motion";
import { title } from "process";
import { useState } from "react";

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ourClientsPageArray = [
    {
      pageName: "Our Clients",
      pagePath: ``,
    },
  ];

  const clientType = [
    {
      _id: "1",
      type: "Domestic Client",
      className: " ",
      photos: [
        {
          img: "/Gamma/clients/Photo.png",
          title: "Orissa",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(2).png",
          title: "Bihar",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Photo(1).png",
          title: "Maharashtra",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(3).png",
          title: "Punjab",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(4).png",
          title: "Govt. of Manipur",
          desc: " Electricity Department",
        },
        {
          img: "/Gamma/clients/Image(5).png",
          title: "Jabalpur",
          desc: "M.P Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(3).png",
          title: "Rajasthan",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(4).png",
          title: "West Bengal",
          desc: " Electricity Department",
        },
        {
          img: "/Gamma/clients/Image(5).png",
          title: "Dept. Of Atomic Energy",
          desc: " Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(3).png",
          title: "TATA Project Ltd ",
          desc: " Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(4).png",
          title: "Kirloskore Electricity ltd.",
          desc: " Electricity Department",
        },
        {
          img: "/Gamma/clients/Image(5).png",
          title: "Shilong",
          desc: "North Eastern Electric Power",
        },
      ],
    },
    {
      _id: "2",
      type: "International Client",
      ClassName: "border-2",
      photos: [
        {
          img: "/Gamma/clients/Photo.png",
          title: "Dubai",
          desc: "Dubai Electricity & Water",
        },
        {
          img: "/Gamma/clients/Image(2).png",
          title: "U.A.E",
          desc: "Ministry Of Electricity ",
        },
        {
          img: "/Gamma/clients/Photo(1).png",
          title: "Nepal",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(3).png",
          title: "Bangladesh",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(4).png",
          title: "Nigeria",
          desc: " Electricity Department",
        },
        {
          img: "/Gamma/clients/Image(5).png",
          title: "Bangladesh",
          desc: "M.P Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(3).png",
          title: "Suriname",
          desc: "State Electricity Board",
        },
        {
          img: "/Gamma/clients/Image(4).png",
          title: "Egypt",
          desc: " Electricity Department",
        },
        {
          img: "/Gamma/clients/Image(5).png",
          title: "Tripoli",
          desc: " Electricity Board",
        },
      ],
    },
  ];
  return (
    <PublicLayout>
      <Banner title="Our Clients" pathArr={ourClientsPageArray} />
      <section className="main-container flex flex-col gap-10 py-24">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-semibold text-4xl text-[#1C2752]">Our Clients</h2>
          <p className="text-sm text-gray-500 lg:w-[44%] text-center">
            Discover the transformative power of our product. Unlocking new
            possibilities, enhancing experiences, and simplifying everyday tasks
            for everyone.
          </p>
          <div className="flex items-center">
            <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
            <div className="w-20 h-[2.5px] bg-primary"></div>
            <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className=" grid  grid-cols-2 border border-primary md:w-[50%]">
            {clientType?.map((curElm, index) => (
              <>
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
                  key={curElm._id}
                  className={`capitalize tracking-wide px-4 py-1.5  flex justify-center items-center  cursor-pointer common-transition  ${
                    activeIndex === index
                      ? `bg-primary text-white ${curElm?.className}`
                      : " text-primary"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <p className="text-sm">{curElm.type}</p>
                </motion.span>
              </>
            ))}
          </div>
          <div className="main-container ">
            {clientType?.map((item, index) => (
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-10 transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "visible " : "hidden"
                }`}
                key={item._id}
              >
                {clientType[activeIndex]?.photos?.map((item, i) => (
                  <motion.div
                    rel="noopener noreferrer"
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0, x: 0, y: 0 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          delay: i * 0.2,
                        },
                      },
                    }}
                    className={`border p-4  w-fit`}
                    key={i}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={item?.img}
                        alt=""
                        className="w-full h-full object-cover "
                      />
                      <div className="flex flex-col gap-1 items-center">
                        <p className="font-semibold text-lg text-[#1C2752]">
                          {item?.title}
                        </p>
                        <p className="text-[#7E7E7E] text-sm font-semibold">
                          {item?.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default OurClients;
