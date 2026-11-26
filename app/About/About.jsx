import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { storyData, approachData } from "@/lib/AboutConstant";
import { siteConfig } from "@/lib/siteConfig";
import ScrollReveal from "@/Components/Ui/ScrollReveal";

function Eyebrow({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173D2C] sm:text-xs">
      <span className="h-[2px] w-8 bg-[#E8B51E]" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function StorySection({ data, title, reverse = false, tone = "light" }) {
  const isWarm = tone === "warm";

  return (
    <section className={`${isWarm ? "bg-[#E9E7DC]" : "bg-[#F4F2E9]"} pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-0">
        <div data-reveal className={`${reverse ? "lg:order-2" : ""} relative aspect-[4/3] overflow-hidden bg-[#D8D5C8] lg:aspect-square`}>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div data-reveal style={{ "--d": "150ms" }} className={`${reverse ? "lg:order-1" : ""} self-center py-2 text-left lg:py-8`}>
          <h2 className="max-w-[650px] text-[clamp(2.5rem,3.5vw,3.75rem)] font-normal leading-[0.98] tracking-[-0.055em] text-[#173D2C]">
            {title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.7] text-[#626B60] sm:text-[17px]">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {/* {!reverse && (
            <Link
              href="/BeamAndTimber"
              className="group mt-8 flex items-center justify-between border-t border-[#173D2C]/20 pt-5 text-sm font-semibold text-[#173D2C] transition-colors hover:text-[#A86F1C]"
            >
              <span>Explore our lumber</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="w-full overflow-hidden bg-[#F4F2E9] text-[#173D2C] antialiased ">
      <ScrollReveal />

      {/* ── Hero ── */}
      <section className="px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pb-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid items-end gap-8 lg:mb-12 lg:grid-cols-12 lg:gap-12">
            <div data-reveal className="lg:col-span-7">
              <Eyebrow>About us</Eyebrow>
              <h1 className="max-w-[850px] text-[clamp(3.6rem,8vw,6rem)] font-normal leading-[0.92] tracking-[-0.065em] text-[#173D2C]">
                Deep roots.<br />A lasting vision.
              </h1>
            </div>
            <p data-reveal style={{ "--d": "200ms" }} className="max-w-lg pb-1 text-sm leading-[1.7] text-[#43564A] sm:text-base lg:col-span-4 lg:col-start-9">
              Rooted on Vancouver Island, we turn a passion for wood into lumber, custom timbers and lasting relationships with the people who build with them.
            </p>
          </div>

          <div data-reveal style={{ "--d": "350ms" }} className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-[#26382E] sm:aspect-[2.4/1] xl:aspect-[3.2/1]">
            <Image
              src="/Images/About/yard.webp"
              alt="The Island Beam & Timber sawmill yard surrounded by Vancouver Island forest"
              fill
              //priority
              sizes="100vw"
              className="object-cover object-center"
              loading="lazy"

            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071D14]/75 via-transparent to-transparent" />
            <div data-reveal style={{ "--d": "550ms" }} className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-[8px] font-semibold uppercase tracking-[0.16em] text-white sm:inset-x-8 sm:bottom-7 sm:text-[10px] sm:tracking-[0.2em]">
              <span>Island Beam &amp; Timber</span>
              <span className="text-right">Comox Valley / Vancouver Island</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story sections ── */}
      <StorySection data={storyData} title={<>From warming homes<br />to helping build them.</>} />
      <StorySection data={approachData} title={<>Good timber.<br />Honest work.</>} reverse tone="warm" />

      {/* ── CTA ── */}
      <section id="enquiry" className="bg-[#003C24] px-4 py-14 text-[#F4F2E9] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-8">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.03] tracking-[-0.055em]">
              Let&apos;s build something lasting.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
              Tell us what you&apos;re planning. We&apos;ll help you take the next step.
            </p>
            <div data-reveal style={{ "--d": "180ms" }} className="mt-7 flex flex-wrap gap-3">
              <a href={siteConfig.phoneLink} className="inline-flex items-center gap-5 rounded-full bg-[#EEBF21] px-6 py-4 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B]">
                Call our mill <ArrowUpRight className="size-4" />
              </a>
              {/* <a href={siteConfig.emailLink} target="_blank" className="inline-flex items-center gap-5 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Email us <ArrowUpRight className="size-4" />
              </a> */}
            </div>
          </div>
          <div data-reveal style={{ "--d": "250ms" }} className="space-y-3 text-sm text-white/85 lg:col-span-4 lg:pl-8">
            <a className="block text-xl sm:text-2xl" href={siteConfig.phoneLink}>{siteConfig.phone}</a>
            <a className="block hover:text-[#EEBF21]" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
