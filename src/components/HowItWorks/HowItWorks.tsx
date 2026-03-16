'use client';

import Link from 'next/link';
import { BarChart3, ScanLine, BrainCircuit, FileSignature, Banknote } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
    {
        number: 1,
        icon: <BarChart3 size={20} strokeWidth={2} />,
        title: 'ERP Led Approvals',
        time: 'Instant',
        description: 'Real-time transaction insights power pre-qualified offers before you even apply.',
    },
    {
        number: 2,
        icon: <ScanLine size={20} strokeWidth={2} />,
        title: 'Digital Onboarding',
        time: '10 min',
        description: 'Aadhaar + PAN verification. No branch visits, no paperwork.',
    },
    {
        number: 3,
        icon: <BrainCircuit size={20} strokeWidth={2} />,
        title: 'AI Credit Decisioning',
        time: '< 24 hours',
        description: 'Intelligent credit decisioning powered by OEM data and bureau signals.',
    },
    {
        number: 4,
        icon: <FileSignature size={20} strokeWidth={2} />,
        title: 'Agreement Signing',
        time: 'Minutes',
        description: 'Paperless e-sign with Aadhaar-based authentication. Fully digital, fully compliant.',
    },
    {
        number: 5,
        icon: <Banknote size={20} strokeWidth={2} />,
        title: 'Funds Disbursal',
        time: 'Same day',
        description: 'Direct bank transfer. No intermediaries, no holdbacks.',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className={styles.howItWorks}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>THE PROCESS</span>
                    <h2 className={styles.title}>Application to Funds. 72 Hours.</h2>
                    <p className={styles.subtitle}>
                        Five steps. One platform. Built for operators who can&apos;t afford to wait.
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
