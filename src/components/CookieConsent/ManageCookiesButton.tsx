'use client';

import { SlidersHorizontal } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { openCookiePreferences } from '@/lib/cookieConsent';
import styles from './CookieConsent.module.css';

/**
 * Reopens the cookie preferences panel and reports the choice currently on
 * record. Rendered inside the Cookie Policy section of /legal.
 */
const ManageCookiesButton = () => {
    const { consent, hydrated } = useCookieConsent();

    let status = 'Loading your current cookie choice…';
    if (hydrated) {
        if (!consent) {
            status = 'You have not made a cookie choice yet. Analytics cookies are switched off.';
        } else if (consent.analytics) {
            status = 'Current choice: analytics cookies allowed.';
        } else {
            status = 'Current choice: analytics cookies rejected. Only necessary cookies are in use.';
        }
    }

    return (
        <>
            <button type="button" className={styles.inlineTrigger} onClick={openCookiePreferences}>
                <SlidersHorizontal size={16} aria-hidden="true" />
                Manage cookie preferences
            </button>
            <p className={styles.consentState} aria-live="polite">{status}</p>
        </>
    );
};

export default ManageCookiesButton;
