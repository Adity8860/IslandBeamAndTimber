"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, ChevronDown, Plus } from "lucide-react";

const species = [
    {
        name: "Douglas fir",
        number: "01",
        eyebrow: "Strong, dependable timber",
        title: "Douglas fir. Built for the work.",
        copy: "A strong, versatile choice for beams, framing, posts and outdoor structures. We can help match the grade, size and finish to your project.",
        tags: ["Structural options", "Long lengths", "Custom cuts"],
    },
    {
        name: "Red cedar",
        number: "02",
        eyebrow: "Naturally suited to the outdoors",
        title: "Red cedar. Made to weather well.",
        copy: "A practical choice for cladding, fencing, garden structures and custom exterior details, with the warm character cedar is known for.",
        tags: ["Exterior projects", "Siding & decking", "Custom profiles"],
    },
    {
        name: "Yellow cedar",
        number: "03",
        eyebrow: "A distinctive timber option",
        title: "Yellow cedar. More possibilities.",
        copy: "Bring yellow cedar into your custom woodwork and outdoor projects. Tell us the application and required sizes so we can confirm suitable material and current availability.",
        tags: ["Custom dimensions", "Outdoor details", "Specialty requests"],
    },
];

const services = [
    { number: "01", eyebrow: "Custom cuts", title: "Boards, posts & long beams.", copy: "Order dimensions that suit your plans, including Douglas fir beams up to 32 feet. Send the thickness, width, length and quantity for each item." },
    { number: "02", eyebrow: "Surface & profile", title: "The finish your build calls for.", copy: "Choose rough-sawn lumber or discuss planed options, S4S and tongue & groove. Let us know if your measurements are rough-cut or final finished dimensions." },
    { number: "03", eyebrow: "Specialty requests", title: "More room for your ideas.", copy: "Ask about maple slabs, kiln drying, planing and moulding for your order. We’ll confirm stock, drying condition, service availability and timing." },
];

const faqs = [
    ["Can you make my requested size?", "Yes. Share the finished dimensions, quantity and intended use, and we’ll confirm what can be milled from available stock."],
    ["Is lumber supplied dry or graded?", "Drying condition and grading vary by material and application. We will confirm the right option before cutting begins."],
    ["Can you arrange delivery?", "Tell us where the lumber is going and we will discuss pickup, loading or delivery options for your order."],
];

function Eyebrow({ children }) {
    return <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#315343]"><span className="h-[2px] w-8 bg-[#eabf20]" />{children}</p>;
}

export default function CustomLumberContent() {
    const [selectedSpecies, setSelectedSpecies] = useState(2);
    const [openFaq, setOpenFaq] = useState(null);
    const currentSpecies = species[selectedSpecies];

    return (
        <div className="bg-[#f6f3e9] text-[#073d28]">
            <section id="services" className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
                <h2 className="max-w-[9ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">Start with<br />the right wood.</h2>
                <p className="self-start pt-2 text-base leading-[1.7] text-[#657369] sm:text-lg lg:mt-4">Douglas fir, red cedar and yellow cedar are at the heart of our lumber offering. Tell us how the wood will be used so we can discuss suitable sizes, finishes and availability.</p>

                <div className="space-y-0 lg:col-start-1">
                    {species.map((item, index) => (
                        <button key={item.name} type="button" onClick={() => setSelectedSpecies(index)} className={`flex w-full items-center gap-6 border-t border-[#073d28]/14 px-5 py-7 text-left transition-colors sm:px-7 ${selectedSpecies === index ? "bg-[#004329] text-white" : "hover:bg-[#eae7db]"}`}>
                            <span className="text-[11px] font-semibold text-current/70">{item.number}</span>
                            <span className="text-2xl tracking-[-0.045em] sm:text-3xl">{item.name}</span>
                            <ArrowUpRight className="ml-auto size-4" />
                        </button>
                    ))}
                </div>

                <article className="relative overflow-hidden bg-[#e9e6da] p-7 sm:p-12 lg:col-start-2 lg:row-start-2">
                    <span className="pointer-events-none absolute right-6 top-0 text-[clamp(8rem,16vw,15rem)] font-normal leading-none tracking-[-0.1em] text-[#073d28]/5">{currentSpecies.number}</span>
                    <Eyebrow>{currentSpecies.eyebrow}</Eyebrow>
                    <h3 className="relative mt-10 max-w-[12ch] text-[clamp(2.5rem,4.3vw,4.6rem)] font-normal leading-[0.98] tracking-[-0.07em]">{currentSpecies.title}</h3>
                    <p className="relative mt-7 max-w-[52ch] text-base leading-[1.7] text-[#647269]">{currentSpecies.copy}</p>
                    <div className="relative mt-7 flex flex-wrap gap-2">{currentSpecies.tags.map((tag) => <span key={tag} className="rounded-full border border-[#073d28]/15 px-3 py-1.5 text-[11px] font-semibold text-[#315343]">{tag}</span>)}</div>
                    <a href="#enquiry" className="relative mt-10 flex items-center justify-between border-t border-[#073d28]/15 pt-6 text-sm font-bold">Discuss your order <ArrowUpRight className="size-4" /></a>
                </article>
                <p className="text-sm leading-relaxed text-[#778278] lg:col-span-2">Species, dimensions and lead times depend on available logs and the requirements of your order.</p>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div><Eyebrow>Cut for your project</Eyebrow><h2 className="mt-8 max-w-[11ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">From rough-sawn to ready for finishing.</h2></div>
                    <p className="self-start pt-2 text-base leading-[1.7] text-[#657369] sm:text-lg lg:mt-7">Custom lumber starts with clear specifications. We’ll confirm the cut size, finished size and surface you need before work begins.</p>
                </div>
                <div className="mt-16 grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.number} className="min-h-[300px] bg-[#e9e6da] p-7 sm:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#315343]">{service.number} / {service.eyebrow}</p><h3 className="mt-10 max-w-[11ch] text-3xl leading-[1.04] tracking-[-0.055em]">{service.title}</h3><p className="mt-7 text-sm leading-[1.7] text-[#68756c]">{service.copy}</p></article>)}</div>
                <div className="mt-16 grid gap-7 md:grid-cols-2">
                    <figure><div className="relative aspect-[1.45/1] overflow-hidden"><Image src="/Images/pageImg/IMG_0311.JPEG" alt="Sawmill equipment beneath a timber frame shelter" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><figcaption className="mt-3 text-xs text-[#728076]">A working mill. Timber we’re proud to put to use.</figcaption></figure>
                    <figure><div className="relative aspect-[1.45/1] overflow-hidden"><Image src="/Images/pageImg/IMG_4855.JPEG" alt="Logs ready for milling" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><figcaption className="mt-3 text-xs text-[#728076]">Every order starts with the material.</figcaption></figure>
                </div>
            </section>

            <section id="enquiry" className="bg-[#eeece2] py-20 sm:py-28 lg:py-36">
                <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
                    <div><Eyebrow>Let’s make a start</Eyebrow><h2 className="mt-8 max-w-[8ch] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.07em]">Send us your cut list.</h2><p className="mt-8 max-w-[52ch] text-base leading-[1.7] text-[#66746a]">Have a drawing, a few measurements or a full material list? Tell us what you need, where it’s going and when you’re hoping to build.</p><ol className="mt-10 divide-y divide-[#073d28]/15 border-y border-[#073d28]/15">{[["Share the details.", "Species, dimensions, quantities and preferred finish."], ["We work through the options.", "Confirm sizes, availability, timing and delivery arrangements."], ["Agree on the order.", "Review the quote and specifications before cutting begins."]].map(([title, copy], index) => <li key={title} className="grid grid-cols-[25px_1fr] gap-4 py-5"><span className="text-xs text-[#52685b]">0{index + 1}</span><div><strong className="text-sm">{title}</strong><p className="mt-2 text-sm text-[#748078]">{copy}</p></div></li>)}</ol></div>
                    <form action="mailto:info@islandbeam.ca" method="post" encType="text/plain" className="bg-[#fbfaf3] p-7 shadow-[0_20px_50px_-40px_rgba(7,61,40,.45)] sm:p-10"><h3 className="text-[clamp(2rem,3vw,3rem)] tracking-[-0.055em]">What are you building?</h3><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold">Your name<input required name="Name" placeholder="Name" className="mt-2 w-full bg-[#eceae1] px-4 py-4 text-sm font-normal outline-none focus:ring-2 focus:ring-[#eabf20]" /></label><label className="text-xs font-semibold">Wood species<select name="Wood species" defaultValue="Yellow cedar" className="mt-2 w-full bg-[#eceae1] px-4 py-4 text-sm font-normal outline-none focus:ring-2 focus:ring-[#eabf20]"><option>Douglas fir</option><option>Red cedar</option><option>Yellow cedar</option></select></label><label className="text-xs font-semibold sm:col-span-2">Dimensions & quantities<textarea required name="Dimensions" rows="3" placeholder="Example: 8” × 8” × 16 ft — 6 pieces" className="mt-2 w-full resize-y bg-[#eceae1] px-4 py-4 text-sm font-normal outline-none focus:ring-2 focus:ring-[#eabf20]" /></label><label className="text-xs font-semibold">Surface / finish<select name="Surface / finish" className="mt-2 w-full bg-[#eceae1] px-4 py-4 text-sm font-normal outline-none focus:ring-2 focus:ring-[#eabf20]"><option>Rough-sawn</option><option>Planed</option><option>S4S</option><option>Tongue & groove</option></select></label><label className="text-xs font-semibold">Preferred timing<input name="Preferred timing" placeholder="When do you need it?" className="mt-2 w-full bg-[#eceae1] px-4 py-4 text-sm font-normal outline-none focus:ring-2 focus:ring-[#eabf20]" /></label><label className="text-xs font-semibold sm:col-span-2">Project location / delivery<input name="Location" placeholder="Town and pickup or delivery preference" className="mt-2 w-full bg-[#eceae1] px-4 py-4 text-sm font-normal outline-none focus:ring-2 focus:ring-[#eabf20]" /></label></div><button type="submit" className="mt-8 inline-flex min-h-[62px] items-center gap-7 rounded-full bg-[#f2c31b] px-7 text-sm font-bold text-[#073d28]">Review my cut list <ArrowUpRight className="size-4" /></button><p className="mt-5 text-xs leading-relaxed text-[#778078]">Review your details, then open an email draft to send to our mill.</p></form>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32"><div className="mx-auto max-w-4xl"><h2 className="text-[clamp(2.5rem,4vw,4rem)] tracking-[-0.065em]">A few useful details.</h2><div className="mt-9 border-t border-[#073d28]/15">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-[#073d28]/15"><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg"><span>{question}</span>{openFaq === index ? <ChevronDown className="size-5 text-[#b18a10]" /> : <Plus className="size-5 text-[#b18a10]" />}</button>{openFaq === index && <p className="max-w-[65ch] pb-6 text-sm leading-[1.7] text-[#68756d]">{answer}</p>}</div>)}</div></div></section>
        </div>
    );
}
