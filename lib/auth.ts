import { supabase } from './supabase';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, 'Password must be at least 5 characters'),
    username: z.string().min(1, 'Name is required'),
});

export async function registerUser(input: {
    email: string;
    password: string;
    username: string;
}) {
    const parsed = signUpSchema.safeParse(input);
    if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };

    const { email, password, username } = parsed.data;

    const { data: existingUser } = await supabase
        .schema('next_auth')
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

    if (existingUser) {
        return { error: { email: ['Email is already registered.'] } };
    }

    const hashed = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
        .schema('next_auth')
        .from('users')
        .insert({
            email,
            username,
            password: hashed,
        })
        .select()
        .single();

    if (error) {
        console.error('Insert error:', error);
        return { error: { general: ['Something went wrong.'] } };
    }

    return { username: data };
}
