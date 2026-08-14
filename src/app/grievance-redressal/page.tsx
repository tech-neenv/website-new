import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Grievance Redressal | Neenv',
    description: 'How to raise a complaint with Neenv, our escalation levels, turnaround times, and grievance officer contact details.',
    openGraph: {
        title: 'Grievance Redressal | Neenv',
        description: 'How to raise a complaint with Neenv, our escalation levels, turnaround times, and grievance officer contact details.',
        url: 'https://www.neenvfin.com/grievance-redressal',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/grievance-redressal',
    },
};

export default function GrievanceRedressalPage() {
    return (
        <>
            <Header />
            <main className={styles.legalPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Grievance Redressal</h1>
                        <p className={styles.lastUpdated}>Last updated: January 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Our Commitment</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED (&quot;Neenv&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to resolving every customer complaint fairly, transparently, and within defined timelines. This Grievance Redressal Policy explains how you can raise a concern with us, how we handle it, and how you may escalate it if you are not satisfied with the outcome.
                                </p>
                                <p>
                                    Neenv operates a technology platform that facilitates channel finance transactions between businesses and our financial institution partners. Complaints relating to the sanction, pricing, or recovery of a loan may need to be taken up with the lending partner concerned; where that is the case, we will tell you and help route your complaint appropriately.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Level 1 — Raise Your Complaint</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    You may register a complaint through any of the following channels:
                                </p>
                                <ul className={styles.list}>
                                    <li><strong>Email:</strong> <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a></li>
                                    <li><strong>Contact form:</strong> the enquiry form on our <a href="/contact">Contact Us</a> page</li>
                                    <li><strong>Post:</strong> at the registered office address listed in Section 6 below</li>
                                </ul>
                                <p>
                                    To help us resolve your complaint quickly, please include your name, registered mobile number or email, your company name, the nature of the issue, and any reference or transaction number available to you.
                                </p>
                                <p>
                                    We will acknowledge your complaint within <strong>3 working days</strong> of receipt and aim to resolve it within <strong>15 working days</strong>. Where a complaint requires additional investigation, we will inform you of the reason for the delay and the expected timeline.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Level 2 — Escalation to the Grievance Officer</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    If you do not receive a response within the timelines above, or you are not satisfied with the resolution provided at Level 1, you may escalate the matter to our Grievance Officer:
                                </p>
                                <div className={styles.contactInfo}>
                                    <p><strong>Mr. Abhishek Verma</strong></p>
                                    <p>Nodal Grievance Redressal Officer</p>
                                    <p>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</p>
                                    <p>Ph.: <a href="tel:+919810174406">+91 98101 74406</a></p>
                                    <p>Email: <a href="mailto:abhishek.verma@neenvfin.com">abhishek.verma@neenvfin.com</a></p>
                                    <p>B-90, 3rd Floor, Greenwood City, Sector-45,</p>
                                    <p>Gurugram, Haryana &ndash; 122003, India</p>
                                </div>
                                <p>
                                    The Grievance Officer will review the matter independently and respond within <strong>15 working days</strong> of the escalation.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Level 3 — Escalation to the Lending Partner</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Neenv acts as a Lending Service Provider (LSP) for its regulated lending partner. Where your complaint concerns a credit facility &mdash; its sanction, pricing, servicing, or recovery &mdash; and it remains unresolved after Level 2, you may escalate it directly to the Regulated Entity (RE) that extended the facility.
                                </p>

                                <h3 className={styles.subTitle}>Grievance Redressal Details</h3>

                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">FFPL (RE)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Details</th>
                                                <td>
                                                    <p><strong>Fexprime Finance Pvt. Ltd.</strong></p>
                                                    <p>(Formerly known as Bussan Auto Finance India Pvt. Ltd.)</p>
                                                    <p>CIN: U67190DL2007FTC162475</p>
                                                    <p>Address: 2-E/8, 3rd and 4th Floor, Jhandewalan Extension, New Delhi, 110055</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Services</th>
                                                <td>NBFC</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Customer Service</th>
                                                <td>
                                                    <p>Ph.: <a href="tel:+911149580301">011 &ndash; 49580301</a></p>
                                                    <p>Email: <a href="mailto:customerservice@fexprime.com">customerservice@fexprime.com</a></p>
                                                    <p>Address: 2E/8, 4th Floor, Jhandewalan Extn., New Delhi 110055</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Principal Nodal Officer</th>
                                                <td>
                                                    <p>Mr. Vibhu Gautam</p>
                                                    <p>Ph: <a href="tel:+911143611114">011 &ndash; 4361 1114</a></p>
                                                    <p>Email: <a href="mailto:pno@fexprime.com">pno@fexprime.com</a></p>
                                                    <p>Address: 2E/8, 3rd &amp; 4th Floor, Jhandewalan Extension, New Delhi - 110055</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Grievance Redressal Officer</th>
                                                <td>
                                                    <p>Mr. Vibhu Gautam</p>
                                                    <p>Ph: <a href="tel:+911143611114">011 &ndash; 4361 1114</a></p>
                                                    <p>Email: <a href="mailto:grievanceofficer@fexprime.com">grievanceofficer@fexprime.com</a></p>
                                                    <p>Address: 2E/8, 3rd &amp; 4th Floor, Jhandewalan Extension, New Delhi - 110055</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className={styles.tableNote}>
                                    RE &ndash; Regulated Entity &nbsp;|&nbsp; LSP &ndash; Lending Service Provider
                                </p>

                                <p>
                                    The full grievance redressal disclosure published by the Regulated Entity is available at{' '}
                                    <a href="https://www.fexprime.com/Grievance-Redressal-Details" target="_blank" rel="noopener noreferrer">
                                        fexprime.com/Grievance-Redressal-Details
                                    </a>.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Level 4 — Regulatory Escalation</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    If your complaint relates to a regulated entity and remains unresolved for a period of 30 days from the date of first submission, or you are dissatisfied with the response received, you may approach the Reserve Bank of India under the Reserve Bank &ndash; Integrated Ombudsman Scheme, 2021.
                                </p>
                                <ul className={styles.list}>
                                    <li><strong>Online:</strong> <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer">cms.rbi.org.in</a></li>
                                    <li><strong>Email:</strong> <a href="mailto:CRPC@rbi.org.in">CRPC@rbi.org.in</a></li>
                                    <li><strong>Post:</strong> Centralised Receipt and Processing Centre, Reserve Bank of India, 4th Floor, Sector 17, Central Vista, Chandigarh &ndash; 160017</li>
                                </ul>
                                <p>
                                    Please note that Neenv is a technology service provider and is not itself a bank or an NBFC. Regulatory escalation under the Ombudsman Scheme applies to the regulated entity against which the complaint is made.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>6. Registered Office</h2>
                            <div className={styles.sectionContent}>
                                <div className={styles.contactInfo}>
                                    <p><strong>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</strong></p>
                                    <p>Teloz Spaces, 1st Floor, AJ House, Marol Maroshi Road,</p>
                                    <p>Marol, Andheri East, Mumbai &ndash; 400059, Maharashtra, India</p>
                                    <p>Email: <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a></p>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Record Keeping &amp; Review</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    All complaints received are logged, tracked to closure, and retained in accordance with applicable law. This policy is reviewed periodically and may be updated to reflect changes in our processes or in regulatory requirements. Any revisions will be published on this page with an updated &quot;Last updated&quot; date.
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
