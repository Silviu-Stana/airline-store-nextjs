'use client';
import { useRouter } from 'next/navigation';

const NotImplementedPanel = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center">
            <img src="/404.svg" alt="airplane" className="inline h-40 w-40" />
            <h1 className="font-bold text-teal-500 text-4xl">404</h1>
            <h2 className="text-2xl font-semibold text-center mb-4">
                This panel is not yet implemented!
            </h2>
            <button
                className="flex items-center justify-center gap-4 border-teal-400 border-2 w-32 h-14 shadow-md rounded-2xl font-bold text-lg text-teal-500 hover:bg-teal-100"
                onClick={() => router.push('/')}
            >
                Try Again
            </button>
        </div>
    );
};

export default NotImplementedPanel;
