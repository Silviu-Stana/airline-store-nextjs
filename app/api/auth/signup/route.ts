import { registerUser } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const result = await registerUser(body);

    if (result.error) {
        console.log('Signup error:', result.error); // Add this
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ username: result.username });
}
