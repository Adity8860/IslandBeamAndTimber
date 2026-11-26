import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EnquiryForm from "@/Components/layout/Form.jsx";
import FAQSection from "@/Components/Ui/FAQ.jsx";
import ScrollReveal from "@/Components/Ui/ScrollReveal.jsx";
import { siteConfig } from "@/lib/siteConfig.js";
import CustomLumberHero from "@/Components/Ui/ServiceHro";
import Cards from "@/Components/Ui/Cards.jsx";
import { GoldenshedEnquiry, GoldenshedFaqs, shedCards, gardenShedData } from "@/lib/DouglasFirShedConst";
import { Card } from "@/Components/Ui/Cards";

// const shedCards = [
//     {
//         number: "01",
//         label: "Gable roof",
//         title: "Classic garden style.",
//         description: "A familiar roofline and natural wood character. Ask about available sizes or a custom version for your property.",
//         image: "/Images/DFSImg/img2.png",
//         alt: "Douglas fir timber frame built at the mill",
//         action: "Enquire about this style",
//     },
//     {
//         number: "02",
//         label: "Single-slope roof",
//         title: "Simple. Solid. Useful.",
//         description: "A clean profile for practical backyard storage. Tell us the space you have and the size you’re looking for.",
//         image: "/Images/pageImg/IMG_4841.JPEG",
//         alt: "Timber and sawmill equipment at the yard",
//         action: "Enquire about this style",
//     },
//     {
//         number: "03",
//         label: "Custom builds",
//         title: "Make it your own.",
//         description: "Have a different look in mind? Discuss your preferred footprint, roof style, door layout and finishing details with us.",
//         image: "/Images/pageImg/IMG_0280.JPEG",
//         alt: "Douglas fir lumber prepared at the mill",
//         action: "Discuss a custom shed",
//     },
// ];

const shedFaqs = [
    { id: "ready", question: "Do you have sheds ready to go?", answer: "Availability changes. Get in touch for current sizes, features and pricing on ready-to-go sheds." },
    { id: "custom", question: "Can I order a custom size or style?", answer: "Yes. Share your preferred dimensions, roof style, door layout and intended use, and we’ll discuss what can be built." },
    { id: "wood", question: "What wood do you use?", answer: "Our sheds are made with Douglas fir lumber from our mill." },
    { id: "delivery", question: "Can you deliver to my property?", answer: "Delivery services are available. Tell us the destination and share access details so we can confirm transport arrangements and charges." },
];

const eyebrow = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]";
const rule = "border-[#073d28]/15";




export default function Goldenshed() {
    return (
        <div className="font-sans leading-relaxed text-[#073d28]">
            <ScrollReveal />
            <CustomLumberHero data={gardenShedData} />
            {/* <section className="grid min-h-[720px] bg-[#002b18] text-[#f6f3e9] lg:min-h-[calc(100svh-80px)] lg:grid-cols-2" aria-labelledby="shed-hero-title">
                <div className="flex flex-col justify-between px-6 py-14 sm:px-10 lg:px-[clamp(3rem,7vw,8rem)] lg:py-16">
                    <div>
                        <p className="mb-10 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
                            <span className="h-[2px] w-8 bg-[#eabf20]" /> Island Beam &amp; Timber / Garden sheds
                        </p>
                        <h1 id="shed-hero-title" className="max-w-[10ch] text-[clamp(3.8rem,7vw,7rem)] font-normal leading-[0.94] tracking-[-0.075em]">
                            Built solid.<br />Made for you.<br /><span className="text-[#f2c31b]">Delivered.</span>
                        </h1>
                        <p className="mt-8 max-w-[34rem] text-base leading-[1.8] text-white/80 sm:text-lg">
                            Premium Douglas fir sheds, built with lumber from our mill. Choose a ready-to-go option or talk to us about a custom size and style for your backyard.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                            <Link href="#styles" className="group inline-flex min-h-[62px] items-center gap-6 rounded-full bg-[#f2c31b] px-7 text-sm font-bold text-[#073d28] transition-colors hover:bg-[#f7d246]">
                                Explore our sheds <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <Link href="#enquiry" className="inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm text-white/85 transition-colors hover:border-[#f2c31b] hover:text-[#f2c31b]">
                                Plan a custom shed <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 flex justify-between gap-5 border-t border-white/15 pt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55">
                        <span>Comox Valley, BC</span><span className="text-right">Premium Douglas fir · Built on skids</span>
                    </div>
                </div>
                <figure className="relative min-h-[420px] overflow-hidden bg-[#26372b] lg:min-h-full">
                    <Image src="/Images/DFSImg/img2.png" alt="Douglas fir timber frame built at our mill" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001d12]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-8 left-7 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:left-10">Built from our lumber. Ready for your plans.</figcaption>
                    <span className="absolute bottom-7 right-7 rounded-full border border-white/40 px-4 py-2 text-xs text-white sm:right-10">01 / 01</span>
                </figure>
            </section> */}

            {/* <section className="bg-[#f2c31b] px-6 py-6 sm:px-8 lg:px-10" aria-label="Shed features">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 md:divide-x md:divide-[#073d28]/15">
                    {[["Douglas fir", "Premium lumber from our mill"], ["Your style", "Ready-to-go & custom options"], ["We deliver", "Delivery services available"]].map(([title, copy]) => (
                        <div key={title} className="flex items-baseline gap-4 md:px-8 first:md:pl-0 last:md:pr-0">
                            <h2 className="text-2xl tracking-[-0.06em] sm:text-3xl">{title}</h2><p className="text-xs font-semibold text-[#073d28]/75">{copy}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                        <div data-reveal >
                            <p className={eyebrow}><span className="h-[2px] w-8 bg-[#eabf20]" />More room for everyday life</p>
                            <h2 className="mt-8 max-w-[15ch] text-[clamp(2.7rem,5vw,5rem)] font-normal leading-[1.02] tracking-[-0.07em]">A proper shed.<br />Built from the wood up.</h2>
                        </div>
                        <p data-reveal className="max-w-[48ch] pb-2 text-base leading-[1.75] text-[#657369] lg:justify-self-end">
                            Give your tools, garden equipment and outdoor gear a place of their own. Our solid wood sheds combine the character of premium Douglas fir with practical storage, built on skids and ready for life in your backyard.
                        </p>
                    </div>
                    <div data-reveal className={`mt-12 grid gap-5 border-y py-5 text-sm sm:grid-cols-2 lg:grid-cols-4 ${rule}`}>
                        {["Premium Douglas fir", "Solid wood construction", "Built on skids", "Delivery available"].map((item, index) => <p key={item} className="flex items-center gap-4"><span className="text-[10px] text-[#728076]">0{index + 1}</span>{item}</p>)}
                    </div>

                    <div id="styles" className="mt-24 scroll-mt-24">
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
                            <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-normal tracking-[-0.06em]">Find your starting point.</h2>
                            <p className="max-w-[38ch] text-sm leading-relaxed text-[#728076]">Some sheds may be ready to go. Enquire for current sizes and availability.</p>
                        </div>
                        <Cards
                            type="shed"
                            items={shedCards}
                            className="!px-0 !py-0"
                            gridClassName="gap-5 lg:grid-cols-3"
                        />
                        <p className="mt-4 text-xs text-[#728076]">Photos show examples of our work. We’ll confirm current stock, dimensions, features and pricing for your enquiry.</p>
                    </div>

                    <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                        <figure className="relative aspect-[1.05/1] rotate-90 overflow-hidden bg-[#d8d5c8] lg:aspect-auto lg:min-h-[660px]">
                            <Image src="/Images/DFSImg/IMG_5460.webp" alt="Douglas fir lumber and equipment at the mill" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            <figcaption className="absolute bottom-6 left-6 bg-[#f6f3e9] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.15em]">Built at our mill. Delivered to you.</figcaption>
                        </figure>
                        <div>
                            <p className={eyebrow}><span className="h-[2px] w-8 bg-[#eabf20]" />Delivery services available</p>
                            <h2 className="mt-8 max-w-[10ch] text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[1.02] tracking-[-0.07em]">We build it.<br />We bring it.</h2>
                            <p className="mt-6 max-w-[58ch] text-base leading-[1.75] text-[#657369]">Our sheds are built on skids, and delivery services are available. Tell us your location and where you’d like the shed placed so we can work through access and delivery arrangements.</p>
                            <p className="mt-5 max-w-[58ch] text-base leading-[1.75] text-[#657369]">We’ll confirm the shed dimensions, transport requirements, delivery charges and site preparation before scheduling. Photos of your driveway, access route and intended spot are helpful.</p>
                            <a href="#enquiry" className={`group mt-7 flex items-center justify-between border-t pt-5 text-sm font-bold ${rule}`}><span>Ask about delivery to your property</span><span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="enquiry" className="bg-[#eeece2] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p data-reveal className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                            <span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />
                            Ready-to-go or built for you
                        </p>
                        <h2 data-reveal style={{ "--d": "120ms" }} className="mt-8 max-w-[7ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                            Let’s make room for your plans.
                        </h2>
                        <p data-reveal style={{ "--d": "220ms" }} className="mt-8 max-w-[52ch] text-base leading-[1.7] text-[#66746a]">
                            Ask what’s ready now, or share your ideas for a custom shed. We’ll help you explore the size, style and delivery options that work for your property.                        </p>
                        <ol className="mt-10 divide-y divide-[#073d28]/15 border-y border-[#073d28]/15">
                            {[
                                ["Choose your direction.", "Ready-to-go availability or a custom size and style."],
                                ["Work through the details.", "Dimensions, features, pricing, build timing and delivery."],
                                ["Plan its new home.", "Confirm access and site preparation before delivery."]
                            ].map(([title, copy], index) => (
                                <li
                                    key={title}
                                    data-reveal
                                    style={{ "--d": `${300 + index * 100}ms` }}
                                    className="grid grid-cols-[25px_1fr] gap-4 py-5"
                                >
                                    <span className="text-xs text-[#52685b]">0{index + 1}</span>
                                    <div>
                                        <strong className="text-sm">{title}</strong>
                                        <p className="mt-2 text-sm text-[#748078]">{copy}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p data-reveal style={{ "--d": "550ms" }} className="mt-12 max-w-[58ch] text-xs leading-relaxed text-[#68756d]">
                            Share what you have, where it is, and what you want to make. We’ll work through the practical details before the job begins.
                        </p>
                        <a
                            data-reveal
                            style={{ "--d": "620ms" }}
                            href={siteConfig.phoneLink}
                            className="group mt-6 flex items-center justify-between border-t border-[#073d28]/15 pt-6 text-sm font-bold transition-colors hover:text-[#b18a10]"
                        >
                            <span>Talk to our mill: {siteConfig.phone}</span>
                            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                    </div>
                    <div data-reveal style={{ "--d": "200ms" }} className="rounded-[3px] bg-[#fbfaf3] p-7 shadow-[0_20px_50px_-40px_rgba(7,61,40,.45)] sm:p-10">
                        <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">What can we help you with?</h3>
                        <EnquiryForm
                            email={GoldenshedEnquiry?.email}
                            services={GoldenshedEnquiry?.services}
                            buttonText="Review my enquiry"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                <div className="mx-auto max-w-4xl">
                    <h2 data-reveal className="text-[clamp(2.5rem,4vw,4rem)] font-normal tracking-[-0.065em]">
                        A few useful details
                    </h2>
                    <FAQSection data={GoldenshedFaqs} className="mt-8" />
                </div>
            </section>

            <section className="bg-[#004329] px-6 py-16 text-[#f6f3e9] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
                    <div>
                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.07em]">Your backyard.<br />A little more possibility.</h2>
                        <p className="mt-6 text-base text-white/80">Premium Douglas fir sheds, made at our mill.</p>
                    </div>
                    <address className="not-italic text-base leading-relaxed">
                        <a href={siteConfig.phoneLink} className="text-3xl tracking-[-0.05em] transition-colors hover:text-[#f2c31b]">{siteConfig.phone}</a>
                        <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-sm transition-colors hover:text-[#f2c31b]">{siteConfig.email}</a>
                        <p className="mt-5 whitespace-pre-line text-sm text-white/80">{siteConfig.address.replace(", ", "\n")}</p>
                    </address>
                </div>
            </section>
        </div>
    );
}
