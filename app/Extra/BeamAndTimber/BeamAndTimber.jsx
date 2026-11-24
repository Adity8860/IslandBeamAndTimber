import Cards from "@/Components/Ui/Cards";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import { Check, CircleCheck, Ruler } from "lucide-react";
import Image from "next/image";



const stockOptions = [
    {
        id: "species",
        title: "Douglas fir",
        tag: "01 / SPECIES",
        description: "Strong, warm-toned stock for exposed structure and long spans.",
        className: "!min-h-[170px] !rounded-lg !border-t-[3px] !border-t-[#F4B323] !bg-white !p-5 !shadow-sm sm:!p-6",
    },
    {
        id: "profile",
        title: "Rough or planed",
        tag: "02 / PROFILE",
        description: "Mill-sawn character or a refined surface, ready for finishing.",
        className: "!min-h-[170px] !rounded-lg !border-t-[3px] !border-t-[#F4B323] !bg-white !p-5 !shadow-sm sm:!p-6",
    },
    {
        id: "preparation",
        title: "Cut to schedule",
        tag: "03 / PREPARATION",
        description: "Trimmed lengths and organized bundles that keep the site moving.",
        className: "!min-h-[170px] !rounded-lg !border-t-[3px] !border-t-[#F4B323] !bg-white !p-5 !shadow-sm sm:!p-6",
    },
];

const benefits = [
    {
        icon: <Ruler aria-hidden="true" size={17} />,
        title: "Exact dimensions",
        copy: "Specified section sizes and consistent finish across the package.",
    },
    {
        icon: <CircleCheck aria-hidden="true" size={17} />,
        title: "Project-ready sorting",
        copy: "Pieces labeled by bay, bent, or sequence before they leave the yard.",
    },
];

const applications = [
    "Timber-frame homes and cabins",
    "Commercial pavilions and public spaces",
    "Porches, pergolas, and covered entries",
    "Restoration and heritage millwork",
];

function ImagePlaceholder({ src, alt, className = "" }) {
    return (
        <div className={`relative overflow-hidden rounded-lg bg-[#E4DFD2] text-xs text-[#45564B] shadow-[0_24px_40px_-26px_rgba(9,39,27,0.5)] ring-1 ring-[#09271B]/10 ${className}`}>
            <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
        </div>
    );
}

function Eyebrow({ children, light = false }) {
    return (
        <p className={`mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[.14em] ${light ? "text-[#F4B323]" : "text-[#A86F1C]"}`}>
            <span className="size-1.5 rounded-full bg-[#F4B323]" aria-hidden="true" />
            {children}
        </p>
    );
}

const heading = "text-balance text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1] tracking-[-.04em] text-[#09271B]";
const copy = "text-pretty text-sm leading-[1.65] text-[#45564B] sm:text-base";
const focusDark = "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#09271B]";
const btn = "inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-bold tracking-wide transition-[background-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
// Full-bleed bands: inner padding follows the 1280px page container so content lines up with the rest of the page
const bleedPad = "px-[max(1.25rem,calc((100vw_-_1280px)/2_+_1.25rem))] sm:px-[max(2rem,calc((100vw_-_1280px)/2_+_2rem))] lg:px-[max(3rem,calc((100vw_-_1280px)/2_+_3rem))]";

export default function BeamAndTimber() {
    return (
        <main className="overflow-x-clip bg-[#F7F3EB] text-[#09271B]">
            <ScrollReveal />
            <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
                <section className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-28" aria-labelledby="beam-hero-title">
                    <div>
                        <Eyebrow>Structural timber, cut with purpose</Eyebrow>
                        <h1 id="beam-hero-title" className={`${heading} cl-rise cl-delay-120 max-w-[620px]`}>Beam &amp; timber for<br className="hidden sm:block" /> the work that lasts.</h1>
                        <p className="cl-rise cl-delay-240 mt-5 max-w-[560px] text-pretty text-base leading-[1.65] text-[#45564B] sm:text-lg">Reliable structural stock, sawn to your specifications and selected for the strength, character, and scale your build demands.</p>
                        <div className="cl-rise cl-delay-240 mt-8 flex flex-wrap gap-3">
                            <a href="/Contact" className={`${btn} ${focusDark} bg-[#F4B323] text-[#09271B] shadow-[0_12px_24px_-14px_rgba(9,39,27,0.6)] hover:bg-[#FFC53D]`}>Request a beam quote <span aria-hidden="true">↗</span></a>
                            <a href="/FinishedLumber" className={`${btn} ${focusDark} border-2 border-[#09271B] text-[#09271B] hover:bg-[#09271B] hover:text-[#F7F3EB]`}>Browse finished lumber</a>
                        </div>
                    </div>
                    <ImagePlaceholder src="/Images/BTImg/IMG1.png" alt="Timber beams at the mill" className="cl-wipe cl-delay-150 aspect-[1.23] w-full" />
                </section>

                <section aria-label="Beam specifications" className={`relative left-1/2 grid w-screen -translate-x-1/2 grid-cols-1 divide-y divide-white/10 bg-[#09271B] py-3 text-[#F4B323] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-4 ${bleedPad}`}>
                    {[
                        ["6×6 to 12×24", "Common nominal sizes, plus custom milling"],
                        ["Up to 32 ft", "Long lengths selected for clear span work"],
                        ["FSC options", "Responsible sourcing for project requirements"],
                    ].map(([title, description]) => (
                        <div key={title} className="cards-in py-5 sm:px-8 sm:py-8 sm:first:pl-0 sm:last:pr-0">
                            <h2 className="flex items-center gap-2.5 text-xl font-extrabold tracking-[-.03em] tabular-nums sm:text-3xl"><span className="size-1.5 rounded-full bg-[#F4B323]" />{title}</h2>
                            <p className="mt-2 text-pretty text-sm leading-[1.55] text-[#B7CDBF]">{description}</p>
                        </div>
                    ))}
                </section>

                <section className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-28" aria-labelledby="mill-title">
                    <div className="story-from-left cl-zoom rounded-xl border border-[#09271B]/10 bg-[#EFEBDF] p-3 sm:p-4">
                        {/* <div className="mb-3 px-2 text-xs text-[#45564B]"><strong className="text-[#09271B]">Isalnd Beam &amp; Timber</strong><span className="mx-2">—</span>Beams &amp; Timber</div> */}
                        <ImagePlaceholder src="/Images/BTImg/img2.png" alt="Timber being processed at the sawmill" className="aspect-[1.25] w-full rounded-lg shadow-none" />
                    </div>
                    <div className="story-from-right lg:pl-5">
                        <Eyebrow>Made for the span</Eyebrow>
                        <h2 id="mill-title" className={heading}>Material certainty from mill floor to jobsite.</h2>
                        <p className={`${copy} mt-4 max-w-[52ch]`}>We sort each beam for the visual and structural demands of the project, then mill, plane, trim, and mark every piece for a smoother install.</p>
                        <div className="mt-6 grid gap-3">
                            {benefits.map((benefit) => (
                                <article key={benefit.title} className="flex items-start gap-4 rounded-lg border border-[#E4DAC6] bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_32px_-22px_rgba(9,39,27,0.4)] sm:p-5">
                                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#09271B] text-[#F4B323]">{benefit.icon}</span>
                                    <div><h3 className="text-base font-bold text-[#09271B]">{benefit.title}</h3><p className="mt-1 text-sm leading-relaxed text-[#45564B]">{benefit.copy}</p></div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={`relative left-1/2 w-screen -translate-x-1/2 bg-[#09271B] py-14 text-white sm:py-16 lg:py-20 ${bleedPad}`} aria-labelledby="stock-title">
                    <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
                        <div><Eyebrow light>Choose your stock</Eyebrow><h2 id="stock-title" className="max-w-[600px] text-balance text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold leading-[1] tracking-[-.04em]">Built around your structural and visual brief.</h2></div>
                        <p className="max-w-[430px] text-pretty text-sm leading-[1.65] text-[#B7CDBF] sm:text-base lg:justify-self-end">Bring us your schedule, species preference, target moisture content, and finish requirements. We will assemble a beam package that meets the moment.</p>
                    </div>
                    <Cards type="services" items={stockOptions} className="!mt-8 !px-0 !py-0 sm:!mt-10" gridClassName="!grid-cols-1 !gap-3 md:!grid-cols-3 md:!gap-4" />
                </section>

                <section className="grid items-center gap-9 py-14 sm:py-20 lg:grid-cols-[.88fr_1.12fr] lg:gap-14 lg:py-28" aria-labelledby="applications-title">
                    <div className="story-from-left">
                        <Eyebrow>Where it works</Eyebrow>
                        <h2 id="applications-title" className={heading}>For structures that put the material on view.</h2>
                        <ul className="mt-6 divide-y divide-[#09271B]/10 border-y border-[#09271B]/10 text-base text-[#2F3F36]">
                            {applications.map((item) => <li key={item} className="flex items-center gap-3 py-3.5"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#09271B] text-white"><Check size={12} strokeWidth={3} /></span>{item}</li>)}
                        </ul>
                    </div>
                    <ImagePlaceholder src="/Images/BTImg/img3.png" alt="Finished timber prepared for a project" className="story-from-right aspect-[1.28] w-full" />
                </section>

            </div>
        </main>
    );
}
