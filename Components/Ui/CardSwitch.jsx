"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CardSwitch({
    items = [],
    initialIndex = 0,
    note,
    actionHref = "#enquiry",
    actionLabel = "Discuss your order",
    className = "",
}) {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const activeItem = items[activeIndex] ?? items[0];

    if (!activeItem) return null;

    return (
        <section className={`grid gap-8 lg:col-span-2 lg:grid-cols-[0.95fr_1.1fr] lg:gap-10 ${className}`} aria-label="Material options">
            <div>
                <div className="space-y-0">
                    {items.map((item, index) => {
                        const selected = index === activeIndex;

                        return (
                            <button
                                key={item.id ?? item.name ?? index}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={selected}
                                className={`flex min-h-[116px] w-full items-center gap-6 border-t border-[#073d28]/15 px-5 py-7 text-left transition-colors sm:px-7 ${selected ? "bg-[#004329] text-white" : "text-[#073d28] hover:bg-[#eae7db]"}`}
                            >
                                <span className="text-[11px] font-semibold text-current/70">{item.number}</span>
                                <span className="text-2xl tracking-[-0.045em] sm:text-3xl">{item.name}</span>
                                <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
                            </button>
                        );
                    })}
                </div>
                {note && <p className="mt-9 text-sm leading-relaxed text-[#778278]">{note}</p>}
            </div>

            <div data-reveal>
                <article key={activeItem.id ?? activeItem.number} className="card-switch__card relative min-h-[430px] overflow-hidden rounded-[3px] bg-[#e9e6da] p-7 sm:p-12">
                    <span className="pointer-events-none absolute right-6 top-0 text-[clamp(8rem,16vw,11rem)] font-normal leading-none tracking-[-0.1em] text-[#073d28]/5">{activeItem.number}</span>
                    <p className="relative flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]"><span className="h-[2px] w-8 bg-[#eabf20]" />{activeItem.eyebrow}</p>
                    <h3 className="relative mt-10 max-w-[14ch] text-[clamp(2.5rem,3vw,4.6rem)] font-normal leading-[0.98] tracking-[-0.07em]">
                        {(Array.isArray(activeItem.title) ? activeItem.title : [activeItem.title]).map((line, index) => (
                            <span key={index} className="block">{line}</span>
                        ))}
                    </h3>
                    <p className="relative mt-7 max-w-[52ch] text-base leading-[1.7] text-[#647269]">{activeItem.copy}</p>
                    {activeItem.tags?.length > 0 && <div className="relative mt-7 flex flex-wrap gap-2">{activeItem.tags.map((tag) => <span key={tag} className="rounded-full border border-[#073d28]/15 px-3 py-1.5 text-[11px] font-semibold text-[#315343]">{tag}</span>)}</div>}
                    <a href={activeItem.actionHref ?? actionHref} className="relative mt-10 flex items-center justify-between border-t border-[#073d28]/15 pt-6 text-sm font-bold">{activeItem.actionLabel ?? actionLabel} <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                </article>
            </div>
        </section>
    );
}
