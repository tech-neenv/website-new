import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us — Get Started with Neenv',
    description: 'Have questions about supply chain financing? Get in touch with the Neenv team. Quick response, no commitment required.',
    alternates: {
        canonical: 'https://www.neenvfin.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
