'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { clearAnalyticsCookies } from '@/lib/cookieConsent';

const GA_MEASUREMENT_ID = 'G-9WSJRRED1X';

export function GoogleAnalytics() {
    const { consent, hydrated } = useCookieConsent();
    const analyticsAllowed = hydrated && consent?.analytics === true;

    // Withdrawing consent must take effect without a reload: block any further
    // hits from an already-loaded tag and clear the cookies it set.
    useEffect(() => {
        if (!hydrated) return;

        const disableFlag = `ga-disable-${GA_MEASUREMENT_ID}`;
        (window as unknown as Record<string, boolean>)[disableFlag] = !analyticsAllowed;

        if (!analyticsAllowed) {
            clearAnalyticsCookies();
        }
    }, [analyticsAllowed, hydrated]);

    // No tag is injected until the visitor has actively granted analytics consent.
    if (!analyticsAllowed) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied',
                        'analytics_storage': 'granted'
                    });
                    gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
                `}
            </Script>
        </>
    );
}
