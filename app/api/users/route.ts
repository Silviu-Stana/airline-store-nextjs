import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function GET() {
    try {
        const db = await getDbConnection(); //acum pot apela acest pool, de oriunde din aplicatie, si primesc o referinta la aceeasi instanta
        const result = await db.request().query('SELECT * FROM Users');
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
}
