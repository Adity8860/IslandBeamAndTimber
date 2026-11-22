'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { servicesLinks, siteConfig, NavLinks } from '@/lib/siteConfig';
import { ArrowUpRight } from "lucide-react";


const emptySubscribe = () => () => { };

const primaryNavLinks = NavLinks

// Case-insensitive route match ("/About" and "/about" both work)
const isActive = (pathname, href) => {
    if (!href || !pathname) return false;
    const clean = (s) => s.split(/[?#]/)[0].toLowerCase().replace(/\/$/, '') || '/';
    const p = clean(pathname);
    const h = clean(href);
    return h === '/' ? p === '/' : p === h || p.startsWith(`${h}/`);
};

const Chevron = ({ open, active, className = 'w-3.5 h-3.5' }) => (
    <svg
        className={`${className} transition-all duration-300 ${active ? 'text-[#B98216]' : 'text-[#173D2C]/70'} ${open ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// const ArrowUpRight = ({ className = 'w-3.5 h-3.5' }) => (
//     <svg
//         className={`${className} transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="2.5"
//         stroke="currentColor"
//         aria-hidden="true"
//     >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" />
//     </svg>
// );

const PhoneIcon = ({ className = 'w-4 h-4' }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

const navLinkBase =
    'relative text-md font-bold tracking-normal transition-colors duration-200 ' +
    'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left ' +
    'after:bg-[#E8B51E] after:transition-transform after:duration-300 ' +
    'focus-visible:outline-none focus-visible:after:scale-x-100';
const navLinkIdle = 'text-[#173D2C] hover:text-[#003C24] after:scale-x-0 hover:after:scale-x-100';
const navLinkActive = 'text-[#173D2C] after:scale-x-100';

function NavLink({ href, pathname, children, light = false }) {
    const active = isActive(pathname, href);
    const themeClass = light
        ? (active ? 'text-white after:scale-x-100' : 'text-white/90 hover:text-white after:scale-x-0 hover:after:scale-x-100')
        : (active ? navLinkActive : navLinkIdle);
    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`${navLinkBase} ${themeClass}`}
        >
            {children}
        </Link>
    );
}

export default function Header() {
    const currentPathname = usePathname();
    const isHomepage = currentPathname === '/';
    const hasMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
    const pathname = hasMounted ? currentPathname : null;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [routeProgress, setRouteProgress] = useState(0);
    const [isRouteLoading, setIsRouteLoading] = useState(false);
    const headerRef = useRef(null);
    const previousScrollY = useRef(0);
    const [prevPathname, setPrevPathname] = useState(currentPathname);

    if (prevPathname !== currentPathname) {
        setPrevPathname(currentPathname);
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }

    useEffect(() => {
        if (!isRouteLoading) return undefined;
        const timer = window.setInterval(() => {
            setRouteProgress((progress) => progress >= 88 ? progress : Math.min(progress + Math.random() * 8 + 3, 88));
        }, 180);
        return () => window.clearInterval(timer);
    }, [isRouteLoading]);

    useEffect(() => {
        if (!isRouteLoading) return undefined;
        const frame = window.requestAnimationFrame(() => setRouteProgress(100));
        const timer = window.setTimeout(() => {
            setIsRouteLoading(false);
            setRouteProgress(0);
        }, 320);
        return () => {
            window.cancelAnimationFrame(frame);
            window.clearTimeout(timer);
        };
    }, [currentPathname, isRouteLoading]);

    const startRouteLoading = (event) => {
        const link = event.target.closest('a[href]');
        if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const target = link.getAttribute('target');
        const href = link.getAttribute('href');
        if (target === '_blank' || !href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
        const destination = new URL(href, window.location.href);
        if (destination.origin !== window.location.origin || destination.pathname === currentPathname) return;
        setRouteProgress(12);
        setIsRouteLoading(true);
    };

    useEffect(() => {
        if (mobileMenuOpen) return undefined;

        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrollableHeight > 0 ? (currentScrollY / scrollableHeight) * 100 : 0);

            if (currentScrollY <= 80 || currentScrollY < previousScrollY.current - 4) {
                setIsVisible(true);
            } else if (currentScrollY > previousScrollY.current + 4) {
                setIsVisible(false);
            }

            previousScrollY.current = currentScrollY;
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [mobileMenuOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    // Close menus on outside click
    useEffect(() => {
        const onClick = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);

    const visible = isVisible || mobileMenuOpen;
    const homeOverlay = isHomepage && !isScrolled && !mobileMenuOpen;

    return (
        <>
            <header
                ref={headerRef}
                onClickCapture={startRouteLoading}
                className={`fixed top-0 inset-x-0 z-50 w-full max-w-full transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
                    } ${homeOverlay ? 'border-b border-white/10 bg-transparent' : 'border-b border-[#E5E2DA] bg-[#f5f2e9]'}`}
            >
                <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-10">
                    <div className={`flex items-center justify-between gap-6 transition-all duration-300 ${isScrolled ? 'h-16 sm:h-18' : 'h-18 sm:h-20 xl:h-20'}`}>

                        {/* Logo & Branding */}
                        <Link href="/" className="group flex shrink-0 items-center gap-3 focus-visible:outline-none sm:gap-4">
                            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                                {siteConfig?.Logo && (
                                    <Image
                                        src={siteConfig.Logo}
                                        alt={`${siteConfig.name} logo`}
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>

                            <div className="flex flex-col">
                                <span className={`text-[16px] font-black leading-[0.9] tracking-[0.01em] sm:text-[15px] ${homeOverlay ? 'text-white' : 'text-[#173D2C]'}`}>
                                    <span className="block">ISLAND BEAM</span>
                                    <span className="block">&amp; TIMBER</span>
                                </span>
                                <span className={`mt-1 text-[7px] font-black uppercase tracking-[0.19em] sm:text-[8px] sm:tracking-[0.2em] ${homeOverlay ? 'text-white' : 'text-[#173D2C]'}`}>
                                    Lumber Yard &amp; Sawmill
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav — hidden below xl */}
                        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-7" aria-label="Main">
                            {primaryNavLinks.filter((item) => !(isHomepage && item.href === '/')).map((item) => (
                                <NavLink key={item.href} href={item.href} pathname={pathname} light={homeOverlay}>{item.name}</NavLink>
                            ))}
                        </nav>

                        <div className="hidden shrink-0 items-center gap-3 xl:flex">
                            <Link
                                href="/Contact#enquiry"
                                className={`group inline-flex items-center gap-3 rounded-full pl-7 pr-1.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B51E]/60 ${homeOverlay
                                    ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
                                    : 'bg-[#3C5A47] text-white hover:bg-[#2E4A39]'
                                    }`}
                            >
                                <span>Request a quote</span>

                                <span className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-300 ${homeOverlay
                                    ? 'bg-white/15'
                                    : 'bg-[#2E4A39] group-hover:bg-[#1E3A29]'
                                    }`}>
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile: Hamburger toggle only */}
                        <div className="flex items-center xl:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B51E]/60 ${homeOverlay ? 'text-white hover:bg-white/10 drop-shadow-sm' : 'text-[#173D2C] hover:bg-[#173D2C]/5'}`}
                                aria-label="Toggle menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                <div className="relative w-6 h-6">
                                    {/* Animated hamburger → X */}
                                    <span className={`absolute left-0 block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[11px] rotate-45' : 'top-1'}`} />
                                    <span className={`absolute left-0 top-[11px] block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
                                    <span className={`absolute left-0 block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[11px] -rotate-45' : 'top-[19px]'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Full Screen Menu */}
                <div
                    className={`xl:hidden overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen
                        ? 'h-[calc(100dvh-4.5rem)] sm:h-[calc(100dvh-5rem)] opacity-100'
                        : 'h-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex h-full flex-col justify-between overflow-y-auto overscroll-contain border-t border-[#173D2C]/10 bg-[#f5f2e9] px-6 pt-5 pb-8 sm:px-8">

                        {/* Navigation Links */}
                        <nav className="flex flex-col space-y-1">
                            {primaryNavLinks
                                .filter((item) => !(isHomepage && item.href === '/'))
                                .map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                                        className={`rounded-xl px-4 py-3 text-lg font-bold tracking-tight transition-colors ${isActive(pathname, item.href)
                                            ? 'bg-[#173D2C]/10 text-[#8B5E1A]'
                                            : 'text-[#173D2C] hover:bg-[#173D2C]/5'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                        </nav>

                        {/* Mobile Bottom Section: CTAs & Contact Details */}
                        <div className="pt-6 space-y-3 border-t border-[#173D2C]/10 mt-auto">
                            <Link
                                href="/Contact#enquiry"
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#003C24] bg-[#003C24] py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#09271B] active:scale-[0.98] shadow-md"
                            >
                                <span>Request a quote</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>

                            {siteConfig?.phone && (
                                <a
                                    href={siteConfig.phoneLink}
                                    className="flex w-full items-center justify-center gap-2 rounded-full border border-[#173D2C]/25 bg-white/70 py-3 font-semibold text-[#173D2C] transition-all duration-300 hover:bg-white active:scale-[0.98]"
                                >
                                    <PhoneIcon className="w-4 h-4 text-[#8B5E1A]" />
                                    <span>Call our mill: {siteConfig.phone}</span>
                                </a>
                            )}

                            <div className="pt-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173D2C]/60">
                                Lumber Yard &amp; Sawmill · Vancouver Island, BC
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer for non-homepage pages to prevent fixed header from covering content */}
            {!isHomepage && (
                <div
                    className="h-18 w-full shrink-0 sm:h-20"
                    aria-hidden="true"
                />
            )}

            <div
                className={`fixed inset-x-0 top-0 z-[60] h-[3px] pointer-events-none transition-opacity duration-200 ${isRouteLoading || scrollProgress > 0 ? 'opacity-100' : 'opacity-0'}`}
                role="progressbar"
                aria-label={isRouteLoading ? "Loading page" : "Page scroll progress"}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(isRouteLoading ? routeProgress : scrollProgress)}
                aria-hidden={!isRouteLoading && scrollProgress <= 0}
            >
                <div
                    className="h-full bg-[#E8B51E] shadow-[0_0_10px_rgba(232,181,30,.55)] transition-[width] duration-200 ease-out"
                    style={{ width: `${isRouteLoading ? routeProgress : scrollProgress}%` }}
                />
            </div>

            {/* Mobile overlay backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Floating "Call our mill" Button — Bottom Right across all pages */}
            {siteConfig?.phoneLink && (
                <a
                    href={siteConfig.phoneLink}
                    className={`fixed bottom-4 right-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-[#EEBF21] px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-[#073D2B] shadow-[0_4px_18px_rgba(0,0,0,0.25)] border border-[#073D2B]/10 transition-all duration-300 hover:bg-[#dfaa0d] active:scale-95 xl:hidden ${mobileMenuOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
                        }`}
                    aria-label={`Call our mill at ${siteConfig.phone}`}
                >
                    <span>Call our mill</span>
                    <span className="text-sm font-extrabold leading-none" aria-hidden="true">   <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="shrink-0"
                    /></span>
                </a>
            )}
        </>
    );
}
