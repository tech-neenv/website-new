import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Dealer Financing - Neenv',
    description: 'Enable dealers to grow purchases with pre-approved credit lines. OEMs receive upfront payments while dealers settle on flexible terms.',
    openGraph: {
        title: 'Dealer Financing - Neenv',
        description: 'Pre-approved credit facilities for dealers. OEMs get paid upfront, dealers repay on flexible terms. Boost sales and strengthen channel relationships.',
        type: 'website',
    },
};

const steps = [
    {
        title: 'Credit Line Setup',
        description: 'A pre-approved credit facility is established for dealers based on their relationship with the OEM/seller.',
    },
    {
        title: 'Purchase Goods',
        description: 'Dealers use their credit line to purchase inventory from the OEM/seller without immediate payment.',
    },
    {
        title: 'OEM Gets Paid',
        description: 'The financial institution pays the OEM/seller upfront, ensuring immediate cash flow.',
    },
    {
        title: 'Dealer Repayment',
        description: 'Dealers settle their dues with the financial institution on mutually agreed terms.',
    },
];

const benefits = [
    {
        title: 'Accelerate Sales Growth',
        description: 'Enable dealers to purchase more, expanding your market reach and driving higher sales volumes.',
    },
    {
        title: 'Reduce Days Sales Outstanding',
        description: 'Receive upfront payments from the financial institution, improving your cash conversion cycle.',
    },
    {
        title: 'Strengthen Dealer Relationships',
        description: 'Offer flexible payment terms that build loyalty and improve dealer performance across your network.',
    },
];

export default function DealerFinancingPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Dealer Financing"
                    subtitle="Credit Facility for Channel Partners"
                    description="A pre-approved credit facility that empowers dealers to increase their purchases while OEM/sellers receive upfront payments. Dealers benefit from extended payment terms, settling their dues at a later date with the financial institution."
                />
                <ProductDetails steps={steps} benefits={benefits} />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
