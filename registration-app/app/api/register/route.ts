
import { db } from '@/app/db';
import { users } from '@/schema';
import crypto from 'crypto';
import { eq } from 'drizzle-orm';

interface RegisterRequestBody {
    email: string;
    password: string;
    name: string;
    role?: string;  
}

export async function POST(request: Request): Promise<Response> {
    try{
        const body = await request.json() as RegisterRequestBody;
        if(!body.email || !body.password || !body.name){
            return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
        }
        const userExists = await db.selectDistinct().from(users).where(eq(users.email, body.email));
        if(userExists.length > 0){
            return new Response(JSON.stringify({ message: 'User with this email already exists' }), { status: 400 });
        }
        const user = await db.insert(users).values({
            email: body.email,
            password: crypto.createHash('sha256').update(body.password).digest('hex'),
            name: body.name,
        });
        return new Response(JSON.stringify(user), { status: 201 });

    }
    catch(e){
        if (e instanceof Error) {
            return new Response(JSON.stringify({ message: e.message }), { status: 500 });
        }
        return new Response(JSON.stringify({ message: 'An unknown error occurred' }), { status: 500 });
    }
}