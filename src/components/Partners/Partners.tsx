import Image from 'next/image';
import { ArrowUpRight, Landmark } from 'lucide-react';
import styles from './Partners.module.css';
import { partners, servesRawLogo, type Partner } from '@/data/partners';

/* A single partner has nothing to scroll past, so it renders centred and static.
   From two upwards the marquee keeps them on one continuous row, which also beats
   a tall stack of full-width cards on mobile. */
const MIN_CARDS_TO_SCROLL = 2;
/* A scrolling track repeats the set until it comfortably overflows the widest viewport. */
const MIN_CARDS_ON_TRACK = 10;

const PartnerCard = ({ partner, duplicate = false }: { partner: Partner; duplicate?: boolean }) => {
    const inner = (
        <>
            {/* Fixed-size plate: logos of any aspect ratio land on the same optical footprint,
                so the row reads as one wall instead of mismatched wordmarks. */}
            <span className={styles.logoPlate}>
                {partner.logo ? (
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.logoWidth ?? 1000}
                        height={partner.logoHeight ?? 200}
                        sizes="(max-width: 768px) 180px, 200px"
                        unoptimized={servesRawLogo(partner.logo)}
                        className={styles.logoImg}
                    />
                ) : (
                    <span className={styles.fallback}>
                        <Landmark size={20} strokeWidth={1.5} />
                        <span className={styles.name}>{partner.name}</span>
                    </span>
                )}
            </span>
            {partner.url && (
                <span className={styles.arrow} aria-hidden="true">
                    <ArrowUpRight size={14} strokeWidth={2} />
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
            tabIndex={duplicate ? -1 : undefined}
        >
            {inner}
        </a>
    );
};

const Partners = () => {
    const count = partners.length;
    const shouldScroll = count >= MIN_CARDS_TO_SCROLL;

    /* Number of identical groups on the track. The animation shifts by exactly one
       group width — 100% / repeat — so the loop is seamless at any partner count. */
    const repeat = Math.max(2, Math.ceil(MIN_CARDS_ON_TRACK / count));
    /* Scale duration with the group width so the strip always travels at roughly
       the same unhurried pace, whatever the partner count. */
    const duration = Math.max(count * 7, 20);

    return (
        <section id="partners" className={styles.partners}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>OUR LENDING PARTNERS</span>
                    {/* Deliberately count-free — the headline shouldn't churn as partners are added. */}
                    <h2 className={styles.title}>Backed by Leading Lending Partners</h2>
                    <p className={styles.subtitle}>
                        Neenv originates and manages the assets. Our lending partners bring
                        the capital — so channel partners get sanctioned faster, at scale.
                    </p>
                </div>

                {!shouldScroll && (
                    <div className={styles.staticRow}>
                        {partners.map((partner) => (
                            <PartnerCard key={partner.name} partner={partner} />
                        ))}
                    </div>
                )}
            </div>

            {/* Auto-scrolling marquee — pauses on hover / keyboard focus */}
            {shouldScroll && (
                <div className={styles.marquee}>
                    <div
                        className={styles.track}
                        style={{
                            '--repeat': repeat,
                            '--duration': `${duration}s`,
                        } as React.CSSProperties}
                    >
                        {Array.from({ length: repeat }, (_, groupIndex) => (
                            <div
                                key={groupIndex}
                                className={styles.group}
                                /* Only the first group is read out; the rest are visual filler */
                                aria-hidden={groupIndex > 0 ? 'true' : undefined}
                            >
                                {partners.map((partner) => (
                                    <PartnerCard
                                        key={`${partner.name}-${groupIndex}`}
                                        partner={partner}
                                        duplicate={groupIndex > 0}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Partners;
