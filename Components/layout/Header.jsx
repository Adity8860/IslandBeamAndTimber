'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { servicesLinks, siteConfig } from '@/lib/siteConfig';

const ACTIVE = '#E5A84B';

const productLinks = [
    // { name: 'Rough Cut Lumber', href: '/products/rough-cut' },
    // { name: 'Heavy Timber & Beams', href: '/products/timber-beams' },
    // { name: 'Custom Slabs & Mantels', href: '/products/custom-slabs' },
    // { name: 'Tongue & Groove Paneling', href: '/products/tongue-and-groove' },
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
        className={`${className} transition-all duration-300 ${active ? 'text-[#E5A84B]' : 'text-white/80'} ${open ? 'rotate-180' : ''}`}
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

const navLinkBase =
    'relative text-sm font-semibold tracking-wide transition-colors duration-200 ' +
    'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left ' +
    'after:bg-[#E5A84B] after:transition-transform after:duration-300 ' +
    'focus-visible:outline-none focus-visible:after:scale-x-100';
const navLinkIdle = 'text-white hover:text-white after:scale-x-0 hover:after:scale-x-100';
const navLinkActive = 'text-[#E5A84B] after:scale-x-100';

function NavLink({ href, pathname, children }) {
    const active = isActive(pathname, href);
    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`${navLinkBase} ${active ? navLinkActive : navLinkIdle}`}
        >
            {children}
        </Link>
    );
}

function Dropdown({ id, label, links, active, setActive, pathname }) {
    const open = active === id;
    const selected = links.some((l) => isActive(pathname, l.href));
    return (
        <div
            className="relative"
            onMouseEnter={() => setActive(id)}
            onMouseLeave={() => setActive(null)}
            onKeyDown={(e) => e.key === 'Escape' && setActive(null)}
        >
            <button
                type="button"
                className={`${navLinkBase} flex items-center gap-1.5 py-2 ${selected ? navLinkActive : navLinkIdle} after:bottom-0`}
                aria-expanded={open}
                aria-haspopup="true"
                onClick={() => setActive(open ? null : id)}
            >
                <span>{label}</span>
                <Chevron open={open} active={selected} />
            </button>

            <div
                className={`absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-300 ease-out ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                    }`}
            >
                <div className="rounded-2xl border border-white/15 bg-[#07110b]/85 p-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150">
                    {links.map((item) => {
                        const itemActive = isActive(pathname, item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActive(null)}
                                aria-current={itemActive ? 'page' : undefined}
                                tabIndex={open ? 0 : -1}
                                className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 hover:translate-x-1 hover:bg-white/10 ${itemActive ? 'bg-white/10 text-[#E5A84B]' : 'text-white hover:text-[#E5A84B]'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function Header() {
    const currentPathname = usePathname();
    const [hasMounted, setHasMounted] = useState(false);
    // Keep route-dependent attributes identical in server HTML and the first
    // client render. usePathname may differ when a route is rewritten.
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



    //  const solid = isScrolled || mobileMenuOpen;
    const solid = true;
    const visible = isVisible || mobileMenuOpen;

    const mobileLink = (href) =>
        `block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-white/10 ${isActive(pathname, href) ? 'bg-white/5 text-[#E5A84B]' : 'text-white'
        }`;

    return (
        <>
            <header
                ref={headerRef}
                // className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${solid
                //     ? 'bg-[#07110b]/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
                //     : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent backdrop-blur-sm border-b border-transparent'
                //     }`}
                className={`fixed top-0 inset-x-0 z-50 w-full
  transition-all duration-300
  ${visible ? 'translate-y-0' : '-translate-y-full'}
  bg-[#07110b]/95
  backdrop-blur-2xl
  backdrop-saturate-150
  border-b border-white/10
  shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]
`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>

                        {/* Logo & Branding */}
                        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none">
                            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#E5A84B]/60">
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

                            <div className="flex flex-col drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                                <span className="text-white font-extrabold tracking-wider text-base sm:text-lg leading-tight">
                                    ISLAND BEAM &amp; TIMBER
                                </span>
                                <span className="text-[#E5A84B] font-bold text-[11px] sm:text-xs tracking-widest uppercase">
                                    Lumber Yard &amp; Sawmill
                                </span>
                            </div>
                        </Link>


                        <nav className="hidden md:flex items-center space-x-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]" aria-label="Main">
                            <NavLink href="/" pathname={pathname}>Home</NavLink>
                            <NavLink href="/About" pathname={pathname}>About</NavLink>
                            {/* <Dropdown id="product" label="Product" links={productLinks} active={activeDropdown} setActive={setActiveDropdown} pathname={pathname} /> */}
                            <Dropdown id="services" label="Services" links={servicesLinks} active={activeDropdown} setActive={setActiveDropdown} pathname={pathname} />
                            <NavLink href="/Contact" pathname={pathname}>Contact</NavLink>
                        </nav>

                        {/* CTA */}
                        <div className="hidden md:flex items-center">
                            <Link
                                href="/request-quote"
                                className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E5A84B] hover:bg-[#E5A84B] hover:text-[#0d1612] hover:shadow-lg hover:shadow-[#E5A84B]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A84B]/60 ${isActive(pathname, '/request-quote')
                                    ? 'border-[#E5A84B] bg-[#E5A84B] text-[#0d1612]'
                                    : 'border-white/40 bg-white/10 text-white'
                                    }`}
                            >
                                <span>Request a quote</span>
                                <ArrowUpRight />
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="flex md:hidden items-center">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A84B]/60"
                                aria-label="Toggle menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#07110b]/90 px-4 pt-3 pb-6 space-y-1 backdrop-blur-2xl">
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
                            { id: 'mobile-product', label: 'Product', links: productLinks },
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
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-semibold transition-colors hover:bg-white/10 ${selected ? 'text-[#E5A84B]' : 'text-white'
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
                                            <div className="ml-3 mt-1 space-y-0.5 border-l border-white/20 pl-4">
                                                {group.links.map((item) => {
                                                    const itemActive = isActive(pathname, item.href);
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            tabIndex={open ? 0 : -1}
                                                            aria-current={itemActive ? 'page' : undefined}
                                                            className={`block py-2 text-sm font-medium transition-colors hover:text-[#E5A84B] ${itemActive ? 'text-[#E5A84B]' : 'text-white/90'
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

                        <div className="pt-3">
                            <Link
                                href="/request-quote"
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#E5A84B] hover:bg-[#E5A84B] hover:text-[#0d1612]"
                            >
                                <span>Request a quote</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </header>
            <div
                className="fixed inset-x-0 z-40 h-[3px] bg-white/15 transition-[top] duration-300"
                style={{ top: visible ? (isScrolled ? '64px' : '80px') : '0px' }}
                aria-hidden="true"
            >
                <div
                    className="h-full bg-[#E5A84B] transition-[width] duration-100"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </>
    );
}
