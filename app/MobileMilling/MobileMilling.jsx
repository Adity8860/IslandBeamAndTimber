import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Ruler, RefreshCw } from "lucide-react";
import { HeroSection } from "@/Components/Ui/ServiceHro.jsx";
import ScrollReveal from "@/Components/Ui/ScrollReveal.jsx";

const mobileMillingHero = [
    {
        id: "mobile-milling",
        containerClassName: "max-w-7xl",
        contentClassName: "max-w-7xl",
        badge: "On-site sawmilling, cut with purpose",
        title: ["Mobile milling for", "the trees that fell."],
        description: "Turn storm-felled, yard-cleared, and salvaged Vancouver Island timber into precision architectural lumber right on your property. Eliminating hauling overhead while keeping valuable material in use.",
        image: { src: "/Images/BTImg/img2.png", alt: "Woodworker shaping a timber beam in a workshop" },
        primaryAction: { label: "Request mobile milling", href: "/Contact" },
        secondaryAction: { label: "Browse finished lumber", href: "/FinishedLumber" },
        specsLabel: "Mobile sawmill capacity",
        specs: [
            { label: "Capacity", value: "Up to 36 in dia", description: "Max log diameter for portable bandsaw setup" },
            { label: "Span", value: "Up to 21 ft", description: "Long lengths milled for clear span beams & rafters" },
            { label: "Precision", value: "Ultra-thin 1.8mm", description: "Thin-kerf bandsaw efficiency for maximum timber yield" },
        ],
    },
];

const cutOptions = [
    { number: "01 / Species", title: "Douglas fir & Cedar", detail: "Strong, tight-grain native wood for exposed beams, posts, and exterior siding." },
    { number: "02 / Profile", title: "Live edge or dimensional", detail: "Natural live-edge slabs, heavy posts, or full dimensional 2x framing lumber." },
    { number: "03 / Preparation", title: "Cut to schedule & stickered", detail: "Pieces stickered and stacked for proper air circulation on site." },
];

const millingStories = [
    {
        title: "Keep valuable timber close to home.",
        text: "Storm-felled and standing trees can become useful building material instead of being hauled away. Milling on your property keeps the process close to the source and gives each log a clear next purpose.",
    },
    {
        title: "Plan each cut around the build.",
        text: "We can work from your drawings, dimensions, and preferred species to create a practical cut schedule. That helps turn irregular logs into beams, posts, boards, and live-edge pieces selected for the work ahead.",
    },
    {
        title: "Leave the site organized for what comes next.",
        text: "As boards are milled, they can be trimmed, sorted, and stickered into manageable stacks. Your lumber stays on site, ready for air drying and easier handling when construction begins.",
    },
];

const frame = "relative overflow-hidden rounded-3xl bg-[#E7E1D4] ring-1 ring-[#102D1F]/10 shadow-[0_30px_60px_-36px_rgba(16,45,31,0.55)]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]";

function Eyebrow({ children, light = false }) {
    return (
        <p className={`flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm ${light ? "text-[#F4B323]" : "text-[#102D1F]"}`}>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25" aria-hidden="true" />
            {children}
        </p>
    );
}

export default function MobileMilling() {
    return (
        <main className="overflow-x-clip bg-[#FBF9F5] text-[#102D1F] antialiased">
            <ScrollReveal />
            <div ><HeroSection data={mobileMillingHero} /></div>


            {/* <section className="mx-auto grid w-[min(100%-2.5rem,1600px)] gap-10 py-16 sm:w-[min(100%-4rem,1600px)] sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32">
                <div className={`${frame} order-2 aspect-[1.2/1] min-h-[280px] lg:order-1 lg:min-h-[500px]`}>
                    <Image src="/Images/BTImg/IMG1.png" alt="Freshly milled timber stacked at a forest-side lumber yard" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#102D1F]/25 to-transparent" />
                </div>
                <div className="order-1 lg:order-2">
                    <Eyebrow>Made for the site</Eyebrow>
                    <h2 className="mt-5 text-balance text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">Material certainty from mill deck to jobsite.</h2>
                    <p className="mt-6 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        We bring professional hydraulic bandsaw milling directly to your land, sorting, trimming, and stickering every board for a smooth, waste-free build.
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[
                            { Icon: Ruler, title: "Exact dimensions", text: "Specified section sizes and consistent finish across the package." },
                            { Icon: RefreshCw, title: "Project-ready sorting", text: "Pieces stickered and stacked for air drying right where you build." },
                        ].map(({ Icon, title, text }) => (
                            <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#102D1F]/10 bg-[#F5F2EC] p-6 shadow-[0_1px_2px_rgba(16,45,31,0.06)] transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#F4B323]/70 hover:bg-white hover:shadow-[0_24px_40px_-28px_rgba(16,45,31,0.55)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
                                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#F4B323] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
                                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#F4B323] text-[#102D1F] transition-[background-color,color,transform] duration-300 group-hover:-rotate-3 group-hover:bg-[#102D1F] group-hover:text-[#F4B323] motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 text-lg font-bold tracking-[-0.01em]">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#59665D] sm:text-base">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section> */}
            <section className="relative isolate mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-10 lg:py-32">
                <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-80 w-80 rounded-full bg-[#F4B323]/10 blur-3xl" />

                <div data-reveal="left" className={`${frame} group order-2 aspect-[1.2/1] min-h-[280px] lg:sticky lg:top-24 lg:order-1 lg:min-h-[500px]`}>
                    <Image
                        src="/Images/BTImg/IMG1.png"
                        alt="Freshly milled timber stacked at a forest-side lumber yard"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#102D1F]/25 to-transparent" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
                </div>

                <div className="order-1 lg:order-2">
                    <div data-reveal style={{ "--d": "0ms" }}><Eyebrow>Made for the site</Eyebrow></div>
                    <h2 data-reveal style={{ "--d": "120ms" }} className="mt-5 text-balance text-4xl font-black leading-[.98] tracking-[-.055em] text-[#102D1F] sm:text-5xl lg:text-6xl">
                        Material certainty from mill deck to jobsite.
                    </h2>
                    <span data-reveal style={{ "--d": "220ms" }} aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-[#F4B323]" />
                    <p data-reveal style={{ "--d": "320ms" }} className="mt-6 max-w-[56ch] text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        We bring professional hydraulic bandsaw milling directly to your land, sorting, trimming, and stickering every board for a smooth, waste-free build.
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[
                            { Icon: Ruler, title: "Exact dimensions", text: "Specified section sizes and consistent finish across the package." },
                            { Icon: RefreshCw, title: "Project-ready sorting", text: "Pieces stickered and stacked for air drying right where you build." },
                        ].map(({ Icon, title, text }) => (
                            <article
                                data-reveal
                                style={{ "--d": title === "Exact dimensions" ? "420ms" : "540ms" }}
                                key={title}
                                className="group relative overflow-hidden rounded-2xl border border-[#102D1F]/10 bg-[#F5F2EC] p-6 shadow-[0_1px_2px_rgba(16,45,31,0.06)] transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#F4B323]/70 hover:bg-white hover:shadow-[0_24px_40px_-28px_rgba(16,45,31,0.55)] focus-within:border-[#F4B323]/70 focus-within:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
                            >
                                <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F4B323]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#F4B323]/25 motion-reduce:transition-none" />
                                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#F4B323] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
                                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#F4B323] text-[#102D1F] ring-4 ring-[#F4B323]/20 transition-[background-color,color,transform,box-shadow] duration-300 group-hover:-rotate-3 group-hover:bg-[#102D1F] group-hover:text-[#F4B323] group-hover:ring-[#102D1F]/10 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="relative mt-5 text-lg font-bold tracking-[-0.01em] text-[#102D1F]">{title}</h3>
                                <p className="relative mt-2 text-sm leading-relaxed text-[#59665D] sm:text-base">{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="mt-10 space-y-8 border-t border-[#102D1F]/15 pt-8 sm:mt-12 sm:space-y-10 sm:pt-10">
                        {millingStories.map((story, index) => (
                            <article key={story.title} data-reveal style={{ "--d": `${index * 120}ms` }} className="max-w-[62ch] border-b border-[#102D1F]/10 pb-7 last:border-b-0 last:pb-0 sm:pb-9">
                                <h3 className="text-xl font-extrabold leading-snug tracking-[-.025em] text-[#102D1F] sm:text-2xl">{story.title}</h3>
                                <p className="mt-3 text-base leading-[1.75] text-[#4C5B51] sm:text-lg">{story.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

           <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0E2D1E,#0A2216)] py-16 text-white sm:py-24 lg:py-28">
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/40 to-transparent" />
                <span aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#F4B323]/10 blur-3xl" />
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-[#19452F]/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
                        <div>
                            <Eyebrow light>Choose your cuts</Eyebrow>
                            <h2 className="mt-5 max-w-[18ch] text-balance text-4xl font-black leading-[.98] tracking-[-.055em] text-white sm:text-5xl lg:text-6xl">
                                Built around your structural and visual brief.
                            </h2>
                            <span aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-[#F4B323]" />
                        </div>
                        <p className="max-w-xl text-pretty text-lg leading-[1.7] text-[#B7CDBF] sm:text-xl lg:justify-self-end">
                            Bring us your logs, species preferences, target thickness, and finish requirements. We will assemble a cut schedule that meets the moment.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
                        {cutOptions.map((option) => (
                            <article
                                key={option.number}
                                className="group relative overflow-hidden rounded-2xl bg-[#FBF9F5] p-6 text-[#102D1F] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_48px_-28px_rgba(0,0,0,0.7)] focus-within:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 lg:min-h-[250px]"
                            >
                                {/* Top accent bar (replaces border-t-4, which curved at the corners) */}
                                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-[#F4B323]" />
                                {/* Corner glow on hover */}
                                <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#F4B323]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#F4B323]/30 motion-reduce:transition-none" />
                                {/* Bottom bar draws in on hover */}
                                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#102D1F] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />

                                <p className="relative flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#9A6B00]">
                                    <span
                                        aria-hidden="true"
                                        className="h-2 w-2 shrink-0 rounded-full bg-[#F4B323] ring-4 ring-[#F4B323]/25 transition-[box-shadow] duration-300 group-hover:ring-[#F4B323]/45 motion-reduce:transition-none"
                                    />
                                    {option.number}
                                </p>
                                <h3 className="relative mt-6 text-balance text-2xl font-extrabold leading-tight tracking-[-.03em]">{option.title}</h3>
                                <p className="relative mt-3 text-pretty text-base leading-relaxed text-[#59665D]">{option.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="relative overflow-hidden bg-[#0E2D1E] py-16 text-white sm:py-24 lg:py-28">
                <span aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4B323]/10 blur-3xl" />
                <div className="relative mx-auto w-[min(100%-2.5rem,1600px)] sm:w-[min(100%-4rem,1600px)]">
                    <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
                        <div>
                            <Eyebrow light>Choose your cuts</Eyebrow>
                            <h2 className="mt-5 max-w-[18ch] text-balance text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">Built around your structural and visual brief.</h2>
                        </div>
                        <p className="max-w-2xl text-pretty text-lg leading-[1.7] text-[#B7CDBF] sm:text-xl lg:justify-self-end">
                            Bring us your logs, species preferences, target thickness, and finish requirements. We will assemble a cut schedule that meets the moment.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
                        {cutOptions.map((option) => (
                            <article key={option.number} className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F4B323] bg-[#FBF9F5] p-6 text-[#102D1F] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.6)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_48px_-28px_rgba(0,0,0,0.7)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 lg:min-h-[250px]">
                                <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#F4B323]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#F4B323]/25 motion-reduce:transition-none" />
                                <p className="relative flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#9A6B00]"><span className="h-2 w-2 rounded-full bg-[#F4B323]" aria-hidden="true" />{option.number}</p>
                                <h3 className="relative mt-6 text-2xl font-extrabold leading-tight tracking-[-.03em]">{option.title}</h3>
                                <p className="relative mt-3 text-base leading-relaxed text-[#59665D]">{option.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section> */}
            <section className="relative isolate mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16 lg:px-10 lg:py-32">
                <span aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#F4B323]/10 blur-3xl" />

                <div>
                    <div data-reveal style={{ "--d": "0ms" }}><Eyebrow>Where it works</Eyebrow></div>
                    <h2 data-reveal style={{ "--d": "120ms" }} className="mt-5 text-balance text-4xl font-black leading-[.98] tracking-[-.055em] text-[#102D1F] sm:text-5xl lg:text-6xl">
                        For structures that put the material on view.
                    </h2>
                    <span data-reveal style={{ "--d": "220ms" }} aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-[#F4B323]" />
                    <p data-reveal style={{ "--d": "320ms" }} className="mt-6 max-w-[60ch] text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        From heavy-timber post and beam frames to remote coastal cabins, milling on site gives architects and builders access to structural elements impossible to source from conventional supply yards. Deep Douglas fir ridge beams, broad cedar posts, and authentic dimensional timbers retain the natural density and straight grain cultivated across decades of West Coast growth.
                    </p>
                    <p data-reveal style={{ "--d": "440ms" }} className="mt-6 max-w-[60ch] rounded-r-2xl border-l-4 border-[#F4B323] bg-[#F5F2EC] py-4 pl-5 pr-5 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        For exterior pavilions, timber-framed entryways, and open-air gathering spaces, the saw cut preserves the tactile character and honest integrity of each log.
                    </p>
                    <p data-reveal style={{ "--d": "560ms" }} className="mt-6 max-w-[60ch] text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        Because the timber is milled where it was harvested, you can plan dimensions around the logs on hand, reduce unnecessary transport, and carry the character of your own land into the finished structure.
                    </p>
                </div>

                <div data-reveal="right" className={`${frame} group aspect-[1.35/1] min-h-[280px] lg:sticky lg:top-24 lg:min-h-[500px] lg:self-start`}>
                    <Image
                        src="/Images/DFSImg/img2.png"
                        alt="Heavy timber frame under construction at a forest-side worksite"
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#102D1F]/25 to-transparent" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
                </div>
            </section>
            {/* <section className="mx-auto grid w-[min(100%-2.5rem,1600px)] gap-10 py-16 sm:w-[min(100%-4rem,1600px)] sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16 lg:py-32">
                <div>
                    <Eyebrow>Where it works</Eyebrow>
                    <h2 className="mt-5 text-balance text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">For structures that put the material on view.</h2>
                    <p className="mt-6 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        From heavy-timber post and beam frames to remote coastal cabins, milling on site gives architects and builders access to structural elements impossible to source from conventional supply yards. Deep Douglas fir ridge beams, broad cedar posts, and authentic dimensional timbers retain the natural density and straight grain cultivated across decades of West Coast growth.
                    </p>
                    <p className="mt-5 border-l-4 border-[#F4B323] pl-5 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
                        For exterior pavilions, timber-framed entryways, and open-air gathering spaces, the saw cut preserves the tactile character and honest integrity of each log.
                    </p>
                </div>
                <div className={`${frame} aspect-[1.35/1] min-h-[280px] lg:min-h-[500px]`}>
                    <Image src="/Images/DFSImg/img2.png" alt="Heavy timber frame under construction at a forest-side worksite" fill sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#102D1F]/25 to-transparent" />
                </div>
            </section> */}
            <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0E2D1E,#143B28)] py-16 text-white sm:py-20 lg:py-24">
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B323]/40 to-transparent" />
                <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[#F4B323]/15 blur-3xl" />
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-[#19452F]/70 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-10">
                    <div>
                        <Eyebrow light>Ready when you are</Eyebrow>
                        <h2 className="mt-5 max-w-[24ch] text-balance text-3xl font-black leading-tight tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">
                            Send your log schedule to the sawyer.
                        </h2>
                        <span aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-[#F4B323]" />
                        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-[#B7CDBF] sm:text-lg">
                            Tell us the species, estimated log count, and site location. We will confirm setup requirements and provide an estimate.
                        </p>
                    </div>
                    <Link
                        href="/Contact"
                        className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F4B323] px-7 py-4 font-extrabold text-[#102D1F] shadow-[0_14px_28px_-14px_rgba(244,179,35,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFCB38] hover:shadow-[0_18px_32px_-14px_rgba(244,179,35,0.8)] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Talk to our mill team
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" aria-hidden="true" />
                    </Link>
                </div>
            </section>
            {/* <section className="relative isolate mx-auto mb-16 grid w-[min(100%-2.5rem,1600px)] gap-8 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0E2D1E,#143B28)] px-6 py-10 text-white shadow-[0_30px_60px_-36px_rgba(16,45,31,0.8)] sm:mb-24 sm:w-[min(100%-4rem,1600px)] sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
                <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[#F4B323]/15 blur-3xl" />
                <div>
                    <Eyebrow light>Ready when you are</Eyebrow>
                    <h2 className="mt-5 max-w-[24ch] text-balance text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl lg:text-5xl">Send your log schedule to the sawyer.</h2>
                    <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-[#B7CDBF] sm:text-lg">Tell us the species, estimated log count, and site location. We will confirm setup requirements and provide an estimate.</p>
                </div>
                <Link href="/Contact" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F4B323] px-7 py-4 font-extrabold text-[#102D1F] shadow-[0_14px_28px_-14px_rgba(244,179,35,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFCB38] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    Talk to our mill team
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" aria-hidden="true" />
                </Link>
            </section> */}
        </main>
    );
}

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight, Ruler, RefreshCw } from "lucide-react";

// const specs = [
//     { label: "Capacity", value: "Up to 36 in dia", detail: "Max log diameter for portable bandsaw setup" },
//     { label: "Span", value: "Up to 21 ft", detail: "Long lengths milled for clear span beams & rafters" },
//     { label: "Precision", value: "Ultra-thin 1.8mm", detail: "Thin-kerf bandsaw efficiency for maximum timber yield" },
// ];

// const cutOptions = [
//     { number: "01 / Species", title: "Douglas fir & Cedar", detail: "Strong, tight-grain native wood for exposed beams, posts, and exterior siding." },
//     { number: "02 / Profile", title: "Live edge or dimensional", detail: "Natural live-edge slabs, heavy posts, or full dimensional 2x framing lumber." },
//     { number: "03 / Preparation", title: "Cut to schedule & stickered", detail: "Pieces stickered and stacked for proper air circulation on site." },
// ];

// function Eyebrow({ children, light = false }) {
//     return (
//         <p className={`flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm ${light ? "text-[#F4B323]" : "text-[#102D1F]"}`}>
//             <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F4B323]" aria-hidden="true" />
//             {children}
//         </p>
//     );
// }

// export default function MobileMilling() {
//     return (
//         <main className="bg-[#FBF9F5] text-[#102D1F]">
//             <section className="mx-auto grid w-[min(100%-2.5rem,1600px)] gap-10 pb-16 pt-28 sm:w-[min(100%-4rem,1600px)] sm:pb-20 sm:pt-36 lg:min-h-[680px] lg:grid-cols-[1.18fr_.82fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-36">
//                 <div className="max-w-[900px]">
//                     <Eyebrow>On-site sawmilling, cut with purpose</Eyebrow>
//                     <h1 className="mt-6 text-balance text-[clamp(3rem,7vw,6.6rem)] font-black leading-[.93] tracking-[-.065em]">
//                         Mobile milling for the trees that fell.
//                     </h1>
//                     <p className="mt-8 max-w-[760px] text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:mt-10 sm:text-xl lg:text-2xl">
//                         Turn storm-felled, yard-cleared, and salvaged Vancouver Island timber into precision architectural lumber right on your property. Eliminating hauling overhead while keeping valuable material in use.
//                     </p>
//                     <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">
//                         <Link href="/Contact" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#102D1F] px-7 py-4 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#19452F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]">
//                             Request mobile milling <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
//                         </Link>
//                         <Link href="/FinishedLumber" className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#E6AE00] px-7 py-4 font-bold text-[#102D1F] transition hover:bg-[#FFF4CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]">
//                             Browse finished lumber
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="relative aspect-[1.22/1] min-h-[290px] overflow-hidden bg-[#E7E1D4] sm:min-h-[420px] lg:aspect-[.93/1] lg:min-h-[510px]">
//                     <Image src="/Images/BTImg/img2.png" alt="Woodworker shaping a timber beam in a workshop" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
//                 </div>
//             </section>

//             <section aria-label="Mobile sawmill capacity" className="bg-[#0E2D1E] text-[#F4B323]">
//                 <div className="mx-auto grid w-[min(100%-2.5rem,1600px)] divide-y divide-[#F4B323]/20 py-7 sm:w-[min(100%-4rem,1600px)] sm:py-9 md:grid-cols-3 md:divide-x md:divide-y-0">
//                     {specs.map((spec) => (
//                         <div key={spec.label} className="py-5 first:pt-0 last:pb-0 md:px-8 md:py-1 md:first:pl-0 md:first:pt-1 md:last:pb-1">
//                             <Eyebrow light>{spec.label}</Eyebrow>
//                             <p className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">{spec.value}</p>
//                             <p className="mt-2 text-sm leading-relaxed text-[#B7CDBF] sm:text-base">{spec.detail}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section className="mx-auto grid w-[min(100%-2.5rem,1600px)] gap-10 py-16 sm:w-[min(100%-4rem,1600px)] sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32">
//                 <div className="relative order-2 aspect-[1.2/1] min-h-[280px] overflow-hidden bg-[#E7E1D4] lg:order-1 lg:min-h-[500px]">
//                     <Image src="/Images/BTImg/IMG1.png" alt="Freshly milled timber stacked at a forest-side lumber yard" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
//                 </div>
//                 <div className="order-1 lg:order-2">
//                     <Eyebrow>Made for the site</Eyebrow>
//                     <h2 className="mt-5 text-balance text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">Material certainty from mill deck to jobsite.</h2>
//                     <p className="mt-6 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
//                         We bring professional hydraulic bandsaw milling directly to your land, sorting, trimming, and stickering every board for a smooth, waste-free build.
//                     </p>
//                     <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                         <article className="border border-[#E5DDCE] bg-[#F5F2EC] p-6 sm:p-7">
//                             <span className="grid h-12 w-12 place-items-center rounded-full bg-[#F4B323] text-[#102D1F]"><Ruler className="h-5 w-5" aria-hidden="true" /></span>
//                             <h3 className="mt-5 text-lg font-bold">Exact dimensions</h3>
//                             <p className="mt-2 text-sm leading-relaxed text-[#59665D] sm:text-base">Specified section sizes and consistent finish across the package.</p>
//                         </article>
//                         <article className="border border-[#E5DDCE] bg-[#F5F2EC] p-6 sm:p-7">
//                             <span className="grid h-12 w-12 place-items-center rounded-full bg-[#F4B323] text-[#102D1F]"><RefreshCw className="h-5 w-5" aria-hidden="true" /></span>
//                             <h3 className="mt-5 text-lg font-bold">Project-ready sorting</h3>
//                             <p className="mt-2 text-sm leading-relaxed text-[#59665D] sm:text-base">Pieces stickered and stacked for air drying right where you build.</p>
//                         </article>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-[#0E2D1E] py-16 text-white sm:py-24 lg:py-28">
//                 <div className="mx-auto w-[min(100%-2.5rem,1600px)] sm:w-[min(100%-4rem,1600px)]">
//                     <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
//                         <div>
//                             <Eyebrow light>Choose your cuts</Eyebrow>
//                             <h2 className="mt-5 max-w-[18ch] text-balance text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">Built around your structural and visual brief.</h2>
//                         </div>
//                         <p className="max-w-2xl text-pretty text-lg leading-[1.7] text-[#B7CDBF] sm:text-xl lg:justify-self-end">
//                             Bring us your logs, species preferences, target thickness, and finish requirements. We will assemble a cut schedule that meets the moment.
//                         </p>
//                     </div>
//                     <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
//                         {cutOptions.map((option) => (
//                             <article key={option.number} className="border-t-4 border-[#F4B323] bg-[#FBF9F5] p-6 text-[#102D1F] sm:p-8 lg:min-h-[250px]">
//                                 <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#B17D00]"><span className="h-2 w-2 rounded-full bg-[#F4B323]" aria-hidden="true" />{option.number}</p>
//                                 <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-.03em]">{option.title}</h3>
//                                 <p className="mt-3 text-base leading-relaxed text-[#59665D]">{option.detail}</p>
//                             </article>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section className="mx-auto grid w-[min(100%-2.5rem,1600px)] gap-10 py-16 sm:w-[min(100%-4rem,1600px)] sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16 lg:py-32">
//                 <div>
//                     <Eyebrow>Where it works</Eyebrow>
//                     <h2 className="mt-5 text-balance text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">For structures that put the material on view.</h2>
//                     <p className="mt-6 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
//                         From heavy-timber post and beam frames to remote coastal cabins, milling on site gives architects and builders access to structural elements impossible to source from conventional supply yards. Deep Douglas fir ridge beams, broad cedar posts, and authentic dimensional timbers retain the natural density and straight grain cultivated across decades of West Coast growth.
//                     </p>
//                     <p className="mt-5 text-pretty text-lg leading-[1.7] text-[#4C5B51] sm:text-xl">
//                         For exterior pavilions, timber-framed entryways, and open-air gathering spaces, the saw cut preserves the tactile character and honest integrity of each log.
//                     </p>
//                 </div>
//                 <div className="relative aspect-[1.35/1] min-h-[280px] overflow-hidden bg-[#E7E1D4] lg:min-h-[500px]">
//                     <Image src="/Images/DFSImg/img2.png" alt="Heavy timber frame under construction at a forest-side worksite" fill sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
//                 </div>
//             </section>

//             <section className="mx-auto mb-16 grid w-[min(100%-2.5rem,1600px)] gap-8 bg-[#0E2D1E] px-6 py-10 text-white sm:mb-24 sm:w-[min(100%-4rem,1600px)] sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
//                 <div>
//                     <Eyebrow light>Ready when you are</Eyebrow>
//                     <h2 className="mt-5 max-w-[24ch] text-balance text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl lg:text-5xl">Send your log schedule to the sawyer.</h2>
//                     <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-[#B7CDBF] sm:text-lg">Tell us the species, estimated log count, and site location. We will confirm setup requirements and provide an estimate.</p>
//                 </div>
//                 <Link href="/Contact" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F4B323] px-7 py-4 font-extrabold text-[#102D1F] transition hover:-translate-y-0.5 hover:bg-[#FFCB38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
//                     Talk to our mill team <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
//                 </Link>
//             </section>
//         </main>
//     );
// }
