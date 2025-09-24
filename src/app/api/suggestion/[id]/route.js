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
import { connect } from "../../../../utils/dbconfig";
import { ObjectId } from "mongodb";

// ✅ Toggle visibility (admin)
export async function PATCH(req, { params }) {
  const { id } = params;

  try {
    const client = await connect();
    const db = client.db("smartedu");
    const suggestions = db.collection("suggestions");

    const suggestion = await suggestions.findOne({ _id: new ObjectId(id) });
    if (!suggestion) {
      return new Response("Not found", { status: 404 });
    }

    await suggestions.updateOne(
      { _id: new ObjectId(id) },
      { $set: { visible: !suggestion.visible } }
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}

// ✅ Delete suggestion (admin)
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const client = await connect();
    const db = client.db("smartedu");
    const suggestions = db.collection("suggestions");

    await suggestions.deleteOne({ _id: new ObjectId(id) });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
