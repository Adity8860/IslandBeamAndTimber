// import Image from "next/image";
// import Link from "next/link";

// export function HeroSection({ data = [] }) {
//     if (!Array.isArray(data) || data.length === 0) return null;

//     return data.map((section, index) => (
//         <div key={section.id ?? section.title ?? index}>
//             <section className="mx-auto grid w-[min(100%-2.5rem,1600px)] gap-10 pb-16 pt-28 sm:w-[min(100%-4rem,1600px)] sm:pb-20 sm:pt-36 lg:min-h-[680px] lg:grid-cols-[1.18fr_.82fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-36">
//                 <div className="max-w-[900px]">
//                     {section.badge && (
//                         <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#102D1F] sm:text-sm">
//                             <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323]" aria-hidden="true" />
//                             {section.badge}
//                         </p>
//                     )}
//                     <h1 className="mt-6 text-balance text-[clamp(3rem,7vw,6.6rem)] font-black leading-[.93] tracking-[-.065em]">
//                         {Array.isArray(section.title) ? section.title.map((line) => <span className="block" key={line}>{line}</span>) : section.title}
//                     </h1>
//                     {section.description && (
//                         <p className="mt-8 max-w-[760px] text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:mt-10 sm:text-xl lg:text-2xl">{section.description}</p>
//                     )}
//                     {(section.primaryAction || section.secondaryAction) && (
//                         <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">
//                             {section.primaryAction && (
//                                 <Link href={section.primaryAction.href || "/Contact"} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#102D1F] px-7 py-4 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#19452F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]">
//                                     {section.primaryAction.label}<span aria-hidden="true">{section.primaryAction.icon || "↗"}</span>
//                                 </Link>
//                             )}
//                             {section.secondaryAction && (
//                                 <Link href={section.secondaryAction.href || "/FinishedLumber"} className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#E6AE00] px-7 py-4 font-bold text-[#102D1F] transition hover:bg-[#FFF4CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]">
//                                     {section.secondaryAction.label}
//                                 </Link>
//                             )}
//                         </div>
//                     )}
//                 </div>
//                 {section.image?.src && (
//                     <div className="relative aspect-[1.22/1] min-h-[290px] overflow-hidden bg-[#E7E1D4] sm:min-h-[420px] lg:aspect-[.93/1] lg:min-h-[510px]">
//                         <Image src={section.image.src} alt={section.image.alt || ""} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
//                     </div>
//                 )}
//             </section>
//             {section.specs?.length > 0 && (
//                 <section aria-label={section.specsLabel || "Service specifications"} className="bg-[#0E2D1E] text-[#F4B323]">
//                     <div className="mx-auto grid w-[min(100%-2.5rem,1600px)] divide-y divide-[#F4B323]/20 py-7 sm:w-[min(100%-4rem,1600px)] sm:py-9 md:grid-cols-3 md:divide-x md:divide-y-0">
//                         {section.specs.map((spec, specIndex) => (
//                             <div key={spec.id ?? spec.label ?? specIndex} className="py-5 first:pt-0 last:pb-0 md:px-8 md:py-1 md:first:pl-0 md:first:pt-1 md:last:pb-1">
//                                 <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm"><span className="h-2.5 w-2.5 rounded-full bg-[#F4B323]" aria-hidden="true" />{spec.label}</p>
//                                 <p className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">{spec.value}</p>
//                                 {spec.description && <p className="mt-2 text-sm leading-relaxed text-[#B7CDBF] sm:text-base">{spec.description}</p>}
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             )}
//         </div>
//     ));
// }

import Image from "next/image";
import Link from "next/link";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]";

export function HeroSection({ data = [] }) {
    if (!Array.isArray(data) || data.length === 0) return null;

    return data.map((section, index) => (
        <div key={section.id ?? section.title ?? index} className="overflow-x-clip">
            <section
                style={section.containerStyle}
                className={`relative isolate mx-auto box-border grid w-full gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-[680px] lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-28 lg:pt-36 ${section.containerClassName || "max-w-[1480px]"}`}
            >
                <span aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-[#F4B323]/15 blur-3xl" />
                <span aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#102D1F]/5 blur-3xl" />

                <div className={`mx-auto w-full ${section.contentClassName || ""}`} style={section.contentStyle}>
                    {section.badge && (
                        <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#102D1F] sm:text-sm">
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25" aria-hidden="true" />
                            {section.badge}
                        </p>
                    )}
                    <h1 className="mt-6 text-balance text-[clamp(2.8rem,3.8vw,4rem)] font-black leading-[.96] tracking-[-.055em] text-[#102D1F]">
                        {Array.isArray(section.title) ? section.title.map((line) => <span className="block" key={line}>{line}</span>) : section.title}
                    </h1>
                    {section.description && (
                        <p className="mt-8 max-w-[760px] text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:mt-10 sm:text-xl lg:text-2xl">{section.description}</p>
                    )}
                    {(section.primaryAction || section.secondaryAction) && (
                        <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">
                            {section.primaryAction && (
                                <Link
                                    href={section.primaryAction.href || "/Contact"}
                                    className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#102D1F] px-7 py-4 font-bold text-white shadow-[0_14px_28px_-14px_rgba(16,45,31,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#19452F] hover:shadow-[0_18px_32px_-14px_rgba(16,45,31,0.75)] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                                >
                                    {section.primaryAction.label}
                                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0">
                                        {section.primaryAction.icon || "↗"}
                                    </span>
                                </Link>
                            )}
                            {section.secondaryAction && (
                                <Link
                                    href={section.secondaryAction.href || "/FinishedLumber"}
                                    className={`inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#E6AE00] px-7 py-4 font-bold text-[#102D1F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFF4CC] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                                >
                                    {section.secondaryAction.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
                {section.image?.src && (
                    <div className="relative aspect-[1.22/1] min-h-[290px] overflow-hidden rounded-3xl bg-[#E7E1D4] ring-1 ring-[#102D1F]/10 shadow-[0_30px_60px_-36px_rgba(16,45,31,0.55)] sm:min-h-[420px] lg:aspect-[.93/1] lg:min-h-[510px]">
                        <Image src={section.image.src} alt={section.image.alt || ""} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
                        <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#102D1F]/30 to-transparent" />
                    </div>
                )}
            </section>

            {section.specs?.length > 0 && (
                // <section
                //     aria-label={section.specsLabel || "Service specifications"}
                //     className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0E2D1E,#0A2216)] text-[#F4B323]"
                // >
                //     {/* Top and bottom hairline highlights */}
                //     <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/50 to-transparent" />
                //     <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/20 to-transparent" />

                //     {/* Soft glow behind the band */}
                //     <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-[#F4B323]/10 blur-3xl" />
                //     <span aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-[#19452F]/60 blur-3xl" />

                //     <div className="relative mx-auto grid w-[min(100%-2.5rem,1600px)] gap-3 py-8 sm:w-[min(100%-4rem,1600px)] sm:py-11 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#F4B323]/20">
                //         {section.specs.map((spec, specIndex) => (
                //             <div
                //                 key={spec.id ?? spec.label ?? specIndex}
                //                 className="group relative rounded-2xl border border-[#F4B323]/15 bg-white/[0.03] px-5 py-6 transition-[background-color,border-color] duration-300 hover:border-[#F4B323]/40 hover:bg-white/[0.06] motion-reduce:transition-none md:rounded-none md:border-0 md:bg-transparent md:px-8 md:py-2 md:first:pl-0 md:last:pr-0 md:hover:bg-transparent"
                //             >
                //                 <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm">
                //                     <span
                //                         aria-hidden="true"
                //                         className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25 transition-[box-shadow] duration-300 group-hover:ring-[#F4B323]/45 motion-reduce:transition-none"
                //                     />
                //                     {spec.label}
                //                 </p>
                //                 <p className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] text-[#FFD561] [font-variant-numeric:tabular-nums] sm:text-4xl lg:text-5xl">
                //                     {spec.value}
                //                 </p>
                //                 {spec.description && (
                //                     <p className="mt-3 max-w-[34ch] text-pretty text-sm leading-relaxed text-[#B7CDBF] sm:text-base">
                //                         {spec.description}
                //                     </p>
                //                 )}
                //             </div>
                //         ))}
                //     </div>
                // </section>
                <section
                    aria-label={section.specsLabel || "Service specifications"}
                    className="group/band relative isolate overflow-hidden bg-[linear-gradient(180deg,#0E2D1E,#0A2216)] text-[#F4B323]"
                >
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/50 to-transparent" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/20 to-transparent" />

                    {/* Drifting glows */}
                    <span aria-hidden="true" className="spec-drift-a pointer-events-none absolute -left-24 top-1/4 -z-10 h-64 w-64 rounded-full bg-[#F4B323]/10 blur-3xl group-hover/band:[animation-play-state:paused]" />
                    <span aria-hidden="true" className="spec-drift-b pointer-events-none absolute -right-24 top-1/4 -z-10 h-64 w-64 rounded-full bg-[#19452F]/60 blur-3xl group-hover/band:[animation-play-state:paused]" />

                    {/* Light sheen sweeping across the band */}
                    <span aria-hidden="true" className="spec-sheen pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-[#F4B323]/10 to-transparent group-hover/band:[animation-play-state:paused]" />

                    <div className="relative mx-auto grid w-[min(100%-2.5rem,1600px)] gap-3 py-8 sm:w-[min(100%-4rem,1600px)] sm:py-11 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#F4B323]/20">
                        {section.specs.map((spec, specIndex) => (
                            <div
                                key={spec.id ?? spec.label ?? specIndex}
                                className="group relative rounded-2xl border border-[#F4B323]/15 bg-white/[0.03] px-5 py-6 transition-[background-color,border-color] duration-300 hover:border-[#F4B323]/40 hover:bg-white/[0.06] motion-reduce:transition-none md:rounded-none md:border-0 md:bg-transparent md:px-8 md:py-2 md:first:pl-0 md:last:pr-0 md:hover:bg-transparent"
                            >
                                <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm">
                                    <span
                                        aria-hidden="true"
                                        style={{ animationDelay: `${specIndex * 400}ms` }}
                                        className="spec-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323] group-hover/band:[animation-play-state:paused]"
                                    />
                                    {spec.label}
                                </p>
                                <p className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] text-[#FFD561] [font-variant-numeric:tabular-nums] sm:text-4xl lg:text-5xl">
                                    {spec.value}
                                </p>
                                {spec.description && (
                                    <p className="mt-3 max-w-[34ch] text-pretty text-sm leading-relaxed text-[#B7CDBF] sm:text-base">
                                        {spec.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
                // <section aria-label={section.specsLabel || "Service specifications"} className="relative overflow-hidden bg-[linear-gradient(180deg,#0E2D1E,#0A2216)] text-[#F4B323]">
                //     <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/50 to-transparent" />
                //     <div className="relative mx-auto grid w-[min(100%-2.5rem,1600px)] divide-y divide-[#F4B323]/20 py-8 sm:w-[min(100%-4rem,1600px)] sm:py-11 md:grid-cols-3 md:divide-x md:divide-y-0">
                //         {section.specs.map((spec, specIndex) => (
                //             <div key={spec.id ?? spec.label ?? specIndex} className="py-5 first:pt-0 last:pb-0 md:px-8 md:py-1 md:first:pl-0 md:first:pt-1 md:last:pb-1">
                //                 <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm">
                //                     <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25" aria-hidden="true" />
                //                     {spec.label}
                //                 </p>
                //                 <p className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] text-[#FFD561] sm:text-4xl">{spec.value}</p>
                //                 {spec.description && <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-[#B7CDBF] sm:text-base">{spec.description}</p>}
                //             </div>
                //         ))}
                //     </div>
                // </section>
            )}
        </div>
    ));
}

export default function CustomLumberHero({
    data,
    className = "",
    padX = "",
}) {
    if (!data) return null;

    return (
        <section
            className={`${padX} ${className} grid grid-cols-1 gap-6 bg-[#17241d] pt-8 pb-12 text-[#eef0e8] md:gap-10 md:pt-14 md:pb-24 lg:grid-cols-[5fr_6fr] lg:items-stretch`}
            aria-labelledby="cl-title"
        >
            <div className="flex flex-col justify-between gap-8">

                <div>
                    {data.badge && (
                        <span className="mb-6 cl-rise inline-flex items-center gap-2.5 rounded-full border border-[#eef0e8]/30 px-3.5 py-1.5 text-sm">
                            <span className="cl-pulse size-2 rounded-full bg-[#c98a2b]" />
                            {data.badge}
                        </span>
                    )}

                    <h1
                        id="cl-title"
                        className="cl-rise cl-delay-120 font-display font-extrabold leading-none tracking-[0.005em] text-balance text-[clamp(2.6rem,7.5vw,6rem)]"
                    >
                        {data.title?.map((line, index) => (
                            <span key={index}>
                                {line}
                                {index !== data.title.length - 1 && <br />}
                            </span>
                        ))}
                    </h1>
                </div>

                {data.description && (
                    <p className="cl-rise cl-delay-240 text-[clamp(1rem,1.4vw,1.15rem)] text-[#eef0e8]/80">
                        {data.description}
                    </p>
                )}
            </div>

            {data.image?.src && (
                <div className="relative min-h-[clamp(280px,48vw,520px)] cl-wipe cl-delay-150 overflow-hidden rounded-md bg-[#3a2f26] lg:min-h-[560px]">

                    <Image
                        className="cl-settle cl-delay-150 object-cover"
                        src={data.image.src}
                        alt={data.image.alt || ""}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 55vw"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17241d]/70 via-transparent via-45% to-transparent" />

                    {(data.location?.left || data.location?.right) && (
                        <div className="absolute inset-x-4 top-4 z-10 flex cl-rise cl-delay-800 justify-between gap-4 text-sm text-[#eef0e8] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                            {data.location.left && (
                                <span>{data.location.left}</span>
                            )}

                            {data.location.right && (
                                <span>{data.location.right}</span>
                            )}
                        </div>
                    )}

                    {data.cta?.text && (
                        <Link
                            href={data.cta.href || "/contact"}
                            className="absolute bottom-4 left-4 z-10 inline-flex cl-rise cl-delay-950 items-center gap-3 rounded-md bg-[#c98a2b] px-4 py-2.5 font-display text-[1.05rem] font-bold tracking-[0.04em] text-[#17241d] transition-all duration-300 hover:bg-[#e5a84b] hover:-translate-y-1"
                        >
                            {data.cta.text}
                            <span>{data.cta.icon || "↗"}</span>
                        </Link>
                    )}
                </div>
            )}
        </section>
    );
}
