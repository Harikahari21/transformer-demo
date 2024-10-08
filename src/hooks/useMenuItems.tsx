import { LuLayoutDashboard } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";

const useMenuItems = () => {
  return [
    {
      data: [
        {
          title: "Dashboard",
          icon: <LuLayoutDashboard />,
          route: "/admin",
        },
        {
          title: "Manage Contacts",
          icon: <FaWpforms />,
          route: "/admin/manage-contact",
        },
      ],
    },
  ];
};

export default useMenuItems;
