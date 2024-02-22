import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
export const POST = async (request: Request, response: NextApiResponse) => {
    try {
      const { email, password} = await request.json() as {email:string, password:string}
      // Authenticate the user
      const result = await sql`SELECT * FROM Users WHERE Email = ${email} AND Password = ${password};`;
      if (result.rowCount >  0) { // Access the 'rows' property of the result
        console.log("sucess");
        return response.status(200).json({ message: 'User login successfully' });
    } else {
        return response.status(200).json({ message: 'User login failed' });
      }
    } catch (error: any) { // Narrow down the type to 'any'
        return response.status(200).json({ error: error.message});
    }
  }
  