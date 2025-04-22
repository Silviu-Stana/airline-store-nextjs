'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface NavigationButtonProps {
    route: string;
    iconPosition: 'left' | 'right';
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    route,
    iconPosition,
    label,
    disabled,
    onClick,
}) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) onClick();
        else router.push(route);
    };

    return (
        <button
            disabled={disabled}
            onMouseEnter={() => router.prefetch(route)}
            onClick={handleClick}
            className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-32 h-14 shadow-md rounded-2xl font-bold text-lg text-cyan-500
                                        cursor-pointer
                                        hover:text-xl transition-all duration-300
                                        hover:bg-cyan-100 mt-5
                                        disabled:bg-gray-100
                                        disabled:border-gray-300
                                        disabled:text-gray-300"
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
