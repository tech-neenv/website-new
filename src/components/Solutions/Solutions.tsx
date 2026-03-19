'use client';

import { Check, ArrowRight } from 'lucide-react';
import styles from './Solutions.module.css';

/* Multicolor SVG Icons — matches Hero section */
const ChannelIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="4" rx="1.5" fill="#ffffff"/>
        <rect x="4" y="12" width="16" height="4" rx="1.5" fill="#ffffff" opacity="0.8"/>
        <rect x="6" y="18" width="12" height="3" rx="1.5" fill="#ffffff" opacity="0.6"/>
        <circle cx="18" cy="4" r="3" fill="#ffffff" opacity="0.9"/>
    </svg>
);

const CapitalIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="10" width="18" height="12" rx="2" fill="#ffffff" opacity="0.2"/>
        <rect x="3" y="10" width="18" height="12" rx="2" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
        <path d="M3 14h18" stroke="#ffffff" strokeWidth="1.5" opacity="0.8"/>
        <circle cx="12" cy="18" r="2" fill="#ffffff"/>
        <path d="M7 10V6a5 5 0 0 1 10 0v4" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
    </svg>
);

const InvoiceIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="2" width="12" height="16" rx="2" fill="#ffffff" opacity="0.2"/>
        <rect x="4" y="2" width="12" height="16" rx="2" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="4" width="14" height="16" rx="2" fill="#ffffff" opacity="0.15"/>
        <rect x="8" y="4" width="14" height="16" rx="2" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
        <line x1="11" y1="9" x2="19" y2="9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="13" x2="17" y2="13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="11" y1="17" x2="15" y2="17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
);

const SupplierIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#ffffff" opacity="0.15"/>
        <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#ffffff" opacity="0.9"/>
        <path d="M3 7v10l9 5V12L3 7z" fill="#ffffff" opacity="0.7"/>
        <path d="M21 7v10l-9 5V12l9-5z" fill="#ffffff" opacity="0.5"/>
        <circle cx="12" cy="12" r="2.5" fill="#ffffff"/>
    </svg>
);

const products = [
    {
        icon: <ChannelIcon />,
        title: 'Channel Financing',
        tagline: 'Brand led and data powered Credit Facilities for your dealer network.',
        highlight: 'Data Driven',
        highlightLabel: 'customised solutions',
        benefits: [
            'Credit Facility Setup',
            'Purchase Goods & Brand Gets Paid',
            'Dealer Repays on Terms',
        ],
        color: 'primary',
        link: '/products/channel-financing',
    },
    {
        icon: <CapitalIcon />,
        title: 'Working Capital Loan',
        tagline: 'Short-term capital for channel partners. No collateral. No delays.',
        highlight: 'Financial Flexibility',
        highlightLabel: 'up to 12 months',
        benefits: [
            'Eligibility Check & Sanction',
            'Capital Deployed for Business',
            'Structured EMI Repayment',
        ],
        color: 'secondary',
        link: '/products/working-capital-loan',
    },
    {
        icon: <InvoiceIcon />,
        title: 'Factoring',
        tagline: 'Convert receivables to cash. Don\u2019t wait for buyer payment cycles.',
        highlight: 'Liquidity Management',
        highlightLabel: 'improved cashflow',
        benefits: [
            'Invoice Raised & Verified',
            'Funds Disbursed same day',
            'Buyer pays on or before Due Date',
        ],
        color: 'gold',
        link: '/products/invoice-factoring',
    },
    {
        icon: <SupplierIcon />,
        title: 'Supplier Financing',
        tagline: 'Early payments to vendors. Build vendor loyalty.',
        highlight: 'Competitive Rates',
        highlightLabel: 'price discovery',
        benefits: [
            'Invoice Submitted & Approved',
            'Supplier Gets Paid Immediately',
            'Brand Pays on Due Date',
        ],
        color: 'accent',
        link: '/products/supplier-financing',
    },
];

const Solutions = () => {
    return (
        <section id="solutions" className={styles.solutions}>
            <div className={styles.solutionsContainer}>
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>SUPPLY CHAIN PRODUCT SUITE</span>
                    <h2 className={styles.title}>Four Products. One Platform. Zero Collateral.</h2>
                    <p className={styles.subtitle}>
                        Each product is designed for a specific node in the supply chain. Together, they unlock liquidity across the entire Brand ecosystem.
                    </p>
                </div>

                <div className={styles.productsGrid}>
                    {products.map((product, index) => (
                        <a
                            key={index}
                            href={product.link}
                            className={`${styles.productCard} ${styles[product.color]}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={styles.cardAccent}></div>
                            <div className={styles.productIcon}>{product.icon}</div>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productTagline}>{product.tagline}</p>

                            <div className={styles.highlight}>
                                <span className={styles.highlightValue}>{product.highlight}</span>
                                <span className={styles.highlightLabel}>{product.highlightLabel}</span>
                            </div>

                            <ul className={styles.benefits}>
                                {product.benefits.map((benefit, idx) => (
                                    <li key={idx}>
                                        <span className={styles.checkIcon}><Check size={12} strokeWidth={2.5} /></span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <span className={styles.learnMore}>
                                Learn More <ArrowRight size={16} strokeWidth={2} />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
