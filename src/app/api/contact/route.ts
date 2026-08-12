import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "yyuvanesh8@gmail.com";

    const gmailUser = process.env.GMAIL_USER || recipientEmail;
    const gmailPass = process.env.GMAIL_APP_PASS || process.env.GMAIL_PASS;
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

    const host = req.headers.get("host") || "yourwebsite.com";
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const emailSubject = `New Contact Message from ${name}`;
    const emailText = `Name: ${name}\nEmail: ${email}\nSubmitted: ${submittedAt}\n\nMessage:\n"${message}"\n\n---\nThis message was sent via the contact form on ${host}`;
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6d28d9; text-decoration: none;">${email}</a></p>
        <p style="margin: 0 0 16px 0;"><strong>Submitted:</strong> ${submittedAt}</p>
        
        <p style="margin: 0 0 4px 0;"><strong>Message:</strong></p>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #f1f5f9; margin: 0 0 24px 0; white-space: pre-wrap;">"${message}"</div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 13px; color: #64748b; margin: 0;">This message was sent via the contact form on <strong>${host}</strong></p>
      </div>
    `;

    // 1. Send via Nodemailer (Gmail App Password)
    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${gmailUser}>`,
          replyTo: email,
          to: recipientEmail,
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        });

        return NextResponse.json({
          success: true,
          message: "Message sent directly to your email!",
        });
      } catch (sendError: unknown) {

        const isAuthError = (() => {
          if (typeof sendError !== "object" || sendError === null) {
            return false;
          }

          const authError = sendError as {
            code?: string;
            responseCode?: number;
            response?: string;
            message?: string;
          };

          return (
            authError.code === "EAUTH" ||
            authError.responseCode === 535 ||
            authError.response?.includes("BadCredentials") ||
            authError.message?.includes("BadCredentials")
          );
        })();

        if (isAuthError && web3Key) {
          console.warn("Gmail auth failed, falling back to Web3Forms.");
        } else if (isAuthError) {
          return NextResponse.json(
            {
              error:
                "Invalid Gmail credentials. Please set a valid GMAIL_APP_PASS or use WEB3FORMS_ACCESS_KEY.",
            },
            { status: 500 }
          );
        } else {
          throw sendError;
        }
      }
    }

    // 2. Send via Web3Forms API
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          message: emailText,
          subject: emailSubject,
        }),
      });

      const data = await res.json();
      if (data.success) {
        return NextResponse.json({
          success: true,
          message: "Message sent directly to your email!",
        });
      }

      console.error("Web3Forms send error:", data);
      return NextResponse.json(
        { error: "Failed to deliver message via Web3Forms." },
        { status: 500 }
      );
    }

    // 3. Fallback if no email environment variable is configured yet
    console.warn(
      `⚠️ Email environment variable missing. Please configure GMAIL_APP_PASS in .env.local to deliver emails to ${recipientEmail}`
    );

    return NextResponse.json({
      success: true,
      message:
        "Data collected and logged successfully! Please set GMAIL_APP_PASS in .env.local to enable direct inbox delivery.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

