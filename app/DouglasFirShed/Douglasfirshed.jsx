import Link from "next/link";
import Image from "next/image";
import {
  Clock3,
  Folder,
  MapPin,
  TreePine,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Ruler,
  Truck,
  Sparkles,
  Phone
} from "lucide-react";
import Cards from "@/Components/Ui/Cards";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import { journalCards } from "@/lib/DouglasFirShedConst";
import { siteConfig } from "@/lib/siteConfig";

const shedFeatures = [
  {
    icon: TreePine,
    tag: "Native Species",
    title: "100% Coastal Douglas Fir",
    description: "Milled on-site from sustainably sourced Vancouver Island timber with dense grain and natural outdoor resilience.",
  },
  {
    icon: Wrench,
    tag: "Crafted Framework",
    title: "Traditional Joinery & Heavy Bents",
    description: "Built with true timber posts, rafters, and interlocking mortise-and-tenon bents designed to stand for generations.",
  },
  {
    icon: Truck,
    tag: "Skid Mounted",
    title: "Delivered Fully Built or Flat-Packed",
    description: "Constructed on heavy rot-resistant skids for simple delivery, minimal ground prep, and future portability.",
  },
];

const popularModels = [
  {
    name: "The Garden Studio & Retreat",
    dimensions: "10' × 12'",
    sqft: "120 sq ft",
    bestFor: "Art studio, home office, or quiet backyard reading room",
    specs: ["Vaulted timber ceiling", "Large window framing", "Insulation-ready framing", "Cedar or metal roof"],
    popular: true,
  },
  {
    name: "The Heavy Timber Workshop",
    dimensions: "12' × 16'",
    sqft: "192 sq ft",
    bestFor: "Woodworking shop, power equipment, and heavy workbench setup",
    specs: ["Reinforced double-subfloor", "8' wall height clearance", "Extra-wide double doors", "Overhead loft storage"],
    popular: false,
  },
  {
    name: "The Classic Woodshed & Storage",
    dimensions: "8' × 12'",
    sqft: "96 sq ft",
    bestFor: "Seasoned firewood, mowers, bikes, and seasonal equipment",
    specs: ["Air-flow slatted walls", "Heavy skid base", "Overhanging weather eave", "Quick delivery option"],
    popular: false,
  },
];

const stepsData = [
  {
    number: "01",
    title: "Share your vision & site",
    detail: "Tell us what you're building: square footage requirements, door and window placements, and delivery access on Vancouver Island.",
  },
  {
    number: "02",
    title: "Custom milling & pre-fit",
    detail: "We mill each post, beam, and skid in our Comox Valley yard, pre-cutting and test-fitting every joint before finishing.",
  },
  {
    number: "03",
    title: "Delivered ready to position",
    detail: "Your shed arrives fully built on solid skids, positioned directly on your level gravel pad or foundation blocks.",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] ${light ? "text-[#E5A84B]" : "text-[#A86F1C]"}`}>
      <span className="size-2 rounded-full bg-[#E5A84B] ring-4 ring-[#E5A84B]/20" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Douglasfirshed() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#FAF8F5] text-[#09271B] antialiased">
      <ScrollReveal />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        {/* Subtle decorative background glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-[#E5A84B]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div data-reveal="left" className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#09271B]/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#09271B] backdrop-blur-sm shadow-sm">
                <Sparkles className="size-3.5 text-[#E5A84B]" />
                <span>Hand-Crafted in Comox Valley, BC</span>
              </div>

              <h1 className="text-balance text-4xl font-black tracking-tight leading-[1.05] sm:text-5xl lg:text-6xl text-[#09271B]">
                Douglas Fir Sheds: <br className="hidden sm:inline" />
                <span className="italic font-serif font-medium text-[#B87A24]">
                  Built Solid.
                </span>{" "}
                Raised to Endure.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#506056] sm:text-lg">
                Milled from coastal Vancouver Island timber, our sheds combine heavy structural bents, traditional joinery, and skid-mounted portability. Built for garden studios, workshops, and lifetime backyard storage.
              </p>

              {/* Quick Specs Pill Row */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-[#09271B]/10 py-4">
                {[
                  { label: "Wood", val: "Coastal Fir" },
                  { label: "Base", val: "Heavy Skids" },
                  { label: "Frame", val: "Timber Post & Beam" },
                  { label: "Delivery", val: "Island-Wide" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A86F1C]">{item.label}</span>
                    <span className="text-sm font-extrabold text-[#09271B]">{item.val}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/request-quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E5A84B] px-7 py-3.5 text-sm font-bold tracking-wide text-[#09271B] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8983e] hover:shadow-lg hover:shadow-[#E5A84B]/25 active:translate-y-0"
                >
                  <span>Request a shed quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {siteConfig?.phone && (
                  <a
                    href={siteConfig.phoneLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#09271B]/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#09271B] transition-all duration-300 hover:border-[#09271B]/40 hover:bg-white"
                  >
                    <Phone className="size-4 text-[#A86F1C]" />
                    <span>Talk with our builder</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Feature Photo */}
            <div data-reveal="right" className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-[#09271B]/15 bg-stone-900 shadow-2xl transition-all duration-500 hover:shadow-[0_28px_50px_-20px_rgba(9,39,27,0.4)]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
                  <Image
                    src="/Images/pageImg/img8.png"
                    alt="Hand-crafted Douglas fir garden shed on skids"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#09271B]/90 p-4 text-white backdrop-blur-md">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A84B]">
                    Built Ready-To-Place
                  </span>
                  <p className="mt-1 text-sm font-bold text-white leading-snug">
                    Heavy-duty skid frame eliminates the need for expensive poured concrete foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shed Craft Features */}
      <section className="border-t border-[#09271B]/10 bg-[#F4EFE6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Engineered for the West Coast</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight sm:text-4xl lg:text-5xl text-[#09271B]">
              A solid wood shed, built around your life.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#506056] sm:text-lg">
              From backyard studios and potting sheds to heavy-equipment workshops, every shed is built with genuine timber framing tailored to the Island climate.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shedFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-reveal
                  style={{ "--d": `${index * 120}ms` }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#09271B]/10 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A84B]/70 hover:shadow-xl"
                >
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#A86F1C]">
                      {item.tag}
                    </span>
                    <div className="mt-4 grid size-12 place-items-center rounded-xl bg-[#09271B] text-[#E5A84B] transition-colors duration-300 group-hover:bg-[#E5A84B] group-hover:text-[#09271B]">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[#09271B]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#506056] sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#09271B]/10 pt-4 text-xs font-bold uppercase tracking-wider text-[#09271B] transition-colors group-hover:text-[#A86F1C]">
                    Milled at our yard ↗
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Joinery Showcase Section */}
      <section className="w-full max-w-full overflow-hidden bg-[#09271B] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Image */}
            <div data-reveal="left" className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl border border-white/15 bg-stone-900 shadow-2xl">
                <Image
                  src="/Images/DFSImg/img2.png"
                  alt="Traditional joinery and carefully prepared Douglas fir timbers in the workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/80">
                  <span className="font-semibold uppercase tracking-wider text-[#E5A84B]">Comox Valley Mill Yard</span>
                  <span>Hand Mortise &amp; Tenon</span>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div data-reveal="right" className="lg:col-span-6 flex flex-col justify-center">
              <Eyebrow light>Timber Frame Craftsmanship</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight sm:text-4xl lg:text-5xl text-white">
                Crafted in the Mill. <br />
                Raised on Your Land.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#B7CDBF] sm:text-lg">
                Unlike mass-produced kit sheds made with thin 2x4 framing, each Douglas fir shed we produce features heavy timber structural posts and rafters cut from solid coastal logs.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-white/15 pt-6 text-sm sm:text-base text-white">
                {[
                  "True 4x4, 4x6, and 6x6 Douglas fir structural bents",
                  "Interlocking traditional joinery pre-fit in the mill before delivery",
                  "Rot-resistant pressure-treated or native cedar skids on the ground",
                  "Shipped fully assembled or as a labeled, pre-cut frame package",
                ].map((spec) => (
                  <div key={spec} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#E5A84B]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E5A84B] px-6 py-3 text-sm font-bold tracking-wide text-[#09271B] transition-all duration-300 hover:bg-[#d8983e]"
                >
                  <span>Inquire about custom sizing</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Shed Configurations */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Popular Shed Setups</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight sm:text-4xl text-[#09271B]">
              Standard sizes or custom builds.
            </h2>
            <p className="mt-3 text-base text-[#506056]">
              Choose from our most requested layout footprints, or talk with our sawmill team about custom lengths, overhangs, and window openings.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {popularModels.map((model, idx) => (
              <div
                key={model.name}
                data-reveal
                style={{ "--d": `${idx * 120}ms` }}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${
                  model.popular
                    ? "border-[#E5A84B] bg-white shadow-xl ring-2 ring-[#E5A84B]/20"
                    : "border-[#09271B]/15 bg-white/70 hover:bg-white hover:shadow-lg"
                }`}
              >
                {model.popular && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-[#E5A84B] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#09271B]">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-baseline justify-between border-b border-[#09271B]/10 pb-4">
                    <span className="text-2xl font-black text-[#09271B]">{model.dimensions}</span>
                    <span className="text-xs font-semibold text-[#A86F1C] uppercase tracking-wider">{model.sqft}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[#09271B]">{model.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#506056]">{model.bestFor}</p>

                  <div className="mt-6 space-y-2.5 border-t border-[#09271B]/10 pt-4 text-xs sm:text-sm text-[#09271B]/90">
                    {model.specs.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-[#E5A84B]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#09271B]/10">
                  <Link
                    href={`/request-quote?model=${encodeURIComponent(model.name)}`}
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      model.popular
                        ? "bg-[#09271B] text-[#E5A84B] hover:bg-[#143e2c]"
                        : "border border-[#09271B]/20 bg-transparent text-[#09271B] hover:bg-[#09271B] hover:text-white"
                    }`}
                  >
                    <span>Request pricing</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="border-t border-[#09271B]/10 bg-[#F4EFE6] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <Eyebrow>The Ordering Process</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight sm:text-4xl text-[#09271B]">
              From first idea to a raised shed on your property.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stepsData.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl border border-[#09271B]/10 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <span className="grid size-11 place-items-center rounded-xl bg-[#09271B] font-mono text-sm font-bold text-[#E5A84B]">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#09271B]">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#506056] sm:text-base">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="relative overflow-hidden bg-[#071D14] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div data-reveal className="max-w-2xl">
              <Eyebrow light>Start a Conversation</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight leading-tight sm:text-4xl lg:text-5xl">
                Let’s plan your Douglas fir shed.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#D8E0DB] sm:text-lg">
                Tell us your preferred dimensions, location, and storage requirements. We&apos;ll confirm current timber availability and delivery lead times for your property.
              </p>
              <p className="mt-4 font-mono text-xs text-[#A4BFB1]">
                5110 Dove Crk Rd, Comox Valley, BC V9J 1P4
              </p>
            </div>

            <div data-reveal="zoom" className="flex flex-col gap-3 sm:flex-row sm:items-center shrink-0 w-full sm:w-auto">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5A84B] px-8 py-4 text-sm font-extrabold text-[#071D14] shadow-lg transition-all duration-300 hover:bg-[#d8983e] active:scale-[0.98]"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="size-4" />
              </Link>
              {siteConfig?.phone && (
                <a
                  href={siteConfig.phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <Phone className="size-4 text-[#E5A84B]" />
                  <span>{siteConfig.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Shed & Timber Journal Posts */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <Eyebrow>From the Timber Yard</Eyebrow>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#09271B] sm:text-4xl">
                Recent Journal Entries
              </h2>
            </div>
            <Link
              href="/About"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A86F1C] hover:text-[#09271B] transition-colors"
            >
              <span>Explore sawmill story</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <Cards
            type="imagegrid"
            items={journalCards}
            className="!px-0 !py-0"
            gridClassName="!grid-cols-1 !gap-6 md:!grid-cols-3"
          />
        </div>
      </section>
    </main>
  );
}
