export function prayerConfirmationHtml(name: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prayer Request Received</title>
</head>
<body style="margin:0;padding:0;background:#0F0F1A;color:#FAFAF8;font-family:Georgia,'Times New Roman',serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="border:1px solid rgba(199,163,79,0.2);padding:40px;background:#1A1A2E;">
      <h1 style="color:#C7A34F;text-align:center;font-size:28px;margin:0 0 24px 0;font-weight:normal;">
        We&rsquo;re Praying With You
      </h1>
      <p style="line-height:1.8;margin:0 0 16px 0;color:#E8D5B7;">
        Dear ${name},
      </p>
      <p style="line-height:1.8;margin:0 0 16px 0;color:#E8D5B7;">
        Your prayer request has been received. Our prayer team is lifting you up before the Lord.
        You are not alone &mdash; we stand with you in faith, believing God for a breakthrough.
      </p>
      <p style="line-height:1.8;margin:0 0 16px 0;color:#E8D5B7;">
        If you need further pastoral support, please don&rsquo;t hesitate to reach out to us at
        <a href="mailto:info@jesuscityint.org" style="color:#C7A34F;">info@jesuscityint.org</a>.
      </p>
      <p style="color:#C7A34F;text-align:center;font-style:italic;margin:24px 0;line-height:1.6;">
        &ldquo;Cast all your anxiety on him because he cares for you.&rdquo;<br />
        <span style="font-size:13px;color:rgba(199,163,79,0.7);">&mdash; 1 Peter 5:7</span>
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
