/**
 * Simple in-memory rate limiter for API routes.
 * For production at scale, replace with Redis-backed solution.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetTime) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetInSeconds: number;
}

export function rateLimit(
  identifier: string,
  { maxRequests = 10, windowMs = 60_000 }: { maxRequests?: number; windowMs?: number } = {}
): RateLimitResult {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || now > entry.resetTime) {
    store.set(identifier, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: maxRequests - 1, resetInSeconds: Math.ceil(windowMs / 1000) };
  }

  entry.count++;
  const resetInSeconds = Math.ceil((entry.resetTime - now) / 1000);

  if (entry.count > maxRequests) {
    return { success: false, remaining: 0, resetInSeconds };
  }

  return { success: true, remaining: maxRequests - entry.count, resetInSeconds };
}
