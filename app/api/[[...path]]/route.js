import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";

let cachedClient = null;

async function getDb() {
  if (!process.env.MONGO_URL) throw new Error("MONGO_URL not set");
  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGO_URL);
    await cachedClient.connect();
  }
  const dbName = process.env.DB_NAME || "digify4u";
  return cachedClient.db(dbName);
}

function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

export async function GET(request, { params }) {
  const path = params.path?.join("/") || "";
  if (path === "" || path === "health") {
    return json({ ok: true, service: "digify4u", ts: Date.now() });
  }
  return json({ error: "Not found", path }, 404);
}

export async function POST(request, { params }) {
  const path = params.path?.join("/") || "";
  try {
    const body = await request.json().catch(() => ({}));
    if (path === "newsletter") {
      const email = (body.email || "").trim().toLowerCase();
      if (!email || !email.includes("@")) {
        return json({ error: "Please provide a valid email" }, 400);
      }
      const db = await getDb();
      const doc = { id: uuidv4(), email, createdAt: new Date().toISOString() };
      await db.collection("newsletter").insertOne(doc);
      return json({ ok: true, message: "Subscribed!", id: doc.id });
    }
    if (path === "contact") {
      const { name, email, message } = body;
      if (!name || !email || !message) {
        return json({ error: "Missing fields" }, 400);
      }
      const db = await getDb();
      const doc = { id: uuidv4(), name, email, message, createdAt: new Date().toISOString() };
      await db.collection("contacts").insertOne(doc);
      return json({ ok: true, id: doc.id });
    }
    return json({ error: "Not found", path }, 404);
  } catch (e) {
    return json({ error: e.message || "Server error" }, 500);
  }
}
