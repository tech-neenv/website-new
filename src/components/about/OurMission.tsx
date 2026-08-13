import { Cpu, ShieldCheck, Zap, Network } from 'lucide-react';
import styles from './OurMission.module.css';

const values = [
    {
        title: 'AI-Native Underwriting',
        description:
            'Credit decisions driven by supply chain data and transaction behaviour, not by property collateral.',
        icon: <Cpu size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Collateral Free',
        description:
            'Micro and small partners access working capital on the strength of their trade relationships alone.',
        icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Digital First',
        description:
            'Onboarding, sanction and disbursal run end to end on the platform — with funds moving in 72 hours.',
        icon: <Zap size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Built for Brand Ecosystems',
        description:
            'One platform connecting brands, distributors, dealers and suppliers to the financial institutions funding them.',
        icon: <Network size={22} strokeWidth={1.5} />,
    },
];

const OurMission = () => {
    return (
        <section className={styles.mission}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>OUR MISSION</span>
                    <h2 className={styles.title}>
                        Credit Should Follow the Trade, Not the Title Deed
                    </h2>
                    <p className={styles.intro}>
                        India&apos;s brand-led supply chains run on millions of micro and small
                        businesses that move goods every day — yet remain under-served by
                        traditional lending because they lack the collateral a bank expects. Neenv
                        exists to close that gap: we combine channel data, AI underwriting and NBFC
                        capital so a dealer&apos;s credit line reflects the business they actually
                        do.
                    </p>
                </div>

                <div className={styles.grid}>
                    {values.map((value) => (
                        <div key={value.title} className={styles.card}>
                            <div className={styles.icon}>{value.icon}</div>
                            <h3 className={styles.cardTitle}>{value.title}</h3>
                            <p className={styles.cardDescription}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurMission;
