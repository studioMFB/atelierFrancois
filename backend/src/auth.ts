import {
  createHash,
  pbkdf2Sync,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

const HASH_VERSION = "PBKDF2";
const PASSWORD_ITERATIONS = 120_000;
const PASSWORD_KEY_LENGTH = 32;

export function hashPassword(password: string) {
  const salt = randomBytes(16);
  const derived = pbkdf2Sync(
    password,
    salt,
    PASSWORD_ITERATIONS,
    PASSWORD_KEY_LENGTH,
    "sha256",
  );

  return [
    HASH_VERSION,
    String(PASSWORD_ITERATIONS),
    salt.toString("base64"),
    derived.toString("base64"),
  ].join("$");
}

export function verifyPassword(password: string, encodedHash: string) {
  const parts = encodedHash.split("$");
  if (parts.length !== 4 || parts[0] !== HASH_VERSION) {
    return false;
  }

  const iterations = Number(parts[1]);
  const salt = Buffer.from(parts[2], "base64");
  const expected = Buffer.from(parts[3], "base64");
  const actual = pbkdf2Sync(
    password,
    salt,
    iterations,
    expected.length,
    "sha256",
  );

  return timingSafeEqual(actual, expected);
}

export function createAccessToken() {
  return randomBytes(32).toString("hex");
}

export function hashToken(token: string) {
  return createHash("sha256").update(token).digest("base64");
}
