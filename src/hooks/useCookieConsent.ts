'use client';

import { useEffect, useState } from 'react';
import {
    CONSENT_CHANGE_EVENT,
    type CookieConsent,
    readConsent,
} from '@/lib/cookieConsent';

interface UseCookieConsentResult {
    /** The visitor's stored choice, or `null` while undecided. */
    consent: CookieConsent | null;
    /**
     * False during the first client render. Nothing consent-dependent may be
     * rendered before this flips, so the server HTML and the first client
     * render always agree.
     */
    hydrated: boolean;
}

/**
 * Subscribes to the stored cookie choice. Consent is read on the client only,
 * so callers must wait for `hydrated` before acting on it.
 */
export function useCookieConsent(): UseCookieConsentResult {
    const [consent, setConsent] = useState<CookieConsent | null>(null);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setConsent(readConsent());
        setHydrated(true);

        const handleChange = () => setConsent(readConsent());

        window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
        // Keep tabs in sync when the choice is changed elsewhere.
        window.addEventListener('storage', handleChange);

        return () => {
            window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
            window.removeEventListener('storage', handleChange);
        };
    }, []);

    return { consent, hydrated };
}
