import Link from 'next/link';
import styles from './CTA.module.css';

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const trustBadges = [
    'AI-Native Platform',
    'Collateral-Free',
    '72 Hr Disbursal',
    '100% Digital',
];

const CTA = () => {
    return (
        <section id="demo" className={styles.cta}>
            <div className="container">
                <div className={styles.ctaInner}>
                    <div className={`${styles.ctaGlow} ${styles.ctaGlow1}`}></div>
                    <div className={`${styles.ctaGlow} ${styles.ctaGlow2}`}></div>

                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Capital Should Move as Fast as Commerce
                        </h2>
                        <p className={styles.ctaSubtitle}>
                            Your supply chain doesn&apos;t wait. Your financing shouldn&apos;t either. Get funded in 48 hours.
                        </p>

                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.btnPrimary}>
                                Get Started
                            </Link>
                            {/* <Link href="/contact" className={styles.btnSecondary}>
                                Talk to Our Team
                            </Link> */}
                        </div>

                        <div className={styles.trustBadges}>
                            {trustBadges.map((badge) => (
                                <span key={badge} className={styles.badge}>
                                    <CheckIcon />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
