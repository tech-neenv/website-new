'use client';

import { useState, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Neenv transformed our distribution financing. Our dealers can now buy more inventory without cash constraints, resulting in 40% higher sales.",
        author: "Rajesh Kumar",
        role: "CFO, Electronics Brand",
        brand: "PremiumTech",
        initials: "RK",
    },
    {
        quote: "The approval process was incredibly fast. Within 24 hours, we had access to our credit line. Interest is charged only on utilization—amazing!",
        author: "Priya Sharma",
        role: "Owner, Distribution House",
        brand: "Sharma Traders",
        initials: "PS",
    },
    {
        quote: "WhatsApp Banking is a game changer. I can check my invoices and make payments right from my phone. No more visiting bank branches.",
        author: "Mohammed Ali",
        role: "Proprietor, Retail Store",
        brand: "Ali Stores",
        initials: "MA",
    },
    {
        quote: "Neenv's platform reduced our DSO by 15 days. The seamless integration with our ERP made reconciliation effortless.",
        author: "Anita Desai",
        role: "VP Finance, Consumer Goods",
        brand: "HomeGoods Ltd",
        initials: "AD",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsRef = useRef<HTMLDivElement>(null);

    const scrollTo = (index: number) => {
        if (cardsRef.current) {
            const card = cardsRef.current.children[index] as HTMLElement;
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            setCurrentIndex(index);
        }
    };

    const handlePrev = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
        scrollTo(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
        scrollTo(newIndex);
    };

    return (
        <section className={`${styles.testimonials} snap-section`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Testimonials</span>
                    <h2 className={styles.title}>Trusted by Businesses Across India</h2>
                </div>

                <div className={styles.carousel}>
                    <div className={styles.cards} ref={cardsRef}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={styles.card}>
                                <span className={styles.quoteIcon}>&ldquo;</span>
                                <div className={styles.cardContent}>
                                    <p className={styles.quote}>{testimonial.quote}</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>{testimonial.initials}</div>
                                        <div className={styles.authorInfo}>
                                            <h4>{testimonial.author}</h4>
                                            <p>{testimonial.role}</p>
                                            <span className={styles.brandTag}>{testimonial.brand}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.nav}>
                        <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous">
                            ←
                        </button>
                        <button className={styles.navBtn} onClick={handleNext} aria-label="Next">
                            →
                        </button>
                    </div>

                    <div className={styles.dots}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
