import React from "react";
import Image from "next/image";
import Link from "next/link";
import StorySection from "@/Components/Ui/StorySection";
import Cards from "@/Components/Ui/Cards";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import { storyData, approachData, visionCards } from "@/lib/AboutConstant";
import { siteConfig } from "@/lib/siteConfig";

const delay = (ms) => ({ "--d": `${ms}ms` });

export default function About() {
  return (
    <>
      <ScrollReveal />

      <section className="bg-[#FAF8F5] px-5 pb-12 pt-24 text-[#1B2A1E] sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-10 flex flex-col items-start justify-between gap-10 sm:mb-12 lg:mb-14 lg:flex-row lg:gap-12">
            <div className="z-10 max-w-2xl">
              <div data-reveal className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-[#1B2A1E]">
                  ABOUT US
                </span>
                <span className="eyebrow-line inline-block w-6 h-[2px] bg-[#f39c12]" />
              </div>

              <h1
                data-reveal
                style={delay(100)}
                className="mb-5 font-sans text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-[#142316] sm:mb-6 sm:text-5xl lg:text-6xl"
              >
                Deep Roots.
                <br />A Lasting Vision.
              </h1>

              <p
                data-reveal
                style={delay(220)}
                className="max-w-lg text-base font-normal leading-relaxed text-[#556056] sm:text-lg"
              >
                At Island Beam & Timber, we share a passion for wood, a respect
                for Vancouver Island&apos;s forests, and a vision to build
                something lasting for our community.
              </p>
            </div>

            <div
              data-reveal="right"
              style={delay(300)}
              className="absolute right-0 top-0 hidden pointer-events-none select-none opacity-80 sm:block"
            >
              <Image
                src="/Icons/Trees.svg"
                alt=""
                width={240}
                height={200}
                className="trees-sway h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-54 lg:w-65"
                priority
              />
            </div>
          </div>

          <div
            data-reveal="zoom"
            style={delay(200)}
            className="relative aspect-[2.13/1] w-full overflow-hidden shadow-sm"
          >
            <Image
              src="/Images/pageImg/img7.png"
              alt="Freshly milled timber being moved through a forest sawmill yard"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="img-settle object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F3EB] text-[#09271B]">
        <StorySection data={storyData} />
      </section>
      <section className="bg-[#F7F3EB] text-[#09271B]">
        <StorySection data={approachData} reverse={true} />
      </section>

      <section className="w-full bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading and Text */}
            <div data-reveal="left" className="flex flex-col justify-center lg:col-span-5">
              {/* Eyebrow Label */}
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="text-xs font-bold tracking-widest text-slate-900 uppercase">
                  OUR VISION
                </span>
                <span className="eyebrow-line w-9 h-[2px] bg-[#D4A359]" />
              </div>
              {/* Title */}
              <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:mb-8 sm:text-5xl lg:text-6xl">
                Local Timber. <br />
                Lasting Impact.
              </h2>
              {/* Content Paragraphs */}
              <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:space-y-6 sm:text-lg">
                <p>
                  Our mission is to strengthen the local timber industry and
                  give back to the Vancouver Island community. We believe in
                  responsible forestry, local partnerships, and creating value
                  that lasts for generations.
                </p>
                <p>
                  By supporting local jobs, sustainable practices, and community
                  projects, we aim to make a positive and lasting impact — today
                  and for the future.
                </p>
              </div>
            </div>
            {/* Right Column: 2x2 Grid using Card Component */}
            <div data-reveal="right" style={delay(150)} className="lg:col-span-7">
              <Cards
                type="services"
                items={visionCards}
                className="!p-0"
                gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6"
                itemClassName="min-h-[220px] sm:min-h-[238px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2419] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-7">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E5A83B] sm:mb-5">
              Get in touch
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something
              <br className="hidden sm:block" /> Together.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:mt-7 sm:text-lg">
              Whether you&apos;re planning a home project, a commercial build,
              or just have a question about our products, we&apos;re here to
              help.
            </p>
            <Link
              href="/request-quote"
              className="btn-shine group mt-10 inline-flex items-center gap-3 rounded-full bg-[#E5A83B] px-8 py-4 font-bold text-[#101810] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0B84E] hover:shadow-xl hover:shadow-[#E5A83B]/20 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get a Quote{" "}
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <address className="flex flex-col gap-6 not-italic lg:col-span-5 lg:pl-10">
            <a
              data-reveal
              style={delay(100)}
              href={siteConfig.phoneLink}
              className="group flex items-center gap-4 text-base text-slate-200 transition-all duration-300 hover:translate-x-1.5 hover:text-white sm:text-lg"
            >
              <svg
                className="h-5 w-5 shrink-0 text-[#E5A83B] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
                />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              data-reveal
              style={delay(200)}
              href="mailto:info@islandbeamandtimber.com"
              className="group flex items-center gap-4 text-base text-slate-200 transition-all duration-300 hover:translate-x-1.5 hover:text-white sm:text-lg"
            >
              <svg
                className="h-5 w-5 shrink-0 text-[#E5A83B] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3 7 9 6 9-6"
                />
              </svg>
              info@islandbeamandtimber.com
            </a>
            <div
              data-reveal
              style={delay(300)}
              className="group flex items-center gap-4 text-base text-slate-200 transition-all duration-300 hover:translate-x-1.5 sm:text-lg"
            >
              <svg
                className="h-5 w-5 shrink-0 text-[#E5A83B] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Vancouver Island, BC
            </div>
          </address>
        </div>
      </section>
    </>
  );
}