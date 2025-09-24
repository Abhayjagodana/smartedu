// "use client";

// import { useState, useEffect } from "react";
// import Sidebar from "../sidebar/page";
// import { useRouter } from "next/navigation";
// import Header from "../header/page";

// export default function SuggestionPage() {
//     const [courses, setCourses] = useState([]);
//     const [topic, setTopic] = useState("");
//     const [suggestion, setSuggestion] = useState("");
//     const router = useRouter();

//     // Fetch courses for dropdown
//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const res = await fetch("/api/course");
//                 const data = await res.json();
//                 setCourses(data);
//             } catch (err) {
//                 console.error("Failed to fetch courses:", err);
//             }
//         };
//         fetchCourses();
//     }, []);

//     // Handle form submit
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!topic || !suggestion) {
//             alert("Please fill all fields!");
//             return;
//         }

//         try {
//             const res = await fetch("/api/suggestions", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ topic, suggestion }),
//             });

//             if (res.ok) {
//                 alert("Suggestion submitted successfully!");
//                 setTopic("");
//                 setSuggestion("");
//                 router.refresh();
//             } else {
//                 alert("Failed to submit suggestion");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Something went wrong");
//         }
//     };

//     return (
//         <div>
//             <Sidebar/>
//             <Header/>
//                     <div className="flex min-h-screen bg-gray-100">
//             <div className="flex-1 flex flex-col justify-center items-center">
//                 <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-lg">
//                     <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
//                         Add Suggestion
//                     </h1>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div>
//                             <label className="block font-semibold mb-2">Topic Name</label>
//                             <select
//                                 value={topic}
//                                 onChange={(e) => setTopic(e.target.value)}
//                                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             >
//                                 <option value="">Select a topic</option>
//                                 {courses.map((course) => (
//                                     <option key={course._id} value={course.courseName}>
//                                         {course.courseName}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block font-semibold mb-2">Suggestion Information</label>
//                             <textarea
//                                 value={suggestion}
//                                 onChange={(e) => setSuggestion(e.target.value)}
//                                 rows={5}
//                                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                                 placeholder="Write your suggestion here..."
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         </div>

//     );
// }
"use client";

import { useState, useEffect } from "react";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import { useRouter } from "next/navigation";

export default function SuggestionPage() {
  const [courses, setCourses] = useState([]);
  const [topic, setTopic] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const router = useRouter();

  // Fetch courses for dropdown
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/course");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // Fetch existing suggestions for table
  const fetchSuggestions = async () => {
    try {
      const res = await fetch("/api/suggestion");
      const data = await res.json();
      setSuggestionsList(data);
    } catch (err) {
      console.error("Failed to fetch suggestions:", err);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic || !suggestion) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("/api/suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, suggestion }),
      });

      if (res.ok) {
        alert("Suggestion submitted successfully!");
        setTopic("");
        setSuggestion("");
        fetchSuggestions(); // refresh table data
      } else {
        alert("Failed to submit suggestion");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-start items-center p-6">
          {/* Suggestion Form */}
          <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-lg mb-10">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
              Add Suggestion
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Topic Name</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a topic</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.courseName}>
                      {course.courseName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Suggestion Information</label>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  rows={5}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Write your suggestion here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Suggestions Table */}
          <div className="w-full max-w-4xl overflow-x-auto">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Submitted Suggestions</h2>
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="py-2 px-4 text-left">#</th>
                  <th className="py-2 px-4 text-left">Topic</th>
                  <th className="py-2 px-4 text-left">Suggestion</th>
                </tr>
              </thead>
              <tbody>
                {suggestionsList.length > 0 ? (
                  suggestionsList.map((item, index) => (
                    <tr
                      key={item._id}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{item.topic}</td>
                      <td className="py-2 px-4">{item.suggestion}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-4 px-4 text-center">
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
  );
}
