import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import FiHero from '@/components/for-fis/FiHero';
import ValueProposition from '@/components/for-fis/ValueProposition';
import WhatWeBring from '@/components/for-fis/WhatWeBring';
import FiCTA from '@/components/for-fis/FiCTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'For Financial Institutions — Deploy Capital into Channel Finance',
    description: 'Partner with Neenv to deploy capital into India\'s dealer networks. Anchor-backed origination, digital servicing, RBI-ready compliance, real-time portfolio monitoring.',
    keywords: ['NBFC lending partner', 'co-lending platform', 'channel finance assets', 'loan origination platform', 'digital lending infrastructure'],
    openGraph: {
        title: 'For Financial Institutions — Deploy Capital into Channel Finance | Neenv',
        description: 'Partner with Neenv to deploy capital into India\'s dealer networks. Anchor-backed origination, digital servicing, RBI-ready compliance.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/for-financial-institutions',
    },
};

export default function ForFinancialInstitutionsPage() {
    return (
        <>
            <Header />
            <main>
                <FiHero />
                <ValueProposition />
                <WhatWeBring />
                <FiCTA />
            </main>
            <Footer />
        </>
    );
}
