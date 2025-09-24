import { connect } from "../../../utils/dbconfig";
import Course from "../../../model/course";

export const GET = async (req) => {
  try {
    await connect();
    const courses = await Course.find({}).select("courseName"); // fetch only name
    return new Response(JSON.stringify(courses), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch courses", { status: 500 });
  }
};
