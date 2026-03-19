'use client';

import Link from 'next/link';
import FiIllustration from './FiIllustration';
import styles from './FiHero.module.css';

const FiHero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>For Banks &amp; NBFCs</span>

                        <h1 className={styles.title}>
                            Your Gateway to India&apos;s{' '}
                            <span className={styles.accent}>MSME Ecosystem</span>
                        </h1>

                        <p className={styles.description}>
                            Neenv connects financial institutions with creditworthy MSMEs across
                            brand-led supply chains — through a fully managed channel finance
                            platform. You lend. We handle the rest.
                        </p>

                        <div className={styles.actions}>
                            <Link href="/contact" className={styles.btnPrimary}>
                                Contact Us
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <FiIllustration />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FiHero;
