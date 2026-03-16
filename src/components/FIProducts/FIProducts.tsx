'use client';

import Link from 'next/link';
import styles from './FIProducts.module.css';

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const products = [
    {
        title: 'Loan Origination System',
        subtitle: 'Streamlined Applications & Flexible Credit Assessment',
        features: [
            'Swift approvals and loan processing',
            'Instant updates on application status',
            'Secure document and data access',
            'Scalable and growth-ready platform',
        ],
        featured: true,
    },
    {
        title: 'Transaction Platform',
        subtitle: 'Efficient Financing with Simplified Connectivity',
        features: [
            'Unified SCF platform',
            'Rapid fund disbursement facilitation for FIs',
            'Standardized data & automated validations',
            'Real-time tracking and audit trail',
        ],
        featured: false,
    },
    {
        title: 'Limit Management System',
        subtitle: 'Cloud-based Limit Management for Lower Capex',
        features: [
            'Invoice-level loan tracking',
            'Automates interest calculations',
            'Monitors credit limits in real-time',
            'Provides actionable insights and analytics',
        ],
        featured: false,
    },
];

const FIProducts = () => {
    return (
        <section className={styles.products}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Neenv offers Financial Institutions the ability to build scalable SCF portfolios and manage the full lifecycle, effortlessly.
                    </h2>
                </div>

                <div className={styles.productsGrid}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`${styles.productCard} ${product.featured ? styles.featured : ''}`}
                        >
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productSubtitle}>{product.subtitle}</p>

                            <ul className={styles.features}>
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className={styles.checkIcon}>
                                            <CheckIcon />
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="mailto:Info@neenvfin.com?subject=FI%20Partnership%20Inquiry"
                                className={styles.ctaButton}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FIProducts;
