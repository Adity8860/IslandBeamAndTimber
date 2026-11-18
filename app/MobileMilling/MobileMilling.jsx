import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx";
import { ProductCards } from "@/Components/Ui/Cards.jsx";
import EnquiryForm from "@/Components/layout/Form.jsx";
import FAQSection from "@/Components/Ui/FAQ.jsx";
import ScrollReveal from "@/Components/Ui/ScrollReveal.jsx";
import Image from "next/image";
import { mobileMillingCards, mobileMillingData, mobileMillingEnquiry, mobileMillingFaqs } from "@/lib/MobileMillingConst.js";
import { siteConfig } from "@/lib/siteConfig.js";

export default function MobileMilling() {
    return (
        <div className="font-sans leading-relaxed text-[#073d28]">
            <ScrollReveal />
            <CustomLumberHero data={mobileMillingData} />
            <section id="services" className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                        <div>
                            <p data-reveal className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                                <span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />
                                A practical service
                            </p>
                            <h2 data-reveal style={{ "--d": "120ms" }} className="mt-8 max-w-[11ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                                From log to lumber.
                            </h2>
                        </div>
                        <p data-reveal style={{ "--d": "220ms" }} className="self-start pt-2 text-base leading-[1.7] text-[#657369] sm:text-lg lg:mt-7">
                            Bring us your plans, your cut list or photos of your logs. We’ll discuss the right milling arrangement, confirm what can be produced and work through the details with you.
                        </p>
                    </div>
                    <ProductCards items={mobileMillingCards} className="mt-16" itemClassName="min-h-[fit-content]" />
                </div>
                <div className="mx-auto mt-20 grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
                    <figure data-reveal className="relative aspect-[0.97/1] overflow-hidden bg-[#d8d5c8]">
                        <Image
                            src="/Images/pageImg/IMG_4841.JPEG"
                            alt="Logs being moved for mobile milling"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <figcaption className="absolute bottom-7 left-7 bg-[#fbfaf3] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.19em] text-[#073d28]">Your logs. Your next project.</figcaption>
                    </figure>
                    <div data-reveal style={{ "--d": "160ms" }}>
                        <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]"><span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />Mobile milling</p>
                        <h2 className="mt-8 max-w-[12ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">Make more of the timber you have.</h2>
                        <p className="mt-4 max-w-[58ch] text-sm leading-[1.7] text-[#657369] sm:text-md">Turn suitable logs into boards, posts or timbers for a project close to home. Our mobile service starts with a conversation about the logs, the property and the result you want.</p>
                        <ol className="mt-10 divide-y divide-[#073d28]/15 border-y border-[#073d28]/15">
                            {[
                                ["Show us your logs.", "Photos, species if known, approximate diameters, lengths and number of logs."],
                                ["Tell us about the site.", "Location, vehicle access, working space and any equipment available to move logs."],
                                ["Share your cut list.", "The sizes, quantities and intended use help us plan a suitable milling approach."],
                            ].map(([title, copy], index) => <li key={title} className="grid grid-cols-[25px_1fr] gap-4 py-5"><span className="text-xs text-[#52685b]">0{index + 1}</span><div><strong className="text-sm">{title}</strong><p className="mt-2 text-sm text-[#748078]">{copy}</p></div></li>)}
                        </ol>
                        <a href="#enquiry" className="group mt-8 flex items-center justify-between border-t border-[#073d28]/15 pt-6 text-sm font-bold transition-colors hover:text-[#b18a10]"><span>Plan a mobile milling visit</span><span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></a>
                    </div>
                </div>
                <div className="mx-auto mt-20 grid max-w-7xl gap-7 md:grid-cols-[0.9fr_1.25fr_0.9fr]">
                    <figure data-reveal style={{ "--d": "100ms" }}>
                        <div className="relative aspect-square overflow-hidden rounded-[3px]">
                            <Image
                                src="/Images/pageImg/IMG_4565 (1).JPEG"
                                alt="Forklift loading lumber at the yard"
                                fill
                                sizes="(max-width: 768px) 100vw, 30vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                        <figcaption className="mt-3 text-xs text-[#728076]">Loading assistance at the yard.</figcaption>
                    </figure>
                    <figure data-reveal style={{ "--d": "180ms" }} className="md:mt-16">
                        <div className="relative aspect-[1.5/1] overflow-hidden rounded-[3px]">
                            <Image
                                src="/Images/pageImg/IMG_4605.JPEG"
                                alt="Sawmill equipment beneath a timber frame shelter"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                        <figcaption className="mt-3 text-xs text-[#728076]">A working mill, built around real projects.</figcaption>
                    </figure>
                    <figure data-reveal style={{ "--d": "260ms" }}>
                        <div className="relative aspect-square overflow-hidden rounded-[3px]">
                            <Image
                                src="/Images/pageImg/IMG_4841.JPEG"
                                alt="Freshly milled lumber stacked at the yard"
                                fill
                                sizes="(max-width: 768px) 100vw, 30vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                        <figcaption className="mt-3 text-xs text-[#728076]">From the log to a useful stack of lumber.</figcaption>
                    </figure>
                </div>
            </section>

            <section id="enquiry" className="bg-[#eeece2] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p data-reveal className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                            <span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />
                            Let’s work through the details
                        </p>
                        <h2 data-reveal style={{ "--d": "120ms" }} className="mt-8 max-w-[7ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                            Tell us about your next cut.
                        </h2>
                        <p data-reveal style={{ "--d": "220ms" }} className="mt-8 max-w-[52ch] text-base leading-[1.7] text-[#66746a]">
                            Whether you need milling, mobile service or delivery, a few details help us give you a useful answer. Include your location, material and preferred timing.
                        </p>
                        <ol className="mt-10 divide-y divide-[#073d28]/15 border-y border-[#073d28]/15">
                            {[
                                ["Start with your project.", "Send photos, log details or a cut list with dimensions and quantities."],
                                ["We confirm the scope.", "Milling options, handling needs, availability, timing and pricing."],
                                ["Plan the work and transport.", "Agree on milling arrangements, loading and delivery before the job begins."]
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
                            email={mobileMillingEnquiry.email}
                            services={mobileMillingEnquiry.services}
                            buttonText="Review my enquiry"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <h2 data-reveal className="text-[clamp(2.5rem,4vw,4rem)] font-normal tracking-[-0.065em]">
                        Before we start.
                    </h2>
                    <div data-reveal style={{ "--d": "150ms" }}>
                        <FAQSection
                            data={mobileMillingFaqs}
                            className="mt-9"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#004329] px-6 py-20 text-[#f6f3e9] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.45fr_0.85fr] lg:items-center lg:gap-20">
                    <div>
                        <h2 data-reveal className="text-[clamp(3rem,4vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                            From the first cut to the next step.
                        </h2>
                        <p data-reveal style={{ "--d": "150ms" }} className="mt-7 max-w-[58ch] text-base leading-[1.7] text-white/80 sm:text-lg">
                            Milling, mobile service, delivery and loading—let’s plan it together.
                        </p>
                    </div>
                    <address data-reveal style={{ "--d": "250ms" }} className="not-italic text-base leading-[1.65] sm:text-lg">
                        <a href={siteConfig.phoneLink} className="block text-[clamp(2rem,2vw,3rem)] leading-none tracking-[-0.05em] transition-colors hover:text-[#f2c31b]">{siteConfig.phone}</a>
                        <a href={`mailto:${siteConfig.email}`} className="mt-7 block font-semibold transition-colors hover:text-[#f2c31b]">{siteConfig.email}</a>
                        <p className="mt-7 whitespace-pre-line text-white/90">{siteConfig.address.replace(", ", "\n")}</p>
                    </address>
                </div>
            </section>
        </div>
    );
}
