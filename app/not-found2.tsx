'use client';
import { usePathname } from 'next/navigation';

export default function PageNotFound() {
    const a = usePathname();

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-red-500 text-4xl">404</h1>
            <h2 className="text-2xl font-semibold text-center mb-4">
                {`Panel "${a.substring(1)}" not found!`}
            </h2>
        </div>
    );
}
