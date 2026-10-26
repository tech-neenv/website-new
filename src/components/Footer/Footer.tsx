'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LinkedinIcon, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    /**
     * True when a footer link points at the page currently open.
     *
     * Anchor-only links (/#how-it-works) and mailto:/tel: are never marked —
     * an in-page anchor is not a separate destination, so highlighting it on
     * every visit to "/" would be a false positive.
     */
    const isActive = (href: string) => {
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
        // Any link carrying a hash targets a section, not a page of its own.
        if (href.includes('#')) return false;

        return pathname === href;
    };

    /** Applies the active modifier to a link's base class when it matches. */
    const linkClass = (base: string, activeModifier: string, href: string) =>
        `${base}${isActive(href) ? ` ${activeModifier}` : ''}`;

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
                            AI Native Supply Chain Finance Platform empowering under-served micro & small business partners for India's brand led ecosystem. Digital First. Collateral Free.
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
                            <Link href="/#how-it-works" className={linkClass(styles.columnLink, styles.columnLinkActive, '/#how-it-works')} aria-current={isActive('/#how-it-works') ? 'page' : undefined}>How It Works</Link>
                            <Link href="/for-financial-institutions" className={linkClass(styles.columnLink, styles.columnLinkActive, '/for-financial-institutions')} aria-current={isActive('/for-financial-institutions') ? 'page' : undefined}>For FIs</Link>
                            <Link href="/capital-partners" className={linkClass(styles.columnLink, styles.columnLinkActive, '/capital-partners')} aria-current={isActive('/capital-partners') ? 'page' : undefined}>Capital Partners</Link>
                            <Link href="/become-partner-with-us" className={linkClass(styles.columnLink, styles.columnLinkActive, '/become-partner-with-us')} aria-current={isActive('/become-partner-with-us') ? 'page' : undefined}>Become a Partner</Link>
                            <Link href="/about-us" className={linkClass(styles.columnLink, styles.columnLinkActive, '/about-us')} aria-current={isActive('/about-us') ? 'page' : undefined}>About Us</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Products</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/products/channel-financing" className={linkClass(styles.columnLink, styles.columnLinkActive, '/products/channel-financing')} aria-current={isActive('/products/channel-financing') ? 'page' : undefined}>Channel Financing</Link>
                            <Link href="/products/working-capital-loan" className={linkClass(styles.columnLink, styles.columnLinkActive, '/products/working-capital-loan')} aria-current={isActive('/products/working-capital-loan') ? 'page' : undefined}>Working Capital Loan</Link>
                            <Link href="/products/invoice-factoring" className={linkClass(styles.columnLink, styles.columnLinkActive, '/products/invoice-factoring')} aria-current={isActive('/products/invoice-factoring') ? 'page' : undefined}>Factoring</Link>
                            <Link href="/products/supplier-financing" className={linkClass(styles.columnLink, styles.columnLinkActive, '/products/supplier-financing')} aria-current={isActive('/products/supplier-financing') ? 'page' : undefined}>Supplier Financing</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/contact" className={linkClass(styles.columnLink, styles.columnLinkActive, '/contact')} aria-current={isActive('/contact') ? 'page' : undefined}>Contact Us</Link>
                            <Link href="/privacy-policy" className={linkClass(styles.columnLink, styles.columnLinkActive, '/privacy-policy')} aria-current={isActive('/privacy-policy') ? 'page' : undefined}>Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className={linkClass(styles.columnLink, styles.columnLinkActive, '/terms-and-conditions')} aria-current={isActive('/terms-and-conditions') ? 'page' : undefined}>Terms &amp; Conditions</Link>
                            <Link href="/grievance-redressal" className={linkClass(styles.columnLink, styles.columnLinkActive, '/grievance-redressal')} aria-current={isActive('/grievance-redressal') ? 'page' : undefined}>Grievance Redressal</Link>
                            {/* Consolidated hub: data rights, cookie policy, consent notice, disclosures */}
                            <Link href="/legal" className={linkClass(styles.columnLink, styles.columnLinkActive, '/legal')} aria-current={isActive('/legal') ? 'page' : undefined}>Legal &amp; Privacy</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/contact" className={linkClass(styles.columnLink, styles.columnLinkActive, '/contact')} aria-current={isActive('/contact') ? 'page' : undefined}>Contact Us</Link>
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
                        <Link href="/privacy-policy" className={linkClass(styles.legalLink, styles.legalLinkActive, '/privacy-policy')} aria-current={isActive('/privacy-policy') ? 'page' : undefined}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className={linkClass(styles.legalLink, styles.legalLinkActive, '/terms-and-conditions')} aria-current={isActive('/terms-and-conditions') ? 'page' : undefined}>
                            Terms & Conditions
                        </Link>
                        <Link href="/legal" className={linkClass(styles.legalLink, styles.legalLinkActive, '/legal')} aria-current={isActive('/legal') ? 'page' : undefined}>
                            Legal &amp; Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
