'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroVisual from '../HeroVisual/HeroVisual';

const PHRASES = [
    'Unlocking Credit in',
    'Powering Every Dealer in',
    'Removing Barriers from',
    'Fueling Growth Across',
];

const TYPING_SPEED = 60;
const DELETE_SPEED = 35;
const HOLD_DURATION = 2500;

function useTypewriter() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState(PHRASES[0]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mq.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        if (reducedMotion) return;

        // First render: hold the initial phrase, then start deleting
        if (!hasStarted) {
            const holdTimer = setTimeout(() => {
                setHasStarted(true);
                setIsDeleting(true);
            }, HOLD_DURATION);
            return () => clearTimeout(holdTimer);
        }

        const currentPhrase = PHRASES[phraseIndex];

        if (isDeleting) {
            setShowCursor(false);
            if (displayText.length === 0) {
                // Move to next phrase, start typing
                const nextIndex = (phraseIndex + 1) % PHRASES.length;
                setPhraseIndex(nextIndex);
                setIsDeleting(false);
                setShowCursor(true);
                return;
            }
            const timer = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
            }, DELETE_SPEED);
            return () => clearTimeout(timer);
        } else {
            // Typing
            if (displayText.length === currentPhrase.length) {
                // Fully typed — hold then delete
                const holdTimer = setTimeout(() => {
                    setIsDeleting(true);
                }, HOLD_DURATION);
                return () => clearTimeout(holdTimer);
            }
            const timer = setTimeout(() => {
                setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            }, TYPING_SPEED);
            return () => clearTimeout(timer);
        }
    }, [displayText, isDeleting, phraseIndex, hasStarted, reducedMotion]);

    return { displayText, showCursor: showCursor && !reducedMotion };
}

const partnerLogos = [
    { src: '/images/logos/standard-chartered.png', alt: 'Standard Chartered', width: 140 },
    { src: '/images/logos/icici.png', alt: 'ICICI Bank', width: 100 },
    { src: '/images/logos/idfc.png', alt: 'IDFC First Bank', width: 100 },
    { src: '/images/logos/kotak.png', alt: 'Kotak Mahindra Bank', width: 100 },
];

/* Multicolor SVG Icons using theme colors */
const DealerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="4" rx="1.5" fill="#1a2d7a"/>
        <rect x="4" y="12" width="16" height="4" rx="1.5" fill="#5d71c4" opacity="0.8"/>
        <rect x="6" y="18" width="12" height="3" rx="1.5" fill="#f59e0b" opacity="0.6"/>
        <circle cx="18" cy="4" r="3" fill="#0a714e"/>
    </svg>
);

const SupplierIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#1a2d7a" opacity="0.15"/>
        <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#5d71c4"/>
        <path d="M3 7v10l9 5V12L3 7z" fill="#1a2d7a"/>
        <path d="M21 7v10l-9 5V12l9-5z" fill="#0a714e" opacity="0.7"/>
        <circle cx="12" cy="12" r="2.5" fill="#f59e0b"/>
    </svg>
);

const CapitalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="10" width="18" height="12" rx="2" fill="#1a2d7a" opacity="0.12"/>
        <rect x="3" y="10" width="18" height="12" rx="2" stroke="#1a2d7a" strokeWidth="1.5" fill="none"/>
        <path d="M3 14h18" stroke="#5d71c4" strokeWidth="1.5"/>
        <circle cx="12" cy="18" r="2" fill="#0a714e"/>
        <path d="M7 10V6a5 5 0 0 1 10 0v4" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
);

const InvoiceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="2" width="12" height="16" rx="2" fill="#1a2d7a" opacity="0.12"/>
        <rect x="4" y="2" width="12" height="16" rx="2" stroke="#1a2d7a" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="4" width="14" height="16" rx="2" fill="#5d71c4" opacity="0.12"/>
        <rect x="8" y="4" width="14" height="16" rx="2" stroke="#5d71c4" strokeWidth="1.5" fill="none"/>
        <line x1="11" y1="9" x2="19" y2="9" stroke="#0a714e" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="13" x2="17" y2="13" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="17" x2="15" y2="17" stroke="#1a2d7a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
);

const Hero = () => {
    const { displayText, showCursor } = useTypewriter();

    return (
        <section className={styles.hero}>
            {/* Indian Flag Gradient — subtle rightside accent */}
            <div className={styles.flagAccent} aria-hidden="true" />

            <div className={`container ${styles.heroInner}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        AI Native Supply Chain Platform
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.typewriterLine}>
                            {displayText}
                            {showCursor && <span className={styles.cursor} aria-hidden="true" />}
                        </span>
                        India&apos;s
                        <span className={styles.highlight}> Supply Chain</span>
                    </h1>

                    <p className={styles.description}>
                    Financially empowering under-served MICRO & SMALL business partners of Indian Corporates.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
                        <Link href="#solutions" className="btn btn-secondary btn-lg">
                            Explore Products
                        </Link>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metric}>
                            <span className={styles.metricValue}>72 Hr</span>
                            <span className={styles.metricLabel}>Disbursal</span>
                        </div>
                        <div className={styles.metricDivider}></div>
                        <div className={styles.metric}>
                            <span className={styles.metricValue}>Upto ₹ 2Cr</span>
                            <span className={styles.metricLabel}>Per Partner</span>
                        </div>
                        <div className={styles.metricDivider}></div>
                        <div className={styles.metric}>
                            <span className={styles.metricValue}>Zero</span>
                            <span className={styles.metricLabel}>Collateral</span>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <HeroVisual />
                </div>
            </div>

            {/* Logo Bar */}
            {/* <div className={styles.logoBar}>
                <div className={`container ${styles.logoBarInner}`}>
                    <span className={styles.logoBarLabel}>Leadership alumni from</span>
                    <div className={styles.logoBarLogos}>
                        {partnerLogos.map((logo) => (
                            <Image
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={36}
                                className={styles.partnerLogo}
                            />
                        ))}
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
