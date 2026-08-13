import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Stats/Stats';
import Solutions from '@/components/Solutions/Solutions';
import VoiceAgent from '@/components/VoiceAgent/VoiceAgent';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Partners from '@/components/Partners/Partners';
import Testimonials from '@/components/Testimonials/Testimonials';
import Founders from '@/components/Founders/Founders';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';

export const metadata: Metadata = {
    title: 'Neenv | Channel Finance Platform for India\'s MSME Dealer Networks',
    description: 'Neenv is an NBFC-powered channel finance platform offering revolving credit, working capital loans, and supply chain financing to MSME dealer networks across India.',
    openGraph: {
        title: 'Neenv | Channel Finance Platform for India\'s MSME Dealer Networks',
        description: 'Neenv is an NBFC-powered channel finance platform offering revolving credit, working capital loans, and supply chain financing to MSME dealer networks across India.',
        url: 'https://www.neenvfin.com',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com',
    },
};

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Header />
            <main>
                <Hero />
                {/* <Stats /> */}
                <Solutions />
                <HowItWorks />
                <Partners />
                <Founders />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
