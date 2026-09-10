import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../privacy-policy/LegalPage.module.css';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Neenv',
    description:
        'Terms and conditions governing the use of the Neenv channel finance platform, operated by Neenv Financial Technologies Private Limited.',
    openGraph: {
        title: 'Terms and Conditions | Neenv',
        description:
            'Terms and conditions governing the use of the Neenv channel finance platform, operated by Neenv Financial Technologies Private Limited.',
        url: 'https://www.neenvfin.com/terms-and-conditions',
        siteName: 'Neenv',
        type: 'website',
    },
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
                        <h1 className={styles.title}>Terms &amp; Conditions</h1>
                        <p className={styles.lastUpdated}>Last updated: September 2026</p>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. About These Terms</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Neenv is operated by NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED, a company incorporated in India (CIN: U66190HR2025PTC135907) with its registered office at B-90, 3rd Floor, Greenwood City, Sector-45, Gurugram, Haryana &ndash; 122003. In these Terms we refer to it as &quot;Neenv&quot;, &quot;we&quot; or &quot;us&quot;, and to you as &quot;you&quot;.
                                </p>
                                <p>
                                    These Terms set out the basis on which you may use www.neenvfin.com and any related portal, application or interface we operate (together, the &quot;Platform&quot;). They work alongside our Privacy Policy and our Grievance Redressal Policy, both of which form part of your agreement with us.
                                </p>
                                <p>
                                    This is an electronic record under the Information Technology Act, 2000 and the rules made under it. It does not need a physical or digital signature to be effective.
                                </p>
                                <p>
                                    Please read these Terms before you use the Platform. If anything here is unclear, write to us before you proceed.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. What Neenv Does &mdash; and What It Does Not Do</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Neenv builds and runs technology for supply chain and channel finance. We work with brands and corporates (each an &quot;Anchor&quot;) to make credit available to the dealers, distributors, retailers and suppliers in their networks. The products supported on the Platform include channel financing, working capital loans, invoice factoring and supplier financing.
                                </p>
                                <p>
                                    Around each facility we handle origination, onboarding, documentation support, servicing, monitoring and reporting.
                                </p>
                                <p>
                                    <strong>What we do not do is lend.</strong> Neenv is not a bank and is not a non-banking financial company, and it does not extend credit from its own balance sheet. Every facility is provided by a regulated lender we work with &mdash; referred to in these Terms as a &quot;Lending Partner&quot; &mdash; under that lender&apos;s own credit policy.
                                </p>
                                <p>
                                    This distinction matters in practice. Whether your application is approved or declined, the amount offered, the rate and fees, the security sought, the timing of disbursal and any step taken to recover an outstanding amount are all decisions of the Lending Partner. Neenv can explain and assist, but it cannot make those decisions for a lender or reverse them.
                                </p>
                                <p>
                                    Creating an account or submitting an application does not oblige Neenv or any Lending Partner to offer you a facility, and does not mean a transaction will go ahead.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Words We Use</h2>
                            <div className={styles.sectionContent}>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Anchor</strong> &mdash; a brand, corporate or principal whose dealer, distribution or supplier network is served through the Platform.
                                    </li>
                                    <li>
                                        <strong>Lending Partner</strong> &mdash; a bank, non-banking financial company, small finance bank, fund or other regulated credit provider that funds facilities originated or serviced through the Platform.
                                    </li>
                                    <li>
                                        <strong>Facility</strong> &mdash; any loan, limit, advance or other credit made available to you by a Lending Partner in connection with the Platform.
                                    </li>
                                    <li>
                                        <strong>Facility Documents</strong> &mdash; the sanction letter, agreement, mandates, security documents and anything else you sign with a Lending Partner for a Facility.
                                    </li>
                                    <li>
                                        <strong>Your Information</strong> &mdash; anything you submit to the Platform, and anything generated about you through your use of it.
                                    </li>
                                </ul>
                                <p>
                                    Where these Terms and any Facility Documents differ, the Facility Documents govern the Facility itself, and these Terms continue to govern your use of the Platform.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Who Can Use the Platform</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    The Platform is built for businesses operating in India. To use it you must be a validly constituted entity or a person carrying on business in India, capable of entering into a binding contract under the Indian Contract Act, 1872, and in compliance with the laws that apply to your business.
                                </p>
                                <p>
                                    If you are acting for a company, firm or other organisation, you confirm that you have authority to accept these Terms on its behalf. In that case &quot;you&quot; means that organisation as well as you personally.
                                </p>
                                <p>
                                    Do not use the Platform if any law, order or direction prevents you from doing so, or if we have previously closed or suspended your access.
                                </p>
                                <p>
                                    By accessing, registering on or continuing to use the Platform, you accept these Terms. If you do not accept them, please stop using the Platform.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Your Account</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Some parts of the Platform require an account. Please give us information that is true, complete and up to date, and tell us when it changes. We may verify who you are, confirm your business details, and check that the people acting for you are authorised to do so.
                                </p>
                                <p>
                                    Keep your login details to yourself. You are responsible for what happens under your account. If you think someone else has gained access, tell us at Info@neenvfin.com straight away.
                                </p>
                                <p>
                                    We may decline a registration, or suspend or close an account, where information is inaccurate or incomplete, where we cannot complete verification, or where a Lending Partner, a regulator or the law requires it.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>6. Onboarding, KYC and Verification</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Know Your Customer and anti-money laundering checks apply to every Facility arranged through the Platform. You agree to provide the identity, constitution, address, banking, tax, financial and business documents we or a Lending Partner ask for, and to go through re-verification from time to time.
                                </p>
                                <p>
                                    These checks are carried out to the standard each Lending Partner sets and to the standard the law and regulatory directions require. We may use authorised third-party providers to help with verification.
                                </p>
                                <p>
                                    If checks cannot be completed, or if a document turns out to be inaccurate or falsified, an application may be declined, and a Lending Partner may suspend or recall a Facility already in place.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>7. Permissions You Give Us</h2>
                            <div className={styles.sectionContent}>
                                <p>When you use the Platform, you agree that:</p>
                                <ul className={styles.list}>
                                    <li>we may share Your Information with Lending Partners, Anchors, credit information companies, verification and service providers, and regulators, so far as needed to run the Platform or to meet a legal obligation;</li>
                                    <li>we and Lending Partners may obtain your credit information from credit information companies registered under the Credit Information Companies (Regulation) Act, 2005, and may report your Facility and repayment conduct to them;</li>
                                    <li>we, Lending Partners and their authorised representatives may contact you by phone, SMS, email, WhatsApp or other electronic means about your application, Facility or account, even if your number is listed on a do-not-disturb or similar register, because these are service communications rather than marketing;</li>
                                    <li>we may run identity, address, business, banking, tax and credit bureau checks on you and on the people authorised to act for you; and</li>
                                    <li>we may keep records of your application and account for as long as the law requires.</li>
                                </ul>
                                <p>
                                    Where a permission is not required by law and is not needed to service a live Facility, you can withdraw it by writing to us. We will tell you what withdrawing it means for your access to the Platform before we act on the request.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>8. How Financing Works Here</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Facilities on the Platform are usually arranged inside an Anchor-led programme. Your eligibility, and the terms available to you, may depend on your trading relationship with the Anchor and on the programme that Anchor has agreed with a Lending Partner.
                                </p>
                                <p>
                                    When you apply, we present your application to one or more Lending Partners. If a Lending Partner is willing to proceed, it issues the sanction and sets the amount, tenor, rate, fees, security and every other commercial term. Those terms live in the Facility Documents, which are between you and that Lending Partner.
                                </p>
                                <p>
                                    Facility Documents may be signed electronically. You accept that records of that signing &mdash; electronic and digital signatures, one-time passwords, timestamps and audit logs held by us or our service providers &mdash; are valid evidence that you agreed to them.
                                </p>
                                <p>
                                    We may act as servicing, collection and monitoring agent for a Lending Partner. Where we collect money for a Lending Partner, we do so as its agent, and paying us in line with the instructions given to you settles your obligation to that extent.
                                </p>
                                <p>
                                    If your concern is about how a Facility was sanctioned, priced, serviced or recovered, it may need to be taken up with the Lending Partner. Where that is the case we will say so and help route it, as set out in our Grievance Redressal Policy.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>9. While a Facility Is Live</h2>
                            <div className={styles.sectionContent}>
                                <p>For as long as any Facility remains outstanding, you agree to:</p>
                                <ul className={styles.list}>
                                    <li>meet the Facility Documents and repay everything due on time;</li>
                                    <li>use the money only for the business purpose it was sanctioned for;</li>
                                    <li>share financial statements, GST returns, bank statements, stock and receivable statements and other information we or the Lending Partner reasonably ask for;</li>
                                    <li>tell us and the Lending Partner promptly if there is a material change in your ownership, management, constitution, business, banking arrangements or ability to repay; and</li>
                                    <li>allow reasonable verification, inspection and monitoring as provided in the Facility Documents.</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>10. Using the Platform Responsibly</h2>
                            <div className={styles.sectionContent}>
                                <p>Use the Platform only for lawful business purposes. You must not:</p>
                                <ul className={styles.list}>
                                    <li>submit anything false, misleading or forged, or anything you are not entitled to share;</li>
                                    <li>use the Platform to commit or assist fraud, money laundering, terrorist financing or any other offence;</li>
                                    <li>pretend to be someone else or misstate your connection with any person or business;</li>
                                    <li>try to access parts of the Platform, systems or other users&apos; accounts without permission;</li>
                                    <li>introduce a virus or other harmful code, or interfere with how the Platform runs;</li>
                                    <li>copy, scrape, reverse engineer, resell or build something derived from the Platform; or</li>
                                    <li>do anything that breaks the law or infringes someone else&apos;s rights.</li>
                                </ul>
                                <p>
                                    You are responsible for the accuracy, completeness and legality of everything you submit.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>11. Charges and Taxes</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We do not currently charge Users a separate fee for access to the Platform. If we introduce a platform, service or facilitation fee for something, we will tell you what it is before it becomes payable.
                                </p>
                                <p>
                                    Interest, processing fees, documentation charges, penal charges and everything else connected to a Facility are charged by the Lending Partner and are set out in your Facility Documents, not here.
                                </p>
                                <p>
                                    Amounts payable to us are exclusive of goods and services tax and other applicable taxes, which you pay in addition, subject to any deduction the law requires you to make.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>12. Your Information and How We Handle It</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Your Information stays yours. You give us permission to host, store, process, transmit and analyse it so that we can run the Platform, meet our legal and regulatory obligations, and improve what we build. We do not sell it.
                                </p>
                                <p>
                                    We may produce aggregated or anonymised insights from activity on the Platform &mdash; for analytics, risk modelling and product development &mdash; provided those insights do not identify you.
                                </p>
                                <p>
                                    Personal data is handled in line with our Privacy Policy and the Digital Personal Data Protection Act, 2023. Information relating to users in India is hosted on servers in India, consistent with applicable localisation requirements. If a transfer outside India is ever needed, we will carry it out as the law permits.
                                </p>
                                <p>
                                    Subject to law, you can ask us for access to your personal data, ask us to correct or erase it, and nominate someone to exercise those rights if you die or become incapacitated. Write to Info@neenvfin.com and we will deal with the request through the process in our Grievance Redressal Policy.
                                </p>
                                <p>
                                    We use reasonable security practices to protect what is in our control. No system is completely secure, and we cannot promise absolute security.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>13. Confidentiality</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Each of us will keep the other&apos;s non-public information confidential and use it only for what these Terms contemplate.
                                </p>
                                <p>
                                    This does not apply to information that is already public through no fault of the receiving party, was lawfully known beforehand, was developed independently, or has to be disclosed to a Lending Partner, a court, a regulator or under the law.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>14. What Belongs to Neenv</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    The Platform &mdash; its software, code, design, interfaces, workflows, models, text, graphics, logos and the Neenv name and marks &mdash; belongs to us or is licensed to us, and is protected by intellectual property law.
                                </p>
                                <p>
                                    We give you a limited, non-exclusive, non-transferable and revocable right to use the Platform for your own business. Nothing more is granted, expressly or by implication. Your own brand, content and intellectual property remain yours.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>15. Services Run by Others</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    The Platform connects to services operated by other organisations &mdash; Lending Partners, credit information companies, payment and mandate providers, verification agencies and analytics tools among them. Those services have their own terms and privacy policies, and you should read them.
                                </p>
                                <p>
                                    We do not control those services and are not responsible for their content, availability or practices. A link is not an endorsement.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>16. What You Confirm to Us</h2>
                            <div className={styles.sectionContent}>
                                <p>Each time you use the Platform, you confirm that:</p>
                                <ul className={styles.list}>
                                    <li>you are validly constituted and have the authority to use the Platform and to take any Facility you apply for;</li>
                                    <li>everything you have given us is true, accurate, complete and not misleading;</li>
                                    <li>you are not in default under any borrowing, and no insolvency or winding-up proceeding is running against you, other than what you have disclosed;</li>
                                    <li>you comply with the laws that apply to you, including the Prevention of Money Laundering Act, 2002 and applicable tax and foreign exchange law; and</li>
                                    <li>the funds involved in your transactions come from lawful sources.</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>17. What We Do Not Promise</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    The Platform is provided as it is and as available. So far as the law allows, we exclude all warranties that are not written into these Terms, including implied warranties of merchantability, fitness for a particular purpose and non-infringement.
                                </p>
                                <p>
                                    We do not promise that the Platform will always be available, uninterrupted or free of errors, and we may take it down for maintenance or for reasons outside our control.
                                </p>
                                <p>
                                    Anything published on the Platform is general information. It is not financial, legal, tax or investment advice, and it is not an offer or a commitment to lend.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>18. Limits on Our Liability</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    So far as the law allows, we are not liable for indirect, incidental, special, punitive or consequential loss, or for loss of profit, revenue, business, goodwill, opportunity or data, arising from your use of the Platform.
                                </p>
                                <p>
                                    Our total liability connected with these Terms will not exceed the fees, if any, that we received from you in the twelve months before the event that gave rise to the claim.
                                </p>
                                <p>
                                    We are not answerable for what a Lending Partner or an Anchor does or does not do &mdash; including a decision to decline, price, delay, suspend or recall a Facility.
                                </p>
                                <p>
                                    Nothing in this section limits liability for fraud or wilful misconduct, or any liability that cannot be limited under Indian law.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>19. Your Indemnity to Us</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    You agree to cover Neenv, its directors, officers, employees and agents against any claim, loss, liability, cost or expense, including reasonable legal fees, that arises from your breach of these Terms, your breach of any law or third-party right, inaccurate information you have given us, or fraud or wilful misconduct on your part.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>20. Suspending or Closing Access</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We may suspend or end your access to the Platform, in whole or in part, where we reasonably believe you have breached these Terms, where we detect suspected fraud or unlawful activity, where a Lending Partner, a regulator or the law requires it, or where your account has been dormant for a long period. We will give notice where it is reasonable and lawful to do so.
                                </p>
                                <p>
                                    You can stop using the Platform whenever you like, and can ask us to close your account by writing to Info@neenvfin.com.
                                </p>
                                <p>
                                    Closing Platform access does not close a Facility. Your obligations under the Facility Documents continue until they are fully discharged. The sections on confidentiality, intellectual property, disclaimers, liability, indemnity, governing law and disputes survive after access ends.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>21. If Something Goes Wrong</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    If you are unhappy with the Platform or with the service you have received, please raise it with us. Our Grievance Redressal Policy sets out the channels available to you, how quickly we will acknowledge and respond, and how to escalate to our Nodal Grievance Redressal Officer if you are not satisfied.
                                </p>
                                <p>
                                    You can write to Info@neenvfin.com or use the enquiry form on our Contact Us page.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>22. Changes to These Terms</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    We may update these Terms as our services, our business or the law changes. The current version always sits on this page with the date it took effect.
                                </p>
                                <p>
                                    If you keep using the Platform after an update takes effect, you accept the updated Terms. It is worth checking this page from time to time.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>23. Other Points Worth Knowing</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    <strong>If part of this is unenforceable.</strong> That part is narrowed as little as necessary, or removed, and the rest stays in force.
                                </p>
                                <p>
                                    <strong>If we do not enforce something immediately.</strong> Waiting to exercise a right does not mean we have given it up.
                                </p>
                                <p>
                                    <strong>Transferring this agreement.</strong> You cannot transfer your rights or obligations without our written consent. We may transfer ours to a group company or as part of a reorganisation, merger or transfer of business.
                                </p>
                                <p>
                                    <strong>Events beyond control.</strong> We are not liable for delay or failure caused by something outside our reasonable control &mdash; natural events, epidemic, war, civil unrest, strikes, failure of power or telecommunications, cyber attack, or a change in law or regulatory direction.
                                </p>
                                <p>
                                    <strong>Notices.</strong> We may contact you at the email address or mobile number on your account. Notices to us should go to Info@neenvfin.com or to our registered office.
                                </p>
                                <p>
                                    <strong>Our relationship.</strong> Nothing here makes us partners, a joint venture, an agency or an employment relationship &mdash; except where we expressly act as servicing or collection agent for a Lending Partner.
                                </p>
                                <p>
                                    <strong>The whole agreement.</strong> These Terms, with the Privacy Policy, the Grievance Redressal Policy and any product-specific terms, are the entire agreement between you and Neenv about the Platform.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>24. Governing Law and Disputes</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    Indian law governs these Terms and any dispute arising from them.
                                </p>
                                <p>
                                    If a dispute arises, we would like the chance to resolve it with you directly first, and ask that you raise it through our grievance process. If it cannot be settled that way, it will be referred to arbitration under the Arbitration and Conciliation Act, 1996, before a sole arbitrator appointed by agreement between us. The seat and venue will be Mumbai, Maharashtra, proceedings will be in English, and the award will be final and binding.
                                </p>
                                <p>
                                    Subject to that, the courts at Mumbai, Maharashtra have exclusive jurisdiction.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>25. How to Reach Us</h2>
                            <div className={styles.sectionContent}>
                                <p>
                                    For anything relating to these Terms, contact us at:
                                </p>
                                <div className={styles.contactInfo}>
                                    <p><strong>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</strong></p>
                                    <p>Registered Office: B-90, 3rd Floor, Greenwood City, Sector-45, Gurugram, Haryana &ndash; 122003</p>
                                    <p>Corporate Office: Teloz Spaces, 1st Floor, AJ House, Marol Maroshi Road, Marol, Andheri East, Mumbai, Maharashtra &ndash; 400059</p>
                                    <p>Email: <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a></p>
                                    <p>Phone: <a href="tel:+917738735740">+91 77387 35740</a></p>
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
