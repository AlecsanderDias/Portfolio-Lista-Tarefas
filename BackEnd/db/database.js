import pg from 'pg';
import { createDatabase } from './createDatabase.js';
import 'dotenv/config';
const { Client } = pg;
const client = new Client({
    // user: 'teste', // Somente para debugar
    // password: 'teste', // Depois apagar
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DATABASE
})
await client.connect();

await client.query(createDatabase);

export { client as db };