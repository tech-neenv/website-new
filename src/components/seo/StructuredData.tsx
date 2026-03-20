const baseUrl = 'https://www.neenvfin.com';

export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'Neenv: AI Native Supply Chain Platform',
        alternateName: ['Neenv', 'Neenv Financial Technologies'],
        url: baseUrl,
        logo: `${baseUrl}/images/logos/neenv-icon.svg`,
        description: 'AI-native supply chain finance platform unlocking credit for India\'s brand-led dealer networks.',
        foundingDate: '2025',
        founders: [
            {
                '@type': 'Person',
                name: 'Vikash Goenka',
                jobTitle: 'Co-Founder & CEO',
            },
            {
                '@type': 'Person',
                name: 'Abhishek Lall',
                jobTitle: 'Co-Founder & COO',
            },
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        serviceType: [
            'Channel Finance',
            'Working Capital Loans',
            'Invoice Factoring',
            'Supplier Financing',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebSiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Neenv: AI Native Supply Chain Platform',
        alternateName: ['Neenv', 'Neenv Financial Technologies'],
        url: baseUrl,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function SiteNavigationSchema() {
    const navItems = [
        { name: 'Channel Financing', url: `${baseUrl}/products/channel-financing` },
        { name: 'Working Capital Loan', url: `${baseUrl}/products/working-capital-loan` },
        { name: 'Invoice Factoring', url: `${baseUrl}/products/invoice-factoring` },
        { name: 'Supplier Financing', url: `${baseUrl}/products/supplier-financing` },
        { name: 'For Financial Institutions', url: `${baseUrl}/for-financial-institutions` },
        { name: 'Contact Us', url: `${baseUrl}/contact` },
    ];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: navItems.map((item, index) => ({
            '@type': 'SiteNavigationElement',
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
