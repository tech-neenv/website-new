import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Stats/Stats';
import Solutions from '@/components/Solutions/Solutions';
import VoiceAgent from '@/components/VoiceAgent/VoiceAgent';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import Founders from '@/components/Founders/Founders';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';

export const metadata: Metadata = {
    title: 'Neenv: AI Native Supply Chain Platform',
    description: 'Unlocking credit for India\'s brand-led dealer networks. Collateral-free channel financing, working capital loans, factoring, and supplier financing. Digital first. 72-hour disbursal.',
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
                <Founders />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
