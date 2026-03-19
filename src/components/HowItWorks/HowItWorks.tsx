'use client';

import Link from 'next/link';
import { BarChart3, ScanLine, Sparkles, FileSignature, Banknote } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
    {
        number: 1,
        icon: <BarChart3 size={20} strokeWidth={2} />,
        title: 'ERP-Led Pre-Qual',
        time: 'Data-Driven',
        description: 'ERP transaction data evaluates borrowers on real time basis.',
    },
    {
        number: 2,
        icon: <ScanLine size={20} strokeWidth={2} />,
        title: 'Paperless Onboarding',
        time: '100% Digital',
        description: 'Aadhaar + PAN + GST verification. Minimal Documentation.',
    },
    {
        number: 3,
        icon: <Sparkles size={20} strokeWidth={2} />,
        title: 'AI Credit Decisioning',
        time: 'Rule Based ML',
        description: 'Brand data, bureau scores, and cash flow patterns — all in one model.',
    },
    {
        number: 4,
        icon: <FileSignature size={20} strokeWidth={2} />,
        title: 'e-Sign & Compliance',
        time: 'Faster Execution',
        description: 'Aadhaar-based e-sign. Fully digital, fully compliant.',
    },
    {
        number: 5,
        icon: <Banknote size={20} strokeWidth={2} />,
        title: 'Operational Excellence',
        time: 'Superior Experience',
        description: 'Real time disbursements. Seamless reconcilliation.',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className={styles.howItWorks}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>HOW IT WORKS</span>
                    <h2 className={styles.title}>Smart Process. Seamless Experience.</h2>
                    <p className={styles.subtitle}>
                        Five steps from pre-qualification to disbursal. Fully digital, AI-native, and built for scale.
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={styles.step}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className={styles.stepNode}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepIcon}>{step.icon}</div>
                            </div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <span className={styles.stepTime}>{step.time}</span>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Start Application
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
