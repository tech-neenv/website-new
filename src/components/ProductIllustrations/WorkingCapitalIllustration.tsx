'use client';

import styles from './ProductIllustrations.module.css';

const WorkingCapitalIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 480 420" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="wc-s">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1a2d7a" floodOpacity="0.1" />
                </filter>
                <filter id="wc-s2">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#1a2d7a" floodOpacity="0.06" />
                </filter>
                <linearGradient id="wc-screen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8f9fc" />
                    <stop offset="100%" stopColor="#f0f2f5" />
                </linearGradient>
                <linearGradient id="wc-barGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a714e" />
                    <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
            </defs>

            {/* ====== HERO: Phone / Dashboard Screen ====== */}
            <g style={{ animation: 'scaleIn 0.6s ease-out 0.1s both', transformOrigin: '240px 210px' }}>
                {/* Phone body */}
                <rect x="115" y="28" width="250" height="365" rx="24" fill="#1a2d7a" filter="url(#wc-s)" />
                {/* Screen */}
                <rect x="123" y="42" width="234" height="337" rx="18" fill="url(#wc-screen)" />

                {/* Status bar */}
                <text x="142" y="60" fill="#6b7280" fontSize="8" fontWeight="500" fontFamily="Poppins, sans-serif">9:41</text>
                <circle cx="340" cy="56" r="3" fill="#0a714e" />
                {/* Signal dots */}
                {[0, 1, 2].map((i) => (
                    <rect key={`sig${i}`} x={320 + i * 5} y={53 + (2 - i)} width="3" height={3 + i} rx="0.5" fill="#6b7280" opacity={0.3 + i * 0.2} />
                ))}

                {/* App header */}
                <text x="142" y="86" fill="#1a2d7a" fontSize="14" fontWeight="700" fontFamily="Poppins, sans-serif">Working Capital</text>
                <rect x="142" y="92" width="50" height="3" rx="1.5" fill="#0a714e" opacity="0.4" />

                {/* ---- Loan Amount Card ---- */}
                <rect x="138" y="108" width="204" height="90" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.6" />
                <text x="154" y="128" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif" letterSpacing="0.5">SANCTIONED AMOUNT</text>
                <text x="154" y="154" fill="#1a2d7a" fontSize="24" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;15,00,000</text>
                {/* Utilization bar */}
                <text x="154" y="174" fill="#6b7280" fontSize="7.5" fontFamily="Poppins, sans-serif">Utilization</text>
                <rect x="210" y="167" width="120" height="6" rx="3" fill="#e2e5eb" />
                <rect x="210" y="167" width="84" height="6" rx="3" fill="url(#wc-barGrad)">
                    <animate attributeName="width" from="0" to="84" dur="1s" begin="0.5s" fill="freeze" />
                </rect>
                <text x="300" y="174" fill="#0a714e" fontSize="7" fontWeight="600" fontFamily="Poppins, sans-serif">70%</text>
                {/* Status badge */}
                <rect x="280" y="118" width="52" height="18" rx="9" fill="#ecfdf5" />
                <circle cx="292" cy="127" r="3" fill="#0a714e" />
                <text x="300" y="131" fill="#0a714e" fontSize="7.5" fontWeight="600" fontFamily="Poppins, sans-serif">Active</text>

                {/* ---- Steps / Timeline ---- */}
                <rect x="138" y="210" width="204" height="120" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.6" />
                <text x="154" y="230" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif" letterSpacing="0.5">APPLICATION STATUS</text>

                {/* Timeline vertical track */}
                <rect x="163" y="242" width="3" height="74" rx="1.5" fill="#e2e5eb" />

                {[
                    { y: 248, label: 'Eligibility Check', status: 'Done', color: '#0a714e', delay: 0.5 },
                    { y: 268, label: 'Loan Sanctioned', status: 'Done', color: '#0a714e', delay: 0.7 },
                    { y: 288, label: 'Funds Disbursed', status: 'Done', color: '#0a714e', delay: 0.9 },
                    { y: 308, label: 'Repayment Active', status: 'Active', color: '#f59e0b', delay: 1.1 },
                ].map((step, i) => (
                    <g key={`step${i}`}>
                        <circle cx="165" cy={step.y} r="6" fill="#ffffff" stroke={step.color} strokeWidth="1.2" />
                        <circle cx="165" cy={step.y} r="3.5" fill={step.color} style={{ animation: `checkPop 0.3s ease-out ${step.delay}s both` }} />
                        <text x="180" y={step.y + 3} fill="#1a2d7a" fontSize="8.5" fontWeight="500" fontFamily="Poppins, sans-serif">{step.label}</text>
                        <rect x="295" y={step.y - 7} width={step.status === 'Active' ? 36 : 32} height="14" rx="7" fill={step.color} opacity="0.1" />
                        <text x={295 + (step.status === 'Active' ? 18 : 16)} y={step.y + 2} textAnchor="middle" fill={step.color} fontSize="7" fontWeight="600" fontFamily="Poppins, sans-serif">{step.status}</text>
                    </g>
                ))}

                {/* ---- Bottom nav hint ---- */}
                <rect x="200" y="348" width="80" height="4" rx="2" fill="#1a2d7a" opacity="0.08" />
                <line x1="138" y1="340" x2="342" y2="340" stroke="#e2e5eb" strokeWidth="0.4" />
                <text x="170" y="358" fill="#6b7280" fontSize="7" fontFamily="Poppins, sans-serif">Home</text>
                <text x="230" y="358" fill="#1a2d7a" fontSize="7" fontWeight="600" fontFamily="Poppins, sans-serif">Loans</text>
                <text x="290" y="358" fill="#6b7280" fontSize="7" fontFamily="Poppins, sans-serif">Profile</text>
            </g>

            {/* ====== Floating EMI Card (top-right) ====== */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.6s both' }}>
                <rect x="375" y="80" width="95" height="70" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#wc-s2)" />
                <text x="390" y="100" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">Monthly EMI</text>
                <text x="390" y="118" fill="#1a2d7a" fontSize="16" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;1.4L</text>
                <rect x="390" y="128" width="62" height="12" rx="6" fill="#f0f2ff" />
                <text x="421" y="137" textAnchor="middle" fill="#5d71c4" fontSize="7.5" fontWeight="500" fontFamily="Poppins, sans-serif">12 months</text>
            </g>

            {/* ====== Floating Speed Badge (top-left) ====== */}
            <g style={{ animation: 'scaleIn 0.4s ease-out 0.5s both', transformOrigin: '55px 110px' }}>
                <rect x="15" y="90" width="80" height="40" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="0.7" filter="url(#wc-s2)" />
                <path d="M 35 103 L 31 111 L 35 111 L 31 119" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <text x="44" y="108" fill="#f59e0b" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">72h</text>
                <text x="44" y="120" fill="#b45309" fontSize="7.5" fontFamily="Poppins, sans-serif">Disbursal</text>
            </g>

            {/* ====== Floating Collateral-Free Badge (bottom-left) ====== */}
            <g style={{ animation: 'scaleIn 0.4s ease-out 0.8s both', transformOrigin: '55px 310px' }}>
                <rect x="15" y="290" width="90" height="36" rx="12" fill="#ecfdf5" stroke="#0a714e" strokeWidth="0.6" filter="url(#wc-s2)" />
                <circle cx="35" cy="308" r="8" fill="#0a714e" opacity="0.12" />
                <polyline points="31,308 34,312 40,305" fill="none" stroke="#0a714e" strokeWidth="1.5" strokeLinecap="round" />
                <text x="50" y="306" fill="#0a714e" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">No</text>
                <text x="50" y="317" fill="#0a714e" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">Collateral</text>
            </g>

            {/* ====== Floating Repayment Calendar (bottom-right) ====== */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.7s both' }}>
                <rect x="380" y="280" width="90" height="75" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#wc-s2)" />
                <rect x="380" y="280" width="90" height="22" rx="12" fill="#1a2d7a" opacity="0.06" />
                <rect x="380" y="296" width="90" height="6" fill="#1a2d7a" opacity="0.06" />
                <text x="425" y="296" textAnchor="middle" fill="#1a2d7a" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">April 2026</text>
                {/* Calendar grid */}
                {[0, 1, 2].map((r) =>
                    [0, 1, 2, 3, 4].map((c) => (
                        <rect key={`cal${r}${c}`} x={392 + c * 14} y={310 + r * 13} width="8" height="8" rx="2"
                            fill={r === 0 && c === 2 ? '#0a714e' : '#f0f2f5'}
                        />
                    ))
                )}
                <text x="425" y="348" textAnchor="middle" fill="#0a714e" fontSize="7" fontWeight="500" fontFamily="Poppins, sans-serif">Auto-debit NACH</text>
            </g>

            {/* Decorative */}
            <circle cx="465" cy="200" r="3" fill="#5d71c4" opacity="0.12" />
            <circle cx="12" cy="200" r="2.5" fill="#f59e0b" opacity="0.15" />
        </svg>
    </div>
);

export default WorkingCapitalIllustration;
