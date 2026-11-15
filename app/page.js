import AboutSawmill from "@/Components/Ui/AboutSawmill";
import Card from "@/Components/Ui/Cards";
import Slider from "@/Components/Ui/Slider";
import Image from "next/image";
import { aboutSawmillData, timberGalleryData, faqData } from "@/lib/pageConstant";
import TimberGallery from "@/Components/Ui/TimberGallery";
import FAQSection from "@/Components/Ui/FAQ";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import { SLIDES } from "@/lib/pageConstant";
import { siteConfig } from "@/lib/siteConfig";

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

      {/* Stats + ticker */}
      <section aria-label="Our lumber at a glance" className="w-full max-w-full overflow-hidden bg-[#e8a923] text-[#0b1a12]">
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
      <section className="w-full max-w-full overflow-hidden bg-[#FAF8F5] py-14 px-4 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div data-reveal className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#0E2117] uppercase sm:text-xs">
                  OUR LUMBER
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#0E2117] tracking-tight leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl break-words">
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
            <Card type="timber" />
          </div>
        </div>
      </section>

      {/* --- Fir Beam Specialists Section --- */}
      <section className="w-full max-w-full overflow-hidden bg-[#0B2519] py-14 px-4 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column: Image with Overlay Badge */}
          <div data-reveal="left" className="lg:col-span-6 relative group overflow-hidden">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-stone-900 border border-white/10 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/Images/pageImg/IMG_0280.JPEG"
                alt="Sawmill yard with lumber beams"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />

              {/* Floating Mill Badge at Bottom-Left */}
              <div className="float-slow absolute bottom-4 left-4 bg-[#081C13]/90 border border-[#E5A84B]/40 px-3 py-2 backdrop-blur-md shadow-lg transition-colors duration-300 group-hover:border-[#E5A84B] sm:bottom-6 sm:left-6 sm:px-4 sm:py-2.5">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#E5A84B] uppercase sm:text-xs">
                  REAL TIMBER. CUT AT OUR MILL.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Stat Counter */}
          <div data-reveal="right" className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#E5A84B] uppercase sm:text-xs">
                FIR BEAM SPECIALISTS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-black text-white tracking-tight leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl break-words">
              Big ideas deserve<br />
              the right timber.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[#A4BFB1] text-sm leading-relaxed max-w-xl sm:mt-6 sm:text-base md:text-lg">
              From a single feature beam to a full timber order, we cut around your
              project. Custom dimensions and long lengths give you more flexibility
              when planning posts, beams and exposed timber details.
            </p>

            {/* Stat: 32 ft Highlight */}
            <div className="mt-6 flex items-baseline gap-3 sm:mt-8 sm:gap-4 md:gap-6">
              <span className="text-4xl font-black text-[#E5A84B] tracking-tight leading-none sm:text-5xl md:text-6xl">
                32 ft
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-snug sm:text-base">
                  Beam lengths up to 32 feet.
                </span>
                <span className="text-xs text-[#A4BFB1] mt-0.5 sm:text-sm">
                  Ask us about your required size.
                </span>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="my-6 border-t border-[#18452F] sm:my-8" />

            {/* CTA Button */}
            <div>
              <a
                href="/cut-list"
                className="btn-shine group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E5A84B] hover:bg-[#d8993f] text-[#0A2618] font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-[#E5A84B]/25 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5A84B] sm:px-8 sm:py-3.5"
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
      <section className="w-full max-w-full overflow-hidden bg-[#FAF8F5] py-14 px-4 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div data-reveal className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#0E2117] uppercase sm:text-xs">
                  PRODUCTS & MILLING SERVICES
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#0E2117] tracking-tight leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl break-words">
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
            <Card type="services" />
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
        <div className="mx-auto max-w-[880px] px-4 sm:px-6 md:px-8">
          <header data-reveal className="mb-10 sm:mb-12 md:mb-14">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-5 bg-[#E87900]" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#344054] sm:text-xs">
                Good questions. Straight answers.
              </p>
            </div>
            <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-[#002B2B] sm:text-4xl md:text-5xl break-words">
              Before your next order.
            </h2>
          </header>
          <div data-reveal style={delay(120)}>
            <FAQSection data={faqData} />
          </div>
        </div>
      </section>

      {/* Garden sheds */}
      <section className="w-full max-w-full overflow-hidden border-b-[12px] border-[#0B2519] bg-[#EEE8DC] px-4 py-10 sm:border-b-[16px] sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto grid max-w-[1350px] items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          <div data-reveal="left" className="group overflow-hidden shadow-sm transition-shadow duration-500 hover:shadow-xl lg:col-span-5">
            <Image
              src="/Images/pageImg/img8.png"
              alt="Premium Douglas Fir backyard garden shed"
              width={800}
              height={300}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="w-full h-auto object-cover"
            />
          </div>
          <div data-reveal="right" className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-6 bg-[#E5A84B]" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#344054] sm:text-xs">
                Also built at our mill
              </p>
            </div>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.04] tracking-tight text-[#0B2519] sm:text-4xl md:text-5xl break-words">
              Premium backyard sheds.<br className="hidden sm:block" /> Built solid. Delivered to you.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#506056] sm:mt-5 sm:text-base md:text-lg">
              Make room for tools, garden gear and everyday storage with a solid wood shed built on skids. Choose from available ready-to-go sheds or talk to us about a custom size and delivery to your property.
            </p>
            <a
              href="/garden-sheds"
              className="btn-shine group mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8A923] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-[#0B2519] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d99a18] hover:shadow-lg active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2519] sm:mt-8 sm:px-6 sm:py-3.5"
            >
              Explore garden sheds
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full max-w-full overflow-hidden bg-[#071D14] px-4 py-14 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div data-reveal className="max-w-[700px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-6 bg-[#E8A923]" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#E8A923] sm:text-xs">
                Let&apos;s start with your idea
              </p>
            </div>
            <h2 className="text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl break-words">
              What are you building?
            </h2>
            <p className="mt-4 max-w-[670px] text-sm leading-relaxed text-[#D8E0DB] sm:mt-6 sm:text-base md:text-lg">
              Send your species, dimensions, quantities and preferred finish. We&apos;ll help you plan the next step and provide a quote for your order.
            </p>
            {/* <p className="mt-4 font-mono text-[10px] tracking-wide text-[#A4BFB1] sm:mt-6 sm:text-xs">
              {siteConfig?.address}
            </p> */}
          </div>
          <a
            data-reveal="zoom"
            style={delay(200)}
            href="tel:+12507033473"
            className="btn-shine btn-pulse group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#E8A923] px-6 py-3.5 text-sm font-extrabold text-[#071D14] shadow-lg transition-colors hover:bg-[#d99a18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A923] sm:w-auto sm:px-8 sm:py-4"
          >
            Call 250-703-3473
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </section>

    </>
  );
}
