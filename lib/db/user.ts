import { supabase } from './supabase';

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
