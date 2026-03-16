import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy - Neenv',
    description: 'Privacy Policy for Neenv Financial Technologies. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className={styles.legalPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last updated: January 2025</p>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Introduction</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED (&quot;Neenv&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our supply chain financing platform.
                                </p>
                                <p>
                                    By accessing or using our services, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access our platform.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
                            <div className={styles.sectionContent}>
                                <p>We may collect the following types of information:</p>
                                <p><strong>Personal Information:</strong></p>
                                <ul className={styles.list}>
                                    <li>Name, email address, phone number, and business address</li>
                                    <li>Business registration details (GST number, PAN, CIN)</li>
                                    <li>Bank account and financial information</li>
                                    <li>KYC documents and identity verification information</li>
                                    <li>Transaction history and credit information</li>
                                </ul>
                                <p><strong>Technical Information:</strong></p>
                                <ul className={styles.list}>
                                    <li>IP address, browser type, and device information</li>
                                    <li>Usage data and analytics</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
                            <div className={styles.sectionContent}>
                                <p>We use the information we collect to:</p>
                                <ul className={styles.list}>
                                    <li>Process and manage your financing applications</li>
                                    <li>Verify your identity and conduct credit assessments</li>
                                    <li>Provide, operate, and maintain our platform</li>
                                    <li>Communicate with you about your account and transactions</li>
                                    <li>Send promotional communications (with your consent)</li>
                                    <li>Comply with legal and regulatory requirements</li>
                                    <li>Prevent fraud and enhance security</li>
                                    <li>Improve our services and user experience</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Information Sharing and Disclosure</h2>
                            <div className={styles.sectionContent}>
                                <p>We may share your information with:</p>
                                <ul className={styles.list}>
                                    <li><strong>Financial Institution Partners:</strong> Banks and NBFCs that provide financing through our platform</li>
                                    <li><strong>OEM/Corporate Partners:</strong> Businesses in your supply chain as required for transaction processing</li>
                                    <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                                    <li><strong>Credit Bureaus:</strong> For credit assessment and reporting purposes</li>
                                    <li><strong>Regulatory Authorities:</strong> As required by applicable laws and regulations</li>
                                </ul>
                                <p>
                                    We do not sell your personal information to third parties for marketing purposes.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Data Security</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul className={styles.list}>
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Secure access controls and authentication</li>
                                    <li>Regular security assessments and audits</li>
                                    <li>Employee training on data protection</li>
                                </ul>
                                <p>
                                    However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>6. Data Retention</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Financial records are retained as per applicable regulatory requirements.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Your Rights</h2>
                            <div className={styles.sectionContent}>
                                <p>Subject to applicable laws, you have the right to:</p>
                                <ul className={styles.list}>
                                    <li>Access and receive a copy of your personal information</li>
                                    <li>Correct inaccurate or incomplete information</li>
                                    <li>Request deletion of your information (subject to legal requirements)</li>
                                    <li>Withdraw consent for marketing communications</li>
                                    <li>Lodge a complaint with relevant data protection authorities</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>8. Cookies Policy</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We use cookies and similar tracking technologies to enhance your experience on our platform. These help us understand how you use our services and enable certain features. You can control cookie preferences through your browser settings.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>9. Changes to This Privacy Policy</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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
