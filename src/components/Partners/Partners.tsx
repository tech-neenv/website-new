import Image from 'next/image';
import { ArrowUpRight, Landmark } from 'lucide-react';
import styles from './Partners.module.css';

type Partner = {
    /** Display name — also the alt text when a logo is supplied. */
    name: string;
    /** Opened in a new tab on click. Leave empty to render a non-clickable card. */
    url: string;
    /** Logo in /public/images/partners — falls back to an icon + the name. */
    logo?: string;
};

/* Add each new NBFC here — the heading count and the marquee adapt automatically. */
const partners: Partner[] = [
    {
        name: 'Fexprime Finance',
        url: 'https://www.fexprime.com/Grievance-Redressal-Details',
        logo: '/images/partners/fexprime.jpg',
    },
];

/* Below this many cards the row can't fill the screen, so it renders centred and static
   instead of scrolling a near-empty strip. Add a 5th partner and the marquee kicks in. */
const MIN_CARDS_TO_SCROLL = 5;
/* A scrolling track repeats the set until it comfortably overflows the widest viewport. */
const MIN_CARDS_ON_TRACK = 10;

const PartnerCard = ({ partner, duplicate = false }: { partner: Partner; duplicate?: boolean }) => {
    const inner = (
        <>
            {partner.logo ? (
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={1000}
                    height={200}
                    sizes="(max-width: 768px) 220px, 300px"
                    className={styles.logoImg}
                />
            ) : (
                <>
                    <span className={styles.logoWrap}>
                        <Landmark size={22} strokeWidth={1.5} />
                    </span>
                    <span className={styles.name}>{partner.name}</span>
                </>
            )}
            {partner.url && (
                <span className={styles.arrow}>
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
    /* Scale duration with the group width to keep the scroll speed constant. */
    const duration = Math.max(count * 4, 12);

    return (
        <section id="partners" className={styles.partners}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`${styles.badge} badge-animated`}>OUR LENDING PARTNERS</span>
                    <h2 className={styles.title}>
                        {count === 1
                            ? 'Backed by Our NBFC Lending Partner'
                            : `Backed by ${count} NBFC Partners`}
                    </h2>
                    <p className={styles.subtitle}>
                        Neenv originates and manages the assets. Our NBFC lending partners bring
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
