import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

async function sendNewsletterEmail(email) {
  await resend.emails.send({
    from: "Digify4u <onboarding@resend.dev>", // swap once your domain is verified
    to: email,
    subject: "Welcome to the Digify4u newsletter!",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
        <h2>You're subscribed!</h2>
        <p>Thanks for signing up — you'll now get updates on our latest work, insights and offers.</p>
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

      try {
        await sendNewsletterEmail(email);
      } catch (emailErr) {
        console.error("Newsletter email failed:", emailErr);
        return json({ error: "Failed to subscribe. Please try again." }, 500);
      }

      return json({ ok: true, message: "Subscribed!" });
    }

    if (path === "contact") {
      const { name, email, message } = body;
      if (!name || !email || !message) {
        return json({ error: "Missing fields" }, 400);
      }

      try {
        await sendContactEmails({ name, email, message });
      } catch (emailErr) {
        console.error("Contact email failed:", emailErr);
        return json({ error: "Failed to send message. Please try again." }, 500);
      }

      return json({ ok: true });
    }

    return json({ error: "Not found", path }, 404);
  } catch (e) {
    return json({ error: e.message || "Server error" }, 500);
  }
}