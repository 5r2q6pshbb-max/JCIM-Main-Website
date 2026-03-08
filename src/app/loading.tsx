export default function RootLoading() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-navy-deep">
      {/* Animated gold cross */}
      <div className="cross-loader relative h-16 w-16">
        {/* Vertical bar */}
        <div className="absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-light via-gold to-gold-dark" />
        {/* Horizontal bar */}
        <div className="absolute top-[38%] left-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
      </div>

      {/* JCIM text */}
      <p className="mt-8 font-[family-name:var(--font-playfair)] text-lg tracking-[0.3em] text-gold">
        JCIM
      </p>

      {/* Inline styles for animation — avoids needing CSS module or globals update */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cross-loader {
              animation: crossPulse 2s ease-in-out infinite;
            }

            @keyframes crossPulse {
              0%, 100% {
                opacity: 0.4;
                transform: scale(0.95) rotate(0deg);
              }
              50% {
                opacity: 1;
                transform: scale(1.05) rotate(5deg);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .cross-loader {
                animation: none;
                opacity: 1;
                transform: none;
              }
            }
          `,
        }}
      />
    </div>
  );
}
