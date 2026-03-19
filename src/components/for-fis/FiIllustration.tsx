'use client';

import styles from './FiIllustration.module.css';

const FiIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 480 440" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="fi-s">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1a2d7a" floodOpacity="0.1" />
                </filter>
                <filter id="fi-s2">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#1a2d7a" floodOpacity="0.06" />
                </filter>
                <filter id="fi-glow">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="fi-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a2d7a" />
                    <stop offset="100%" stopColor="#5d71c4" />
                </linearGradient>
            </defs>

            {/* Subtle dot grid background */}
            <g opacity="0.04">
                {Array.from({ length: 8 }).map((_, r) =>
                    Array.from({ length: 10 }).map((_, c) => (
                        <circle key={`d${r}-${c}`} cx={c * 50 + 15} cy={r * 55 + 20} r="1.2" fill="#1a2d7a" />
                    ))
                )}
            </g>

            {/* ====== CENTRAL HUB: Neenv Platform ====== */}
            <g style={{ animation: 'scaleIn 0.6s ease-out 0.1s both', transformOrigin: '240px 220px' }}>
                {/* Outer orbiting ring */}
                <circle cx="240" cy="220" r="72" fill="none" stroke="#1a2d7a" strokeWidth="2" opacity="0.06" />
                <circle cx="240" cy="220" r="72" fill="none" stroke="#5d71c4" strokeWidth="1.5" strokeDasharray="10 8" opacity="0.12">
                    <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="5s" repeatCount="indefinite" />
                </circle>
                {/* Inner pulsing ring */}
                <circle cx="240" cy="220" r="64" fill="none" stroke="#0a714e" strokeWidth="1" opacity="0.06">
                    <animate attributeName="r" values="64;70;64" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3.5s" repeatCount="indefinite" />
                </circle>

                {/* Core circle */}
                <circle cx="240" cy="220" r="52" fill="url(#fi-grad)" filter="url(#fi-glow)" />

                {/* Building icon inside */}
                <rect x="221" y="200" width="38" height="30" rx="3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="221" y="200" width="38" height="6" rx="2" fill="#ffffff" opacity="0.2" />
                {/* Windows */}
                <rect x="227" y="211" width="6" height="5" rx="1" fill="#ffffff" opacity="0.4" />
                <rect x="237" y="211" width="6" height="5" rx="1" fill="#ffffff" opacity="0.3" />
                <rect x="247" y="211" width="6" height="5" rx="1" fill="#ffffff" opacity="0.4" />
                <rect x="227" y="220" width="6" height="5" rx="1" fill="#ffffff" opacity="0.3" />
                <rect x="247" y="220" width="6" height="5" rx="1" fill="#ffffff" opacity="0.3" />
                {/* Door */}
                <rect x="237" y="222" width="6" height="8" rx="1.5" fill="#f59e0b" opacity="0.6" />

                {/* Neenv label */}
                <text x="240" y="245" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.08em">NEENV</text>

                {/* Orbiting dots */}
                <circle r="4.5" fill="#0a714e" opacity="0.85">
                    <animate attributeName="cx" values="240;310;240;170;240" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="148;220;292;220;148" dur="7s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#f59e0b" opacity="0.75">
                    <animate attributeName="cx" values="310;240;170;240;310" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="220;292;220;148;220" dur="7s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* ====== Flow lines to MSME nodes ====== */}
            {/* To Dealer (bottom-left) */}
            <path d="M 200 262 C 170 290, 130 310, 110 330" fill="none" stroke="#5d71c4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
            </path>
            {/* To Supplier (bottom-right) */}
            <path d="M 280 262 C 310 290, 350 310, 370 330" fill="none" stroke="#5d71c4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
            </path>
            {/* To Distributor (bottom-center) */}
            <path d="M 240 272 C 240 295, 240 310, 240 325" fill="none" stroke="#0a714e" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.3s" repeatCount="indefinite" />
            </path>

            {/* ====== Bank/FI Building (top-left) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.2s both, floatGentle 4s ease-in-out infinite', transformOrigin: '85px 80px' }}>
                <rect x="50" y="52" width="70" height="52" rx="5" fill="#ffffff" filter="url(#fi-s2)" />
                <rect x="50" y="52" width="70" height="52" rx="5" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                <polygon points="85,32 46,54 124,54" fill="#1a2d7a" />
                <rect x="50" y="54" width="70" height="4" rx="1" fill="#1a2d7a" opacity="0.1" />
                {[0, 1, 2, 3].map((i) => (
                    <rect key={`bc${i}`} x={60 + i * 14} y="62" width="5" height="36" rx="2" fill="#5d71c4" opacity="0.15" />
                ))}
                <rect x="50" y="98" width="70" height="4" rx="1" fill="#1a2d7a" opacity="0.08" />
                <rect x="53" y="112" width="64" height="22" rx="11" fill="#ffffff" stroke="#1a2d7a" strokeWidth="0.8" filter="url(#fi-s2)" />
                <text x="85" y="127" textAnchor="middle" fill="#1a2d7a" fontSize="9.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Your Bank</text>
            </g>

            {/* Flow: Bank → Neenv */}
            <path d="M 120 100 C 150 130, 180 160, 200 180" fill="none" stroke="#1a2d7a" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
            </path>
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.5s both', transformOrigin: '148px 148px' }}>
                <rect x="118" y="140" width="60" height="17" rx="8.5" fill="#ffffff" stroke="#5d71c4" strokeWidth="0.5" />
                <text x="148" y="152" textAnchor="middle" fill="#5d71c4" fontSize="8" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Partners</text>
            </g>

            {/* ====== AI Shield (top-right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.3s both, floatGentle 3.5s ease-in-out 0.5s infinite', transformOrigin: '395px 80px' }}>
                <rect x="355" y="42" width="80" height="76" rx="12" fill="#ffffff" filter="url(#fi-s2)" stroke="#e2e5eb" strokeWidth="0.7" />
                {/* AI brain icon */}
                <g transform="translate(380, 52)">
                    <circle cx="15" cy="14" r="13" fill="none" stroke="#1a2d7a" strokeWidth="1.2" />
                    <path d="M 9 10 Q 12 6 15 10 Q 18 6 21 10" fill="none" stroke="#1a2d7a" strokeWidth="1" strokeLinecap="round" />
                    <path d="M 9 16 Q 12 20 15 16 Q 18 20 21 16" fill="none" stroke="#5d71c4" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="11" cy="13" r="1.5" fill="#0a714e" />
                    <circle cx="19" cy="13" r="1.5" fill="#0a714e" />
                    <line x1="15" y1="8" x2="15" y2="2" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="7" y1="6" x2="4" y2="2" stroke="#f59e0b" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
                        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="23" y1="6" x2="26" y2="2" stroke="#f59e0b" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
                        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    </line>
                </g>
                <text x="395" y="88" textAnchor="middle" fill="#1a2d7a" fontSize="8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">AI Underwriting</text>
                {/* Status bar */}
                <rect x="367" y="96" width="56" height="5" rx="2.5" fill="#e2e5eb" />
                <rect x="367" y="96" width="40" height="5" rx="2.5" fill="#0a714e">
                    <animate attributeName="width" values="20;40;56;40;20" dur="4s" repeatCount="indefinite" />
                </rect>
                <text x="395" y="113" textAnchor="middle" fill="#0a714e" fontSize="7.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Monitoring Active</text>
            </g>

            {/* Flow: AI → Neenv */}
            <path d="M 360 100 C 330 130, 300 160, 280 180" fill="none" stroke="#1a2d7a" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25">
                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.8s" repeatCount="indefinite" />
            </path>
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.6s both', transformOrigin: '332px 148px' }}>
                <rect x="302" y="140" width="60" height="17" rx="8.5" fill="#ffffff" stroke="#0a714e" strokeWidth="0.5" />
                <text x="332" y="152" textAnchor="middle" fill="#0a714e" fontSize="8" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Assesses</text>
            </g>

            {/* ====== MSME: Dealer Shop (bottom-left) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both, floatGentle 4s ease-in-out 0.3s infinite', transformOrigin: '105px 365px' }}>
                <rect x="65" y="335" width="80" height="52" rx="5" fill="#ffffff" filter="url(#fi-s2)" />
                <rect x="65" y="335" width="80" height="52" rx="5" fill="#ffffff" stroke="#f59e0b" strokeWidth="0.8" />
                {/* Awning */}
                <path d="M 62 335 Q 85 320 105 320 Q 125 320 148 335" fill="#f59e0b" />
                {/* Mini goods */}
                <rect x="73" y="344" width="10" height="8" rx="1.5" fill="#f59e0b" opacity="0.15" />
                <rect x="87" y="344" width="10" height="8" rx="1.5" fill="#5d71c4" opacity="0.1" />
                <rect x="101" y="344" width="10" height="8" rx="1.5" fill="#0a714e" opacity="0.1" />
                <rect x="115" y="344" width="10" height="8" rx="1.5" fill="#f59e0b" opacity="0.12" />
                <line x1="70" y1="356" x2="140" y2="356" stroke="#e2e5eb" strokeWidth="0.5" />
                <rect x="73" y="360" width="8" height="7" rx="1.5" fill="#5d71c4" opacity="0.08" />
                <rect x="85" y="360" width="8" height="7" rx="1.5" fill="#0a714e" opacity="0.06" />
                <rect x="97" y="360" width="8" height="7" rx="1.5" fill="#f59e0b" opacity="0.08" />
                {/* Door */}
                <rect x="111" y="364" width="12" height="23" rx="2" fill="#1a2d7a" opacity="0.06" />
                <circle cx="120" cy="375" r="1" fill="#1a2d7a" opacity="0.15" />
                {/* Label */}
                <rect x="72" y="394" width="66" height="22" rx="11" fill="#fffbeb" stroke="#f59e0b" strokeWidth="0.7" filter="url(#fi-s2)" />
                <text x="105" y="409" textAnchor="middle" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Dealer</text>
            </g>

            {/* ====== MSME: Distributor (bottom-center) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.45s both, floatGentle 3.8s ease-in-out 0.6s infinite', transformOrigin: '240px 370px' }}>
                <rect x="200" y="335" width="80" height="52" rx="5" fill="#ffffff" filter="url(#fi-s2)" />
                <rect x="200" y="335" width="80" height="52" rx="5" fill="#ffffff" stroke="#0a714e" strokeWidth="0.8" />
                {/* Truck/warehouse icon */}
                <rect x="213" y="344" width="34" height="20" rx="3" fill="#0a714e" opacity="0.08" />
                <rect x="250" y="350" width="16" height="14" rx="2" fill="#0a714e" opacity="0.06" />
                <circle cx="224" cy="368" r="4" fill="none" stroke="#0a714e" strokeWidth="1" opacity="0.2" />
                <circle cx="258" cy="368" r="4" fill="none" stroke="#0a714e" strokeWidth="1" opacity="0.2" />
                {/* Boxes */}
                <rect x="216" y="348" width="8" height="8" rx="1" fill="#5d71c4" opacity="0.12" />
                <rect x="228" y="348" width="8" height="8" rx="1" fill="#f59e0b" opacity="0.12" />
                <rect x="216" y="358" width="8" height="4" rx="1" fill="#1a2d7a" opacity="0.08" />
                {/* Label */}
                <rect x="198" y="394" width="84" height="22" rx="11" fill="#ecfdf5" stroke="#0a714e" strokeWidth="0.7" filter="url(#fi-s2)" />
                <text x="240" y="409" textAnchor="middle" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Distributor</text>
            </g>

            {/* ====== MSME: Supplier (bottom-right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.5s both, floatGentle 4.2s ease-in-out 0.9s infinite', transformOrigin: '375px 365px' }}>
                <rect x="335" y="335" width="80" height="52" rx="5" fill="#ffffff" filter="url(#fi-s2)" />
                <rect x="335" y="335" width="80" height="52" rx="5" fill="#ffffff" stroke="#5d71c4" strokeWidth="0.8" />
                {/* Factory icon */}
                <rect x="348" y="352" width="22" height="28" rx="2" fill="#5d71c4" opacity="0.08" />
                <rect x="348" y="340" width="8" height="12" rx="1" fill="#5d71c4" opacity="0.1" />
                {/* Chimney smoke */}
                <circle cx="352" cy="336" r="2.5" fill="#9ca3af" opacity="0.08">
                    <animate attributeName="cy" values="336;330;324" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.08;0.04;0" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Windows */}
                <rect x="352" y="356" width="5" height="5" rx="1" fill="#5d71c4" opacity="0.15" />
                <rect x="360" y="356" width="5" height="5" rx="1" fill="#5d71c4" opacity="0.12" />
                <rect x="352" y="364" width="5" height="5" rx="1" fill="#5d71c4" opacity="0.12" />
                <rect x="360" y="364" width="5" height="5" rx="1" fill="#5d71c4" opacity="0.15" />
                {/* Gear */}
                <g transform="translate(390, 350)">
                    <circle cx="0" cy="0" r="8" fill="none" stroke="#1a2d7a" strokeWidth="0.8" opacity="0.1">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="3" fill="#1a2d7a" opacity="0.06" />
                </g>
                {/* Label */}
                <rect x="342" y="394" width="66" height="22" rx="11" fill="#eef2ff" stroke="#5d71c4" strokeWidth="0.7" filter="url(#fi-s2)" />
                <text x="375" y="409" textAnchor="middle" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Supplier</text>
            </g>

            {/* ====== Floating Cards ====== */}
            {/* Products card (left) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.5s both' }}>
                <rect x="4" y="200" width="100" height="72" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#fi-s2)" />
                <text x="16" y="218" fill="#6b7280" fontSize="7.5" fontFamily="Plus Jakarta Sans, sans-serif">Products</text>
                <g transform="translate(16, 226)">
                    <rect width="72" height="9" rx="4.5" fill="#1a2d7a" opacity="0.06" />
                    <text x="5" y="7" fill="#1a2d7a" fontSize="6.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Dealer Finance</text>
                </g>
                <g transform="translate(16, 238)">
                    <rect width="72" height="9" rx="4.5" fill="#0a714e" opacity="0.06" />
                    <text x="5" y="7" fill="#0a714e" fontSize="6.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Supplier Finance</text>
                </g>
                <g transform="translate(16, 250)">
                    <rect width="72" height="9" rx="4.5" fill="#f59e0b" opacity="0.08" />
                    <text x="5" y="7" fill="#b45309" fontSize="6.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Factoring</text>
                </g>
                <g transform="translate(16, 262)">
                    <rect width="72" height="9" rx="4.5" fill="#5d71c4" opacity="0.06" />
                    <text x="5" y="7" fill="#5d71c4" fontSize="6.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Working Capital</text>
                </g>
            </g>

            {/* Integration card (right) */}
            <g style={{ animation: 'slideInLeft 0.5s ease-out 0.65s both' }}>
                <rect x="378" y="210" width="96" height="58" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.7" filter="url(#fi-s2)" />
                <text x="390" y="228" fill="#6b7280" fontSize="7.5" fontFamily="Plus Jakarta Sans, sans-serif">Integration</text>
                {/* Plug icon */}
                <g transform="translate(390, 236)">
                    <path d="M 0 8 L 6 8 L 6 2 L 10 2 L 10 14 L 6 14 L 6 8" fill="none" stroke="#0a714e" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="14" cy="8" r="3" fill="none" stroke="#0a714e" strokeWidth="0.8" />
                </g>
                <text x="414" y="246" fill="#0a714e" fontSize="7.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Seamless</text>
                {/* Progress */}
                <rect x="390" y="254" width="72" height="4" rx="2" fill="#e2e5eb" />
                <rect x="390" y="254" width="72" height="4" rx="2" fill="#0a714e" opacity="0.7">
                    <animate attributeName="width" from="0" to="72" dur="2s" begin="1s" fill="freeze" />
                </rect>
            </g>

            {/* ====== MSME Ecosystem label ====== */}
            <g style={{ animation: 'scaleIn 0.4s ease-out 0.35s both', transformOrigin: '240px 305px' }}>
                <rect x="180" y="298" width="120" height="20" rx="10" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.5" filter="url(#fi-s2)" />
                <text x="240" y="312" textAnchor="middle" fill="#1a2d7a" fontSize="8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.06em">MSME ECOSYSTEM</text>
            </g>

            {/* Decorative elements */}
            <circle cx="170" cy="28" r="2.5" fill="#f59e0b" opacity="0.12" />
            <circle cx="310" cy="25" r="2" fill="#5d71c4" opacity="0.1" />
            <rect x="155" y="420" width="4" height="4" rx="1" fill="#0a714e" opacity="0.08" transform="rotate(45 157 422)" />
            <rect x="325" y="418" width="4" height="4" rx="1" fill="#5d71c4" opacity="0.08" transform="rotate(45 327 420)" />
            <circle cx="45" cy="175" r="1.5" fill="#1a2d7a" opacity="0.06" />
            <circle cx="435" cy="170" r="1.5" fill="#0a714e" opacity="0.06" />
        </svg>
    </div>
);

export default FiIllustration;
