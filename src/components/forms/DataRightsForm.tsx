'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import styles from './DataRightsForm.module.css';

type FormState = {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    requestType: string;
    description: string;
};

const initialState: FormState = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
    requestType: '',
    description: '',
};

/** Mirrors the RequestType union accepted by /api/data-rights. */
const requestTypes = [
    { value: 'access', label: 'Access — a copy of my personal data' },
    { value: 'correction', label: 'Correction, completion or updating' },
    { value: 'erasure', label: 'Erasure / deletion' },
    { value: 'nomination', label: 'Nomination' },
    { value: 'withdraw-consent', label: 'Withdrawal of consent' },
    { value: 'other', label: 'Other' },
];

/**
 * Data rights request form for /legal#data-rights.
 *
 * Posts to /api/data-rights, which routes to the Grievance Officer rather than
 * the sales inbox. Consent is not collected here: submitting a rights request
 * is itself the exercise of a statutory right, and the data given is used only
 * to identify the requester and answer the request.
 */
const DataRightsForm = () => {
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

        try {
            const response = await fetch('/api/data-rights', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setIsSubmitted(true);
        } catch {
            setError(
                'We could not submit your request. Please email abhishek.verma@neenvfin.com directly, marking the subject line "Data Rights Request".'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.formCard}>
                <div className={styles.success}>
                    <div className={styles.successIcon}>
                        <CheckCircle size={24} aria-hidden="true" />
                    </div>
                    <p className={styles.successTitle}>Request received</p>
                    <p className={styles.successBody}>
                        Your request has gone to our Grievance Officer. We will acknowledge it within
                        3 working days and respond substantively within 30 calendar days. We may ask
                        you to verify your identity before we act on it.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
                <div className={styles.row}>
                    <div className={styles.group}>
                        <label htmlFor="dr-name" className={styles.label}>
                            Full name
                        </label>
                        <input
                            type="text"
                            id="dr-name"
                            name="name"
                            className={styles.input}
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="dr-email" className={styles.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="dr-email"
                            name="email"
                            className={styles.input}
                            placeholder="The email registered with us"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.group}>
                        <label htmlFor="dr-phone" className={styles.label}>
                            Phone <span className={styles.optional}>(optional)</span>
                        </label>
                        <input
                            type="tel"
                            id="dr-phone"
                            name="phone"
                            className={styles.input}
                            placeholder="+91"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="dr-company" className={styles.label}>
                            Company <span className={styles.optional}>(optional)</span>
                        </label>
                        <input
                            type="text"
                            id="dr-company"
                            name="companyName"
                            className={styles.input}
                            placeholder="The business you are associated with"
                            value={form.companyName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={styles.group}>
                    <label htmlFor="dr-type" className={styles.label}>
                        Request type
                    </label>
                    <select
                        id="dr-type"
                        name="requestType"
                        className={styles.select}
                        value={form.requestType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select the right you wish to exercise</option>
                        {requestTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.group}>
                    <label htmlFor="dr-description" className={styles.label}>
                        Description
                    </label>
                    <textarea
                        id="dr-description"
                        name="description"
                        className={styles.textarea}
                        placeholder="Describe your request, including any specific records or transaction references it relates to."
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && (
                    <p className={styles.error} role="alert">
                        {error}
                    </p>
                )}

                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Submit request'}
                    {!isSubmitting && <Send size={16} strokeWidth={2} aria-hidden="true" />}
                </button>

                <p className={styles.note}>
                    This request goes directly to our Grievance Officer, not to our sales team. We
                    may ask for information reasonably necessary to verify your identity before
                    acting on it. There is no fee.
                </p>
            </form>
        </div>
    );
};

export default DataRightsForm;
