'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";


const focusRing =
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]';

export function Card({
    number = '01',
    tag = 'DOUGLAS FIR',
    titleLine1 = 'Strength with',
    titleLine2 = 'natural character.',
    description = 'Our specialty for custom beams, posts, timbers and dimensional lumber.',
    ctaText = 'Ask about Douglas fir',
    ctaHref = '#',
    className = '',
}) {
    return (
        <div
            className={`cards-in group relative flex flex-col justify-between p-8 sm:p-10 min-h-[500px] w-full rounded-md bg-[#F7F3EB] text-[#09271B] border border-[#E7E2D6] transition-[background-color,border-color,box-shadow,transform] duration-500 ease-out hover:bg-[#09271B] hover:border-[#09271B] hover:shadow-[0_28px_48px_-24px_rgba(9,39,27,0.55)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
        >
            <div>
                <div
                    className="w-full h-10 mb-8 opacity-70 transition-colors duration-500 text-[#D8D1C2] group-hover:text-[#1D4A32]"
                    style={{
                        background:
                            'repeating-linear-gradient(65deg, currentColor 0px, currentColor 1.5px, transparent 1.5px, transparent 9px)',
                    }}
                    aria-hidden="true"
                />

                <div className="text-xs font-bold tracking-[0.22em] uppercase tabular-nums text-[#2C4A38] group-hover:text-[#F4B323] transition-colors duration-500">
                    {number} / {tag}
                </div>

                <h3 className="mt-4 text-balance text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#09271B] group-hover:text-white transition-colors duration-500">
                    <span className="block">{titleLine1}</span>
                    <span className="block">{titleLine2}</span>
                </h3>

                <p className="mt-6 max-w-[46ch] text-pretty text-sm sm:text-base leading-[1.65] text-[#55635B] group-hover:text-[#B7CDBF] transition-colors duration-500">
                    {description}
                </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E5DFD3] group-hover:border-[#18452F] transition-colors duration-500">
                <Link
                    href={ctaHref}
                    className={`${focusRing} inline-flex items-center gap-2 font-bold text-sm tracking-wide text-[#09271B] group-hover:text-[#F4B323] transition-colors duration-500`}
                >
                    <span>{ctaText}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H7M17 7V17"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

function ServiceCard({
    icon = null,
    tag = null,
    title = null,
    description = null,
    ctaText = null,
    ctaHref = null,
    className = "",
}) {
    if (!icon && !title && !description && !ctaText) return null;

    return (
        <article
            data-reveal
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#102D1F]/10 bg-[#F5F2EC] p-6 shadow-[0_1px_2px_rgba(16,45,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B323]/70 hover:bg-white hover:shadow-[0_24px_40px_-28px_rgba(16,45,31,0.55)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 ${className}`}
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F4B323]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#F4B323]/25"
            />

            {tag && (
                <span className="relative mb-4 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[#BC641D]">
                    {tag}
                </span>
            )}

            {icon && (
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#F4B323] text-[#102D1F] ring-4 ring-[#F4B323]/20 transition-all duration-300 group-hover:-rotate-3 group-hover:bg-[#102D1F] group-hover:text-[#F4B323]">
                    {icon}
                </span>
            )}

            {title && (
                <h3 className="relative mt-5 text-lg font-bold tracking-tight text-[#102D1F]">
                    {title}
                </h3>
            )}

            {description && (
                <p className="relative mt-2 text-sm leading-relaxed text-[#59665D] sm:text-base">
                    {description}
                </p>
            )}

            {ctaText && ctaHref && (
                <Link href={ctaHref} className="relative mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-wider text-[#102D1F] hover:text-[#BC641D]">
                    {ctaText} ↗
                </Link>
            )}
        </article>
    );
}


// function ServiceCard({
//     icon = null,
//     tag = null,
//     title = null,
//     description = null,
//     ctaText = null,
//     ctaHref = null,
//     className = "",
// }) {
//     // Don't render an empty card
//     if (!icon && !title && !description && !ctaText) return null;

//     return (
//         <div
//             className={`cards-in group relative flex flex-col items-start w-full min-h-[174px] overflow-hidden p-7 sm:p-8 rounded-xl border border-[#E4DAC6] bg-[#F3EBDD] transition-[background-color,border-color,box-shadow,transform] duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[#F4B323] before:transition-transform before:duration-500 before:ease-out hover:-translate-y-0.5 hover:border-[#D9C9A8] hover:bg-[#EFE5D2] hover:shadow-[0_18px_32px_-22px_rgba(9,39,27,0.4)] hover:before:scale-x-100 focus-within:before:scale-x-100 motion-reduce:transition-none motion-reduce:before:transition-none motion-reduce:hover:translate-y-0 ${className}`}
//         >
//             {tag && (
//                 <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[#BC641D]">
//                     {tag}
//                 </span>
//             )}

//             {/* Optional Icon */}
//             {icon && (
//                 <div className="mb-6 grid size-12 place-items-center rounded-lg bg-[#09271B]/[0.06] text-[#09271B] transition-colors duration-300 group-hover:bg-[#09271B] group-hover:text-[#F4B323] [&>svg]:size-6">
//                     {icon}
//                 </div>
//             )}

//             {/* Optional Title */}
//             {title && (
//                 <h3 className="text-balance text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] text-[#09271B]">
//                     {title}
//                 </h3>
//             )}

//             {/* Optional Description */}
//             {description && (
//                 <p className="mt-3 max-w-[42ch] text-pretty text-sm sm:text-base leading-[1.65] text-[#45564B]">
//                     {description}
//                 </p>
//             )}

//             {/* Optional CTA */}
//             {ctaText && ctaHref && (
//                 <Link
//                     href={ctaHref}
//                     className={`${focusRing} mt-auto inline-flex items-center gap-2 pt-6 text-xs font-extrabold uppercase tracking-[0.1em] text-[#09271B] transition-colors hover:text-[#A86F1C]`}
//                 >
//                     {ctaText}
//                     <span
//                         className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
//                         aria-hidden="true"
//                     >
//                         ↗
//                     </span>
//                 </Link>
//             )}
//         </div>
//     );
// }

// function ServiceCard({
//     icon = null,
//     title = null,
//     description = null,
//     ctaText = null,
//     ctaHref = null,
//     className = "",
// }) {
//     // Don't render an empty card
//     if (!icon && !title && !description && !ctaText) return null;

//     return (
//         <div
//             className={`cards-in group flex flex-col items-start w-full min-h-[174px] p-7 sm:p-8 rounded-xl border border-[#E4DAC6] bg-[#F3EBDD] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#F4B323] hover:bg-[#EFE5D2] hover:shadow-[0_18px_32px_-22px_rgba(9,39,27,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
//         >
//             {/* Optional Icon */}
//             {icon && (
//                 <div className="mb-7 text-[#09271B] transition-colors duration-300 group-hover:text-[#B47A27]">
//                     {icon}
//                 </div>
//             )}

//             {/* Optional Title */}
//             {title && (
//                 <h3 className="text-balance text-lg sm:text-xl font-bold leading-tight tracking-[-0.01em] text-[#09271B]">
//                     {title}
//                 </h3>
//             )}

//             {/* Optional Description */}
//             {description && (
//                 <p className="mt-3 text-pretty text-sm sm:text-base leading-[1.65] text-[#45564B]">
//                     {description}
//                 </p>
//             )}

//             {/* Optional CTA */}
//             {ctaText && ctaHref && (
//                 <Link
//                     href={ctaHref}
//                     className={`${focusRing} mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-[#09271B] hover:text-[#B47A27] transition-colors`}
//                 >
//                     {ctaText}
//                     <span aria-hidden="true">↗</span>
//                 </Link>
//             )}
//         </div>
//     );
// }



function CraftedCard({
    services = [],
    className = '',
}) {
    if (!services.length) return null;

    return (
        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ${className}`}>

            {services.map((service, index) => (
                <article
                    className="cards-in group relative flex min-h-[280px] flex-col items-start gap-4 rounded-md border border-[#09271B]/15 bg-[#F7F3EB] p-7 text-[#09271B] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#09271B] hover:bg-[#09271B] hover:shadow-[0_24px_40px_-24px_rgba(9,39,27,0.55)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
                    key={service.id || service.title || index}
                >
                    {/* Tag */}
                    {service.tag && (
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#A86F1C] transition-colors duration-300 group-hover:text-[#F4B323]">
                            {service.tag}
                        </span>
                    )}

                    {/* Icon */}
                    <span
                        className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-[#09271B]/20 text-base transition-[background-color,border-color,color] duration-300 group-hover:border-[#F4B323] group-hover:bg-[#F4B323] group-hover:text-[#09271B]"
                        aria-hidden="true"
                    >
                        ↗
                    </span>

                    {/* Title */}
                    <h3 className="text-balance pr-12 text-2xl font-extrabold leading-[1.05] tracking-[-0.02em] transition-colors duration-300 group-hover:text-white">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-[44ch] text-pretty text-[0.95rem] leading-[1.65] text-[#45564B] transition-colors duration-300 group-hover:text-[#B7CDBF]">
                        {service.copy || service.description}
                    </p>

                    {/* Link */}
                    <Link
                        href={service.href || '/Contact'}
                        className={`${focusRing} mt-auto inline-flex items-center gap-2 border-t border-[#09271B]/15 pt-4 w-full text-sm font-bold tracking-wide transition-colors duration-300 group-hover:border-[#18452F] group-hover:text-[#F4B323]`}
                    >
                        {service.ctaText || 'Read more'}
                        <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                    </Link>

                </article>
            ))}

        </div>
    );
}



export function GridImageCard({
    image,
    imageAlt = "",
    tag,
    title,
    description,
    className = "",
}) {
    // Don't render an empty card
    if (!image && !title && !description && !tag) return null;

    return (
        <article
            className={`group overflow-hidden rounded-2xl border border-[#E4DAC6] bg-white shadow-[0_2px_3px_rgba(23,36,29,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_-20px_rgba(23,36,29,0.3)] ${className}`}
        >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E6E0D4]">
                {image && (
                    <Image
                        src={image}
                        alt={imageAlt || title || "Card image"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                )}
            </div>

            {/* CONTENT */}
            <div className="flex min-h-[245px] flex-col p-7 sm:p-8">

                {/* TAG */}
                {tag && (
                    <span className="mb-5 flex items-center gap-3 text-[0.8rem] font-extrabold uppercase tracking-[0.15em] text-[#BC741C]">
                        <span className="size-2 rounded-full bg-[#F4B323]" />
                        {tag}
                    </span>
                )}

                {/* TITLE */}
                {title && (
                    <h3 className="text-balance text-xl font-bold leading-[1.2] tracking-[-0.025em] text-[#102D1F] sm:text-2xl">
                        {title}
                    </h3>
                )}

                {/* DESCRIPTION */}
                {description && (
                    <p className="mt-4 text-base leading-[1.65] text-[#59665D]">
                        {description}
                    </p>
                )}

            </div>
        </article>
    );
}


export function StepsCard({
    steps = [],
    className = "",
    itemClassName = "",
}) {
    if (!Array.isArray(steps) || steps.length === 0) return null;

    return (
        <ol className={`grid gap-4 md:grid-cols-3 md:gap-5 ${className}`}>
            {steps.map(([title, text], index) => (
                <li
                    key={title || index}
                    className={`cards-in flex gap-5 rounded-lg border border-[#E4DAC6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9C9A8] hover:shadow-lg sm:p-7 ${itemClassName}`}
                >
                    {/* NUMBER */}
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#09271B] text-sm font-bold tabular-nums text-[#F4B323]">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* CONTENT */}
                    <div>
                        {title && (
                            <h3 className="text-lg font-bold leading-tight tracking-[-.01em] text-[#09271B]">
                                {title}
                            </h3>
                        )}

                        {text && (
                            <p className="mt-2 text-pretty text-sm leading-[1.65] text-[#45564B] sm:text-base">
                                {text}
                            </p>
                        )}
                    </div>
                </li>
            ))}
        </ol>
    );
}





const DEFAULT_CARDS = [
    {
        id: 1,
        number: '01',
        tag: 'DOUGLAS FIR',
        titleLine1: 'Strength with',
        titleLine2: 'natural character.',
        description:
            'Our specialty for custom beams, posts, timbers and dimensional lumber. Bring the warmth of Douglas fir to timber frames, outdoor structures and your next build.',
        ctaText: 'Ask about Douglas fir',
        ctaHref: '#',
    },
    {
        id: 2,
        number: '02',
        tag: 'RED CEDAR',
        titleLine1: 'Warm tones.',
        titleLine2: 'West Coast appeal.',
        description:
            'Explore red cedar for siding, fencing, garden features and outdoor projects. Talk to us about the sizes and profiles that suit your design.',
        ctaText: 'Ask about red cedar',
        ctaHref: '#',
    },
    {
        id: 3,
        number: '03',
        tag: 'YELLOW CEDAR',
        titleLine1: 'Rare density.',
        titleLine2: 'Exceptional durability.',
        description:
            'Naturally resistant to decay and insects. Exceptional choice for marine decking, joinery, exposed outdoor structures, and fine architectural work.',
        ctaText: 'Ask about yellow cedar',
        ctaHref: '#',
    },
];


const SERVICE_CARDS = [
    {
        id: 1,
        title: 'Rough-sawn lumber',
        description:
            'Custom sizes and dimensional lumber for building, landscaping and practical projects around your property.',
    },
    {
        id: 2,
        title: 'Planed lumber & S4S',
        description:
            'Planed options, including surfacing on all four sides, for projects that call for a smoother finish.',
    },
    {
        id: 3,
        title: 'Tongue & groove',
        description:
            'Wood profiles for walls, ceilings and other finishing details. Ask about species, dimensions and current options.',
    },
    {
        id: 4,
        title: 'Maple slabs',
        description:
            'Character-rich maple slabs for tables, counters and creative woodworking. Ask about available sizes and drying condition.',
    },
    {
        id: 5,
        title: 'Custom milling & finishing',
        description:
            'Discuss custom cuts, mobile milling, kiln drying, planing and moulding for your timber or lumber order.',
    },
    {
        id: 6,
        title: 'Firewood',
        description:
            'Firewood supply backed by years of hands-on experience. Contact us for current availability and delivery arrangements.',
        ctaText: 'Explore firewood',
        ctaHref: '#',
    },
];


export default function Cards({
    type = "timber",
    items,
    steps = [],
    className = "",
    gridClassName = "",
    itemClassName = "",
}) {
    const cardItems =
        items ?? (type === "services" ? SERVICE_CARDS : DEFAULT_CARDS);

    return (
        <section className={`w-full py-10 px-6 sm:px-8 md:px-12 ${className}`}>
            <div className="mx-auto max-w-7xl">

                {type === "crafted" ? (

                    <CraftedCard
                        services={cardItems}
                        className={gridClassName}
                    />

                ) : type === "services" ? (

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${gridClassName}`}>
                        {cardItems.map((item, index) => (
                            <ServiceCard
                                key={item.id || index}
                                {...item}
                                className={itemClassName || item.className || ""}
                            />
                        ))}
                    </div>

                ) : type === "imagegrid" ? (

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ${gridClassName}`}>
                        {cardItems.map((item, index) => (
                            <GridImageCard
                                key={item.id || index}
                                {...item}
                                className={itemClassName || item.className || ""}
                            />
                        ))}
                    </div>

                ) : type === "stepCard" ? (
                    <StepsCard
                        steps={steps}
                        className={gridClassName}
                        itemClassName={itemClassName}
                    />

                ) : (

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ${gridClassName}`}>
                        {cardItems.map((item, index) => (
                            <Card
                                key={item.id || index}
                                {...item}
                                className={itemClassName || item.className || ""}
                            />
                        ))}
                    </div>

                )}

            </div>
        </section>
    );
}

// export default function Cards({
//     type = "timber",
//     items,
//     className = "",
//     gridClassName = "",
//     itemClassName = "",
// }) {
//     const cardItems = items ?? (type === "services" ? SERVICE_CARDS : DEFAULT_CARDS);

//     return (
//         <section className={`w-full py-10 px-6 sm:px-8 md:px-12 ${className}`}>
//             <div className="max-w-7xl mx-auto">

//                 {type === "crafted" ? (
//                     <CraftedCard services={cardItems} className={gridClassName} />
//                 ) : type === "services" ? (
//                     <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${gridClassName}`}>
//                         {cardItems.map((item, index) => (
//                             <ServiceCard
//                                 key={item.id || index}
//                                 {...item}
//                                 className={itemClassName || item.className || ""}
//                             />
//                         ))}
//                     </div>
//                 ) : (
//                     <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ${gridClassName}`}>
//                         {cardItems.map((item, index) => (
//                             <Card
//                                 key={item.id || index}
//                                 {...item}
//                                 className={itemClassName || item.className || ""}
//                             />
//                         ))}
//                     </div>
//                 )}

//             </div>
//         </section>
//     );
// }
