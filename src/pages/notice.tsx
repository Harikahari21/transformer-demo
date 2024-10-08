import { Banner } from "@/components";
import { PublicLayout } from "@/layouts";
import { noticeArray } from "@/utils/array";

const NoticePage = () => {
  const noticePageArray = [
    {
      pageName: "Notice",
      pagePath: ``,
    },
  ];
  return (
    <PublicLayout>
      <Banner title="Notice" pathArr={noticePageArray} />
      <section className="flex flex-col main-container py-16">
        <div className="max-w-full overflow-x-scroll scroll-bar-none">
          <div className=" flex flex-col border rounded-sm border-[#B9B9B9]/40 w-[45rem] md:w-full">
            <div className=" grid grid-cols-5 text-sm font-semibold bg-primary text-white rounded-t-sm border-b  border-[#B9B9B9]/40 divide-x ">
              <div className="col-span-1 p-2 text-center">Sl No.</div>
              <div className="col-span-3 p-2">Description</div>
              <div className="col-span-1 p-2 text-center">Download</div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-sm">
              {noticeArray?.map((item, i) => (
                <div
                  className={`grid grid-cols-5 divide-x text-sm  ${
                    i !== noticeArray.length - 1 ? " border-b" : ""
                  }`}
                  key={i}
                >
                  <div className="col-span-1 p-2 flex justify-center items-center">
                    {item?.slNo}
                  </div>
                  <div className="col-span-3 p-2 flex items-center">
                    {item?.desc}
                  </div>
                  <div className="col-span-1 p-2 flex justify-center items-center">
                    <img src="/Gamma/document.png" alt="" className="w-7 h-7" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default NoticePage;
