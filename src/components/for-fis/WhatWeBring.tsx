'use client';

import styles from './WhatWeBring.module.css';

const items = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        number: '4',
        label: 'Product Suite',
        desc: 'Channel Financing, Supplier Financing, Invoice Factoring, and Working Capital Loans.',
        accent: '#1a2d7a',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
            </svg>
        ),
        label: 'Intelligent Risk Engine',
        desc: 'AI-based underwriting through bureaus, GST, bank statement analytics and other surrogates.',
        accent: '#0a714e',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        label: 'Seamless Integration',
        desc: 'Plug into your existing systems with minimal friction.',
        accent: '#5d71c4',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        label: 'Managed Operations',
        desc: 'End-to-end operational support so your team can focus on growth.',
        accent: '#1a2d7a',
    },
];

const WhatWeBring = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>Our Offerings</span>
                    <h2 className={styles.title}>What We Bring to the Table</h2>
                </div>
                <div className={styles.grid}>
                    {items.map((item) => (
                        <div
                            key={item.label}
                            className={styles.item}
                            style={{ '--item-accent': item.accent } as React.CSSProperties}
                        >
                            <div className={styles.marker}>
                                {item.number ? (
                                    <span className={styles.markerNumber}>{item.number}</span>
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <div className={styles.itemContent}>
                                <h3 className={styles.itemLabel}>{item.label}</h3>
                                <p className={styles.itemDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeBring;
