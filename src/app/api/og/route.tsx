import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1a2d7a',
                    padding: '60px',
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-0.03em',
                        marginBottom: 24,
                    }}
                >
                    Neenv
                </div>
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 400,
                        color: '#d5dcf6',
                        textAlign: 'center',
                        marginBottom: 16,
                    }}
                >
                    AI-Native Supply Chain Finance Platform
                </div>
                <div
                    style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: '#8295eb',
                        textAlign: 'center',
                    }}
                >
                    Digital First · Collateral Free · 72-Hour Disbursal
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        fontSize: 16,
                        color: '#5d71c4',
                    }}
                >
                    www.neenvfin.com
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
