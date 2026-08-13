import styles from './AboutHero.module.css';

const stats = [
    { value: '72 Hr', label: 'DISBURSAL' },
    { value: 'Upto ₹2Cr', label: 'PER PARTNER' },
    { value: 'Zero', label: 'COLLATERAL' },
];

const AboutHero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <span className={`${styles.badge} badge-animated`}>ABOUT NEENV</span>

                    <h1 className={styles.title}>
                        Building the Credit Rails for{' '}
                        <span className={styles.accent}>India&apos;s Supply Chains</span>
                    </h1>

                    <p className={styles.description}>
                        Neenv is an AI-native supply chain finance platform, financially empowering
                        under-served micro and small business partners across India&apos;s brand-led
                        ecosystem. Digital first. Collateral free.
                    </p>

                    <div className={styles.stats}>
                        {stats.map((stat) => (
                            <div key={stat.label} className={styles.stat}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
