const CounterSection = () => {
  const gridArray = [
    {
      img: "/Gamma/small-img/Vector.png",
      number: "1920",
      title: "Project Completed",
    },
    {
      img: "/Gamma/small-img/Vector(1).png",
      number: "2500+",
      title: "Industry Solutions",
    },
    {
      img: "/Gamma/small-img/Vector(2).png",
      number: "500+",
      title: "Expert Contractors",
    },
    {
      img: "/Gamma/small-img/Vector(3).png",
      number: "1K+",
      title: "Happy Customers",
    },
  ];

  return (
    <section>
      <div className="main-container pb-16">
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-6">
          {gridArray?.map((data, i) => (
            <div className="flex flex-col gap-2 items-center bg-primary py-6 text-white shadow-xl relative">
              <img src={data?.img} alt="" />
              <p className="text-2xl font-semibold">{data?.number}</p>
              <p>{data?.title}</p>
              <div className="absolute top-0 left-0 h-5 w-0.5 bg-[#12AAFF]"></div>
              <div className="absolute top-0 left-0 w-5 h-0.5 bg-[#12AAFF]"></div>
              <div className="absolute bottom-0 right-0 h-5 w-0.5 bg-[#12AAFF]"></div>
              <div className="absolute bottom-0 right-0 w-5 h-0.5 bg-[#12AAFF]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
