import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { playfair, cormorant, inter, lora, jetbrains } from "@/lib/fonts";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jesus CITY International Ministries — Raising Tomorrow's Leaders Today",
    template: "%s | JCIM",
  },
  description:
    "Jesus CITY International Ministries (JCIM) — a global apostolic ministry raising tomorrow's leaders through the Word, discipleship, and community.",
  metadataBase: new URL("https://jesuscityint.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jesuscityint.org",
    siteName: "Jesus CITY International Ministries",
    title: "JCIM — Raising Tomorrow's Leaders Today",
    description:
      "A global apostolic ministry transforming lives through the Word, discipleship, leadership, and community.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCIM — Raising Tomorrow's Leaders Today",
    description:
      "A global apostolic ministry transforming lives through the Word, discipleship, leadership, and community.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F0F1A" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${lora.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--jcim-navy)",
              border: "1px solid rgba(199,163,79,0.25)",
              color: "var(--jcim-warm-white)",
            },
          }}
        />
      </body>
    </html>
  );
}
