// import { auth } from "@/app";
// import { useRouter } from "next/router";
// import { useEffect, useRef } from "react";

// type PassedComponentProps = {
//   title?: string;
//   children: JSX.Element[] | JSX.Element;
//   description?: string;
//   ogImage?: string;
// };

// const withProtectedRoute = (
//   PassedComponent: React.ComponentType<PassedComponentProps>
// ) =>
//   function NewComponent(props: PassedComponentProps) {
//     const user = auth?.currentUser;
//     // console.log("user at protected--", user);
//     const { push, asPath } = useRouter();
//     let mounted = useRef<boolean>(false);
//     // useEffect(() => {
//     //   console.log("user at useEffect---", user);
//     //   mounted.current = true;
//     //   if (!user?.uid) push("/login");

//     //   return () => {
//     //     mounted.current = false;
//     //   };
//     // }, [user?.uid, asPath]);

//     return (
//       <>
//         {user?.uid ? (
//           <PassedComponent {...props} />
//         ) : (
//           <section className=" w-full h-screen flex justify-center items-center">
//             <div className=" border border-dotted rounded-xl p-5 border-t-teal-400 border-r-red-500 border-b-cyan-400 border-l-lime-400">
//               <img
//                 src="/Gamma/logo.png"
//                 className=" w-20 h-20 object-fill rounded-lg animate-pulse"
//                 alt=""
//               />
//             </div>
//           </section>
//         )}
//       </>
//     );
//   };

// export default withProtectedRoute;
