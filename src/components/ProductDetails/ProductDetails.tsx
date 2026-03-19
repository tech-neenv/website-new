'use client';

import { ReactNode } from 'react';
import styles from './ProductDetails.module.css';

interface Step {
    title: string;
    description: string;
    icon: ReactNode;
}

interface BenefitItem {
    headline: string;
    description: string;
}

interface BenefitCard {
    title: string;
    items: BenefitItem[];
}

interface ProductDetailsProps {
    howItWorks: {
        sectionTitle: string;
        steps: Step[];
    };
    benefits: {
        left: BenefitCard;
        right?: BenefitCard;
    };
}

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a714e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ProductDetails = ({ howItWorks, benefits }: ProductDetailsProps) => {
    return (
        <>
            {/* Section A — Horizontal How It Works */}
            <section className={styles.howItWorks}>
                <div className="container">
                    <div className={styles.header}>
                        <span className={styles.badge}>HOW IT WORKS</span>
                        <h2 className={styles.title}>{howItWorks.sectionTitle}</h2>
                    </div>

                    <div className={styles.timeline}>
                        <div className={styles.timelineLine} />
                        {howItWorks.steps.map((step, index) => (
                            <div
                                key={index}
                                className={styles.step}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className={styles.stepNode}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepIcon}>{step.icon}</div>
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section B — Dual Benefits Cards */}
            <section className={styles.benefitsSection}>
                <div className="container">
                    <div className={`${styles.benefitsGrid} ${!benefits.right ? styles.benefitsGridSingle : ''}`}>
                        {/* Left Card */}
                        <div className={`${styles.benefitCard} ${styles.benefitCardLeft}`}>
                            <h3 className={styles.benefitCardTitle}>{benefits.left.title}</h3>
                            <div className={styles.benefitItems}>
                                {benefits.left.items.map((item, index) => (
                                    <div key={index} className={styles.benefitItem}>
                                        <div className={styles.benefitCheckIcon}>
                                            <CheckIcon />
                                        </div>
                                        <div className={styles.benefitItemContent}>
                                            <h4 className={styles.benefitHeadline}>{item.headline}</h4>
                                            <p className={styles.benefitDescription}>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Card */}
                        {benefits.right && (
                            <div className={`${styles.benefitCard} ${styles.benefitCardRight}`}>
                                <h3 className={styles.benefitCardTitle}>{benefits.right.title}</h3>
                                <div className={styles.benefitItems}>
                                    {benefits.right.items.map((item, index) => (
                                        <div key={index} className={styles.benefitItem}>
                                            <div className={styles.benefitCheckIcon}>
                                                <CheckIcon />
                                            </div>
                                            <div className={styles.benefitItemContent}>
                                                <h4 className={styles.benefitHeadline}>{item.headline}</h4>
                                                <p className={styles.benefitDescription}>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
