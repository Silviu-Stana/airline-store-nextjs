'use client';
import {
    BsArrowLeftCircle,
    BsArrowLeftCircleFill,
    BsFillAirplaneFill,
} from 'react-icons/bs';
import { PanelProps } from './panel-props';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { useState, useRef, useEffect } from 'react';

export const HomepagePanel: React.FC<PanelProps> = ({
    goToPanel,
    goToPreviousPanel,
}) => {
    const [hint, setHint] = useState('');
    const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const sunRef = useRef<HTMLImageElement | null>(null);

    const setHintWithDelay = (text: string) => {
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);

        hintTimeoutRef.current = setTimeout(() => {
            setHint(text);
        }, 50);
    };

    const hints = [
        'Reserve a New Flight !',
        'View all your existing reservations!',
        'Need more help?',
        'Leaving us already?🥺\nWe will miss you...',
    ];

    useEffect(() => {
        let animationFrameId: number | null = null;
        let rotation = 0;
        const animationSpeed = 0.05; // Adjust for faster/slower rotation

        const animateSun = () => {
            if (sunRef.current) {
                rotation += animationSpeed;
                sunRef.current.style.transform = `rotate(${rotation}deg)`;
                animationFrameId = requestAnimationFrame(animateSun);
            }
        };

        animateSun();

        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center">
            <img
                ref={sunRef}
                src="/sun.svg"
                alt="Sun Icon"
                className="absolute -z-10 w-40 h-40 -right-26 -top-22"
            />
            <h1 className="text-cyan-500 text-6xl flex flex-row gap-5 justify-center text-center pt-20">
                Vacanța începe aici.
            </h1>
            {hint && (
                <div className="flex flex-col md:flex-row  justify-center gap-2 lg:gap-5 mt-2 md:gap-3 p-5 lg:p-10 md:p-10 sm:p-5">
                    <div
                        className="w-80 md:w-100 lg:w-110 h-auto py-4 bg-white rounded-2xl
                    transition-all
                    shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)]"
                    >
                        <div className="ml-5 font-bold text-[20px] text-cyan-500 whitespace-pre-line  flex justify-center text-center">
                            {hint}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-4">
                <button
                    onMouseOver={() => setHintWithDelay(hints[0])}
                    className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 shadow-md shadow-cyan-300 rounded-2xl font-bold text-lg text-cyan-900
                    hover:text-xl transition-all duration-300
                    hover:bg-cyan-300 mt-5"
                >
                    <span>
                        <FaArrowAltCircleLeft size={20} />
                    </span>
                    Reserve Flight
                </button>
                <button
                    onMouseOver={() => setHintWithDelay(hints[1])}
                    className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 shadow-md rounded-2xl font-bold text-lg text-cyan-900
                    hover:text-xl transition-all duration-300
                    hover:bg-cyan-300 mt-5"
                >
                    <span className="transform rotate-90">
                        <BsFillAirplaneFill size={20} />
                    </span>
                    My Reservations
                </button>
                <button
                    onMouseOver={() => setHintWithDelay(hints[2])}
                    className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 shadow-md rounded-2xl font-bold text-lg text-cyan-900
                    hover:text-xl transition-all duration-300
                    hover:bg-cyan-300 mt-5"
                >
                    <BiSolidHelpCircle size={20} />
                    Help
                </button>
                <button
                    onMouseOver={() => setHintWithDelay(hints[3])}
                    className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 shadow-md rounded-2xl font-bold text-lg text-cyan-900
                    hover:text-xl transition-all duration-300
                    hover:bg-cyan-300 mt-5"
                >
                    <span className="transform rotate-90">
                        <BsFillAirplaneFill size={20} />
                    </span>
                    Logout
                </button>
            </div>
        </div>
    );
};
