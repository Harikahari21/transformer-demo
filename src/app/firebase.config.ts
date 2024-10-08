// import { initializeApp } from "firebase/app";
// import {
//   Database,
//   getDatabase,
//   ref as dbRef,
//   update,
//   serverTimestamp,
//   get,
//   remove,
//   push,
//   set,
// } from "firebase/database";
// import {
//   ref as storageRef,
//   getStorage,
//   uploadBytes,
//   FirebaseStorage,
//   getDownloadURL,
//   deleteObject,
// } from "firebase/storage";
// import {
//   Auth,
//   getAuth,
//   onAuthStateChanged,
//   User,
//   signOut,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   deleteUser,
// } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { UserType } from "@/types/user";
// import Swal from "sweetalert2";
// import { ShowError } from "@/components/core/ShowError";

// const firebaseConfig = {
//   apiKey: "AIzaSyAZoMRpu9zEPvdGQnKhROjBEmIYnIgC9FA",
//   authDomain: "Gamma-transformer-ltd.firebaseapp.com",
//   projectId: "Gamma-transformer-ltd",
//   storageBucket: "Gamma-transformer-ltd.appspot.com",
//   messagingSenderId: "622129076903",
//   appId: "1:622129076903:web:c913fccf9dc3fef76bd982",
//   measurementId: "G-JH3E0TM1PR",
// };

// let analytics, db: Database, storage: FirebaseStorage, auth: Auth;

// if (firebaseConfig?.projectId) {
//   const app = initializeApp(firebaseConfig);
//   if (app.name && typeof window !== "undefined") analytics = getAnalytics(app);
//   db = getDatabase();
//   storage = getStorage();
//   auth = getAuth(app);
// }

// const database = {
//   push: async (path: string, value: object) => {
//     await push(dbRef(db, path), {
//       ...value,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//       userAgent: navigator?.userAgent,
//     });
//   },
//   set: async (path: string, value: object) => {
//     await set(dbRef(db, path), {
//       ...value,
//     });
//   },
//   update: async (path: string, value: object) => {
//     try {
//       await update(dbRef(db, path), {
//         ...value,
//       });
//     } catch (error) {
//       console.log(error);
//       ShowError(error);
//     }
//   },
//   get: async (path: string) => {
//     try {
//       const snap = await get(dbRef(db, path));
//       return snap.exists() ? snap.val() : {};
//     } catch (error) {
//       console.log(`🔥🔥🔥 Error 🔥🔥🔥`, error);
//     }
//   },
//   delete: async (path: string) => {
//     try {
//       await remove(dbRef(db, path));
//     } catch (error) {
//       ShowError(error);
//     }
//   },
// };

// const media = {
//   upload: async (path: string, file: File) => {
//     try {
//       await uploadBytes(storageRef(storage, path), file);
//       const url = await getDownloadURL(storageRef(storage, path));
//       return url;
//     } catch (error) {
//       ShowError(error);
//     }
//   },
//   delete: async (path: string) => {
//     try {
//       await deleteObject(storageRef(storage, path));
//     } catch (error) {
//       ShowError(error);
//     }
//   },
// };

// const onUserStateChanged = (
//   onUserFound: (user: User) => void,
//   onUserNotFound?: () => void
// ) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) onUserFound(user);
//     else onUserNotFound?.();
//   });
// };
// const logOut = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     ShowError(error);
//   }
// };
// type UserCredType = {
//   user: UserType;
// };
// const login = async (email: string, password: string) => {
//   try {
//     const UserCred = await signInWithEmailAndPassword(auth, email, password);
//     return (UserCred as any).user;
//   } catch (error) {
//     if (
//       error instanceof Error &&
//       error?.message === "Firebase: Error (auth/user-not-found)."
//     ) {
//       Swal.fire({
//         title: "Error",
//         text: "User Not Found! Please check your email Id",
//         icon: "error",
//       });
//       return false;
//     } else if (
//       error instanceof Error &&
//       error?.message === "Firebase: Error (auth/wrong-password)."
//     ) {
//       Swal.fire({
//         title: "Error",
//         text: "Incorrect Password! Please try again.",
//         icon: "error",
//       });
//       return false;
//     } else if (
//       error instanceof Error &&
//       error?.message === "Firebase: Error (auth/invalid-login-credentials)."
//     ) {
//       Swal.fire({
//         title: "Error",
//         text: "User Not Found",
//         icon: "error",
//       });
//       return false;
//     } else {
//       ShowError(error);
//     }
//   }
// };

// const register = async (email: string, password: string) => {
//   try {
//     const UserCred = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return UserCred.user;
//   } catch (error) {
//     if (
//       error instanceof Error &&
//       error?.message === "Firebase: Error (auth/email-already-in-use)."
//     ) {
//       Swal.fire({
//         title: "Error",
//         text: "User Already Exists",
//         icon: "error",
//       });
//       return false;
//     }
//     if (
//       error instanceof Error &&
//       error?.message === "Firebase: Error (auth/invalid-email)."
//     ) {
//       Swal.fire({
//         title: "Error",
//         text: "Invalid Email ID",
//         icon: "error",
//       });
//       return false;
//     }
//     if (
//       error instanceof Error &&
//       error?.message ===
//         "Firebase: Password should be at least 6 characters (auth/weak-password)."
//     ) {
//       Swal.fire({
//         title: "Error",
//         text: "Password should be at least 6 characters long",
//         icon: "error",
//       });
//       return false;
//     } else {
//       ShowError(error);
//     }
//   }
// };

// const userRemove = async (email: string, password: string) => {
//   try {
//     const UserCred = await signInWithEmailAndPassword(auth, email, password);
//     if (UserCred?.user?.uid) {
//       const removeUser = await deleteUser(auth.currentUser!);
//       const data = await database.get(`users/${auth.currentUser?.uid}`);
//       await database?.delete(`users/${UserCred?.user?.uid}`);
//       return true;
//     }
//   } catch (error) {
//     ShowError(error);
//   }
// };

// export {
//   login,
//   analytics,
//   database,
//   media,
//   db,
//   auth,
//   logOut,
//   onUserStateChanged,
//   register,
//   userRemove,
// };
