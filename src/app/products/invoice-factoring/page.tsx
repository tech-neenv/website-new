import { Metadata } from 'next';
import { FileText, ShieldCheck, Zap, ArrowRightLeft } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import FactoringIllustration from '@/components/ProductIllustrations/FactoringIllustration';
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

const howItWorks = {
    sectionTitle: 'From Invoice to Cash',
    steps: [
        {
            title: 'Invoice Raised',
            description: 'Dealer raises invoice against goods delivered or services rendered.',
            icon: <FileText size={16} strokeWidth={2} />,
        },
        {
            title: 'Invoice Verified',
            description: 'Brand confirms the invoice on the platform.',
            icon: <ShieldCheck size={16} strokeWidth={2} />,
        },
        {
            title: 'Funds Disbursed',
            description: 'Lender advances up to 90% of invoice value to the dealer same day.',
            icon: <Zap size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Settles',
            description: 'Brand pays the full invoice amount to the lender on due date.',
            icon: <ArrowRightLeft size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Brand',
        items: [
            {
                headline: 'Enhances Liquidity Planning',
                description: 'Streamline cash flow forecasting with predictable payment schedules across your dealer network.',
            },
            {
                headline: 'Off Balance Sheet Credit',
                description: 'Financing sits with the lender, not on your books. Keep your balance sheet clean while enabling channel growth.',
            },
            {
                headline: 'Boost Sales and Dealer Loyalty',
                description: 'Dealers with faster access to funds place larger orders and stay committed to your brand ecosystem.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Buyer',
        items: [
            {
                headline: 'Boost Business Volumes',
                description: 'Unlock working capital from receivables to fund the next purchase cycle without waiting for payment.',
            },
            {
                headline: 'Improved Working Capital Management',
                description: 'Convert invoices to cash on demand. Reduce your cash conversion cycle and operate with greater agility.',
            },
            {
                headline: 'Flexibility of Repayments',
                description: 'Repayment aligned to your actual cash flows. No rigid EMI structures — pay when the Brand settles.',
            },
        ],
    },
};

export default function InvoiceFactoringPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Factoring"
                    subtitle="Receivables to Cash. Same Day."
                    description="Don't let unpaid invoices throttle your working capital. Upload approved sales invoices, get funded the same day. Built for distributors, dealers, and suppliers operating on credit terms within Brand ecosystems."
                    flowGraphic={<FactoringIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
