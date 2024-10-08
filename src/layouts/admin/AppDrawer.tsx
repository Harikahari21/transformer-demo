/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useMenuItems } from "@/hooks";
import { Collapse } from "@/components/custom";

type MenuItemsType = {
  haveGroup?: boolean;
  title?: string;
  data: {
    title: string;
    route?: string;
    icon: JSX.Element;
    submenu?: {
      title: string;
      route: string;
      icon: JSX.Element;
    }[];
  }[];
};

const AppDrawer = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState("");
  const menuItems = useMenuItems();
  const { push, asPath } = useRouter();
  const handleMatchOpen = (title: string, route?: string | undefined) => {
    if (route) return push(route);
    setOpen((prev) => (prev === title ? "" : title));
  };

  return (
    <div className="flex flex-col gap-8 pb-6 bg-primary min-h-screen text-white">
      <div
        className={`${
          isAppDrawerOpen ? "px-5 py-2.5" : "py-2"
        } border-b border-gray-200 relative justify-center flex w-full items-center`}
      >
        <img
          src="/Gamma/FooterLogo.png"
          alt="logo"
          className={` cursor-pointer ${isAppDrawerOpen ? "w-14" : "w-10"}`}
          onClick={() => push("/admin")}
        />
      </div>

      <div
        className={`w-full flex flex-col gap-6  ${
          !isAppDrawerOpen ? "pl-1" : "pl-5"
        }`}
      >
        {menuItems?.map((groupData: MenuItemsType, ind: number) => (
          <div key={ind} className="flex flex-col !gap-4">
            {isAppDrawerOpen && groupData?.haveGroup ? (
              <div
                className={`${
                  isAppDrawerOpen ? "px-3" : ""
                } text-[11px]  font-[Poppins] font-thin uppercase`}
              >
                {groupData?.title}
              </div>
            ) : null}
            <div className="w-full flex flex-col gap-6">
              {groupData?.data?.map((_, index: number) => (
                <div className="w-full" key={index * 2}>
                  <div
                    onClick={() => handleMatchOpen(_?.title, _?.route)}
                    className={`w-full  relative font-medium group common-transition flex items-center justify-between py-1 ${
                      !_?.route
                        ? _?.submenu?.some((data) => data?.route === asPath)
                          ? "bg-light text-primary "
                          : open === _?.title
                          ? "text-primary"
                          : ""
                        : _?.route === asPath && "bg-light text-primary"
                    } relative font-[Poppins] rounded-l-3xl cursor-pointer ${
                      isAppDrawerOpen ? "pr-4 pl-1" : ""
                    }`}
                  >
                    {_?.submenu?.some((data) => data?.route === asPath) ||
                    _?.route === asPath ? (
                      <>
                        <div className="absolute z-10 h-11 w-6 top-1/2 right-0 bg-light flex items-end">
                          <div className="h-1/2 w-full bg-primary rounded-tr-xl"></div>
                        </div>
                        <div className="absolute z-10 h-11 w-6 bottom-1/2 right-0 bg-light flex items-start">
                          <div className="h-1/2 w-full bg-primary rounded-br-xl"></div>
                        </div>
                      </>
                    ) : null}

                    <div
                      className={`w-full flex items-center gap-3 ${
                        !isAppDrawerOpen ? "justify-center" : ""
                      }`}
                    >
                      <div
                        className={`font-[Poppins] ${
                          _?.route === asPath ||
                          _?.submenu?.some((data) => data?.route === asPath)
                            ? "h-9 w-9 text-lg rounded-full bg-primary flex items-center justify-center text-white shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                            : "text-xl "
                        }`}
                      >
                        {_?.icon}
                      </div>
                      {isAppDrawerOpen ? (
                        <div
                          className={`font-[Poppins]  ${
                            _?.route === asPath ? "font-semibold" : ""
                          }`}
                        >
                          {_?.title}
                        </div>
                      ) : null}
                    </div>
                    {isAppDrawerOpen && _?.submenu ? (
                      <IoChevronForwardOutline
                        className={`${
                          open === _?.title ? "rotate-90" : ""
                        } common-transition z-20`}
                      />
                    ) : null}
                  </div>
                  {_?.submenu ? (
                    <div
                      className={`w-full flex flex-col ${
                        open === _?.title ? "gap-1 py-2" : ""
                      }`}
                    >
                      {_?.submenu?.map((curData, x: number) => (
                        <Collapse open={open === _?.title} key={x}>
                          <div
                            onClick={() => push(curData?.route)}
                            className={`w-full ripple flex items-center gap-3 py-2 rounded-lg text-base cursor-pointer ${
                              isAppDrawerOpen ? "px-3" : ""
                            } ${
                              curData?.route === asPath ? "text-white" : ""
                            } `}
                          >
                            <div className="font-[Poppins]">
                              {curData?.icon}
                            </div>
                            <div className="font-[Poppins]">
                              {curData?.title}
                            </div>
                          </div>
                        </Collapse>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppDrawer;
