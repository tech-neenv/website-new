import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactForm = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    companyType: string;
    inquiryType: string;
    productInterest: string[];
    annualTurnover: string;
    message: string;
    preferredContact: string;
};

const companyTypeLabels: Record<string, string> = {
    manufacturer: 'Manufacturer / Brand',
    distributor: 'Distributor',
    dealer: 'Dealer / Retailer',
    supplier: 'Supplier / Vendor',
    'financial-institution': 'Financial Institution',
    other: 'Other',
};

const inquiryTypeLabels: Record<string, string> = {
    financing: 'Need Financing',
    partnership: 'Partnership',
    demo: 'Request Demo',
    general: 'General Inquiry',
};

const productLabels: Record<string, string> = {
    'dealer-financing': 'Dealer Financing',
    'supplier-financing': 'Supplier Financing',
    'working-capital': 'Working Capital Loan',
};

const turnoverLabels: Record<string, string> = {
    'below-1cr': 'Below ₹1 Crore',
    '1-5cr': '₹1 - 5 Crore',
    '5-25cr': '₹5 - 25 Crore',
    '25-100cr': '₹25 - 100 Crore',
    'above-100cr': 'Above ₹100 Crore',
};

function buildEmailHtml(data: ContactForm): string {
    const products = data.productInterest
        .map((p) => productLabels[p] || p)
        .join(', ') || 'None selected';

    return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #1a1a2e; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #4a6cf7;">${data.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Phone</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.phone}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Company</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.companyName}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Company Type</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${companyTypeLabels[data.companyType] || data.companyType}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Inquiry Type</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">
                        <span style="background: #f0f4ff; color: #4a6cf7; padding: 3px 10px; border-radius: 12px; font-size: 13px;">${inquiryTypeLabels[data.inquiryType] || data.inquiryType}</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Products</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${products}</td>
                </tr>
                ${data.annualTurnover ? `
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Annual Turnover</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${turnoverLabels[data.annualTurnover] || data.annualTurnover}</td>
                </tr>
                ` : ''}
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Preferred Contact</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.preferredContact.charAt(0).toUpperCase() + data.preferredContact.slice(1)}</td>
                </tr>
            </table>

            ${data.message ? `
            <div style="margin-top: 24px; padding: 16px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #4a6cf7;">
                <p style="margin: 0 0 4px; color: #888; font-size: 13px;">Message</p>
                <p style="margin: 0; font-size: 14px; color: #1a1a2e; line-height: 1.5;">${data.message}</p>
            </div>
            ` : ''}
        </div>

        <div style="padding: 16px 32px; background: #f8f9fa; border-top: 1px solid #f0f0f0;">
            <p style="margin: 0; font-size: 12px; color: #999;">Sent from neenvfin.com contact form</p>
        </div>
    </div>
    `;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactForm = await request.json();

        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.companyName || !data.companyType || !data.inquiryType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: 'Neenv Website <noreply@info.neenvfin.com>',
            to: ['info@neenvfin.com'],
            replyTo: data.email,
            subject: `New Inquiry: ${inquiryTypeLabels[data.inquiryType] || data.inquiryType} — ${data.firstName} ${data.lastName} (${data.companyName})`,
            html: buildEmailHtml(data),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
