import { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardCheck, Handshake } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PartnerApplicationForm from '@/components/become-partner/PartnerApplicationForm';
import styles from './BecomePartner.module.css';

export const metadata: Metadata = {
    title: 'Become a Capital Partner | Partner With Neenv',
    description:
        'Deploy capital into Neenv-originated channel finance. Neenv handles origination, operations, servicing and monitoring within your credit policy — you fund a managed, collateral-free MSME book.',
    keywords: [
        'become a capital partner',
        'co-lending partnership',
        'NBFC partnership',
        'bank lending partnership',
        'channel finance origination',
    ],
    openGraph: {
        title: 'Become a Capital Partner | Partner With Neenv',
        description:
            'Deploy capital into Neenv-originated channel finance. We originate, service and monitor within your credit policy — you fund the book.',
        url: 'https://www.neenvfin.com/become-partner-with-us',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/become-partner-with-us',
    },
};

const steps = [
    {
        title: 'Introductory Call',
        text: 'We walk through the Neenv model, our current book, and the segments you want exposure to.',
    },
    {
        title: 'Diligence & Alignment',
        text: 'You review our origination, credit policy and technology. We align on eligibility, pricing and risk-sharing.',
    },
    {
        title: 'Agreement & Integration',
        text: 'Commercial terms are documented and systems are connected for loan data, disbursal and reporting flows.',
    },
    {
        title: 'Go Live & Scale',
        text: 'First facilities are sanctioned through the platform, then volumes scale as portfolio performance is established.',
    },
];

const audience = [
    { label: 'NBFCs', text: 'Looking to build a granular, self-liquidating MSME book without a dealer-facing field team.' },
    { label: 'Banks & SFBs', text: 'Seeking priority-sector-aligned MSME exposure through an anchor-backed, digitally originated channel.' },
    { label: 'AIFs & Debt Funds', text: 'Evaluating short-tenor, trade-linked credit as an asset class with transparent monitoring.' },
];

export default function BecomePartnerPage() {
    return (
        <>
            <Header />
            <main>
                {/* ----- Hero ----- */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroInner}>
                            <span className={`${styles.badge} badge-animated`}>FOR NBFCs, BANKS &amp; FUNDS</span>

                            <h1 className={styles.heroTitle}>
                                Become a{' '}
                                <span className={styles.accent}>Neenv Capital Partner</span>
                            </h1>

                            <p className={styles.heroText}>
                                Neenv originates, services and monitors every facility on its
                                platform, operating inside your credit policy. You set the rules
                                and bring the balance sheet — we run the origination, operations
                                and monitoring behind a collateral-free, anchor-backed book.
                            </p>

                            <div className={styles.heroActions}>
                                <Link href="/capital-partners" className={styles.btnSecondary}>
                                    See Current Partners
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ----- Who we partner with ----- */}
                <section className={styles.sectionAlt}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Who We Partner With</h2>
                            <p className={styles.sectionSubtitle}>
                                We work with regulated lenders and credit funds that want
                                trade-linked MSME exposure without building the origination layer.
                            </p>
                        </div>

                        <div className={styles.audienceRow}>
                            {audience.map((item) => (
                                <div key={item.label} className={styles.audienceCard}>
                                    <span className={styles.audienceIcon}>
                                        <Handshake size={20} strokeWidth={1.5} />
                                    </span>
                                    <h3 className={styles.audienceLabel}>{item.label}</h3>
                                    <p className={styles.audienceText}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ----- Process ----- */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>How Onboarding Works</h2>
                            <p className={styles.sectionSubtitle}>
                                A structured path from first conversation to first disbursal.
                            </p>
                        </div>

                        <ol className={styles.steps}>
                            {steps.map((step, index) => (
                                <li key={step.title} className={styles.step}>
                                    <span className={styles.stepNumber}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepText}>{step.text}</p>
                                </li>
                            ))}
                        </ol>

                        <p className={styles.processNote}>
                            <ClipboardCheck size={16} strokeWidth={2} />
                            Timelines and commercial terms are agreed case by case. Nothing on this
                            page constitutes an offer or a commitment to lend.
                        </p>
                    </div>
                </section>

                <PartnerApplicationForm />
            </main>
            <Footer />
        </>
    );
}
