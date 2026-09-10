'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { OPEN_PREFERENCES_EVENT, writeConsent } from '@/lib/cookieConsent';
import styles from './CookieConsent.module.css';

/**
 * Site-wide cookie consent banner.
 *
 * Nothing beyond strictly necessary cookies runs until a choice is made here —
 * `GoogleAnalytics` only mounts its tags once `analytics` has been granted.
 * "Accept all" and "Reject all" deliberately share one button style so the
 * opt-out is exactly as easy to reach as the opt-in.
 */
const CookieConsent = () => {
    const { consent, hydrated } = useCookieConsent();
    const [showPreferences, setShowPreferences] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    /** Set when the panel is reopened from /legal after a choice was already made. */
    const [reopened, setReopened] = useState(false);

    // Allow "Manage cookie preferences" on /legal to reopen this panel.
    useEffect(() => {
        const handleOpen = () => {
            setAnalytics(consent?.analytics === true);
            setShowPreferences(true);
            setReopened(true);
        };

        window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpen);
        return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpen);
    }, [consent]);

    const save = useCallback((choice: { analytics: boolean }) => {
        writeConsent(choice);
        setShowPreferences(false);
        setReopened(false);
    }, []);

    // Wait for hydration so the server markup and first client render match.
    if (!hydrated) return null;

    // A decision is on record and the visitor has not asked to revisit it.
    if (consent && !reopened) return null;

    return (
        <div
            className={styles.banner}
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-consent-title"
        >
            <div className={styles.panel}>
                <h2 id="cookie-consent-title" className={styles.title}>
                    <Cookie size={16} aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: '8px' }} />
                    Cookies on neenvfin.com
                </h2>

                {showPreferences ? (
                    <>
                        <p className={styles.description}>
                            Choose which cookies we may use. Necessary cookies keep the site working
                            and cannot be turned off. Everything else is off unless you switch it on.
                            Read the full{' '}
                            <Link href="/legal#cookie-policy">Cookie Policy</Link>.
                        </p>

                        <div className={styles.categories}>
                            <div className={styles.category}>
                                <div>
                                    <p className={styles.categoryName}>Strictly necessary</p>
                                    <p className={styles.categoryDescription}>
                                        Required for the website to function &mdash; page security,
                                        form submission, and remembering this cookie choice. No
                                        tracking or profiling.
                                    </p>
                                </div>
                                <span className={styles.alwaysOn}>Always on</span>
                            </div>

                            <div className={styles.category}>
                                <div>
                                    <p className={styles.categoryName}>Analytics (optional)</p>
                                    <p className={styles.categoryDescription}>
                                        Google Analytics, to understand which pages are useful and
                                        how the site performs. Not loaded at all unless you allow it
                                        here, and never used to make a credit decision.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={analytics}
                                    aria-label="Allow analytics cookies"
                                    onClick={() => setAnalytics((value) => !value)}
                                    className={`${styles.toggle} ${analytics ? styles.toggleOn : ''}`}
                                >
                                    <span className={styles.toggleKnob} />
                                </button>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={styles.choiceButton}
                                onClick={() => save({ analytics })}
                            >
                                Save preferences
                            </button>
                            <button
                                type="button"
                                className={styles.choiceButton}
                                onClick={() => save({ analytics: false })}
                            >
                                Reject all
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className={styles.description}>
                            We use strictly necessary cookies to run this website. With your
                            permission we would also use Google Analytics to see how the site is
                            used. Analytics cookies stay switched off until you accept them. You can
                            change or withdraw your choice at any time from our{' '}
                            <Link href="/legal#cookie-policy">Cookie Policy</Link>.
                        </p>

                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={styles.choiceButton}
                                onClick={() => save({ analytics: true })}
                            >
                                Accept all
                            </button>
                            <button
                                type="button"
                                className={styles.choiceButton}
                                onClick={() => save({ analytics: false })}
                            >
                                Reject all
                            </button>
                            <button
                                type="button"
                                className={styles.manageButton}
                                onClick={() => {
                                    setAnalytics(consent?.analytics === true);
                                    setShowPreferences(true);
                                }}
                            >
                                Manage preferences
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CookieConsent;
