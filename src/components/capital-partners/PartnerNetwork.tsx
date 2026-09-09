'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Landmark } from 'lucide-react';
import {
    partners,
    partnerCount,
    activeCategories,
    countByCategory,
    type Partner,
    type PartnerCategory,
} from '@/data/partners';
import styles from './PartnerNetwork.module.css';

type Filter = PartnerCategory | 'All';

/* With a single category represented, chips would be a row of one — noise, not
   navigation. They appear on their own once a second category is onboarded. */
const showFilters = activeCategories.length > 1;

const PartnerCard = ({ partner }: { partner: Partner }) => {
    const inner = (
        <>
            <span className={styles.logoBox}>
                {partner.logo ? (
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={1000}
                        height={200}
                        sizes="(max-width: 768px) 240px, 300px"
                        className={styles.logoImg}
                    />
                ) : (
                    <span className={styles.logoFallback}>
                        <Landmark size={26} strokeWidth={1.5} />
                    </span>
                )}
            </span>

            <span className={styles.body}>
                <span className={styles.nameRow}>
                    <span className={styles.name}>{partner.name}</span>
                    <span className={styles.tag}>{partner.category}</span>
                </span>
                {partner.description && (
                    <span className={styles.description}>{partner.description}</span>
                )}
            </span>

            {partner.url && (
                <span className={styles.arrow}>
                    <ArrowUpRight size={16} strokeWidth={2} />
                </span>
            )}
        </>
    );

    if (!partner.url) {
        return <div className={styles.card}>{inner}</div>;
    }

    return (
        <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.clickable}`}
            aria-label={`${partner.name} — opens in a new tab`}
        >
            {inner}
        </a>
    );
};

const PartnerNetwork = () => {
    const [filter, setFilter] = useState<Filter>('All');

    const visible = filter === 'All' ? partners : partners.filter((p) => p.category === filter);

    const chips: { key: Filter; label: string; count: number }[] = [
        { key: 'All', label: 'All', count: partnerCount },
        ...activeCategories.map((category) => ({
            key: category as Filter,
            label: category === 'NBFC' ? 'NBFCs' : category === 'Bank' ? 'Banks' : category,
            count: countByCategory(category),
        })),
    ];

    return (
        <section id="partner-network" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Capital Partners</h2>
                    <p className={styles.subtitle}>
                        The institutions funding Neenv-originated channel finance. We are
                        actively onboarding NBFCs and banks to widen the network.
                    </p>
                </div>

                {showFilters && (
                    <div className={styles.filters} role="group" aria-label="Filter partners by type">
                        {chips.map((chip) => (
                            <button
                                key={chip.key}
                                type="button"
                                onClick={() => setFilter(chip.key)}
                                aria-pressed={filter === chip.key}
                                className={`${styles.chip} ${filter === chip.key ? styles.chipActive : ''}`}
                            >
                                {chip.label}
                                <span className={styles.chipCount}>{chip.count}</span>
                            </button>
                        ))}
                    </div>
                )}

                <div className={styles.grid}>
                    {visible.map((partner) => (
                        <PartnerCard key={partner.name} partner={partner} />
                    ))}

                    {/* Keeps a short network from looking like a broken grid, and doubles
                        as the recruitment slot for the next partner. */}
                    <a href="/become-partner-with-us" className={styles.placeholder}>
                        <span className={styles.placeholderIcon}>
                            <Landmark size={26} strokeWidth={1.5} />
                        </span>
                        <span className={styles.placeholderTitle}>Your institution here</span>
                        <span className={styles.placeholderText}>
                            We are onboarding banks and NBFCs. See what partnering with Neenv looks like.
                        </span>
                    </a>
                </div>

                <p className={styles.note}>
                    Lending, sanction and disbursal decisions rest with the respective partner
                    institution. Neenv is a technology platform and does not lend on its own book.
                </p>
            </div>
        </section>
    );
};

export default PartnerNetwork;
