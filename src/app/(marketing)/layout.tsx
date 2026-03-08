import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NoiseOverlay } from "@/components/layout/noise-overlay";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";
import { HudBrackets } from "@/components/layout/hud-brackets";
import { PageTransition } from "@/components/shared/page-transition";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Skip to main content link for keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold focus:text-dark-base focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <NoiseOverlay />
      <CustomCursor />
      <HudBrackets />
    </>
  );
}
