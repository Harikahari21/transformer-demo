// /* eslint-disable @next/next/no-img-element */
// import { useRouter } from "next/router";
// import { Dispatch, SetStateAction } from "react";
// import {
//   AiOutlineClose,
//   AiOutlineMail,
//   AiOutlineMenuFold,
// } from "react-icons/ai";
// import Link from "next/link";
// import { useMenuItems } from "@/hooks";
// import { auth, logOut } from "@/app";
// import Swal from "sweetalert2";
// // import LanguageIcon from "@mui/icons-material/Language";
// import { removeFromLocalStorage } from "@/utils";
// import { Avatar } from "@mui/material";

// type FlatArrayType = {
//   groupTitle?: string | undefined;
//   title?: string;
//   icon: JSX.Element;
//   route?: string;
//   submenu?: {
//     title: string;
//     route: string;
//     icon: JSX.Element;
//   }[];
// };

// const AppBar = ({
//   setResponsiveExpand,
//   isAppDrawerOpen,
//   setIsAppDrawerOpen,
// }: {
//   setResponsiveExpand: Dispatch<SetStateAction<boolean>>;
//   setIsAppDrawerOpen: Dispatch<SetStateAction<boolean>>;
//   isAppDrawerOpen: boolean;
// }) => {
//   const menuItems = useMenuItems();
//   const { push } = useRouter();

//   return (
//     <nav className={`mx-2 md:mx-4 lg:mx-5 2xl:mx-6 top-0 sticky z-[99] `}>
//       <section className="bg-white rounded-md py-2 md:py-0 md:h-16  shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] mt-3">
//         <div className="w-full justify-between admin-container flex items-center h-full">
//           <div className="flex items-center gap-2 w-full md:w-fit">
//             <div
//               className="hidden lg:flex cursor-pointer items-center w-fit p-1 md:p-2 border-primary/20 bg-tertiary/10 border rounded-lg"
//               onClick={() => setIsAppDrawerOpen((prev) => !prev)}
//             >
//               {!isAppDrawerOpen ? (
//                 <AiOutlineClose />
//               ) : (
//                 <AiOutlineMenuFold className="text-lg" />
//               )}
//             </div>
//             <div
//               className=" md:block lg:hidden"
//               onClick={() => setResponsiveExpand(true)}
//             >
//               <AiOutlineMenuFold className="text-lg" />
//             </div>
//           </div>
//           <div className="dropdown dropdown-end md:hidden block">
//             <div tabIndex={0} className="w-fit h-fit cursor-pointer">
//               <Avatar
//                 src="/avatar.png"
//                 className="rounded-full md:hidden w-10 md:h-10 h-10 md:w-11"
//               >
//                 <div></div>
//               </Avatar>
//             </div>
//             <ProfileBox />
//           </div>

//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               className="rounded-full cursor-pointer text-lg bg-gray-400 text-white grid place-items-center w-8 md:h-8 h-8 md:w-10 min-w-[3rem] min-h-[3rem]"
//             >
//               A
//             </div>
//             <ProfileBox />
//           </div>
//         </div>
//       </section>
//     </nav>
//   );
// };

// export default AppBar;

// const ProfileBox = () => {
//   const { push } = useRouter();
//   const user = auth?.currentUser;
//   const logoutSession = () => {
//     logOut();
//     removeFromLocalStorage("ACCESS_TOKEN");
//     Swal.fire({
//       title: "Success",
//       text: "Logout SuccessFully",
//       icon: "success",
//     });
//     push("/login");
//   };
//   const PROFILE_DETAILS = [
//     {
//       label: "My Profile",
//       des: "Account Setting",
//       icon: "/admin/icon-account.svg",
//       path: "/admin/settings/profile",
//     },
//   ];
//   return (
//     <div className="w-80 gap-6 menu dropdown-content overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] !p-5 mt-6 rounded-md !flex !flex-col bg-white">
//       <div className="flex gap-2">
//         <div
//           // src="/avatar.png"
//           className="rounded-full text-lg bg-gray-400 text-white grid place-items-center w-10 md:h-14 h-10 md:w-14 min-w-[3.5rem] min-h-[3.5rem]"
//         >
//           A
//         </div>
//         <div className="space-y-2">
//           <h2 className="font-semibold">Gamma Transformer Limited</h2>
//           <p className="text-sm text-secondary break-all">{user?.email}</p>
//         </div>
//       </div>

//       <button
//         onClick={logoutSession}
//         className="w-full py-2.5 border bg-primary hover:bg-primary/90 text-white rounded-lg"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };
