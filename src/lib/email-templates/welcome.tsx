function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function welcomeEmailHtml(email: string): string {
  const safeEmail = escapeHtml(email);
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to JCIM</title>
</head>
<body style="margin:0;padding:0;background:#0F0F1A;color:#FAFAF8;font-family:Georgia,'Times New Roman',serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="border:1px solid rgba(199,163,79,0.2);padding:40px;background:#1A1A2E;">
      <h1 style="color:#C7A34F;text-align:center;font-size:28px;margin:0 0 24px 0;font-weight:normal;">
        Welcome to the Family!
      </h1>
      <p style="line-height:1.8;margin:0 0 16px 0;color:#E8D5B7;">
        Thank you for subscribing to JCIM updates. You&rsquo;ll receive our latest sermons,
        blog posts, and event announcements directly to your inbox.
      </p>
      <p style="line-height:1.8;margin:0 0 16px 0;color:rgba(232,213,183,0.7);font-size:14px;">
        Subscribed as: ${safeEmail}
      </p>
      <p style="color:#C7A34F;text-align:center;font-style:italic;margin:24px 0;line-height:1.6;">
        &ldquo;Go therefore and make disciples of all nations&rdquo;<br />
        <span style="font-size:13px;color:rgba(199,163,79,0.7);">&mdash; Matthew 28:19</span>
      </p>
      <hr style="border:none;border-top:1px solid rgba(199,163,79,0.15);margin:24px 0;" />
      <p style="font-size:12px;color:rgba(232,213,183,0.4);text-align:center;margin:0;">
        Jesus CITY International Ministries &bull; info@jesuscityint.org
      </p>
    </div>
  </div>
</body>
</html>`;
}
