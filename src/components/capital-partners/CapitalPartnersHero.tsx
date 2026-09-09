import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { partnerCount } from '@/data/partners';
import styles from './CapitalPartnersHero.module.css';

/* Every figure here is derived from real site data — the partner count comes
   straight from the partner list, so it can never overstate the network. */
const stats = [
    {
        value: String(partnerCount),
        label: partnerCount === 1 ? 'Capital Partner' : 'Capital Partners',
    },
    { value: '4', label: 'Financing Products' },
    { value: 'Zero', label: 'Collateral Required' },
];

const CapitalPartnersHero = () => (
    <section className={styles.hero}>
        <div className="container">
            <div className={styles.inner}>
                <span className={`${styles.badge} badge-animated`}>OUR CAPITAL NETWORK</span>

                {/* Deliberately count-free — the network is actively onboarding NBFCs and
                    banks, so the headline must stay true at every size. The live count
                    lives in the stat strip below, where it updates on its own. */}
                <h1 className={styles.title}>
                    The Capital Powering{' '}
                    <span className={styles.accent}>Neenv Channel Finance</span>
                </h1>

                <p className={styles.description}>
                    Neenv originates, services and monitors every facility on its platform,
                    operating inside each partner&apos;s credit policy. Our NBFC and bank partners
                    bring the balance sheet — so the dealers, distributors and suppliers in a
                    brand&apos;s network get sanctioned faster, at scale, and without collateral.
                </p>

                <div className={styles.actions}>
                    <Link href="/become-partner-with-us" className={styles.btnPrimary}>
                        Become a Capital Partner
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                    <Link href="#partner-network" className={styles.btnSecondary}>
                        View the Network
                    </Link>
                </div>

                <dl className={styles.stats}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <dt className={styles.statLabel}>{stat.label}</dt>
                            <dd className={styles.statValue}>{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    </section>
);

export default CapitalPartnersHero;
