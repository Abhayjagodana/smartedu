"use client";

import { useState, useEffect } from "react";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import { useRouter } from "next/navigation";

export default function AdminSuggestions() {
    const [suggestions, setSuggestions] = useState([]);
    const router = useRouter();

    // Fetch all suggestions
    const fetchSuggestions = async () => {
        try {
            const res = await fetch("/api/suggestion");
            const data = await res.json();
            setSuggestions(data);
        } catch (err) {
            console.error("Failed to fetch suggestions:", err);
        }
    };

    useEffect(() => {
        fetchSuggestions();
    }, []);

    return (
  <div>
    <Header />
    <Sidebar />
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
            All Suggestions
          </h1>

          {/* Centered table container with max width */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-md mx-auto max-w-3xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-purple-700 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Topic</th>
                  <th className="px-4 py-2 text-left">Suggestion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {suggestions.length > 0 ? (
                  suggestions.map((item, index) => (
                    <tr
                      key={item._id}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item.topic}</td>
                      <td className="px-4 py-2">{item.suggestion}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center py-4">
                      No suggestions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
// /app/user/suggestions/page.js
// "use client";

// import { useState, useEffect } from "react";
// import Header from "../header/page";

// export default function UserSuggestions() {
//   const [suggestions, setSuggestions] = useState([]);

//   const fetchSuggestions = async () => {
//     try {
//       const res = await fetch("/api/suggestion");
//       const data = await res.json();
//       setSuggestions(data.filter(item => item.visible)); // Only visible
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchSuggestions();
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <Header />
//       <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
//         Suggestions
//       </h1>
//       <div className="overflow-x-auto bg-white rounded-lg shadow-md mx-auto max-w-3xl">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-purple-700 text-white">
//             <tr>
//               <th className="px-4 py-2">#</th>
//               <th className="px-4 py-2">Topic</th>
//               <th className="px-4 py-2">Suggestion</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {suggestions.length > 0 ? (
//               suggestions.map((item, index) => (
//                 <tr key={item._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                   <td className="px-4 py-2">{index + 1}</td>
//                   <td className="px-4 py-2">{item.topic}</td>
//                   <td className="px-4 py-2">{item.suggestion}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={3} className="text-center py-4">
//                   No suggestions available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
