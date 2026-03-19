import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1a2d7a',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ fontSize: 60, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Neenv
                </div>
                <div style={{ fontSize: 24, color: '#d5dcf6', marginBottom: 8 }}>
                    AI-Native Supply Chain Finance Platform
                </div>
                <div style={{ fontSize: 18, color: '#8295eb' }}>
                    Digital First · Collateral Free · 72-Hour Disbursal
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
