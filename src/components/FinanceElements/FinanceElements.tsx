'use client';

import styles from './FinanceElements.module.css';

const FinanceElements = () => {
    return (
        <div className={styles.financeElements} aria-hidden="true">
            {/* ---- Row 1: Top area ---- */}
            {/* Rupee — top left */}
            <svg className={`${styles.element} ${styles.el1}`} width="52" height="52" viewBox="0 0 48 48" fill="none">
                <text x="12" y="36" fontSize="36" fontWeight="700" fontFamily="system-ui" fill="currentColor">₹</text>
            </svg>

            {/* Small dots cluster — top right */}
            <svg className={`${styles.element} ${styles.el2}`} width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="18" cy="10" r="2" fill="currentColor" opacity="0.4"/>
                <circle cx="30" cy="4" r="2.5" fill="currentColor" opacity="0.5"/>
                <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity="0.3"/>
            </svg>

            {/* Bar chart — right upper */}
            <svg className={`${styles.element} ${styles.el3}`} width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="4" y="24" width="8" height="16" rx="2" fill="currentColor"/>
                <rect x="16" y="14" width="8" height="26" rx="2" fill="currentColor" opacity="0.7"/>
                <rect x="28" y="8" width="8" height="32" rx="2" fill="currentColor" opacity="0.5"/>
            </svg>

            {/* Percentage — scattered left */}
            <svg className={`${styles.element} ${styles.el4}`} width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                <circle cx="28" cy="28" r="5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                <line x1="30" y1="6" x2="8" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            </svg>

            {/* ---- Row 2: Upper-mid ---- */}
            {/* Pie chart — left */}
            <svg className={`${styles.element} ${styles.el5}`} width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M23 5a18 18 0 0 1 15.6 9L23 23V5z" fill="currentColor" opacity="0.6"/>
                <path d="M38.6 14A18 18 0 0 1 23 41V23l15.6-9z" fill="currentColor" opacity="0.3"/>
            </svg>

            {/* Small rupee — right mid */}
            <svg className={`${styles.element} ${styles.el6}`} width="32" height="32" viewBox="0 0 48 48" fill="none">
                <text x="12" y="36" fontSize="36" fontWeight="700" fontFamily="system-ui" fill="currentColor">₹</text>
            </svg>

            {/* Shield — security element */}
            <svg className={`${styles.element} ${styles.el7}`} width="36" height="42" viewBox="0 0 36 42" fill="none">
                <path d="M18 2L4 10v12c0 9.3 6 17.5 14 20 8-2.5 14-10.7 14-20V10L18 2z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
                <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>

            {/* Upward trend dots — left scattered */}
            <svg className={`${styles.element} ${styles.el8}`} width="50" height="40" viewBox="0 0 50 40" fill="none">
                <circle cx="5" cy="35" r="2.5" fill="currentColor" opacity="0.5"/>
                <circle cx="17" cy="26" r="2.5" fill="currentColor" opacity="0.45"/>
                <circle cx="29" cy="15" r="2.5" fill="currentColor" opacity="0.4"/>
                <circle cx="41" cy="5" r="2.5" fill="currentColor" opacity="0.35"/>
                <path d="M5 35 L17 26 L29 15 L41 5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.25"/>
            </svg>

            {/* ---- Row 3: Mid section ---- */}
            {/* Growth arrow — right */}
            <svg className={`${styles.element} ${styles.el9}`} width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M6 36L16 20L24 26L36 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M28 6H36V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>

            {/* Invoice / Document — left */}
            <svg className={`${styles.element} ${styles.el10}`} width="34" height="42" viewBox="0 0 34 42" fill="none">
                <rect x="2" y="2" width="30" height="38" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
                <line x1="8" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                <line x1="8" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                <line x1="8" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                <line x1="8" y1="30" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
            </svg>

            {/* Coin stack — right lower-mid */}
            <svg className={`${styles.element} ${styles.el11}`} width="40" height="40" viewBox="0 0 40 40" fill="none">
                <ellipse cx="20" cy="30" rx="14" ry="5" fill="currentColor" opacity="0.3"/>
                <ellipse cx="20" cy="24" rx="14" ry="5" fill="currentColor" opacity="0.4"/>
                <ellipse cx="20" cy="18" rx="14" ry="5" fill="currentColor" opacity="0.5"/>
                <ellipse cx="20" cy="12" rx="14" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
            </svg>

            {/* Cross / Plus — tiny accent */}
            <svg className={`${styles.element} ${styles.el12}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
                <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            </svg>

            {/* ---- Row 4: Lower-mid ---- */}
            {/* Wallet — left */}
            <svg className={`${styles.element} ${styles.el13}`} width="40" height="36" viewBox="0 0 40 36" fill="none">
                <rect x="2" y="8" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
                <path d="M2 14h36" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                <rect x="28" y="20" width="8" height="6" rx="2" fill="currentColor" opacity="0.3"/>
                <path d="M6 8V6a4 4 0 014-4h20a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
            </svg>

            {/* Small bar chart variant — right */}
            <svg className={`${styles.element} ${styles.el14}`} width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="18" width="6" height="12" rx="1.5" fill="currentColor" opacity="0.4"/>
                <rect x="12" y="10" width="6" height="20" rx="1.5" fill="currentColor" opacity="0.35"/>
                <rect x="22" y="4" width="6" height="26" rx="1.5" fill="currentColor" opacity="0.3"/>
            </svg>

            {/* Diamond — accent */}
            <svg className={`${styles.element} ${styles.el15}`} width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="11" y="1" width="14" height="14" rx="2" transform="rotate(45 11 1)" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.35"/>
            </svg>

            {/* ---- Row 5: Lower area ---- */}
            {/* Rupee — right bottom */}
            <svg className={`${styles.element} ${styles.el16}`} width="44" height="44" viewBox="0 0 48 48" fill="none">
                <text x="12" y="36" fontSize="36" fontWeight="700" fontFamily="system-ui" fill="currentColor">₹</text>
            </svg>

            {/* Handshake / Deal — left bottom */}
            <svg className={`${styles.element} ${styles.el17}`} width="44" height="36" viewBox="0 0 44 36" fill="none">
                <path d="M4 18h8l6 6 8-8 6 4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
                <circle cx="4" cy="18" r="3" fill="currentColor" opacity="0.3"/>
                <circle cx="40" cy="20" r="3" fill="currentColor" opacity="0.3"/>
            </svg>

            {/* Tiny circles — scattered */}
            <svg className={`${styles.element} ${styles.el18}`} width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="4" cy="14" r="2" fill="currentColor" opacity="0.4"/>
                <circle cx="14" cy="4" r="1.5" fill="currentColor" opacity="0.3"/>
                <circle cx="24" cy="18" r="2.5" fill="currentColor" opacity="0.35"/>
                <circle cx="14" cy="24" r="1" fill="currentColor" opacity="0.25"/>
            </svg>

            {/* Pie donut — right lower */}
            <svg className={`${styles.element} ${styles.el19}`} width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="19" r="14" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" strokeDasharray="22 66"/>
                <circle cx="19" cy="19" r="14" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.35" strokeDasharray="33 55" strokeDashoffset="22"/>
            </svg>

            {/* Graph line — bottom left */}
            <svg className={`${styles.element} ${styles.el20}`} width="56" height="32" viewBox="0 0 56 32" fill="none">
                <path d="M2 28 L14 20 L22 24 L32 10 L42 14 L54 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35"/>
            </svg>
        </div>
    );
};

export default FinanceElements;
