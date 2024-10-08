import { useState } from "react";
import { motion } from "framer-motion";
import { LiaToolsSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const latestProjects = [
    {
      _id: "1",
      type: "All Projects",
      icon: <LiaToolsSolid />,
      photos: [
        {
          _id: "1.1",
          image: "/Gamma/projects/Container.png",
          placing: "",
        },
        {
          _id: "1.2",
          image: "/Gamma/projects/Container-1.png",
          placing: "",
        },
        {
          _id: "1.3",
          image: "/Gamma/projects/Container-2.png",
          placing: "",
        },
        {
          _id: "1.4",
          image: "/Gamma/projects/Container-3.png",
          placing: "",
        },
      ],
    },
    {
      _id: "2",
      type: "Upcoming",
      icon: <IoCalendarOutline />,
      photos: [
        {
          _id: "2.1",
          image: "/Gamma/projects/Container.png",
          placing: "",
        },
        {
          _id: "2.2",
          image: "/Gamma/projects/Container-1.png",
          placing: "",
        },
        {
          _id: "2.3",
          image: "/Gamma/projects/Container-2.png",
          placing: "",
        },
        {
          _id: "2.4",
          image: "/Gamma/projects/Container-3.png",
          placing: "",
        },
      ],
    },
    {
      _id: "3",
      type: "Completed",
      icon: <IoIosCheckmarkCircleOutline />,
      photos: [
        {
          _id: "3.1",
          image: "/Gamma/projects/Container.png",
          placing: "",
        },
        {
          _id: "3.2",
          image: "/Gamma/projects/Container-1.png",
          placing: "",
        },
        {
          _id: "3.3",
          image: "/Gamma/projects/Container-2.png",
          placing: "",
        },
        {
          _id: "3.4",
          image: "/Gamma/projects/Container-3.png",
          placing: "",
        },
      ],
    },
    {
      _id: "4",
      type: "Ongoing",
      icon: <TbProgressCheck />,
      photos: [
        {
          _id: "4.1",
          image: "/Gamma/projects/Container.png",
          placing: "",
        },
        {
          _id: "4.2",
          image: "/Gamma/projects/Container-1.png",
          placing: "",
        },
        {
          _id: "4.3",
          image: "/Gamma/projects/Container-2.png",
          placing: "",
        },
        {
          _id: "4.4",
          image: "/Gamma/projects/Container-3.png",
          placing: "",
        },
      ],
    },
  ];

  return (
    <section className=" relative">
      <div className=" bg-primary">
        <div
          className=" bg-no-repeat bg-center bg-cover "
          style={{ backgroundImage: "url(/Gamma/Image.png)" }}
        >
          <div className="flex flex-col gap-6 items-center justify-center lg:py-16 py-8 text-white">
            <h2 className="text-3xl font-medium ">Our Latest Projects</h2>
            <p className="text-center w-[45%] text-[#EDEDED]">
              All functions including supply chain, value chain, project
              scheduling, manufacturing, services and spares, technology, R&D,
              etc. are integrated to give a complete solutions package.
            </p>
            <div className="flex items-center">
              <div className="w-20 h-[1.2px] bg-[#B2D6F6]"></div>
              <div className="w-20 h-[2.5px] bg-[#FAFDFF]"></div>
              <div className="w-20 h-[1.2px] bg-[#B2D6F6]"></div>
            </div>
            <div className="xl:w-[50%] 2xl:w-[35%] grid md:grid-cols-4 grid-cols-2 divide-x  py-8 lg:py-8">
              {latestProjects?.map((curElm, index) => (
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
                  className={`capitalize tracking-wide px-4 py-1.5  flex justify-center items-center cursor-pointer common-transition ${
                    activeIndex === index
                      ? "bg-white text-primary "
                      : " bg-gray-100/10 text-white"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex gap-2 items-center">
                    <div className="text-lg">{curElm?.icon}</div>
                    <p className="text-sm">{curElm.type}</p>
                  </div>
                </motion.span>
              ))}
            </div>
            <div className="main-container pb-5">
              {latestProjects?.map((item, index) => (
                <div
                  className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-8 transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "visible " : "hidden"
                  }`}
                  key={item._id}
                >
                  {latestProjects[activeIndex]?.photos?.map((item, i) => (
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
                      className={`relative group ${item.placing} `}
                      key={item._id}
                    >
                      <img
                        src={item?.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105  common-transition"
                      />
                      {/* <div className="absolute inset-0 w-full h-full bg-black/10 group-hover:bg-black/40 common-transition"></div> */}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
            <div className="bg-white py-2 px-10 text-primary font-semibold cursor-pointer text-xs ">
              VIEW MORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
