import AboutSawmill from "@/Components/Ui/AboutSawmill";
import Card from "@/Components/Ui/Cards";
import Slider from "@/Components/Ui/Slider";
import Image from "next/image";
import { aboutSawmillData, timberGalleryData, faqData } from "@/lib/pageConstant";
import TimberGallery from "@/Components/Ui/TimberGallery";
import FAQSection from "@/Components/Ui/FAQ";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import { SLIDES, SERVICE_CARDS } from "@/lib/pageConstant";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowUpRight } from "lucide-react";

const lumberStats = [
  { value: "Up to 32 ft", label: "Custom beam lengths" },
  { value: <>Three core<br className="hidden sm:block" /> species</>, label: "Douglas fir · red & yellow cedar" },
  { value: <>Rough to<br className="hidden sm:block" /> finished</>, label: "Lumber for your project" },
  { value: "Locally owned", label: "Here on Vancouver Island" },
];

const tickerItems = [
  "Custom beams up to 32 ft",
  "Milled on Vancouver Island",
  "Douglas fir",
  "Red cedar",
  "Yellow cedar",
];

const delay = (ms) => ({ "--d": `${ms}ms` });

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <section className="w-full max-w-full overflow-hidden">
        <Slider slides={SLIDES} />
      </section>

      <section aria-label="Our lumber at a glance" className="w-full max-w-full overflow-hidden bg-[#eebf21] text-[#0b1a12]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-2 divide-x divide-black/10 px-4 py-5 sm:grid-cols-4 sm:px-6 sm:py-7 md:px-8">
          {lumberStats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              style={delay(index * 100)}
              className={`${index > 1 ? "border-t border-black/10 sm:border-t-0" : ""} group px-3 py-2 transition-colors duration-300 hover:bg-black/[0.04] sm:px-4 md:px-6`}
            >
              <p className="text-lg font-extrabold leading-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-xl md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.08em] sm:text-[9px]">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-full overflow-hidden bg-[#0b2117] py-2.5 text-[#e8a923] sm:py-3" aria-label="Lumber species and services">
          <div className="lumber-ticker flex w-max items-center text-[8px] font-bold uppercase tracking-[0.25em] sm:text-[9px]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-6 px-3 sm:gap-8 sm:px-4 md:gap-10" aria-hidden={copy === 1}>
                {tickerItems.map((item, index) => (
                  <span key={item} className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    {item}
                    {index < tickerItems.length - 1 && <span aria-hidden="true" className="text-white/40">✳</span>}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our lumber */}
      <section id="our-lumber" className="w-full max-w-full overflow-hidden bg-[#f5f2e9] py-14 px-4 sm:px-6 sm:py-16 md:px-8 lg:px-6 lg:py-28 scroll-mt-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div data-reveal className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#0E2117] uppercase sm:text-xs">
                  OUR LUMBER
                </span>
              </div>
              <h2 className="text-3xl    text-[#173b28] tracking-tight leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl break-words">
                The right wood.<br />
                A world of possibilities.
              </h2>
            </div>

            {/* Right: Description */}
            <div data-reveal style={delay(150)} className="max-w-md lg:pb-2">
              <p className="text-[#506056] text-sm leading-relaxed sm:text-base">
                Start with your species, then tell us the dimensions, quantity and finish you need. We&apos;ll help you work through the options and confirm availability.
              </p>
            </div>
          </div>

          <div data-reveal style={delay(100)}>
            <Card type="timber" variant="editorial" className="!px-0" />
          </div>
        </div>
      </section>

      {/* --- Fir Beam Specialists Section --- */}
      <section className="w-full max-w-full overflow-hidden bg-[#003F2A] py-14 px-4 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28 text-[#F5F2E9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column: Image with Overlay Badge */}
          <div data-reveal className="lg:col-span-6 relative group overflow-hidden">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] bg-stone-900 border border-white/10 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/Images/pageImg/IMG_0280.JPEG"
                alt="Sawmill yard with lumber beams"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />

              {/* Floating Mill Badge at Bottom-Left */}
              <div data-reveal className="absolute bottom-4 left-4 rounded-full bg-[#F5F2E9] px-4 py-3 shadow-lg sm:bottom-6 sm:left-6 sm:px-5 sm:py-3.5">
                <span className="text-[9px] font-medium tracking-[0.16em] text-[#073D2B] uppercase sm:text-[10px]">
                  REAL TIMBER. CUT AT OUR MILL.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Stat Counter */}
          <div data-reveal className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="eyebrow-line w-8 h-[2px] bg-[#F2C21A]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#F5F2E9] uppercase sm:text-xs">
                FIR BEAM SPECIALISTS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-sans text-4xl font-normal text-[#F5F2E9] tracking-[-0.055em] leading-[0.98] sm:text-5xl md:text-6xl lg:text-[4.5rem] break-words">
              Big ideas deserve<br />
              the right timber.
            </h2>

            {/* Description */}
            <p className="mt-5 text-[#F5F2E9] text-sm leading-[1.65] max-w-xl sm:mt-7 sm:text-base">
              From a single feature beam to a full timber order, we cut around your
              project. Custom dimensions and long lengths give you more flexibility
              when planning posts, beams and exposed timber details.
            </p>

            {/* Stat: 32 ft Highlight */}
            <div className="mt-8 border-t border-white/20 pt-6 flex items-center gap-4 sm:mt-9 sm:pt-7 sm:gap-5 md:gap-6">
              <span className="font-sans font-normal text-6xl text-[#F2C21A] tracking-[-0.06em] leading-none sm:text-7xl md:text-[7rem]">
                32 ft
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-[#F5F2E9] leading-snug sm:text-sm">
                  Beam lengths up to 32 feet.
                </span>
                <span className="text-xs text-[#F5F2E9] mt-0.5 sm:text-sm">
                  Ask us about your required size.
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="/Contact#enquiry"
                className="btn-shine group mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F2C21A] hover:bg-[#FFD12B] text-[#073D2B] font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-lg active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2C21A] sm:px-8 sm:py-4"
              >
                <span>Send us your cut list</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Products & milling services */}
      <section className="w-full max-w-full overflow-hidden bg-[#f5f2e9] py-14 px-4 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div data-reveal className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#0E2117] uppercase sm:text-xs">
                  PRODUCTS & MILLING SERVICES
                </span>
              </div>
              <h2 className="text-3xl    text-[#173b28] tracking-tight leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl break-words">
                More ways to make<br />
                your project happen.
              </h2>
            </div>

            {/* Right: Description */}
            <div data-reveal style={delay(150)} className="max-w-md lg:pb-2">
              <p className="text-[#506056] text-sm leading-relaxed sm:text-base">
                Whether you need the character of rough-sawn
                wood or a smoother finished surface, let&apos;s talk
                through what your project calls for.
              </p>
            </div>
          </div>

          <div data-reveal style={delay(100)}>
            <Card type="services" items={SERVICE_CARDS} variant="editorial" className="!px-0 !py-0" />
          </div>
        </div>
      </section>

      <section className="w-full max-w-full overflow-hidden">
        <AboutSawmill data={aboutSawmillData} />
      </section>

      <section className="w-full max-w-full overflow-hidden">
        <TimberGallery data={timberGalleryData} />
      </section>

      {/* FAQ */}
      <section className="w-full max-w-full overflow-hidden bg-[#F2EEE6] py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
          <header data-reveal className="mb-10 sm:mb-12 md:mb-14">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-5 bg-[#E8A923]" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#09271B] sm:text-xs">
                Good questions. Straight answers.
              </p>
            </div>
            <h2 className="break-words text-[clamp(3rem,6vw,5.5rem)] font-normal leading-[1.04] tracking-[-0.055em] text-[#173D2C]">
              Before your next order.
            </h2>
          </header>
          <div data-reveal style={delay(120)}>
            <FAQSection data={faqData} />
          </div>
        </div>
      </section>

      {/* Garden sheds */}
      <section className="w-full overflow-hidden bg-[#F4F2E9] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl overflow-hidden lg:grid-cols-2">
          <div data-reveal className="group relative h-[300px] overflow-hidden sm:h-[420px] lg:h-[620px]">
            <Image
              src="/Images/pageImg/IMG_5063.JPEG"
              alt="Premium Douglas Fir backyard garden shed"
              width={800}
              height={300}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <div data-reveal className="flex flex-col justify-center bg-[#EAE7DC] px-7 py-10 sm:px-10 sm:py-12 lg:px-[8.5%] lg:py-16">
            <div data-reveal className="mb-7 flex items-center gap-3">
              <span className="eyebrow-line h-[2px] w-8 bg-[#EEBF21]" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#173D2C] sm:text-xs">
                Also built at our mill
              </p>
            </div>
            <h2 data-reveal className="max-w-[620px] text-[clamp(2.5rem,3.1vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.045em] text-[#173D2C]">
              Premium backyard sheds.<br />Built solid.<br />Delivered to you.
            </h2>
            <p data-reveal className="mt-7 max-w-[620px] text-sm leading-[1.65] text-[#173D2C] sm:text-base">
              Make room for tools, garden gear and everyday storage with a solid wood shed built on skids. Choose from available ready-to-go sheds or talk to us about a custom size and delivery to your property.
            </p>
            <a data-reveal
              href="/GoldenShed"
              className="btn-shine group mt-7 inline-flex min-h-[72px] w-fit items-center gap-8 rounded-full bg-[#EEBF21] px-7 text-sm font-bold text-[#003C24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5CC3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003C24] sm:px-8"
            >
              Explore garden sheds
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to action */}

      <section id="enquiry" className="relative w-full overflow-hidden bg-[#003C24] px-4 py-20 text-[#F5F2E9] sm:px-6 sm:py-24 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto flex min-h-[340px] w-full max-w-7xl flex-col items-start justify-center gap-10 lg:min-h-[340px] lg:flex-row lg:items-center lg:justify-between lg:gap-12">

          {/* Left Content */}
          <div className="min-w-0 flex-1">

            {/* Eyebrow */}
            <div data-reveal className="mb-8 flex items-center gap-3">
              <span
                className="h-[2px] w-8 shrink-0 bg-[#EEBF21]"
                aria-hidden="true"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F2E9] sm:text-xs">
                Let&apos;s start with your idea
              </p>
            </div>

            {/* Heading */}
            <h2 data-reveal className="lg:whitespace-nowrap text-[clamp(3.25rem,6.35vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#F5F2E9]">
              What are you building?
            </h2>

            {/* Description */}
            <p data-reveal className="mt-7 max-w-[700px] text-sm leading-relaxed text-[#E1E8E3] sm:text-base">
              Send your species, dimensions, quantities and preferred finish.
              We&apos;ll help you plan the next step and provide a quote for
              your order.
            </p>

            {/* Address */}
            <p data-reveal className="mt-6 text-sm leading-[1.6] text-[#E1E8E3] sm:text-base">
              {siteConfig?.address?.split(", ").map((line, index) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
          </div>

          {/* Right CTA */}
          {/* <a
            data-reveal="zoom"
            style={delay(200)}
            href={`tel:${siteConfig?.phone}`}
            className="btn-shine btn-pulse group inline-flex w-full shrink-0 items-center justify-center gap-8 rounded-full bg-[#EEBF21] px-8 py-5 text-sm font-bold text-[#003C24] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5CC3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEBF21] sm:w-auto sm:min-w-[217px]"
          >
            Call {siteConfig?.phone}

            <span
              aria-hidden="true"
              className="inline-block text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
                 <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="shrink-0"
              />
            </span>
          </a> */}

        </div>
      </section>


    </>
  );
}

