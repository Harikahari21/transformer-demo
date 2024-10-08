/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCall, IoMail, IoSearchOutline } from "react-icons/io5";
import {
  MdLocationPin,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState(false);
  const [searchText, setSearchText] = useState("");

  const router = useRouter();
  const { asPath } = router;
  const navARR = [
    { title: "Home", link: "/", isSubmenu: false },
    { title: "About Us", link: "/about-us", isSubmenu: false },
    { title: "Product", link: "/products", isSubmenu: false },
    {
      title: "Manufacturing",
      link: "",
      isSubmenu: true,
      submenu: [
        {
          title: "Manufacturing Process",
          link: "/manufacturing-process",
        },
        {
          title: "Test Reports",
          link: "/test-reports",
        },
        {
          title: "Certification",
          link: "",
        },
      ],
    },
    {
      title: "Our Clients",
      link: "/our-clients",
      isSubmenu: false,
    },
    {
      title: "Investor Relation",
      link: "/investor-relation",
      isSubmenu: false,
    },
    {
      title: "Disclosure",
      link: "",
      isSubMenu: true,
      submenu: [
        {
          title: "Notice",
          link: "/notice",
        },
        {
          title: "Quarterly Compliance",
          link: "/quarterly-compliance",
        },
        {
          title: "Unclaimed Dividend",
          link: "/unclaimed-dividend",
        },
        {
          title: "Investor Related Cell",
          link: "/investor-related-cell",
        },
      ],
    },
    {
      title: "Contacts",
      link: "/contact-us",
      isSubmenu: false,
    },
  ];
  const toggleDropdown = (title: any) => {
    if (isOpen === title) {
      setIsOpen(null); // Close if already open
    } else {
      setIsOpen(title);
    }
    // setIsOpen(!isOpen);
  };

  const handleSearchInput = (e: any) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 0) {
      setSearchProduct(true);
    } else {
      setSearchProduct(false);
    }
  };

  const filteredProducts = navARR.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <section className="sticky top-0 z-[999] hidden bg-white lg:block shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="bg-primary text-white p-3">
          <div className="main-container flex justify-between items-center gap-6">
            <div className="flex items-center  gap-3">
              <MdLocationPin className="text-lg" />
              <p className="text-sm text-gray-200 ">
                3337, Mancheshwar Industrial Estate, Bhubaneshwar-751010
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-3 items-center">
                <IoCall className="text-lg" />
                <p className="text-sm text-gray-200">+91 70089 85016/17</p>
              </div>
              <div className="h-5 w-[1px] bg-gray-200"></div>
              <div className="flex gap-3 items-center">
                <IoMail className="text-lg" />
                <p className="text-sm text-gray-200">
                  sales@gamma.in / info@gamma.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container flex justify-between items-center py-3 ">
          <Link href="/">
            <img src="/Gamma/logo.png" alt="" className=" w-fit h-12" />
          </Link>
          <div className="flex gap-8">
            {navARR.map((item, i) => (
              <div key={i} className="relative group hover:text-primary  ">
                <Link href={item?.link} rel="noopener noreferrer">
                  <div className="flex items-center gap-1 font-medium text-sm ">
                    <div
                      onClick={() => toggleDropdown(item?.title)}
                      className={` ${
                        item?.link === asPath ||
                        (item?.submenu &&
                          item?.submenu.some(
                            (subItem) => subItem?.link === asPath
                          ))
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {item.title}
                    </div>
                    {item?.submenu ? (
                      isOpen === item?.title ? (
                        <MdOutlineExpandLess className="" />
                      ) : (
                        <MdOutlineExpandMore className="" />
                      )
                    ) : null}
                  </div>
                </Link>
                {isOpen === item?.title && item?.submenu ? (
                  <div className=" absolute top-12 right-0 bg-white w-52 flex flex-col text-gray-800 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md overflow-hidden">
                    {item?.submenu?.map((innerItem, i, arr) => (
                      <Link
                        key={i}
                        href={innerItem.link}
                        rel="noopener noreferrer"
                      >
                        <p
                          className={`px-4 py-2 hover:text-primary common-transition ${
                            arr?.length - 1 === i ? "" : "border-b"
                          }`}
                        >
                          {innerItem?.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : null}
                <div>
                  {item?.link === asPath ||
                  (item?.submenu &&
                    item?.submenu.some(
                      (subItem) => subItem?.link === asPath
                    )) ? (
                    <div className="absolute -bottom-[26px] w-full h-1 bg-primary rounded-t-sm"></div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <IoSearchOutline
              className="text-xl"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <div className="bg-primary flex gap-2 items-center rounded-sm text-white p-3 cursor-pointer">
              <p className="text-sm">GET A QUOTE</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </div>
          </div>
        </div>
        {searchOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50 ">
            <div className="p-4 rounded-md  w-[45rem] h-[35rem]  relative">
              <p
                onClick={() => {
                  setSearchText(""); // Clear search input when closing
                  setSearchOpen(!searchOpen);
                }}
                className=" absolute -top-3 -right-7 cursor-pointer "
              >
                <FaX className=" font-bold p-2 rounded-full border-2 border-white text-white text-4xl" />
              </p>
              <div className=" w-full bg-white p-2   rounded-xl mb-2">
                <form>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <BiSearchAlt2 className="text-2xl" />
                    </div>
                    <input
                      value={searchText}
                      onChange={handleSearchInput}
                      // onKeyUp={showProduct}
                      type="search"
                      id="default-search"
                      className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-green-500 focus:border-green-500 "
                      placeholder="What are you looking for..."
                      required
                    />
                  </div>
                </form>
              </div>
              {searchText && (
                <div className=" w-full h-[27rem]  overflow-y-auto scroll rounded-lg border border-gray-200    text-center  bg-white p-3">
                  <div className=" w-full flex flex-col gap-3 ">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full flex justify-between  p-3 items-center border rounded-lg  duration-500 "
                          >
                            {item.title}
                            <div className="text-white">
                              <Link
                                href={item?.link}
                                className=" text-xs p-2 bg-primary rounded "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="w-full flex flex-col items-center p-4 ">
                        <img
                          src="/home/emptyProduct.webp" // Replace with your image path
                          alt="No Results"
                          className=" w-[16rem] h-[16rem] object-contain"
                        />
                        <h1 className=" font-bold text-lg text-center">
                          Product Not Available
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      {/* --------- Responsive Navbar----------- */}
      <section className="sticky top-0 z-[999] block bg-white lg:hidden">
        <ResponsiveNavbar />
      </section>
    </>
  );
};

export default Navbar;
