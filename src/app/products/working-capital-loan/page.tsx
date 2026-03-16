import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Short-Term Working Capital Loan - Neenv',
    description: 'Flexible financing solution for immediate liquidity needs. Address day-to-day operations, seasonal demand, and short-term growth opportunities with collateral-free lending.',
    openGraph: {
        title: 'Short-Term Working Capital Loan - Neenv',
        description: 'Rapid access to collateral-free capital for your business. Flexible repayment aligned with your cash flow cycles.',
        type: 'website',
    },
};

const steps = [
    {
        title: 'Application Submission',
        description: 'Apply digitally by submitting basic business and financial details.',
    },
    {
        title: 'Tech-Enabled Credit Assessment',
        description: 'Receive quick approval through an automated credit evaluation process, followed by fund disbursement.',
    },
    {
        title: 'Structured Repayment',
        description: 'Repay the loan through predefined instalments over the agreed tenure.',
    },
];

const benefits = [
    {
        title: 'Rapid Access to Capital',
        description: 'Designed for speed to help businesses respond to immediate operational or market needs.',
    },
    {
        title: 'Collateral-Free Lending',
        description: 'No physical assets required, reducing barriers to access for channel partners.',
    },
    {
        title: 'Flexible Repayment Structure',
        description: 'Predictable instalments aligned with cash flow cycles and business needs.',
    },
];

export default function WorkingCapitalLoanPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Short-Term Working Capital Loan"
                    subtitle="Flexible Business Financing"
                    description="A flexible financing solution designed to address immediate liquidity needs across the channel ecosystem. It supports day-to-day operations, seasonal demand, and short-term growth opportunities when invoice-based financing may not be sufficient."
                />
                <ProductDetails steps={steps} benefits={benefits} />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
