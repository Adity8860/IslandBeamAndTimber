
import Servicesection from "../../../Components/Ui/Servicesection";
import Cards from "@/Components/Ui/Cards";
import { finishedLumberSections } from "@/lib/FinshedLumber";
import Image from "next/image";
import { Ruler, ShieldCheck, TreePine } from "lucide-react";

const processCards = [
    {
        title: "Selected stock",
        description:
            "Douglas fir, western hemlock, cedar, and other regional species selected for strength and character.",
        icon: <TreePine size={27} strokeWidth={2.2} />,
    },
    {
        title: "True dimensions",
        description:
            "Order surfaced, eased-edge, or rough-sawn lumber in the dimensions that fit your drawings.",
        icon: <Ruler size={27} strokeWidth={2.2} />,
    },
    {
        title: "Reliable grading",
        description:
            "Clear, select structural, and appearance grades sorted to the needs of your build.",
        icon: <ShieldCheck size={27} strokeWidth={2.2} />,
    },
];

const lumberOptions = [
    { label: "Common dimensions", value: "1×, 2×, 4×, 6×, 8×" },
    { label: "Available lengths", value: "6′–20′, random or specified" },
    { label: "Milling options", value: "Rough, S2S, S4S, eased edge" },
    { label: "Grades", value: "Clear, appearance, structural" },
];

const pad = "px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28";
const eyebrow =
    "mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#A86F1C] after:h-px after:w-12 after:bg-[#F4B323] after:content-['']";
const h2 =
    "text-balance text-4xl font-bold leading-none tracking-[-0.04em] sm:text-5xl lg:text-[52px]";
const btn =
    "inline-flex items-center justify-center rounded-md px-6 py-4 text-[0.95rem] font-bold tracking-wide transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]";

export default function FinishedLum() {
    return (
        <>
            <Servicesection sections={finishedLumberSections} />
            <section className={`${pad} bg-[#F7F3EB] text-[#09271B]`} aria-labelledby="finished-lumber-process-title">
                <div className="mx-auto max-w-[1420px]">
                    <p className={eyebrow}>From mill to site</p>
                    <h2 id="finished-lumber-process-title" className={`${h2} mb-6 max-w-[16ch]`}>Lumber with a longer story.</h2>
                    <p className="mb-10 max-w-[62ch] text-pretty text-base leading-[1.65] text-[#45564B] sm:text-lg md:mb-14">
                        We begin with responsibly sourced logs and carry every board through drying,
                        surfacing, grading, and careful bundling—so your material arrives consistent,
                        stable, and ready to specify.
                    </p>
                    <Cards
                        type="services"
                        items={processCards}
                        className="!px-0 !py-0"
                        gridClassName="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6"
                        itemClassName="!min-h-[320px] !rounded-xl !border-t-[3px] !border-t-[#F4B323] !bg-white !p-8 md:!p-10"
                    />
                </div>
            </section>
            <section className={`${pad} overflow-x-clip bg-[#09271B] text-[#EEF0E8]`} aria-labelledby="finished-lumber-options-title">
                <div className="mx-auto grid max-w-[1420px] items-center gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="story-from-left cl-zoom relative aspect-[4/3] overflow-hidden rounded-md bg-white/10 ring-1 ring-white/10 lg:aspect-[5/6]">
                        <Image
                            className="object-cover object-center"
                            src="/Images/pageImg/img3.png"
                            alt="Freshly milled dimensional lumber stacked at the mill"
                            fill
                            sizes="(max-width: 800px) 100vw, 50vw"
                        />
                    </div>
                    <div className="story-from-right">
                        <p className={`${eyebrow} !text-[#F4B323]`}>Specify with confidence</p>
                        <h2 id="finished-lumber-options-title" className={`${h2} mb-6 text-white`}>Clear grades. Practical options. No guesswork.</h2>
                        <p className="max-w-[56ch] text-pretty text-base leading-[1.65] text-[#B7CDBF] sm:text-lg">
                            Tell us how the lumber will be used and we’ll help you choose a grade,
                            moisture target, finish, and bundle configuration that makes sense for the job.
                        </p>
                        <dl className="mt-8 border-t border-white/15">
                            {lumberOptions.map(({ label, value }) => (
                                <div className="grid gap-1 border-b border-white/15 py-4 sm:grid-cols-[2fr_3fr] sm:gap-6" key={label}>
                                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F4B323]">{label}</dt>
                                    <dd className="text-base tabular-nums text-white sm:text-lg">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
            <section className={`${pad} mx-auto grid max-w-none items-center gap-10 overflow-x-clip bg-[#F7F3EB] text-[#09271B] lg:grid-cols-2 lg:gap-20`} aria-labelledby="finished-lumber-cta-title">
                <div className="story-from-left lg:ml-auto lg:max-w-[640px]">
                    <p className={eyebrow}>Plan your order</p>
                    <h2 id="finished-lumber-cta-title" className={`${h2} mb-6`}>Let&apos;s make the right lumber for your next build.</h2>
                    <p className="max-w-[56ch] text-pretty text-base leading-[1.65] text-[#45564B] sm:text-lg">
                        Send over your takeoff, sizes, species preferences, and deadline. Our mill team
                        will return a clear recommendation and quote.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a className={`${btn} bg-[#F4B323] text-[#09271B] hover:bg-[#E8A516]`} href="/Contact">
                            Start a project
                        </a>
                        <a className={`${btn} border-2 border-[#09271B] text-[#09271B] hover:bg-[#09271B] hover:text-[#F7F3EB]`} href="/Contact">
                            Request a lumber quote
                        </a>
                    </div>
                </div>
                <div className="story-from-right cl-zoom relative aspect-[4/3] overflow-hidden rounded-md bg-[#09271B]/10 shadow-[0_28px_48px_-28px_rgba(9,39,27,0.5)] ring-1 ring-[#09271B]/10 lg:aspect-[5/4] lg:max-w-[640px]">
                    <Image
                        className="object-cover object-center"
                        src="/Images/pageImg/img7.png"
                        alt="Lumber being processed at the mill"
                        fill
                        sizes="(max-width: 800px) 100vw, 50vw"
                    />
                </div>
            </section>
        </>
    );
}


// import Servicesection from "../../Components/Ui/Servicesection";
// import Cards from "@/Components/Ui/Cards";
// import { finishedLumberSections } from "@/lib/FinshedLumber";
// import Image from "next/image";
// import { Ruler, ShieldCheck, TreePine } from "lucide-react";

// const processCards = [
//     {
//         title: "Selected stock",
//         description:
//             "Douglas fir, western hemlock, cedar, and other regional species selected for strength and character.",
//         icon: <TreePine size={27} strokeWidth={2.2} />,
//     },
//     {
//         title: "True dimensions",
//         description:
//             "Order surfaced, eased-edge, or rough-sawn lumber in the dimensions that fit your drawings.",
//         icon: <Ruler size={27} strokeWidth={2.2} />,
//     },
//     {
//         title: "Reliable grading",
//         description:
//             "Clear, select structural, and appearance grades sorted to the needs of your build.",
//         icon: <ShieldCheck size={27} strokeWidth={2.2} />,
//     },
// ];

// const lumberOptions = [
//     { label: "Common dimensions", value: "1×, 2×, 4×, 6×, 8×" },
//     { label: "Available lengths", value: "6′–20′, random or specified" },
//     { label: "Milling options", value: "Rough, S2S, S4S, eased edge" },
//     { label: "Grades", value: "Clear, appearance, structural" },
// ];

// export default function FinishedLum() {
//     return (
//         <>
//             <Servicesection sections={finishedLumberSections} />
//             <section className="finished-lumber-process" aria-labelledby="finished-lumber-process-title">
//                 <div className="finished-lumber-process__inner">
//                     <p className="finished-lumber-process__eyebrow">From mill to site</p>
//                     <h2 id="finished-lumber-process-title">Lumber with a longer story.</h2>
//                     <p className="finished-lumber-process__intro">
//                         We begin with responsibly sourced logs and carry every board through drying,
//                         surfacing, grading, and careful bundling—so your material arrives consistent,
//                         stable, and ready to specify.
//                     </p>
//                     <Cards
//                         type="services"
//                         items={processCards}
//                         className="!px-0 !py-0"
//                         gridClassName="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6"
//                         itemClassName="!min-h-[320px] !rounded-2xl !border-t-2 !border-t-[#ffb719] !bg-white !p-8 md:!p-10"
//                     />
//                 </div>
//             </section>
//             <section className="finished-lumber-options" aria-labelledby="finished-lumber-options-title">
//                 <div className="finished-lumber-options__inner">
//                     <div className="finished-lumber-options__image">
//                         <Image
//                             src="/Images/pageImg/img3.png"
//                             alt="Freshly milled dimensional lumber stacked at the mill"
//                             fill
//                             sizes="(max-width: 800px) 100vw, 50vw"
//                         />
//                     </div>
//                     <div className="finished-lumber-options__content">
//                         <p className="finished-lumber-options__eyebrow">Specify with confidence</p>
//                         <h2 id="finished-lumber-options-title">Clear grades. Practical options. No guesswork.</h2>
//                         <p className="finished-lumber-options__description">
//                             Tell us how the lumber will be used and we’ll help you choose a grade,
//                             moisture target, finish, and bundle configuration that makes sense for the job.
//                         </p>
//                         <dl className="finished-lumber-options__list">
//                             {lumberOptions.map(({ label, value }) => (
//                                 <div className="finished-lumber-options__row" key={label}>
//                                     <dt>{label}</dt>
//                                     <dd>{value}</dd>
//                                 </div>
//                             ))}
//                         </dl>
//                     </div>
//                 </div>
//             </section>
//             <section className="finished-lumber-cta" aria-labelledby="finished-lumber-cta-title">
//                 <div className="finished-lumber-cta__copy">
//                     <p className="finished-lumber-cta__eyebrow">Plan your order</p>
//                     <h2 id="finished-lumber-cta-title">Let&apos;s make the right lumber for your next build.</h2>
//                     <p className="finished-lumber-cta__description">
//                         Send over your takeoff, sizes, species preferences, and deadline. Our mill team
//                         will return a clear recommendation and quote.
//                     </p>
//                     <div className="finished-lumber-cta__actions">
//                         <a className="finished-lumber-cta__button finished-lumber-cta__button--primary" href="/Contact">
//                             Start a project
//                         </a>
//                         <a className="finished-lumber-cta__button finished-lumber-cta__button--secondary" href="/Contact">
//                             Request a lumber quote
//                         </a>
//                     </div>
//                 </div>
//                 <div className="finished-lumber-cta__image">
//                     <Image
//                         src="/Images/pageImg/img7.png"
//                         alt="Lumber being processed at the mill"
//                         fill
//                         sizes="(max-width: 800px) 100vw, 50vw"
//                     />
//                 </div>
//             </section>
//         </>
//     );
// }
