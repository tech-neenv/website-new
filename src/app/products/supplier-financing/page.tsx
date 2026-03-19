import { Metadata } from 'next';
import { Upload, CheckCircle, DollarSign, Calendar } from 'lucide-react';
import Header from '@/components/Header/Header';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import SupplierFinancingIllustration from '@/components/ProductIllustrations/SupplierFinancingIllustration';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Supplier Financing — Early Vendor Payments',
    description: 'Early payment solutions for suppliers against approved invoices. Suppliers get paid on delivery, brands keep original payment terms. Zero balance sheet impact.',
    keywords: ['supplier financing', 'vendor financing', 'early payment', 'reverse factoring', 'supply chain finance India'],
    openGraph: {
        title: 'Supplier Financing — Early Vendor Payments | Neenv',
        description: 'Early payment solutions for suppliers against approved invoices. Suppliers get paid on delivery, brands keep original payment terms.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.neenvfin.com/products/supplier-financing',
    },
};

const howItWorks = {
    sectionTitle: 'From Delivery to Payment',
    steps: [
        {
            title: 'Invoice Submitted',
            description: 'Supplier submits invoice against goods delivered to the brand.',
            icon: <Upload size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Approves',
            description: 'Brand confirms receipt and approves the invoice on-platform.',
            icon: <CheckCircle size={16} strokeWidth={2} />,
        },
        {
            title: 'Supplier Gets Paid',
            description: 'Lender pays the supplier immediately.',
            icon: <DollarSign size={16} strokeWidth={2} />,
        },
        {
            title: 'Brand Pays on Due Date',
            description: 'Brand settles the full invoice amount with the lender on original terms.',
            icon: <Calendar size={16} strokeWidth={2} />,
        },
    ],
};

const benefits = {
    left: {
        title: 'Key Benefits for Vendor',
        items: [
            {
                headline: 'Faster Realization of Sales Proceeds',
                description: 'Get paid when you deliver. Convert approved invoices to cash within hours.',
            },
            {
                headline: 'Lower Cost of Borrowing',
                description: 'Financing rates Branded to the buyer\u2019s credit profile, not yours. Access capital at significantly lower rates than standalone borrowing.',
            },
            {
                headline: 'No Collateral Needed',
                description: 'The approved invoice is your credential. No property papers.',
            },
        ],
    },
    right: {
        title: 'Key Benefits for Brand',
        items: [
            {
                headline: 'Vendor Loyalty',
                description: 'Suppliers prioritize brands that solve their cash flow. Early payment makes you the preferred buyer in your category.',
            },
            {
                headline: 'Working Capital Management',
                description: 'Extend your payment terms without straining vendor relationships. Optimize your own cash cycle while keeping suppliers funded.',
            },
            {
                headline: 'Continued Supplies from Key Vendors',
                description: 'Well-funded suppliers deliver on time. Eliminate production gaps caused by vendor cash flow constraints.',
            },
        ],
    },
};

export default function SupplierFinancingPage() {
    return (
        <>
            <Header />
            <main>
                <ProductHero
                    title="Supplier Financing"
                    subtitle="Vendor Financing Program"
                    description="Vendors receive early payments against approved invoices, funded by Financial Institutions, without burdening the Brand corporate's balance sheet. Strengthen your supply chain with timely payments while maintaining healthy cash flows and working capital."
                    flowGraphic={<SupplierFinancingIllustration />}
                />
                <ProductDetails howItWorks={howItWorks} benefits={benefits} />
            </main>
            <Footer />
        </>
    );
}
