import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/logos/neenv-white-logo.png"
                                alt="Neenv"
                                width={180}
                                height={60}
                                sizes="180px"
                                className={styles.logoImg}
                            />
                        </Link>
                        <p className={styles.brandDescription}>
                            AI-native supply chain finance platform powering last-mile credit for India&apos;s Brand-led ecosystems. Digital-first. Collateral-free.
                        </p>
                        {/* <div className={styles.social}>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                <LinkedinIcon size={18} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </Link>
                        </div> */}
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/#about" className={styles.columnLink}>About</Link>
                            <Link href="/#how-it-works" className={styles.columnLink}>How It Works</Link>
                            <Link href="/for-financial-institutions" className={styles.columnLink}>For FIs</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Products</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/products/dealer-financing" className={styles.columnLink}>Dealer Financing</Link>
                            <Link href="/products/working-capital-loan" className={styles.columnLink}>Working Capital Loan</Link>
                            <Link href="/products/invoice-factoring" className={styles.columnLink}>Factoring</Link>
                            <Link href="/products/supplier-financing" className={styles.columnLink}>Supplier Financing</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/contact" className={styles.columnLink}>Contact Us</Link>
                            <Link href="mailto:Info@neenvfin.com" className={styles.contactItem}>
                                <Mail size={18} />
                                <span>Info@neenvfin.com</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy-policy" className={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className={styles.legalLink}>
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
