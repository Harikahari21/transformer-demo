import BreadCrumb from "./BreadCrumb";

type BreadCrumbArrayType = {
  title: string;
  pathArr?: {
    pageName?: string;
    pagePath?: string;
  }[];
};
const Banner = ({ title, pathArr }: BreadCrumbArrayType) => {
  return (
    <section className="w-full">
      <div className="flex justify-end bg-primary relative">
        <img src="/Gamma/bg-img.png" alt="" />
        <div className="absolute inset-0 flex items-center ">
          <div className="main-container ">
            <BreadCrumb heading={title} pathArr={pathArr} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
