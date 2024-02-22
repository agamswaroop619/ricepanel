import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST_register(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { name, email, password } = request.body;
    // Insert the new user into the database
    await sql`INSERT INTO Users (Name, Email, Password) VALUES (${name}, ${email}, ${password});`;
    response.status(200).json({ message: 'User registered successfully' });
  } catch (error: any) { // Narrow down the type to 'any'
    response.status(500).json({ error: error.message });
  }
}

export async function POST_login(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { email, password } = request.body;
    // Authenticate the user
    const result = await sql`SELECT * FROM Users WHERE Email = ${email} AND Password = ${password};`;
    if (result.rows.length >  0) { // Access the 'rows' property of the result
      response.status(200).json({ message: 'User logged in successfully' });
    } else {
      response.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error: any) { // Narrow down the type to 'any'
    response.status(500).json({ error: error.message });
  }
}
