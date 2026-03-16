'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './FIHero.module.css';

const FIHero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>For FIs and Banks</span>
                        <h1 className={styles.title}>
                            Comprehensive Digital SCF Infrastructure for Financial Institutions
                        </h1>
                        <p className={styles.description}>
                            Efficient, Scalable, and Primed for Success
                        </p>
                        <div className={styles.actions}>
                            <Link href="/contact" className={styles.btnPrimary}>
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <Image
                            src="/images/illustrations/hero-fi.png"
                            alt="SCF Lifecycle - Originate, Assess, Verify, Transact, Manage, Monitor, De-risk"
                            width={450}
                            height={450}
                            className={styles.heroImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FIHero;
