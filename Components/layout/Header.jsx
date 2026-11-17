'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { servicesLinks, siteConfig } from '@/lib/siteConfig';

const primaryNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Custom lumber', href: '/CustomLumber' },
    { name: 'Milling services', href: '/MobileMilling' },
    { name: 'About us', href: '/About' },
    { name: 'Garden sheds', href: '/DouglasFirShed' },
    { name: 'Firewood', href: '/Firewood' },
    { name: 'Contact us', href: '/Contact' },
];

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

const ArrowUpRight = ({ className = 'w-3.5 h-3.5' }) => (
    <svg
        className={`${className} transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" />
    </svg>
);

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
    'relative text-xs font-medium tracking-normal transition-colors duration-200 ' +
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
    const [hasMounted, setHasMounted] = useState(false);
    const pathname = hasMounted ? currentPathname : null;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const headerRef = useRef(null);
    const previousScrollY = useRef(0);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrollableHeight > 0 ? (currentScrollY / scrollableHeight) * 100 : 0);

            if (currentScrollY <= 80 || currentScrollY < previousScrollY.current - 4) {
                setIsVisible(true);
            } else if (currentScrollY > previousScrollY.current + 4 && !mobileMenuOpen) {
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

    // Close menus on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const visible = isVisible || mobileMenuOpen;
    const homeOverlay = isHomepage && !isScrolled && !mobileMenuOpen;

    const mobileLink = (href) =>
    `block rounded-lg px-4 py-3 text-base font-semibold transition-colors hover:bg-[#173D2C]/5 ${isActive(pathname, href) ? 'bg-[#173D2C]/5 text-[#8B5E1A]' : 'text-[#173D2C]'
        }`;

    return (
        <>
            <header
                ref={headerRef}
                className={`${isHomepage ? 'fixed' : 'sticky'} top-0 inset-x-0 z-50 w-full max-w-full
  transition-all duration-300
  ${visible ? 'translate-y-0' : '-translate-y-full'}
  ${homeOverlay ? 'border-b border-white/20 bg-transparent' : 'border-b border-[#D9D8CD] bg-[#F4F2E9]'}
`}
            >
                <div className="mx-auto max-w-[1680px] px-3 sm:px-6 lg:px-8">
                    <div className={`flex items-center justify-between gap-6 transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24 xl:h-[130px]'}`}>

                        {/* Logo & Branding */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none min-w-0 shrink">
                            <div className="h-12 w-12 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-[72px] sm:w-[72px]">
                                {siteConfig?.Logo && (
                                    <Image
                                        src={siteConfig.Logo}
                                        alt={`${siteConfig.name} logo`}
                                        width={44}
                                        height={44}
                                        className="h-full w-full object-contain"
                                    />
                                )}
                            </div>

                            <div className="flex min-w-0 flex-col">
                                <span className={`truncate text-sm font-extrabold leading-tight tracking-wide sm:text-lg ${homeOverlay ? 'text-white' : 'text-[#173D2C]'}`}>
                                    ISLAND BEAM &amp; TIMBER
                                </span>
                                <span className={`truncate text-[8px] font-bold uppercase tracking-[0.22em] sm:text-[10px] ${homeOverlay ? 'text-white' : 'text-[#173D2C]'}`}>
                                    Lumber Yard &amp; Sawmill
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav — hidden below lg (1024px) */}
                        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-7" aria-label="Main">
                            {primaryNavLinks.filter((item) => !(isHomepage && item.href === '/')).map((item) => (
                                <NavLink key={item.href} href={item.href} pathname={pathname} light={homeOverlay}>{item.name}</NavLink>
                            ))}
                        </nav>

                        {/* Desktop CTA + Phone */}
                        <div className="hidden shrink-0 items-center gap-3 xl:flex">
                            <Link
                                href="/request-quote"
                                className={`group inline-flex min-h-[68px] items-center justify-center gap-8 rounded-full px-8 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B51E]/60 ${homeOverlay
                                    ? 'border border-white/35 bg-white/10 text-white hover:bg-white/20'
                                    : 'border border-[#003C24] bg-[#003C24] text-white hover:bg-[#09271B]'
                                    }`}
                            >
                                <span>Request a quote</span>
                                <ArrowUpRight />
                            </Link>
                        </div>

                        {/* Mobile: Phone + Hamburger */}
                        <div className="flex items-center gap-2 xl:hidden">
                            {siteConfig?.phoneLink && (
                                <a
                                    href={siteConfig.phoneLink}
                                    className={`rounded-lg p-2 transition-colors ${homeOverlay ? 'text-white/90 hover:bg-white/10 hover:text-white' : 'text-[#173D2C]/80 hover:bg-[#173D2C]/5 hover:text-[#173D2C]'}`}
                                    aria-label={`Call ${siteConfig.phone}`}
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                </a>
                            )}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B51E]/60 ${homeOverlay ? 'text-white hover:bg-white/10' : 'text-[#173D2C] hover:bg-[#173D2C]/5'}`}
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

                {/* Mobile Drawer — slide-down animation */}
                <div
                    className={`xl:hidden overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen
                        ? 'max-h-[calc(100vh-5rem)] opacity-100'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="max-h-[calc(100vh-5rem)] space-y-1 overflow-y-auto border-t border-[#173D2C]/10 bg-[#F4F2E9] px-4 pt-4 pb-8 sm:px-6">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About', href: '/About' },
                        ].map((l) => (
                            <Link
                                key={l.name}
                                href={l.href}
                                onClick={() => setMobileMenuOpen(false)}
                                aria-current={isActive(pathname, l.href) ? 'page' : undefined}
                                className={mobileLink(l.href)}
                            >
                                {l.name}
                            </Link>
                        ))}

                        {[
                            { id: 'mobile-services', label: 'Services', links: servicesLinks },
                        ].map((group) => {
                            const open = activeDropdown === group.id;
                            const selected = group.links.some((l) => isActive(pathname, l.href));
                            return (
                                <div key={group.id}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveDropdown(open ? null : group.id)}
                                        aria-expanded={open}
                                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold transition-colors hover:bg-[#173D2C]/5 ${selected ? 'text-[#8B5E1A]' : 'text-[#173D2C]'
                                            }`}
                                    >
                                        <span>{group.label}</span>
                                        <Chevron open={open} active={selected} className="w-4 h-4" />
                                    </button>
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                                <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#173D2C]/15 pl-4">
                                                {group.links.map((item) => {
                                                    const itemActive = isActive(pathname, item.href);
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            tabIndex={open ? 0 : -1}
                                                            aria-current={itemActive ? 'page' : undefined}
                                                            className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[#173D2C]/5 hover:text-[#8B5E1A] ${itemActive ? 'bg-[#173D2C]/5 text-[#8B5E1A]' : 'text-[#173D2C]/80'
                                                                }`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <Link
                            href="/Contact"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={isActive(pathname, '/contact') ? 'page' : undefined}
                            className={mobileLink('/contact')}
                        >
                            Contact
                        </Link>

                        {/* Mobile CTA buttons */}
                        <div className="pt-4 space-y-3">
                            <Link
                                href="/request-quote"
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#003C24] bg-[#003C24] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#09271B] active:scale-[0.98]"
                            >
                                <span>Request a quote</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>

                            {siteConfig?.phone && (
                                <a
                                    href={siteConfig.phoneLink}
                                    className="flex w-full items-center justify-center gap-2 rounded-full border border-[#173D2C]/25 bg-white/40 py-3 font-semibold text-[#173D2C] transition-all duration-300 hover:bg-white/70 active:scale-[0.98]"
                                >
                                    <PhoneIcon className="w-4 h-4" />
                                    <span>{siteConfig.phone}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Render browser-measured scroll progress only after hydration. */}
            {hasMounted && (
                <div
                    className={`fixed inset-x-0 z-[51] h-[3px] pointer-events-none transition-[top] duration-300 ${homeOverlay ? 'bg-white/20' : 'bg-[#173D2C]/10'} ${
                        visible
                                    ? (isScrolled ? 'top-16 sm:top-20' : 'top-20 sm:top-24 xl:top-[130px]')
                            : 'top-0'
                    }`}
                    aria-hidden="true"
                >
                    <div
                        className="h-full bg-[#E8B51E] transition-[width] duration-100"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
            )}

            {/* Mobile overlay backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />
        </>
    );
}
