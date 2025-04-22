// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@/lib/db/user';

export const authOptions = {
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
        strategy: 'jwt' as 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        //Include user ID in the session:
        async session({ session, token }: { session: any; token: any }) {
            if (token?.id) session.user.id = token.id;
            return session;
        },
        async jwt({ token, user }: { token: any; user?: { id: string } }) {
            if (user) token.id = user.id;
            return token;
        },
    },
};

// Pass options to NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
