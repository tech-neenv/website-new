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
        category: 'NBFC',
        /* Kept to what the site already states publicly — avoid asserting specific
           products or limits on a third party's behalf without sign-off. */
        description: 'NBFC lending partner backing Neenv-originated channel finance.',
    },
    {
        name: 'Karnataka Bank',
        url: 'https://karnatakabank.com/',
        logo: '/images/partners/karnataka-bank.webp',
        category: 'Bank',
        description: 'Banking partner supporting Neenv channel finance programmes.',
    },
    {
        name: 'AU Small Finance Bank',
        url: 'https://www.au.bank.in/',
        logo: '/images/partners/au-small-finance-bank.svg',
        category: 'Bank',
        description: 'Banking partner supporting Neenv channel finance programmes.',
    },
    {
        name: 'Cholamandalam',
        url: 'https://www.cholamandalam.com/',
        logo: '/images/partners/chola.svg',
        category: 'NBFC',
        description: 'NBFC lending partner backing Neenv-originated channel finance.',
    },
    {
        name: 'IDFC FIRST Bank',
        url: 'https://www.idfcfirstbank.com/',
        logo: '/images/partners/idfc-first-bank.svg',
        category: 'Bank',
        description: 'Banking partner supporting Neenv channel finance programmes.',
    },
    {
        name: 'Unity Small Finance Bank',
        url: 'https://theunitybank.com/',
        logo: '/images/partners/unity-small-finance-bank.png',
        category: 'Bank',
        description: 'Banking partner supporting Neenv channel finance programmes.',
    },
];

export const partnerCount = partners.length;

/** Display order for the filter chips. */
export const CATEGORY_ORDER: PartnerCategory[] = ['NBFC', 'Bank', 'Specialized'];

export const countByCategory = (category: PartnerCategory) =>
    partners.filter((partner) => partner.category === category).length;

/** Only categories that actually have a partner — an empty chip is worse than no chip. */
export const activeCategories = CATEGORY_ORDER.filter((category) => countByCategory(category) > 0);
