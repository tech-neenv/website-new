'use client';

import styles from './HeroVisual.module.css';

const C = {
    navy: '#1a2d7a',
    blue: '#5d71c4',
    green: '#0a714e',
    greenLight: '#10b981',
    pink: '#c026d3',
    pinkLight: '#f590eb',
    gold: '#d4a012',
    goldLight: '#f59e0b',
    gray: '#6b7280',
    grayLight: '#e2e5eb',
    white: '#ffffff',
} as const;

const HeroVisual = () => (
    <div className={styles.heroVisual}>
        <svg
            className={styles.canvas}
            viewBox="0 0 610 420"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="NEENV AI-native supply chain platform"
        >
            <defs>
                <filter id="hv-sh">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor={C.navy} floodOpacity="0.1" />
                </filter>
                <filter id="hv-sh2">
                    <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor={C.navy} floodOpacity="0.06" />
                </filter>
                <filter id="hv-glow">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="hv-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={C.navy} /><stop offset="100%" stopColor={C.blue} />
                </linearGradient>
                <linearGradient id="hv-gNavy" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={C.navy} /><stop offset="100%" stopColor={C.blue} />
                </linearGradient>
                <linearGradient id="hv-gGreen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={C.green} /><stop offset="100%" stopColor={C.greenLight} />
                </linearGradient>
                <linearGradient id="hv-gPink" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={C.pink} /><stop offset="100%" stopColor={C.pinkLight} />
                </linearGradient>
                <linearGradient id="hv-gGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={C.gold} /><stop offset="100%" stopColor={C.goldLight} />
                </linearGradient>
            </defs>

            {/* ── Dot grid ── */}
            <g opacity="0.04">
                {Array.from({ length: 10 }).map((_, r) =>
                    Array.from({ length: 14 }).map((_, c) => (
                        <circle key={`d${r}${c}`} cx={c * 48 + 12} cy={r * 46 + 10} r="1.2" fill={C.navy} />
                    ))
                )}
            </g>

            {/* ═══════════ PRODUCT CARDS — 1 col × 4 rows, no subtitles ═══════════
                Card: 148w × 56h   Gap: 6px
                Total: 4×56+3×6=242   Offset: (420-242)/2=89
            */}

            {/* Card 1: Channel Financing */}
            <g className={styles.card1}>
                <rect x="4" y="89" width="148" height="56" rx="9" fill={C.white} filter="url(#hv-sh)" />
                <rect x="4" y="89" width="148" height="56" rx="9" fill="none" stroke={C.grayLight} strokeWidth="0.6" />
                <rect x="4" y="89" width="3" height="56" rx="1.5" fill="url(#hv-gNavy)" />
                <rect x="16" y="97" width="26" height="26" rx="7" fill={C.navy} opacity="0.07" />
                <g transform="translate(21, 101)">
                    <rect x="0" y="2" width="16" height="10" rx="2" fill={C.navy} opacity="0.85" />
                    <rect x="0" y="2" width="16" height="4" rx="1.5" fill={C.blue} opacity="0.5" />
                    <rect x="2" y="14" width="12" height="2" rx="1" fill={C.goldLight} opacity="0.4" />
                    <circle cx="13" cy="9" r="2" fill={C.goldLight} opacity="0.7" />
                </g>
                <text x="50" y="109" fill={C.navy} fontSize="10.5" fontWeight="700" fontFamily="inherit">Channel Financing</text>
                <rect x="16" y="121" width="122" height="16" rx="4" fill={C.navy} opacity="0.03" />
                <text x="22" y="132" fill={C.navy} fontSize="8" fontWeight="700" fontFamily="inherit">&#x20B9;25L</text>
                <rect x="48" y="126" width="44" height="5" rx="2.5" fill={C.grayLight} />
                <rect x="48" y="126" width="30" height="5" rx="2.5" fill={C.navy} opacity="0.2">
                    <animate attributeName="width" from="0" to="30" dur="1s" begin="0.8s" fill="freeze" />
                </rect>
                <circle cx="126" cy="129" r="4" fill="#ecfdf5" />
                <polyline points="123,129 125,131 129,127" fill="none" stroke={C.green} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Card 2: Working Capital */}
            <g className={styles.card2}>
                <rect x="4" y="151" width="148" height="56" rx="9" fill={C.white} filter="url(#hv-sh)" />
                <rect x="4" y="151" width="148" height="56" rx="9" fill="none" stroke={C.grayLight} strokeWidth="0.6" />
                <rect x="4" y="151" width="3" height="56" rx="1.5" fill="url(#hv-gGreen)" />
                <rect x="16" y="159" width="26" height="26" rx="7" fill={C.green} opacity="0.07" />
                <g transform="translate(21, 163)">
                    <rect x="1" y="4" width="14" height="12" rx="2" fill="none" stroke={C.green} strokeWidth="1.3" />
                    <circle cx="8" cy="10" r="3" fill="none" stroke={C.green} strokeWidth="1" opacity="0.5" />
                    <circle cx="8" cy="10" r="1" fill={C.green} opacity="0.4" />
                    <path d="M 4 4 V 1.5 a 4 4 0 0 1 8 0 V 4" fill="none" stroke={C.goldLight} strokeWidth="1.2" strokeLinecap="round" />
                </g>
                <text x="50" y="171" fill={C.green} fontSize="10.5" fontWeight="700" fontFamily="inherit">Working Capital</text>
                <rect x="16" y="183" width="122" height="16" rx="4" fill={C.green} opacity="0.03" />
                <text x="22" y="194" fill={C.green} fontSize="8" fontWeight="700" fontFamily="inherit">72 Hr</text>
                <text x="48" y="194" fill={C.gray} fontSize="7" fontFamily="inherit">disbursal</text>
                <rect x="114" y="187" width="22" height="10" rx="5" fill="#ecfdf5" />
                <text x="125" y="195" textAnchor="middle" fill={C.green} fontSize="6.5" fontWeight="600" fontFamily="inherit">Fast</text>
            </g>

            {/* Card 3: Factoring */}
            <g className={styles.card3}>
                <rect x="4" y="213" width="148" height="56" rx="9" fill={C.white} filter="url(#hv-sh)" />
                <rect x="4" y="213" width="148" height="56" rx="9" fill="none" stroke={C.grayLight} strokeWidth="0.6" />
                <rect x="4" y="213" width="3" height="56" rx="1.5" fill="url(#hv-gPink)" />
                <rect x="16" y="221" width="26" height="26" rx="7" fill={C.pinkLight} opacity="0.08" />
                <g transform="translate(21, 225)">
                    <rect x="0" y="1" width="10" height="14" rx="1.5" fill="none" stroke={C.pink} strokeWidth="1" />
                    <rect x="4" y="4" width="12" height="14" rx="1.5" fill={C.white} stroke={C.pink} strokeWidth="1" />
                    <line x1="7" y1="8" x2="14" y2="8" stroke={C.pinkLight} strokeWidth="0.8" strokeLinecap="round" />
                    <line x1="7" y1="11" x2="12" y2="11" stroke={C.pink} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
                    <line x1="7" y1="14" x2="10" y2="14" stroke={C.pinkLight} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
                </g>
                <text x="50" y="233" fill={C.pink} fontSize="10.5" fontWeight="700" fontFamily="inherit">Factoring</text>
                <rect x="16" y="245" width="122" height="16" rx="4" fill={C.pink} opacity="0.03" />
                <text x="22" y="256" fill={C.pink} fontSize="8" fontWeight="700" fontFamily="inherit">90%</text>
                <text x="42" y="256" fill={C.gray} fontSize="7" fontFamily="inherit">advance rate</text>
                <rect x="122" y="249" width="14" height="9" rx="4.5" fill="#fdf2f8" />
                <path d="M 126 255 L 129 250 L 132 255" fill="none" stroke={C.pink} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Card 4: Supplier Finance */}
            <g className={styles.card4}>
                <rect x="4" y="275" width="148" height="56" rx="9" fill={C.white} filter="url(#hv-sh)" />
                <rect x="4" y="275" width="148" height="56" rx="9" fill="none" stroke={C.grayLight} strokeWidth="0.6" />
                <rect x="4" y="275" width="3" height="56" rx="1.5" fill="url(#hv-gGold)" />
                <rect x="16" y="283" width="26" height="26" rx="7" fill={C.goldLight} opacity="0.07" />
                <g transform="translate(21, 287)">
                    <path d="M 8 0 L 0 4.5 L 8 9 L 16 4.5 Z" fill={C.goldLight} opacity="0.2" stroke={C.gold} strokeWidth="0.8" />
                    <path d="M 0 4.5 V 12 L 8 16.5 V 9" fill={C.navy} opacity="0.06" stroke={C.gold} strokeWidth="0.6" />
                    <path d="M 16 4.5 V 12 L 8 16.5 V 9" fill={C.green} opacity="0.04" stroke={C.gold} strokeWidth="0.6" />
                    <circle cx="8" cy="8" r="2" fill={C.goldLight} />
                </g>
                <text x="50" y="295" fill={C.gold} fontSize="10.5" fontWeight="700" fontFamily="inherit">Supplier Finance</text>
                <rect x="16" y="307" width="122" height="16" rx="4" fill={C.goldLight} opacity="0.03" />
                <text x="22" y="318" fill={C.gold} fontSize="8" fontWeight="700" fontFamily="inherit">&#x20B9;2Cr</text>
                <text x="48" y="318" fill={C.gray} fontSize="7" fontFamily="inherit">per partner</text>
                <circle cx="126" cy="315" r="4" fill="#fffbeb" />
                <text x="126" y="318" textAnchor="middle" fill={C.gold} fontSize="7" fontWeight="700" fontFamily="inherit">&#x20B9;</text>
            </g>

            {/* *illustrative purpose only */}
            <text x="78" y="345" textAnchor="middle" fill={C.gray} fontSize="7" fontFamily="inherit" opacity="0.5">*illustrative purpose only</text>

            {/* ═══════════ ECOSYSTEM ILLUSTRATION ═══════════ */}
            <g transform="translate(-30, 0)">

            {/* Flow lines */}
            <g className={styles.flowIn}>
                {/* Products → Hub */}
                <path d="M 156 210 C 200 210, 310 210, 370 208" fill="none" stroke={C.blue} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                </path>
                {/* Corporate → Hub */}
                <path d="M 310 108 C 330 135, 360 165, 380 180" fill="none" stroke={C.navy} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
                </path>
                {/* AI → Hub */}
                <path d="M 540 108 C 510 135, 470 165, 448 180" fill="none" stroke={C.navy} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.8s" repeatCount="indefinite" />
                </path>
                {/* Hub → Dealer */}
                <path d="M 380 245 C 355 275, 325 305, 305 325" fill="none" stroke={C.blue} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
                </path>
                {/* Hub → Distributor */}
                <path d="M 414 252 C 414 280, 414 305, 414 322" fill="none" stroke={C.green} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.3s" repeatCount="indefinite" />
                </path>
                {/* Hub → Supplier */}
                <path d="M 448 245 C 470 275, 495 305, 520 325" fill="none" stroke={C.blue} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
                </path>
            </g>

            {/* ====== CENTRAL HUB ====== */}
            <g className={styles.coreIn} style={{ transformOrigin: '414px 208px' }}>
                <circle cx="414" cy="208" r="62" fill="none" stroke={C.navy} strokeWidth="2" opacity="0.06" />
                <circle cx="414" cy="208" r="62" fill="none" stroke={C.blue} strokeWidth="1.5" strokeDasharray="10 8" opacity="0.12">
                    <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="414" cy="208" r="55" fill="none" stroke={C.green} strokeWidth="1" opacity="0.06">
                    <animate attributeName="r" values="55;60;55" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="414" cy="208" r="46" fill="url(#hv-grad)" filter="url(#hv-glow)" />
                {/* Grid icon */}
                <rect x="397" y="190" width="34" height="26" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" />
                <rect x="397" y="190" width="34" height="5" rx="2" fill="#fff" opacity="0.2" />
                <rect x="402" y="200" width="5" height="4.5" rx="1" fill="#fff" opacity="0.4" />
                <rect x="411.5" y="200" width="5" height="4.5" rx="1" fill="#fff" opacity="0.3" />
                <rect x="421" y="200" width="5" height="4.5" rx="1" fill="#fff" opacity="0.4" />
                <rect x="402" y="208" width="5" height="4.5" rx="1" fill="#fff" opacity="0.3" />
                <rect x="421" y="208" width="5" height="4.5" rx="1" fill="#fff" opacity="0.3" />
                <rect x="411.5" y="209" width="5" height="7" rx="1.5" fill={C.goldLight} opacity="0.6" />
                <text x="414" y="230" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="inherit" letterSpacing="0.08em">NEENV</text>
                {/* Orbiting dots */}
                <circle r="4" fill={C.green} opacity="0.85">
                    <animate attributeName="cx" values="414;476;414;352;414" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="146;208;270;208;146" dur="7s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill={C.goldLight} opacity="0.75">
                    <animate attributeName="cx" values="476;414;352;414;476" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="208;270;208;146;208" dur="7s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* ====== Corporate (top-left) — RICH ====== */}
            <g className={styles.topNode1} style={{ transformOrigin: '300px 65px' }}>
                <rect x="258" y="28" width="84" height="62" rx="6" fill={C.white} filter="url(#hv-sh)" />
                <rect x="258" y="28" width="84" height="62" rx="6" fill={C.white} stroke={C.navy} strokeWidth="0.5" opacity="0.3" />
                {/* Roof */}
                <polygon points="300,12 250,30 350,30" fill={C.navy} />
                <rect x="258" y="30" width="84" height="5" rx="1" fill={C.navy} opacity="0.12" />
                {/* Columns */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <rect key={`col${i}`} x={267 + i * 13} y="40" width="6" height="40" rx="1.5" fill={C.blue} opacity="0.2" stroke={C.navy} strokeWidth="0.3" />
                ))}
                {/* Windows between columns — warm glow */}
                <rect x="275" y="46" width="5" height="7" rx="1" fill={C.goldLight} opacity="0.25" />
                <rect x="288" y="46" width="5" height="7" rx="1" fill={C.goldLight} opacity="0.2" />
                <rect x="301" y="46" width="5" height="7" rx="1" fill={C.goldLight} opacity="0.25" />
                <rect x="314" y="46" width="5" height="7" rx="1" fill={C.goldLight} opacity="0.2" />
                <rect x="275" y="60" width="5" height="7" rx="1" fill={C.blue} opacity="0.15" />
                <rect x="288" y="60" width="5" height="7" rx="1" fill={C.goldLight} opacity="0.15" />
                <rect x="301" y="60" width="5" height="7" rx="1" fill={C.blue} opacity="0.15" />
                <rect x="314" y="60" width="5" height="7" rx="1" fill={C.goldLight} opacity="0.15" />
                {/* Entrance */}
                <rect x="292" y="72" width="16" height="18" rx="3" fill={C.navy} opacity="0.12" stroke={C.navy} strokeWidth="0.4" />
                <rect x="293" y="72" width="14" height="4" rx="1" fill={C.blue} opacity="0.08" />
                {/* Base steps */}
                <rect x="258" y="84" width="84" height="4" rx="1" fill={C.navy} opacity="0.06" />
                <rect x="262" y="88" width="76" height="3" rx="1" fill={C.navy} opacity="0.04" />
                {/* Flag */}
                <line x1="300" y1="12" x2="300" y2="4" stroke={C.navy} strokeWidth="0.7" />
                <rect x="300" y="4" width="7" height="4.5" rx="0.5" fill={C.goldLight} opacity="0.7" />
                {/* Label */}
                <rect x="268" y="97" width="64" height="21" rx="10.5" fill={C.white} stroke={C.navy} strokeWidth="0.8" filter="url(#hv-sh2)" />
                <text x="300" y="112" textAnchor="middle" fill={C.navy} fontSize="9" fontWeight="600" fontFamily="inherit">Corporate</text>
            </g>

            {/* Partners label */}
            <g className={styles.labelIn} style={{ transformOrigin: '348px 140px' }}>
                <rect x="320" y="132" width="56" height="16" rx="8" fill={C.white} stroke={C.blue} strokeWidth="0.5" />
                <text x="348" y="143" textAnchor="middle" fill={C.blue} fontSize="7.5" fontWeight="600" fontFamily="inherit">Partners</text>
            </g>

            {/* ====== AI Underwriting (top-right) ====== */}
            <g className={styles.topNode2} style={{ transformOrigin: '558px 65px' }}>
                <rect x="520" y="28" width="76" height="76" rx="10" fill={C.white} filter="url(#hv-sh)" stroke={C.navy} strokeWidth="0.3" opacity="0.2" />
                {/* AI brain — bigger */}
                <g transform="translate(543, 36)">
                    <circle cx="15" cy="14" r="14" fill="none" stroke={C.navy} strokeWidth="1.3" />
                    <path d="M 8 10 Q 11.5 5 15 10 Q 18.5 5 22 10" fill="none" stroke={C.navy} strokeWidth="1.1" strokeLinecap="round" />
                    <path d="M 8 16 Q 11.5 21 15 16 Q 18.5 21 22 16" fill="none" stroke={C.blue} strokeWidth="1.1" strokeLinecap="round" />
                    <circle cx="11" cy="13" r="2" fill={C.green} />
                    <circle cx="19" cy="13" r="2" fill={C.green} />
                    <line x1="15" y1="7" x2="15" y2="0" stroke={C.goldLight} strokeWidth="1.2" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="6" y1="5" x2="2" y2="0" stroke={C.goldLight} strokeWidth="1" strokeLinecap="round" opacity="0.5">
                        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="24" y1="5" x2="28" y2="0" stroke={C.goldLight} strokeWidth="1" strokeLinecap="round" opacity="0.5">
                        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    </line>
                </g>
                <text x="558" y="74" textAnchor="middle" fill={C.navy} fontSize="8" fontWeight="700" fontFamily="inherit">AI Underwriting</text>
                <rect x="532" y="81" width="52" height="5.5" rx="2.75" fill={C.grayLight} />
                <rect x="532" y="81" width="38" height="5.5" rx="2.75" fill={C.green}>
                    <animate attributeName="width" values="18;38;52;38;18" dur="4s" repeatCount="indefinite" />
                </rect>
                <text x="558" y="97" textAnchor="middle" fill={C.green} fontSize="7" fontWeight="600" fontFamily="inherit">Monitoring Active</text>
            </g>

            {/* Assesses label */}
            <g className={styles.labelIn} style={{ transformOrigin: '485px 140px' }}>
                <rect x="457" y="132" width="56" height="16" rx="8" fill={C.white} stroke={C.green} strokeWidth="0.5" />
                <text x="485" y="143" textAnchor="middle" fill={C.green} fontSize="7.5" fontWeight="600" fontFamily="inherit">Assesses</text>
            </g>

            {/* MSME ECOSYSTEM label */}
            <g className={styles.labelIn} style={{ transformOrigin: '414px 295px' }}>
                <rect x="358" y="287" width="112" height="19" rx="9.5" fill={C.white} stroke={C.grayLight} strokeWidth="0.5" filter="url(#hv-sh2)" />
                <text x="414" y="300" textAnchor="middle" fill={C.navy} fontSize="7.5" fontWeight="700" fontFamily="inherit" letterSpacing="0.06em">MSME ECOSYSTEM</text>
            </g>

            {/* ====== Dealer Shop — RICH & VISIBLE ====== */}
            <g className={styles.node1} style={{ transformOrigin: '298px 350px' }}>
                <rect x="258" y="325" width="80" height="56" rx="6" fill={C.white} filter="url(#hv-sh)" />
                <rect x="258" y="325" width="80" height="56" rx="6" fill={C.white} stroke={C.goldLight} strokeWidth="1" />
                {/* Rich awning */}
                <path d="M 254 325 Q 278 308 298 308 Q 318 308 342 325" fill={C.goldLight} />
                <path d="M 262 325 Q 280 313 298 313 Q 316 313 334 325" fill={C.gold} opacity="0.35" />
                {/* Scalloped awning edge */}
                <path d="M 258 325 Q 264 329, 270 325 Q 276 329, 282 325 Q 288 329, 294 325 Q 300 329, 306 325 Q 312 329, 318 325 Q 324 329, 330 325 Q 336 329, 338 325" fill="none" stroke={C.gold} strokeWidth="0.6" opacity="0.4" />
                {/* Product shelves */}
                <line x1="264" y1="348" x2="332" y2="348" stroke={C.grayLight} strokeWidth="0.7" />
                {/* Top shelf — bigger colorful items */}
                <rect x="266" y="332" width="13" height="13" rx="2.5" fill={C.goldLight} opacity="0.2" stroke={C.goldLight} strokeWidth="0.5" />
                <rect x="282" y="332" width="13" height="13" rx="2.5" fill={C.blue} opacity="0.15" stroke={C.blue} strokeWidth="0.4" />
                <rect x="298" y="332" width="13" height="13" rx="2.5" fill={C.green} opacity="0.18" stroke={C.green} strokeWidth="0.4" />
                <rect x="314" y="332" width="13" height="13" rx="2.5" fill={C.pinkLight} opacity="0.15" stroke={C.pink} strokeWidth="0.4" />
                {/* Bottom shelf */}
                <rect x="266" y="352" width="10" height="9" rx="2" fill={C.blue} opacity="0.12" stroke={C.blue} strokeWidth="0.3" />
                <rect x="279" y="352" width="10" height="9" rx="2" fill={C.goldLight} opacity="0.15" stroke={C.gold} strokeWidth="0.3" />
                <rect x="292" y="352" width="10" height="9" rx="2" fill={C.green} opacity="0.12" stroke={C.green} strokeWidth="0.3" />
                {/* Door */}
                <rect x="308" y="350" width="16" height="31" rx="3" fill={C.navy} opacity="0.15" stroke={C.navy} strokeWidth="0.4" />
                <circle cx="320" cy="364" r="1.2" fill={C.goldLight} opacity="0.6" />
                <rect x="310" y="350" width="12" height="4" rx="1" fill={C.blue} opacity="0.06" />
                {/* Label */}
                <rect x="270" y="387" width="56" height="21" rx="10.5" fill="#fffbeb" stroke={C.goldLight} strokeWidth="0.8" filter="url(#hv-sh2)" />
                <text x="298" y="402" textAnchor="middle" fill={C.navy} fontSize="9" fontWeight="600" fontFamily="inherit">Dealer</text>
            </g>

            {/* ====== Distributor — RICH & VISIBLE ====== */}
            <g className={styles.node2} style={{ transformOrigin: '414px 350px' }}>
                <rect x="374" y="325" width="80" height="56" rx="6" fill={C.white} filter="url(#hv-sh)" />
                <rect x="374" y="325" width="80" height="56" rx="6" fill={C.white} stroke={C.green} strokeWidth="1" />
                {/* Warehouse */}
                <rect x="382" y="332" width="36" height="26" rx="3" fill={C.green} opacity="0.08" stroke={C.green} strokeWidth="0.5" />
                {/* Loading bay door */}
                <rect x="384" y="345" width="12" height="13" rx="1.5" fill={C.green} opacity="0.04" stroke={C.green} strokeWidth="0.4" />
                <rect x="398" y="345" width="12" height="13" rx="1.5" fill={C.green} opacity="0.04" stroke={C.green} strokeWidth="0.4" />
                {/* Truck cabin */}
                <rect x="422" y="338" width="22" height="20" rx="3" fill={C.green} opacity="0.1" stroke={C.green} strokeWidth="0.5" />
                <rect x="424" y="340" width="10" height="7" rx="1.5" fill={C.greenLight} opacity="0.18" />
                {/* Wheels */}
                <circle cx="394" cy="362" r="5" fill="none" stroke={C.green} strokeWidth="1.2" opacity="0.3" />
                <circle cx="394" cy="362" r="2" fill={C.green} opacity="0.2" />
                <circle cx="436" cy="362" r="5" fill="none" stroke={C.green} strokeWidth="1.2" opacity="0.3" />
                <circle cx="436" cy="362" r="2" fill={C.green} opacity="0.2" />
                {/* Cargo boxes */}
                <rect x="385" y="334" width="10" height="8" rx="1.5" fill={C.blue} opacity="0.15" stroke={C.blue} strokeWidth="0.3" />
                <rect x="397" y="334" width="10" height="8" rx="1.5" fill={C.goldLight} opacity="0.18" stroke={C.gold} strokeWidth="0.3" />
                <rect x="409" y="334" width="8" height="8" rx="1.5" fill={C.pinkLight} opacity="0.12" stroke={C.pink} strokeWidth="0.3" />
                {/* Label */}
                <rect x="382" y="387" width="64" height="21" rx="10.5" fill="#ecfdf5" stroke={C.green} strokeWidth="0.8" filter="url(#hv-sh2)" />
                <text x="414" y="402" textAnchor="middle" fill={C.navy} fontSize="9" fontWeight="600" fontFamily="inherit">Distributor</text>
            </g>

            {/* ====== Supplier — RICH & VISIBLE ====== */}
            <g className={styles.node3} style={{ transformOrigin: '530px 350px' }}>
                <rect x="490" y="325" width="80" height="56" rx="6" fill={C.white} filter="url(#hv-sh)" />
                <rect x="490" y="325" width="80" height="56" rx="6" fill={C.white} stroke={C.blue} strokeWidth="1" />
                {/* Main factory */}
                <rect x="498" y="338" width="28" height="34" rx="2" fill={C.blue} opacity="0.08" stroke={C.blue} strokeWidth="0.5" />
                {/* Chimney */}
                <rect x="500" y="325" width="10" height="13" rx="2" fill={C.blue} opacity="0.15" stroke={C.blue} strokeWidth="0.4" />
                {/* Smoke */}
                <circle cx="505" cy="320" r="3" fill="#9ca3af" opacity="0.08">
                    <animate attributeName="cy" values="320;313;306" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.08;0.04;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="509" cy="316" r="2" fill="#9ca3af" opacity="0.05">
                    <animate attributeName="cy" values="316;310;304" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.05;0.02;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                {/* Factory windows — colorful */}
                <rect x="502" y="342" width="7" height="7" rx="1.5" fill={C.goldLight} opacity="0.3" />
                <rect x="513" y="342" width="7" height="7" rx="1.5" fill={C.blue} opacity="0.2" />
                <rect x="502" y="354" width="7" height="7" rx="1.5" fill={C.green} opacity="0.2" />
                <rect x="513" y="354" width="7" height="7" rx="1.5" fill={C.goldLight} opacity="0.25" />
                {/* Side wing */}
                <rect x="530" y="344" width="22" height="28" rx="2" fill={C.blue} opacity="0.05" stroke={C.blue} strokeWidth="0.5" />
                <rect x="534" y="348" width="6" height="6" rx="1.5" fill={C.blue} opacity="0.18" />
                <rect x="543" y="348" width="6" height="6" rx="1.5" fill={C.pinkLight} opacity="0.15" />
                <rect x="534" y="358" width="6" height="6" rx="1.5" fill={C.goldLight} opacity="0.18" />
                <rect x="543" y="358" width="6" height="6" rx="1.5" fill={C.green} opacity="0.15" />
                {/* Gear */}
                <g transform="translate(557, 338)">
                    <circle cx="0" cy="0" r="9" fill="none" stroke={C.blue} strokeWidth="1" opacity="0.12">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="3.5" fill={C.blue} opacity="0.06" />
                </g>
                {/* Label */}
                <rect x="498" y="387" width="56" height="21" rx="10.5" fill="#eef2ff" stroke={C.blue} strokeWidth="0.8" filter="url(#hv-sh2)" />
                <text x="526" y="402" textAnchor="middle" fill={C.navy} fontSize="9" fontWeight="600" fontFamily="inherit">Supplier</text>
            </g>

            {/* Integration card */}
            <g className={styles.floatCard2}>
                <rect x="530" y="198" width="82" height="52" rx="9" fill={C.white} stroke={C.grayLight} strokeWidth="0.7" filter="url(#hv-sh2)" />
                <text x="542" y="214" fill={C.gray} fontSize="7.5" fontFamily="inherit">Integration</text>
                <g transform="translate(542, 220)">
                    <path d="M 0 7 L 5 7 L 5 2 L 9 2 L 9 12 L 5 12 L 5 7" fill="none" stroke={C.green} strokeWidth="1" strokeLinecap="round" />
                    <circle cx="13" cy="7" r="2.5" fill="none" stroke={C.green} strokeWidth="0.8" />
                </g>
                <text x="564" y="229" fill={C.green} fontSize="7" fontWeight="600" fontFamily="inherit">Seamless</text>
                <rect x="542" y="236" width="60" height="4" rx="2" fill={C.grayLight} />
                <rect x="542" y="236" width="60" height="4" rx="2" fill={C.green} opacity="0.7">
                    <animate attributeName="width" from="0" to="60" dur="2s" begin="1s" fill="freeze" />
                </rect>
            </g>

            {/* Decoratives */}
            <circle cx="350" cy="10" r="2.5" fill={C.goldLight} opacity="0.12" />
            <circle cx="500" cy="8" r="2" fill={C.blue} opacity="0.1" />
            <rect x="340" y="412" width="4" height="4" rx="1" fill={C.green} opacity="0.08" transform="rotate(45 342 414)" />
            <rect x="500" y="410" width="4" height="4" rx="1" fill={C.blue} opacity="0.08" transform="rotate(45 502 412)" />

            </g>{/* end illustration translate */}
        </svg>
    </div>
);

export default HeroVisual;
