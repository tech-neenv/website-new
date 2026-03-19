import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import FiHero from '@/components/for-fis/FiHero';
import ValueProposition from '@/components/for-fis/ValueProposition';
import WhatWeBring from '@/components/for-fis/WhatWeBring';
import FiCTA from '@/components/for-fis/FiCTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'For Banks & NBFCs - Neenv',
    description: 'Partner with Neenv to access India\'s MSME ecosystem through a fully managed channel finance platform. AI-powered underwriting, 4 SCF products, seamless integration.',
    openGraph: {
        title: 'For Banks & NBFCs - Neenv',
        description: 'Your gateway to India\'s MSME ecosystem. Managed channel finance platform with AI-powered underwriting.',
        type: 'website',
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
