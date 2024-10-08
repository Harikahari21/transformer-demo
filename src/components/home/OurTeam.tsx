import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const teamMembers = [
  {
    _id: "1",
    name: "DILLIP KUMAR DAS",
    desg: "Chairman",
    desc: "The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.",
    img: "/Gamma/teams/ceo.jpg",
  },
  {
    _id: "2",
    name: "DEEPAK KUMAR DAS",
    desg: "CFO",
    desc: "The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.",
    img: "/Gamma/teams/lady.jpg",
  },
  {
    _id: "3",
    name: "DEBASIS DAS",
    desg: "Marketing Director",
    desc: "The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.",
    img: "/Gamma/teams/cto.jpg",
  },
  {
    _id: "1",
    name: "DILLIP KUMAR DAS",
    desg: "Chairman",
    desc: "The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.",
    img: "/Gamma/teams/ceo.jpg",
  },
  {
    _id: "2",
    name: "DEEPAK KUMAR DAS",
    desg: "CFO",
    desc: "The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.",
    img: "/Gamma/teams/lady.jpg",
  },
  {
    _id: "3",
    name: "DEBASIS DAS",
    desg: "Marketing Director",
    desc: "The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.",
    img: "/Gamma/teams/cto.jpg",
  },
];
const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="pb-[35rem] md:pb-96 2xl:pb-64 flex flex-col ">
      <img src="/Gamma/img1.png" alt="" className="w-full h-full" />
      <div className="relative">
        <img
          src="/Gamma/Image(1).png"
          alt=""
          className="w-full h-full bg-[#F3F3F3]"
        />
        <div className="absolute inset-0">
          <div className="main-container flex flex-col lg:gap-16 gap-6 lg:pt-16 pt-6">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-4xl">Our Teams</h2>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-4">
                <p className="text-sm text-gray-500 lg:w-[42%]">
                  The team has consulted on a number of new development projects
                  in New York. They offer guidance on navigating all stages of
                  development.
                </p>
                <button className="bg-black px-8 py-3 text-white text-xs font-semibold">
                  JOIN OUR TEAM
                </button>
              </div>
              <div className="flex items-center">
                <div className="w-20 h-1 bg-primary"></div>
                <div className="w-20 h-[2.5px] bg-[#DEDEDE]"></div>
              </div>
            </div>
            <div className=" bg-white h-fit testimonial-slider">
              <Slider {...settings}>
                {
                  teamMembers.map((item) => (
                    <div className="!flex !items-center border" key={item._id}>
                      <TeamSlider item={item} />
                    </div>
                  )) as any
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSlider = ({ item }: { item: any }) => {
  return (
    <section>
      <div className="flex flex-col gap-6 items-center py-8 px-4 ">
        <div className="flex flex-col">
          <img src={item?.img} alt="" className="w-fit h-40" />
          <div className="bg-primary p-2 flex flex-col items-center gap-2 text-white">
            <p className="text-sm">{item?.name}</p>
            <p className="text-xs">{item?.desg}</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center">{item?.desc}</p>
        <div className="border grid grid-cols-5 divide-x divide-[#E9E9E9] border-[#E9E9E9] text-xl  text-gray-400 cursor-pointer">
          <div className="flex justify-center items-center p-2">
            <TiSocialFacebook className="" />
          </div>
          <div className="flex justify-center items-center p-2">
            <TiSocialTwitter className="" />
          </div>
          <div className="flex justify-center items-center p-2">
            <AiFillInstagram className="" />
          </div>
          <div className="flex justify-center items-center p-2">
            <AiFillYoutube className="" />
          </div>
          <div className="flex justify-center items-center p-2">
            <FaSkype className="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
