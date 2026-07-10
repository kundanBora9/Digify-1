import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";

let cachedClient = null;
const resend = new Resend(process.env.RESEND_API_KEY);

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

async function sendContactEmails({ name, email, message }) {
  // Notify the team
  await resend.emails.send({
    from: "Digify4u Website <onboarding@resend.dev>", // swap once your domain is verified
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  // Thank-you email to the submitter
  await resend.emails.send({
    from: "Digify4u <onboarding@resend.dev>", // swap once your domain is verified
    to: email,
    subject: "We've received your message — Digify4u",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
        <h2>Thanks for reaching out, ${name.split(" ")[0]}!</h2>
        <p>We've received your message and a senior strategist will get back to you within <strong>4 business hours</strong>.</p>
        <p>In the meantime, feel free to reply to this email if you have anything to add.</p>
        <br/>
        <p>— The Digify4u Team</p>
      </div>
    `,
  });
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

      // Send emails, but don't fail the whole request if email sending has an issue —
      // the enquiry is already safely saved in Mongo either way.
      try {
        await sendContactEmails({ name, email, message });
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }

      return json({ ok: true, id: doc.id });
    }

    return json({ error: "Not found", path }, 404);
  } catch (e) {
    return json({ error: e.message || "Server error" }, 500);
  }
}