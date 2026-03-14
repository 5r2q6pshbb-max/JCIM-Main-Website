export async function sendSMS({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  const apiKey = process.env.EAZISMS_API_KEY;
  const senderID = process.env.EAZISMS_SENDER_ID || "JCIM";

  if (!apiKey) {
    console.warn("[SMS] EAZISMS_API_KEY not configured");
    return { success: false, error: "SMS not configured" };
  }

  // Sanitize phone number: allow only digits, +, spaces, hyphens
  const sanitizedPhone = to.replace(/[^\d+\s-]/g, "");
  if (!sanitizedPhone || sanitizedPhone.length < 10) {
    return { success: false, error: "Invalid phone number" };
  }

  try {
    const params = new URLSearchParams({
      key: apiKey,
      to: sanitizedPhone,
      msg: message,
      sender_id: senderID,
    });

    const response = await fetch(
      `https://apps.eazismspro.com/api/v2/sms/send?${params.toString()}`,
      { method: "GET" }
    );

    const result = await response.text();
    console.log("[SMS Sent]", { status: response.status });
    return { success: true, result };
  } catch (error) {
    console.error("[SMS Error]", error);
    return { success: false, error };
  }
}
