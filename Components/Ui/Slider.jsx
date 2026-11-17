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
           '/Images/pageImg/IMG_0311.JPEG',
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
            '/Images/pageImg/IMG_4841.JPEG',
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
            '/Images/pageImg/IMG_4855.JPEG',
    },
];
// const DEFAULT_SLIDES = []


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
    slides = [],
    autoPlay = true,
    autoPlayInterval = 7000,
    showControls = true,
    className = '',
}) {
    // Accept either one slide object (banner mode) or an array of slides.
    const slideList = Array.isArray(slides) ? slides : slides ? [slides] : [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slideList.length);
    }, [slideList.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slideList.length) % slideList.length);
    }, [slideList.length]);

    const goToSlide = (idx) => {
        setCurrentIndex(idx);
    };

    // Autoplay timer
    useEffect(() => {
        if (!autoPlay || isPaused || slideList.length <= 1) return;
        const timer = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlay, autoPlayInterval, isPaused, nextSlide, slideList.length]);

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

    const activeSlide = slideList[currentIndex];

    if (!activeSlide) return null;

    return (
        <section
            className={`relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none ${className}`}
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
                {slideList.map((slide, index) => (
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
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-950/50 to-transparent mix-blend-multiply" />
                        <div className="absolute inset-0 bg-black/30" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/75 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-black/45" /> */}
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-40 md:pb-16 flex-1 flex flex-col justify-center overflow-hidden">
                {/* Eyebrow / Tagline */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 animate-fadeIn max-w-full">
                    <span className="w-5 sm:w-6 h-[2px] bg-[#F3BE1D] shrink-0" />
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.25em] text-[#F3BE1D] uppercase break-words">
                        {activeSlide.tagline}
                    </span>
                </div>

                {/* Dynamic Titles */}
                <h1 className="max-w-6xl break-words text-[clamp(3.5rem,9vw,10rem)] font-normal leading-[0.9] tracking-[-0.06em]">
                    <span className="block text-white font-sans">{activeSlide.titleWhite}</span>
                    <span className="block font-sans font-normal text-[#F3BE1D]">
                        {activeSlide.titleGold}
                    </span>
                    <span className="block font-sans font-normal text-[#F3BE1D]">
                        {activeSlide.titleGold1}
                    </span>
                </h1>

                {/* Description Paragraph */}
                <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-lg text-white font-normal leading-relaxed max-w-2xl">
                    {activeSlide.description}
                </p>

                {/* Action Buttons (CTAs) */}
                <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 max-w-md sm:max-w-none">
                    {activeSlide.primaryBtn && (
                        <Link
                            href={activeSlide.primaryBtn.href || '#'}
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 sm:w-auto sm:px-8 sm:py-4 rounded-full bg-[#F3BE1D] hover:bg-[#dfaa0d] text-stone-950 font-bold text-sm md:text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-[#F3BE1D]/20 hover:-translate-y-0.5 active:translate-y-0"
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
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 sm:w-auto sm:px-8 sm:py-4 rounded-full bg-stone-900/60 hover:bg-stone-800/80 text-stone-100 font-medium text-sm md:text-base tracking-wide border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
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
            {showControls && slideList.length > 1 && (
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-3 sm:pb-4 flex items-center justify-between gap-3 overflow-hidden">
                    {/* Slide dots / bars */}
                    <div className="flex items-center gap-2.5">
                        {slideList.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`transition-all duration-500 rounded-full ${idx === currentIndex
                                    ? 'w-10 h-1.5 bg-[#F3BE1D]'
                                    : 'w-2 h-1.5 bg-stone-600/70 hover:bg-stone-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Previous / Next Arrow Controls */}
                    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="p-2 sm:p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-[11px] sm:text-xs tracking-wider text-white/90 font-mono">
                            0{currentIndex + 1} / 0{slideList.length}
                        </span>
                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="p-2 sm:p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Bottom Footer Bar */}
            <div className="relative z-10 w-full border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-3 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.12em] sm:tracking-[0.2em] text-white/90 uppercase text-center sm:text-left">
                    {/* Scroll cue & quality note */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-3 max-w-full">
                        <span className="flex items-center gap-1.5 text-[#F3BE1D] shrink-0">
                            <svg className="w-3 h-3 animate-bounce shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            SCROLL TO EXPLORE
                        </span>
                        <span className="hidden sm:inline text-stone-600">|</span>
                        <span className="text-white/95 truncate sm:overflow-visible max-w-[260px] sm:max-w-none">{activeSlide.bottomLeft}</span>
                    </div>

                    {/* Location tag */}
                    <div className="text-white/80 shrink-0">{activeSlide.bottomRight}</div>
                </div>
            </div>
        </section>
    );
}
