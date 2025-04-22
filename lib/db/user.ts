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

export async function verifyAdmin(userId: string) {
    const { data, error } = await supabase
        .schema('next_auth')
        .from('users')
        .select('id, is_admin')
        .eq('is_admin', true)
        .eq('id', userId);

    if (error) throw new Error('Could not check admin status');

    console.log(data);
    if (data?.length > 0) return true;
    return false;
}
