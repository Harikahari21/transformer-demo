import { Banner } from "@/components";
import { PublicLayout } from "@/layouts";
import { testReport } from "@/utils/array";

const TestReports = () => {
  const testReportArray = [
    {
      pageName: "Manufacturing",
      pagePath: ``,
    },
    {
      pageName: "Test Reports",
      pagePath: ``,
    },
  ];
  return (
    <PublicLayout>
      <Banner title="Test Reports" pathArr={testReportArray} />
      <section className="main-container flex flex-col gap-10 py-24">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-semibold text-4xl text-[#1C2752]">Test Report</h2>
          <p className="text-sm text-gray-500 lg:w-[44%] text-center">
            Discover the transformative power of our product. Unlocking new
            possibilities, enhancing experiences, and simplifying everyday tasks
            for everyone.
          </p>
          <div className="flex items-center">
            <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
            <div className="w-20 h-[2.5px] bg-primary"></div>
            <div className="w-20 h-[1.2px] bg-[#DEDEDE]"></div>
          </div>
        </div>
        <div className="max-w-full overflow-x-scroll scroll-bar-none">
          <div className=" flex flex-col border rounded-sm border-[#B9B9B9]/40 w-[68rem] lg:w-full ">
            <div className=" grid grid-cols-6 text-sm  bg-primary text-white rounded-t-sm border-b border-[#B9B9B9]/40 divide-x text-center  ">
              <div className="col-span-1 p-3 ">Sl No.</div>
              <div className="col-span-1 p-3">KVA</div>
              <div className="col-span-1 p-3 ">VOLTAGE RATIO(KV)</div>
              <div className="col-span-1 p-3">SL.NO OF TRANSFORMER</div>
              <div className="col-span-1 p-3">PLACE OF TEST LAB</div>
              <div className="col-span-1 p-3">TEST REPORT NO. & DATE</div>
            </div>
            <div className="w-full flex flex-col bg-white shadow-shadow-primary rounded-b-sm">
              {testReport?.map((item, i) => (
                <div
                  className={`grid grid-cols-6 divide-x text-sm text-center  ${
                    i !== testReport.length - 1 ? " border-b" : ""
                  }`}
                  key={i}
                >
                  <div className="col-span-1 p-2 ">{item?.slNo}</div>
                  <div className="col-span-1 p-2">{item?.kva}</div>
                  <div className="col-span-1 p-2">{item?.kv}</div>
                  <div className="col-span-1 p-2">{item?.transformer}</div>
                  <div className="col-span-1 p-2">{item?.place}</div>
                  <div className="col-span-1 p-2">{item?.testReport}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default TestReports;
