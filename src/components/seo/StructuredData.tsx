export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'Neenv Financial Technologies',
        alternateName: 'Neenv',
        url: 'https://www.neenvfin.com',
        logo: 'https://www.neenvfin.com/images/logos/neenv.png',
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
