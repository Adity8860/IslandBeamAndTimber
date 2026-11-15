

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Flame } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx"
import { FirewoodData, FirewoodBodyData } from "@/lib/FirewoodConst.js"
import ServiceBody from "@/Components/Ui/ServiceaBody.jsx"


const deliverySteps = [
    {
        number: "01",
        title: "Naturally seasoned",
        description: "Time and airflow bring each split to a cleaner, more reliable burn.",
    },
    {
        number: "02",
        title: "Sorted with care",
        description: "Consistent sizes make stacking simple and lighting your fire effortless.",
    },
    {
        number: "03",
        title: "Delivered locally",
        description: "Schedule the load you need, from a few bundles to a full winter reserve.",
    },
];

//  const shell = "mx-auto w-[min(100%-2.5rem,1280px)] sm:w-[min(100%-4rem,1280px)] lg:w-[min(100%-6rem,1280px)]";
const shell = ''
const focusRing = "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#F4B323]";

function Eyebrow({ children, light = false, className = "" }) {
    return (
        <p className={`flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.14em] ${light ? "text-[#F4B323]" : "text-[#09271B]"} ${className}`}>
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#F4B323]" aria-hidden="true" />
            {children}
        </p>
    );
}

function ActionLink({ href, children, secondary = false }) {
    return (
        <Link
            href={href}
            className={`${focusRing} group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-bold transition-[background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${secondary ? "border border-white/25 bg-white/5 text-white hover:border-[#F4B323] hover:bg-white/10" : "bg-[#F4B323] text-[#09271B] shadow-[0_14px_28px_-16px_rgba(244,179,35,0.9)] hover:bg-[#FFC53D]"}`}
        >
            {children}
            {secondary && <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />}
        </Link>
    );
}

export default function Firewood() {
    return (
        <main className="overflow-x-clip bg-[#F7F3EB] text-[#09271B]">

            <CustomLumberHero
                data={FirewoodData}
                padX="px-5 md:px-10 lg:px-16  mt-16"
            />
            <ServiceBody data={FirewoodBodyData} />

            {/* <section className={`${shell} my-12 grid gap-10 rounded-2xl bg-[#EFEBDF] px-7 py-12 sm:my-16 sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20`}>
                <div className="relative hidden min-h-[320px] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F7F3EB,#E4DFD2)] ring-1 ring-[#09271B]/10 lg:block">
                    <Image
                        src="/Images/FirewoodImg/img4.png"
                        alt="Seasoned firewood ready for delivery"
                        fill
                        sizes="(min-width: 1024px) 40vw, 0px"
                        className="object-cover"
                    />
                </div>
                <div>
                    <Eyebrow>Made for good burns</Eyebrow>
                    <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">From our timber yard to your woodpile.</h2>
                    <ol className="mt-8 grid gap-6">
                        {deliverySteps.map((step) => (
                            <li key={step.number} className="cards-in relative grid grid-cols-[3.25rem_1fr] gap-4 before:absolute before:bottom-[-1.5rem] before:left-6 before:top-12 before:w-px before:bg-[#09271B]/20 before:content-[''] last:before:hidden">
                                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-[#09271B] text-base font-extrabold tabular-nums text-[#F4B323] ring-4 ring-[#EFEBDF]">{step.number}</span>
                                <div className="pt-1.5">
                                    <h3 className="text-lg font-bold">{step.title}</h3>
                                    <p className="mt-1 text-pretty text-base leading-relaxed text-[#45564B]">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section> */}
            <section
                aria-labelledby="delivery-heading"
                className={`${shell} my-12 grid items-center gap-10 rounded-2xl bg-[#EFEBDF] px-6 py-10 sm:my-16 sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20`}
            >
                {/* Image: now visible on mobile too, sticky on desktop */}
                <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,#F7F3EB,#E4DFD2)] ring-1 ring-[#09271B]/10 sm:aspect-[16/10] lg:sticky lg:top-24  lg:self-start">
                    <Image
                        src="/Images/FirewoodImg/img4.png"
                        alt="Stacked seasoned firewood ready for delivery"
                        fill
                        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 90vw, 100vw"
                        className="object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#09271B]/25 to-transparent"
                    />
                </div>

                <div>
                    <Eyebrow>Made for good burns</Eyebrow>
                    <h2
                        id="delivery-heading"
                        className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[#09271B] sm:text-4xl lg:text-5xl"
                    >
                        From our timber yard to your woodpile.
                    </h2>

                    <ol role="list" className="mt-8 grid list-none gap-7 p-0 sm:mt-10">
                        {deliverySteps.map((step, i) => (
                            <li
                                key={step.number}
                                style={{ animationDelay: `${i * 90}ms` }}
                                className="cards-in relative grid grid-cols-[3rem_1fr] gap-4 before:absolute before:left-6 before:top-12 before:-bottom-7 before:w-px before:-translate-x-1/2 before:bg-[#09271B]/20 before:content-[''] last:before:hidden sm:grid-cols-[3.25rem_1fr] sm:gap-5 sm:before:left-[1.625rem]"
                            >
                                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-[#09271B] text-base font-extrabold tabular-nums text-[#F4B323] ring-4 ring-[#EFEBDF] sm:h-[3.25rem] sm:w-[3.25rem]">
                                    {step.number}
                                </span>
                                <div className="pt-1.5">
                                    <h3 className="text-lg font-bold leading-snug text-[#09271B]">{step.title}</h3>
                                    <p className="mt-1 text-pretty text-base leading-relaxed text-[#45564B]">
                                        {step.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="bg-[#09271B] bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(244,179,35,0.14),transparent_70%)] px-5 py-20 text-center text-white sm:px-8 sm:py-28">
                <div className="mx-auto max-w-4xl">
                    <Eyebrow light className="justify-center">Keep the warmth coming</Eyebrow>
                    <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Tell us how you burn, and we’ll build the right firewood order.</h2>
                    <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-[#B7CDBF] sm:text-xl">Home delivery, hospitality supply, and special-event bundles—prepared around your season.</p>
                    <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
                        <ActionLink href="/Contact">Request firewood</ActionLink>
                        <ActionLink href={siteConfig.phoneLink} secondary><Flame className="h-4 w-4" aria-hidden="true" /> Call the yard</ActionLink>
                    </div>
                </div>
            </section>
        </main>
    );
}// import Link from "next/link";
// import { ArrowUpRight, Flame } from "lucide-react";
// import { siteConfig } from "@/lib/siteConfig";
// import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx"
// import { FirewoodData, FirewoodBodyData } from "@/lib/FirewoodConst.js"
// import ServiceBody from "@/Components/Ui/ServiceaBody.jsx";

// const deliverySteps = [
//     {
//         number: "01",
//         title: "Naturally seasoned",
//         description: "Time and airflow bring each split to a cleaner, more reliable burn.",
//     },
//     {
//         number: "02",
//         title: "Sorted with care",
//         description: "Consistent sizes make stacking simple and lighting your fire effortless.",
//     },
//     {
//         number: "03",
//         title: "Delivered locally",
//         description: "Schedule the load you need, from a few bundles to a full winter reserve.",
//     },
// ];

// // One shared page width: hero, article and bands all align to the same 1280px column with matching side gutters
// const shell = "mx-auto w-[min(100%-2.5rem,1280px)] sm:w-[min(100%-4rem,1280px)] lg:w-[min(100%-6rem,1280px)]";
// const focusRing = "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#f5b900]";

// function Eyebrow({ children, light = false, className = "" }) {
//     return (
//         <p className={`flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.14em] ${light ? "text-[#f5b900]" : "text-[#09271B]"} ${className}`}>
//             <span className="h-2 w-2 shrink-0 rounded-full bg-[#f5b900]" aria-hidden="true" />
//             {children}
//         </p>
//     );
// }

// function ActionLink({ href, children, secondary = false }) {
//     return (
//         <Link
//             href={href}
//             className={`${focusRing} inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-bold transition-[background-color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${secondary ? "border border-[#31533d] bg-[#183627] text-white hover:bg-[#20432f]" : "bg-[#f5b900] text-[#09271B] hover:bg-[#ffca19]"}`}
//         >
//             {children}
//             {secondary && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
//         </Link>
//     );
// }

// export default function Firewood() {
//     return (
//         <main className="overflow-x-clip bg-[#F7F3EB] text-[#09271B]">
//             {/* <section className="pb-12 pt-8 sm:pb-16 sm:pt-10">
//                 <div className={`${shell} flex min-h-[600px] flex-col items-start rounded-2xl bg-[#09271B] px-7 py-12 text-white sm:min-h-[660px] sm:px-12 sm:py-16 lg:min-h-[720px] lg:px-16 lg:py-20`}>
//                     <div className="inline-flex items-center gap-3 rounded-full border border-[#f5b900]/50 bg-[#061A11] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white sm:text-sm">
//                         <span className="h-2.5 w-2.5 rounded-full bg-[#f5b900]" />
//                         Seasoned &amp; ready to burn
//                     </div>
//                     <div className="mt-14 max-w-[760px] sm:mt-16 lg:mt-20">
//                         <h1 className="max-w-[740px] text-balance text-[clamp(2.5rem,5.6vw,5rem)] font-extrabold leading-[1] tracking-[-0.04em]">
//                             Firewood that makes every gathering feel grounded.
//                         </h1>
//                         <p className="mt-7 max-w-[640px] text-pretty text-lg leading-[1.65] text-[#B7CDBF] sm:text-xl">
//                             Clean-burning hardwood, thoughtfully split and naturally seasoned for fireplaces, wood stoves, pizza ovens, and long nights outside.
//                         </p>
//                     </div>
//                     <div className="mt-auto flex flex-wrap gap-3 pt-14 sm:gap-4">
//                         <ActionLink href="/Contact">Build your delivery</ActionLink>
//                         <ActionLink href={siteConfig.phoneLink} secondary>Talk to our wood team</ActionLink>
//                     </div>
//                 </div>
//             </section> */}
//             <CustomLumberHero
//                 data={FirewoodData}
//                 padX="px-5 md:px-10 lg:px-16  mt-16"
//             />

//             <ServiceBody data={FirewoodBodyData} />

//             <section className={`${shell} my-12 grid gap-10 rounded-2xl bg-[#EFEBDF] px-7 py-12 sm:my-16 sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20`}>
//                 <div className="hidden min-h-[320px] rounded-xl bg-[linear-gradient(135deg,#F7F3EB,#E4DFD2)] ring-1 ring-[#09271B]/10 lg:block" aria-hidden="true" />
//                 <div>
//                     <Eyebrow>Made for good burns</Eyebrow>
//                     <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">From our timber yard to your woodpile.</h2>
//                     <ol className="mt-8 grid gap-6">
//                         {deliverySteps.map((step) => (
//                             <li key={step.number} className="grid grid-cols-[3.25rem_1fr] gap-4">
//                                 <span className="grid h-12 w-12 place-items-center rounded-full bg-[#09271B] text-base font-extrabold tabular-nums text-[#f5b900]">{step.number}</span>
//                                 <div>
//                                     <h3 className="text-lg font-bold">{step.title}</h3>
//                                     <p className="mt-1 text-pretty text-base leading-relaxed text-[#45564B]">{step.description}</p>
//                                 </div>
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//             </section>

//             <section className="bg-[#09271B] px-5 py-20 text-center text-white sm:px-8 sm:py-28">
//                 <div className="mx-auto max-w-4xl">
//                     <Eyebrow light className="justify-center">Keep the warmth coming</Eyebrow>
//                     <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Tell us how you burn, and we’ll build the right firewood order.</h2>
//                     <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-[#B7CDBF] sm:text-xl">Home delivery, hospitality supply, and special-event bundles—prepared around your season.</p>
//                     <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
//                         <ActionLink href="/Contact">Request firewood</ActionLink>
//                         <ActionLink href={siteConfig.phoneLink} secondary><Flame className="h-4 w-4" aria-hidden="true" /> Call the yard</ActionLink>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }
