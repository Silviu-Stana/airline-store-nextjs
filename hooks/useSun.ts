import { useEffect, useRef } from 'react';

export default function useSun() {
    const sunRef = useRef<HTMLImageElement | null>(null);

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

    return sunRef;
}
