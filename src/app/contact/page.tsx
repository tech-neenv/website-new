'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import ConsentCheckbox from '@/components/forms/ConsentCheckbox';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './ContactPage.module.css';

type FormData = {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    companyType: string;
    message: string;
};

const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyType: '',
    message: '',
};

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // DPDP consent — unticked by default; the form cannot be submitted without it.
    const [hasConsented, setHasConsented] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    // Recorded so we can evidence that consent was validly obtained.
                    consent: {
                        given: hasConsented,
                        statement:
                            'I consent to Neenv collecting and processing my data as per the Privacy Policy',
                        timestamp: new Date().toISOString(),
                    },
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setIsSubmitted(true);
            setHasConsented(false);
        } catch (error) {
            console.error('Submit error:', error);
            alert('Something went wrong. Please try again or email us directly at Info@neenvfin.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className={styles.contactPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.subtitle}>
                            Have questions about our supply chain financing solutions? We&apos;re here to help your business grow.
                        </p>
                    </div>

                    <div className={styles.content}>
                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h2 className={styles.infoTitle}>Get in Touch</h2>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Mail size={20} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:info@neenvfin.com">info@neenvfin.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Phone size={20} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Phone</h4>
                                    <p>
                                        <a href="tel:+917738735740">+91 77387 35740</a>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <MapPin size={20} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Office</h4>
                                    <p>Teloz spaces - 1st floor, AJ House, Marol Maroshi Road, Marol, Andheri East, Mumbai - 400059</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formCard}>
                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <div className={styles.successIcon}>
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3>Thank You!</h3>
                                    <p>
                                        We&apos;ve received your message and will get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h2 className={styles.formTitle}>Send us a Message</h2>
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        {/* Name & Email */}
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="name" className={styles.label}>
                                                    Name<span className={styles.required}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className={styles.input}
                                                    placeholder="Rajesh Sharma"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="email" className={styles.label}>
                                                    Email<span className={styles.required}>*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className={styles.input}
                                                    placeholder="rajesh@company.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Phone & Company */}
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone" className={styles.label}>
                                                    Phone<span className={styles.required}>*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className={styles.input}
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="companyName" className={styles.label}>
                                                    Company<span className={styles.required}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    name="companyName"
                                                    className={styles.input}
                                                    placeholder="Your Company Pvt Ltd"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Company Type */}
                                        <div className={styles.formGroup}>
                                            <label htmlFor="companyType" className={styles.label}>
                                                Company Type<span className={styles.required}>*</span>
                                            </label>
                                            <select
                                                id="companyType"
                                                name="companyType"
                                                className={styles.select}
                                                value={formData.companyType}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select type</option>
                                                <option value="manufacturer">Manufacturer / Brand</option>
                                                <option value="distributor">Distributor</option>
                                                <option value="dealer">Dealer / Retailer</option>
                                                <option value="supplier">Supplier / Vendor</option>
                                                <option value="financial-institution">Financial Institution</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className={styles.formGroup}>
                                            <label htmlFor="message" className={styles.label}>
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className={styles.textarea}
                                                placeholder="Tell us about your financing needs..."
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* DPDP consent — required, unticked by default */}
                                        <ConsentCheckbox
                                            id="contactConsent"
                                            checked={hasConsented}
                                            onChange={setHasConsented}
                                        />

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className={styles.submitButton}
                                            disabled={isSubmitting || !hasConsented}
                                        >
                                            {isSubmitting ? (
                                                'Sending...'
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Statutory / grievance disclosure */}
                    <section className={styles.reachUs}>
                        <div className={styles.reachUsHeader}>
                            <h2 className={styles.reachUsTitle}>Reach Us</h2>
                            <p className={styles.reachUsSubtitle}>
                                Corporate identity and grievance redressal details for
                                NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED.
                            </p>
                        </div>

                        <div className={styles.reachGrid}>
                            {/* Company details */}
                            <div className={styles.reachCard}>
                                <div className={styles.reachCardHead}>
                                    <div className={styles.reachCardIcon}>
                                        <Building2 size={20} />
                                    </div>
                                    <h3 className={styles.reachCardTitle}>Company Details</h3>
                                </div>

                                <div className={styles.detailGrid}>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>CIN</span>
                                        <span className={styles.detailValue}>
                                            U66190HR2025PTC135907
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Company Name</span>
                                        <span className={styles.detailValue}>
                                            NEENV FINANCIAL TECHNOLOGIES PRIVATE LIMITED
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>
                                            Registered Office Address
                                        </span>
                                        <span className={styles.detailValue}>
                                            B-90, 3rd Floor, Greenwood City, Sector-45, Gurugram,
                                            Haryana &ndash; 122003
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>
                                            Corporate Office Address
                                        </span>
                                        <span className={styles.detailValue}>
                                            Teloz Spaces, 1st Floor, AJ House, Marol Maroshi Road,
                                            Marol, Andheri East, Mumbai, Maharashtra &ndash; 400059
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Contact No</span>
                                        <span className={styles.detailValue}>
                                            <a href="tel:+917738735740">+91 77387 35740</a>
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Email ID</span>
                                        <span className={styles.detailValue}>
                                            <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Grievance officer */}
                            <div className={styles.reachCard}>
                                <div className={styles.reachCardHead}>
                                    <div className={styles.reachCardIcon}>
                                        <ShieldCheck size={20} />
                                    </div>
                                    <h3 className={styles.reachCardTitle}>
                                        Nodal Grievance Redressal Officer
                                    </h3>
                                </div>

                                <div className={styles.detailGrid}>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Name</span>
                                        <span className={styles.detailValue}>
                                            Mr. Abhishek Verma
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Address</span>
                                        <span className={styles.detailValue}>
                                            Neenv Financial Technologies Private Limited, B-90, 3rd
                                            Floor, Greenwood City, Sector-45, Gurugram, Haryana
                                            &ndash; 122003
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Contact No.</span>
                                        <span className={styles.detailValue}>
                                            <a href="tel:+919810174406">+91 98101 74406</a>
                                        </span>
                                    </div>

                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Email ID</span>
                                        <span className={styles.detailValue}>
                                            <a href="mailto:abhishek.verma@neenvfin.com">
                                                abhishek.verma@neenvfin.com
                                            </a>
                                        </span>
                                    </div>
                                </div>

                                <a href="/grievance-redressal" className={styles.policyLink}>
                                    View our Grievance Redressal Policy
                                    <ArrowRight size={14} strokeWidth={2.5} />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
