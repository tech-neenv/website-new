import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/** Consent record captured with the submission, for DPDP evidencing. */
type ConsentRecord = {
    given: boolean;
    statement: string;
    timestamp: string;
};

type ContactForm = {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    companyType: string;
    message: string;
    consent?: ConsentRecord;
};

const companyTypeLabels: Record<string, string> = {
    manufacturer: 'Manufacturer / Brand',
    distributor: 'Distributor',
    dealer: 'Dealer / Retailer',
    supplier: 'Supplier / Vendor',
    'financial-institution': 'Financial Institution',
    other: 'Other',
};

function buildEmailHtml(data: ContactForm): string {
    return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #1a2d7a; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #1a2d7a;">${data.email}</a></td>
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
            </table>

            ${data.message ? `
            <div style="margin-top: 24px; padding: 16px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #1a2d7a;">
                <p style="margin: 0 0 4px; color: #888; font-size: 13px;">Message</p>
                <p style="margin: 0; font-size: 14px; color: #1a1a2e; line-height: 1.5;">${data.message}</p>
            </div>
            ` : ''}
        </div>

        <div style="padding: 16px 32px; background: #f8f9fa; border-top: 1px solid #f0f0f0;">
            <p style="margin: 0; font-size: 12px; color: #999;">Sent from neenvfin.com contact form</p>
            ${data.consent?.given ? `
            <p style="margin: 8px 0 0; font-size: 12px; color: #999;">
                Consent recorded: &ldquo;${data.consent.statement}&rdquo; &mdash; ${data.consent.timestamp}
            </p>
            ` : ''}
        </div>
    </div>
    `;
}

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const data: ContactForm = await request.json();

        // Basic validation
        if (!data.name || !data.email || !data.phone || !data.companyName || !data.companyType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Consent is enforced server-side too, so a submission that bypasses the
        // browser control is rejected rather than processed without a basis.
        if (!data.consent?.given) {
            return NextResponse.json(
                { error: 'Consent is required to process this enquiry' },
                { status: 400 }
            );
        }

        const { data: result, error } = await resend.emails.send({
            from: 'Neenv Website <noreply@info.neenvfin.com>',
            to: ['info@neenvfin.com'],
            replyTo: data.email,
            subject: `New Inquiry from ${data.name} (${data.companyName})`,
            html: buildEmailHtml(data),
        });

        if (error) {
            console.error('Resend error:', JSON.stringify(error));
            return NextResponse.json(
                { error: 'Failed to send email', details: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: result?.id });
    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json(
            { error: 'Internal server error', details: err instanceof Error ? err.message : String(err) },
            { status: 500 }
        );
    }
}
