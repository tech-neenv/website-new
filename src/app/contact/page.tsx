'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
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
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setIsSubmitted(true);
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

                            {/* <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Phone size={20} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Phone</h4>
                                    <p>Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                                </div>
                            </div> */}

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

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className={styles.submitButton}
                                            disabled={isSubmitting}
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
                </div>
            </main>
            <Footer />
        </>
    );
}
