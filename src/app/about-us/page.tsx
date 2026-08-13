import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import AboutHero from '@/components/about/AboutHero';
import OurMission from '@/components/about/OurMission';
import Founders from '@/components/Founders/Founders';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'About Us | Neenv — AI-Native Supply Chain Finance for India',
    description:
        'Meet the team behind Neenv. Built by supply chain finance veterans from Standard Chartered, IDFC First Bank and Progcap, Neenv brings collateral-free credit to India\'s MSME dealer networks.',
    keywords: ['about Neenv', 'supply chain finance company India', 'Neenv founders', 'MSME lending team', 'channel finance startup'],
    openGraph: {
        title: 'About Us | Neenv — AI-Native Supply Chain Finance for India',
        description:
            'Meet the team behind Neenv. Built by supply chain finance veterans from Standard Chartered, IDFC First Bank and Progcap, Neenv brings collateral-free credit to India\'s MSME dealer networks.',
        url: 'https://www.neenvfin.com/about-us',
        siteName: 'Neenv',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/about-us',
    },
};

export default function AboutUsPage() {
    return (
        <>
            <Header />
            <main>
                <AboutHero />
                <OurMission />
                <Founders />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
