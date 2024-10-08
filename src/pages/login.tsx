// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React, { useState } from "react";
// // import { database, login } from "@/app";
// import { useRouter } from "next/router";
// import Swal from "sweetalert2";
// import PublicLayout from "@/layouts/public";
// // import { LoadingButton } from "@/components/custom";
// import { database, login } from "@/app";
// import { saveToLocalStorage } from "@/utils";
// import { LoadingButton } from "@/components/custom";

// const Login = () => {
//   // Define validation schema using Yup
//   const { push } = useRouter();
//   const [loading, setLoading] = useState(false);
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   // Initialize Formik
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         setLoading(true);
//         const userData = await login(values.email, values.password);
//         await database.update(`user/${userData?.uid}`, {
//           device: "web",
//           lastLogin: new Date().toISOString(),
//         });
//         setLoading(false);
//         if (userData?.uid) {
//           Swal.fire({
//             title: "Success",
//             text: "Login Successful",
//             icon: "success",
//           });
//           push("/admin");
//           saveToLocalStorage("ACCESS_TOKEN", userData?.accessToken);
//           formik.resetForm();
//         }
//       } catch (error) {
//         Swal.fire({
//           title: "Error",
//           text: error instanceof Error ? error.message : "Something went wrong",
//           icon: "error",
//         });
//       }
//       // Handle form submission here
//       // console.log("Form submitted with values:", values);
//     },
//   });

//   return (
//     <PublicLayout title="Gamma Transformer Limited | Admin Login">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
//           <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//             <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//               <div className="max-w-md mx-auto">
//                 <div>
//                   <h1 className="text-2xl font-semibold">
//                     Login using your Credentials
//                   </h1>
//                 </div>
//                 <div className="divide-y divide-gray-200">
//                   <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                     <div className="relative">
//                       <input
//                         autoComplete="off"
//                         id="email"
//                         name="email"
//                         type="text"
//                         className={`peer bg-white placeholder-transparent h-10 w-full border-b-2 ${
//                           formik.touched.email && formik.errors.email
//                             ? "border-red-600"
//                             : "border-gray-300"
//                         } text-gray-900 focus:outline-none focus:borer-rose-600`}
//                         placeholder="Email address"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                       />
//                       <label
//                         htmlFor="email"
//                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
//                       >
//                         Email Address
//                       </label>
//                       {formik.touched.email && formik.errors.email ? (
//                         <div className="text-red-600 text-sm">
//                           {formik.errors.email}
//                         </div>
//                       ) : null}
//                     </div>
//                     <div className="relative">
//                       <input
//                         autoComplete="off"
//                         id="password"
//                         name="password"
//                         type="password"
//                         className={`peer bg-white placeholder-transparent h-10 w-full border-b-2 ${
//                           formik.touched.password && formik.errors.password
//                             ? "border-red-600"
//                             : "border-gray-300"
//                         } text-gray-900 focus:outline-none focus:borer-rose-600`}
//                         placeholder="Password"
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                       />
//                       <label
//                         htmlFor="password"
//                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
//                       >
//                         Password
//                       </label>
//                       {formik.touched.password && formik.errors.password ? (
//                         <div className="text-red-600 text-sm">
//                           {formik.errors.password}
//                         </div>
//                       ) : null}
//                     </div>
//                     <div className="relative">
//                       <LoadingButton
//                         title="Submit"
//                         loading={loading}
//                         className="bg-primary text-white rounded-md px-6 py-1"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </PublicLayout>
//   );
// };

// export default Login;
