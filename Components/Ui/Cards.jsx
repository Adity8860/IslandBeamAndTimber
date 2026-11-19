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
    variant = "default",
}) {
    return (
        <div
            className={`${variant === "editorial"
                ? "cards-in group relative flex min-h-[520px] w-full flex-col justify-between bg-transparent p-6 text-[#09271B] transition-colors duration-300 ease-out hover:bg-[#003C24] sm:p-8 lg:p-10"
                : "cards-in group relative flex min-h-[500px] w-full flex-col justify-between rounded-md border border-[#E7E2D6] bg-[#faf8f5] p-8 text-[#09271B] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#102D1F]/25 hover:bg-white hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"} ${className}`}
        >
            <div>
                <div
                    className={`${variant === "editorial" ? "h-20 w-full max-w-[460px] mb-8" : "h-10 w-full mb-8"} opacity-70 transition-opacity duration-300 group-hover:opacity-100 text-[#C4BCAB]`}
                    style={{
                        background:
                            'repeating-linear-gradient(94deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 12px)',
                        maskImage: 'linear-gradient(to right, #000 0%, #000 38%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, #000 0%, #000 38%, transparent 100%)',
                    }}
                    aria-hidden="true"
                />

                <div className={`uppercase tabular-nums text-[#2C4A38] transition-colors duration-300 ${variant === "editorial" ? "group-hover:text-white/70 text-[10px] font-medium tracking-[0.2em] sm:text-xs" : "group-hover:text-[#A86F1C] text-xs font-bold tracking-[0.22em]"}`}>
                    {number} / {tag}
                </div>

                <h3 className={`text-balance text-[#09271B] transition-colors duration-300 ${variant === "editorial" ? "group-hover:text-white mt-8 text-[1.8rem] font-normal tracking-[-0.035em] leading-[1.12] sm:text-[2rem]" : "mt-4 text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-[1.08]"}`}>
                    <span className="block">{titleLine1}</span>
                    <span className="block">{titleLine2}</span>
                </h3>

                <p className={`text-pretty text-[#55635B] transition-colors duration-300 ${variant === "editorial" ? "group-hover:text-white/80 mt-5 max-w-none text-sm leading-[1.7] sm:text-base" : "group-hover:text-[#38483F] mt-6 max-w-[46ch] text-sm sm:text-base leading-[1.65]"}`}>
                    {description}
                </p>
            </div>

            <div className={`mt-10 pt-6 border-t transition-colors duration-300 ${variant === "editorial" ? "border-[#E5DFD3] group-hover:border-white/20" : "border-[#E5DFD3] group-hover:border-[#D5CDBD]"}`}>
                <Link
                    href={ctaHref}
                    className={`${focusRing} inline-flex items-center gap-2 font-bold text-sm tracking-wide text-[#09271B] transition-colors duration-300 ${variant === "editorial" ? "group-hover:text-white" : "group-hover:text-[#A86F1C]"}`}
                >
                    <span>{ctaText}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
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
    variant = "default",
}) {
    if (!icon && !title && !description && !ctaText) return null;

    return (
        <article
            data-reveal
            className={variant === "editorial"
                ? `editorial-service-card group relative flex h-full min-h-[240px] flex-col overflow-hidden bg-[#E9E7DC] p-7 text-[#002B2B] transition-all duration-300 hover:bg-[#E2DFD3] hover:shadow-sm motion-reduce:transition-none sm:min-h-[257px] sm:p-8 lg:p-9 ${className}`
                : `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#102D1F]/10 bg-[#F5F2EC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#102D1F]/20 hover:bg-white hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 ${className}`}
        >
            {tag && (
                <span className="relative mb-4 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[#BC641D]">
                    {tag}
                </span>
            )}

            {icon && (
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#F4B323] text-[#102D1F] ring-4 ring-[#F4B323]/20 transition-all duration-300 group-hover:shadow-sm">
                    {icon}
                </span>
            )}

            {title && (
                <h3 className={variant === "editorial"
                    ? "relative text-[1.55rem] font-normal leading-tight tracking-[-0.03em] text-[#002B2B] sm:text-[1.7rem]"
                    : "relative mt-5 text-lg font-bold tracking-tight text-[#102D1F]"}>
                    {title}
                </h3>
            )}

            {description && (
                <p className={variant === "editorial"
                    ? "relative mt-4 max-w-[48ch] text-[0.98rem] leading-[1.55] text-[#53615C]"
                    : "relative mt-2 text-sm leading-relaxed text-[#59665D] sm:text-base"}>
                    {description}
                </p>
            )}

            {ctaText && ctaHref && (
                <Link href={ctaHref} className={variant === "editorial"
                    ? "relative mt-auto inline-flex items-center gap-2 border-t border-[#002B2B]/15 pt-6 text-sm font-bold text-[#002B2B] transition-colors duration-300 hover:text-[#8B5E1A]"
                    : "relative mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-wider text-[#102D1F] transition-colors duration-300 hover:text-[#BC641D]"}>
                    <span>{ctaText}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" aria-hidden="true">↗</span>
                </Link>
            )}
        </article>
    );
}

function CraftedCard({
    services = [],
    className = '',
}) {
    if (!services.length) return null;

    return (
        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ${className}`}>
            {services.map((service, index) => (
                <article
                    className="cards-in group relative flex min-h-[280px] flex-col items-start gap-4 rounded-md border border-[#09271B]/15 bg-[#F7F3EB] p-7 text-[#09271B] transition-all duration-300 hover:-translate-y-1 hover:border-[#09271B]/30 hover:bg-white hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
                    key={service.id || service.title || index}
                >
                    {/* Tag */}
                    {service.tag && (
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#A86F1C] transition-colors duration-300">
                            {service.tag}
                        </span>
                    )}

                    {/* Icon */}
                    <span
                        className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-[#09271B]/15 bg-[#09271B]/[0.03] text-base transition-colors duration-300 group-hover:border-[#09271B]/30 group-hover:bg-[#09271B]/[0.08]"
                        aria-hidden="true"
                    >
                        ↗
                    </span>

                    {/* Title */}
                    <h3 className="text-balance pr-12 text-2xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[#09271B] transition-colors duration-300">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-[44ch] text-pretty text-[0.95rem] leading-[1.65] text-[#45564B] transition-colors duration-300 group-hover:text-[#314237]">
                        {service.copy || service.description}
                    </p>

                    {/* Link */}
                    <Link
                        href={service.href || '/Contact'}
                        className={`${focusRing} mt-auto inline-flex items-center gap-2 border-t border-[#09271B]/15 pt-4 w-full text-sm font-bold tracking-wide text-[#09271B] transition-colors duration-300 group-hover:text-[#A86F1C]`}
                    >
                        <span>{service.ctaText || 'Read more'}</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none">→</span>
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
    if (!image && !title && !description && !tag) return null;

    return (
        <article
            className={`group overflow-hidden rounded-2xl border border-[#E4DAC6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className}`}
        >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E6E0D4]">
                {image && (
                    <Image
                        src={image}
                        alt={imageAlt || title || "Card image"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
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
                    className={`cards-in flex gap-5 rounded-lg border border-[#E4DAC6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9C9A8] hover:shadow-md sm:p-7 ${itemClassName}`}
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

function TimberEditorialCards({ items = [] }) {
    return (
        <div className="grid grid-cols-1 border border-[#D8D5C8] md:grid-cols-3">
            {items.map((item, index) => {
                const displayItem = index === 2
                    ? {
                        ...item,
                        titleLine1: "Distinctive colour.",
                        titleLine2: "Beautiful possibilities.",
                        description: "A pale, warm-toned option for custom woodwork and outdoor projects. Let us know what you’re planning and we’ll discuss suitable cuts and availability.",
                    }
                    : item;
                return (
                    <Card key={item.id || index} {...displayItem} variant="editorial" />
                );
            })}
        </div>
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

const DEFAULT_PRODUCT_CARDS = [
    {
        id: 1,
        number: "01",
        eyebrow: "CUSTOM CUTS",
        title: "Boards, posts\n& long beams.",
        description:
            "Order dimensions that suit your plans, including Douglas fir beams up to 32 feet. Send the thickness, width, length and quantity for each item.",
        highlighted: false,
    },
    {
        id: 2,
        number: "02",
        eyebrow: "SURFACE & PROFILE",
        title: "The finish\nyour build calls for.",
        description:
            "Choose rough sawn lumber or discuss planed options, S4S and tongue & groove. Let us know if your measurements are rough-cut or final finished dimensions.",
        highlighted: false,
    },
    {
        id: 3,
        number: "03",
        eyebrow: "SPECIALTY REQUESTS",
        title: "More room\nfor your ideas.",
        description:
            "Ask about maple slabs, kiln drying, planing and moulding for your order. We'll confirm stock, drying condition, service availability and timing.",
        highlighted: false,
    },
];

export function ProductCard({
    number = "01",
    eyebrow = "CUSTOM CUTS",
    title = "",
    description = "",
    highlighted = false,
    className = "",
    index = 0,
    ctaText = null,
    ctaHref = null,
}) {
    return (
        <article
            data-reveal
            style={{ "--d": `${index * 120}ms` }}
            className={`group relative flex flex-col justify-between overflow-hidden bg-[#E9E6DA] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#E3DFD2] hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-9 lg:p-10 ${highlighted ? "shadow-sm" : ""
                } ${className}`}
        >
            {/* Progressive Top Bar Line */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#173D2C]/10 overflow-hidden"
                aria-hidden="true"
            >
                <div
                    className={`h-full w-full origin-left bg-[#173D2C] transition-transform duration-500 ease-out motion-reduce:transition-none ${highlighted
                        ? "scale-x-100 group-hover:bg-[#102D1F]"
                        : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100"
                        }`}
                />
            </div>

            <div>
                {/* Eyebrow / Tag */}
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173D2C]/75 sm:text-xs">
                    <span className="tabular-nums">{number}</span>
                    <span className="text-[#173D2C]/40">/</span>
                    <span>{eyebrow}</span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-normal leading-[1.08] tracking-[-0.045em] text-[#173D2C] sm:text-3xl lg:text-[2rem] whitespace-pre-line">
                    {title}
                </h3>

                {/* Description */}
                <p className="mt-6 text-sm leading-[1.7] text-[#55635B] transition-colors duration-300 group-hover:text-[#38483F] sm:text-[15px]">
                    {description}
                </p>
            </div>

            {/* Optional CTA */}
            {ctaText && ctaHref && (
                <div className="mt-8 border-t border-[#173D2C]/10 pt-6 transition-colors duration-300 group-hover:border-[#173D2C]/20">
                    <Link
                        href={ctaHref}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173D2C] transition-colors duration-300 hover:text-[#BC641D]"
                    >
                        <span>{ctaText}</span>
                        <span
                            className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </Link>
                </div>
            )}
        </article>
    );
}

export function ProductCards({
    items = DEFAULT_PRODUCT_CARDS,
    className = "",
    gridClassName = "",
    itemClassName = "",
}) {
    const cardList = items && items.length > 0 ? items : DEFAULT_PRODUCT_CARDS;

    return (
        <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${gridClassName} ${className}`}
        >
            {cardList.map((item, index) => (
                <ProductCard
                    key={item.id ?? item.number ?? index}
                    index={index}
                    number={item.number || `0${index + 1}`}
                    eyebrow={item.eyebrow || item.tag || item.label}
                    title={item.title}
                    description={item.description || item.copy}
                    highlighted={item.highlighted ?? false}
                    ctaText={item.ctaText}
                    ctaHref={item.ctaHref || item.href}
                    className={itemClassName || item.className || ""}
                />
            ))}
        </div>
    );
}

function ShedCard({
    items = [],
    className = "",
    gridClassName = "",
    itemClassName = "",
    rule = "border-[#173D2C]/15 text-[#173D2C]",
}) {
    if (!items.length) return null;

    return (
        <div className={`grid grid-cols-1 gap-5 lg:grid-cols-3 ${gridClassName} ${className}`}>
            {items.map((card, index) => (
                <article
                    key={card.id ?? index}
                    className={`group flex flex-col bg-[#eae8de] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${itemClassName}`}
                >
                    <div className="relative aspect-[1.2/1] overflow-hidden bg-[#d8d5c8]">
                        <Image
                            src={card.image}
                            alt={card.alt || card.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                        />

                        <span className="absolute bottom-4 left-4 bg-[#f6f3e9] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em]">
                            {card.number} / {card.label}
                        </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <h3 className="text-2xl tracking-[-0.055em]">
                            {card.title}
                        </h3>

                        <p className="mt-4 flex-1 text-sm leading-[1.7] text-[#69776d]">
                            {card.description}
                        </p>

                        <Link
                            href={card.href || "#enquiry"}
                            className={`group mt-8 flex items-center justify-between border-t pt-5 text-xs font-bold ${rule}`}
                        >
                            <span>{card.action}</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
}

function FirewoodCardGrid({ items = [], className = "" }) {
    if (!items.length) return null;

    return (
        <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
            {items.map((card) => (
                <article key={card.id} className="group min-h-[318px] bg-[#eae8de] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#e4e2d7] hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#073d28]">{card.number} / {card.label}</p>
                    <h3 className="mt-8 whitespace-pre-line text-[clamp(1.65rem,2.1vw,2rem)] font-normal leading-[1.12] tracking-[-0.055em] text-[#073d28]">{card.title}</h3>
                    <p className="mt-6 text-sm leading-[1.7] text-[#68756d]">{card.description}</p>
                </article>
            ))}
        </div>
    );
}

export default function Cards({
    type = "timber",
    items,
    steps = [],
    className = "",
    gridClassName = "",
    itemClassName = "",
    variant = "default",
}) {
    const cardItems =
        items ?? (type === "services" ? SERVICE_CARDS : DEFAULT_CARDS);

    return (
        <section className={`w-full max-w-full overflow-hidden ${variant === "editorial" ? "px-0 py-0" : "px-0 py-6 sm:px-6 sm:py-10 md:px-12"} ${className}`}>
            <div className={`mx-auto ${variant === "editorial" ? "max-w-none" : "max-w-7xl"}`}>

                {type === "shed" ? (
                    <ShedCard
                        items={cardItems}
                        className={className}
                        gridClassName={gridClassName}
                        itemClassName={itemClassName}
                    />
                ) : type === "firewood" ? (
                    <FirewoodCardGrid items={cardItems} className={gridClassName} />
                ) : type === "crafted" ? (
                    <CraftedCard
                        services={cardItems}
                        className={gridClassName}
                    />
                ) : type === "services" ? (
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 ${gridClassName}`}>
                        {cardItems.map((item, index) => (
                            <ServiceCard
                                key={item.id || index}
                                {...item}
                                variant={variant}
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
                ) : type === "product" || type === "products" ? (
                    <ProductCards
                        items={items}
                        className={gridClassName}
                        itemClassName={itemClassName}
                    />
                ) : (
                    variant === "editorial" ? (
                        <TimberEditorialCards items={cardItems} />
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
                    )
                )}

            </div>
        </section>
    );
}
