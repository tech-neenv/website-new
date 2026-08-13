const baseUrl = 'https://www.neenvfin.com';

export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'Neenv',
        alternateName: ['Neenv Financial Technologies'],
        url: baseUrl,
        logo: `${baseUrl}/images/logos/neenv-icon.svg`,
        description: 'NBFC-powered channel finance platform for MSME dealer networks in India.',
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
            {
                '@type': 'Person',
                name: 'Vijay Dhingra',
                jobTitle: 'Co-Founder',
            },
        ],
        employee: [
            {
                '@type': 'Person',
                name: 'Rahul Chaplot',
                jobTitle: 'Chief Technology Officer',
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
        name: 'Neenv',
        alternateName: ['Neenv Financial Technologies'],
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
        { name: 'About Us', url: `${baseUrl}/about-us` },
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
