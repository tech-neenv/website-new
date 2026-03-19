import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Terms and Conditions for using Neenv Financial Technologies supply chain financing platform.',
    alternates: {
        canonical: 'https://www.neenvfin.com/terms-and-conditions',
    },
};

export default function TermsAndConditionsPage() {
    return (
        <>
            <Header />
            <main className={styles.legalPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Terms & Conditions</h1>
                        <p className={styles.lastUpdated}>Last updated: January 2025</p>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Welcome to Neenv. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website, platform, and services provided by NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED (&quot;Neenv&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                                </p>
                                <p>
                                    By accessing or using our platform, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Description of Services</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Neenv operates a digital supply chain financing platform that connects businesses with financial institutions to facilitate:
                                </p>
                                <ul className={styles.list}>
                                    <li><strong>Channel Financing:</strong> Credit facilities for channel partners to purchase inventory from Brand/sellers</li>
                                    <li><strong>Working Capital Loans:</strong> Short-term financing solutions for business operational needs</li>
                                    <li><strong>Factoring:</strong> Accelerate cash flow by converting trade receivables into immediate working capital</li>
                                    <li><strong>Supplier Financing:</strong> Early payment solutions for suppliers against approved invoices</li>
                                </ul>
                                <p>
                                    Neenv acts as a technology platform facilitating transactions between borrowers, Brands/corporates, and financial institution partners. We are not a bank or NBFC and do not directly provide loans or credit.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Eligibility</h2>
                            <div className={styles.sectionContent}>
                                <p>To use our services, you must:</p>
                                <ul className={styles.list}>
                                    <li>Be a registered business entity in India</li>
                                    <li>Have valid GST registration and PAN</li>
                                    <li>Be authorized to enter into binding agreements on behalf of your business</li>
                                    <li>Not be blacklisted by any financial institution or regulatory authority</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Account Registration</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    To access our platform, you must register and create an account. You agree to:
                                </p>
                                <ul className={styles.list}>
                                    <li>Provide accurate, current, and complete information during registration</li>
                                    <li>Maintain and promptly update your account information</li>
                                    <li>Keep your login credentials confidential and secure</li>
                                    <li>Notify us immediately of any unauthorized access to your account</li>
                                    <li>Be responsible for all activities that occur under your account</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. KYC and Documentation</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    You agree to provide all necessary documentation for Know Your Customer (KYC) verification and credit assessment, including but not limited to:
                                </p>
                                <ul className={styles.list}>
                                    <li>Business registration documents</li>
                                    <li>Identity and address proof of authorized signatories</li>
                                    <li>Bank statements and financial statements</li>
                                    <li>GST returns and tax documents</li>
                                    <li>Any other documents as required by financial institution partners</li>
                                </ul>
                                <p>
                                    You represent that all documents and information provided are true, accurate, and not misleading.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>6. Financing Terms</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Specific terms for financing, including interest rates, fees, repayment schedules, and other conditions, will be governed by separate agreements between you and the respective financial institution partners. Neenv facilitates these transactions but is not a party to the loan/credit agreements.
                                </p>
                                <p>
                                    You acknowledge that:
                                </p>
                                <ul className={styles.list}>
                                    <li>Approval of financing is at the sole discretion of financial institution partners</li>
                                    <li>Credit limits and terms may vary based on your creditworthiness</li>
                                    <li>You are obligated to repay all amounts as per agreed terms</li>
                                    <li>Default may result in legal action and reporting to credit bureaus</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. User Obligations</h2>
                            <div className={styles.sectionContent}>
                                <p>You agree to:</p>
                                <ul className={styles.list}>
                                    <li>Use the platform only for lawful purposes</li>
                                    <li>Not engage in any fraudulent or deceptive activities</li>
                                    <li>Not attempt to circumvent security measures or gain unauthorized access</li>
                                    <li>Not use the platform to launder money or finance illegal activities</li>
                                    <li>Comply with all applicable laws, rules, and regulations</li>
                                    <li>Honor all financial commitments made through the platform</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>8. Intellectual Property</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    All content, trademarks, logos, and intellectual property on the platform are owned by Neenv or its licensors. You may not copy, modify, distribute, or use any content without prior written consent.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>9. Limitation of Liability</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    To the maximum extent permitted by law:
                                </p>
                                <ul className={styles.list}>
                                    <li>Neenv provides the platform &quot;as is&quot; without warranties of any kind</li>
                                    <li>We are not liable for any indirect, incidental, or consequential damages</li>
                                    <li>Our total liability shall not exceed the fees paid by you in the preceding 12 months</li>
                                    <li>We are not responsible for actions or decisions of financial institution partners</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>10. Indemnification</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    You agree to indemnify and hold harmless Neenv, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the platform, violation of these Terms, or infringement of any third-party rights.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>11. Termination</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We may suspend or terminate your access to the platform at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your obligations under any outstanding financing arrangements shall continue.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>12. Dispute Resolution</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Any disputes arising out of or relating to these Terms shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Bangalore, India, and proceedings shall be conducted in English.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>13. Governing Law</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of India. The courts of Bangalore, Karnataka shall have exclusive jurisdiction over any disputes.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>14. Modifications to Terms</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We reserve the right to modify these Terms at any time. Changes will be effective upon posting on the platform. Your continued use of the platform after any modifications constitutes acceptance of the updated Terms.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>15. Severability</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>16. Contact Information</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    For any questions or concerns regarding these Terms, please contact us:
                                </p>
                                <div className={styles.contactInfo}>
                                    <p><strong>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</strong></p>
                                    <p>Email: <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
