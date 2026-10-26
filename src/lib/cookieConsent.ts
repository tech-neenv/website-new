/**
 * Cookie consent store.
 *
 * Consent is opt-in: until the visitor makes an explicit choice there is no
 * stored record, and every non-essential category is treated as denied. The
 * Google Analytics tags in `@/components/GoogleAnalytics` read this store and
 * are only initialised once `analytics` has been granted.
 */

export const CONSENT_STORAGE_KEY = 'neenv-cookie-consent';

/** Bump when the categories change so stored choices are re-collected. */
export const CONSENT_VERSION = 1;

/** Fired whenever the stored choice changes. */
export const CONSENT_CHANGE_EVENT = 'neenv:cookie-consent-change';

/** Fired to open the preferences panel from anywhere on the site. */
export const OPEN_PREFERENCES_EVENT = 'neenv:open-cookie-preferences';

export interface CookieConsent {
    version: number;
    /** Strictly necessary cookies cannot be switched off; kept for completeness. */
    necessary: true;
    analytics: boolean;
    updatedAt: string;
}

export const DENY_ALL: Omit<CookieConsent, 'updatedAt'> = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: false,
};

/**
 * Returns the stored choice, or `null` when the visitor has not decided yet
 * (or decided against an older version of this policy).
 */
export function readConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null;

    try {
        const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
        if (!raw) return null;

        const parsed = JSON.parse(raw) as Partial<CookieConsent>;
        if (parsed?.version !== CONSENT_VERSION) return null;

        return {
            version: CONSENT_VERSION,
            necessary: true,
            analytics: parsed.analytics === true,
            updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : '',
        };
    } catch {
        // Private browsing, disabled storage, or corrupt value — treat as undecided.
        return null;
    }
}

export function writeConsent(choice: { analytics: boolean }): CookieConsent {
    const consent: CookieConsent = {
        version: CONSENT_VERSION,
        necessary: true,
        analytics: choice.analytics,
        updatedAt: new Date().toISOString(),
    };

    try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    } catch {
        // Storage unavailable — the choice still applies for this page view.
    }

    window.dispatchEvent(new CustomEvent<CookieConsent>(CONSENT_CHANGE_EVENT, { detail: consent }));
    return consent;
}

/** Clears the stored choice so the banner is shown again. */
export function resetConsent(): void {
    try {
        window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
        // Nothing to clear.
    }

    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
}

/** Opens the cookie preferences panel — used by the link in /legal. */
export function openCookiePreferences(): void {
    window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

/**
 * Best-effort removal of the analytics cookies already dropped by GA, used when
 * a visitor withdraws consent after previously granting it.
 */
export function clearAnalyticsCookies(): void {
    if (typeof document === 'undefined') return;

    const host = window.location.hostname;
    const domains = [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];

    document.cookie.split(';').forEach((entry) => {
        const name = entry.split('=')[0]?.trim();
        if (!name || !/^(_ga|_gid|_gat)/.test(name)) return;

        domains.forEach((domain) => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
        });
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
}
