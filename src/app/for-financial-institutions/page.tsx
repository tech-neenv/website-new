import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import FIHero from '@/components/FIHero/FIHero';
import FIProducts from '@/components/FIProducts/FIProducts';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'For Financial Institutions - Neenv',
    description: 'Comprehensive Digital SCF Infrastructure for Financial Institutions. Build scalable Supply Chain Finance portfolios and manage the full lifecycle effortlessly.',
    openGraph: {
        title: 'For Financial Institutions - Neenv',
        description: 'Comprehensive Digital SCF Infrastructure for Financial Institutions. Efficient, Scalable, and Primed for Success.',
        type: 'website',
    },
};

export default function ForFinancialInstitutionsPage() {
    return (
        <>
            <Header />
            <main>
                <FIHero />
                <FIProducts />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
