import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  const worksArray = [
    {
      img: "/Gamma/Container.png",
      title: "Mechanical Works",
      desc: "Mechanical technology is the core of industrialization and Solustrid provides the best solution for any kind.",
    },
    {
      img: "/Gamma/Container(1).png",
      title: "Automation Industry",
      desc: "Automation is the topmost technology in today’s world and we are the topper at it. We have already provided.",
    },
    {
      img: "/Gamma/Container(2).png",
      title: "Petroleum Refinery",
      desc: "We refine Petroliums in the best possible way that our customers can have the cent percent use of it.We guarantee.",
    },
    {
      img: "/Gamma/Container(3).png",
      title: "Industry Construction",
      desc: "Industrial construction is a specific form of building that requires expert training and highly experienced.",
    },
  ];
  return (
    <section className=" lg:pb-40 flex flex-col gap-10">
      <div className="relative">
        <img src="/Gamma/hero-bg.png" className="w-full " />
        <div className="absolute inset-0 xl:-top-40 2xl:-top-60 text-center flex justify-center items-center text-white">
          <div className="flex flex-col gap-6 items-center">
            <div className="font-bold lg:text-5xl 2xl:text-7xl 2xl:w-[50%] text-lg xl:w-[40%] md:w-[65%]">
              A COMPANY TO CHANGE THE WORLD
            </div>
            <p className="flex justify-center xl:w-[45%] md:w-[70%] text-xs md:text-base 2xl:text-xl">
              We are being made aware that the organization of society on the
              principle of private profit, as well as public destruction, is
              leading both to the deformation of humanity by unregulated
              industrialism, and to the exhaustion of natural resources.
            </p>
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 items-center bg-primary rounded-sm px-4 py-2 ">
                <p className="text-sm">LEARN MORE</p>
                <IoIosArrowRoundForward className="text-2xl" />
              </div>
              <div className="bg-white px-4 py-2 rounded-sm text-black text-sm">
                OUR SERVICES
              </div>
            </div>
          </div>
        </div>
        <section className="absolute -bottom-36 hidden lg:flex  ">
          <div className=" flex justify-center items-center">
            <div className="lg:w-[80%] flex justify-center items-center bg-white shadow-xl ">
              <div className="grid grid-cols-4 gap-2 divide-x ">
                {worksArray?.map((item, i) => (
                  <div key={i} className="flex flex-col gap-5 items-center p-5">
                    <img src={item?.img} alt="" />
                    <p className="font-semibold">{item?.title}</p>
                    <p className="text-xs text-center text-gray-600">
                      {item?.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex  main-container lg:hidden">
        <div className=" flex justify-center items-center">
          <div className="lg:w-[80%] flex justify-center items-center bg-white shadow-xl ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 divide-x ">
              {worksArray?.map((item, i) => (
                <div key={i} className="flex flex-col gap-5 items-center p-5">
                  <img src={item?.img} alt="" />
                  <p className="font-semibold">{item?.title}</p>
                  <p className="text-xs text-center text-gray-600">
                    {item?.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
