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
];

export const partnerCount = partners.length;

/** Display order for the filter chips. */
export const CATEGORY_ORDER: PartnerCategory[] = ['NBFC', 'Bank', 'Specialized'];

export const countByCategory = (category: PartnerCategory) =>
    partners.filter((partner) => partner.category === category).length;

/** Only categories that actually have a partner — an empty chip is worse than no chip. */
export const activeCategories = CATEGORY_ORDER.filter((category) => countByCategory(category) > 0);
