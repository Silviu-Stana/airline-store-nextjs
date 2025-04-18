import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function GET() {
    try {
        const db = await getDbConnection(); //now i can call this pool, from anywhere
        const result = await db.request().query('SELECT * FROM Users');

        return NextResponse.json(result.recordset);
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
}
