import type { Metadata } from 'next';
import '@/styles/themes.css';
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider';
import FinanceElements from '@/components/FinanceElements/FinanceElements';
import { OrganizationSchema, WebSiteSchema, SiteNavigationSchema } from '@/components/seo/StructuredData';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.neenvfin.com'),
    title: {
        default: 'Neenv | Channel Finance Platform for India\'s MSME Dealer Networks',
        template: '%s',
    },
    description: 'Neenv is an NBFC-powered channel finance platform offering revolving credit, working capital loans, and supply chain financing to MSME dealer networks across India.',
    keywords: ['supply chain finance', 'channel finance', 'dealer financing', 'MSME lending', 'collateral free loans', 'working capital India', 'invoice factoring', 'supplier financing', 'AI lending platform'],
    icons: {
        icon: '/images/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.neenvfin.com',
        siteName: 'Neenv',
        title: 'Neenv | Channel Finance Platform for India\'s MSME Dealer Networks',
        description: 'Neenv is an NBFC-powered channel finance platform offering revolving credit, working capital loans, and supply chain financing to MSME dealer networks across India.',
        images: [
            {
                url: 'https://www.neenvfin.com/images/og/neenv-og.png',
                width: 1200,
                height: 630,
                alt: 'Neenv: AI-Native Supply Chain Finance Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Neenv | Channel Finance Platform for India\'s MSME Dealer Networks',
        description: 'Neenv is an NBFC-powered channel finance platform offering revolving credit, working capital loans, and supply chain financing to MSME dealer networks across India.',
        images: ['https://www.neenvfin.com/images/og/neenv-og.png'],
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
                <WebSiteSchema />
                <SiteNavigationSchema />
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
