'use client';

import Link from 'next/link';
import styles from './ProductHero.module.css';

interface ProductHeroProps {
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
}

const ProductHero = ({
    title,
    subtitle,
    description,
    ctaText = 'Apply Now',
    ctaHref = '/contact'
}: ProductHeroProps) => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backLink}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Back to Home
                    </Link>

                    <span className={styles.badge}>{subtitle}</span>

                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.description}>{description}</p>

                    <div className={styles.actions}>
                        <Link href={ctaHref} className={styles.btnPrimary}>
                            {ctaText}
                        </Link>
                        {/* <Link href="/contact" className={styles.btnSecondary}>
                            Schedule a Call
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
