

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Flame } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx"
import ScrollReveal from "@/Components/Ui/ScrollReveal.jsx"
import Cards, { ProductCards } from "@/Components/Ui/Cards.jsx"
import { FirewoodData, firewoodCards, firewoodEnquiry, firewoodFaqs } from "@/lib/FirewoodConst.js"
import ServiceBody from "@/Components/Ui/ServiceBody.jsx"
import EnquiryForm from "@/Components/layout/Form";
import FAQSection from "@/Components/Ui/FAQ";

export default function Firewood() {
    return (
        <main className="overflow-x-clip bg-[#F7F3EB] text-[#09271B]">
            <ScrollReveal />
            <CustomLumberHero data={FirewoodData} />
            <section className="bg-[#f6f3e9] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                        <div data-reveal>
                            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                                <span className="h-[2px] w-8 bg-[#eabf20]" />The roots of our business
                            </p>
                            <h2 className="mt-8 max-w-[13ch] text-[clamp(2.7rem,5vw,5rem)] font-normal leading-[1.02] tracking-[-0.07em]">From our timber yard to your woodpile.</h2>
                        </div>
                        <div data-reveal style={{ "--d": "220ms" }} className="space-y-5 text-base leading-[1.7] text-[#657369]">
                            <p>Long before the sawmill, there was firewood. Daniel’s more than 15 years in the business shaped a practical understanding of wood, equipment and the people who rely on both.</p>
                            <p>That experience remains part of Island Beam &amp; Timber. We believe in doing the work properly, making useful products from the wood we handle and giving customers clear answers about what they’re ordering.</p>
                            <p>Whether you’re planning ahead for home heating or topping up your wood supply, speak directly with our team. We’ll confirm current stock, wood condition, cut lengths and the quantity that works for your order.</p>
                            <Link href="/About" className="group flex items-center justify-between border-t border-[#073d28]/15 pt-5 text-sm font-bold text-[#073d28] transition-colors hover:text-[#b18a10]">
                                <span>More about our Island roots</span><ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                    <ProductCards type="firewood" items={firewoodCards} className="mt-16" itemClassName="min-h-[fit-content]" />
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
            <section id="enquiry" className="bg-[#eeece2] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p data-reveal className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]">
                            <span className="eyebrow-line inline-block h-[2px] w-8 bg-[#eabf20]" />
                            Keep the warmth coming
                        </p>
                        <h2 data-reveal style={{ "--d": "120ms" }} className="mt-8 max-w-[7ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">
                            Tell us what
                            you need.
                        </h2>
                        <p data-reveal style={{ "--d": "220ms" }} className="mt-8 max-w-[52ch] text-base leading-[1.7] text-[#66746a]">
                            Send a few details and we’ll get back to you about availability and a quote. If you’re unsure about quantity or the right option, start with a conversation.

                        </p>
                        <ol className="mt-10 divide-y divide-[#073d28]/15 border-y border-[#073d28]/15">
                            {[
                                ["Tell us about your order.", "Quantity, preferred cut length, location and timing."],
                                ["We confirm the details", "Available wood, condition, pricing and delivery arrangements."],
                                ["Plan your delivery.", "Agree on access and timing before the order is scheduled."]
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
                        <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">Your next load starts here.</h3>
                        <EnquiryForm
                            email={firewoodEnquiry?.email}
                            services={firewoodEnquiry?.services}
                            buttonText="Review my enquiry"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#f6f3e9] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                <div className="mx-auto max-w-4xl">
                    <h2 data-reveal className="text-[clamp(2.5rem,4vw,4rem)] font-normal tracking-[-0.065em]">
                        Before your next load.
                    </h2>
                    <FAQSection data={firewoodFaqs} className="mt-8" />
                </div>
            </section>
            <section className="bg-[#004329] px-6 py-16 text-[#f6f3e9] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
                    <div>
                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.07em]">Good wood.<br />Good people.</h2>
                        <p className="mt-6 text-base text-white/80">Speak directly with our team about your next firewood order.</p>
                    </div>
                    <address className="not-italic text-base leading-relaxed">
                        <a href={siteConfig.phoneLink} className="text-3xl tracking-[-0.05em] transition-colors hover:text-[#f2c31b]">{siteConfig.phone}</a>
                        <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-sm transition-colors hover:text-[#f2c31b]">{siteConfig.email}</a>
                        <p className="mt-5 whitespace-pre-line text-sm text-white/80">{siteConfig.address.replace(", ", "\n")}</p>
                    </address>
                </div>
            </section>



        </main>
    );
}
