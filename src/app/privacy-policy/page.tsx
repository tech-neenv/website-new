import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy | Neenv',
    description:
        'Neenv\'s privacy policy under the Digital Personal Data Protection Act, 2023. How we collect, use, share, retain, and protect your personal data, and the rights available to you.',
    openGraph: {
        title: 'Privacy Policy | Neenv',
        description:
            'Neenv\'s privacy policy under the Digital Personal Data Protection Act, 2023. How we collect, use, share, retain, and protect your personal data, and the rights available to you.',
        url: 'https://www.neenvfin.com/privacy-policy',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className={styles.legalPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Privacy Policy</h1>
                        <p className={styles.lastUpdated}>Last updated: January 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Introduction</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED (&quot;Neenv&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our supply chain financing platform.
                                </p>
                                <p>
                                    In the language of the Digital Personal Data Protection Act, 2023, Neenv is a <strong>Data Fiduciary</strong> &mdash; the entity that determines the purpose and means of processing your personal data &mdash; and you are a <strong>Data Principal</strong>. Where we engage others to process data on our instructions, they act as <strong>Data Processors</strong> and remain bound by our instructions and by contract.
                                </p>
                                <p>
                                    By accessing or using our services, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access our platform. Where the law requires your consent for a particular purpose, we ask for it separately and specifically; agreeing to this policy is not by itself treated as that consent.
                                </p>
                                <p>
                                    A plain-language summary of what we collect and why, our cookie policy, and our statutory disclosures are set out on our{' '}
                                    <Link href="/legal">Legal &amp; Privacy</Link> page.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Applicable Law</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    This Privacy Policy is issued under and is to be read in accordance with:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        the <strong>Digital Personal Data Protection Act, 2023</strong> (&quot;DPDP Act&quot;) and the rules made under it, including the <strong>Digital Personal Data Protection Rules, 2025</strong> (&quot;DPDP Rules&quot;), as brought into force and as amended from time to time;
                                    </li>
                                    <li>
                                        the <strong>Information Technology Act, 2000</strong> and the rules made under it, to the extent they continue to apply;
                                    </li>
                                    <li>
                                        the directions, guidelines, and master directions issued by the <strong>Reserve Bank of India</strong> that apply to our lending partners and to us in our role as a Lending Service Provider, including the RBI Digital Lending Guidelines and the RBI Master Direction on Know Your Customer;
                                    </li>
                                    <li>
                                        the <strong>Prevention of Money-Laundering Act, 2002</strong> and the rules made under it;
                                    </li>
                                    <li>
                                        the <strong>Credit Information Companies (Regulation) Act, 2005</strong>, in relation to credit information; and
                                    </li>
                                    <li>
                                        the <strong>Companies Act, 2013</strong> and the <strong>Income-tax Act, 1961</strong>, in relation to books of account and tax records.
                                    </li>
                                </ul>
                                <p>
                                    This policy is governed by the laws of India. The courts at Mumbai, Maharashtra shall have jurisdiction over any dispute arising from it, without prejudice to your right to approach the Data Protection Board of India under the DPDP Act or the Reserve Bank of India under the Reserve Bank &ndash; Integrated Ombudsman Scheme, 2021.
                                </p>
                                <p>
                                    Where any provision of this policy is inconsistent with the DPDP Act or the DPDP Rules, the statute prevails and this policy will be read accordingly.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Information We Collect</h2>
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
                                <p>
                                    We collect only the personal data necessary for the purposes described in Section 4. Where you provide us with personal data about another individual &mdash; for example a colleague, director, or authorised signatory of your business &mdash; you confirm that you are entitled to share it with us and that they have been informed of this policy.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. How We Use Your Information</h2>
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
                                <p>
                                    Under the DPDP Act, we process personal data either on the basis of your consent or for a legitimate use permitted by the Act. Consent is our basis for marketing communications and for optional website analytics. Processing necessary to perform a service you have requested, and processing we must carry out to meet a legal or regulatory obligation &mdash; KYC, anti-money-laundering, credit reporting, tax and statutory record-keeping &mdash; does not rest on consent and continues even if consent for other purposes is withdrawn.
                                </p>
                                <p>
                                    We do not use your personal data for automated decision-making that produces a legal effect on you without human involvement. Credit decisions are made by our lending partner, not by Neenv.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Consent and Withdrawal of Consent</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Where we rely on your consent, we ask for it before processing, through a clear affirmative action, in plain language, and separately for each purpose. Our notice tells you what data is being collected, the purpose, how to withdraw consent, how to raise a grievance, and how to complain to the Data Protection Board of India.
                                </p>

                                <h3 className={styles.subTitle}>5.1 Your right to withdraw</h3>
                                <p>
                                    <strong>You may withdraw your consent at any time, in full or for any individual purpose.</strong> This is not limited to marketing. Withdrawing consent must be, and is, as easy as giving it &mdash; we do not require you to give a reason, complete a form we have not offered you, or speak to anyone before we act.
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>All processing based on consent:</strong> email the Grievance Officer named in Section 14 stating what you wish to withdraw. You may withdraw everything, or name specific purposes.
                                    </li>
                                    <li>
                                        <strong>Marketing communications:</strong> use the unsubscribe link in any message, or email us.
                                    </li>
                                    <li>
                                        <strong>Website analytics cookies:</strong> use the &quot;Manage cookie preferences&quot; control in our{' '}
                                        <Link href="/legal#cookie-policy">Cookie Policy</Link>.
                                    </li>
                                </ul>

                                <h3 className={styles.subTitle}>5.2 What happens when you withdraw</h3>
                                <p>
                                    We act on a withdrawal request within 3 working days of receiving it. We stop the affected processing, and we instruct our Data Processors to do the same. Personal data no longer needed for any other purpose is erased in line with Section 10, unless we are required by law to retain it.
                                </p>
                                <p>
                                    Withdrawal operates from the date it takes effect. It does not make earlier processing unlawful, and it does not affect:
                                </p>
                                <ul className={styles.list}>
                                    <li>data we are required to retain under the laws listed in Section 2;</li>
                                    <li>data held by a lending partner in connection with a live credit facility, which is governed by that lender&apos;s own privacy policy and its obligations to the RBI; or</li>
                                    <li>credit information already furnished to a credit information company, which is governed by the Credit Information Companies (Regulation) Act, 2005.</li>
                                </ul>
                                <p>
                                    Where withdrawing consent means we can no longer provide part of a service, we will tell you the consequence before acting on your request, so you can decide.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>6. Information Sharing and Disclosure</h2>
                            <div className={styles.sectionContent}>
                                <p>We may share your information with:</p>
                                <ul className={styles.list}>
                                    <li><strong>Financial Institution Partners:</strong> Banks and NBFCs that provide financing through our platform</li>
                                    <li><strong>Brand/Corporate Partners:</strong> Businesses in your supply chain as required for transaction processing</li>
                                    <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                                    <li><strong>Credit Bureaus:</strong> For credit assessment and reporting purposes</li>
                                    <li><strong>Regulatory Authorities:</strong> As required by applicable laws and regulations</li>
                                </ul>
                                <p>
                                    We do not sell your personal information to third parties for marketing purposes.
                                </p>

                                <h3 className={styles.subTitle}>6.1 Who these parties are</h3>
                                <p>
                                    The recipients we currently work with are set out below. We update this list when it changes.
                                </p>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Category</th>
                                                <th scope="col">Who</th>
                                                <th scope="col">What is shared and why</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Lending partner</th>
                                                <td>
                                                    <p><strong>Fexprime Finance Pvt. Ltd.</strong></p>
                                                    <p>(Formerly Bussan Auto Finance India Pvt. Ltd.)</p>
                                                    <p>CIN: U67190DL2022PTC407908</p>
                                                    <p>An NBFC regulated by the Reserve Bank of India</p>
                                                </td>
                                                <td>
                                                    Contact, business, KYC, financial and transaction data, where you ask us to take a financing application forward. Fexprime is the lender of record and a Data Fiduciary in its own right for the data it holds.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Credit information companies</th>
                                                <td>
                                                    The credit information companies licensed by the Reserve Bank of India &mdash; TransUnion CIBIL, Experian, Equifax, and CRIF High Mark
                                                </td>
                                                <td>
                                                    Identity and credit data, so that creditworthiness can be assessed and the facility reported as the law requires. Bureau enquiries are made by, or on the instruction of, the lending partner.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">KYC and verification vendors</th>
                                                <td>
                                                    {/* TODO: name the KYC/verification vendors once the vendor list is confirmed by the compliance team */}
                                                    Regulated KYC, identity and document verification providers engaged by us or by the lending partner. The current list is available on request from the Grievance Officer.
                                                </td>
                                                <td>
                                                    Identity documents and business registration details, to verify identity and complete KYC and anti-money-laundering checks. These vendors act as Data Processors on documented instructions.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Brand and corporate anchors</th>
                                                <td>
                                                    The brand or corporate anchor in your own supply chain
                                                </td>
                                                <td>
                                                    Transaction and relationship data, only where the financing product depends on that commercial relationship.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Technology processors</th>
                                                <td>
                                                    <p>Resend &mdash; delivery of enquiry-form emails</p>
                                                    <p>Google Analytics &mdash; website analytics, only where you have accepted analytics cookies</p>
                                                </td>
                                                <td>
                                                    The contents of a form you submit, in the case of email delivery; anonymised usage data in the case of analytics. See our{' '}
                                                    <Link href="/legal#cookie-policy">Cookie Policy</Link>.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Regulators and authorities</th>
                                                <td>
                                                    The Reserve Bank of India, the Data Protection Board of India, tax authorities, courts, and law-enforcement agencies
                                                </td>
                                                <td>
                                                    Whatever the law obliges us to disclose, and only to the extent of that obligation.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    Every Data Processor we engage is bound by a written contract that limits them to our documented instructions, requires security measures at least equal to our own, requires them to report a breach to us without delay, and requires deletion or return of the data when the engagement ends.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Cross-Border Transfer of Data</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Your personal data is stored and processed primarily <strong>within India</strong>. Our platform data, application records, and KYC records are held on infrastructure located in India, and our lending partner holds the data relating to a credit facility on its own systems in India in accordance with the RBI&apos;s data storage requirements.
                                </p>
                                <p>
                                    A limited category of data may be processed outside India by technology processors:
                                </p>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Processor</th>
                                                <th scope="col">Data involved</th>
                                                <th scope="col">Where processed</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Resend</th>
                                                <td>
                                                    The name, email, phone number, company and message you submit through a website form, for the purpose of delivering that enquiry to us by email.
                                                </td>
                                                <td>United States</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Google Analytics</th>
                                                <td>
                                                    Anonymised website usage data with IP anonymisation enabled. Collected only where you have accepted analytics cookies.
                                                </td>
                                                <td>
                                                    Google&apos;s global infrastructure, which includes servers outside India
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    Section 16 of the DPDP Act permits transfer of personal data outside India except to a country or territory that the Central Government restricts by notification. We do not transfer personal data to any restricted country. Where we transfer data outside India, we do so under a written contract that binds the recipient to confidentiality, purpose limitation, and security standards at least equal to those in this policy, and we remain accountable to you for that data.
                                </p>
                                <p>
                                    We do not transfer KYC documents, bank account details, credit information, or transaction records outside India.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>8. Data Security</h2>
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
                                    In addition, and in line with the reasonable security safeguards required by Section 8(5) of the DPDP Act and the DPDP Rules, we maintain:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Access control on a need-to-know basis</strong> &mdash; access to personal data is restricted to personnel whose role requires it, granted through role-based permissions, reviewed periodically, and revoked when a person changes role or leaves.
                                    </li>
                                    <li>
                                        <strong>Encryption</strong> &mdash; data in transit is protected with TLS; data at rest, including backups, is encrypted.
                                    </li>
                                    <li>
                                        <strong>Logging and monitoring</strong> &mdash; we maintain logs of access to and activity on systems holding personal data, to detect unauthorised access and to support investigation of any incident. Logs are retained for at least one year.
                                    </li>
                                    <li>
                                        <strong>Backups and continuity</strong> &mdash; personal data is backed up regularly, backups are encrypted and held in India, and restoration is tested so that data can be recovered after an incident.
                                    </li>
                                    <li>
                                        <strong>Contractual safeguards</strong> &mdash; every processor is contractually required to maintain equivalent safeguards.
                                    </li>
                                    <li>
                                        <strong>Deletion on expiry</strong> &mdash; personal data is deleted, and the deletion propagated to backups on their normal cycle, once the retention period in Section 10 ends.
                                    </li>
                                </ul>
                                <p>
                                    However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>9. Data Breach Notification</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    A personal data breach means any unauthorised processing, or accidental disclosure, acquisition, sharing, use, alteration, destruction, or loss of access to personal data, that compromises its confidentiality, integrity, or availability.
                                </p>
                                <p>
                                    If a breach affecting your personal data occurs, we commit to the following:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Notice to you, without delay.</strong> We will inform every affected Data Principal directly, in plain language, describing the nature and extent of the breach, when it occurred, the likely consequences for you, the measures we have taken to mitigate risk, what you can do to protect yourself, and how to contact us for more information.
                                    </li>
                                    <li>
                                        <strong>Initial notice to the Data Protection Board of India, without delay,</strong> on becoming aware of the breach, describing its nature, extent, timing, and likely impact.
                                    </li>
                                    <li>
                                        <strong>Detailed report to the Board within 72 hours</strong> of becoming aware of the breach &mdash; or within any longer period the Board allows on request &mdash; covering the events and circumstances leading to the breach, the measures taken to mitigate risk, the findings on who caused it, the remedial measures taken to prevent recurrence, and a copy of the intimations given to affected Data Principals.
                                    </li>
                                    <li>
                                        <strong>Records.</strong> We maintain a record of every breach, the response taken, and the remedial measures implemented.
                                    </li>
                                </ul>
                                <p>
                                    Where a breach originates with a Data Processor, our contracts require them to notify us without delay so that these timelines can be met. Where a breach relates to data held by a lending partner on its own systems, that lender carries the notification obligation and we will support and coordinate with it.
                                </p>
                                <p>
                                    Breaches involving payment systems or regulated lending activity are additionally reported to the Reserve Bank of India, and cyber security incidents to CERT-In, within the timelines those authorities prescribe.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>10. Data Retention</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Financial records are retained as per applicable regulatory requirements.
                                </p>
                                <p>
                                    In practical terms, the periods we apply are:
                                </p>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Category of data</th>
                                                <th scope="col">Retention period</th>
                                                <th scope="col">Why</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Loan and credit facility records</th>
                                                <td><strong>8 years</strong> from closure of the facility</td>
                                                <td>
                                                    Books of account and related records under the Companies Act, 2013 and the Income-tax Act, 1961, and the lending partner&apos;s regulatory record-keeping obligations.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">KYC records and identity documents</th>
                                                <td>
                                                    <strong>5 years</strong> from the end of the business relationship, or from the date of the transaction, whichever is later
                                                </td>
                                                <td>
                                                    Prevention of Money-Laundering Act, 2002 and the RBI Master Direction on Know Your Customer.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Transaction and payment records</th>
                                                <td><strong>8 years</strong> from the date of the transaction</td>
                                                <td>Statutory books of account and tax assessment.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Website enquiries and applications that do not proceed
                                                </th>
                                                <td>
                                                    <strong>24 months</strong> from your last contact with us, then erased
                                                </td>
                                                <td>
                                                    To respond to your enquiry and follow up on it. No statutory obligation applies, so we do not keep it longer.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Grievance and complaint records</th>
                                                <td><strong>5 years</strong> from closure of the complaint</td>
                                                <td>
                                                    To evidence how a complaint was handled and to meet regulatory expectations on complaint records.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Consent records</th>
                                                <td>
                                                    For the duration of the consent and <strong>5 years</strong> after it is withdrawn or expires
                                                </td>
                                                <td>
                                                    To demonstrate to the Data Protection Board that consent was validly obtained and honoured.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Marketing contact data</th>
                                                <td>Until you withdraw consent, then erased within 30 days</td>
                                                <td>Consent is the only basis for this processing.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">System and access logs</th>
                                                <td><strong>12 months</strong></td>
                                                <td>Security monitoring and incident investigation.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Website analytics data</th>
                                                <td>
                                                    <strong>14 months</strong>, and only where you accepted analytics cookies
                                                </td>
                                                <td>
                                                    Aggregate reporting on website performance. Deleted automatically by Google Analytics after this period.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    At the end of the applicable period, personal data is erased, and the erasure is propagated to backups on their normal rotation cycle. Where a record must be kept for a statutory period but is no longer needed operationally, we restrict access to it for the remainder of that period rather than keeping it in active use.
                                </p>
                                <p>
                                    If a longer period is directed by a court, a regulator, or is necessary for a live legal proceeding, we retain the data for that period and no longer.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>11. Children&apos;s Data</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    <strong>Our platform and services are intended for businesses and for individuals aged 18 years and over. We do not knowingly collect personal data from anyone under the age of 18.</strong>
                                </p>
                                <p>
                                    Our services are business-to-business financing products. They are not directed at children, are not marketed to children, and cannot be applied for by a child. Consistent with Section 9 of the DPDP Act:
                                </p>
                                <ul className={styles.list}>
                                    <li>we do not undertake tracking or behavioural monitoring of children;</li>
                                    <li>we do not direct advertising at children; and</li>
                                    <li>we do not process children&apos;s personal data in any way likely to cause a detrimental effect on the well-being of a child.</li>
                                </ul>
                                <p>
                                    The same approach applies to a person with a disability who has a lawfully appointed guardian.
                                </p>
                                <p>
                                    If we become aware that we have inadvertently collected personal data from a person under 18 without verifiable consent from a parent or lawful guardian, we will erase it promptly. If you believe a child has provided us with personal data, please contact the Grievance Officer named in Section 14 and we will act on it without delay.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>12. Your Rights</h2>
                            <div className={styles.sectionContent}>
                                <p>Subject to applicable laws, you have the right to:</p>
                                <ul className={styles.list}>
                                    <li>Access and receive a copy of your personal information</li>
                                    <li>Correct inaccurate or incomplete information</li>
                                    <li>Request deletion of your information (subject to legal requirements)</li>
                                    <li>Withdraw consent for marketing communications</li>
                                    <li>Lodge a complaint with relevant data protection authorities</li>
                                </ul>
                                <p>
                                    Under the DPDP Act, these rights are as follows:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Right to access information (Section 11):</strong> a summary of the personal data we hold about you and how it is being processed, together with the identities of every other Data Fiduciary and Data Processor with whom it has been shared and a description of what was shared.
                                    </li>
                                    <li>
                                        <strong>Right to correction, completion, updating and erasure (Section 12):</strong> correction of inaccurate or misleading data, completion of incomplete data, updating of out-of-date data, and erasure of data that is no longer needed for the purpose it was collected for, unless retention is required by law.
                                    </li>
                                    <li>
                                        <strong>Right to withdraw consent (Section 6(4)):</strong> in full or for a specific purpose, at any time, as easily as consent was given. This extends to all consent-based processing, not only marketing &mdash; see Section 5 above.
                                    </li>
                                    <li>
                                        <strong>Right of grievance redressal (Section 13):</strong> a readily available means of raising a grievance with us about our handling of your data or your rights, which we must respond to within the period prescribed by the DPDP Rules.
                                    </li>
                                    <li>
                                        <strong>Right to nominate (Section 14):</strong> nominate another individual to exercise these rights on your behalf in the event of your death or incapacity.
                                    </li>
                                    <li>
                                        <strong>Right to complain to the Data Protection Board of India:</strong> if you are not satisfied with our response, or we do not respond within the prescribed period &mdash; see Section 14 below.
                                    </li>
                                </ul>

                                <h3 className={styles.subTitle}>12.1 How to exercise them</h3>
                                <p>
                                    Email the Grievance Officer named in Section 14, marking your message &quot;Data Rights Request&quot;. Full guidance on what to include is set out in the{' '}
                                    <Link href="/legal#data-rights">Data Rights</Link> section of our Legal &amp; Privacy page. We may ask for information reasonably necessary to verify your identity before acting on a request, and we do not charge a fee.
                                </p>
                                <p>
                                    We acknowledge requests within 3 working days and respond substantively within 30 calendar days. Grievances are resolved as early as possible and in any event no later than 90 days from registration. If we decline a request in whole or in part, we will tell you why and what you can do next.
                                </p>
                                <p>
                                    <strong>Your duties as a Data Principal:</strong> the DPDP Act asks that you provide authentic information when exercising the right to correction, that you do not impersonate another person or suppress material information where the law requires disclosure, and that you do not raise a false or frivolous grievance.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>13. Cookies Policy</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We use cookies and similar tracking technologies to enhance your experience on our platform. These help us understand how you use our services and enable certain features. You can control cookie preferences through your browser settings.
                                </p>
                                <p>
                                    Only strictly necessary cookies operate by default. Analytics cookies, including Google Analytics, are <strong>not loaded at all</strong> until you actively accept them through our cookie consent banner, and you may withdraw that consent at any time.
                                </p>
                                <p>
                                    The full list of what we store, its purpose and duration, and the control to change or withdraw your choice are set out in our{' '}
                                    <Link href="/legal#cookie-policy">Cookie Policy</Link>.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>14. Grievance Officer</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    In accordance with Section 13 of the DPDP Act, we have appointed a Grievance Officer to answer questions about this policy and to address any grievance regarding our processing of your personal data or the exercise of your rights.
                                </p>
                                <div className={styles.contactInfo}>
                                    <p><strong>Mr. Abhishek Verma</strong></p>
                                    <p>Nodal Grievance Redressal Officer</p>
                                    <p>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</p>
                                    <p>
                                        Email:{' '}
                                        <a href="mailto:abhishek.verma@neenvfin.com">abhishek.verma@neenvfin.com</a>
                                    </p>
                                    <p>
                                        Phone: <a href="tel:+919810174406">+91 98101 74406</a>
                                    </p>
                                    <p>B-90, 3rd Floor, Greenwood City, Sector-45,</p>
                                    <p>Gurugram, Haryana &ndash; 122003, India</p>
                                </div>
                                <p>
                                    We acknowledge every grievance within 3 working days and resolve it as early as possible, and in any event no later than 90 days from the date it is registered. The complete escalation path is set out in our{' '}
                                    <Link href="/grievance-redressal">Grievance Redressal Policy</Link>.
                                </p>

                                <h3 className={styles.subTitle}>14.1 Escalation to the Data Protection Board of India</h3>
                                <p>
                                    If you are not satisfied with our response, or we have not responded within the period stated above, you may make a complaint to the <strong>Data Protection Board of India</strong>, the adjudicating authority established under Chapter V of the DPDP Act. Complaints to the Board are made in the manner and form prescribed by the DPDP Rules, and the Board publishes its procedure and contact details on its official website.
                                </p>
                                <p>
                                    Exhausting the grievance process with us first is a precondition to approaching the Board under the DPDP Act. Nothing in this policy limits your right to any other remedy available to you in law, including escalation to the Reserve Bank of India under the Reserve Bank &ndash; Integrated Ombudsman Scheme, 2021 where your complaint concerns a regulated entity.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>15. Changes to This Privacy Policy</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
                                </p>
                                <p>
                                    Where a change materially affects how we process personal data that we hold on the basis of your consent, we will inform you directly and, where the law requires it, obtain fresh consent before the change takes effect.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>16. Contact Us</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className={styles.contactInfo}>
                                    <p><strong>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</strong></p>
                                    <p>Email: <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a></p>
                                    <p>CIN: U66190HR2025PTC135907</p>
                                    <p>Registered Office: B-90, 3rd Floor, Greenwood City, Sector-45,</p>
                                    <p>Gurugram, Haryana &ndash; 122003, India</p>
                                    <p>Corporate Office: Teloz Spaces, 1st Floor, AJ House, Marol Maroshi Road,</p>
                                    <p>Marol, Andheri East, Mumbai, Maharashtra &ndash; 400059, India</p>
                                </div>
                                <p>
                                    For data privacy requests and grievances specifically, please write to the Grievance Officer named in Section 14 rather than to the general enquiry address.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
