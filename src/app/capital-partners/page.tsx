import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import CapitalPartnersHero from '@/components/capital-partners/CapitalPartnersHero';
import PartnerNetwork from '@/components/capital-partners/PartnerNetwork';
import FiCTA from '@/components/for-fis/FiCTA';
import Footer from '@/components/Footer/Footer';
import { partners, partnerCount } from '@/data/partners';

export const metadata: Metadata = {
    title: 'Capital Partners | Neenv Lending Network',
    description:
        'The banks and NBFCs funding Neenv-originated channel finance. Neenv originates, services and manages the assets — our capital partners bring the balance sheet.',
    keywords: [
        'capital partners',
        'NBFC lending partners',
        'co-lending partners India',
        'channel finance funding',
        'MSME lending network',
    ],
    openGraph: {
        title: 'Capital Partners | Neenv Lending Network',
        description:
            'The banks and NBFCs funding Neenv-originated channel finance for India\'s MSME dealer networks.',
        url: 'https://www.neenvfin.com/capital-partners',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/capital-partners',
    },
};

/* Lets search engines read the network as a list rather than loose logos. */
const partnerListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Neenv Capital Partners',
    numberOfItems: partnerCount,
    itemListElement: partners.map((partner, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'Organization',
            name: partner.name,
            ...(partner.url ? { url: partner.url } : {}),
        },
    })),
};

export default function CapitalPartnersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerListSchema) }}
            />
            <Header />
            <main>
                <CapitalPartnersHero />
                <PartnerNetwork />
                <FiCTA />
            </main>
            <Footer />
        </>
    );
}
