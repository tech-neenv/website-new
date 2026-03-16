'use client';

import Image from 'next/image';
import styles from './Founders.module.css';

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const founders = [
    {
        name: 'Vikash Goenka',
        role: 'Co-founder',
        image: '/images/founders/Vikash Photo.png',
        summary: '25+ years of Banking experience in Client Coverage, Trade Finance, Credit & Risk Management.',
        highlights: [
            'Former India Head of Supply Chain Finance Business for Standard Chartered Bank - 100+ Corporates, 4000 Partners, Asset Book of USD 0.7bn and Annual Rev of $23mn',
            'Headed Corporate Banking Business for Banks in East, North & West (Mid-market)',
            'Chartered Accountant, Company Secretary, Graduation from St. Xavier\'s College, Kolkata',
        ],
        linkedin: 'https://www.linkedin.com/in/vikash-goenka-0ba1403b/',
    },
    {
        name: 'Abhishek Lall',
        role: 'Co-founder',
        image: '/images/founders/Abhishek Photo.png',
        summary: '25+ years of Sales experience in SME & Supply Chain Finance domain across Banks and Fintech.',
        highlights: [
            'Former Chief Business Officer at Progcap \u2013 Business with 100+ corporates, 16000 clients, Asset Book of USD 250mn and Rev of $25Mn',
            'Former Head of Supply Chain Finance (Sales) at Standard Chartered and IDFC First Bank',
            'Started Career with SME Banking in Kotak and Standard Chartered Bank',
            'B.E (Electrical) & MBA (Finance)',
        ],
        linkedin: 'https://www.linkedin.com/in/abhishek-lall-706b802/',
    },
];

const Founders = () => {
    return (
        <section className={styles.founders}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>MEET THE FOUNDERS</span>
                    <h2 className={styles.title}>Built by the People Who've Done This Before!</h2>
                </div>

                <div className={styles.grid}>
                    {founders.map((founder, index) => (
                        <div
                            key={founder.name}
                            className={styles.card}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    width={150}
                                    height={150}
                                    className={styles.founderImage}
                                />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{founder.name}</h3>
                                <p className={styles.role}>{founder.role}</p>
                                <p className={styles.summary}>{founder.summary}</p>
                                <ul className={styles.highlights}>
                                    {founder.highlights.map((item) => (
                                        <li key={item} className={styles.highlightItem}>{item}</li>
                                    ))}
                                </ul>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkedinLink}
                                    aria-label={`${founder.name} LinkedIn profile`}
                                >
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
