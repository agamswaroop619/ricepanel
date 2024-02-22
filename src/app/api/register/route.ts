import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (request: Request, response: NextApiResponse) => {
    const {name, email, password} = await request.json() as {name:string, email:string, password:string}
    try {
        await sql`INSERT INTO Users (Name, Email, Password) VALUES (${name}, ${email}, ${password});`;
        //await sql`CREATE TABLE Pet ( Name varchar(255), Owner varchar(255) );
        response.json({ message: 'User registered successfully' });
    } catch (error: any) {
        response.json({ error: error.message });
    }
    return new Response()
};
