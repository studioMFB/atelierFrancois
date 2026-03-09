import "dotenv/config";

import path from "node:path";

function asPositiveInt(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export const config = {
  port: asPositiveInt(process.env.PORT, 5021),
  host: process.env.HOST ?? "0.0.0.0",
  databasePath: path.resolve(
    process.cwd(),
    process.env.DATABASE_PATH ?? "./App_Data/lilwud.sqlite",
  ),
  sessionTtlDays: asPositiveInt(process.env.SESSION_TTL_DAYS, 14),
};
