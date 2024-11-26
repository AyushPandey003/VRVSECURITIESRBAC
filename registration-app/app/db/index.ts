import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}
const client = neon(connectionString);

export const db = drizzle(client, { schema: schema, logger: true });
