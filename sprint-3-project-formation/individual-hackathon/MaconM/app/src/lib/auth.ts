import crypto from "crypto";

export const ADMIN_SESSION_COOKIE = "hearback_admin_session";

const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours
export const ADMIN_SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET is not set. See .env.example.");
  }
  return secret;
}

function sign(value: string): string {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

/** A signed, expiring token: "<expiryMs>.<hmac>". No server-side session store needed. */
export function createSessionToken(): string {
  const expires = String(Date.now() + SESSION_TTL_MS);
  return `${expires}.${sign(expires)}`;
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;

  const expected = sign(expires);
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(signature);
  if (expectedBuf.length !== actualBuf.length) return false;
  if (!crypto.timingSafeEqual(expectedBuf, actualBuf)) return false;

  const expiresAt = Number(expires);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}
