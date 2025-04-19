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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${geistSans.variable} antialiased
                           max-w-sm md:max-w-md lg:max-w-xl mx-auto mt-15 p-6 rounded-4xl shadow-xl bg-white`}
            >
                <SessionWrapper>{children}</SessionWrapper>
            </body>
        </html>
    );
}
