import type { NextConfig } from "next";
import path from "path";
import withSerwistInit from "@serwist/next";
import createNextIntlPlugin from "next-intl/plugin";

// NOTE: @serwist/next uses a webpack plugin internally. It works correctly for
// production builds (`next build`) which always use webpack. During development
// with Turbopack (`next dev`), the service worker will NOT be compiled — this is
// expected and harmless. The `disable` flag below silences the Turbopack warning
// during dev. If you need the service worker in dev, run `next dev --webpack`.
const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV !== "production",
});

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default withNextIntl(withSerwist(nextConfig));
