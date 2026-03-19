import { Metadata } from 'next';
import { CreditCard, ShoppingCart, Banknote, CalendarCheck } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ChannelFinancingIllustration from '@/components/ProductIllustrations/ChannelFinancingIllustration';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Channel Financing - Neenv',
    description: 'Enable dealers to grow purchases with Brand Led Credit Facilities. Brands receive upfront payments while dealers settle on flexible terms.',
    openGraph: {
        title: 'Channel Financing - Neenv',
        description: 'Brand Led credit facilities for dealers. Brands get paid upfront, dealers repay on flexible terms. Boost sales and strengthen channel relationships.',
        type: 'website',
    },
};

const howItWorks = {
    sectionTitle: 'From Setup to Settlement',
    steps: [
        {
            title: 'Credit Facility Setup',
            description: 'Brand Led facility established using dealer\u2019s trade history with the brand.',
            icon: <CreditCard size={16} strokeWidth={2} />,
        },
        {
            title: 'Purchase Goods',
            description: 'Dealer uses Credit Facility to purchase inventory without immediate payment.',
            icon: <ShoppingCart size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Gets Paid',
            description: 'Lender pays the brand upfront. No receivables risk for the brand.',
            icon: <Banknote size={16} strokeWidth={2} />,
        },
        {
            title: 'Dealer Repays',
            description: 'Dealer settles dues with the lender on agreed terms.',
            icon: <CalendarCheck size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Dealers',
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
                description: 'EMI or end-of-term, matched to your cash conversion cycle. Pay as your business collects.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Brands',
        items: [
            {
                headline: 'Boost Channel Sales',
                description: 'Credit-enabled dealers buy more, buy bigger, and buy often. Watch per-dealer revenue climb without adding a single new dealer.',
            },
            {
                headline: 'Faster Collections, Better Cash Cycle',
                description: 'Get paid upfront by the lender on every order. Your DSO drops to zero on financed transactions.',
            },
            {
                headline: 'Build Dealer Loyalty That Sticks',
                description: 'Dealers stay with brands that solve their biggest problem \u2014 working capital. Financing through your network becomes a reason to never leave.',
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
                    description="A Brand Led credit facility that empowers dealers to increase their purchases while Brand/sellers receive upfront payments. Dealers benefit from extended payment terms, settling their dues at a later date with the financial institution."
                    flowGraphic={<ChannelFinancingIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
