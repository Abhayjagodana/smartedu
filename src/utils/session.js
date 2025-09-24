// utils/session.js
import { parse } from "cookie";

export async function getSessionFromCookie(req) {
  const cookie = req.headers.get("cookie") || "";
  const cookies = parse(cookie);

  // Example: your cookie name is "session"
  const sessionToken = cookies.session;
  if (!sessionToken) return null;

  // Lookup session in your database or decode JWT
  // Example if session stored in-memory or DB:
  const session = await getSessionFromDB(sessionToken); // implement this
  return session; // must return { userId: ObjectId }
}
