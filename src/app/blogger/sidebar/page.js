"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notify } from "../../notify";

export default function Sidebar({ currentPage }) {
    const [email, setEmail] = useState(null);
    const router = useRouter();

    // Fetch logged-in user info on mount
  useEffect(() => {
//   async function fetchUser() {
//     try {
//       const res = await fetch("/api/me", {
//         method: "GET",
//         credentials: "include",
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setEmail(data.email);
//       } else if (res.status === 401) {
//         setEmail(null); // not logged in
//       } else {
//         console.error("Unexpected response:", res.status);
//         setEmail(null);
//       }
//     } catch (err) {
//       console.error("Error fetching user:", err);
//       setEmail(null);
//     }
//   }
//   fetchUser();
}, []);

    // const handleLogout = async () => {
    //     try {
    //         const res = await fetch("/api/logout", {
    //             method: "POST",
    //             credentials: "include",
    //         });
    //         if (res.ok) {
    //             setEmail(null);
    //             notify.success("Logged out successfully");
    //             router.push("/login");
    //         } else {
    //             notify.error("Logout failed");
    //         }
    //     } catch (e) {
    //         notify.error("Network error");
    //     }
    // };

    const links = [
        { href: "/", name: "Home", page: "home" },
        // { href: "/course", name: "Course", page: "course" },
        { href: "/blogger/about", name: "About us", page: "about" },
        { href: "/blogger/contact", name: "Contact us", page: "contact" },
        // { href: "/blogger/b_login", name: "Blogger's login", page: "blogregister" },
        { href: "/blogger/suggestion", name: "Suggestions", page: "Suggestions" },

        { href: "blogger/developer", name: "Developers", page: "developers" },
        // { href: "/admin", name: "Admin", page: "admin" }
    ];

    return (
        <div className="fixed w-64 h-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-auto p-4">
            <div className="flex justify-center mb-4">
                <Image
                    src="/smartEDU_logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-gray-700"
                />
            </div>
            <ul>
                {links.map((link) => (
                    <li key={link.page} className="mb-2">
                        <Link
                            href={link.href}
                            className={`block px-4 py-3 text-lg font-serif hover:bg-gray-800 rounded transition-colors ${currentPage === link.page ? "bg-gray-800 text-white" : "text-gray-300"
                                }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}

                {/* Conditional Login/Logout */}
                {/* <li className="mt-4">
                    {email ? (
                        <div className="flex flex-col px-4 py-3 bg-gray-800 text-white rounded transition-colors">
                            <span className="mb-2 font-bold">{email}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="block px-4 py-3 text-lg font-serif text-gray-300 hover:bg-gray-800 rounded transition-colors"
                        >
                            Login/Register
                        </Link>
                    )}
                </li> */}
            </ul>
        </div>

    );
}
