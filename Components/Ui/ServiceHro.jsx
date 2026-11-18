"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";
import HeroHeadline from "@/Components/Ui/HeroHeadline";

function normalizeSlides(data) {
    if (Array.isArray(data)) return data;
    if (!data) return [];

    return [{
        id: "service-hero",
        badge: data.badge,
        title: data.title ?? [],
        description: data.description,
        image: data.image,
        imageCaption: data.imageCaption ?? data.location?.right,
        primaryAction: data.cta ? { label: data.cta.text, href: data.cta.href } : undefined,
        secondaryAction: data.secondaryCta,
        location: data.location,
        specs: data.specs ?? [],
    }];
}

export function HeroSection({ data = [], className = "", showSpecs = true }) {
    const slides = normalizeSlides(data);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!slides.length) return null;

    const active = slides[activeIndex] ?? slides[0];
    const titleLines = Array.isArray(active.title) ? active.title : [active.title];

    return (
        <section className={`overflow-hidden bg-[#002B18] text-[#F4F2E9] ${className}`} aria-label="Featured service">
            <div className="relative z-0 grid min-h-[680px] lg:h-[calc(100svh-130px)] lg:min-h-[640px] lg:grid-cols-2 ">
                <div className="flex min-w-0 flex-col justify-between px-6 py-12 sm:px-10 sm:py-14 lg:pl-[clamp(3rem,7.2vw,8rem)] lg:pr-[clamp(2rem,3vw,4rem)] lg:py-16">
                    <div>
                        <p className="mb-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
                            <span className="h-[2px] w-8 bg-[#EEBF21]" aria-hidden="true" />
                            <span>Island Beam &amp; Timber / {active.badge}</span>
                        </p>
                        <HeroHeadline lines={titleLines} className="max-w-[850px]" />
                        {active.description && (
                            <p className="mt-7 max-w-[560px] text-sm leading-[1.75] text-white/80 sm:text-base">
                                {active.description}
                            </p>
                        )}
                        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                            {active.primaryAction?.href && (
                                <Link href={active.primaryAction.href} className="group inline-flex min-h-[76px] items-center gap-6 rounded-full bg-[#EEBF21] px-7 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B]">
                                    {active.primaryAction.label}
                                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                </Link>
                            )}
                            {active.secondaryAction?.href && (
                                <Link href={active.secondaryAction.href} className="inline-flex items-center gap-4 border-b border-white/20 pb-2 text-xs font-semibold text-white/85 transition-colors hover:border-[#EEBF21] hover:text-[#EEBF21]">
                                    {active.secondaryAction.label ?? active.secondaryAction.text}
                                    <ArrowDown className="size-3.5" aria-hidden="true" />
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between gap-5 border-t border-white/15 pt-5 text-[8px] font-semibold uppercase tracking-[0.17em] text-white/60 sm:text-[9px]">
                        <span>{active.location?.left || "Comox Valley, BC"}</span>
                        <span className="text-right">{active.location?.right || "Real wood. Real possibilities."}</span>
                    </div>
                </div>

                <div className="relative min-h-[380px] overflow-hidden bg-[#20362A] sm:min-h-[500px] lg:h-full lg:min-h-0">
                    {active.image?.src && (
                        <Image
                            key={active.image.src}
                            src={active.image.src}
                            alt={active.image.alt ?? ""}
                            fill
                            priority={activeIndex === 0}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B18]/75 via-transparent to-transparent" />
                    <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5 sm:inset-x-9 sm:bottom-9">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">
                                {String(activeIndex + 1).padStart(2, "0")} / {active.imageCaption ?? active.specsLabel ?? active.badge}
                            </p>
                            {slides.length > 1 && (
                                <div className="mt-5 flex gap-2.5" aria-label="Choose featured service">
                                    {slides.map((slide, index) => (
                                        <button
                                            key={slide.id ?? index}
                                            type="button"
                                            onClick={() => setActiveIndex(index)}
                                            aria-label={`Show slide ${index + 1}`}
                                            aria-pressed={index === activeIndex}
                                            className={`grid size-12 place-items-center rounded-full border text-xs font-semibold transition-colors ${index === activeIndex ? "border-[#EEBF21] bg-[#EEBF21] text-[#102D1F]" : "border-white/30 bg-white/5 text-white hover:border-[#EEBF21]"}`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {slides.length > 1 && (
                            <button
                                type="button"
                                onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
                                aria-label="Show next slide"
                                className="grid size-12 shrink-0 place-items-center rounded-full border border-white/30 bg-white/5 text-white transition-colors hover:border-[#EEBF21] hover:text-[#EEBF21]"
                            >
                                <ChevronRight className="size-4" aria-hidden="true" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showSpecs && active.specs?.length > 0 && (
                <div className="relative z-10 grid bg-[#EEBF21] px-6 py-6 text-[#102D1F] sm:px-10 lg:grid-cols-3 lg:px-[clamp(3rem,7.2vw,8rem)] mt-8">
                    {active.specs.slice(0, 3).map((spec, index) => (
                        <div key={spec.label ?? spec.value ?? index} className={`flex items-baseline gap-4 py-2 ${index > 0 ? "lg:border-l lg:border-[#102D1F]/15 lg:pl-8" : ""} ${index < active.specs.length - 1 ? "border-b border-[#102D1F]/15 lg:border-b-0" : ""}`}>
                            <strong className="shrink-0 text-2xl font-normal tracking-[-0.045em] sm:text-[28px]">{spec.value}</strong>
                            <span className="text-xs leading-relaxed text-[#102D1F]/80">{spec.description ?? spec.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default function CustomLumberHero({ data, className = "" }) {
    return <HeroSection data={data} className={className} />;
}
