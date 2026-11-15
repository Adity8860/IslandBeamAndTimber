import Image from "next/image";
import Link from "next/link";
import Cards from "@/Components/Ui/Cards";
import { services, values } from "@/lib/CustomLumberConst";
import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx"
import { customLumberData } from "@/lib/CustomLumberConst.js"

const padX = "px-5 sm:px-10 lg:px-16 mt-16";
const padY = "py-12 md:py-24";
const eyebrow = "block mb-3.5 text-[0.78rem] font-semibold tracking-[0.12em] text-[#a86f1c]";
const h2 = "font-display font-bold leading-none tracking-[0.01em] text-balance text-[clamp(2rem,4.4vw,3.4rem)]";
const focus = "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#c98a2b]";

export default function CustomLumber() {
    return (
        <div className="bg-[#eef0e8] font-body leading-relaxed text-[#17241d] [&_p]:max-w-[62ch] [&_p]:text-pretty">
            {/* <section
                className={`${padX} grid grid-cols-1 gap-6 bg-[#17241d] pt-8 pb-12 text-[#eef0e8] md:gap-10 md:pt-14 md:pb-24 lg:grid-cols-[5fr_6fr] lg:items-stretch`}
                aria-labelledby="cl-title"
            >
                <div className="flex flex-col justify-between gap-8">
                    <div>
                        <span className="mb-6 cl-rise inline-flex items-center gap-2.5 rounded-full border border-[#eef0e8]/30 px-3.5 py-1.5 text-sm">
                            <span className="cl-pulse size-2 rounded-full bg-[#c98a2b]" /> Island Beam &amp; Timber
                        </span>
                        <h1 id="cl-title" className="cl-rise cl-delay-120 font-display font-extrabold leading-none tracking-[0.005em] text-balance text-[clamp(2.6rem,7.5vw,6rem)]">
                            CUSTOM LUMBER &amp;<br />BEAM &amp; TIMBER SERVICES
                        </h1>
                    </div>
                    <p className="cl-rise cl-delay-240 text-[clamp(1rem,1.4vw,1.15rem)] text-[#eef0e8]/80">
                        Thoughtfully milled lumber, crafted to fit your project. From custom beams and live edge slabs to planed profiles, we bring local wood and skilled hands together.
                    </p>
                </div>
                <div className="relative min-h-[clamp(280px,48vw,520px)] cl-wipe cl-delay-150 overflow-hidden rounded-md bg-[#3a2f26] lg:min-h-[560px]">
                    <Image className="cl-settle cl-delay-150 object-cover" src="/Images/pageImg/img7.png" alt="Timber and lumber being processed at a Vancouver Island sawmill" fill priority sizes="(max-width: 1024px) 100vw, 55vw" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17241d]/70 via-transparent via-45% to-transparent" />
                    <div className="absolute inset-x-4 top-4 z-10 flex cl-rise cl-delay-800 justify-between gap-4 text-sm text-[#eef0e8] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                     </div>
                    <div className="absolute bottom-4 left-4 z-10 inline-flex cl-rise cl-delay-950 items-center gap-3 rounded-md bg-[#c98a2b] px-4 py-2.5 font-display text-[1.05rem] font-bold tracking-[0.04em] text-[#17241d]">
                        BUILT FROM THE GROUND UP <span>↗</span>
                    </div>
                </div>
            </section> */}

            <CustomLumberHero
                data={customLumberData}
                padX={padX}
            />

            <section className={`${padX} ${padY}`} id="services">
                <div className="mb-7 grid gap-4 md:mb-12 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-12">
                    <div><span className={eyebrow}>OUR CRAFT &amp; SERVICES</span><h2 className={h2}>SPECIALIZED ISLAND BEAM &amp; TIMBER MANIFESTS</h2></div>
                    <p className="text-[#3a2f26]">From raw timber to refined detail, we bring your custom lumber ideas to life with local expertise and a hands-on approach.</p>
                </div>
                <Cards type="crafted" items={services} className="!p-0" />
            </section>

            <section className={`${padX} grid grid-cols-2 bg-[#0b2117] py-0 text-[#eef0e8] md:grid-cols-4`} aria-label="Our experience">
                {[["20+", "YEARS OF EXPERIENCE"], ["15M", "BOARD FEET OF LOGS"], ["15K", "CUSTOM CUTS & MILLING"], ["1.2M", "BOARD FEET MILLED"]].map(([value, label]) => (
                    <div
                        key={label}
                        className="flex flex-col gap-1.5 border-b border-[#eef0e8]/15 px-4 py-6 odd:border-r md:border-b-0 md:px-7 md:py-10 md:odd:border-r-0 md:[&:not(:first-child)]:border-l"
                    >
                        <strong className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-none tabular-nums text-[#c98a2b]">{value}</strong>
                        <span className="text-[0.78rem] tracking-[0.1em] text-[#eef0e8]/75">{label}</span>
                    </div>
                ))}
            </section>

            <section className={`${padX} ${padY} relative grid gap-8 md:gap-16 lg:grid-cols-[6fr_5fr] lg:items-start`}>
                <div className="grid content-start gap-5 text-[#3a2f26]">
                    <span className={eyebrow}>ROOTED IN THE ISLAND</span>
                    <h2 className={`${h2} text-[#17241d]`}>Rooted on Vancouver Island.<br />Growing with Every Cut.</h2>
                    <p>We’re a local lumber yard and sawmill built around good wood, careful work, and relationships that last. Our team helps turn Island timber into something made for your home, your project, and your place.</p>
                    <p>From choosing the right species to milling a custom profile, we’re here to make the process feel straightforward—and the finished piece feel like it belongs.</p>
                    <div className="cl-zoom relative mt-3 aspect-[4/3] overflow-hidden rounded-md bg-[#3a2f26]">
                        <Image className="object-cover" src="/Images/pageImg/img8.png" alt="Craftsperson working with timber in the Island Beam & Timber workshop" fill sizes="(max-width: 800px) 100vw, 50vw" />
                    </div>
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#17241d]/15 pt-3 text-xs font-semibold tracking-wider text-[#17241d]/75 uppercase">
                        <span>Hand-Selected Island Logs</span>
                        <span>Comox Valley Facility</span>
                    </div>
                </div>
                <div className="grid content-start self-start lg:sticky lg:top-24 xl:top-28">
                    {values.map((value) => (
                        <article key={value.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-[#17241d]/15 py-6 last:border-b">
                            <span className="grid size-10 place-items-center rounded-full bg-[#17241d] text-[1.1rem] text-[#c98a2b]">✳</span>
                            <div>
                                <h3 className="mb-1.5 font-display text-[1.6rem] font-bold leading-none">{value.title}</h3>
                                <p className="text-[0.98rem] text-[#3a2f26]">{value.copy}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={`${padX} ${padY} grid items-end gap-8 bg-[#17241d] text-[#eef0e8] lg:grid-cols-[1fr_auto] lg:gap-16`}>
                <div className="grid gap-4">
                    <span className={eyebrow}>LET’S MAKE SOMETHING LAST</span>
                    <h2 className={h2}>Ready to start your custom lumber<br className="hidden lg:inline" /> order or request milling specifications?</h2>
                    <p className="text-[#eef0e8]/80">Talk with our team about your project, your wood, and what you’d like to build.</p>
                </div>
                <Link
                    href="/Contact"
                    className={`${focus} cl-nudge inline-flex items-center justify-self-start gap-3 rounded-md bg-[#c98a2b] px-6 py-4 font-display text-xl font-bold tracking-[0.04em] text-[#17241d] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#dba043] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
                >
                    Contact our team <span className="cl-arrow">↗</span>
                </Link>
            </section>
        </div>
    );
}


// import Image from "next/image";
// import Link from "next/link";
// import Cards from "@/Components/Ui/Cards";
// import { services, values } from "@/lib/CustomLumberConst";



// export default function CustomLumber() {
//     return (
//         <main className="custom-lumber">
//             <section className="cl-hero" aria-labelledby="cl-title">
//                 <div className="cl-hero-copy">
//                     <div>
//                         <span className="cl-pill"><span /> Island Beam &amp; Timber</span>
//                         <h1 id="cl-title">CUSTOM LUMBER &amp;<br />BEAM &amp; TIMBER SERVICES</h1>
//                     </div>
//                     <p>Thoughtfully milled lumber, crafted to fit your project. From custom beams and live edge slabs to planed profiles, we bring local wood and skilled hands together.</p>
//                 </div>
//                 <div className="cl-hero-image">
//                     <Image src="/Images/pageImg/img7.png" alt="Timber and lumber being processed at a Vancouver Island sawmill" fill priority sizes="100vw" />
//                     <div className="cl-image-caption"><span>⌖ &nbsp;Locally milled</span><span>Vancouver Island, BC</span></div>
//                     <div className="cl-image-cta">BUILT FROM THE GROUND UP <span>↗</span></div>
//                 </div>
//             </section>

//             <section className="cl-services" id="services">
//                 <div className="cl-section-heading">
//                     <div><span className="cl-eyebrow">OUR CRAFT &amp; SERVICES</span><h2>SPECIALIZED ISLAND BEAM &amp; TIMBER MANIFESTS</h2></div>
//                     <p>From raw timber to refined detail, we bring your custom lumber ideas to life with local expertise and a hands-on approach.</p>
//                 </div>
//                 <Cards type="crafted" items={services} className="!p-0" />
//             </section>

//             <section className="cl-stats" aria-label="Our experience">
//                 {[["20+", "YEARS OF EXPERIENCE"], ["15M", "BOARD FEET OF LOGS"], ["15K", "CUSTOM CUTS & MILLING"], ["1.2M", "BOARD FEET MILLED"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
//             </section>

//             <section className="cl-story">
//                 <div className="cl-story-main">
//                     <span className="cl-eyebrow">ROOTED IN THE ISLAND</span>
//                     <h2>Rooted on Vancouver Island.<br />Growing with Every Cut.</h2>
//                     <p>We’re a local lumber yard and sawmill built around good wood, careful work, and relationships that last. Our team helps turn Island timber into something made for your home, your project, and your place.</p>
//                     <p>From choosing the right species to milling a custom profile, we’re here to make the process feel straightforward—and the finished piece feel like it belongs.</p>
//                     <div className="cl-story-image"><Image src="/Images/pageImg/img8.png" alt="Craftsperson working with timber in the Island Beam & Timber workshop" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
//                 </div>
//                 <div className="cl-values">{values.map((value) => <article key={value.title}><span className="cl-value-mark">✳</span><div><h3>{value.title}</h3><p>{value.copy}</p></div></article>)}</div>
//             </section>

//             <section className="cl-contact">
//                 <div><span className="cl-eyebrow">LET’S MAKE SOMETHING LAST</span><h2>Ready to start your custom lumber<br className="cl-desktop" /> order or request milling specifications?</h2><p>Talk with our team about your project, your wood, and what you’d like to build.</p></div>
//                 <Link href="/Contact">Contact our team <span>↗</span></Link>
//             </section>
//         </main>
//     );
// }
