'use client';

import styles from './ValueProposition.module.css';

const propositions = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Financial Inclusion at Scale',
        desc: 'Serve the underserved MSME partners of your corporate clients — meeting priority sector and inclusion mandates.',
        color: '#0a714e',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'Maximize Client Potential',
        desc: 'Unlock new revenue streams by financing the distributors, dealers and, suppliers of your existing corporate clients.',
        color: '#1a2d7a',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        title: 'Aligned with Your Policies',
        desc: 'Our credit framework is built to align with your underwriting guidelines. You set the rules — we operate within them.',
        color: '#0a714e',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
            </svg>
        ),
        title: 'AI-Powered Underwriting',
        desc: 'Continuous monitoring and intelligent risk assessment — from onboarding through the life of the loan.',
        color: '#1a2d7a',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
            </svg>
        ),
        title: 'Cost-Optimized Operations',
        desc: 'Leverage fintech agility to reduce origination and servicing costs without compromising on controls.',
        color: '#5d71c4',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1" />
            </svg>
        ),
        title: 'Zero-Tolerance Compliance',
        desc: 'Founded by seasoned bankers, Neenv maintains rigorous regulatory compliance across every transaction.',
        color: '#1a2d7a',
    },
];

const ValueProposition = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>Why Neenv</span>
                    <h2 className={styles.title}>Built by Bankers, for Lenders</h2>
                    <p className={styles.subtitle}>
                        A managed platform that lets you focus on lending while we handle origination, operations, and monitoring.
                    </p>
                </div>
                <div className={styles.grid}>
                    {propositions.map((p) => (
                        <div
                            key={p.title}
                            className={styles.card}
                            style={{ '--card-accent': p.color } as React.CSSProperties}
                        >
                            <div className={styles.iconWrap}>
                                {p.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{p.title}</h3>
                            <p className={styles.cardDesc}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
