'use client';

import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    start?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
}

export function useCountUp({
    end,
    duration = 2000,
    start = 0,
    decimals = 0,
    suffix = '',
    prefix = '',
}: UseCountUpOptions) {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = performance.now();
        const range = end - start;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const currentValue = start + range * easeOutQuart;
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, start, end, duration]);

    const formattedValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

    return { ref, formattedValue, count };
}
