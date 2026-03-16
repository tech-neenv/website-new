'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './ContactPage.module.css';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    companyType: string;
    inquiryType: string;
    productInterest: string[];
    annualTurnover: string;
    message: string;
    preferredContact: string;
};

const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyType: '',
    inquiryType: '',
    productInterest: [],
    annualTurnover: '',
    message: '',
    preferredContact: 'email',
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

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            productInterest: checked
                ? [...prev.productInterest, value]
                : prev.productInterest.filter((item) => item !== value),
        }));
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
                                        <a href="mailto:Info@neenvfin.com">Info@neenvfin.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Phone size={20} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Phone</h4>
                                    <p>Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <MapPin size={20} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Office</h4>
                                    <p>Gurugram, Haryana, India</p>
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
                                        {/* Name Row */}
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="firstName" className={styles.label}>
                                                    First Name<span className={styles.required}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    className={styles.input}
                                                    placeholder="Rajesh"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="lastName" className={styles.label}>
                                                    Last Name<span className={styles.required}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    className={styles.input}
                                                    placeholder="Sharma"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Contact Row */}
                                        <div className={styles.formRow}>
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
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone" className={styles.label}>
                                                    Phone Number<span className={styles.required}>*</span>
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
                                        </div>

                                        {/* Company Row */}
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="companyName" className={styles.label}>
                                                    Company Name<span className={styles.required}>*</span>
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
                                        </div>

                                        {/* Inquiry Type */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>
                                                What brings you here?<span className={styles.required}>*</span>
                                            </label>
                                            <div className={styles.radioGroup}>
                                                {[
                                                    { value: 'financing', label: 'Need Financing' },
                                                    { value: 'partnership', label: 'Partnership' },
                                                    { value: 'demo', label: 'Request Demo' },
                                                    { value: 'general', label: 'General Inquiry' },
                                                ].map((option) => (
                                                    <label key={option.value} className={styles.radioOption}>
                                                        <input
                                                            type="radio"
                                                            name="inquiryType"
                                                            value={option.value}
                                                            checked={formData.inquiryType === option.value}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <span>{option.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Products Interest */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>
                                                Products of Interest
                                            </label>
                                            <div className={styles.checkboxGroup}>
                                                {[
                                                    { value: 'dealer-financing', label: 'Dealer Financing' },
                                                    { value: 'supplier-financing', label: 'Supplier Financing' },
                                                    { value: 'working-capital', label: 'Working Capital Loan' },
                                                ].map((option) => (
                                                    <label key={option.value} className={styles.checkboxOption}>
                                                        <input
                                                            type="checkbox"
                                                            name="productInterest"
                                                            value={option.value}
                                                            checked={formData.productInterest.includes(option.value)}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span>{option.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Annual Turnover */}
                                        <div className={styles.formGroup}>
                                            <label htmlFor="annualTurnover" className={styles.label}>
                                                Annual Turnover
                                            </label>
                                            <select
                                                id="annualTurnover"
                                                name="annualTurnover"
                                                className={styles.select}
                                                value={formData.annualTurnover}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select range</option>
                                                <option value="below-1cr">Below ₹1 Crore</option>
                                                <option value="1-5cr">₹1 - 5 Crore</option>
                                                <option value="5-25cr">₹5 - 25 Crore</option>
                                                <option value="25-100cr">₹25 - 100 Crore</option>
                                                <option value="above-100cr">Above ₹100 Crore</option>
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
                                                placeholder="Tell us more about your financing needs..."
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Preferred Contact Method */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Preferred Contact Method</label>
                                            <div className={styles.radioGroup}>
                                                {[
                                                    { value: 'email', label: 'Email' },
                                                    { value: 'phone', label: 'Phone Call' },
                                                    { value: 'whatsapp', label: 'WhatsApp' },
                                                ].map((option) => (
                                                    <label key={option.value} className={styles.radioOption}>
                                                        <input
                                                            type="radio"
                                                            name="preferredContact"
                                                            value={option.value}
                                                            checked={formData.preferredContact === option.value}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span>{option.label}</span>
                                                    </label>
                                                ))}
                                            </div>
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
