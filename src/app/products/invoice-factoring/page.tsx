import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Factoring - Neenv',
    description: 'Convert approved receivables into immediate working capital. Same-day liquidity on invoices, collateral-free. Non-recourse options available.',
    openGraph: {
        title: 'Factoring - Neenv',
        description: 'Unlock cash tied in receivables. Same-day liquidity on approved invoices. Digital-first, collateral-free Factoring for channel partners.',
        type: 'website',
    },
};

const steps = [
    {
        title: 'Invoice Submission',
        description: 'Upload approved sales invoices through our digital platform. Buyer verification happens automatically.',
    },
    {
        title: 'Credit Assessment',
        description: 'Automated evaluation based on invoice quality, buyer credibility, and OEM ecosystem strength.',
    },
    {
        title: 'Same-Day Disbursement',
        description: 'Receive a significant portion of the invoice value directly into your bank account — often within the same business day.',
    },
    {
        title: 'Collection & Settlement',
        description: 'Buyer pays on the original due date. Settlement is handled seamlessly through the platform.',
    },
];

const benefits = [
    {
        title: 'Immediate Liquidity',
        description: 'Convert receivables into cash without waiting 30, 60, or 90 days for buyer payment cycles to complete.',
    },
    {
        title: 'No Collateral Required',
        description: 'Financing is based on invoice strength and buyer credibility — no physical assets or property pledges needed.',
    },
    {
        title: 'Non-Recourse Options',
        description: 'Transfer credit risk to the financing partner. If the buyer defaults, the liability doesn\'t fall back on you.',
    },
];

export default function InvoiceFactoringPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Factoring"
                    subtitle="Receivables to Cash. Same Day."
                    description="Don't let unpaid invoices throttle your working capital. Upload approved sales invoices, get funded the same day. Built for distributors, dealers, and suppliers operating on credit terms within OEM ecosystems."
                />
                <ProductDetails steps={steps} benefits={benefits} />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
