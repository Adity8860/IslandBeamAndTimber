import React, { Suspense } from 'react';
import Link from 'next/link';
// import { connection } from 'next/server'
import { siteConfig } from '@/lib/siteConfig';
import Image from 'next/image';



const CURRENT_YEAR = 2026;

function CurrentYear() {
    return CURRENT_YEAR;
}

// Shared styles
const focusRing =
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#F4B323] rounded-sm';
// Muted link with an underline that draws in from the left on hover
const navLink =
    `${focusRing} text-[#B7CDBF] transition-[color,background-size] duration-300 hover:text-white bg-[linear-gradient(#F4B323,#F4B323)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 hover:bg-[length:100%_1px] motion-reduce:transition-none`;
const colHeading =
    "relative pb-3 text-white font-bold text-xs uppercase tracking-[0.18em] after:absolute after:bottom-0 after:left-0 after:h-px after:w-8 after:bg-[#F4B323] after:content-['']";

export default function Footer() {

    const exploreLinks = [
        { label: 'Custom lumber & cedar', href: '/custom-lumber' },
        { label: 'Beams & timbers', href: '/beams-and-timbers' },
        { label: 'Milling & delivery', href: '/milling-and-delivery' },
        { label: 'Garden sheds', href: '/garden-sheds' },
        { label: 'Firewood', href: '/firewood' },
    ];
    const homeOverlay = []
    return (
        <footer className="w-full max-w-full overflow-hidden  bg-[#002b19] text-[#B7CDBF] font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-10 sm:pt-20">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">

                    {/* Column 1: Brand / Logo & Tagline (5 cols) */}
                    <div className="md:col-span-5 space-y-5">
                        <Link href="/" className={`${focusRing} flex w-fit items-center gap-3 group`} >
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


                        <div className="text-base leading-relaxed text-[#B7CDBF]/80 pt-2 max-w-[32ch]">
                            <p>Quality lumber and custom timber.</p>
                            <p>Rooted on Vancouver Island.</p>
                        </div>
                    </div>

                    {/* Column 2: Explore Links (3 cols) */}
                    <div className="md:col-span-3 space-y-5">
                        <h3 className={colHeading}>
                            Explore
                        </h3>
                        <ul className="space-y-3.5 text-sm sm:text-[0.95rem]">
                            {exploreLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={navLink}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Let's Talk Timber (4 cols) */}
                    <div className="md:col-span-4 space-y-5">
                        <h3 className={colHeading}>
                            Let&apos;s Talk Timber
                        </h3>
                        <div className="space-y-3.5 text-sm sm:text-[0.95rem]">
                            <div>
                                <Link
                                    href="/contact"
                                    className={navLink}
                                >
                                    Contact us
                                </Link>
                            </div>

                            <div>
                                <a
                                    href="tel:2507033473"
                                    className={`${focusRing} text-xl font-bold tabular-nums text-white transition-colors duration-200 hover:text-[#F4B323]`}
                                >
                                    {siteConfig?.phone}
                                </a>
                            </div>

                            <div>
                                <a
                                    href={`mailto:${siteConfig?.email}`}
                                    className={`${navLink} break-words`}
                                >
                                    {siteConfig?.email}
                                </a>
                            </div>

                            <address className="not-italic text-[#B7CDBF]/80 leading-relaxed pt-1">
                                {siteConfig?.address}
                            </address>

                            <div className="pt-2">
                                <Link
                                    href="/quote"
                                    className={`${focusRing} inline-flex items-center gap-1.5 font-semibold text-sm text-[#F4B323] underline decoration-[#F4B323]/40 underline-offset-[6px] transition-colors group hover:text-[#FFC53D] hover:decoration-[#FFC53D]`}
                                >
                                    <span>Text us your cut list</span>
                                    <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform motion-reduce:transition-none" aria-hidden="true">
                                        ↗
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Tagline */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left text-xs text-[#8FA396]">
                    <p>
                        © <Suspense fallback="2026"><CurrentYear /></Suspense> Island Beam &amp; Timber Ltd.
                    </p>
                    <p>Locally owned. Built on Island roots.</p>
                </div>
            </div>
        </footer>
    );
}

// import React, { Suspense } from 'react';
// import Link from 'next/link';
// import { connection } from 'next/server'
// import { siteConfig } from '@/lib/siteConfig';
// import Image from 'next/image';



// async function CurrentYear() {
//     await connection();
//     return new Date().getFullYear();
// }

// export default function Footer() {
//     const exploreLinks = [
//         { label: 'Custom lumber & cedar', href: '/custom-lumber' },
//         { label: 'Beams & timbers', href: '/beams-and-timbers' },
//         { label: 'Milling & delivery', href: '/milling-and-delivery' },
//         { label: 'Garden sheds', href: '/garden-sheds' },
//         { label: 'Firewood', href: '/firewood' },
//     ];

//     return (
//         <footer className="bg-[#08120B] text-[#9BA89E] font-sans">
//             <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
//                 {/* Main Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">

//                     {/* Column 1: Brand / Logo & Tagline (5 cols) */}
//                     <div className="md:col-span-5 space-y-5">
//                         <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none" >
//                             <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#E5A84B]/60">
//                                 {siteConfig?.Logo && (
//                                     <Image
//                                         src={siteConfig.Logo}
//                                         alt={`${siteConfig.name} logo`}
//                                         width={44}
//                                         height={44}
//                                         className="h-full w-full object-contain"
//                                     />
//                                 )}
//                             </div>   <div className="flex flex-col">
//                                 <span className="text-white font-extrabold text-base tracking-wider uppercase leading-tight group-hover:text-amber-400 transition-colors">
//                                     Island Beam &amp; Timber
//                                 </span>
//                                 <span className="text-[#E5A83B] text-[11px] font-bold tracking-widest uppercase leading-tight mt-0.5">
//                                     Lumber Yard &amp; Sawmill
//                                 </span>
//                             </div>
//                         </Link>


//                         <div className="text-sm leading-relaxed text-[#8E9C91] pt-1">
//                             <p>Quality lumber and custom timber.</p>
//                             <p>Rooted on Vancouver Island.</p>
//                         </div>
//                     </div>

//                     {/* Column 2: Explore Links (3 cols) */}
//                     <div className="md:col-span-3 space-y-4">
//                         <h3 className="text-white font-bold text-xs uppercase tracking-widest">
//                             Explore
//                         </h3>
//                         <ul className="space-y-3 text-sm">
//                             {exploreLinks.map((item) => (
//                                 <li key={item.label}>
//                                     <Link
//                                         href={item.href}
//                                         className="text-[#9BA89E] hover:text-white transition-colors duration-200"
//                                     >
//                                         {item.label}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 3: Let's Talk Timber (4 cols) */}
//                     <div className="md:col-span-4 space-y-4">
//                         <h3 className="text-white font-bold text-xs uppercase tracking-widest">
//                             Let&apos;s Talk Timber
//                         </h3>
//                         <div className="space-y-3 text-sm">
//                             <div>
//                                 <Link
//                                     href="/contact"
//                                     className="text-[#9BA89E] hover:text-white transition-colors duration-200"
//                                 >
//                                     Contact us
//                                 </Link>
//                             </div>

//                             <div>
//                                 <a
//                                     href="tel:2507033473"
//                                     className="text-white font-medium hover:text-[#E5A83B] transition-colors duration-200"
//                                 >
//                                     250-703-3473
//                                 </a>
//                             </div>

//                             <div>
//                                 <a
//                                     href="mailto:info@islandbeamandtimber.com"
//                                     className="text-[#9BA89E] hover:text-white transition-colors duration-200"
//                                 >
//                                     info@islandbeamandtimber.com
//                                 </a>
//                             </div>

//                             <address className="not-italic text-[#9BA89E] leading-relaxed pt-1">
//                                 5110 Dove Crk Rd<br />
//                                 Comox Valley, BC V9J 1P4
//                             </address>

//                             <div className="pt-2">
//                                 <Link
//                                     href="/quote"
//                                     className="inline-flex items-center gap-1.5 text-[#E5A83B] hover:text-amber-300 font-semibold text-sm transition-colors group"
//                                 >
//                                     <span>Text us your cut list</span>
//                                     <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
//                                         ↗
//                                     </span>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar: Copyright & Tagline */}
//                 <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6B7B70]">
//                     <p>
//                         © <Suspense fallback="2026"><CurrentYear /></Suspense> Island Beam &amp; Timber Ltd.
//                     </p>
//                     <p>Locally owned. Built on Island roots.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// }
