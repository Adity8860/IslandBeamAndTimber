import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TreePine,
  ShieldCheck,
  Users,
  Leaf,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Ruler,
  Truck,
  Award,
  Flame
} from "lucide-react";
import Cards from "@/Components/Ui/Cards";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import {
  storyData,
  approachData,
  visionCards,
  millMilestones,
  valuesPillars
} from "@/lib/AboutConstant";
import { siteConfig } from "@/lib/siteConfig";

const delay = (ms) => ({ "--d": `${ms}ms` });

function Eyebrow({ children, light = false }) {
  return (
    <div className={`mb-3.5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] ${light ? "text-[#E5A84B]" : "text-[#A86F1C]"}`}>
      <span className="size-2 rounded-full bg-[#E5A84B] ring-4 ring-[#E5A84B]/20" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#FAF8F5] text-[#142316] antialiased">
      <ScrollReveal />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        {/* Soft background ambient gradient */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-[#E5A84B]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Copy */}
          <div className="relative mb-10 flex flex-col items-start justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div data-reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#09271B]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#09271B] shadow-sm">
                  <Sparkles className="size-3.5 text-[#E5A84B]" />
                  <span>Comox Valley Lumber Yard &amp; Sawmill</span>
                </div>
              </div>

              <h1
                data-reveal
                style={delay(100)}
                className="font-sans text-4xl font-black leading-[1.02] tracking-tight text-[#142316] sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Deep Roots. <br />
                <span className="italic font-serif font-medium text-[#B87A24]">
                  A Lasting Vision.
                </span>
              </h1>

              <p
                data-reveal
                style={delay(200)}
                className="mt-5 max-w-2xl text-base leading-relaxed text-[#506056] sm:text-lg"
              >
                At Island Beam &amp; Timber, we share an enduring passion for wood, a deep respect for Vancouver Island&apos;s working forests, and a mission to supply generational timber for our community. Locally owned, operated with integrity, and grounded in hands-on woodcraft.
              </p>
            </div>

            {/* Trees SVG illustration badge */}
            <div
              data-reveal="right"
              style={delay(250)}
              className="hidden lg:flex flex-col items-center justify-center rounded-2xl  border-[#09271B]/1 bg-[#F4EFEA]/1 p-5 "
            >
              <Image
                src="/Icons/Trees.svg"
                alt="Island trees icon"
                width={120}
                height={100}
                className="trees-sway h-65 w-100 object-contain"
                priority
              />
              <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#A86F1C]">
                Vancouver Island, BC
              </span>
            </div>
          </div>

          {/* Quick Credential Badges */}
          <div
            data-reveal
            style={delay(150)}
            className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-[#09271B]/10 py-3.5"
          >
            {[
              { label: "Operation", val: "Locally Owned & Milled" },
              { label: "Timber Origin", val: "100% Vancouver Island" },
              { label: "Beam Capacity", val: "Custom Spans up to 32 ft" },
              { label: "Finishes", val: "Rough Sawn, Planed & S4S" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A86F1C]">
                  {badge.label}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#142316]">
                  {badge.val}
                </span>
              </div>
            ))}
          </div>

          {/* Cinematic Hero Panoramic Photo */}
          <div
            data-reveal="zoom"
            style={delay(220)}
            className="group relative aspect-[16/9] sm:aspect-[2.1/1] w-full overflow-hidden rounded-2xl border border-[#09271B]/10 bg-stone-900 shadow-xl"
          >
            <Image
              src="/Images/pageImg/img7.png"
              alt="Timber beams stacked and freshly milled at the Vancouver Island sawmill"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="img-settle object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Floating Banner Tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto max-w-lg rounded-xl border border-white/20 bg-[#09271B]/90 p-4 sm:p-5 text-white backdrop-blur-md shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5A84B]">
                Comox Valley Sawmill Facility
              </span>
              <p className="mt-1 text-sm sm:text-base font-bold leading-snug text-white">
                Supplying premium coastal Douglas fir, Western red cedar, and yellow cedar for Pacific Northwest builders since day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Stats & Milestones Bar */}
      <section aria-label="Sawmill milestones at a glance" className="w-full bg-[#09271B] text-white py-10 sm:py-14 border-y border-[#E5A84B]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {millMilestones.map((milestone, idx) => (
              <div
                key={milestone.label}
                data-reveal
                style={delay(idx * 90)}
                className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : "sm:pr-8"}`}
              >
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#E5A84B] tracking-tight leading-none">
                  {milestone.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {milestone.label}
                </span>
                <p className="mt-1 text-xs text-[#A4BFB1] leading-relaxed">
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 01: Our Story */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Story Text */}
            <div data-reveal="left" className="lg:col-span-6">
              <Eyebrow>{storyData.label}</Eyebrow>
              <h2 className="text-3xl font-black tracking-tight leading-tight sm:text-4xl lg:text-5xl text-[#09271B]">
                {storyData.title} <br />
                <span className="italic font-serif font-medium text-[#B87A24]">
                  {storyData.subtitle}
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#506056] sm:text-lg">
                {storyData.paragraphs.map((p, index) => (
                  <p key={index} className={index === 0 ? "font-medium text-[#142316] text-lg sm:text-xl leading-relaxed" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Quote Block */}
              <div className="mt-8 rounded-xl border-l-4 border-[#E5A84B] bg-[#F4EFEA] p-5 sm:p-6">
                <p className="text-sm sm:text-base font-semibold italic text-[#142316] leading-relaxed">
                  &ldquo;We don&apos;t just cut wood; we mill the structural foundation for the places where Island families live, gather, and build their lives.&rdquo;
                </p>
                <span className="mt-2 block text-xs font-bold uppercase tracking-widest text-[#A86F1C]">
                  — The Island Beam &amp; Timber Team
                </span>
              </div>
            </div>

            {/* Right Story Image */}
            <div data-reveal="right" className="lg:col-span-6">
              <div className="group relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#09271B]/15 bg-stone-900 shadow-xl">
                <Image
                  src={storyData.image.src}
                  alt={storyData.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                  <span className="font-bold uppercase tracking-wider text-[#E5A84B]">
                    Vancouver Island Forest Yard
                  </span>
                  <span className="font-mono text-white/80">
                    5110 Dove Creek Rd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02: Our Approach & Species Craft */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F4EFEA] border-t border-[#09271B]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Image (Reversed) */}
            <div data-reveal="left" className="order-2 lg:order-1 lg:col-span-6">
              <div className="group relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#09271B]/15 bg-stone-900 shadow-xl">
                <Image
                  src={approachData.image.src}
                  alt={approachData.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                  <span className="font-bold uppercase tracking-wider text-[#E5A84B]">
                    Sawmill Workshop
                  </span>
                  <span className="font-medium text-white/80">
                    Hand-Shaped Douglas Fir
                  </span>
                </div>
              </div>
            </div>

            {/* Right Approach Text */}
            <div data-reveal="right" className="order-1 lg:order-2 lg:col-span-6">
              <Eyebrow>{approachData.label}</Eyebrow>
              <h2 className="text-3xl font-black tracking-tight leading-tight sm:text-4xl lg:text-5xl text-[#09271B]">
                {approachData.title} <br />
                <span className="italic font-serif font-medium text-[#B87A24]">
                  {approachData.subtitle}
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#506056] sm:text-lg">
                {approachData.paragraphs.map((p, index) => (
                  <p key={index} className={index === 0 ? "font-medium text-[#142316] text-lg sm:text-xl leading-relaxed" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Three Native Species Breakdown */}
              <div className="mt-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A86F1C]">
                  Native Species We Mill:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Douglas Fir", desc: "Structural framing, heavy posts, 32ft beams." },
                    { name: "Western Red Cedar", desc: "Natural decay resistance, siding, decks." },
                    { name: "Yellow Cedar", desc: "Marine density, fine joinery, rot immunity." },
                  ].map((species) => (
                    <div
                      key={species.name}
                      className="rounded-xl border border-[#09271B]/10 bg-white p-3.5 shadow-sm"
                    >
                      <span className="block text-sm font-extrabold text-[#09271B]">
                        {species.name}
                      </span>
                      <span className="mt-1 block text-xs text-[#506056] leading-snug">
                        {species.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 03: Our Core Pillars & Vision */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Mission */}
            <div data-reveal="left" className="flex flex-col justify-center lg:col-span-5">
              <Eyebrow>OUR GUIDING STANDARDS</Eyebrow>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#09271B] sm:text-4xl lg:text-5xl">
                Local Timber. <br />
                <span className="italic font-serif font-medium text-[#B87A24]">
                  Lasting Impact.
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#506056] sm:text-lg">
                <p>
                  Our mission is to strengthen the Vancouver Island timber trade while practicing thoughtful stewardship of our regional resources. We believe in direct local partnerships, zero-waste processing, and building value that endures.
                </p>
                <p>
                  When you work with Island Beam &amp; Timber, your purchase directly supports regional forest workers, sawyers, and local trades.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#09271B]/10">
                <Link
                  href="/request-quote"
                  className="group inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#09271B] hover:text-[#B87A24] transition-colors"
                >
                  <span>Discuss your custom order</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Interactive Pillar Cards */}
            <div data-reveal="right" style={delay(150)} className="lg:col-span-7">
              <Cards
                type="services"
                items={visionCards}
                className="!p-0"
                gridClassName="!grid-cols-1 sm:!grid-cols-2 gap-5 sm:gap-6"
                itemClassName="min-h-[220px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Island Beam & Timber (3 Principles) */}
      <section className="bg-[#F4EFEA] py-16 sm:py-20 border-t border-[#09271B]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>THE SAWMILL ADVANTAGE</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-[#09271B] sm:text-4xl">
              Why builders &amp; craftspeople choose us.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {valuesPillars.map((item, idx) => (
              <div
                key={item.title}
                data-reveal
                style={delay(idx * 100)}
                className="flex flex-col justify-between rounded-2xl border border-[#09271B]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#E5A84B]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#09271B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#506056]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA & Yard Visit Invitation */}
      <section className="relative overflow-hidden bg-[#071D14] py-16 sm:py-24 text-white">
        {/* Subtle ambient light */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#E5A84B]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Action Invitation */}
            <div data-reveal className="lg:col-span-7">
              <Eyebrow light>GET IN TOUCH</Eyebrow>
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl text-white">
                Let&apos;s Build Something <br className="hidden sm:inline" />
                Together.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D8E0DB] sm:text-lg">
                Whether you&apos;re planning a home timber frame, a commercial pavilion, custom cedar siding, or just need guidance on wood species, we&apos;re here to help make it happen.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/request-quote"
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-[#E5A84B] px-8 py-4 font-bold text-[#071D14] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8983e] active:translate-y-0"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {siteConfig?.phone && (
                  <a
                    href={siteConfig.phoneLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                  >
                    <Phone className="size-4 text-[#E5A84B]" />
                    <span>{siteConfig.phone}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: Yard Information Card */}
            <div data-reveal="right" style={delay(150)} className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-8 backdrop-blur-md shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E5A84B]">
                  Yard Location &amp; Hours
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Island Beam &amp; Timber Ltd.
                </h3>

                <div className="mt-6 space-y-4 text-sm text-[#D8E0DB]">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="size-5 shrink-0 text-[#E5A84B] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Mill Yard Address:</p>
                      <p className="text-[#A4BFB1]">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="size-5 shrink-0 text-[#E5A84B] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Telephone:</p>
                      <a href={siteConfig.phoneLink} className="text-[#E5A84B] hover:underline">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="size-5 shrink-0 text-[#E5A84B] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Direct Email:</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-[#A4BFB1] hover:text-white transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
                    <Clock className="size-5 shrink-0 text-[#E5A84B] mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Operating Hours:</p>
                      <p className="text-[#A4BFB1]">Monday – Friday: 8:00 AM – 4:30 PM</p>
                      <p className="text-xs text-[#A4BFB1]/80 mt-0.5">Yard visits &amp; slab inspections welcome</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import StorySection from "@/Components/Ui/StorySection";
// import Cards from "@/Components/Ui/Cards";
// import ScrollReveal from "@/Components/Ui/ScrollReveal";
// import { storyData, approachData, visionCards } from "@/lib/AboutConstant";
// import { siteConfig } from "@/lib/siteConfig";

// const delay = (ms) => ({ "--d": `${ms}ms` });

// export default function About() {
//   return (
//     <>
//       <ScrollReveal />

//       <section className="bg-[#FAF8F5] px-5 pb-12 pt-24 text-[#1B2A1E] sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative mb-10 flex flex-col items-start justify-between gap-10 sm:mb-12 lg:mb-14 lg:flex-row lg:gap-12">
//             <div className="z-10 max-w-2xl">
//               <div data-reveal className="mb-4 flex items-center gap-3 sm:mb-5">
//                 <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-[#1B2A1E]">
//                   ABOUT US
//                 </span>
//                 <span className="eyebrow-line inline-block w-6 h-[2px] bg-[#f39c12]" />
//               </div>

//               <h1
//                 data-reveal
//                 style={delay(100)}
//                 className="mb-5 font-sans text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-[#142316] sm:mb-6 sm:text-5xl lg:text-6xl"
//               >
//                 Deep Roots.
//                 <br />A Lasting Vision.
//               </h1>

//               <p
//                 data-reveal
//                 style={delay(220)}
//                 className="max-w-lg text-base font-normal leading-relaxed text-[#556056] sm:text-lg"
//               >
//                 At Island Beam & Timber, we share a passion for wood, a respect
//                 for Vancouver Island&apos;s forests, and a vision to build
//                 something lasting for our community.
//               </p>
//             </div>

//             <div
//               data-reveal="right"
//               style={delay(300)}
//               className="absolute right-0 top-0 hidden pointer-events-none select-none opacity-80 sm:block"
//             >
//               <Image
//                 src="/Icons/Trees.svg"
//                 alt=""
//                 width={240}
//                 height={200}
//                 className="trees-sway h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-54 lg:w-65"
//                 priority
//               />
//             </div>
//           </div>

//           <div
//             data-reveal="zoom"
//             style={delay(200)}
//             className="relative aspect-[2.13/1] w-full overflow-hidden shadow-sm"
//           >
//             <Image
//               src="/Images/pageImg/img7.png"
//               alt="Freshly milled timber being moved through a forest sawmill yard"
//               fill
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="img-settle object-cover object-center"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#F7F3EB] text-[#09271B]">
//         <StorySection data={storyData} />
//       </section>
//       <section className="bg-[#F7F3EB] text-[#09271B]">
//         <StorySection data={approachData} reverse={true} />
//       </section>

//       <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
//         <div className="mx-auto max-w-7xl mt-2">
//           <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
//             {/* Left Column: Heading and Text */}
//             <div data-reveal="left" className="flex flex-col justify-center lg:col-span-5">
//               {/* Eyebrow Label */}
//               <div className="mb-4 flex items-center gap-3 sm:mb-5">
//                 <span className="text-xs font-bold tracking-widest text-slate-900 uppercase">
//                   OUR VISION
//                 </span>
//                 <span className="eyebrow-line w-9 h-[2px] bg-[#D4A359]" />
//               </div>
//               {/* Title */}
//               <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:mb-8 sm:text-5xl lg:text-6xl">
//                 Local Timber. <br />
//                 Lasting Impact.
//               </h2>
//               {/* Content Paragraphs */}
//               <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:space-y-6 sm:text-lg">
//                 <p>
//                   Our mission is to strengthen the local timber industry and
//                   give back to the Vancouver Island community. We believe in
//                   responsible forestry, local partnerships, and creating value
//                   that lasts for generations.
//                 </p>
//                 <p>
//                   By supporting local jobs, sustainable practices, and community
//                   projects, we aim to make a positive and lasting impact — today
//                   and for the future.
//                 </p>
//               </div>
//             </div>
//             {/* Right Column: 2x2 Grid using Card Component */}
//             <div data-reveal="right" style={delay(150)} className="lg:col-span-7">
//               <Cards
//                 type="services"
//                 items={visionCards}
//                 className="!p-0"
//                 gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6"
//                 itemClassName="min-h-[220px] sm:min-h-[238px]"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#0B2419] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
//           <div data-reveal className="lg:col-span-7">
//             <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E5A83B] sm:mb-5">
//               Get in touch
//             </p>
//             <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
//               Let&apos;s Build Something
//               <br className="hidden sm:block" /> Together.
//             </h2>
//             <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:mt-7 sm:text-lg">
//               Whether you&apos;re planning a home project, a commercial build,
//               or just have a question about our products, we&apos;re here to
//               help.
//             </p>
//             <Link
//               href="/request-quote"
//               className="btn-shine group mt-10 inline-flex items-center gap-3 rounded-full bg-[#E5A83B] px-8 py-4 font-bold text-[#101810] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0B84E] hover:shadow-xl hover:shadow-[#E5A83B]/20 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
//             >
//               Get a Quote{" "}
//               <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div>

//           <address className="flex flex-col gap-6 not-italic lg:col-span-5 lg:pl-10">
//             <a
//               data-reveal
//               style={delay(100)}
//               href={siteConfig.phoneLink}
//               className="group flex items-center gap-4 text-base text-slate-200 transition-all duration-300 hover:translate-x-1.5 hover:text-white sm:text-lg"
//             >
//               <svg
//                 className="h-5 w-5 shrink-0 text-[#E5A83B] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
//                 />
//               </svg>
//               {siteConfig.phone}
//             </a>
//             <a
//               data-reveal
//               style={delay(200)}
//               href="mailto:info@islandbeamandtimber.com"
//               className="group flex items-center gap-4 text-base text-slate-200 transition-all duration-300 hover:translate-x-1.5 hover:text-white sm:text-lg"
//             >
//               <svg
//                 className="h-5 w-5 shrink-0 text-[#E5A83B] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <rect x="3" y="5" width="18" height="14" rx="2" />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m3 7 9 6 9-6"
//                 />
//               </svg>
//               {siteConfig?.email}
//             </a>
//             <div
//               data-reveal
//               style={delay(300)}
//               className="group flex items-center gap-4 text-base text-slate-200 transition-all duration-300 hover:translate-x-1.5 sm:text-lg"
//             >
//               <svg
//                 className="h-5 w-5 shrink-0 text-[#E5A83B] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
//                 />
//                 <circle cx="12" cy="10" r="2.5" />
//               </svg>
//               {siteConfig.address}
//             </div>
//           </address>
//         </div>
//       </section>
//     </>
//   );
// }
