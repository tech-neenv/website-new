'use client';

import styles from './ProductMockups.module.css';

const Tick = ({ delay }: { delay: number }) => (
    <div className={styles.tickIcon} style={{ animationDelay: `${delay}s` }}>
        <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="10 3 5 9 2 6" />
        </svg>
    </div>
);

const ChannelFinancingMockup = () => (
    <div className={styles.mockupCard}>
        {/* Header */}
        <div className={styles.headerRow}>
            <span className={styles.headerName}>Raj Electronics</span>
            <span className={`${styles.statusBadge} ${styles.statusSuccess}`}>Active</span>
        </div>
        <div className={styles.subHeader}>&times; Polar Electricals</div>
        <div className={styles.subHeaderMuted}>Dealer ID: DLR-4821</div>

        <div className={styles.divider} />

        {/* Credit Limit */}
        <div className={styles.label}>CREDIT LIMIT</div>
        <div className={styles.bigAmount}>&rupee;15,00,000</div>
        <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: '55%' }} />
        </div>
        <div className={styles.progressMeta}>
            <span style={{ color: '#0a714e' }}>&rupee;8,25,000 available</span>
            <span style={{ color: '#6b7280' }}>&rupee;6,75,000 utilised</span>
        </div>

        <div className={styles.divider} />

        {/* Checklist */}
        <div className={styles.tickRow}><Tick delay={0.4} /> KYC Verified</div>
        <div className={styles.tickRow}><Tick delay={0.5} /> Credit Approved</div>
        <div className={styles.tickRow}><Tick delay={0.6} /> Agreement Signed</div>
        <div className={styles.tickRow}><Tick delay={0.7} /> NACH Registered</div>

        <div className={styles.divider} />

        {/* Stats */}
        <div className={styles.statsRow}>
            <div className={styles.statChip}>
                <div className={styles.statValue}>3</div>
                <div className={styles.statLabel}>Active Loans</div>
            </div>
            <div className={styles.statChip}>
                <div className={`${styles.statValue} ${styles.statValueGreen}`}>&rupee;42,500</div>
                <div className={styles.statLabel}>Next EMI</div>
            </div>
            <div className={styles.statChip}>
                <div className={`${styles.statValue} ${styles.statValueGreen}`}>100%</div>
                <div className={styles.statLabel}>On-Time</div>
            </div>
        </div>

        <div className={styles.divider} />

        {/* Quote */}
        <div className={styles.wittyQuote}>
            &ldquo;Banks wanted his property papers. We just wanted his purchase history.&rdquo;
            <div className={styles.wittyAttribution}>&mdash; Neenv</div>
        </div>
    </div>
);

export default ChannelFinancingMockup;
