import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JCIM — Raising Tomorrow's Leaders Today";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F0F1A",
          position: "relative",
        }}
      >
        {/* Gold border accent */}
        <div
          style={{
            position: "absolute",
            inset: "16px",
            border: "2px solid rgba(199, 163, 79, 0.4)",
            display: "flex",
          }}
        />

        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            width: "40px",
            height: "40px",
            borderTop: "3px solid #C7A34F",
            borderLeft: "3px solid #C7A34F",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "40px",
            height: "40px",
            borderTop: "3px solid #C7A34F",
            borderRight: "3px solid #C7A34F",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            width: "40px",
            height: "40px",
            borderBottom: "3px solid #C7A34F",
            borderLeft: "3px solid #C7A34F",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "40px",
            height: "40px",
            borderBottom: "3px solid #C7A34F",
            borderRight: "3px solid #C7A34F",
            display: "flex",
          }}
        />

        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(199, 163, 79, 0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main title */}
        <div
          style={{
            display: "flex",
            fontSize: "140px",
            fontWeight: 900,
            letterSpacing: "0.1em",
            background: "linear-gradient(135deg, #f0dca5, #C7A34F, #8a6e40)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          JCIM
        </div>

        {/* Divider line */}
        <div
          style={{
            width: "120px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #C7A34F, transparent)",
            marginBottom: "24px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "#E8D5B7",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Raising Tomorrow&apos;s Leaders Today
        </div>

        {/* Full name */}
        <div
          style={{
            display: "flex",
            fontSize: "16px",
            color: "rgba(199, 163, 79, 0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: "16px",
          }}
        >
          Jesus CITY International Ministries
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
