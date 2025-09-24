// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { notify } from "../../notify";

// export default function Header() {
//     const [email, setEmail] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     useEffect(() => {
//         async function fetchUser() {
//             try {
//                 const res = await fetch("/api/bloggerside/me", {
//                     credentials: "include",
//                 });
//                 if (res.ok) {
//                     const data = await res.json();
//                     setEmail(data.email);
//                 } else {
//                     setEmail(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//                 setEmail(null);
//             }
//         }
//         fetchUser();
//     }, []);

//     const handleLogout = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch("/api/logout", {
//                 method: "POST",
//                 credentials: "include",
//             });

//             if (res.ok) {
//                 setEmail(null);
//                 notify.success("Logged out successfully");
//                 router.push("/blogger/b_login");
//             } else {
//                 notify.error("Logout failed");
//             }
//         } catch (error) {
//             notify.error("Logout error");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-black p-4 shadow-lg flex justify-between items-center">
//             <div className="flex items-center gap-4">
//                 <Link href="/" className="text-white text-xl font-bold hover:text-gray-300 transition">
//                     SmartEdu
//                 </Link>
//             </div>

//             {email ? (
//                 <div className="flex items-center gap-4">
//                     <span className="text-gray-300 font-medium">{email}</span>
//                     <button
//                         onClick={handleLogout}
//                         disabled={loading}
//                         className={`px-4 py-2 rounded-md text-white font-medium transition ${loading
//                             ? "bg-gray-600 cursor-not-allowed"
//                             : "bg-gray-700 hover:bg-gray-600"
//                             }`}
//                     >
//                         {loading ? "Logging out..." : "Logout"}
//                     </button>
//                 </div>
//             ) : (
//                 <Link
//                     href="/blogger/b_login"
//                     className="px-4 py-2 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-600 transition"
//                 >
//                     Login
//                 </Link>
//             )}
//         </header>





//     );
// }



"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { notify } from "../../notify";

export default function Header() {
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Fetch logged-in user info
    // useEffect(() => {
    //     async function fetchUser() {
    //         try {
    //             const res = await fetch("/api/bloggerside/me", {
    //                 credentials: "include", // send cookies
    //             });

    //             if (res.ok) {
    //                 const data = await res.json();
    //                 setEmail(data.email); // set email in state
    //             } else {
    //                 setEmail(null);
    //             }
    //         } catch (err) {
    //             console.error("Error fetching user:", err);
    //             setEmail(null);
    //         }
    //     }

    //     fetchUser();
    // }, []);

    // Handle logout
    //   const handleLogout = async () => {
    //     setLoading(true);
    //     try {
    //       const res = await fetch("/api/bloggerside/logout", {
    //         method: "POST",
    //         credentials: "include", // send cookies
    //       });

    //       if (res.ok) {
    //         setEmail(null);
    //         notify.success("Logged out successfully");
    //         router.push("/blogger/b_login");
    //       } else {
    //         notify.error("Logout failed");
    //       }
    //     } catch (err) {
    //       console.error(err);
    //       notify.error("Logout error");
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    return (
        <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-black p-4 shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    className="text-white text-xl font-bold hover:text-gray-300 transition"
                >
                    SmartEdu
                </Link>
            </div>

            {/* {email ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-300 font-medium">{email}</span>
          <button
            onClick={handleLogout}
            disabled={loading}
            className={`px-4 py-2 rounded-md text-white font-medium transition ${
              loading ? "bg-gray-600 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      ) : (
        <Link
          href="/blogger/b_login"
          className="px-4 py-2 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-600 transition"
        >
          Login
        </Link>
      )} */}
        </header>
    );
}
