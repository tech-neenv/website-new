'use client';

import { useState, useEffect } from 'react';
import styles from './VoiceAgent.module.css';

const conversations = [
    {
        user: "What's my current credit limit?",
        ai: "Your available credit limit is ₹18,50,000. You've utilized ₹6,50,000 this month with 3 pending invoices.",
    },
    {
        user: "Pay my latest invoice from Sharma Traders",
        ai: "Found invoice #ST-2024-1847 for ₹45,000. Initiating payment... ✅ Payment successful! Confirmation sent to your WhatsApp.",
    },
    {
        user: "Show me my repayment schedule",
        ai: "You have 2 upcoming payments: ₹1,25,000 on Dec 28th and ₹85,000 on Jan 5th. Would you like to set up auto-pay?",
    },
];

const VoiceAgent = () => {
    const [isListening, setIsListening] = useState(false);
    const [currentConvo, setCurrentConvo] = useState(0);
    const [showTyping, setShowTyping] = useState(false);
    const [messages, setMessages] = useState<{ type: 'user' | 'ai'; text: string }[]>([]);

    // Auto-cycle through conversations
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentConvo((prev) => (prev + 1) % conversations.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Animate messages when conversation changes
    useEffect(() => {
        setMessages([]);
        setShowTyping(false);

        // Show user message
        const timer1 = setTimeout(() => {
            setMessages([{ type: 'user', text: conversations[currentConvo].user }]);
            setShowTyping(true);
        }, 500);

        // Show AI response
        const timer2 = setTimeout(() => {
            setShowTyping(false);
            setMessages([
                { type: 'user', text: conversations[currentConvo].user },
                { type: 'ai', text: conversations[currentConvo].ai },
            ]);
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [currentConvo]);

    const handleMicClick = () => {
        setIsListening(!isListening);
        // Could trigger next conversation on click
        setCurrentConvo((prev) => (prev + 1) % conversations.length);
    };

    return (
        <section id="voice-agent" className={`${styles.voiceAgent} snap-section`}>
            {/* Background Glows */}
            <div className={`${styles.bgGlow} ${styles.bgGlow1}`}></div>
            <div className={`${styles.bgGlow} ${styles.bgGlow2}`}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>AI-Powered</span>
                    </div>
                    <h2 className={styles.title}>
                        Meet Your <span className={styles.titleHighlight}>Voice Banking</span> Assistant
                    </h2>
                    <p className={styles.description}>
                        Manage invoices, check credit limits, and make payments—all through natural voice commands.
                        India&apos;s first voice-enabled supply chain finance platform.
                    </p>
                </div>

                <div className={styles.agentContainer}>
                    {/* Voice Interface */}
                    <div className={styles.voiceInterface}>
                        <div className={styles.interfaceCard}>
                            <div className={styles.interfaceHeader}>
                                <span className={styles.statusDot}></span>
                                <span className={styles.statusText}>
                                    {isListening ? 'Listening...' : 'Ready to help'}
                                </span>
                            </div>

                            {/* Animated Waveform */}
                            <div className={styles.waveformContainer}>
                                <div className={styles.waveform}>
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className={styles.waveBar}></div>
                                    ))}
                                </div>
                            </div>

                            {/* Mic Button */}
                            <button
                                className={`${styles.micButton} ${isListening ? styles.active : ''}`}
                                onClick={handleMicClick}
                                aria-label="Voice command"
                            >
                                🎤
                            </button>

                            <p className={styles.micHint}>Tap to speak or try the demo</p>

                            {/* Feature Tags */}
                            <div className={styles.featuresList}>
                                <span className={styles.featureTag}>
                                    <span className={styles.featureIcon}>🗣️</span>
                                    Voice Commands
                                </span>
                                <span className={styles.featureTag}>
                                    <span className={styles.featureIcon}>🌐</span>
                                    10+ Languages
                                </span>
                                <span className={styles.featureTag}>
                                    <span className={styles.featureIcon}>🔒</span>
                                    Voice Auth
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Chat Interface */}
                    <div className={styles.chatInterface}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`${styles.chatBubble} ${msg.type === 'user' ? styles.userBubble : styles.aiBubble
                                    }`}
                            >
                                {msg.type === 'ai' && (
                                    <div className={styles.bubbleHeader}>
                                        <span className={styles.aiIcon}>N</span>
                                        <span>Neenv AI</span>
                                    </div>
                                )}
                                <p className={styles.bubbleText}>{msg.text}</p>
                            </div>
                        ))}

                        {showTyping && (
                            <div className={`${styles.chatBubble} ${styles.aiBubble}`}>
                                <div className={styles.typingIndicator}>
                                    <span className={styles.typingDot}></span>
                                    <span className={styles.typingDot}></span>
                                    <span className={styles.typingDot}></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VoiceAgent;
