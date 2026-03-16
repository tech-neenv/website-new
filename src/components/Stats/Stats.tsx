'use client';

import { Timer, BadgeIndianRupee, Fingerprint, Award } from 'lucide-react';
import styles from './Stats.module.css';

interface StatItemProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    description: string;
    delay?: number;
}

const StatItem = ({ icon, value, label, description, delay = 0 }: StatItemProps) => {
    return (
        <div
            className={styles.statCard}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={styles.statIcon}>{icon}</div>
            <div className={styles.statContent}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
                <div className={styles.statDescription}>{description}</div>
            </div>
        </div>
    );
};

const stats = [
    {
        icon: <Timer size={24} strokeWidth={1.5} />,
        value: '< 72 Hours',
        label: 'First Disbursal',
        description: 'From application to funds hitting the account',
    },
    {
        icon: <BadgeIndianRupee size={24} strokeWidth={1.5} />,
        value: 'Up to ₹3 Cr',
        label: 'Per Channel Partner',
        description: 'Collateral-free limits based on OEM strength',
    },
    {
        icon: <Fingerprint size={24} strokeWidth={1.5} />,
        value: '100% Digital',
        label: 'End-to-End Process',
        description: 'Aadhaar KYC to repayment — zero paperwork',
    },
    {
        icon: <Award size={24} strokeWidth={1.5} />,
        value: 'AI Native Platform',
        label: 'Multi Agent Ecosystem',
        description: 'Predictive Limit Allocations and Risk Mitigations',
    },
];

const Stats = () => {
    return (
        <section id="about" className={styles.stats}>
            <div className={`container ${styles.statsContainer}`}>
                <div className={styles.header}>
                    <span className={styles.badge}>WHY NEENV</span>
                    <h2 className={styles.title}>Infrastructure-Grade Channel Finance</h2>
                    <p className={styles.subtitle}>
                        Purpose-built for OEM-led ecosystems. Not a generic lending platform with a supply chain label.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                            description={stat.description}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
