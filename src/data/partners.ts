/**
 * Single source of truth for lending partners.
 *
 * Both the home-page Partners marquee and the /capital-partners page read this
 * list, so the counts shown on either surface can never drift apart. To onboard
 * a partner, add one entry here — headings, stats and filters all recalculate.
 */

export type PartnerCategory = 'NBFC' | 'Bank' | 'Specialized';

export type Partner = {
    /** Display name — also the alt text when a logo is supplied. */
    name: string;
    /** Opened in a new tab on click. Leave empty to render a non-clickable card. */
    url: string;
    /** Logo in /public/images/partners — falls back to an icon + the name. */
    logo?: string;
    /**
     * The logo file's intrinsic pixel size. next/image needs it to reserve space,
     * and getting it right is what stops a wide wordmark from being letterboxed
     * inside a box shaped for a different aspect ratio.
     */
    logoWidth?: number;
    logoHeight?: number;
    /** Drives the filter chips on /capital-partners. */
    category: PartnerCategory;
    /** One line shown under the name on the /capital-partners card. */
    description?: string;
};

export const partners: Partner[] = [
    {
        name: 'Fexprime Finance',
        url: 'https://www.fexprime.com/Grievance-Redressal-Details',
        logo: '/images/partners/fexprime.jpg',
        logoWidth: 1000,
        logoHeight: 200,
        category: 'NBFC',
        /* Kept to what the site already states publicly — avoid asserting specific
           products or limits on a third party's behalf without sign-off. */
        description: 'NBFC lending partner backing Neenv-originated channel finance.',
    },
    {
        name: 'AU Small Finance Bank',
        url: 'https://www.aubank.in/',
        logo: '/images/partners/au-small-finance-bank.svg',
        logoWidth: 683,
        logoHeight: 301,
        category: 'Bank',
        description: 'Small finance bank partner for Neenv-originated channel finance.',
    },
    {
        name: 'Cholamandalam',
        url: 'https://www.cholamandalam.com/',
        logo: '/images/partners/cholamandalam.svg',
        logoWidth: 131,
        logoHeight: 49,
        category: 'NBFC',
        description: 'NBFC lending partner backing Neenv-originated channel finance.',
    },
    {
        name: 'Karnataka Bank',
        url: 'https://karnatakabank.com/',
        logo: '/images/partners/karnataka-bank.gif',
        logoWidth: 480,
        logoHeight: 80,
        category: 'Bank',
        description: 'Scheduled commercial bank partner for Neenv-originated channel finance.',
    },
];

export const partnerCount = partners.length;

/**
 * next/image's optimizer refuses SVG unless `dangerouslyAllowSVG` is on, and it
 * flattens animated GIFs to a still frame. Both are already small, so these are
 * served straight from /public instead of being routed through the optimizer.
 */
export const servesRawLogo = (logo?: string) => /\.(svg|gif)$/i.test(logo ?? '');

/** Display order for the filter chips. */
export const CATEGORY_ORDER: PartnerCategory[] = ['NBFC', 'Bank', 'Specialized'];

export const countByCategory = (category: PartnerCategory) =>
    partners.filter((partner) => partner.category === category).length;

/** Only categories that actually have a partner — an empty chip is worse than no chip. */
export const activeCategories = CATEGORY_ORDER.filter((category) => countByCategory(category) > 0);
