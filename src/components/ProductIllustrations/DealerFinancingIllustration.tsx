'use client';

import styles from './ProductIllustrations.module.css';

const DealerFinancingIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 480 440" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="df-s">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1a2d7a" floodOpacity="0.1" />
                </filter>
                <filter id="df-s2">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#1a2d7a" floodOpacity="0.06" />
                </filter>
                <filter id="df-glow">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* Subtle background grid */}
            <g opacity="0.04">
                {Array.from({ length: 8 }).map((_, r) =>
                    Array.from({ length: 10 }).map((_, c) => (
                        <circle key={`d${r}-${c}`} cx={c * 50 + 15} cy={r * 55 + 20} r="1.2" fill="#1a2d7a" />
                    ))
                )}
            </g>

            {/* ====== Flow lines (behind everything) ====== */}
            {/* Brand → Center */}
            <path d="M 115 140 C 145 170, 175 185, 195 195" fill="none" stroke="#5d71c4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
            </path>
            {/* Lender → Center */}
            <path d="M 365 140 C 335 170, 305 185, 285 195" fill="none" stroke="#5d71c4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35">
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
            </path>
            {/* Center → Dealer */}
            <path d="M 240 282 C 240 300, 240 310, 240 320" fill="none" stroke="#0a714e" strokeWidth="2" strokeDasharray="6 4" opacity="0.4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite" />
            </path>

            {/* ====== Brand Building (top-left) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.15s both, floatGentle 4s ease-in-out infinite', transformOrigin: '95px 85px' }}>
                <rect x="55" y="52" width="80" height="62" rx="6" fill="#ffffff" filter="url(#df-s2)" />
                <rect x="55" y="52" width="80" height="62" rx="6" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* Roof */}
                <polygon points="95,30 52,54 138,54" fill="#1a2d7a" />
                {/* Windows row 1 */}
                <rect x="66" y="64" width="12" height="12" rx="2" fill="#5d71c4" opacity="0.2" />
                <rect x="84" y="64" width="12" height="12" rx="2" fill="#5d71c4" opacity="0.15" />
                <rect x="102" y="64" width="12" height="12" rx="2" fill="#5d71c4" opacity="0.2" />
                {/* Door */}
                <rect x="85" y="86" width="16" height="28" rx="3" fill="#1a2d7a" opacity="0.08" />
                <circle cx="98" cy="100" r="1.5" fill="#1a2d7a" opacity="0.15" />
                {/* Label */}
                <rect x="58" y="122" width="74" height="24" rx="12" fill="#ffffff" stroke="#1a2d7a" strokeWidth="0.8" filter="url(#df-s2)" />
                <text x="95" y="138" textAnchor="middle" fill="#1a2d7a" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">Brand</text>
            </g>

            {/* ====== Lender Bank (top-right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.25s both, floatGentle 3.5s ease-in-out 0.5s infinite', transformOrigin: '385px 85px' }}>
                <rect x="345" y="52" width="80" height="62" rx="6" fill="#ffffff" filter="url(#df-s2)" />
                <rect x="345" y="52" width="80" height="62" rx="6" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* Pediment */}
                <polygon points="385,30 342,54 428,54" fill="#1a2d7a" />
                <rect x="345" y="54" width="80" height="5" rx="1" fill="#1a2d7a" opacity="0.12" />
                {/* Columns */}
                {[0, 1, 2, 3].map((i) => (
                    <rect key={`col${i}`} x={358 + i * 16} y="62" width="6" height="44" rx="2" fill="#5d71c4" opacity="0.18" />
                ))}
                <rect x="345" y="106" width="80" height="5" rx="1" fill="#1a2d7a" opacity="0.08" />
                {/* Label */}
                <rect x="348" y="122" width="74" height="24" rx="12" fill="#ffffff" stroke="#1a2d7a" strokeWidth="0.8" filter="url(#df-s2)" />
                <text x="385" y="138" textAnchor="middle" fill="#1a2d7a" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">Lender</text>
            </g>

            {/* ====== Flow label pills ====== */}
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.5s both', transformOrigin: '148px 166px' }}>
                <rect x="115" y="158" width="66" height="18" rx="9" fill="#ffffff" stroke="#5d71c4" strokeWidth="0.5" />
                <text x="148" y="170" textAnchor="middle" fill="#5d71c4" fontSize="8.5" fontWeight="600" fontFamily="Poppins, sans-serif">Approves</text>
            </g>
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.6s both', transformOrigin: '332px 166px' }}>
                <rect x="304" y="158" width="56" height="18" rx="9" fill="#ffffff" stroke="#5d71c4" strokeWidth="0.5" />
                <text x="332" y="170" textAnchor="middle" fill="#5d71c4" fontSize="8.5" fontWeight="600" fontFamily="Poppins, sans-serif">Funds</text>
            </g>

            {/* ====== HERO: Revolving Credit Facility (center) ====== */}
            <g style={{ animation: 'scaleIn 0.6s ease-out 0.1s both', transformOrigin: '240px 232px' }}>
                {/* Outer revolving ring */}
                <circle cx="240" cy="232" r="62" fill="none" stroke="#1a2d7a" strokeWidth="3" opacity="0.06" />
                <circle cx="240" cy="232" r="62" fill="none" stroke="#5d71c4" strokeWidth="2" strokeDasharray="12 8" opacity="0.15">
                    <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="4s" repeatCount="indefinite" />
                </circle>
                {/* Pulsing glow ring */}
                <circle cx="240" cy="232" r="56" fill="none" stroke="#0a714e" strokeWidth="1.5" opacity="0.08">
                    <animate attributeName="r" values="56;62;56" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Inner filled circle */}
                <circle cx="240" cy="232" r="48" fill="#1a2d7a" filter="url(#df-glow)" />

                {/* Circular arrows inside (revolving concept) */}
                <path d="M 220 208 A 22 22 0 0 1 260 208" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <polygon points="260,205 264,208 258,210" fill="#ffffff" opacity="0.5" />
                <path d="M 260 256 A 22 22 0 0 1 220 256" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <polygon points="220,259 216,256 222,254" fill="#ffffff" opacity="0.5" />

                {/* Shield in center */}
                <path d="M 240 220 L 253 226 L 253 238 Q 253 246 240 250 Q 227 246 227 238 L 227 226 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
                <polyline points="234,235 239,241 248,230" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Orbiting dots on ring */}
                <circle cx="240" cy="170" r="5" fill="#0a714e" opacity="0.9">
                    <animate attributeName="cx" values="240;298;240;182;240" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="170;232;294;232;170" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="240" cy="294" r="4" fill="#f59e0b" opacity="0.8">
                    <animate attributeName="cx" values="240;182;240;298;240" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="294;232;170;232;294" dur="6s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* ====== Dealer Shop (bottom-center) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both, floatGentle 4s ease-in-out 0.3s infinite', transformOrigin: '240px 365px' }}>
                <rect x="190" y="332" width="100" height="65" rx="6" fill="#ffffff" filter="url(#df-s2)" />
                <rect x="190" y="332" width="100" height="65" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
                {/* Awning */}
                <path d="M 186 332 Q 215 314 240 314 Q 265 314 294 332" fill="#f59e0b" />
                <path d="M 192 330 Q 216 318 240 318 Q 264 318 288 330" fill="#ffffff" opacity="0.15" />
                {/* Shelves with goods */}
                <rect x="200" y="342" width="14" height="12" rx="2" fill="#f59e0b" opacity="0.12" />
                <rect x="218" y="342" width="14" height="12" rx="2" fill="#5d71c4" opacity="0.1" />
                <rect x="236" y="342" width="14" height="12" rx="2" fill="#f59e0b" opacity="0.12" />
                <rect x="254" y="342" width="14" height="12" rx="2" fill="#0a714e" opacity="0.08" />
                {/* Shelf line */}
                <line x1="196" y1="358" x2="274" y2="358" stroke="#e2e5eb" strokeWidth="0.6" />
                <rect x="200" y="362" width="12" height="10" rx="2" fill="#0a714e" opacity="0.08" />
                <rect x="216" y="362" width="12" height="10" rx="2" fill="#5d71c4" opacity="0.06" />
                <rect x="232" y="362" width="12" height="10" rx="2" fill="#f59e0b" opacity="0.1" />
                <rect x="248" y="362" width="12" height="10" rx="2" fill="#0a714e" opacity="0.06" />
                <rect x="264" y="362" width="12" height="10" rx="2" fill="#5d71c4" opacity="0.08" />
                {/* Door */}
                <rect x="228" y="376" width="18" height="21" rx="3" fill="#1a2d7a" opacity="0.06" />
                <circle cx="243" cy="387" r="1.5" fill="#1a2d7a" opacity="0.15" />
                {/* Label */}
                <rect x="206" y="404" width="68" height="24" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="0.7" filter="url(#df-s2)" />
                <text x="240" y="420" textAnchor="middle" fill="#1a2d7a" fontSize="10.5" fontWeight="600" fontFamily="Poppins, sans-serif">Dealer</text>
            </g>

            {/* ====== Coins dropping to dealer ====== */}
            <g style={{ animation: 'coinDrop 0.6s ease-out 0.8s both', transformOrigin: '228px 306px' }}>
                <circle cx="228" cy="306" r="11" fill="#0a714e" />
                <text x="228" y="311" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
            </g>
            <g style={{ animation: 'coinDrop 0.5s ease-out 1.0s both', transformOrigin: '254px 310px' }}>
                <circle cx="254" cy="310" r="8" fill="#f59e0b" />
                <text x="254" y="314" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
            </g>
            <g style={{ animation: 'coinDrop 0.5s ease-out 1.15s both', transformOrigin: '242px 314px' }}>
                <circle cx="242" cy="314" r="5.5" fill="#0a714e" opacity="0.6" />
            </g>

            {/* ====== Credit Line badge (below center circle) ====== */}
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.7s both', transformOrigin: '270px 296px' }}>
                <rect x="254" y="288" width="72" height="18" rx="9" fill="#ecfdf5" stroke="#0a714e" strokeWidth="0.5" />
                <text x="290" y="300" textAnchor="middle" fill="#0a714e" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">Credit Line</text>
            </g>

            {/* ====== Floating: Limit Utilization Card (left) ====== */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.5s both' }}>
                <rect x="10" y="192" width="108" height="80" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#df-s2)" />
                <text x="24" y="212" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">Credit Limit</text>
                <text x="24" y="232" fill="#1a2d7a" fontSize="18" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;25L</text>
                {/* Utilization bar */}
                <rect x="24" y="244" width="80" height="6" rx="3" fill="#e2e5eb" />
                <rect x="24" y="244" width="56" height="6" rx="3" fill="#0a714e">
                    <animate attributeName="width" from="0" to="56" dur="0.8s" begin="0.8s" fill="freeze" />
                </rect>
                <text x="24" y="262" fill="#0a714e" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">&#x20B9;7L available</text>
            </g>

            {/* ====== Floating: Repayment Card (right) ====== */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.6s both' }}>
                <rect x="362" y="192" width="108" height="80" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#df-s2)" />
                <text x="376" y="212" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">Repayment</text>
                <text x="376" y="231" fill="#1a2d7a" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">On Agreed</text>
                <text x="376" y="245" fill="#1a2d7a" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">Terms</text>
                {/* Revolving indicator */}
                <rect x="376" y="254" width="80" height="12" rx="6" fill="#ecfdf5" />
                <text x="416" y="263" textAnchor="middle" fill="#0a714e" fontSize="7.5" fontWeight="500" fontFamily="Poppins, sans-serif">Revolving Facility</text>
            </g>

            {/* ====== Top label: "Revolving Credit" ====== */}
            <g style={{ animation: 'scaleIn 0.4s ease-out 0.3s both', transformOrigin: '240px 158px' }}>
                <rect x="187" y="150" width="106" height="20" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.5" />
                <text x="240" y="164" textAnchor="middle" fill="#1a2d7a" fontSize="8.5" fontWeight="600" fontFamily="Poppins, sans-serif" opacity="0.6" letterSpacing="1">REVOLVING CREDIT</text>
            </g>

            {/* Decorative */}
            <circle cx="170" cy="28" r="2.5" fill="#f59e0b" opacity="0.12" />
            <circle cx="310" cy="25" r="2" fill="#5d71c4" opacity="0.1" />
            <rect x="155" y="418" width="4" height="4" rx="1" fill="#0a714e" opacity="0.08" transform="rotate(45 157 420)" />
            <rect x="325" y="415" width="4" height="4" rx="1" fill="#5d71c4" opacity="0.08" transform="rotate(45 327 417)" />
        </svg>
    </div>
);

export default DealerFinancingIllustration;
