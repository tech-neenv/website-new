import type { Metadata } from 'next';
import '@/styles/themes.css';
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider';
import FinanceElements from '@/components/FinanceElements/FinanceElements';

export const metadata: Metadata = {
    title: 'Neenv Channel Finance for India\'s Supply Chains',
    description: 'AI-native supply chain finance platform. Collateral-free financing for dealers, suppliers, and distributors in Brand-led ecosystems. 72-hour disbursal.',
    keywords: 'channel finance, supply chain finance, channel financing, supplier financing, Factoring, working capital, AI fintech, collateral-free lending',
    icons: {
        icon: '/images/favicon.ico',
    },
    openGraph: {
        title: 'Neenv Channel Finance for India\'s Supply Chains',
        description: 'Collateral-free financing for dealers, suppliers, and distributors. 72-hour disbursal. AI-native supply chain platform.',
        type: 'website',
        locale: 'en_IN',
        siteName: 'Neenv',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Neenv Channel Finance for India\'s Supply Chains',
        description: 'Collateral-free channel finance. 72-hour disbursal. AI-native supply chain platform.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <div style={{ position: 'relative' }}>
                    <FinanceElements />
                    <ScrollAnimationProvider>
                        {children}
                    </ScrollAnimationProvider>
                </div>
            </body>
        </html>
    );
}
