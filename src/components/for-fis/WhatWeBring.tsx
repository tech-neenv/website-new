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
        label: 'SCF Products',
        desc: 'Channel Financing, Supplier Financing, Invoice Factoring, and Working Capital Loans.',
        accent: '#1a2d7a',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
                <path d="M12 10v4M8 16h8M7 20h10" />
            </svg>
        ),
        label: 'Intelligent Risk Engine',
        desc: 'AI-based underwriting with bureau, GST, and bank statement analytics.',
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
