import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, value } = req.body;
  if (!name || !value) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  console.log('Inserting values:', name, value);
  const client = await pool.connect();
  try {
    await client.query('INSERT INTO public.test_data (name, value) VALUES ($1, $2)', [name, value]);
   


    res.status(200).json({ message: 'Data uploaded' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error', error: error.message });
  } finally {
    client.release();
  }
}
