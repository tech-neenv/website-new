import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Data rights requests under the DPDP Act.
 *
 * Deliberately separate from /api/contact: privacy requests must reach the
 * Grievance Officer rather than the sales inbox, and they carry a statutory
 * response clock that a general enquiry does not.
 */

type RequestType = 'access' | 'correction' | 'erasure' | 'nomination' | 'withdraw-consent' | 'other';

type DataRightsForm = {
    name: string;
    email: string;
    phone?: string;
    companyName?: string;
    requestType: RequestType;
    description: string;
};

const requestTypeLabels: Record<RequestType, string> = {
    access: 'Access — a copy of my personal data',
    correction: 'Correction, completion or updating',
    erasure: 'Erasure / deletion',
    nomination: 'Nomination',
    'withdraw-consent': 'Withdrawal of consent',
    other: 'Other',
};

/** Where data rights requests are routed. */
const GRIEVANCE_OFFICER_EMAIL = 'abhishek.verma@neenvfin.com';

function buildEmailHtml(data: DataRightsForm, receivedAt: string): string {
    return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #1a2d7a; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">Data Rights Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">
                Statutory response due within 30 days &middot; grievance outer limit 90 days
            </p>
        </div>

        <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 150px;">Request type</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e; font-weight: 600;">${requestTypeLabels[data.requestType] ?? data.requestType}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #1a2d7a;">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Phone</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.phone}</td>
                </tr>
                ` : ''}
                ${data.companyName ? `
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Company</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${data.companyName}</td>
                </tr>
                ` : ''}
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Received</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1a1a2e;">${receivedAt}</td>
                </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #f8f9fa; border-radius: 8px;">
                <p style="margin: 0 0 4px; color: #888; font-size: 13px;">Description</p>
                <p style="margin: 0; font-size: 14px; color: #1a1a2e; line-height: 1.5; white-space: pre-wrap;">${data.description}</p>
            </div>
        </div>

        <div style="padding: 16px 32px; background: #f8f9fa; border-top: 1px solid #f0f0f0;">
            <p style="margin: 0; font-size: 12px; color: #999;">
                Acknowledge within 3 working days. Substantive response within 30 calendar days.
            </p>
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

        const data: DataRightsForm = await request.json();

        if (!data.name || !data.email || !data.requestType || !data.description) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!Object.prototype.hasOwnProperty.call(requestTypeLabels, data.requestType)) {
            return NextResponse.json(
                { error: 'Invalid request type' },
                { status: 400 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const receivedAt = new Date().toISOString();

        const { data: result, error } = await resend.emails.send({
            from: 'Neenv Website <noreply@info.neenvfin.com>',
            to: [GRIEVANCE_OFFICER_EMAIL],
            replyTo: data.email,
            subject: `Data Rights Request — ${requestTypeLabels[data.requestType]} — ${data.name}`,
            html: buildEmailHtml(data, receivedAt),
        });

        if (error) {
            console.error('Resend error:', JSON.stringify(error));
            return NextResponse.json(
                { error: 'Failed to send request', details: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: result?.id });
    } catch (err) {
        console.error('Data rights API error:', err);
        return NextResponse.json(
            { error: 'Internal server error', details: err instanceof Error ? err.message : String(err) },
            { status: 500 }
        );
    }
}
