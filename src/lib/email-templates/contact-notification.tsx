function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function contactNotificationHtml(data: {
  name: string;
  email: string;
  phone?: string;
  type: string;
  message?: string;
  ageGroup?: string;
  howHeard?: string;
  ministryInterest?: string;
  availability?: string;
}): string {
  const rows = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Form Type", value: data.type },
    { label: "Age Group", value: data.ageGroup },
    { label: "How They Heard", value: data.howHeard },
    { label: "Ministry Interest", value: data.ministryInterest },
    { label: "Availability", value: data.availability },
  ]
    .filter((r) => r.value)
    .map(
      (r) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid rgba(199,163,79,0.1);color:rgba(232,213,183,0.6);font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(r.label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid rgba(199,163,79,0.1);color:#E8D5B7;font-size:14px;">${escapeHtml(r.value!)}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#0F0F1A;color:#FAFAF8;font-family:Georgia,'Times New Roman',serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="border:1px solid rgba(199,163,79,0.2);padding:40px;background:#1A1A2E;">
      <h1 style="color:#C7A34F;text-align:center;font-size:24px;margin:0 0 8px 0;font-weight:normal;">
        New ${escapeHtml(data.type.charAt(0).toUpperCase() + data.type.slice(1))} Form Submission
      </h1>
      <p style="text-align:center;color:rgba(232,213,183,0.5);font-size:13px;margin:0 0 24px 0;">
        Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
      </p>

      <table style="width:100%;border-collapse:collapse;margin:0 0 20px 0;">
        ${rows}
      </table>

      ${
        data.message
          ? `<div style="margin:20px 0 0 0;">
              <p style="color:rgba(232,213,183,0.6);font-size:13px;margin:0 0 8px 0;">Message:</p>
              <div style="background:rgba(15,15,26,0.5);border:1px solid rgba(199,163,79,0.1);padding:16px;color:#E8D5B7;line-height:1.7;font-size:14px;">
                ${escapeHtml(data.message)}
              </div>
            </div>`
          : ""
      }

      <hr style="border:none;border-top:1px solid rgba(199,163,79,0.15);margin:24px 0;" />
      <p style="font-size:12px;color:rgba(232,213,183,0.4);text-align:center;margin:0;">
        JCIM Admin Notification &bull; Do not reply to this email
      </p>
    </div>
  </div>
</body>
</html>`;
}
