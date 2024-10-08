import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import { IoArrowForwardOutline, IoCall, IoMail } from "react-icons/io5";
import { MdLocationOn, MdLocationPin } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const quickLinks = [
    {
      title: "Who Are We",
    },
    {
      title: "Our History",
    },
    {
      title: "About Us",
    },
    {
      title: "Manufacturing",
    },
    {
      title: "Investor Relation",
    },
    {
      title: "Projects",
    },
  ];
  return (
    <div className="w-full ">
      <div className="bg-[#1A191D] bg-no-repeat bg-center bg-cover pt-8 md:pt-16 2xl:pt-16">
        <div className="main-container  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4 md:pb-8 2xl:pb-12">
          <div className="flex flex-col gap-8">
            <Link href="/">
              <h2 className="text-3xl font-bold text-white">Gamma</h2>
            </Link>
            <p className="text-white">
              A start-up unit of manufacturing transformers in the small to
              medium range from the year of 1988.
            </p>
            <div className="border grid grid-cols-5 divide-x divide-[#605F61] border-[#605F61] ">
              <div className="flex justify-center items-center p-2">
                <TiSocialFacebook className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
              </div>
              <div className="flex justify-center items-center p-2">
                <TiSocialTwitter className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
              </div>
              <div className="flex justify-center items-center p-2">
                <AiFillInstagram className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
              </div>
              <div className="flex justify-center items-center p-2">
                <AiFillYoutube className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
              </div>
              <div className="flex justify-center items-center p-2">
                <FaSkype className="text-2xl  text-[#605F61] cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
            <h2 className="text-white font-semibold">Quick Links</h2>
            <div className="flex flex-col gap-2">
              {quickLinks?.map((item, i) => (
                <div className="flex gap-1 items-center" key={i}>
                  <BsDot className="text-primary text-2xl" />
                  <p className="text-gray-300 text-sm ">{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className="text-white font-semibold">Contact Company</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 items-center">
                <IoCall className="text-[#605F61] text-xl" />
                <p className="flex flex-col gap-1 text-gray-300 text-sm ">
                  <span className="">+91 7899 580 484</span>
                  <span className="">+91 7899 581 036</span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <IoMail className="text-[#605F61] text-xl" />
                <p className="flex flex-col gap-1 text-gray-300 text-sm ">
                  <span className="">info@gamma.in</span>
                  <span className="">sales@gamma.in</span>
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <MdLocationPin className="text-[#605F61] text-xl" />
                <div className="flex flex-col gap-1 text-gray-300 text-sm ">
                  <p className="flex flex-col">
                    <span>337, Abc Industrial </span>
                    <span>Estate, Odisha-751076</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-semibold">Newsletter</h2>
            <div className="flex flex-col gap-4">
              <p className="text-gray-300 text-sm">
                Subscribe to our Newsletter & Event right now to be updated.
              </p>
              <div className="flex justify-between items-center bg-white p-2">
                <input
                  className=" outline-none text-sm"
                  type="text"
                  placeholder="EMAIL*"
                  name=""
                />
                <div className="bg-primary p-2 text-white">
                  <IoArrowForwardOutline />
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Have a question?{" "}
                <span className="underline cursor-pointer">Click here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-black">
        <div className="main-container">
          <div className="text-sm flex flex-col items-center justify-between text-center lg:flex-row gap-4 py-5 text-white ">
            <p className=" tracking-wider">© 2024 Gamma Transformer Limited.</p>
            <div className="flex gap-3 items-center">
              <p>Sitemap</p>
              <p className="w-1 h-1 bg-white rounded-full"></p>
              <p>Terms of Service</p>
              <p className="w-1 h-1 bg-white rounded-full"></p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
