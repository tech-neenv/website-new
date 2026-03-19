'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Layers, HandCoins, Landmark, FileStack } from 'lucide-react';
import styles from './Header.module.css';

const products = [
    {
        title: 'Dealer Financing',
        description: 'Brand Led credit lines for dealer networks',
        href: '/products/dealer-financing',
        icon: <Layers size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Working Capital Loan',
        description: 'Collateral-free short-term capital for channel partners',
        href: '/products/working-capital-loan',
        icon: <Landmark size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Factoring',
        description: 'Convert receivables to immediate working capital',
        href: '/products/invoice-factoring',
        icon: <FileStack size={22} strokeWidth={1.5} />,
    },
    {
        title: 'Supplier Financing',
        description: 'Early vendor payments, zero balance sheet impact',
        href: '/products/supplier-financing',
        icon: <HandCoins size={22} strokeWidth={1.5} />,
    },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProductsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { label: 'About', href: '/#about' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'For FIs', href: '/for-financial-institutions' },
        
        
    ];

    const headerClass = [
        styles.header,
        isScrolled ? styles.scrolled : '',
    ].filter(Boolean).join(' ');

    return (
        <>
            <header className={headerClass}>
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logos/neenv.png"
                            alt="Neenv"
                            width={240}
                            height={135}
                            sizes="120px"
                            priority
                            className={styles.logoImg}
                        />
                    </Link>

                    <nav className={styles.nav}>
                        {/* Products Dropdown */}
                        <div
                            className={styles.dropdown}
                            ref={dropdownRef}
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <button
                                className={`${styles.navLink} ${styles.dropdownTrigger} ${isProductsOpen ? styles.active : ''}`}
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                            >
                                Products
                                <span className={`${styles.chevron} ${isProductsOpen ? styles.rotate : ''}`}>
                                    <ChevronDown size={14} strokeWidth={2.5} />
                                </span>
                            </button>

                            <div className={`${styles.dropdownMenu} ${isProductsOpen ? styles.open : ''}`}>
                                <div className={styles.dropdownContent}>
                                    <div className={styles.dropdownHeader}>
                                        <span className={styles.dropdownLabel}>Channel Finance Products</span>
                                        <p className={styles.dropdownSubtitle}>AI-native, collateral-free financing</p>
                                    </div>
                                    <div className={styles.productsList}>
                                        {products.map((product) => (
                                            <Link
                                                key={product.title}
                                                href={product.href}
                                                className={styles.productItem}
                                                onClick={() => setIsProductsOpen(false)}
                                            >
                                                <div className={styles.productIcon}>{product.icon}</div>
                                                <div className={styles.productInfo}>
                                                    <span className={styles.productTitle}>{product.title}</span>
                                                    <span className={styles.productDescription}>{product.description}</span>
                                                </div>
                                                <span className={styles.productArrow}>
                                                    <ArrowRight size={16} strokeWidth={2} />
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Regular Nav Items */}
                        <ul className={styles.navLinks}>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.navActions}>
                            {/* <Link href="/contact" className={styles.contactLink}>
                                Contact Us
                            </Link> */}
                            <Link href="/contact" className={styles.ctaButton}>
                                Get Started
                                <ArrowRight size={16} strokeWidth={2} />
                            </Link>
                        </div>
                    </nav>

                    <button
                        className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <div className={styles.mobileMenuHeader}>
                        <Link href="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src="/images/logos/neenv.png"
                                alt="Neenv"
                                width={120}
                                height={40}
                                sizes="120px"
                            />
                        </Link>
                    </div>

                    <nav className={styles.mobileNavLinks}>
                        {/* Products Section */}
                        <div className={styles.mobileSection}>
                            <button
                                className={styles.mobileSectionHeader}
                                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                            >
                                <span>Products</span>
                                <span className={`${styles.chevron} ${isMobileProductsOpen ? styles.rotate : ''}`}>
                                    <ChevronDown size={14} strokeWidth={2.5} />
                                </span>
                            </button>
                            <div className={`${styles.mobileProductsList} ${isMobileProductsOpen ? styles.open : ''}`}>
                                {products.map((product) => (
                                    <Link
                                        key={product.title}
                                        href={product.href}
                                        className={styles.mobileProductItem}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className={styles.productIcon}>{product.icon}</div>
                                        <div className={styles.productInfo}>
                                            <span className={styles.productTitle}>{product.title}</span>
                                            <span className={styles.productDescription}>{product.description}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Other Nav Items */}
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.mobileActions}>
                        <Link
                            href="/contact"
                            className={styles.mobileContactLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/contact"
                            className={styles.mobileCtaButton}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                            <ArrowRight size={16} strokeWidth={2} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Header;
