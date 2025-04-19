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
        default: 'Reserve a Seat',
    },
    description: 'High quality, reliable Airline!',
};

export default function SeatsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={
                'sm:max-w-xl -mx-25 sm:-mx-20 md:-mx-16 lg:mx-auto rounded-4xl '
            }
        >
            <SessionWrapper>{children}</SessionWrapper>
        </div>
    );
}
