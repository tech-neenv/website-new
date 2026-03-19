import { Metadata } from 'next';
import { ClipboardCheck, Landmark, Briefcase, Receipt } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import WorkingCapitalIllustration from '@/components/ProductIllustrations/WorkingCapitalIllustration';
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

const howItWorks = {
    sectionTitle: 'From Application to Funds',
    steps: [
        {
            title: 'Eligibility Check',
            description: 'Dealer\u2019s Brand trade data and business profile assessed digitally.',
            icon: <ClipboardCheck size={16} strokeWidth={2} />,
        },
        {
            title: 'Loan Sanctioned',
            description: 'Approved amount disbursed directly to dealer\u2019s bank account.',
            icon: <Landmark size={16} strokeWidth={2} />,
        },
        {
            title: 'Capital Deployed',
            description: 'Funds used for inventory, operations, or seasonal demand spikes.',
            icon: <Briefcase size={16} strokeWidth={2} />,
        },
        {
            title: 'Structured Repayment',
            description: 'Monthly EMIs over agreed tenor. Auto-debit via NACH.',
            icon: <Receipt size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits',
        items: [
            {
                headline: 'Predictable Repayment Structure',
                description: 'Fixed monthly EMIs with clear tenor. No floating rates, no surprises. Plan your cash flow with confidence.',
            },
            {
                headline: 'Support Tactical and Seasonal Requirements',
                description: 'Bridge funding gaps during peak seasons, bulk purchases, or market opportunities that demand immediate capital deployment.',
            },
            {
                headline: 'Better Matching of Loan Tenor with Working Capital Needs',
                description: 'Loan duration aligned to your actual business cycle. Short-term capital for short-term needs — no long-term debt overhang.',
            },
        ],
    },
};

export default function WorkingCapitalLoanPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Short-Term Working Capital Loan"
                    subtitle="Flexible Business Financing"
                    description="A flexible financing solution designed to address immediate liquidity needs across the channel ecosystem. It supports day-to-day operations, seasonal demand, and short-term growth opportunities when invoice-based financing may not be sufficient."
                    flowGraphic={<WorkingCapitalIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
