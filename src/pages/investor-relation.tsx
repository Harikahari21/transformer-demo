import { Banner, ClientLogo, MoreAboutUs } from "@/components";
import { PublicLayout } from "@/layouts";
import { annualReport, codeOfConduct, financialResult } from "@/utils/array";
import { ClassNames } from "@emotion/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoLaw } from "react-icons/go";
import { PiBag, PiHandCoins } from "react-icons/pi";
import { RiContactsBook2Line } from "react-icons/ri";

const InvestorRelation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const investorRelationArray = [
    {
      pageName: "Investor Relation",
      pagePath: ``,
    },
  ];

  const investorRelation = [
    {
      _id: "1",
      type: "Investor Related Cell",
      icon: <PiBag />,
      design: <InvestorRelatedCell />,
      ClassName: "lg:pb-[22rem] pb-[50rem]",
    },
    {
      _id: "2",
      type: "Annual Report ",
      icon: <PiHandCoins />,
      design: <AnnualReport />,
      ClassName: "lg:pb-[22rem] pb-[50rem]",
    },
    {
      _id: "3",
      type: "Financial Result ",
      icon: <RiContactsBook2Line />,
      design: <FinancialResult />,
      ClassName: "lg:pb-[30rem] pb-[65rem]",
    },
    {
      _id: "4",
      type: "Code of Conduct ",
      icon: <GoLaw />,
      design: <CodeOfConduct />,
      ClassName: "lg:pb-[35rem] pb-[75rem]",
    },
  ];

  return (
    <PublicLayout>
      <Banner title="Investor Relation" pathArr={investorRelationArray} />
      <section className={` ${investorRelation?.[activeIndex]?.ClassName}`}>
        <div className="bg-[#1C2752] text-white  flex flex-col gap-10 items-center pt-20 pb-52 justify-center relative">
          <div className="flex justify-center items-center flex-col gap-4 ">
            <h2 className="text-2xl font-semibold">Investor Relation</h2>
            <p className="text-sm md:w-[60%] w-[90%] text-center">
              IR manages company communication with investors, providing
              financial information and promoting transparency to attract
              investment.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
              {investorRelation?.map((curElm, index) => (
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
                  className={`capitalize tracking-wide px-4 py-2 font-semibold  flex justify-center items-center cursor-pointer common-transition ${
                    activeIndex === index
                      ? "bg-white  text-black"
                      : " border text-white"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex gap-2 items-center">
                    <div className="text-xl">{curElm?.icon}</div>
                    <p className="text-sm">{curElm.type}</p>
                  </div>
                </motion.span>
              ))}
            </div>
          </div>

          {investorRelation?.map((item, index) => (
            <div
              className={`flex justify-center items-center   ${
                activeIndex === index ? "visible " : "hidden"
              }`}
              key={item._id}
            >
              {item?.design}
            </div>
          ))}
        </div>
      </section>
      <MoreAboutUs />
      <ClientLogo />
    </PublicLayout>
  );
};

const InvestorRelatedCell = () => {
  return (
    <section className="lg:-bottom-[22rem] md:-bottom-[46rem] -bottom-[48rem] absolute bg-white h-fit  shadow-lg md:w-3/4 w-[90%]">
      <div className="p-8 flex flex-col gap-4 text-black">
        <div className="flex gap-2 items-center bg-[#F4F4F4]  p-2 w-fit">
          <PiBag />
          <p className="text-sm">Investor Related Cell</p>
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Registrar & Share Transfer Agent
              </p>
              <p className="text-sm">
                MCS Share Transfer Agent Limited, 12/1/5, Manaharpukur Road,
                Kolkata-700 026, Phone: (033) 4072-4051/52/53
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Stock Code
              </p>
              <div className="text-sm flex flex-col">
                <p>UNPAID DIVIDEND</p>
                <p>Bombay Stock Exchange Limited.</p>
                <p> BSE Code No.517546.</p>
                <p>
                  The ISIN Number of Gamma(or demat number) on both NSDL and
                  CDSL is ISIN INE209C01015
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Company Secretary and Compliance Officer
              </p>
              <div className="text-sm flex flex-col">
                <p>Name: Mr. Rajesh Kumar Sundarray</p>
                <p>Contact No. 9437007960, Email: cs@Gamma.in</p>
                <p>
                  {" "}
                  For any investor related query or for sending us your
                  feedback,please write to us at: Email: info@Gamma.in
                </p>
                <p>
                  * For more information on Shareholding pattern visit
                  www.bseindia.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end items-center">
            <img src="/Gamma/Frame.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AnnualReport = () => {
  return (
    <section className="lg:-bottom-[22rem] md:-bottom-[46rem] -bottom-[48rem] absolute bg-white  shadow-lg md:w-3/4 w-[90%]">
      <div className="p-8 flex flex-col gap-4 text-black">
        <div className="flex gap-2 items-center bg-[#F4F4F4]  p-2 w-fit">
          <PiHandCoins />
          <p className="text-sm">Annual Report</p>
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 text-black">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Annual Report for Gamma
              </p>
              <p className="text-sm">
                Gamma Transformers Limited, located in Bhubaneswar, is a
                renowned transformer manufacturer. Their annual report
                summarizes financial performance, operational highlights,
                strategic initiatives, and future prospects. It provides
                stakeholders with a snapshot of the company's achievements and
                direction.
              </p>
            </div>
            <div className=" flex flex-col border rounded-sm border-[#B9B9B9]/40 ">
              <div className=" grid grid-cols-5 text-sm font-semibold bg-primary text-white rounded-t-sm border-b  border-[#B9B9B9]/40 divide-x ">
                <div className="col-span-1 p-2 text-center">Sl No.</div>
                <div className="col-span-3 p-2">Description</div>
                <div className="col-span-1 p-2 text-center">Download</div>
              </div>
              <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-sm">
                {annualReport?.map((item, i) => (
                  <div
                    className={`grid grid-cols-5 divide-x text-sm  ${
                      i !== annualReport.length - 1 ? " border-b" : ""
                    }`}
                    key={i}
                  >
                    <div className="col-span-1 p-2 text-center">
                      {item?.slNo}
                    </div>
                    <div className="col-span-3 p-2">{item?.desc}</div>
                    <div className="col-span-1 p-2 flex justify-center items-center">
                      <img
                        src="/Gamma/document.png"
                        alt=""
                        className="w-7 h-7"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end items-center">
            <img src="/Gamma/Frame(1).png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FinancialResult = () => {
  return (
    <section className="lg:-bottom-[30rem]  -bottom-[62rem] absolute bg-white h-fit  shadow-lg md:w-3/4 w-[90%]">
      <div className="p-8 flex flex-col gap-4 text-black">
        <div className="flex gap-2 items-center bg-[#F4F4F4]  p-2 w-fit">
          <RiContactsBook2Line />
          <p className="text-sm">Financial Result</p>
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Financial Result for Gamma
              </p>
              <p className="text-sm">
                Gamma Transformers Limited in Bhubaneswar likely grapples with
                typical financial concerns of manufacturing firms, like managing
                costs and staying competitive. Their financial success hinges on
                efficient operations and strategic management.
              </p>
            </div>
            <div className=" flex flex-col border rounded-sm border-[#B9B9B9]/40 ">
              <div className=" grid grid-cols-5 text-sm font-semibold bg-primary text-white rounded-t-sm border-b  border-[#B9B9B9]/40 divide-x ">
                <div className="col-span-1 p-2 text-center">Sl No.</div>
                <div className="col-span-3 p-2">Description</div>
                <div className="col-span-1 p-2 text-center">Download</div>
              </div>
              <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-sm">
                {financialResult?.map((item, i) => (
                  <div
                    className={`grid grid-cols-5 divide-x text-sm  ${
                      i !== financialResult.length - 1 ? " border-b" : ""
                    }`}
                    key={i}
                  >
                    <div className="col-span-1 p-2 text-center">
                      {item?.slNo}
                    </div>
                    <div className="col-span-3 p-2">{item?.desc}</div>
                    <div className="col-span-1 p-2 flex justify-center items-center">
                      <img
                        src="/Gamma/document.png"
                        alt=""
                        className="w-7 h-7"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end items-center">
            <img src="/Gamma/Frame(2).png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CodeOfConduct = () => {
  return (
    <section className="absolute bg-white h-fit  shadow-lg md:w-3/4 w-[90%] lg:-bottom-[34rem] -bottom-[72rem]">
      <div className="flex flex-col gap-4 p-8">
        <div className="flex gap-2 items-center bg-[#F4F4F4] text-black  p-2 w-fit">
          <GoLaw />
          <p className="text-sm">Code of Conduct</p>
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 text-black">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Code of Conduct for Gamma
              </p>
              <p className="text-sm">
                Gamma Transformers Limited in Bhubaneswar provide “A code of
                conduct” serves as a set of guidelines outlining expected
                behavior and ethical standards within an organization. It
                defines acceptable behaviors for employees, management, and
                stakeholders, fostering a positive work environment and
                promoting integrity, respect, and professionalism. Adhering to a
                code of conduct helps maintain trust, reputation, and legal
                compliance, ultimately contributing to the overall success and
                sustainability of the organization.
              </p>
            </div>
            <div className=" flex flex-col border rounded-sm border-[#B9B9B9]/40 ">
              <div className=" grid grid-cols-5 text-sm font-semibold bg-primary text-white rounded-t-sm border-b  border-[#B9B9B9]/40 divide-x ">
                <div className="col-span-3 p-2">Description</div>
                <div className="col-span-2 p-2 text-center">Download</div>
              </div>
              <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-sm">
                <div className={`grid grid-cols-5 divide-x text-sm  `}>
                  <div className="col-span-3 p-2 flex items-center">
                    Code of Conduct for Gamma
                  </div>
                  <div className="col-span-2 p-2 flex justify-center items-center">
                    <img src="/Gamma/document.png" alt="" className="w-7 h-7" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-[#1C2752]">
                Policies for Gamma
              </p>
              <p className="text-sm">
                Gamma Transformers likely has policies covering industry
                regulations, product quality, workplace safety, and
                environmental sustainability to ensure compliance and maintain
                reputation and growth.
              </p>
            </div>
            <div className=" flex flex-col border rounded-sm border-[#B9B9B9]/40 ">
              <div className=" grid grid-cols-5 text-sm font-semibold bg-primary text-white rounded-t-sm border-b  border-[#B9B9B9]/40 divide-x ">
                <div className="col-span-1 p-2 text-center">Sl No.</div>
                <div className="col-span-3 p-2">Description</div>
                <div className="col-span-1 p-2 text-center">Download</div>
              </div>
              <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-sm">
                {codeOfConduct?.map((item, i) => (
                  <div
                    className={`grid grid-cols-5 divide-x text-sm  ${
                      i !== codeOfConduct.length - 1 ? " border-b" : ""
                    }`}
                    key={i}
                  >
                    <div className="col-span-1 p-2 text-center">
                      {item?.slNo}
                    </div>
                    <div className="col-span-3 p-2">{item?.desc}</div>
                    <div className="col-span-1 p-2 flex justify-center items-center">
                      <img
                        src="/Gamma/document.png"
                        alt=""
                        className="w-7 h-7"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end items-center">
            <img src="/Gamma/Frame(3).png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelation;
