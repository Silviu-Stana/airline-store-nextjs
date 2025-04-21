import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import SessionWrapper from '@/components/SessionWrapper';
import { ReservationProvider } from '@/contexts/ReservationContext';

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
        <div
            className={`${geistSans.variable} antialiased
                           sm:max-w-xl -mx-30 sm:-mx-20 md:-mx-16 lg:mx-auto rounded-4xl shadow-none`}
        >
            <SessionWrapper>
                <ReservationProvider>{children}</ReservationProvider>
            </SessionWrapper>
        </div>
    );
}
