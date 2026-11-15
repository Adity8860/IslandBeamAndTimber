"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const resolveSrc = (src) =>
    !src || /^(https?:|data:|\/)/.test(src) ? src : `/${src}`;

export default function TimberGallery({ data, className = "" }) {
    const images = data?.images ?? [];
    const [active, setActive] = useState(null); // index of open image, or null
    const triggerRef = useRef(null);
    const closeRef = useRef(null);

    const close = useCallback(() => {
        setActive(null);
        triggerRef.current?.focus();
    }, []);

    const step = useCallback(
        (dir) => setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
        [images.length]
    );

    // Keyboard, scroll lock and initial focus while the lightbox is open
    useEffect(() => {
        if (active === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        closeRef.current?.focus();
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [active, close, step]);

    if (!images.length) return null;

    const current = active !== null ? images[active] : null;

    return (
        <section
            aria-label={data.label || "Timber gallery"}
            className={`relative isolate w-full max-w-full overflow-hidden bg-[#FAF8F5] px-4 py-14 sm:px-8 md:px-12 lg:py-28 ${className}`}
        >
            <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#F4B323]/10 blur-3xl" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#102D1F]/5 blur-3xl" />

            <ul role="list" data-reveal className="mx-auto grid max-w-7xl list-none grid-cols-1 gap-8 p-0 md:grid-cols-12 lg:gap-10">
                {images.map((item, index) => {
                    const description = item.description || item.alt;
                    return (
                        <li key={item.id || index} className={`group flex flex-col ${item.size === "large" ? "md:col-span-7" : "md:col-span-5"}`}>
                            <button
                                type="button"
                                aria-haspopup="dialog"
                                aria-label={`View image ${index + 1}: ${item.caption || item.alt || "Timber gallery image"}`}
                                onClick={(e) => {
                                    triggerRef.current = e.currentTarget;
                                    setActive(index);
                                }}
                                className="relative block h-[280px] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-stone-200 text-left shadow-[0_1px_2px_rgba(16,45,31,0.06)] ring-1 ring-[#102D1F]/10 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_28px_48px_-28px_rgba(16,45,31,0.55)] focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[360px] md:h-[420px] lg:h-[460px]"
                            >
                                {item.image && (
                                    <img
                                        src={resolveSrc(item.image)}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                    />
                                )}

                                {/* Green overlay with description, shown on hover and keyboard focus */}
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0A2216]/95 via-[#102D1F]/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none sm:p-7"
                                >
                                    <span className="mb-3 block h-1 w-12 rounded-full bg-[#F4B323]" />
                                    <span className="text-pretty text-sm leading-relaxed text-white sm:text-base">{description}</span>
                                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F4B323]">
                                        View image
                                        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 15 15 5M7 5h8v8" />
                                        </svg>
                                    </span>
                                </span>

                                {/* Yellow bar draws in on hover */}
                                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#F4B323] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
                            </button>

                            {item.caption && (
                                <p className="mt-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#102D1F] transition-colors duration-300 group-hover:text-[#19452F] sm:text-xs">
                                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25 transition-[box-shadow] duration-300 group-hover:ring-[#F4B323]/45 motion-reduce:transition-none" />
                                    {item.caption}
                                </p>
                            )}
                        </li>
                    );
                })}
            </ul>

            {/* Lightbox */}
            {current && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={current.caption || current.alt || "Image viewer"}
                    onClick={close}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/45 p-4 backdrop-blur-xl sm:p-8"
                >
                    {/* <button
                        ref={closeRef}
                        type="button"
                        onClick={close}
                        aria-label="Close image viewer"
                        className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[#F4B323] text-[#102D1F] transition hover:bg-[#FFCB38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8 sm:top-8"
                    >
                        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                            <path d="M4 4l12 12M16 4 4 16" />
                        </svg>
                    </button> */}

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous image"
                                onClick={(e) => { e.stopPropagation(); step(-1); }}
                                className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#F4B323]/50 bg-[#102D1F]/80 text-[#F4B323] transition hover:bg-[#F4B323] hover:text-[#102D1F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4B323] sm:left-8"
                            >
                                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4 6 10l6 6" /></svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Next image"
                                onClick={(e) => { e.stopPropagation(); step(1); }}
                                className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#F4B323]/50 bg-[#102D1F]/80 text-[#F4B323] transition hover:bg-[#F4B323] hover:text-[#102D1F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4B323] sm:right-8"
                            >
                                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m8 4 6 6-6 6" /></svg>
                            </button>
                        </>
                    )}

                    <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full w-full max-w-5xl flex-col items-center mt-16">
                        <img
                            src={resolveSrc(current.image)}
                            alt={current.alt || current.caption || "Timber gallery image"}
                            className="max-h-[70vh] w-auto max-w-full object-contain shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-[#F4B323]/30"
                        />
                        <figcaption className="mt-5 max-w-2xl text-center">
                            {current.caption && (
                                <p className="flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#F4B323] sm:text-sm">
                                    <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25" />
                                    {current.caption}
                                </p>
                            )}
                            {(current.description || current.alt) && (
                                <p className="mt-2 text-pretty text-sm leading-relaxed text-[#B7CDBF] sm:text-base">
                                    {current.description || current.alt}
                                </p>
                            )}
                            {/* <p className="mt-3 text-xs font-bold tabular-nums tracking-widest text-[#F4B323]/70" aria-live="polite">
                                {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                            </p> */}
                        </figcaption>
                    </figure>
                </div>
            )}
        </section>
    );
}
// import React from 'react';

// export default function TimberGallery({
//     data,
//     className = '',
// }) {
//     if (!data?.images?.length) return null;

//     return (
//         <section
//             className={`w-full max-w-full overflow-hidden bg-[#FAF8F5] py-14 lg:py-28 px-4 sm:px-8 md:px-12 ${className}`}
//         >
//             <div data-reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

//                 {data.images.map((item, index) => (
//                     <div
//                         key={item.id || index}
//                         className={`group cursor-pointer flex flex-col ${item.size === 'large'
//                             ? 'md:col-span-7'
//                             : 'md:col-span-5'
//                             }`}
//                     >
//                         {/* Image */}

//                         <div className="relative overflow-hidden h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] bg-stone-200 shadow-sm">

//                             {item.image && (
//                                 <img
//                                     src={item.image}
//                                     alt={
//                                         item.alt ||
//                                         item.caption ||
//                                         'Timber gallery image'
//                                     }
//                                     loading="lazy"
//                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                                 />
//                             )}

//                         </div>

//                         {/* Caption */}

//                         {item.caption && (
//                             <p className="mt-3.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#55635B] uppercase transition-colors duration-300 group-hover:text-[#0E2117]">
//                                 {String(index + 1).padStart(2, '0')} — {item.caption}
//                             </p>
//                         )}

//                     </div>
//                 ))}

//             </div>
//         </section>
//     );
// }
