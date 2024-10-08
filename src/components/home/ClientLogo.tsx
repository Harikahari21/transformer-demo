import { motion } from "framer-motion";

const ClientLogo = () => {
  const imagesArray = [
    {
      img: "/Gamma/client-logo/member.png",
    },
    {
      img: "/Gamma/client-logo/American.png",
    },
    {
      img: "/Gamma/client-logo/Dogtooth.png",
    },
    {
      img: "/Gamma/client-logo/Bolt.png",
    },
  ];
  return (
    <section className="main-container py-24">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {imagesArray?.map((data, i) => (
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.1,
                  delay: i * 0.1,
                },
              },
            }}
          >
            <img
              src={data?.img}
              alt="logo"
              className="w-full h-24 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogo;
