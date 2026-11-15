'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

// Default slides matching your screenshot
const DEFAULT_SLIDES = [
    {
        id: 1,
        tagline: 'VANCOUVER ISLAND / LUMBER YARD & SAWMILL',
        titleWhite: 'Island roots.',
        titleGold: 'Endless possibilities.',
        description:
            "Douglas fir, red cedar and yellow cedar. Custom beams, everyday lumber and specialty cuts – made around what you're building.",
        primaryBtn: {
            text: 'Explore our lumber',
            href: '/lumber',
        },
        secondaryBtn: {
            text: 'Talk to our mill',
            href: '/contact',
        },
        bottomLeft: 'QUALITY LUMBER, ROOTED ON VANCOUVER ISLAND.',
        bottomRight: 'OUR SAWMILL - VANCOUVER ISLAND, BC',
        bgImage:
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80',
    },
    {
        id: 2,
        tagline: 'SUSTAINABLY SOURCED / LOCAL TIMBER',
        titleWhite: 'Crafted with care.',
        titleGold: 'Built to endure.',
        description:
            'Precision milling for residential, architectural, and heavy commercial timber frames. Sourced responsibly from Pacific Northwest forests.',
        primaryBtn: {
            text: 'View our products',
            href: '/products',
        },
        secondaryBtn: {
            text: 'Request a quote',
            href: '/quote',
        },
        bottomLeft: 'PREMIUM PACIFIC TIMBER & CUSTOM CUTS.',
        bottomRight: 'DISTRIBUTION & LOGGING - PACIFIC NW',
        bgImage:
            'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=80',
    },
    {
        id: 3,
        tagline: 'CUSTOM TIMBER & ARCHITECTURAL BEAMS',
        titleWhite: 'Rooted in heritage.',
        titleGold: 'Milled for vision.',
        description:
            'From rough-cut structural timbers to fine-finish tongue and groove cedar, we turn raw logs into structural works of art.',
        primaryBtn: {
            text: 'Our mill capabilities',
            href: '/capabilities',
        },
        secondaryBtn: {
            text: 'Contact timber team',
            href: '/contact',
        },
        bottomLeft: 'HERITAGE TIMBER CRAFT SINCE 1982.',
        bottomRight: 'COWICHAN VALLEY, BC',
        bgImage:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80',
    },
];

/**
 * Reusable Hero Slider Component
 *
 * @param {Array} slides - Array of slide objects (optional, has rich defaults)
 * @param {boolean} autoPlay - Enable auto-advancing slides (default: true)
 * @param {number} autoPlayInterval - Delay in ms between transitions (default: 7000ms)
 * @param {boolean} showControls - Toggle arrow buttons & pagination dots (default: true)
 * @param {string} className - Additional CSS wrapper classes
 */
export default function Slider({
    slides = DEFAULT_SLIDES,
    autoPlay = true,
    autoPlayInterval = 7000,
    showControls = true,
    className = '',
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = (idx) => {
        setCurrentIndex(idx);
    };

    // Autoplay timer
    useEffect(() => {
        if (!autoPlay || isPaused || slides.length <= 1) return;
        const timer = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlay, autoPlayInterval, isPaused, nextSlide, slides.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Touch swipe handling
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    };

    const activeSlide = slides[currentIndex];

    return (
        <section
            className={`relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-roledescription="carousel"
            aria-label="Hero Highlights"
        >
            {/* Background Images with smooth crossfade */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id || index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                            } transition-transform duration-[7000ms] ease-out`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        />
                        {/* Atmospheric overlay: Dark forest vignette with warm undertone */}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/75 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-black/45" />
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-40 flex-1 flex flex-col justify-center">
                {/* Eyebrow / Tagline */}
                <div className="flex items-center gap-3 mb-6 animate-fadeIn">
                    <span className="w-6 h-[2px] bg-[#E5A84B]" />
                    <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#E5A84B] uppercase">
                        {activeSlide.tagline}
                    </span>
                </div>

                {/* Dynamic Titles */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] max-w-4xl">
                    <span className="block text-white font-sans">{activeSlide.titleWhite}</span>
                    <span className="block italic font-serif font-medium text-[#E5A84B]">
                        {activeSlide.titleGold}
                    </span>
                </h1>

                {/* Description Paragraph */}
                <p className="mt-8 text-base md:text-xl text-stone-300/90 font-normal leading-relaxed max-w-2xl">
                    {activeSlide.description}
                </p>

                {/* Action Buttons (CTAs) */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    {activeSlide.primaryBtn && (
                        <Link
                            href={activeSlide.primaryBtn.href || '#'}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E5A84B] hover:bg-[#d8983e] text-stone-950 font-bold text-sm md:text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-[#E5A84B]/20 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>{activeSlide.primaryBtn.text}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </Link>
                    )}

                    {activeSlide.secondaryBtn && (
                        <Link
                            href={activeSlide.secondaryBtn.href || '#'}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-900/60 hover:bg-stone-800/80 text-stone-100 font-medium text-sm md:text-base tracking-wide border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>{activeSlide.secondaryBtn.text}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-stone-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>

            {/* Slide Navigation Controls & Indicators */}
            {showControls && slides.length > 1 && (
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-4 flex items-center justify-between">
                    {/* Slide dots / bars */}
                    <div className="flex items-center gap-2.5">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`transition-all duration-500 rounded-full ${idx === currentIndex
                                        ? 'w-10 h-1.5 bg-[#E5A84B]'
                                        : 'w-2 h-1.5 bg-stone-600/70 hover:bg-stone-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Previous / Next Arrow Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-xs tracking-wider text-stone-400 font-mono">
                            0{currentIndex + 1} / 0{slides.length}
                        </span>
                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Bottom Footer Bar */}
            <div className="relative z-10 w-full border-t border-white/10 bg-black/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] md:text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
                    {/* Scroll cue & quality note */}
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-[#E5A84B]">
                            <svg className="w-3 h-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            SCROLL TO EXPLORE
                        </span>
                        <span className="text-stone-600">|</span>
                        <span className="text-stone-300">{activeSlide.bottomLeft}</span>
                    </div>

                    {/* Location tag */}
                    <div className="text-stone-400">{activeSlide.bottomRight}</div>
                </div>
            </div>
        </section>
    );
}