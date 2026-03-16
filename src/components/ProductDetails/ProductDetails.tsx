'use client';

import styles from './ProductDetails.module.css';

interface Step {
    title: string;
    description: string;
}

interface Benefit {
    title: string;
    description: string;
}

interface ProductDetailsProps {
    steps: Step[];
    benefits: Benefit[];
}

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const fiBenefits = [
    'Cloud-based digital infrastructure for seamless operations',
    'End-to-end solution from loan origination to risk management',
    'Streamlined corporate onboarding and network services',
    'Quick and efficient integration with corporate partners',
];

const ProductDetails = ({ steps, benefits }: ProductDetailsProps) => {
    return (
        <section className={styles.details}>
            <div className="container">
                <div className={styles.grid}>
                    {/* How It Works */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>How It Works</h2>
                        <div className={styles.steps}>
                            {steps.map((step, index) => (
                                <div key={index} className={styles.step}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepContent}>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDescription}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Key Benefits</h2>
                        <div className={styles.benefits}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefit}>
                                    <div className={styles.benefitIcon}>
                                        <CheckIcon />
                                    </div>
                                    <div className={styles.benefitContent}>
                                        <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                        <p className={styles.benefitDescription}>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* For Financial Institutions */}
                <div className={styles.fiSection}>
                    <div className={styles.fiCard}>
                        <h2 className={styles.fiTitle}>For Financial Institutions</h2>
                        <p className={styles.fiSubtitle}>Discover our comprehensive Supply Chain Finance suite</p>
                        <div className={styles.fiBenefits}>
                            {fiBenefits.map((benefit, index) => (
                                <div key={index} className={styles.fiBenefit}>
                                    <div className={styles.fiCheckIcon}>
                                        <CheckIcon />
                                    </div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
