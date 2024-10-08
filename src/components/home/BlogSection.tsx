import { motion } from "framer-motion";

const BlogSection = () => {
  const imagesArray = [
    {
      img: "/Gamma/blog/Container.png",
    },
    {
      img: "/Gamma/blog/Container-1.png",
    },
    {
      img: "/Gamma/blog/Container-2.png",
    },
  ];
  return (
    <section className="main-container flex flex-col gap-10 pt-24">
      <div className=" flex flex-col gap-5">
        <h2 className="font-semibold text-4xl">{`What's Going on Our Blog?`}</h2>
        <p className="text-sm text-gray-500 lg:w-[44%]">
          Contact our office for a free quote! It is always good to have a rough
          idea on your budget at this stage to enable us to quote as necessary.
        </p>
        <div className="flex items-center">
          <div className="w-20 h-1 bg-primary"></div>
          <div className="w-20 h-[2.5px] bg-[#DEDEDE]"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4">
        {imagesArray?.map((data, i) => (
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
            className={` group`}
            key={i}
          >
            <img
              src={data?.img}
              alt=""
              className="w-[370px] h-[453px] object-cover group-hover:scale-105  common-transition"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
