import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
);

export async function getUserByEmail(email: string) {
    const { data, error } = await supabase
        .schema('next_auth')
        .from('users')
        .select('id, email, username, password')
        .eq('email', email)
        .single();

    if (error) {
        console.error('getUserByEmail error:', error);
        return null;
    }
    return data;
}
