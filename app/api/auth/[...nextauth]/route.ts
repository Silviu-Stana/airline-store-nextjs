import NextAuth from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@/lib/supabase';

const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await getUserByEmail(credentials.email);
                if (!user || !user.password) return null;

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                if (!isValid) return null;

                return {
                    id: user.id,
                    email: user.email,
                };
            },
        }),
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? '',
    }),
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
    },
});

export { handler as GET, handler as POST };
