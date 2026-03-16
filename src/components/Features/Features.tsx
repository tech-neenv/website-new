'use client';

import styles from './Features.module.css';

const features = [
    {
        icon: '⚡',
        title: 'Fast Approvals & Disbursals',
        description: 'Get credit approval within 24 hours with minimal documentation. Quick disbursals ensure your business never stops.',
    },
    {
        icon: '💻',
        title: 'End-to-End Digital Process',
        description: 'Completely paperless journey from application to disbursal. Digital onboarding with eKYC and automated verification.',
    },
    {
        icon: '💎',
        title: 'Transparent Pricing',
        description: 'No hidden charges. Clear and upfront pricing with competitive interest rates. Pay only for what you use.',
    },
    {
        icon: '🔗',
        title: 'Seamless ERP Integration',
        description: 'Quick and error-free integration with your existing ERP systems. Real-time invoice validation and processing.',
    },
    {
        icon: '📊',
        title: 'Real-Time Dashboards & Analytics',
        description: 'Track limits, invoices, payments, and disbursals in real-time. Get complete visibility into your financing operations.',
    },
    {
        icon: '🔒',
        title: 'Secure & Compliant',
        description: 'Robust data protection with bank-grade security. Fully compliant with financial regulatory guidelines and data protection standards.',
    },
];

const Features = () => {
    return (
        <section className={`${styles.features} snap-section`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Why Choose Us</span>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
