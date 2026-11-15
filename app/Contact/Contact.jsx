import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import FAQSection from "@/Components/Ui/FAQ";

const address = "5110 Dove Crk Rd, Comox Valley, BC V9J 1P4";
const mapQuery = encodeURIComponent(address);
const delay = (ms) => ({ "--d": `${ms}ms` });

const faqs = [
    {
        id: "lumber-options",
        question: "What kinds of lumber and timber can I order?",
        answer:
            "We mill Douglas fir, red cedar and yellow cedar, with options ranging from rough cut lumber to custom beams and finished timber. Tell us what you are building and the sizes you need, and we can help you plan your order.",
    },
    {
        id: "custom-sizes",
        question: "Can you cut custom sizes and long beams?",
        answer:
            "Yes. We cut to suit your project, with custom beam lengths available up to 32 feet. Send your dimensions and quantities and we will confirm what is possible.",
    },
    {
        id: "delivery-milling",
        question: "Do you offer delivery or mobile milling?",
        answer:
            "Delivery and milling options depend on the order and location. Get in touch with your project details and delivery address so we can talk through the best option.",
    },
    {
        id: "yard-pickup",
        question: "Can I visit the lumber yard to pick up an order?",
        answer:
            "Our yard is at 5110 Dove Crk Rd in the Comox Valley. Please call ahead before visiting so we can confirm availability and arrange a convenient pickup.",
    },
];

const contactCards = [
    { label: "Address", value: address, href: `https://maps.google.com/?q=${mapQuery}`, Icon: MapPin },
    { label: "Email", value: "info@islandbeamandtimber.com", href: "mailto:info@islandbeamandtimber.com", Icon: Mail },
    { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneLink, Icon: Phone },
];

const fieldClass =
    "w-full rounded-md border border-white/10 bg-[#f8f8f5] px-4 py-3.5 text-sm text-[#152019] placeholder:text-[#777f79] shadow-sm outline-none transition-all duration-300 hover:border-[#9fc69d]/60 focus:-translate-y-0.5 focus:border-[#9fc69d] focus:shadow-lg focus:ring-2 focus:ring-[#9fc69d]/30";

export default function Contact() {
    return (
        <main className="bg-white text-[#1b241e]">
            <ScrollReveal />

            <section className="px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                        <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#a5c5a2]">Island Beam &amp; Timber</p>
                        <h1 data-reveal style={delay(100)} className="text-4xl font-medium uppercase tracking-[0.07em] text-[#17251b] sm:text-5xl lg:text-6xl">Contact us</h1>
                        <p data-reveal style={delay(200)} className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#68726b] sm:text-base">
                            Thanks for your interest in Island Beam &amp; Timber. Whether you are looking for quality lumber, custom timber, or help with a project, we are here to help.
                        </p>
                    </header>

                    <div id='form' data-reveal='up' className="grid items-stretch gap-5 lg:grid-cols-2">
                        <div data-reveal="left" className="group relative min-h-[360px] overflow-hidden rounded-md bg-[#18251c] shadow-md transition-shadow duration-500 hover:shadow-2xl sm:min-h-[470px] lg:min-h-[520px]">
                            <Image
                                src="/Images/pageImg/img7.png"
                                alt="Timber being prepared at a Vancouver Island sawmill"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="img-settle object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#07110b]/70 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7dfc2]">Locally milled · Vancouver Island</span>
                                <p className="mt-2 max-w-md text-2xl font-medium leading-tight text-white transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl">Good timber starts with a good conversation.</p>
                            </div>
                        </div>

                        <div data-reveal="right" className="rounded-md bg-[#1d3024] p-6 shadow-md sm:p-9 lg:p-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a5c5a2]">We would love to hear from you</p>
                            <h2 className="mt-3 text-2xl font-medium uppercase tracking-wide text-white sm:text-3xl">Get in touch</h2>
                            <p className="mt-3 max-w-md text-sm leading-6 text-[#c1c9c1]">Send us a note about your project, and our team will get back to you as soon as we can.</p>
                            <form action="mailto:info@islandbeamandtimber.com" method="post" encType="text/plain" className="mt-7 space-y-4">
                                <label className="sr-only" htmlFor="contact-name">Your name</label>
                                <input id="contact-name" name="Name" autoComplete="name" required placeholder="Your name" className={fieldClass} />
                                <label className="sr-only" htmlFor="contact-email">Your email</label>
                                <input id="contact-email" type="email" name="Email" autoComplete="email" required placeholder="Your email" className={fieldClass} />
                                <label className="sr-only" htmlFor="contact-message">Your message</label>
                                <textarea id="contact-message" name="Message" required rows={5} placeholder="Tell us a little about your project" className={`${fieldClass} resize-y`} />
                                <button type="submit" className="btn-shine group w-full rounded-full bg-[#D9B258] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#152019] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4c273] hover:shadow-xl hover:shadow-[#D9B258]/20 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d3024]">
                                    Send your message{" "}
                                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                                <p className="text-center text-xs text-[#aeb9b0]">Or email us directly at <a className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white" href="mailto:info@islandbeamandtimber.com">info@islandbeamandtimber.com</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7f3e8] px-5 py-14 text-[#1b3023] sm:px-8 sm:py-20 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <header data-reveal className="mx-auto mb-10 max-w-2xl text-center">
                        <div className="flex items-center justify-center gap-4 sm:gap-6">
                            <span aria-hidden="true" className="eyebrow-line h-[2px] w-16 origin-right bg-[#d9b25e] sm:w-24" />
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#193526] sm:text-3xl">Contact information</h2>
                            <span aria-hidden="true" className="eyebrow-line h-[2px] w-16 bg-[#d9b25e] sm:w-24" />
                        </div>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#4f5b51] sm:text-base">We are a locally owned sawmill serving builders, makers and homeowners across Vancouver Island.</p>
                    </header>
                    <div className="grid sm:grid-cols-3">
                        {contactCards.map((item, index) => (
                            <a
                                key={item.label}
                                data-reveal
                                style={delay(index * 100)}
                                href={item.href}
                                className={`${index > 0 ? "border-t border-[#d9b25e]/70 sm:border-l sm:border-t-0" : ""} group flex flex-col items-center rounded-lg px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b25e] sm:px-6 sm:py-8`}
                            >
                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eee2c3] text-[#193526] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#d9b25e]"><item.Icon aria-hidden="true" size={25} strokeWidth={2.5} /></span>
                                <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a8791f]">{item.label}</span>
                                <span className="mt-1.5 text-sm leading-6 text-[#3f4d43] transition-colors group-hover:text-[#17251b]">{item.value}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-12">
                <div data-reveal="zoom" className="mx-auto max-w-7xl overflow-hidden rounded-md bg-[#f8f8f5] text-[#1b241e] shadow-lg">
                    <div className="flex flex-col gap-5 px-6 py-7 sm:px-9 lg:flex-row lg:items-end lg:justify-between lg:px-10">
                        <div>
                            <span className="inline-flex rounded-full bg-[#e8eee8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#425348]">Island Beam &amp; Timber · Lumber yard</span>
                            <h2 className="mt-3 text-2xl font-medium uppercase tracking-wide sm:text-3xl">Location &amp; site access</h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68726b]">Visit our lumber yard at {address}. Please call ahead to confirm your pickup and arrange your visit.</p>
                        </div>
                        <a href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer" className="btn-shine group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D9B258] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#152019] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4c273] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#152019]">Open in Google Maps <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></a>
                    </div>
                    <div className="grid lg:grid-cols-[1.65fr_0.85fr]">
                        <div className="min-h-[340px] bg-[#dce6dc] sm:min-h-[450px] lg:min-h-[480px]">
                            <iframe title="Map to Island Beam & Timber" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[340px] w-full border-0 sm:min-h-[450px] lg:min-h-[480px]" />
                        </div>
                        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-1 lg:p-6">
                            <article data-reveal style={delay(100)} className="rounded-md border border-[#e5e8e4] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B258] hover:shadow-lg">
                                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#54705d]">Plan your visit</p>
                                <h3 className="mt-2 font-semibold">Call ahead for pickup</h3>
                                <p className="mt-2 text-sm leading-6 text-[#68726b]">Our yard team can confirm stock, loading details and a convenient time to stop by.</p>
                                <a href={siteConfig.phoneLink} className="mt-4 inline-flex text-sm font-semibold text-[#355440] underline decoration-[#D9B258] underline-offset-4 transition-colors hover:text-[#152019]">Call {siteConfig.phone}</a>
                            </article>
                            <article data-reveal style={delay(200)} className="rounded-md border border-[#e5e8e4] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B258] hover:shadow-lg">
                                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#54705d]">Need help with an order?</p>
                                <h3 className="mt-2 font-semibold">Talk with our team</h3>
                                <p className="mt-2 text-sm leading-6 text-[#68726b]">Share your species, dimensions and quantities. We will help you figure out the next steps.</p>
                                <a href="mailto:info@islandbeamandtimber.com" className="mt-4 inline-flex text-sm font-semibold text-[#355440] underline decoration-[#D9B258] underline-offset-4 transition-colors hover:text-[#152019]">Email the yard</a>
                            </article>
                            <a data-reveal style={delay(300)} href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`} target="_blank" rel="noreferrer" className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-[#D9B258] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#152019] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4c273] hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#152019] sm:col-span-2 lg:col-span-1">Get directions <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#1d3024] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                        <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9B258]">A few helpful answers</p>
                        <h2 data-reveal style={delay(100)} className="mt-3 text-3xl font-medium uppercase tracking-wide text-white sm:text-4xl">Customers frequently ask</h2>
                        <p data-reveal style={delay(200)} className="mt-4 text-sm leading-6 text-[#d4ded5]">A little more about our lumber, custom orders and visiting the yard.</p>
                    </header>
                    <FAQSection data={faqs} tone="dark" className="grid gap-x-10 sm:grid-cols-2" />
                    <div data-reveal className="mt-10 text-center">
                        <Link href="/contact#form" className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a5c5a2] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Still have a question? Contact us <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}