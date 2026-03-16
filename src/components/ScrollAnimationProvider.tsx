'use client';

import { useEffect } from 'react';

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Add scroll reveal animation to all elements with reveal classes
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        });

        // Observe all elements with reveal classes
        const revealElements = document.querySelectorAll(
            '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'
        );

        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return <>{children}</>;
}
