import Link from "next/link";
import { useRouter } from "next/router";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

type BreadCrumbType = {
  heading: string;
  pathArr?: {
    pageName?: string;
    pagePath?: string;
  }[];
};

export default function BreadCrumb({ heading, pathArr }: BreadCrumbType) {
  const { push } = useRouter();
  const handleChangeRouterSession = (url: string | undefined) => {
    if (!url) return;
    push(url);
  };
  return (
    <div className="max-w-full overflow-x-scroll scroll-bar-none">
      <div className=" flex flex-col gap-4">
        <h2 className="md:text-5xl text-lg text-white font-semibold">
          {heading}
        </h2>
        <div className="w-full flex gap-3 items-center">
          <div className="flex gap-1  text-white">
            <MdHome className="text-lg" />
            <Link href="/" className="text-sm cursor-pointer">
              Home
            </Link>
            <MdKeyboardArrowRight className="text-lg" />
          </div>
          {pathArr && pathArr?.length > 0 ? (
            <div className="flex items-center gap-1 md:gap-2">
              {pathArr?.map((data, i) => (
                <div
                  key={i}
                  className={`flex gap-1 md:gap-2 text-sm text-white items-center`}
                >
                  <p
                    className={`text-sm rounded-3xl !whitespace-nowrap ${
                      data?.pagePath && data?.pagePath?.length > 0
                        ? "cursor-pointer "
                        : "cursor-not-allowed "
                    }`}
                    onClick={() => handleChangeRouterSession(data.pagePath)}
                  >
                    {data?.pageName}
                  </p>
                  {pathArr?.length - 1 !== i ? (
                    <div>
                      <MdKeyboardArrowRight className="text-white text-lg" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
