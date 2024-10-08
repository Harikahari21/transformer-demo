import { BiSolidQuoteRight } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const testimonialArray = [
  {
    _id: "1",
    desc: "“ During the time I have worked with SCG on this project, I have found Mike Campbell and his team to be highly knowledgeable and results- driven. Based on preliminary pilot testing and a strong understanding of subsurface. conditions, in particular fractured bedrock environments. ased on their work on this project. “",
    img: "/Gamma/Testimonials/Container(7).png",
    name: "Derek AuCoin",
    designation: "Defence Construction Canada",
  },
  {
    _id: "2",
    desc: "“ For over 10 years working with SCG Industries on environmental contaminated sites they have continuously demonstrated excellent technical ability while ensuring superior customer service. Their collaborative approach and real time flexibility in adapting to changing conditions has contributed to the success of many project goals. “",
    img: "/Gamma/Testimonials/Container(8).png",
    name: "Derek AuCoin",
    designation: "Defence Construction Canada",
  },
  {
    _id: "3",
    desc: "“ During the time I have worked with SCG on this project, I have found Mike Campbell and his team to be highly knowledgeable and results- driven. Based on preliminary pilot testing and a strong understanding of subsurface. conditions, in particular fractured bedrock environments. ased on their work on this project. “",
    img: "/Gamma/Testimonials/Container(7).png",
    name: "Derek AuCoin",
    designation: "Defence Construction Canada",
  },
  {
    _id: "4",
    desc: "“ For over 10 years working with SCG Industries on environmental contaminated sites they have continuously demonstrated excellent technical ability while ensuring superior customer service. Their collaborative approach and real time flexibility in adapting to changing conditions has contributed to the success of many project goals. “",
    img: "/Gamma/Testimonials/Container(8).png",
    name: "Derek AuCoin",
    designation: "Defence Construction Canada",
  },
  {
    _id: "5",
    desc: "“ During the time I have worked with SCG on this project, I have found Mike Campbell and his team to be highly knowledgeable and results- driven. Based on preliminary pilot testing and a strong understanding of subsurface. conditions, in particular fractured bedrock environments. ased on their work on this project. “",
    img: "/Gamma/Testimonials/Container(7).png",
    name: "Derek AuCoin",
    designation: "Defence Construction Canada",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="main-container flex flex-col gap-2  pt-10 pb-24">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-semibold text-4xl">Testimonials</h2>
        <p className="text-sm text-gray-500 lg:w-[44%] text-center">
          {`We’ve structured our workflow processes were from the funny the century rather, initial all the made, have spare to negatives.`}
        </p>
        <div className="flex items-center">
          <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
          <div className="w-20 h-[2.5px] bg-primary"></div>
          <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
        </div>
      </div>

      <section className="w-full testimonial-slider">
        <Slider {...settings}>
          {
            testimonialArray.map((item) => (
              <div
                className="!flex !items-center px-2 md:px-10 pt-20 pb-10 "
                key={item._id}
              >
                <TestimonialCard item={item} />
              </div>
            )) as any
          }
        </Slider>
      </section>
    </section>
  );
};

const TestimonialCard = ({ item }: { item: any }) => {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="relative bg-white px-8 py-12 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
          <p>{item?.desc}</p>
          <div className="absolute -top-5 right-12 bg-primary w-[45px] h-[45px] flex items-center justify-center">
            <BiSolidQuoteRight className="text-white text-xl" />
          </div>
          <div className="absolute -bottom-[14px] left-14 h-[15px] w-[22px] bg-white"></div>
        </div>
        <div className="flex gap-14 items-center">
          <img
            className="w-14 h-14 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
            src={item?.img}
            alt="Bordered avatar"
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="uppercase text-sm font-semibold">{item?.name}</p>
              <div className="flex text-primary text-sm">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
            <p className="text-sm text-gray-500 italic">{item?.designation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
