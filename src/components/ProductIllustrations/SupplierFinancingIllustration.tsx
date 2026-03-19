'use client';

import styles from './ProductIllustrations.module.css';

const SupplierFinancingIllustration = () => (
    <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 480 420" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="sf-s">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1a2d7a" floodOpacity="0.1" />
                </filter>
                <filter id="sf-s2">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#1a2d7a" floodOpacity="0.06" />
                </filter>
                <filter id="sf-glow">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="sf-conveyor" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2e5eb" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#e2e5eb" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#e2e5eb" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* ====== Conveyor / Supply Line (center horizontal) ====== */}
            <rect x="90" y="168" width="300" height="8" rx="4" fill="url(#sf-conveyor)" />
            <rect x="90" y="168" width="300" height="8" rx="4" fill="none" stroke="#d1d5db" strokeWidth="0.5" />

            {/* Animated boxes on conveyor */}
            {[
                { x: 120, size: 24, color: '#f59e0b', delay: 0.3 },
                { x: 180, size: 20, color: '#5d71c4', delay: 0.5 },
                { x: 235, size: 26, color: '#f59e0b', delay: 0.7 },
                { x: 295, size: 18, color: '#0a714e', delay: 0.9 },
                { x: 340, size: 22, color: '#5d71c4', delay: 1.1 },
            ].map((box, i) => (
                <g key={`box${i}`} style={{ animation: `scaleIn 0.4s ease-out ${box.delay}s both`, transformOrigin: `${box.x + box.size / 2}px ${168 - box.size / 2}px` }}>
                    <rect x={box.x} y={168 - box.size} width={box.size} height={box.size} rx="4" fill={box.color} opacity="0.12" stroke={box.color} strokeWidth="0.6" />
                    {/* Box flap */}
                    <path d={`M ${box.x} ${168 - box.size} L ${box.x + box.size / 2} ${168 - box.size - 4} L ${box.x + box.size} ${168 - box.size}`} fill={box.color} opacity="0.06" />
                </g>
            ))}

            {/* ====== Vendor / Factory (left) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.1s both', transformOrigin: '70px 110px' }}>
                {/* Factory building */}
                <rect x="20" y="80" width="100" height="86" rx="6" fill="#ffffff" filter="url(#sf-s)" />
                <rect x="20" y="80" width="100" height="86" rx="6" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* Roof / header */}
                <rect x="20" y="80" width="100" height="14" rx="6" fill="#1a2d7a" opacity="0.06" />
                <rect x="20" y="90" width="100" height="4" fill="#1a2d7a" opacity="0.06" />
                {/* Chimney */}
                <rect x="92" y="60" width="14" height="22" rx="2" fill="#f8f9fc" stroke="#e2e5eb" strokeWidth="0.6" />
                {/* Smoke puffs */}
                <circle cx="99" cy="55" r="4" fill="#1a2d7a" opacity="0.04">
                    <animate attributeName="cy" values="55;42" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.05;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="102" cy="50" r="3" fill="#1a2d7a" opacity="0.03">
                    <animate attributeName="cy" values="50;38" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.04;0" dur="3.5s" repeatCount="indefinite" />
                </circle>
                {/* Windows */}
                {[0, 1, 2].map((i) => (
                    <rect key={`fw${i}`} x={32 + i * 28} y="100" width="16" height="14" rx="2" fill="#5d71c4" opacity="0.12" stroke="#5d71c4" strokeWidth="0.3" />
                ))}
                {/* Door */}
                <rect x="55" y="128" width="20" height="38" rx="3" fill="#1a2d7a" opacity="0.06" />
                <circle cx="72" cy="147" r="1.5" fill="#1a2d7a" opacity="0.15" />
                {/* Label */}
                <rect x="28" y="178" width="84" height="24" rx="12" fill="#ffffff" stroke="#1a2d7a" strokeWidth="0.8" filter="url(#sf-s2)" />
                <text x="70" y="194" textAnchor="middle" fill="#1a2d7a" fontSize="10" fontWeight="600" fontFamily="Poppins, sans-serif">Vendor</text>
            </g>

            {/* ====== Brand Building (right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.2s both', transformOrigin: '410px 110px' }}>
                <rect x="360" y="80" width="100" height="86" rx="6" fill="#ffffff" filter="url(#sf-s)" />
                <rect x="360" y="80" width="100" height="86" rx="6" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" />
                {/* Roof triangle */}
                <polygon points="410,58 358,82 462,82" fill="#1a2d7a" />
                <line x1="360" y1="80" x2="460" y2="80" stroke="#1a2d7a" strokeWidth="0.5" />
                {/* Pediment detail */}
                <rect x="360" y="80" width="100" height="5" rx="1" fill="#1a2d7a" opacity="0.12" />
                {/* Windows */}
                {[0, 1, 2].map((r) =>
                    [0, 1].map((c) => (
                        <rect key={`bw${r}${c}`} x={376 + c * 36} y={92 + r * 18} width="14" height="12" rx="2" fill="#5d71c4" opacity="0.12" stroke="#5d71c4" strokeWidth="0.3" />
                    ))
                )}
                {/* Door */}
                <rect x="401" y="130" width="18" height="36" rx="3" fill="#1a2d7a" opacity="0.08" />
                <circle cx="415" cy="148" r="1.5" fill="#1a2d7a" opacity="0.15" />
                {/* Label */}
                <rect x="368" y="178" width="84" height="24" rx="12" fill="#ffffff" stroke="#1a2d7a" strokeWidth="0.8" filter="url(#sf-s2)" />
                <text x="410" y="194" textAnchor="middle" fill="#1a2d7a" fontSize="10" fontWeight="600" fontFamily="Poppins, sans-serif">Brand</text>
            </g>

            {/* ====== Goods flow arrow (factory → brand) ====== */}
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.6s both', transformOrigin: '240px 160px' }}>
                <rect x="178" y="152" width="124" height="14" rx="7" fill="#f0f2ff" stroke="#5d71c4" strokeWidth="0.5" />
                <text x="220" y="162" fill="#5d71c4" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">Goods Delivered</text>
                <polygon points="302,159 310,155 310,163" fill="#5d71c4" opacity="0.4" />
            </g>

            {/* ====== Lender (center-bottom) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.4s both', transformOrigin: '240px 262px' }}>
                <circle cx="240" cy="262" r="44" fill="#1a2d7a" opacity="0.04">
                    <animate attributeName="r" values="44;50;44" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="240" cy="262" r="36" fill="#1a2d7a" filter="url(#sf-glow)" />
                {/* Bank icon */}
                <polygon points="240,242 220,252 260,252" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
                <line x1="220" y1="252" x2="260" y2="252" stroke="#ffffff" strokeWidth="1.5" />
                {/* Columns */}
                <line x1="227" y1="255" x2="227" y2="270" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="236" y1="255" x2="236" y2="270" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="244" y1="255" x2="244" y2="270" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="253" y1="255" x2="253" y2="270" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                {/* Base */}
                <rect x="220" y="270" width="40" height="3" rx="1" fill="#ffffff" opacity="0.9" />
                {/* Label */}
                <text x="240" y="283" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="600" fontFamily="Poppins, sans-serif" letterSpacing="0.05em">LENDER</text>
            </g>

            {/* ====== Money flow: Neenv → Vendor (early payment) ====== */}
            <path d="M 204 262 C 160 272, 110 280, 75 310" fill="none" stroke="#0a714e" strokeWidth="2" strokeDasharray="7 4" opacity="0.45">
                <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="1.2s" repeatCount="indefinite" />
            </path>
            {/* Arrow head */}
            <polygon points="75,306 68,314 78,314" fill="#0a714e" opacity="0.4" />

            {/* ====== Money flow: Brand → Neenv (settlement, subtle) ====== */}
            <path d="M 410 202 C 380 230, 310 252, 276 258" fill="none" stroke="#5d71c4" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3">
                <animate attributeName="stroke-dashoffset" from="0" to="18" dur="2s" repeatCount="indefinite" />
            </path>

            {/* ====== Vendor Payment Card (bottom-left) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.6s both', transformOrigin: '75px 355px' }}>
                <rect x="15" y="315" width="120" height="85" rx="12" fill="#ffffff" stroke="#0a714e" strokeWidth="1" filter="url(#sf-s)" />
                {/* Header */}
                <rect x="15" y="315" width="120" height="28" rx="12" fill="#0a714e" />
                <rect x="15" y="337" width="120" height="6" fill="#0a714e" />
                <text x="75" y="335" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif">EARLY PAYMENT</text>
                {/* Amount */}
                <text x="32" y="365" fill="#0a714e" fontSize="18" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;8.2L</text>
                {/* Speed badge */}
                <rect x="32" y="375" width="82" height="16" rx="8" fill="#ecfdf5" />
                <path d="M 44 379 L 41 385 L 44 385 L 41 391" fill="none" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <text x="52" y="387" fill="#0a714e" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">Instant Credit</text>
                {/* Coins */}
                <g style={{ animation: 'coinDrop 0.6s ease-out 1.0s both', transformOrigin: '110px 370px' }}>
                    <circle cx="110" cy="365" r="8" fill="#0a714e" />
                    <text x="110" y="369" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Poppins, sans-serif">&#x20B9;</text>
                </g>
                <g style={{ animation: 'coinDrop 0.5s ease-out 1.2s both', transformOrigin: '122px 375px' }}>
                    <circle cx="122" cy="375" r="5" fill="#f59e0b" />
                </g>
            </g>

            {/* ====== Brand Settlement Card (bottom-right) ====== */}
            <g style={{ animation: 'scaleIn 0.5s ease-out 0.8s both', transformOrigin: '400px 358px' }}>
                <rect x="345" y="315" width="120" height="85" rx="12" fill="#ffffff" stroke="#e2e5eb" strokeWidth="0.8" filter="url(#sf-s)" />
                {/* Header */}
                <rect x="345" y="315" width="120" height="28" rx="12" fill="#1a2d7a" opacity="0.04" />
                <rect x="345" y="337" width="120" height="6" fill="#1a2d7a" opacity="0.04" />
                <text x="405" y="335" textAnchor="middle" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif" opacity="0.6">BRAND SETTLES</text>
                {/* Clock icon */}
                <circle cx="375" cy="368" r="14" fill="#f8f9fc" stroke="#e2e5eb" strokeWidth="0.8" />
                <line x1="375" y1="368" x2="375" y2="359" stroke="#1a2d7a" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="375" y1="368" x2="382" y2="368" stroke="#5d71c4" strokeWidth="1" strokeLinecap="round" />
                <circle cx="375" cy="368" r="1.5" fill="#1a2d7a" />
                {/* Date */}
                <text x="396" y="364" fill="#1a2d7a" fontSize="9" fontWeight="600" fontFamily="Poppins, sans-serif">Due Date</text>
                <text x="396" y="377" fill="#6b7280" fontSize="8" fontFamily="Poppins, sans-serif">On original terms</text>
                {/* Calendar mini */}
                <rect x="396" y="384" width="44" height="10" rx="5" fill="#f0f2ff" />
                <text x="418" y="392" textAnchor="middle" fill="#5d71c4" fontSize="7" fontWeight="500" fontFamily="Poppins, sans-serif">90 days</text>
            </g>

            {/* ====== Flow label badges ====== */}
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.7s both', transformOrigin: '140px 278px' }}>
                <rect x="108" y="270" width="64" height="16" rx="8" fill="#ecfdf5" stroke="#0a714e" strokeWidth="0.5" />
                <text x="140" y="281" textAnchor="middle" fill="#0a714e" fontSize="7.5" fontWeight="600" fontFamily="Poppins, sans-serif">Pays Vendor</text>
            </g>
            <g style={{ animation: 'scaleIn 0.3s ease-out 0.8s both', transformOrigin: '348px 232px' }}>
                <rect x="310" y="224" width="76" height="16" rx="8" fill="#f0f2ff" stroke="#5d71c4" strokeWidth="0.5" />
                <text x="348" y="235" textAnchor="middle" fill="#5d71c4" fontSize="7.5" fontWeight="600" fontFamily="Poppins, sans-serif">Settles Later</text>
            </g>

            {/* Decorative */}
            <circle cx="240" cy="35" r="3" fill="#f59e0b" opacity="0.15" />
            <circle cx="12" cy="260" r="2.5" fill="#5d71c4" opacity="0.12" />
            <rect x="465" y="260" width="5" height="5" rx="1" fill="#0a714e" opacity="0.1" transform="rotate(45 467.5 262.5)" />

            {/* *illustrative purpose only */}
            <text x="240" y="416" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="inherit" opacity="0.5">*illustrative purpose only</text>
        </svg>
    </div>
);

export default SupplierFinancingIllustration;
