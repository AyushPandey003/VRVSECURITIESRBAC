// drizzle.config.ts
 
import "dotenv/config";
import type { Config } from "drizzle-kit";
 
export default {
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "default_database_url",
  },
  strict: true,
  verbose: true,
} satisfies Config;
 
 