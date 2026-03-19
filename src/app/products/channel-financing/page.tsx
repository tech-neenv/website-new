import { Metadata } from 'next';
import { CreditCard, ShoppingCart, Banknote, CalendarCheck } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ChannelFinancingIllustration from '@/components/ProductIllustrations/ChannelFinancingIllustration';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Channel Financing — Credit Facilities for Dealer Networks',
    description: 'Brand-led, data-powered credit facilities for your dealer network. Pre-approved limits, zero collateral, 72-hour disbursal. Powered by anchor trade data.',
    keywords: ['channel financing', 'dealer credit line', 'distributor financing', 'brand led financing', 'collateral free credit'],
    openGraph: {
        title: 'Channel Financing — Credit Facilities for Dealer Networks | Neenv',
        description: 'Brand-led, data-powered credit facilities for your dealer network. Pre-approved limits, zero collateral, 72-hour disbursal.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/products/channel-financing',
    },
};

const howItWorks = {
    sectionTitle: 'From Setup to Settlement',
    steps: [
        {
            title: 'Credit Facility Setup',
            description: 'Brand Led facility established using Channel partner\u2019s trade history with the brand.',
            icon: <CreditCard size={16} strokeWidth={2} />,
        },
        {
            title: 'Purchase Goods',
            description: 'Channel partner uses Credit Facility to purchase inventory without immediate payment.',
            icon: <ShoppingCart size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Gets Paid',
            description: 'Lender pays the brand upfront. No receivables risk for the brand.',
            icon: <Banknote size={16} strokeWidth={2} />,
        },
        {
            title: 'Channel partner Repays',
            description: 'Channel partner settles dues with the lender on agreed terms.',
            icon: <CalendarCheck size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Channel partners',
        items: [
            {
                headline: 'No Collateral Required',
                description: 'Your Brand relationship is your credential. No property papers.',
            },
            {
                headline: 'Instant Liquidity When You Need It',
                description: 'Stop waiting 30\u201360 days for credit approvals. Funds reach your account within 72 hours so you never miss a purchase window.',
            },
            {
                headline: 'Flexible Repayment',
                description: 'Pay as your business collects. Interest charged only for the period you use.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Brands',
        items: [
            {
                headline: 'Boost Channel Sales',
                description: 'Credit-enabled Channel partners buy more, buy bigger, and buy often. Watch per-Channel partner revenue climb while they grow with you.',
            },
            {
                headline: 'Faster Collections, Better Cash Cycle',
                description: 'Get paid upfront by the lender on every order. Improved DSO reflects better financial discipline',
            },
            {
                headline: 'Build Channel partner Loyalty That Sticks',
                description: 'Channel partners stay with brands that solve their biggest problem \u2014 working capital. Financing through your network becomes a reason to never leave.',
            },
        ],
    },
};

export default function ChannelFinancingPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Channel Financing"
                    subtitle="Credit Facility for Channel Partners"
                    description="A Brand Led credit facility that empowers channel partners to increase their purchases while Brand/sellers receive upfront payments. Channel partners benefit from extended payment terms, settling their dues at a later date with the financial institution."
                    flowGraphic={<ChannelFinancingIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
