import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx";
import { ProductCards } from "@/Components/Ui/Cards.jsx";
import EnquiryForm from "@/Components/layout/Form.jsx";
import FAQSection from "@/Components/Ui/FAQ.jsx";
import ScrollReveal from "@/Components/Ui/ScrollReveal.jsx";
import Image from "next/image";
import { customLumberData, customLumberFaqs, enquiryDatCustomLumbera } from "@/lib/CustomLumberConst.js";
import { siteConfig } from "@/lib/siteConfig.js";

export default function CustomLumber() {
    return (
        <div className="font-sans leading-relaxed text-[#073d28]">
            <ScrollReveal />
            <CustomLumberHero data={customLumberData} />
            <section className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                        <div>
                            <p data-reveal className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                                <span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />
                                Cut for your project
                            </p>
                            <h2 data-revea className="mt-8 max-w-[11ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                                From rough-sawn to ready for finishing.
                            </h2>
                        </div>
                        <p data-reveal style={{ "--d": "220ms" }} className="self-start pt-2 text-base leading-[1.7] text-[#657369] sm:text-lg lg:mt-7">
                            Custom lumber starts with clear specifications. We’ll confirm the cut size, finished size and surface you need before work begins.
                        </p>
                    </div>
                    <ProductCards className="mt-16" itemClassName="min-h-[fit-content]" />
                </div>
                <div className="mx-auto mt-16 grid max-w-7xl gap-7 md:grid-cols-[1.5fr_1fr]">
                    <figure data-reveal style={{ "--d": "100ms" }}>
                        <div className="relative aspect-[1.83/1] overflow-hidden rounded-[3px]">
                            <Image
                                src="/Images/pageImg/IMG_0311.JPEG"
                                alt="Sawmill equipment beneath a timber frame shelter"
                                fill
                                sizes="(max-width: 768px) 100vw, 60vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                        <figcaption className="mt-3 text-xs text-[#728076]">A working mill. Timber we’re proud to put to use.</figcaption>
                    </figure>
                    <figure data-reveal style={{ "--d": "250ms" }} className="md:mt-14">
                        <div className="relative aspect-[1.28/1] overflow-hidden rounded-[3px]">
                            <Image
                                src="/Images/customlumberimg/IMG_4672.JPEG"
                                alt="Logs ready for milling"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                        <figcaption className="mt-3 text-xs text-[#728076]">Every order starts with the material.</figcaption>
                    </figure>
                </div>
            </section>

            <section id="enquiry" className="bg-[#eeece2] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p data-reveal className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                            <span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />
                            Let’s make a start
                        </p>
                        <h2 data-reveal style={{ "--d": "120ms" }} className="mt-8 max-w-[7ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                            Send us your cut list.
                        </h2>
                        <p data-reveal style={{ "--d": "220ms" }} className="mt-8 max-w-[52ch] text-base leading-[1.7] text-[#66746a]">
                            Have a drawing, a few measurements or a full material list? Tell us what you need, where it’s going and when you’re hoping to build.
                        </p>
                        <ol className="mt-10 divide-y divide-[#073d28]/15 border-y border-[#073d28]/15">
                            {[
                                ["Share the details.", "Species, dimensions, quantities and preferred finish."],
                                ["We work through the options.", "Confirm sizes, availability, timing and delivery arrangements."],
                                ["Agree on the order.", "Review the quote and specifications before cutting begins."]
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
                            For structural applications, include any grading or engineering requirements. Drying condition and grading must be confirmed for your order.
                        </p>
                        <a
                            data-reveal
                            style={{ "--d": "620ms" }}
                            href={siteConfig.phoneLink}
                            className="group mt-6 flex items-center justify-between border-t border-[#073d28]/15 pt-6 text-sm font-bold transition-colors hover:text-[#b18a10]"
                        >
                            <span>Prefer to talk? {siteConfig.phone}</span>
                            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                    </div>
                    <div data-reveal style={{ "--d": "200ms" }} className="rounded-[3px] bg-[#fbfaf3] p-7 shadow-[0_20px_50px_-40px_rgba(7,61,40,.45)] sm:p-10">
                        <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">What are you building?</h3>
                        <EnquiryForm
                            email={enquiryDatCustomLumbera?.email}
                            services={enquiryDatCustomLumbera?.services}
                            buttonText="Review my cut list"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-4xl">
                    <h2 data-reveal className="text-[clamp(2.5rem,4vw,4rem)] font-normal tracking-[-0.065em]">
                        A few useful details.
                    </h2>
                    <div data-reveal style={{ "--d": "150ms" }}>
                        <FAQSection
                            data={customLumberFaqs}
                            defaultOpenIds={["dry-or-graded", "delivery"]}
                            allowMultiple
                            className="mt-9"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#004329] px-6 py-20 text-[#f6f3e9] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.45fr_0.85fr] lg:items-center lg:gap-20">
                    <div>
                        <h2 data-reveal className="text-[clamp(3rem,4vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                            Let’s talk timber.
                        </h2>
                        <p data-reveal className="mt-7 max-w-[58ch] text-base leading-[1.7] text-white/80 sm:text-lg">
                            Custom lumber, personal service and a practical conversation about your project.
                        </p>
                    </div>
                    <address data-reveal className="not-italic text-base leading-[1.65] sm:text-lg">
                        <a href={siteConfig.phoneLink} className="block text-[clamp(2rem,2vw,3rem)] leading-none tracking-[-0.05em] transition-colors hover:text-[#f2c31b]">{siteConfig.phone}</a>
                        <a href={`mailto:${siteConfig.email}`} className="mt-7 block font-semibold transition-colors hover:text-[#f2c31b]">{siteConfig.email}</a>
                        <p className="mt-7 whitespace-pre-line text-white/90">{siteConfig.address.replace(", ", "\n")}</p>
                    </address>
                </div>
            </section>
            {/* <CustomLumberContent /> */}
        </div>
    );
}
