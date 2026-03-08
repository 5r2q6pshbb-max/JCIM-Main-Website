import { Resend } from "resend";

/** Lazy-initialised Resend client – avoids throwing at import time when
 *  `RESEND_API_KEY` is not yet configured in the environment. */
let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error(
        "[Email] RESEND_API_KEY is not configured. Set it in your environment variables."
      );
    }
    _resend = new Resend(key);
  }
  return _resend;
}

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const resend = getResend();
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "JCIM <noreply@jesuscityint.org>",
      to,
      subject,
      html,
    });
    return { success: true, data };
  } catch (error) {
    console.error("[Email Error]", error);
    return { success: false, error };
  }
}
