import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Supplier Financing - Neenv',
    description: 'Enable vendors to receive early payments against approved invoices, funded by Financial Institutions, without impacting the OEM corporate balance sheet.',
    openGraph: {
        title: 'Supplier Financing - Neenv',
        description: 'Early payments for suppliers at competitive rates. Off-balance sheet funding through partnered banks and NBFCs.',
        type: 'website',
    },
};

const steps = [
    {
        title: 'Credit Limit Setup',
        description: 'Credit limits are established for each supplier based on their profile and transaction history.',
    },
    {
        title: 'Invoice Approval',
        description: 'The OEM corporate reviews and approves supplier invoices on the platform.',
    },
    {
        title: 'Early Payment to Suppliers',
        description: 'Neenv facilitates funding through partnered banks and NBFCs, enabling suppliers to receive early payments at competitive rates.',
    },
    {
        title: 'Repayment on Due Date',
        description: 'The OEM (buyer) repays the Financial Institution on the original invoice due date.',
    },
];

const benefits = [
    {
        title: 'Off-Balance Sheet Funding',
        description: 'Suppliers get paid early without burdening the OEM corporate balance sheet.',
    },
    {
        title: 'Strengthened Supply Chain',
        description: 'Early payments improve supplier loyalty, ensure supply continuity, and unlock better pricing.',
    },
    {
        title: 'Competitive Financing Rates',
        description: 'Suppliers benefit from attractive rates through our network of partnered banks and NBFCs.',
    },
];

export default function SupplierFinancingPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Supplier Financing"
                    subtitle="Vendor Financing Program"
                    description="Vendors receive early payments against approved invoices, funded by Financial Institutions, without burdening the OEM corporate's balance sheet. Strengthen your supply chain with timely payments while maintaining healthy cash flows and working capital."
                />
                <ProductDetails steps={steps} benefits={benefits} />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
