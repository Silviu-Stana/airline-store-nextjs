import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const generateMetadata = (): Metadata => {
    return {
        title: {
            default: `Silviu Airline`,
            template: `Silviu Airline`,
        },
        description: 'High quality, reliable Airline!',
    };
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-cyan-50">
            <body
                className={`${geistSans.variable} antialiased
                           max-w-sm md:max-w-md lg:max-w-xl mx-auto mt-20 p-6 rounded-4xl shadow-xl bg-white`}
            >
                <SessionWrapper>{children}</SessionWrapper>
            </body>
        </html>
    );
}
