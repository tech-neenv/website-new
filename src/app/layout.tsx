import type { Metadata } from 'next';
import '@/styles/themes.css';
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider';
import FinanceElements from '@/components/FinanceElements/FinanceElements';
import { OrganizationSchema } from '@/components/seo/StructuredData';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.neenvfin.com'),
    title: {
        default: 'Neenv — AI-Native Supply Chain Finance Platform',
        template: '%s | Neenv',
    },
    description: 'Unlocking credit for India\'s brand-led dealer networks. Collateral-free channel financing, working capital loans, factoring, and supplier financing. Digital first. 72-hour disbursal.',
    keywords: ['supply chain finance', 'channel finance', 'dealer financing', 'MSME lending', 'collateral free loans', 'working capital India', 'invoice factoring', 'supplier financing', 'AI lending platform'],
    icons: {
        icon: '/images/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.neenvfin.com',
        siteName: 'Neenv',
        title: 'Neenv — AI-Native Supply Chain Finance Platform',
        description: 'Unlocking credit for India\'s brand-led dealer networks. Collateral-free channel financing, working capital loans, factoring, and supplier financing.',
        images: [
            {
                url: 'https://www.neenvfin.com/images/neenv-icon.svg',
                width: 1200,
                height: 630,
                alt: 'Neenv — AI-Native Supply Chain Finance Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Neenv — AI-Native Supply Chain Finance Platform',
        description: 'Unlocking credit for India\'s brand-led dealer networks.',
        images: ['https://www.neenvfin.com/images/neenv-icon.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.neenvfin.com',
    },
    other: {
        'theme-color': '#1a2d7a',
        'author': 'Neenv Financial Technologies',
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
                <link rel="apple-touch-icon" href="/images/logos/neenv.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body>
                <GoogleAnalytics />
                <OrganizationSchema />
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
