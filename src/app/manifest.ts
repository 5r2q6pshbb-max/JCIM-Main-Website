import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jesus CITY International Ministries",
    short_name: "JCIM",
    description: "Raising Tomorrow's Leaders Today",
    start_url: "/",
    display: "standalone",
    background_color: "#0F0F1A",
    theme_color: "#0F0F1A",
    icons: [
      {
        src: "/icons/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/icons/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
