import { connect } from "../../../utils/dbconfig";
import Suggestion from "../../../model/suggestion";


// Handle GET to fetch all suggestions
export const GET = async (req) => {
  try {
    await connect();
    const suggestions = await Suggestion.find({}); // fetch all suggestions
    return new Response(JSON.stringify(suggestions), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch suggestions", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const { topic, suggestion } = await req.json();
    if (!topic || !suggestion) {
      return new Response("Missing fields", { status: 400 });
    }

    await connect();
    const newSuggestion = new Suggestion({ topic, suggestion });
    await newSuggestion.save();

    return new Response(JSON.stringify(newSuggestion), { status: 201 });
  } catch (err) {
    return new Response("Failed to save suggestion", { status: 500 });
  }
};
// import { connect } from "../../../..";
// import { ObjectId } from "mongodb";

// // ✅ Get all visible suggestions (user side)
// export async function GET() {
//   try {
//     const client = await connect();
//     const db = client.db("smartedu");
//     const suggestions = db.collection("suggestions");

//     // only visible suggestions for user side
//     const result = await suggestions.find({ visible: true }).toArray();

//     return new Response(JSON.stringify(result), { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return new Response("Server error", { status: 500 });
//   }
// }

// // ✅ Add new suggestion (admin)
// export async function POST(req) {
//   try {
//     const { topic, description } = await req.json();
//     if (!topic || !description) {
//       return new Response("Missing fields", { status: 400 });
//     }

//     const client = await connect();
//     const db = client.db("smartedu");
//     const suggestions = db.collection("suggestions");

//     const newSuggestion = {
//       topic,
//       description,
//       visible: true, // default true when created
//       createdAt: new Date(),
//     };

//     await suggestions.insertOne(newSuggestion);

//     return new Response(JSON.stringify({ success: true }), { status: 201 });
//   } catch (err) {
//     console.error(err);
//     return new Response("Server error", { status: 500 });
//   }
// }
