'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface NavigationButtonProps {
    route: string;
    iconPosition: 'left' | 'right';
    label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    route,
    iconPosition,
    label,
}) => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(route)}
            className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-32 h-14 shadow-md rounded-2xl font-bold text-lg text-cyan-500
                                        hover:text-xl transition-all duration-300
                                        hover:bg-cyan-100 mt-5"
        >
            {iconPosition === 'left' && (
                <span className="transform">
                    <FaArrowLeft size={20} />
                </span>
            )}
            {label}
            {iconPosition === 'right' && (
                <span className="transform">
                    <FaArrowRight size={20} />
                </span>
            )}
        </button>
    );
};

export default NavigationButton;
