import { Banner, ClientLogo, ProjectSection } from "@/components";
import { PublicLayout } from "@/layouts";
import { motion } from "framer-motion";

const Products = () => {
  const productsPageArray = [
    {
      pageName: "Products",
      pagePath: ``,
    },
  ];

  const productsArray = [
    {
      img: "/Gamma/products/image1.png",
      title: "Single Phase Transformer",
      description:
        "Winding a long ribbon of magnetic steel into there heavy-walled circular cylinder. More Details...",
    },
    {
      img: "/Gamma/products/image2.png",
      title: "Three Phase Transformer",
      description:
        "Winding a long ribbon of magnetic steel into there heavy-walled circular cylinder. More Details...",
    },
    {
      img: "/Gamma/products/image3.png",
      title: "Power Transformers",
      description:
        "Winding a long ribbon of magnetic steel into there heavy-walled circular cylinder. More Details...",
    },
    {
      img: "/Gamma/products/image4.png",
      title: "Stabilized Output Transformers",
      description:
        "Winding a long ribbon of magnetic steel into there heavy-walled circular cylinder. More Details...",
    },
    {
      img: "/Gamma/products/image5.png",
      title: "Loss Energy Transformers",
      description:
        "Winding a long ribbon of magnetic steel into there heavy-walled circular cylinder. More Details...",
    },
    {
      img: "/Gamma/products/image6.png",
      title: "Induction Furnace Transformers",
      description:
        "Winding a long ribbon of magnetic steel into there heavy-walled circular cylinder. More Details...",
    },
  ];

  return (
    <PublicLayout>
      <section>
        <Banner title="Products" pathArr={productsPageArray} />
        <section className="main-container flex flex-col gap-10 py-24">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-semibold text-4xl text-[#1C2752]">
              Our Products
            </h2>
            <p className="text-sm text-gray-500 lg:w-[44%] text-center">
              Discover the transformative power of our product. Unlocking new
              possibilities, enhancing experiences, and simplifying everyday
              tasks for everyone.
            </p>
            <div className="flex items-center">
              <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
              <div className="w-20 h-[2.5px] bg-primary"></div>
              <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {productsArray?.map((item, i) => (
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
                className="relative"
                key={i}
              >
                <img src={item?.img} alt="" className="" />
                <div className="flex justify-center items-center">
                  <div className="absolute bottom-0 w-[90%] py-2 text-white">
                    <div className="flex flex-col gap-2 ">
                      <p className="font-semibold">{item?.title}</p>
                      <p className="text-xs">{item?.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <ProjectSection />
        <ClientLogo />
      </section>
    </PublicLayout>
  );
};

export default Products;
