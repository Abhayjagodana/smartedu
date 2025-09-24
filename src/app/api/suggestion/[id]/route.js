// import { connect } from "../../../../utils/dbconfig";
// import Suggestion from "../../../../model/suggestion";

// export const PATCH = async (req, { params }) => {
//   try {
//     const id = params.id;
//     await connect();

//     const suggestion = await Suggestion.findById(id);
//     if (!suggestion) return new Response("Not found", { status: 404 });

//     suggestion.visible = !suggestion.visible;
//     await suggestion.save();

//     return new Response(JSON.stringify(suggestion), { status: 200 });
//   } catch (err) {
//     return new Response("Failed to toggle visibility", { status: 500 });
//   }
// };

// /app/api/suggestion/toggle/[id]/route.js


// import { NextResponse } from "next/server";
// import { connect } from "../../../../utils/dbconfig"; // your MongoDB connection helper
// import Suggestion from "../../../../model/suggestion"; // your Mongoose model

// // DELETE a suggestion by ID
// export async function DELETE(request, { params }) {
//   try {
//     await connect();
//     const { id } = params;

//     const deleted = await Suggestion.findByIdAndDelete(id);
//     if (!deleted) {
//       return NextResponse.json(
//         { message: "Suggestion not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Suggestion deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting suggestion:", error);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }

  
// }


import { NextResponse } from "next/server";
import { connect } from "../../../../utils/dbconfig";
import Suggestion from "../../../../model/suggestion";

export async function DELETE(request, { params }) {
  try {
    await connect();
    const { id } = params;

    const deleted = await Suggestion.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "Suggestion not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Suggestion deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting suggestion:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// PUT: update suggestion
export async function PUT(request, { params }) {
  try {
    await connect();
    const { id } = params;
    const body = await request.json();

    const updated = await Suggestion.findByIdAndUpdate(
      id,
      { suggestion: body.suggestion },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ message: "Suggestion not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Suggestion updated successfully", suggestion: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating suggestion:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

