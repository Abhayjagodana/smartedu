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



// "use client";

// import { useState, useEffect } from "react";
// import Sidebar from "../sidebar/page";
// import Header from "../header/page";
// import { useRouter } from "next/navigation";

// export default function SuggestionPage() {
//   const [courses, setCourses] = useState([]);
//   const [topic, setTopic] = useState("");
//   const [suggestion, setSuggestion] = useState("");
//   const [suggestionsList, setSuggestionsList] = useState([]);
//   const router = useRouter();

//   // Fetch courses for dropdown
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/course");
//         const data = await res.json();
//         setCourses(data);
//       } catch (err) {
//         console.error("Failed to fetch courses:", err);
//       }
//     };
//     fetchCourses();
//   }, []);

//   // Fetch existing suggestions for table
//   const fetchSuggestions = async () => {
//     try {
//       const res = await fetch("/api/suggestion");
//       const data = await res.json();
//       setSuggestionsList(data);
//     } catch (err) {
//       console.error("Failed to fetch suggestions:", err);
//     }
//   };

//   useEffect(() => {
//     fetchSuggestions();
//   }, []);

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!topic || !suggestion) {
//       alert("Please fill all fields!");
//       return;
//     }

//     try {
//       const res = await fetch("/api/suggestion", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic, suggestion }),
//       });

//       if (res.ok) {
//         alert("Suggestion submitted successfully!");
//         setTopic("");
//         setSuggestion("");
//         fetchSuggestions(); // refresh table data
//       } else {
//         alert("Failed to submit suggestion");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="flex-1 flex flex-col justify-start items-center p-6">
//           {/* Suggestion Form */}
//           <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-lg mb-10">
//             <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
//               Add Suggestion
//             </h1>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-semibold mb-2">Topic Name</label>
//                 <select
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 >
//                   <option value="">Select a topic</option>
//                   {courses.map((course) => (
//                     <option key={course._id} value={course.courseName}>
//                       {course.courseName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2">Suggestion Information</label>
//                 <textarea
//                   value={suggestion}
//                   onChange={(e) => setSuggestion(e.target.value)}
//                   rows={5}
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="Write your suggestion here..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Suggestions Table */}
//           <div className="w-full max-w-4xl overflow-x-auto">
//             <h2 className="text-2xl font-bold text-purple-800 mb-4">Submitted Suggestions</h2>
//             <table className="min-w-full bg-white rounded-lg shadow-md">
//               <thead>
//                 <tr className="bg-purple-700 text-white">
//                   <th className="py-2 px-4 text-left">#</th>
//                   <th className="py-2 px-4 text-left">Topic</th>
//                   <th className="py-2 px-4 text-left">Suggestion</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {suggestionsList.length > 0 ? (
//                   suggestionsList.map((item, index) => (
//                     <tr
//                       key={item._id}
//                       className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
//                     >
//                       <td className="py-2 px-4">{index + 1}</td>
//                       <td className="py-2 px-4">{item.topic}</td>
//                       <td className="py-2 px-4">{item.suggestion}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={3} className="py-4 px-4 text-center">
//                       No suggestions found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import { useRouter } from "next/navigation";

function SuggestionPage() {
  const [courses, setCourses] = useState([]);
  const [topic, setTopic] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editSuggestion, setEditSuggestion] = useState("");
  const router = useRouter();

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
        fetchSuggestions();
      } else {
        alert("Failed to submit suggestion");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this suggestion?")) return;

    try {
      const res = await fetch(`/api/suggestion/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("Suggestion deleted successfully!");
        fetchSuggestions();
      } else {
        alert("Failed to delete suggestion");
      }
    } catch (err) {
      console.error("Error deleting suggestion:", err);
      alert("Something went wrong");
    }
  };

  const handleEdit = (id, currentSuggestion) => {
    setEditId(id);
    setEditSuggestion(currentSuggestion);
  };

  const handleUpdate = async (id) => {
    if (!editSuggestion) {
      alert("Suggestion cannot be empty!");
      return;
    }

    try {
      const res = await fetch(`/api/suggestion/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ suggestion: editSuggestion }),
      });

      if (res.ok) {
        alert("Suggestion updated successfully!");
        setEditId(null);
        setEditSuggestion("");
        fetchSuggestions();
      } else {
        alert("Failed to update suggestion");
      }
    } catch (err) {
      console.error("Error updating suggestion:", err);
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
          <div className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-xl mb-10">
            <h1 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
              Add Suggestion
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Topic Name</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Write your suggestion here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Suggestions Table */}
          <div className="w-full max-w-4xl overflow-x-auto bg-white rounded-2xl shadow-xl p-4">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
              Submitted Suggestions
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Topic</th>
                    <th className="py-3 px-4">Suggestion</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {suggestionsList.length > 0 ? (
                    suggestionsList.map((item, index) => (
                      <tr
                        key={item._id}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-2 px-4">{index + 1}</td>
                        <td className="py-2 px-4">{item.topic}</td>
                        <td className="py-2 px-4">
                          {editId === item._id ? (
                            <input
                              type="text"
                              value={editSuggestion}
                              onChange={(e) => setEditSuggestion(e.target.value)}
                              className="w-full p-2 border rounded-lg"
                            />
                          ) : (
                            item.suggestion
                          )}
                        </td>
                        <td className="py-2 px-4 space-x-2">
                          {editId === item._id ? (
                            <button
                              onClick={() => handleUpdate(item._id)}
                              className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => handleEdit(item._id, item.suggestion)}
                              className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                            >
                              Update
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-4 px-4 text-center">
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

export default SuggestionPage;

