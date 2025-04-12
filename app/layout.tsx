import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-cyan-50">
            <body className={`${geistSans.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
