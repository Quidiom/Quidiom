import { Pool } from 'pg';
require("dotenv").config();
const connection_string: string | undefined = process.env.PG_CONNECTION_STRING; 
const pool = new Pool({connection_string});
