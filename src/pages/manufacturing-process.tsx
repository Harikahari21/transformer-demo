import { Banner, ClientLogo } from "@/components";
import { PublicLayout } from "@/layouts";
import { leftAsideVariants } from "@/utils";
import {
  manufacturingCapabilities,
  typeTestingArray,
  typeTestingPoints,
} from "@/utils/array";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ManufacturingProcess = () => {
  const manufacturingProcessArray = [
    {
      pageName: "Manufacturing",
      pagePath: ``,
    },
    {
      pageName: "Manufacturing Process",
      pagePath: ``,
    },
  ];

  const topicsArray = [
    {
      title: "Introduction",
    },
    {
      title: "Manufacturing Capabilities",
    },
    {
      title: "Type Testing",
    },
    {
      title: "Core Cutting",
    },
    {
      title: "Coil Winding",
    },
    {
      title: "Insulation & Fabrication",
    },
    {
      title: "Assembly",
    },
    {
      title: "Fabrication & Painting",
    },
    {
      title: "Testing",
    },
  ];
  return (
    <PublicLayout>
      <Banner
        title="Manufacturing Process"
        pathArr={manufacturingProcessArray}
      />
      <section className="py-24 main-container">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          <div className="flex flex-col gap-4 lg:col-span-1 md:w-1/2 lg:w-full">
            {topicsArray?.map((data, i) => (
              <div
                key={i}
                className="bg-primary p-2 justify-between flex items-center text-white"
              >
                <p className="text-base">{data?.title}</p>
                <IoIosArrowDroprightCircle className="text-lg cursor-pointer" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 lg:col-span-3">
            <IntroductionSection />
            <ManufacturingCapabilities />
            <TypeTesting />
            <CoreCutting />
            <CoilWinding />
            <InsulationFabrication />
            <Assembly />
            <Fabrication />
            <Testing />
          </div>
        </div>
      </section>
      <ClientLogo />
    </PublicLayout>
  );
};

const IntroductionSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Introduction:</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              A Transformer is a static piece of apparatus used for transferring
              power from one circuit to another without change in frequency. It
              can raise or lower the voltage with a corresponding decrease or
              increase in current.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              The basic principle of a transformer is Faraday’s Law of
              Electromagnetic induction, which states that whenever the flux
              linked with a coil changes an e.m.f is induced, the transformer
              consists of a laminated iron core(Cold Rolled Grain Oriented Core
              Lamination) about which are wound two or more sets of windings,
              voltage is applied to one set of windings, called the primary,
              which builds up a magnetic flux through the iron. This flux
              generates a counter e.m.f. in the secondary which limits the
              current down from the supply.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              Gamma transformers are designed and tested as per national &
              international standards i.e. IS : 2026, IS : 1180, IEC 76, BSI
              171, ASA C57 and other relevant IS & IE rules.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const ManufacturingCapabilities = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Manufacturing Capabilities</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">
            During last 14 years, the following quantity of transformers have
            been manufactured in our works at Bhubaneswar
          </p>
          <div className=" flex flex-col border-2 rounded-md border-[#B9B9B9]/40 ">
            <div className=" grid grid-cols-3 text-sm font-semibold text-center bg-[#B9B9B9]/30 rounded-t-md border-b  border-[#B9B9B9]/40 divide-x divide-[#B9B9B9]">
              <div className="col-span-1 p-2">Rated KVA</div>
              <div className="col-span-2 p-2">
                Total Quantity Supplied (Nos.)
              </div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-md">
              {manufacturingCapabilities?.map((item, i) => (
                <div
                  className={`grid grid-cols-3 text-center divide-x text-sm  divide-[#B9B9B9] border-[#B9B9B9] ${
                    i !== manufacturingCapabilities.length - 1
                      ? " border-b"
                      : ""
                  }`}
                  key={i}
                >
                  <div className="col-span-1 p-2 ">{item?.kva}</div>
                  <div className="col-span-2 p-2">{item?.total}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src="/Gamma/manufacturing/img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const TypeTesting = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Type Testing</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <p>
            Several transformers of various ratings have been type tested at
            Central Power Research Institute, Bhopal/ Bangalore & ERDA, Vadodara
            and Impulse tested at Anna University, Chennai, IIT, Kharagpur. The
            details of transformers Short Circuit Tested and Impulse Tested are
            as appended hereto.
          </p>
          <p>
            Transformers are basically manufactured to meet the specifications
            of the customers. However, it meets the following Indian Standards:
          </p>
        </div>
        <div className="flex flex-col border rounded-md">
          {typeTestingArray?.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-8 divide-x text-sm ${
                i !== typeTestingArray?.length - 1 ? " border-b" : ""
              }`}
            >
              <div className="col-span-1 p-2 text-center">{item?.slno}</div>
              <p className="col-span-2 p-2 ">{item?.isNo}</p>
              <p className="col-span-5 p-2">{item?.details}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="">
            Our factory is well equipped with required equipments to produce
            transformers upto and including 10 MVA, 36 KV Class and the factory
            is consisting of the following Divisions.
          </p>
          <div className="flex flex-col">
            {typeTestingPoints?.map((data, i) => (
              <div className="flex gap-2 items-center" key={i}>
                <GoDotFill className="text-xs" />
                <p className="text-sm">{data?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreCutting = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Core Cutting</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              We import electrical grade steel directly from reputed
              manufacturers including Nippon Steel / Kawasaki, Japan. We are
              using various grade of electrical steel starting from cold rolled
              grain oriented steel sheets of M5 grade to HIV grade to laser
              scribed materials. We have facility for cutting lamination,
              annealing it in our own furnace. We are now planning to install
              CNC equipment which can produce step-lap and wound core which
              reduces no load losses of a transformer.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img(1).png" alt="" />
        </div>
      </div>
    </section>
  );
};

const CoilWinding = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Coil Winding</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              The most critical component of the transformer is the windings.
              Gamma Transformer uses Electrolytic grade high conductivity Copper
              /Aluminium conductors duly insulated with paper/nomex/glass for
              the windings according to the application and technical
              specification of the transformers
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              Gamma Transformer makes sure that not even a single brazing is
              used during the making of the windings, to ensure low losses of
              the transformer. The wound coils are pressed, clamped and dried in
              oven prior to Core Coil Assembly for better Short Circuit with
              standing ability during fault conditions.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              To reduce hot spots and keep the windings cool, cooling ducts are
              formed with rigid, high density spacers and horizontal and
              vertical ducts are provided.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img(2).png" alt="" />
        </div>
      </div>
    </section>
  );
};

const InsulationFabrication = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Insulation & Fabrication</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              Insulation system of transformer depends upon worthy of the
              insulating paper and insulating boards and quality of fabrication.
              To ensure quality, we are importing insulating papers directly
              from Japan, Germany and Sweden from reputed manufacturers like
              Toimo Corporation, Japan, Weidmann, Germany. We also import epoxy
              dotted papers, specific pre-compressed transformer boards.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img(3).png" alt="" />
        </div>
      </div>
    </section>
  );
};

const Assembly = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Assembly</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              Insulation system of transformer depends upon worthy of the
              insulating paper and insulating boards and quality of fabrication.
              To ensure quality, we are importing insulating papers directly
              from Jjapan, Germany and Sweden from reputed manufacturers like
              Toimo Corporation, Japan, Weidmann, Germany. We also import epoxy
              dotted papers, specific pre-compressed transformer boards.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img(4).png" alt="" />
        </div>
      </div>
    </section>
  );
};

const Fabrication = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Fabrication & Painting</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.p
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              We have installed shot blasting arrangements, phospating
              arrangements, and powder coating arrangements. We are endeavouring
              to improve the powder coating arrangements to international
              standards.
            </motion.p>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img(5).png" alt="" />
        </div>
      </div>
    </section>
  );
};

const Testing = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Testing</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-sm lg:w-5/6 overflow-hidden text-gray-500">
            <motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={leftAsideVariants}
              className="tracking-wide capitalize"
            >
              <div className="flex flex-col gap-1">
                <p>
                  All international specification of transformers calls for :{" "}
                </p>
                <p>1. Set of Routine Tests and</p>
                <p>2. Set of Type Tests</p>
              </div>
              <p>
                Our Test Lab is fully equipped to meet with the requirement of
                Routine Tests. With respect to Type Tests, we have conducted
                several set of type tests during last few years. A list of such
                Type Tests viz. Short Circuit Tests and Impulse Voltage
                withstand tests is appended herewith.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="">
          <img src="/Gamma/manufacturing/img(6).png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default ManufacturingProcess;
