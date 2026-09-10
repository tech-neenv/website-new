import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ManageCookiesButton from '@/components/CookieConsent/ManageCookiesButton';
import styles from '../privacy-policy/LegalPage.module.css';
import hub from './LegalHub.module.css';

export const metadata: Metadata = {
    title: 'Legal & Privacy | Neenv',
    description:
        'Neenv\'s legal centre — your data rights, our cookie policy, the consent notice explaining what we collect and why, and our statutory company disclosures.',
    openGraph: {
        title: 'Legal & Privacy | Neenv',
        description:
            'Neenv\'s legal centre — your data rights, our cookie policy, the consent notice explaining what we collect and why, and our statutory company disclosures.',
        url: 'https://www.neenvfin.com/legal',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/legal',
    },
};

const SECTIONS = [
    {
        id: 'data-rights',
        index: 'Section 1',
        title: 'Data Rights',
        hint: 'Access, correction, erasure, nomination, and how to raise a privacy request.',
    },
    {
        id: 'cookie-policy',
        index: 'Section 2',
        title: 'Cookie Policy',
        hint: 'What we store, which cookies are optional, and how to change your choice.',
    },
    {
        id: 'consent-notice',
        index: 'Section 3',
        title: 'Consent Notice',
        hint: 'What we collect, why, who it is shared with, and how to withdraw consent.',
    },
    {
        id: 'disclosures',
        index: 'Section 4',
        title: 'Disclosures',
        hint: 'Company identity, offices, lending partners, and our regulatory status.',
    },
];

export default function LegalPage() {
    return (
        <>
            <Header />
            <main className={styles.legalPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Legal &amp; Privacy</h1>
                        <p className={styles.lastUpdated}>Last updated: January 2026</p>
                        <p className={hub.intro}>
                            This page brings together our data rights notice, cookie policy, consent
                            notice, and statutory disclosures in one place. Our{' '}
                            <Link href="/privacy-policy">Privacy Policy</Link>,{' '}
                            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>, and{' '}
                            <Link href="/grievance-redressal">Grievance Redressal Policy</Link> remain
                            separate documents.
                        </p>
                    </div>

                    <div className={styles.content}>
                        <nav className={hub.toc} aria-label="On this page">
                            {SECTIONS.map((section) => (
                                <a key={section.id} href={`#${section.id}`} className={hub.tocLink}>
                                    <span className={hub.tocIndex}>{section.index}</span>
                                    <span className={hub.tocTitle}>{section.title}</span>
                                    <span className={hub.tocHint}>{section.hint}</span>
                                </a>
                            ))}
                        </nav>

                        {/* ============================================================
                            1. DATA RIGHTS
                        ============================================================ */}
                        <section className={`${styles.section} ${hub.anchor}`} id="data-rights">
                            <h2 className={styles.sectionTitle}>1. Data Rights</h2>
                            <div className={`${styles.sectionContent} ${hub.sectionLinks}`}>
                                <p>
                                    When you share personal data with NEENV FINANCIAL TECHNOLOGIES
                                    PRIVATE LIMITED (&quot;Neenv&quot;, &quot;we&quot;,
                                    &quot;us&quot;, or &quot;our&quot;), that data remains yours. This
                                    section explains the rights available to you and the process for
                                    exercising them. It should be read together with our{' '}
                                    <Link href="/privacy-policy">Privacy Policy</Link>, which sets out
                                    in full what we collect and how we handle it.
                                </p>

                                <h3 className={styles.subTitle}>1.1 Your rights</h3>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Right to access:</strong> obtain confirmation of
                                        whether we hold personal data about you, a summary of that
                                        data, the purposes for which it is processed, and the
                                        identities of the partners with whom it has been shared.
                                    </li>
                                    <li>
                                        <strong>Right to correction and completion:</strong> have
                                        inaccurate or misleading data corrected, and incomplete or
                                        out-of-date data completed or updated.
                                    </li>
                                    <li>
                                        <strong>Right to erasure:</strong> request deletion of your
                                        personal data where it is no longer needed for the purpose it
                                        was collected for, and where we are not required to retain it
                                        under lending, taxation, anti-money-laundering, or other
                                        applicable law. Where a legal retention obligation applies we
                                        will tell you which one, and delete the data once it expires.
                                    </li>
                                    <li>
                                        <strong>Right to withdraw consent:</strong> withdraw consent
                                        previously given, at any time and as easily as it was given.
                                        Withdrawal applies going forward and does not affect
                                        processing already carried out, or processing we must continue
                                        for a legal obligation. See Section 3.5 below.
                                    </li>
                                    <li>
                                        <strong>Right to nominate:</strong> nominate another
                                        individual to exercise these rights on your behalf in the
                                        event of your death or incapacity.
                                    </li>
                                    <li>
                                        <strong>Right of grievance redressal:</strong> raise a
                                        complaint about how we have handled your data or your request,
                                        through the process in our{' '}
                                        <Link href="/grievance-redressal">
                                            Grievance Redressal Policy
                                        </Link>
                                        .
                                    </li>
                                </ul>
                                <p>
                                    Where your data has been shared with one of our lending partners
                                    and now sits on that lender&apos;s systems as part of a credit
                                    facility, some rights may need to be exercised with the lender
                                    directly. We will tell you when that is the case and help route
                                    your request.
                                </p>

                                <h3 className={styles.subTitle}>1.2 How to submit a request</h3>
                                <p>
                                    Send your request by email to the Data Privacy contact below. To
                                    help us identify your records and respond accurately, please
                                    include:
                                </p>
                                <ul className={styles.list}>
                                    <li>your full name and the company you are associated with;</li>
                                    <li>the email address and mobile number registered with us;</li>
                                    <li>
                                        the right you wish to exercise &mdash; access, correction,
                                        erasure, withdrawal of consent, or nomination;
                                    </li>
                                    <li>
                                        a short description of your request, including any specific
                                        records or transaction references it relates to.
                                    </li>
                                </ul>
                                <p>
                                    We may ask for information reasonably necessary to verify your
                                    identity before we act on a request. This protects you: it
                                    prevents someone else obtaining or deleting your data. We do not
                                    charge a fee for exercising these rights.
                                </p>

                                <h3 className={styles.subTitle}>1.3 Our response timelines</h3>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Acknowledgement:</strong> within 3 working days of
                                        receiving your request.
                                    </li>
                                    <li>
                                        <strong>Substantive response:</strong> within 30 calendar
                                        days. If a request is complex or requires input from a lending
                                        partner, we will tell you the reason for the delay and the
                                        revised timeline before the 30 days expire.
                                    </li>
                                    <li>
                                        <strong>Grievances:</strong> resolved as early as possible and
                                        in any event no later than 90 days from the date the grievance
                                        is registered.
                                    </li>
                                </ul>
                                <p>
                                    If we decline a request in whole or in part, we will tell you why
                                    and what you can do next.
                                </p>

                                <h3 className={styles.subTitle}>1.4 Data Privacy Queries</h3>
                                <p>
                                    Privacy requests and data-related complaints are handled
                                    separately from sales and partnership enquiries. Please use the
                                    contact below rather than the general enquiry form &mdash; it
                                    reaches our Grievance Officer directly.
                                </p>
                                <div className={styles.contactInfo}>
                                    <p className={hub.calloutTitle}>
                                        Data Privacy &amp; Grievance Contact
                                    </p>
                                    <p><strong>Mr. Abhishek Verma</strong></p>
                                    <p>Nodal Grievance Redressal Officer</p>
                                    <p>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</p>
                                    <p>
                                        Email:{' '}
                                        <a href="mailto:abhishek.verma@neenvfin.com">
                                            abhishek.verma@neenvfin.com
                                        </a>
                                    </p>
                                    <p>
                                        Phone: <a href="tel:+919810174406">+91 98101 74406</a>
                                    </p>
                                    <p>B-90, 3rd Floor, Greenwood City, Sector-45,</p>
                                    <p>Gurugram, Haryana &ndash; 122003, India</p>
                                </div>
                                <p>
                                    Please mark your email subject line &quot;Data Rights
                                    Request&quot; so it is routed correctly. If you are not satisfied
                                    with the outcome, the escalation levels &mdash; including
                                    escalation to the relevant lending partner and to the appropriate
                                    regulatory authority &mdash; are set out in our{' '}
                                    <Link href="/grievance-redressal">Grievance Redressal Policy</Link>
                                    .
                                </p>
                            </div>
                        </section>

                        {/* ============================================================
                            2. COOKIE POLICY
                        ============================================================ */}
                        <section className={`${styles.section} ${hub.anchor}`} id="cookie-policy">
                            <h2 className={styles.sectionTitle}>2. Cookie Policy</h2>
                            <div className={`${styles.sectionContent} ${hub.sectionLinks}`}>
                                <h3 className={styles.subTitle}>2.1 What cookies are</h3>
                                <p>
                                    Cookies are small text files placed on your device by a website so
                                    that it can recognise your browser on a later visit. This policy
                                    also covers similar technologies such as browser local storage,
                                    which works the same way from your point of view: a small value
                                    saved in your browser and read back later.
                                </p>

                                <h3 className={styles.subTitle}>2.2 How we use them</h3>
                                <p>
                                    We keep our use of cookies deliberately minimal. We divide them
                                    into two categories, and only one of them is optional:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Strictly necessary</strong> &mdash; needed for the
                                        website to work and to remember the cookie choice you make.
                                        These are always active and cannot be switched off, because
                                        without them the site cannot function or honour your
                                        preferences.
                                    </li>
                                    <li>
                                        <strong>Analytics (optional)</strong> &mdash; used only to
                                        measure how the website is used.{' '}
                                        <strong>
                                            These are switched off by default and are not loaded at
                                            all unless you actively accept them.
                                        </strong>
                                    </li>
                                </ul>
                                <p>
                                    We do not use marketing, advertising, retargeting, or cross-site
                                    tracking cookies, and we do not sell or share data collected
                                    through cookies with advertising networks.
                                </p>

                                <h3 className={styles.subTitle}>2.3 What we store</h3>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Purpose</th>
                                                <th scope="col">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">neenv-cookie-consent</th>
                                                <td>Strictly necessary</td>
                                                <td>
                                                    Records the cookie choice you made so we do not
                                                    ask again on every page, and so analytics stays
                                                    off if you rejected it. Stored in your
                                                    browser&apos;s local storage.
                                                </td>
                                                <td>Until you clear it or change your choice</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">neenv-theme</th>
                                                <td>Strictly necessary</td>
                                                <td>
                                                    Remembers your light or dark appearance
                                                    preference. Stored in your browser&apos;s local
                                                    storage; never sent to us.
                                                </td>
                                                <td>Until you clear it</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">_ga</th>
                                                <td>Analytics &mdash; optional</td>
                                                <td>
                                                    Google Analytics: distinguishes one browser from
                                                    another so repeat visits are not double-counted.
                                                </td>
                                                <td>2 years</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">_ga_G-9WSJRRED1X</th>
                                                <td>Analytics &mdash; optional</td>
                                                <td>
                                                    Google Analytics: maintains the session state for
                                                    our property.
                                                </td>
                                                <td>2 years</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">_gid</th>
                                                <td>Analytics &mdash; optional</td>
                                                <td>
                                                    Google Analytics: distinguishes browsers for
                                                    day-level reporting.
                                                </td>
                                                <td>24 hours</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">_gat</th>
                                                <td>Analytics &mdash; optional</td>
                                                <td>
                                                    Google Analytics: throttles the rate of requests
                                                    sent to Google.
                                                </td>
                                                <td>1 minute</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className={styles.tableNote}>
                                    The four analytics entries are set by Google Analytics and appear
                                    only after you accept analytics cookies.
                                </p>

                                <h3 className={styles.subTitle}>2.4 Google Analytics</h3>
                                <p>
                                    Where you allow it, we use Google Analytics (a service provided by
                                    Google) to understand which pages visitors find useful, how people
                                    arrive at our site, and how it performs on different devices. It
                                    tells us things like the number of visits to a product page or the
                                    typical journey through the site.
                                </p>
                                <p>
                                    <strong>
                                        The Google Analytics tag is not loaded when you first arrive.
                                    </strong>{' '}
                                    No analytics script is placed on the page, no request is made to
                                    Google, and no analytics cookie is set, until you have chosen
                                    &quot;Accept all&quot; or switched analytics on under &quot;Manage
                                    preferences&quot;. If you reject analytics, or simply do not
                                    respond to the banner, the tag never initialises. Where we do run
                                    it, IP anonymisation is enabled and Google advertising features
                                    are disabled.
                                </p>
                                <p>
                                    Analytics data is used in aggregate to improve the website. It is
                                    never used to assess your creditworthiness, and it does not feed
                                    into any financing decision.
                                </p>

                                <h3 className={styles.subTitle}>
                                    2.5 Managing or withdrawing your consent
                                </h3>
                                <p>
                                    You can change your mind at any time, and withdrawing is as simple
                                    as accepting. Use the button below to reopen the preferences
                                    panel:
                                </p>
                                <ManageCookiesButton />
                                <p>
                                    When you withdraw analytics consent, the Google Analytics tag is
                                    disabled immediately and we clear the analytics cookies already
                                    set in your browser &mdash; you do not need to reload the page.
                                    You can also delete cookies and block them entirely through your
                                    browser settings; blocking strictly necessary storage may mean the
                                    site cannot remember your cookie choice or appearance preference.
                                </p>
                            </div>
                        </section>

                        {/* ============================================================
                            3. CONSENT NOTICE
                        ============================================================ */}
                        <section className={`${styles.section} ${hub.anchor}`} id="consent-notice">
                            <h2 className={styles.sectionTitle}>3. Consent Notice</h2>
                            <div className={`${styles.sectionContent} ${hub.sectionLinks}`}>
                                <p>
                                    This is a plain-language summary of what we collect, why we
                                    collect it, and who it goes to. It is written to be read on its
                                    own; the full detail is in our{' '}
                                    <Link href="/privacy-policy">Privacy Policy</Link>.
                                </p>

                                <h3 className={styles.subTitle}>3.1 Why we collect personal data</h3>
                                <p>
                                    Neenv operates a technology platform that connects businesses in a
                                    supply chain with regulated financial institutions that provide
                                    credit. We cannot introduce you to a lender, or help a lender
                                    assess an application, without information about you and your
                                    business. We ask only for what a purpose actually requires, and we
                                    stop using it once that purpose is met.
                                </p>

                                <h3 className={styles.subTitle}>
                                    3.2 What we collect and what it is used for
                                </h3>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col">What we collect</th>
                                                <th scope="col">Why we collect it</th>
                                                <th scope="col">Who it may be shared with</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Contact details</th>
                                                <td>
                                                    Name, business email, phone number, company name
                                                    and role &mdash; so we can respond to your
                                                    enquiry, identify your records, and keep you
                                                    informed about an application.
                                                </td>
                                                <td>
                                                    Our lending partner, where you ask us to take an
                                                    application forward.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Business &amp; KYC details</th>
                                                <td>
                                                    GST number, PAN, CIN, registration documents and
                                                    identity verification &mdash; to confirm the
                                                    business exists, that you are authorised to act
                                                    for it, and to meet the lender&apos;s statutory
                                                    KYC and anti-money-laundering obligations.
                                                </td>
                                                <td>
                                                    Lending partner; KYC and identity verification
                                                    vendors acting on our or the lender&apos;s
                                                    instructions.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Financial &amp; transaction data</th>
                                                <td>
                                                    Bank account details, invoices, purchase orders
                                                    and transaction history &mdash; to assess a
                                                    financing request, disburse funds, and service the
                                                    facility.
                                                </td>
                                                <td>
                                                    Lending partner; the brand or corporate anchor in
                                                    your supply chain, where the facility depends on
                                                    that relationship.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Credit information</th>
                                                <td>
                                                    Credit history and bureau records &mdash; so the
                                                    lender can assess creditworthiness and report the
                                                    facility as required.
                                                </td>
                                                <td>
                                                    Credit information companies (credit bureaus);
                                                    lending partner.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Website &amp; technical data</th>
                                                <td>
                                                    IP address, browser and device type, and pages
                                                    visited &mdash; to keep the site secure and, only
                                                    where you have allowed analytics cookies, to
                                                    understand how the site is used.
                                                </td>
                                                <td>
                                                    Google Analytics, and only after you accept
                                                    analytics cookies (see Section 2).
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    We may also be required to disclose information to regulatory
                                    authorities, courts, or law enforcement where the law obliges us
                                    to. We do not sell your personal data.
                                </p>

                                <h3 className={styles.subTitle}>
                                    3.3 The purposes we process it for
                                </h3>
                                <ul className={styles.list}>
                                    <li>responding to your enquiry and contacting you about it;</li>
                                    <li>
                                        assessing, processing, and servicing a financing application
                                        through our lending partner;
                                    </li>
                                    <li>
                                        verifying identity and completing KYC, anti-money-laundering,
                                        and fraud prevention checks;
                                    </li>
                                    <li>
                                        operating, securing, and maintaining the platform and this
                                        website;
                                    </li>
                                    <li>
                                        meeting our legal, regulatory, tax, and record-keeping
                                        obligations;
                                    </li>
                                    <li>
                                        sending you updates and promotional material about our
                                        services &mdash; only where you have separately opted in;
                                    </li>
                                    <li>
                                        measuring and improving how this website works &mdash; only
                                        where you have accepted analytics cookies.
                                    </li>
                                </ul>

                                <h3 className={styles.subTitle}>3.4 How consent is obtained</h3>
                                <p>
                                    Where the law requires your consent, we ask for it before we
                                    collect or use the data &mdash; clearly, in plain language, and as
                                    a specific choice rather than a condition buried in other terms:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Enquiry and application forms</strong> &mdash; the
                                        enquiry form on our <Link href="/contact">Contact Us</Link>{' '}
                                        page and the partner application form on{' '}
                                        <Link href="/become-partner-with-us">Become a Partner</Link>{' '}
                                        each carry a consent statement referring to this notice and
                                        our <Link href="/privacy-policy">Privacy Policy</Link>. You
                                        submit the form only if you agree to it.
                                    </li>
                                    <li>
                                        <strong>Cookies</strong> &mdash; through the consent banner
                                        described in Section 2, with optional categories off until you
                                        turn them on.
                                    </li>
                                    <li>
                                        <strong>Onboarding and KYC</strong> &mdash; consent for
                                        identity verification, bureau checks, and sharing with the
                                        lending partner is taken separately at the point the
                                        application is made, alongside the lender&apos;s own consent
                                        requirements.
                                    </li>
                                </ul>
                                <p>
                                    Some processing does not rest on consent &mdash; for example,
                                    records we are legally required to retain, or steps necessary to
                                    perform a contract you have entered into. We identify that
                                    processing in our{' '}
                                    <Link href="/privacy-policy">Privacy Policy</Link>.
                                </p>

                                <h3 className={styles.subTitle}>3.5 Withdrawing your consent</h3>
                                <p>
                                    You may withdraw your consent at any time, in whole or for a
                                    specific purpose, and the method is as straightforward as the one
                                    used to give it:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Cookies:</strong> use the &quot;Manage cookie
                                        preferences&quot; button in Section 2 above.
                                    </li>
                                    <li>
                                        <strong>Marketing communications:</strong> use the unsubscribe
                                        link in any message, or email us.
                                    </li>
                                    <li>
                                        <strong>All other processing:</strong> email the Data Privacy
                                        contact in Section 1.4 stating what you wish to withdraw.
                                    </li>
                                </ul>
                                <p>
                                    Withdrawal takes effect going forward. It does not make earlier
                                    processing unlawful, and it does not affect data we are required
                                    to retain by law or that a lending partner must keep in connection
                                    with an existing credit facility. Where withdrawing consent means
                                    we can no longer provide part of a service, we will tell you
                                    before acting on your request.
                                </p>
                            </div>
                        </section>

                        {/* ============================================================
                            4. DISCLOSURES
                        ============================================================ */}
                        <section className={`${styles.section} ${hub.anchor}`} id="disclosures">
                            <h2 className={styles.sectionTitle}>4. Disclosures</h2>
                            <div className={`${styles.sectionContent} ${hub.sectionLinks}`}>
                                <h3 className={styles.subTitle}>4.1 Company details</h3>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Company name</th>
                                                <td>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</td>
                                            </tr>
                                            {/* TODO: replace with the company CIN once confirmed from the MCA record */}
                                            <tr>
                                                <th scope="row">CIN</th>
                                                <td className={hub.pending}>
                                                    To be updated on confirmation of the MCA record
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Registered office</th>
                                                <td>
                                                    <p>
                                                        Teloz Spaces, 1st Floor, AJ House, Marol
                                                        Maroshi Road,
                                                    </p>
                                                    <p>
                                                        Marol, Andheri East, Mumbai, Maharashtra
                                                        &ndash; 400059, India
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Corporate office</th>
                                                <td>
                                                    <p>B-90, 3rd Floor, Greenwood City, Sector-45,</p>
                                                    <p>Gurugram, Haryana &ndash; 122003, India</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Contact</th>
                                                <td>
                                                    <p>
                                                        Phone:{' '}
                                                        <a href="tel:+917738735740">
                                                            +91 77387 35740
                                                        </a>
                                                    </p>
                                                    <p>
                                                        Email:{' '}
                                                        <a href="mailto:Info@neenvfin.com">
                                                            Info@neenvfin.com
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Website</th>
                                                <td>www.neenvfin.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className={styles.subTitle}>4.2 Our regulatory status</h3>
                                <div className={hub.callout}>
                                    <p>
                                        <strong>
                                            Neenv is a technology service provider. It is not a bank
                                            and not an NBFC.
                                        </strong>
                                    </p>
                                    <p>
                                        Neenv is not registered with the Reserve Bank of India as a
                                        bank or a non-banking financial company, does not hold a
                                        lending licence, does not lend from its own books, and does
                                        not accept deposits from the public.
                                    </p>
                                </div>
                                <p>
                                    Neenv operates a technology platform and acts as a Lending Service
                                    Provider (LSP) for its regulated lending partner. All credit
                                    facilities originated through the platform are sanctioned,
                                    disbursed, and held by the Regulated Entity (RE) named below.
                                    Decisions on eligibility, sanction, interest rate, fees, and
                                    recovery are made by that Regulated Entity in accordance with its
                                    own policies and its obligations under RBI regulation.
                                </p>

                                <h3 className={styles.subTitle}>4.3 Lending partner</h3>
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
                                                <th scope="row">Entity</th>
                                                <td>
                                                    <p><strong>Fexprime Finance Pvt. Ltd.</strong></p>
                                                    <p>
                                                        (Formerly known as Bussan Auto Finance India
                                                        Pvt. Ltd.)
                                                    </p>
                                                    <p>CIN: U66190HR2025PTC135907</p>
                                                    <p>
                                                        Address: 2-E/8, 3rd and 4th Floor, Jhandewalan
                                                        Extension, New Delhi, 110055
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Role</th>
                                                <td>
                                                    NBFC &mdash; Regulated Entity (RE) and lender of
                                                    record
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Customer service</th>
                                                <td>
                                                    <p>
                                                        Ph.:{' '}
                                                        <a href="tel:+911149580301">
                                                            011 &ndash; 49580301
                                                        </a>
                                                    </p>
                                                    <p>
                                                        Email:{' '}
                                                        <a href="mailto:customerservice@fexprime.com">
                                                            customerservice@fexprime.com
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Grievance Redressal Officer</th>
                                                <td>
                                                    <p>Mr. Vibhu Gautam</p>
                                                    <p>
                                                        Ph:{' '}
                                                        <a href="tel:+911143611114">
                                                            011 &ndash; 4361 1114
                                                        </a>
                                                    </p>
                                                    <p>
                                                        Email:{' '}
                                                        <a href="mailto:grievanceofficer@fexprime.com">
                                                            grievanceofficer@fexprime.com
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className={styles.tableNote}>
                                    RE &ndash; Regulated Entity &nbsp;|&nbsp; LSP &ndash; Lending
                                    Service Provider
                                </p>
                                <p>
                                    The full grievance redressal disclosure published by the Regulated
                                    Entity, including its Principal Nodal Officer, is available at{' '}
                                    <a
                                        href="https://www.fexprime.com/Grievance-Redressal-Details"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        fexprime.com/Grievance-Redressal-Details
                                    </a>
                                    , and is also reproduced in our{' '}
                                    <Link href="/grievance-redressal">Grievance Redressal Policy</Link>
                                    .
                                </p>

                                <h3 className={styles.subTitle}>
                                    4.4 Grievance Officer and escalation
                                </h3>
                                <div className={styles.contactInfo}>
                                    <p><strong>Mr. Abhishek Verma</strong></p>
                                    <p>Nodal Grievance Redressal Officer</p>
                                    <p>NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED</p>
                                    <p>
                                        Email:{' '}
                                        <a href="mailto:abhishek.verma@neenvfin.com">
                                            abhishek.verma@neenvfin.com
                                        </a>
                                    </p>
                                    <p>
                                        Phone: <a href="tel:+919810174406">+91 98101 74406</a>
                                    </p>
                                    <p>
                                        B-90, 3rd Floor, Greenwood City, Sector-45, Gurugram, Haryana
                                        &ndash; 122003, India
                                    </p>
                                </div>
                                <p>
                                    Complaints may also be registered at{' '}
                                    <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a> or
                                    through the enquiry form on our{' '}
                                    <Link href="/contact">Contact Us</Link> page. The full four-level
                                    escalation path &mdash; from first complaint, through our
                                    Grievance Officer and the lending partner, to the Reserve Bank of
                                    India under the Reserve Bank &ndash; Integrated Ombudsman Scheme,
                                    2021 &mdash; together with the applicable turnaround times, is set
                                    out in our{' '}
                                    <Link href="/grievance-redressal">Grievance Redressal Policy</Link>
                                    . Regulatory escalation under the Ombudsman Scheme applies to the
                                    regulated entity against which the complaint is made, not to
                                    Neenv.
                                </p>

                                <h3 className={styles.subTitle}>4.5 Other disclosures</h3>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>No guarantee of credit:</strong> submitting an enquiry
                                        or application through this website does not amount to a
                                        sanction. All facilities are subject to the lending
                                        partner&apos;s credit assessment, documentation, and approval.
                                    </li>
                                    <li>
                                        <strong>No deposits:</strong> Neenv does not solicit or accept
                                        deposits or investments from the public in any form.
                                    </li>
                                    <li>
                                        <strong>Pricing and charges:</strong> interest rates, fees,
                                        and all other charges applicable to a facility are set by the
                                        lending partner and disclosed to you in the loan documentation
                                        before you accept the facility.
                                    </li>
                                    <li>
                                        <strong>Third-party links:</strong> this website links to
                                        websites operated by our lending partner and by regulatory
                                        bodies. Those sites are governed by their own terms and
                                        privacy policies, over which we have no control.
                                    </li>
                                    <li>
                                        <strong>Trademarks:</strong> &quot;Neenv&quot; and the Neenv
                                        logo are marks of NEENV FINANCIAL TECHNOLOGIES PRIVATE
                                        LIMITED. Other names appearing on this website belong to their
                                        respective owners.
                                    </li>
                                    <li>
                                        <strong>Governing terms:</strong> use of this website is
                                        governed by our{' '}
                                        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{' '}
                                        and our <Link href="/privacy-policy">Privacy Policy</Link>.
                                    </li>
                                </ul>

                                <h3 className={styles.subTitle}>4.6 Updates to this page</h3>
                                <p>
                                    We review this page periodically and may update it to reflect
                                    changes in our processes, our partners, or applicable law. Any
                                    revision will be published here with an updated &quot;Last
                                    updated&quot; date.
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
