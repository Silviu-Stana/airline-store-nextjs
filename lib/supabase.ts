import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

export const supabase = createClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
);

export async function getUserByEmail(email: string) {
    const { data, error } = await supabase
        .from('users')
        .select('id, email, name, hashed_password')
        .eq('email', email)
        .single();

    if (error) {
        console.error('getUserByEmail error:', error);
        return null;
    }
    return data;
}

const register = ({ plainPassword }) => {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await supabase.from('users').insert({
        email,
        name,
        hashed_password: hashedPassword,
    });
};

// should i put all my functions here?
