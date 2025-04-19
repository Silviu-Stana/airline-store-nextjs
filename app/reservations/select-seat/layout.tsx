import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import SessionWrapper from '@/components/SessionWrapper';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        template: '%s / Airline',
        default: 'Silviu Airline - Login',
    },
    description: 'High quality, reliable Airline!',
};

export default function SeatsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-cyan-50">
            <body
                className={`${geistSans.variable} antialiased
                         sm:max-w-xl sm:mx-auto -mx-5 py-10 mt-0 sm:mt-20 rounded-4xl shadow-xl bg-white`}
            >
                <SessionWrapper>{children}</SessionWrapper>
            </body>
        </html>
    );
}
