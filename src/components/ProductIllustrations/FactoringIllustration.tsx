'use client';

import styles from './ProductIllustrations.module.css';

const FactoringIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 480 420" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="fc-s">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1a2d7a" floodOpacity="0.1" />
                </filter>
                <filter id="fc-s2">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#1a2d7a" floodOpacity="0.06" />
                </filter>
                <filter id="fc-glow">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="fc-invoiceBg" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8f9fc" />
                </linearGradient>
                <linearGradient id="fc-greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0a714e" />
                    <stop offset="100%" stopColor="#086b48" />
                </linearGradient>
            </defs>

            {/* ====== HERO: Large Invoice Document ====== */}
            <g style={{ animation: 'scaleIn 0.6s ease-out 0.1s both', transformOrigin: '190px 185px' }}>
                {/* Invoice body */}
                <rect x="80" y="45" width="220" height="280" rx="12" fill="url(#fc-invoiceBg)" filter="url(#fc-s)" />
                <rect x="80" y="45" width="220" height="280" rx="12" fill="none" stroke="#d1d5db" strokeWidth="0.8" />

                {/* Top color bar */}
                <rect x="80" y="45" width="220" height="40" rx="12" fill="#1a2d7a" />
                <rect x="80" y="73" width="220" height="12" fill="#1a2d7a" />
                <text x="100" y="72" fill="#fff" fontSize="11" fontWeight="600" fontFamily="Poppins, sans-serif" letterSpacing="1.5" opacity="0.9">INVOICE</text>
                <text x="274" y="72" textAnchor="end" fill="#fff" fontSize="9" fontFamily="Poppins, sans-serif" opacity="0.5">#INV-20260318</text>

                {/* Invoice details section */}
                <text x="100" y="108" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif" letterSpacing="0.5">FROM</text>
                <rect x="100" y="114" width="80" height="4" rx="2" fill="#1a2d7a" opacity="0.12" />
                <rect x="100" y="122" width="55" height="3.5" rx="1.7" fill="#e2e5eb" />
                <text x="215" y="108" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif" letterSpacing="0.5">TO</text>
                <rect x="215" y="114" width="70" height="4" rx="2" fill="#1a2d7a" opacity="0.12" />
                <rect x="215" y="122" width="50" height="3.5" rx="1.7" fill="#e2e5eb" />

                {/* Separator */}
                <line x1="100" y1="140" x2="280" y2="140" stroke="#e2e5eb" strokeWidth="0.6" />

                {/* Line items */}
                <text x="100" y="157" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">Description</text>
                <text x="260" y="157" textAnchor="end" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">Amount</text>
                <line x1="100" y1="163" x2="280" y2="163" stroke="#e2e5eb" strokeWidth="0.4" />
                {[0, 1, 2].map((i) => (
                    <g key={`li${i}`}>
                        <rect x="100" y={172 + i * 22} width={85 - i * 12} height="4" rx="2" fill="#e2e5eb" />
                        <rect x="240" y={172 + i * 22} width="38" height="4" rx="2" fill="#e2e5eb" />
                    </g>
                ))}

                {/* Total line */}
                <line x1="100" y1="240" x2="280" y2="240" stroke="#1a2d7a" strokeWidth="0.8" strokeDasharray="3 2" />
                <text x="100" y="258" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif">Total Amount</text>
                <text x="280" y="258" textAnchor="end" fill="#1a2d7a" fontSize="14" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;4,75,000</text>

                {/* Signature area */}
                <line x1="100" y1="285" x2="175" y2="285" stroke="#5d71c4" strokeWidth="0.6" strokeDasharray="4 2" />
                <text x="100" y="296" fill="#9ca3af" fontSize="7" fontFamily="Poppins, sans-serif">Authorized Signature</text>

                {/* Verified stamp */}
                <g style={{ animation: 'checkPop 0.4s ease-out 0.8s both', transformOrigin: '260px 288px' }}>
                    <circle cx="260" cy="288" r="18" fill="#0a714e" opacity="0.08" />
                    <circle cx="260" cy="288" r="14" fill="none" stroke="#0a714e" strokeWidth="1.2" strokeDasharray="3 2" />
                    <polyline points="253,288 258,294 269,283" fill="none" stroke="#0a714e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>

            {/* ====== Brand Verification Badge (top-right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both, floatGentle 3.5s ease-in-out infinite', transformOrigin: '395px 72px' }}>
                <rect x="335" y="42" width="120" height="60" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" filter="url(#fc-s2)" />
                {/* Building mini */}
                <polygon points="360,52 350,58 370,58" fill="#1a2d7a" />
                <rect x="350" y="58" width="20" height="16" rx="2" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.5" />
                <rect x="354" y="62" width="4" height="4" rx="0.5" fill="#5d71c4" opacity="0.3" />
                <rect x="362" y="62" width="4" height="4" rx="0.5" fill="#5d71c4" opacity="0.3" />
                {/* Check */}
                <circle cx="360" cy="85" r="5" fill="#0a714e" style={{ animation: 'checkPop 0.3s ease-out 0.7s both' }} />
                <polyline points="357,85 359.5,88 364,82" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                {/* Text */}
                <text x="382" y="62" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif">Brand Verified</text>
                <rect x="382" y="68" width="55" height="3" rx="1.5" fill="#e2e5eb" />
                <rect x="382" y="75" width="40" height="3" rx="1.5" fill="#e2e5eb" />
                <text x="382" y="92" fill="#0a714e" fontSize="8" fontWeight="500" fontFamily="Poppins, sans-serif">Confirmed</text>
            </g>

            {/* ====== Animated arrow: Invoice → Funds ====== */}
            <path d="M 300 200 C 330 200, 345 200, 355 200" fill="none" stroke="#0a714e" strokeWidth="2" strokeDasharray="6 4" opacity="0.45">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
            </path>
            {/* Arrow head */}
            <polygon points="355,195 365,200 355,205" fill="#0a714e" opacity="0.4" />

            {/* ====== Same-Day Funds Result (right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.5s both', transformOrigin: '400px 218px' }}>
                <rect x="340" y="145" width="128" height="150" rx="14" fill="#ffffff" stroke="#0a714e" strokeWidth="1" filter="url(#fc-s)" />
                {/* Header */}
                <rect x="340" y="145" width="128" height="36" rx="14" fill="#0a714e" />
                <rect x="340" y="169" width="128" height="12" fill="#0a714e" />
                <text x="404" y="170" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600" fontFamily="Poppins, sans-serif">FUNDED</text>

                {/* Amount */}
                <text x="360" y="205" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">Disbursed (90%)</text>
                <text x="360" y="225" fill="#0a714e" fontSize="18" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;4.27L</text>

                {/* Speed indicator */}
                <rect x="358" y="240" width="92" height="20" rx="10" fill="#ecfdf5" />
                <path d="M 370 246 L 367 252 L 371 252 L 368 258" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="378" y="254" fill="#0a714e" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif">Same Day</text>

                {/* Large coin stack */}
                <g style={{ animation: 'coinDrop 0.6s ease-out 0.9s both', transformOrigin: '404px 275px' }}>
                    <ellipse cx="404" cy="282" rx="18" ry="5" fill="#0a714e" opacity="0.15" />
                    <ellipse cx="404" cy="278" rx="18" ry="5" fill="#0a714e" opacity="0.2" />
                    <ellipse cx="404" cy="274" rx="18" ry="5" fill="#0a714e" opacity="0.3" />
                    <ellipse cx="404" cy="270" rx="18" ry="5" fill="#0a714e" />
                    <text x="404" y="274" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
            </g>

            {/* ====== Status dots (bottom of invoice) ====== */}
            <g style={{ animation: 'scaleIn 0.4s ease-out 0.6s both', transformOrigin: '190px 350px' }}>
                <rect x="110" y="340" width="160" height="28" rx="14" fill="#f8f9fc" stroke="#e2e5eb" strokeWidth="0.6" />
                {/* Three status dots with connecting line */}
                <line x1="148" y1="354" x2="232" y2="354" stroke="#e2e5eb" strokeWidth="1.5" />
                {[
                    { cx: 148, color: '#1a2d7a', label: 'Raised', delay: 0.7 },
                    { cx: 190, color: '#5d71c4', label: 'Verified', delay: 0.9 },
                    { cx: 232, color: '#0a714e', label: 'Funded', delay: 1.1 },
                ].map((dot) => (
                    <g key={dot.label}>
                        <circle cx={dot.cx} cy={354} r="6" fill={dot.color} style={{ animation: `checkPop 0.3s ease-out ${dot.delay}s both` }} />
                        <polyline
                            points={`${dot.cx - 3},354 ${dot.cx - 0.5},357 ${dot.cx + 4},351`}
                            fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"
                        />
                    </g>
                ))}
            </g>

            {/* ====== Floating mini cards ====== */}
            {/* Processing time card */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.5s both' }}>
                <rect x="22" y="360" width="80" height="45" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#fc-s2)" />
                <circle cx="44" cy="378" r="10" fill="#f8f9fc" stroke="#1a2d7a" strokeWidth="0.6" />
                <line x1="44" y1="378" x2="44" y2="371" stroke="#1a2d7a" strokeWidth="1" strokeLinecap="round" />
                <line x1="44" y1="378" x2="50" y2="378" stroke="#5d71c4" strokeWidth="0.8" strokeLinecap="round" />
                <circle cx="44" cy="378" r="1.2" fill="#1a2d7a" />
                <text x="60" y="376" fill="#1a2d7a" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">T+0</text>
                <text x="60" y="388" fill="#6b7280" fontSize="7" fontFamily="Poppins, sans-serif">Processing</text>
            </g>

            {/* Decorative */}
            <circle cx="460" cy="350" r="3" fill="#f59e0b" opacity="0.15" />
            <circle cx="40" cy="50" r="2.5" fill="#5d71c4" opacity="0.12" />
            <rect x="460" y="120" width="5" height="5" rx="1" fill="#0a714e" opacity="0.1" transform="rotate(45 462.5 122.5)" />
        </svg>
    </div>
);

export default FactoringIllustration;
