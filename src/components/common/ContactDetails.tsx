import { BiMobile } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { MdCall, MdFax, MdOutlineLocationOn } from "react-icons/md";
import ContactUsForm from "./ContactUsForm";

const ContactDetails = () => {
  const detailsArray = [
    {
      icon: <MdOutlineLocationOn />,
      details:
        " Address: #3337, Mancheswar Industrial Estate, Bhubaneswar, OD 751010",
    },
    {
      icon: <BiMobile />,
      details: " Mobile: +91 6742 580 484, +91 6742 581 036",
    },
    {
      icon: <MdFax />,
      details: "Fax: +91 6742 580 495, +91 6742 580 543",
    },
    {
      icon: <IoMail />,
      details: "Mail: info@gamma.in",
    },
  ];
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 w-full ">
      <div className="bg-primary text-white 2xl:p-24 xl:p-10 md:p-16 h-[40rem] p-5">
        <div className="main-container flex flex-col gap-8">
          <h2 className="text-4xl font-medium border-b lg:w-1/2 pb-4">
            Contact Details
          </h2>
          <div className="flex flex-col gap-4">
            {detailsArray?.map((data, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="bg-white p-2 text-primary">
                  <p className="text-xl">{data?.icon}</p>
                </div>
                <p className="text-sm">{data?.details}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-medium border-b  pb-2 w-1/2">
              Sales Team
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-white p-2 text-primary">
                <p className="text-xl">
                  <MdCall />
                </p>
              </div>
              <p className="text-sm">
                Mobile: +91 7008 985 016, +91 7008 985 017
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white p-2 text-primary">
                <p className="text-xl">
                  <IoMail />
                </p>
              </div>
              <p className="text-sm">Mail: sales@gamma.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/Gamma/BlurBg.png" alt="" className="w-full h-[40rem]" />
        <div className="absolute inset-0">
          <div className=" 2xl:p-24 xl:p-10 md:p-16 p-5">
            <div className="main-container flex flex-col gap-10">
              <div className="flex flex-col gap-2 border-b border-[#860404] lg:w-1/2 pb-4">
                <h2 className="text-4xl font-medium ">Send message</h2>
                <p className="text-sm font-semibold">
                  We would like to discuss:
                </p>
              </div>
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
