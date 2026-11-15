import AboutSawmill from "@/Components/Ui/AboutSawmill";
import Card from "@/Components/Ui/Cards";
import Slider from "@/Components/Ui/Slider";
import Image from "next/image";
import { aboutSawmillData, timberGalleryData, faqData } from "@/lib/pageConstant";
import TimberGallery from "@/Components/Ui/TimberGallery";
import FAQSection from "@/Components/Ui/FAQ";
import ScrollReveal from "@/Components/Ui/ScrollReveal";

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

      <section><Slider /></section>

      {/* Stats + ticker */}
      <section aria-label="Our lumber at a glance" className="bg-[#e8a923] text-[#0b1a12]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-black/10 px-6 py-6 sm:grid-cols-4 sm:px-8 sm:py-7">
          {lumberStats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              style={delay(index * 100)}
              className={`${index > 0 ? "border-t border-black/10 sm:border-t-0" : ""} group px-4 py-2 transition-colors duration-300 hover:bg-black/[0.04] sm:px-6`}
            >
              <p className="text-xl font-extrabold leading-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em]">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden bg-[#0b2117] py-3 text-[#e8a923]" aria-label="Lumber species and services">
          <div className="lumber-ticker flex w-max items-center text-[9px] font-bold uppercase tracking-[0.25em]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-8 px-4 sm:gap-10" aria-hidden={copy === 1}>
                {tickerItems.map((item, index) => (
                  <span key={item} className="flex items-center gap-8 sm:gap-10">
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
      <section className="w-full bg-[#FAF8F5] py-20 px-6 sm:px-8 md:px-12 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div data-reveal className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
                <span className="text-xs font-bold tracking-[0.22em] text-[#0E2117] uppercase">
                  OUR LUMBER
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E2117] tracking-tight leading-[1.08]">
                The right wood.<br />
                A world of possibilities.
              </h2>
            </div>

            {/* Right: Description */}
            <div data-reveal style={delay(150)} className="max-w-md lg:pb-2">
              <p className="text-[#506056] text-sm sm:text-base leading-relaxed">
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
      <section className="w-full bg-[#0B2519] py-20 lg:py-28 px-6 sm:px-8 md:px-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image with Overlay Badge */}
          <div data-reveal="left" className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-stone-900 border border-white/10 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/Images/pageImg/img7.png"
                alt="Sawmill yard with lumber beams"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />

              {/* Floating Mill Badge at Bottom-Left */}
              <div className="float-slow absolute bottom-6 left-6 bg-[#081C13]/90 border border-[#E5A84B]/40 px-4 py-2.5 backdrop-blur-md shadow-lg transition-colors duration-300 group-hover:border-[#E5A84B]">
                <span className="text-xs font-bold tracking-[0.2em] text-[#E5A84B] uppercase">
                  REAL TIMBER. CUT AT OUR MILL.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Stat Counter */}
          <div data-reveal="right" className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
              <span className="text-xs font-bold tracking-[0.22em] text-[#E5A84B] uppercase">
                FIR BEAM SPECIALISTS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Big ideas deserve<br />
              the right timber.
            </h2>

            {/* Description */}
            <p className="mt-6 text-[#A4BFB1] text-base sm:text-lg leading-relaxed max-w-xl">
              From a single feature beam to a full timber order, we cut around your
              project. Custom dimensions and long lengths give you more flexibility
              when planning posts, beams and exposed timber details.
            </p>

            {/* Stat: 32 ft Highlight */}
            <div className="mt-8 flex items-baseline gap-4 sm:gap-6">
              <span className="text-5xl sm:text-6xl font-black text-[#E5A84B] tracking-tight leading-none">
                32 ft
              </span>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-white leading-snug">
                  Beam lengths up to 32 feet.
                </span>
                <span className="text-xs sm:text-sm text-[#A4BFB1] mt-0.5">
                  Ask us about your required size.
                </span>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="my-8 border-t border-[#18452F]" />

            {/* CTA Button */}
            <div>
              <a
                href="/cut-list"
                className="btn-shine group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E5A84B] hover:bg-[#d8993f] text-[#0A2618] font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-[#E5A84B]/25 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5A84B]"
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
      <section className="w-full bg-[#FAF8F5] py-20 px-6 sm:px-8 md:px-12 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div data-reveal className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="eyebrow-line w-5 h-[2px] bg-[#E5A84B]" />
                <span className="text-xs font-bold tracking-[0.22em] text-[#0E2117] uppercase">
                  PRODUCTS & MILLING SERVICES
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E2117] tracking-tight leading-[1.08]">
                More ways to make<br />
                your project happen.
              </h2>
            </div>

            {/* Right: Description */}
            <div data-reveal style={delay(150)} className="max-w-md lg:pb-2">
              <p className="text-[#506056] text-sm sm:text-base leading-relaxed">
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

      <section><AboutSawmill data={aboutSawmillData} /></section>
      <section><TimberGallery data={timberGalleryData} /></section>

      {/* FAQ */}
      <section className="w-full bg-[#F2EEE6] py-20 sm:py-24">
        <div className="mx-auto max-w-[880px] px-5 sm:px-8">
          <header data-reveal className="mb-12 sm:mb-14">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-5 bg-[#E87900]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#344054]">
                Good questions. Straight answers.
              </p>
            </div>
            <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-[#002B2B] sm:text-5xl">
              Before your next order.
            </h2>
          </header>
          <div data-reveal style={delay(120)}>
            <FAQSection data={faqData} />
          </div>
        </div>
      </section>

      {/* Garden sheds */}
      <section className="w-full border-b-[16px] border-[#0B2519] bg-[#EEE8DC] px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:py-12">
        <div className="mx-auto grid max-w-[1350px] items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div data-reveal="left" className="group overflow-hidden shadow-sm transition-shadow duration-500 hover:shadow-xl lg:col-span-5">
            <Image
              src="/Images/pageImg/img8.png"
              alt="Image description"

              width={800}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div data-reveal="right" className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-6 bg-[#E5A84B]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#344054]">
                Also built at our mill
              </p>
            </div>
            <h2 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-tight text-[#0B2519] sm:text-5xl">
              Premium backyard sheds.<br className="hidden sm:block" /> Built solid. Delivered to you.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#506056] sm:text-lg">
              Make room for tools, garden gear and everyday storage with a solid wood shed built on skids. Choose from available ready-to-go sheds or talk to us about a custom size and delivery to your property.
            </p>
            <a
              href="/garden-sheds"
              className="btn-shine group mt-8 inline-flex items-center gap-2 rounded-full bg-[#E8A923] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wide text-[#0B2519] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d99a18] hover:shadow-lg active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2519]"
            >
              Explore garden sheds
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full bg-[#071D14] px-6 py-20 text-white sm:px-8 sm:py-24 md:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div data-reveal className="max-w-[700px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="eyebrow-line h-[2px] w-6 bg-[#E8A923]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#E8A923]">
                Let&apos;s start with your idea
              </p>
            </div>
            <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              What are you building?
            </h2>
            <p className="mt-6 max-w-[670px] text-base leading-relaxed text-[#D8E0DB] sm:text-lg">
              Send your species, dimensions, quantities and preferred finish. We&apos;ll help you plan the next step and provide a quote for your order.
            </p>
            <p className="mt-6 font-mono text-xs tracking-wide text-[#A4BFB1]">
              5110 Dove Crk Rd, Comox Valley, BC V9J 1P4
            </p>
          </div>
          <a
            data-reveal="zoom"
            style={delay(200)}
            href="tel:+12507033473"
            className="btn-shine btn-pulse group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#E8A923] px-8 py-4 text-sm font-extrabold text-[#071D14] shadow-lg transition-colors hover:bg-[#d99a18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A923]"
          >
            Call 250-703-3473
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </section>

    </>
  );
}
