import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Baloo_2 } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';

const baloo = Baloo_2({
    subsets: ['latin'],
    weight: ['400', '700'], // add any weights you use
    display: 'swap',
});

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
                           max-w-sm md:max-w-md lg:max-w-xl mx-auto mt-15 p-6 rounded-4xl shadow-xl bg-white`}
            >
                <SessionWrapper>{children}</SessionWrapper>
            </body>
        </html>
    );
}
