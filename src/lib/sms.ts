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

  try {
    const params = new URLSearchParams({
      key: apiKey,
      to: to,
      msg: message,
      sender_id: senderID,
    });

    const response = await fetch(
      `https://apps.eazismspro.com/api/v2/sms/send?${params.toString()}`,
      { method: "GET" }
    );

    const result = await response.text();
    console.log("[SMS Sent]", { to, result });
    return { success: true, result };
  } catch (error) {
    console.error("[SMS Error]", error);
    return { success: false, error };
  }
}
