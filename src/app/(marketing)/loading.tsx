export default function MarketingLoading() {
  return (
    <div className="min-h-dvh bg-navy-deep">
      {/* Navbar skeleton */}
      <div className="flex h-16 items-center justify-between border-b border-ivory/5 px-6 sm:px-10">
        {/* Logo placeholder */}
        <div className="h-6 w-28 animate-pulse rounded bg-ivory/10" />
        {/* Nav links placeholder */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="h-3 w-14 animate-pulse rounded bg-ivory/10" />
          <div className="h-3 w-16 animate-pulse rounded bg-ivory/10" />
          <div className="h-3 w-20 animate-pulse rounded bg-ivory/10" />
          <div className="h-3 w-14 animate-pulse rounded bg-ivory/10" />
          <div className="h-3 w-18 animate-pulse rounded bg-ivory/10" />
        </div>
        {/* CTA placeholder */}
        <div className="h-8 w-20 animate-pulse rounded bg-ivory/10" />
      </div>

      {/* Hero skeleton */}
      <div className="flex flex-col items-center justify-center px-6 py-32 sm:py-44">
        {/* Small tag */}
        <div className="mb-6 h-4 w-40 animate-pulse rounded bg-ivory/10" />
        {/* Heading line 1 */}
        <div className="mb-3 h-10 w-80 animate-pulse rounded bg-ivory/10 sm:h-14 sm:w-[520px]" />
        {/* Heading line 2 */}
        <div className="mb-8 h-10 w-64 animate-pulse rounded bg-ivory/10 sm:h-14 sm:w-[400px]" />
        {/* Subtitle */}
        <div className="mb-10 h-4 w-72 animate-pulse rounded bg-ivory/10 sm:w-96" />
        {/* CTA buttons */}
        <div className="flex gap-4">
          <div className="h-12 w-36 animate-pulse rounded bg-ivory/10" />
          <div className="h-12 w-36 animate-pulse rounded bg-ivory/10" />
        </div>
      </div>

      {/* Content skeleton rows */}
      <div className="mx-auto max-w-5xl space-y-20 px-6 pb-20">
        {/* Row 1 */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-48 w-full animate-pulse rounded-lg bg-ivory/10 sm:w-1/2" />
          <div className="flex w-full flex-col gap-3 sm:w-1/2">
            <div className="h-5 w-3/4 animate-pulse rounded bg-ivory/10" />
            <div className="h-3 w-full animate-pulse rounded bg-ivory/[0.07]" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-ivory/[0.07]" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-ivory/[0.07]" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-6 sm:flex-row-reverse sm:items-center">
          <div className="h-48 w-full animate-pulse rounded-lg bg-ivory/10 sm:w-1/2" />
          <div className="flex w-full flex-col gap-3 sm:w-1/2">
            <div className="h-5 w-2/3 animate-pulse rounded bg-ivory/10" />
            <div className="h-3 w-full animate-pulse rounded bg-ivory/[0.07]" />
            <div className="h-3 w-4/5 animate-pulse rounded bg-ivory/[0.07]" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-ivory/[0.07]" />
          </div>
        </div>

        {/* Row 3 — card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-lg border border-ivory/5 p-6">
              <div className="h-32 w-full animate-pulse rounded bg-ivory/10" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-ivory/10" />
              <div className="h-3 w-full animate-pulse rounded bg-ivory/[0.07]" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-ivory/[0.07]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
