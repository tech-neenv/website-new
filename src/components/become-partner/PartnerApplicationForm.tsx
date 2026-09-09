'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import styles from './PartnerApplicationForm.module.css';

type FormState = {
    name: string;
    email: string;
    phone: string;
    institutionName: string;
    institutionType: string;
    deploymentAppetite: string;
    message: string;
};

const initialState: FormState = {
    name: '',
    email: '',
    phone: '',
    institutionName: '',
    institutionType: '',
    deploymentAppetite: '',
    message: '',
};

const institutionTypes = [
    { value: 'nbfc', label: 'NBFC' },
    { value: 'bank', label: 'Bank' },
    { value: 'sfb', label: 'Small Finance Bank' },
    { value: 'aif-fund', label: 'AIF / Debt Fund' },
    { value: 'other', label: 'Other' },
];

const appetiteBands = [
    { value: 'under-5cr', label: 'Under ₹5 Cr / month' },
    { value: '5-25cr', label: '₹5 – 25 Cr / month' },
    { value: '25-100cr', label: '₹25 – 100 Cr / month' },
    { value: 'above-100cr', label: 'Above ₹100 Cr / month' },
    { value: 'undecided', label: 'Still evaluating' },
];

const labelFor = (options: { value: string; label: string }[], value: string) =>
    options.find((option) => option.value === value)?.label ?? value;

const PartnerApplicationForm = () => {
    const [form, setForm] = useState<FormState>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        /* Reuses the existing /api/contact pipeline rather than standing up a second
           mailer. The institution-specific answers ride along in the message body so
           nothing is dropped, and companyType tags it as an FI enquiry in the inbox. */
        const details = [
            'CAPITAL PARTNER ENQUIRY',
            'Institution type: ' + labelFor(institutionTypes, form.institutionType),
            'Deployment appetite: ' + (form.deploymentAppetite
                ? labelFor(appetiteBands, form.deploymentAppetite)
                : 'Not specified'),
        ];

        if (form.message) {
            details.push('Notes: ' + form.message);
        }

        const payload = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            companyName: form.institutionName,
            companyType: 'financial-institution',
            message: details.join('\n'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setIsSubmitted(true);
        } catch {
            setError(
                'Something went wrong sending your enquiry. Please try again, or email us directly at Info@neenvfin.com.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="partner-form" className={styles.section}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.intro}>
                        <span className={`${styles.badge} badge-animated`}>PARTNERSHIP ENQUIRY</span>
                        <h2 className={styles.title}>Start the Conversation</h2>
                        <p className={styles.text}>
                            Tell us about your institution and where you want to deploy. Our
                            partnerships team will come back with a portfolio overview, our
                            underwriting approach, and the onboarding steps.
                        </p>
                        <p className={styles.text}>
                            Prefer email? Write to{' '}
                            <a href="mailto:Info@neenvfin.com" className={styles.inlineLink}>
                                Info@neenvfin.com
                            </a>
                            .
                        </p>
                    </div>

                    <div className={styles.card}>
                        {isSubmitted ? (
                            <div className={styles.success} role="status">
                                <span className={styles.successIcon}>
                                    <CheckCircle size={32} />
                                </span>
                                <h3 className={styles.successTitle}>Enquiry Received</h3>
                                <p className={styles.text}>
                                    Thank you. Our partnerships team will get back to you within
                                    two working days.
                                </p>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    <div className={styles.group}>
                                        <label htmlFor="name" className={styles.label}>
                                            Full Name<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={styles.input}
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.group}>
                                        <label htmlFor="email" className={styles.label}>
                                            Work Email<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={styles.input}
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.group}>
                                        <label htmlFor="phone" className={styles.label}>
                                            Phone<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className={styles.input}
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.group}>
                                        <label htmlFor="institutionName" className={styles.label}>
                                            Institution<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="institutionName"
                                            name="institutionName"
                                            className={styles.input}
                                            value={form.institutionName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.group}>
                                        <label htmlFor="institutionType" className={styles.label}>
                                            Institution Type<span className={styles.required}>*</span>
                                        </label>
                                        <select
                                            id="institutionType"
                                            name="institutionType"
                                            className={styles.select}
                                            value={form.institutionType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select type</option>
                                            {institutionTypes.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles.group}>
                                        <label htmlFor="deploymentAppetite" className={styles.label}>
                                            Deployment Appetite
                                        </label>
                                        <select
                                            id="deploymentAppetite"
                                            name="deploymentAppetite"
                                            className={styles.select}
                                            value={form.deploymentAppetite}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a range</option>
                                            {appetiteBands.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.group}>
                                    <label htmlFor="message" className={styles.label}>
                                        Anything else we should know?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className={styles.textarea}
                                        placeholder="Target sectors, existing channel finance book, timelines&hellip;"
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {error && (
                                    <p className={styles.error} role="alert">
                                        {error}
                                    </p>
                                )}

                                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending…' : 'Submit Enquiry'}
                                    {!isSubmitting && <Send size={16} strokeWidth={2} />}
                                </button>

                                <p className={styles.disclaimer}>
                                    Submitting this form starts a commercial discussion only. It is
                                    not an offer, sanction, or commitment by either party.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerApplicationForm;
