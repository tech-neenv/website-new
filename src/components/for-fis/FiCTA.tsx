import Link from 'next/link';
import styles from './FiCTA.module.css';

const FiCTA = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.card}>
                    <h2 className={styles.title}>Let&apos;s Build Together</h2>
                    <p className={styles.desc}>
                        Connect with us to discuss how Neenv can help you serve
                        India&apos;s MSME ecosystem.
                    </p>
                    <Link href="/contact" className={styles.cta}>
                        Contact Us
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FiCTA;
