"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, Emailservices } from "@/lib/siteConfig";
import { enquiryData } from "@/lib/contact";
import EnquiryForm from "@/Components/layout/Form";
import ScrollReveal from "@/Components/Ui/ScrollReveal";

const address = `${siteConfig?.address}`;
const email = `${siteConfig?.email}`;
const mapQuery = encodeURIComponent(address);


const [add1, add2] = siteConfig?.address.split(",");


const contactCards = [
    {
        number: "01",
        label: "Call or text",
        title: siteConfig.phone,
        detail: "Talk through your project or text us your cut list.",
        links: [
            { label: "Call the mill", href: siteConfig.phoneLink },
            //     { label: "Send a text", href: `sms:${siteConfig.phoneLink.replace("tel:", "")}` },
        ],
    },
    {
        number: "02",
        label: "Email our team",
        title: email,
        detail: "Send dimensions, photos, ideas or project drawings.",
        links: [
            {
                label: "Write to us",
                href: "#enquiry",

            },
        ],
    },
    {
        number: "03",
        label: "Our sawmill",
        title: add1 || "5110 Dove Crk Rd",
        detail: add2 || "Comox Valley, BC V9J 1P4",
        links: [
            {
                label: "See our location ↓",
                href: "#sawmill-location",
            },
        ],
    },
];

const fieldClass = "w-full border-0 bg-[#EAE7DC] px-4 py-3.5 text-sm text-[#173D2C] placeholder:text-[#697267] outline-none transition-colors focus:bg-white focus:ring-2 focus:ring-[#E8B51E]";

export default function Contact() {
    const [selectedService, setSelectedService] = useState("");
    const services = enquiryData?.services;
    const displayServices = services.filter((service) =>
        [
            "Custom lumber & beams",
            "Milling & mobile milling",
            "Ready-to-go & custom sheds",
            "Firewood delivery",
        ].includes(service.label)
    );


    return (
        <>
            <ScrollReveal />
            <main className="bg-[#F4F2E9] text-[#173D2C]">
                {/* ── Hero ── */}
                <section className="grid bg-[#003C24] text-[#F4F2E9] lg:min-h-[calc(100vh-130px)] lg:grid-cols-2">
                    <div className="flex flex-col justify-between px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-14 xl:pr-16 xl:pl-[clamp(5rem,7.3vw,9rem)] xl:py-16">
                        <div>
                            <div data-reveal className="mb-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
                                <span className="h-[2px] w-8 bg-[#EEBF21]" aria-hidden="true" />
                                <span>{siteConfig?.name} &amp; {siteConfig?.name1} / Contact us</span>
                            </div>
                            <h1 data-reveal style={{ "--d": "120ms" }} className="max-w-[760px] text-[clamp(3.5rem,7vw,8rem)] font-normal leading-[0.96] tracking-[-0.065em]">
                                Good wood.<br />
                                Real people.<br />
                                <span className="text-[#EEBF21]">Let&apos;s talk.</span>
                            </h1>
                            <p data-reveal style={{ "--d": "250ms" }} className="mt-7 max-w-[470px] text-sm leading-[1.75] text-white/80 sm:text-base">
                                Custom lumber, a backyard shed, mobile milling or your next firewood delivery. Tell us what you have in mind — we&apos;ll work through the details with you.
                            </p>
                            <div data-reveal style={{ "--d": "380ms" }} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                                <a href="#enquiry" className="group inline-flex min-h-16 items-center gap-7 rounded-full bg-[#EEBF21] px-7 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B]">
                                    Start an enquiry <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                                {/* <a href={siteConfig.phoneLink} className="group inline-flex items-center gap-2 border-b border-white/25 pb-2 text-xs font-semibold text-white transition-colors hover:border-[#EEBF21] hover:text-[#EEBF21]">
                                    Call {siteConfig.phone} <ArrowUpRight className="size-3.5" />
                                </a> */}
                            </div>
                        </div>

                        <div data-reveal style={{ "--d": "500ms" }} className="mt-14 flex items-center justify-between gap-5 border-t border-white/15 pt-5 text-[8px] font-semibold uppercase tracking-[0.17em] text-white/60 sm:text-[9px]">
                            <span>Comox Valley, Vancouver Island</span>
                            <span className="text-right">Lumber yard &amp; sawmill</span>
                        </div>
                    </div>

                    <figure data-reveal style={{ "--d": "300ms" }} className="relative min-h-[360px] overflow-hidden bg-[#20362A] sm:min-h-[480px] lg:min-h-0">
                        <Image
                            src="/Images/contact/IMG_4604.JPEG"
                            alt="Island Beam & Timber sawmill yard in the Comox Valley"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003C24]/70 via-transparent to-transparent" />
                        <figcaption className="absolute bottom-7 left-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:bottom-9 sm:left-9">
                            Our sawmill in the Comox Valley
                        </figcaption>
                    </figure>
                </section>

                {/* ── Contact cards ── */}
                <section id="contact-options" aria-label="Contact options" className="border-b border-[#D9D8CD] bg-[#F4F2E9] px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto grid max-w-7xl divide-y divide-[#D9D8CD] sm:grid-cols-[0.9fr_1.2fr_0.9fr] sm:divide-x sm:divide-y-0">
                        {contactCards.map((card, i) => (
                            <article data-reveal style={{ "--d": `${i * 150}ms` }} key={card.number} className={`min-w-0 px-2 py-7 sm:py-12 ${card.number === "01" ? "sm:px-2" : "sm:px-8"}`}>
                                <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.16em] text-[#748073]">
                                    <span>{card.number} / {card.label}</span>
                                    <ArrowUpRight className="size-3 text-[#A2A89C]" aria-hidden="true" />
                                </div>
                                <h2 data-reveal className="mt-5 break-words text-xl font-normal leading-tight tracking-[-0.04em] text-[#173D2C] sm:text-[28px]">
                                    {card.title}
                                </h2>
                                <p data-reveal className="mt-3 min-h-6 text-xs leading-5 text-[#697267] sm:text-sm">{card.detail}</p>
                                <div data-reveal className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                                    {card.links.map((link) => (
                                        <a key={link.label} href={link.href} className="border-b border-[#173D2C]/25 pb-1 text-[11px] font-bold text-[#173D2C] transition-colors hover:border-[#A87B19] hover:text-[#8B5E1A]">
                                            {link.label} ↗
                                        </a>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ── Map section ── */}
                <section id="sawmill-location" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 grid items-end gap-6 sm:mb-10 lg:grid-cols-12">
                            <div data-reveal className="lg:col-span-8">
                                <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#173D2C] sm:text-[10px]">
                                    <span className="h-[2px] w-8 bg-[#E8B51E]" aria-hidden="true" />
                                    <span>Rooted in the Comox Valley</span>
                                </div>
                                <h2 className="max-w-[800px] text-[clamp(2.75rem,6vw,4rem)] font-normal leading-[0.98] tracking-[-0.06em] text-[#173D2C]">
                                    Find us on<br />Dove Creek Road.
                                </h2>
                            </div>
                            <p data-reveal style={{ "--d": "150ms" }} className="max-w-sm text-sm leading-relaxed text-[#697267] lg:col-span-4 lg:justify-self-end">
                                Look for our Island Beam &amp; Timber sign. Call ahead to discuss your order and arrange a visit with our team.
                            </p>
                        </div>

                        <div data-reveal style={{ "--d": "250ms" }} className="grid h-[480px] overflow-hidden rounded-md bg-[#003C24] sm:h-[560px] lg:h-[32rem] lg:grid-cols-[1.65fr_0.85fr]">
                            <div className="min-h-0 bg-[#D8D5C8]">
                                <iframe
                                    title="Map to Island Beam & Timber"
                                    src={`https://maps.google.com/maps?q=${mapQuery}&t=k&output=embed`}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="h-full w-full border-0"
                                />
                            </div>
                            <div className="flex flex-col justify-center px-7 py-9 text-[#F4F2E9] sm:px-10 sm:py-12 lg:px-12">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EEBF21]">Island Beam &amp; Timber Ltd.</p>
                                <h3 className="mt-7 text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl">5110 Dove Crk Rd</h3>
                                <p className="mt-2 text-base text-white/70">Comox Valley, BC V9J 1P4</p>
                                <p className="mt-7 max-w-sm text-base leading-relaxed text-white/75">
                                    Your local lumber yard and sawmill on Vancouver Island. Open the map for directions to our address.
                                </p>
                                <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`} target="_blank" rel="noreferrer" className="group mt-8 inline-flex w-fit items-center gap-5 rounded-full bg-[#EEBF21] px-8 py-5 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B]">
                                    Get directions <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>
                        <p data-reveal style={{ "--d": "350ms" }} className="mt-4 text-xs text-[#697267]">
                            Satellite map preview · Google Maps. Select the map or directions button to plan your route.
                        </p>
                    </div>
                </section>

                {/* ── Enquiry form ── */}
                <section id="enquiry" className="bg-[#EAE8DE] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                    <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
                        <div data-reveal className="lg:pt-1">
                            <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#173D2C] sm:text-[10px]">
                                <span className="h-[2px] w-8 bg-[#E8B51E]" aria-hidden="true" />
                                <span>Let&apos;s put your plans in motion</span>
                            </div>
                            <h2 className="max-w-[600px] text-[clamp(3rem,5.5vw,4.25rem)] font-normal leading-[0.96] tracking-[-0.06em] text-[#173D2C]">
                                Big beams.<br />Small details.<br />Start here.
                            </h2>
                            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#697267] sm:text-base">
                                Share your dimensions, quantities, delivery location and preferred timing. Still working out the details? Tell us what you&apos;re planning and we&apos;ll help you find a starting point.
                            </p>
                            <div className="mt-8 divide-y divide-[#173D2C]/15 border-y border-[#173D2C]/15">
                                {displayServices?.map((service) => (
                                    <button
                                        key={service.value}
                                        type="button"
                                        onClick={() => setSelectedService(service.value)}
                                        className={`flex w-full items-center justify-between border-b border-transparent py-[18px] text-left text-sm transition-colors hover:text-[#A87B19] ${selectedService === service.value
                                            ? "font-bold text-[#A87B19]"
                                            : "text-[#173D2C]"
                                            }`}
                                    >
                                        <span>{service.label}</span>

                                        <ArrowUpRight
                                            className="size-3 text-[#A87B19]"
                                            aria-hidden="true"
                                        />
                                    </button>
                                ))}
                                {/* {displayServices?.map((service) => (
                                    <button
                                        key={service.value}
                                        type="button"
                                        onClick={() => setSelectedService(service?.value)}
                                        className="flex w-full items-center justify-between py-[18px] text-left text-sm text-[#173D2C] transition-colors cursor-pointer"
                                    >
                                        <span>{service.label}</span>
                                        <ArrowUpRight
                                            className="size-3 text-[#A87B19]"
                                            aria-hidden="true"
                                        />
                                    </button>
                                ))} */}
                            </div>
                            <div className="mt-7 border-l-2 border-[#E8B51E] pl-5 text-sm leading-relaxed text-[#697267]">
                                <p className="font-bold text-[#173D2C]">We can help with delivery.</p>
                                <p className="mt-1">Ask about lumber and shed delivery, mobile milling, and forklift loading at our yard. Firewood is available by delivery only.</p>
                            </div>
                        </div>

                        <div data-reveal style={{ "--d": "200ms" }} className="rounded-md bg-[#F5F3EB] p-6 shadow-sm sm:p-8 lg:p-10 xl:p-11">
                            <h3 className="text-2xl font-normal tracking-[-0.04em] text-[#173D2C] sm:text-3xl">Tell us what you need.</h3>
                            <p className="mt-3 text-xs text-[#697267]">* Required fields</p>
                            <EnquiryForm
                                email={enquiryData?.email}
                                services={Emailservices}
                                selectedService={selectedService}
                                onServiceChange={setSelectedService}
                                variant="default"
                                buttonText="Submit enquiry"
                            />
                            {/* <EnquiryForm
                                email={enquiryData?.email}
                                services={enquiryData?.services}
                                selectedService={selectedService}
                                onServiceChange={setSelectedService}
                            /> */}
                        </div>
                    </div>
                </section>

                {/* ── Bottom image CTA ── */}
                <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
                    <div data-reveal className="group relative mx-auto h-[380px] max-w-7xl overflow-hidden rounded-md bg-[#173D2C] sm:h-[440px] lg:h-[31rem]">
                        <Image src="/Images/contact/IMG_4841.JPEG" alt="The sawmill taking shape at the Island Beam & Timber yard" fill sizes="100vw" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003C24]/75 via-[#003C24]/10 to-transparent" />
                        <div data-reveal style={{ "--d": "250ms" }} className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5 sm:inset-x-10 sm:bottom-10">
                            <div className="text-[#F4F2E9]">
                                <h2 className="max-w-lg text-3xl font-normal leading-[1.02] tracking-[-0.05em] sm:text-5xl">Where your plans<br />take shape.</h2>
                                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.16em] sm:text-[9px]">{siteConfig.name} &amp; {siteConfig.name1}· Comox Valley, BC</p>
                            </div>
                            <a href="#contact-options" className="group/talk inline-flex shrink-0 items-center gap-4 rounded-full bg-[#EEBF21] px-5 py-3 text-xs font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B] sm:px-6 sm:py-4">
                                Talk to our team <ArrowUpRight className="size-4 transition-transform group-hover/talk:translate-x-0.5 group-hover/talk:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>
                </section>
            </main></>

    );
}
