import Link from "next/link";
import Image from "next/image";
import { Clock3, Folder, MapPin, TreePine, Wrench, ArrowUpRight } from "lucide-react";
import Cards from "@/Components/Ui/Cards";
import ScrollReveal from "@/Components/Ui/ScrollReveal";
import { journalCards, services, steps, posts } from "@/lib/DouglasFirShedConst";

const cardClass = "!min-h-[220px] !bg-white !p-7 sm:!p-8";



const wrap = "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12";
const secPad = "py-14 sm:py-20 lg:py-28";
const h2 = "text-balance text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1] tracking-[-.04em] text-[#09271B]";
const intro = "cards-in mt-5 max-w-[62ch] text-pretty text-base leading-[1.65] text-[#45564B] sm:text-lg";
const placeholder = "bg-[#E4DFD2] ring-1 ring-[#09271B]/10 shadow-[0_24px_40px_-26px_rgba(9,39,27,0.5)]";
// Full-width dark band: inner padding follows the 1280px page container
const bleedPad = "px-[max(1.25rem,calc((100vw_-_1280px)/2_+_1.25rem))] sm:px-[max(2rem,calc((100vw_-_1280px)/2_+_2rem))] lg:px-[max(3rem,calc((100vw_-_1280px)/2_+_3rem))]";

function Eyebrow({ children, gold = false }) {
  return (
    <p className={`mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[.14em] ${gold ? "text-[#F4B323]" : "text-[#A86F1C]"}`}>
      <span className="size-1.5 shrink-0 rounded-full bg-[#F4B323]" />{children}
    </p>
  );
}

export default function Douglasfirshed() {
  return (
    <main className="overflow-x-clip bg-[#F7F3EB] text-[#09271B]">
      <ScrollReveal />
      <section className={`${wrap} pb-6 pt-12 sm:pt-16 lg:pt-24`}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <Eyebrow>Island Beam &amp; Timber · Shed Journal</Eyebrow>
            <h1 className="cl-rise cl-delay-120 text-balance text-[clamp(2rem,4.2vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-.04em]">Douglas Fir Sheds: Built With Generational Timber &amp; Traditional Joinery</h1>
            <p className="cl-rise cl-delay-240 mt-6 max-w-[58ch] text-pretty text-base leading-[1.65] text-[#45564B] sm:text-lg">Milled from coastal Vancouver Island Douglas fir, our timber-frame outbuilding packages, garden studios, and workshop sheds combine heavy structural bents, traditional mortise-and-tenon craftsmanship, and weather-tested resilience.</p>
          </div>
          <div className={`cl-wipe cl-delay-150 aspect-[4/3] w-full rounded-lg lg:aspect-[5/4] ${placeholder}`} role="img" aria-label="Douglas fir shed feature image placeholder" />
        </div>
        <div className="mt-8 flex items-center gap-3 border-t border-[#09271B]/15 pt-5 text-sm text-[#45564B]"><span className="inline-flex items-center gap-2 [&>svg]:size-4 [&>svg]:text-[#A86F1C]"><Folder />Craft journal</span><i className="not-italic text-[#F4B323]">·</i><span className="inline-flex items-center gap-2 [&>svg]:size-4 [&>svg]:text-[#A86F1C]"><Clock3 />6 min read</span></div>
      </section>
      <section className={`${wrap} ${secPad}`}>
        <Eyebrow>Our shed service</Eyebrow>
        <h2 className={`${h2} cards-in max-w-[20ch]`}>A Douglas fir shed, built around your life.</h2>
        <p className={intro}>From practical garden storage to a dedicated workshop or a quiet backyard retreat, bring your space to life with a Douglas fir timber frame shaped around the way you want to use it.</p>
        <Cards type="services" items={services} className="!px-0 !py-0 !mt-12" gridClassName="!grid-cols-1 !gap-6 md:!grid-cols-3" />
        <figure className="cards-in mt-12 sm:mt-16">
          <div className="group relative min-h-[660px] overflow-hidden rounded-xl bg-[#09271B] shadow-[0_28px_48px_-28px_rgba(9,39,27,0.55)] md:min-h-[580px] lg:min-h-[660px]">
            <Image
              src="/Images/DFSImg/img2.png"
              alt="Traditional joinery and carefully prepared Douglas fir timbers in the workshop"
              fill
              sizes="(max-width: 640px) 100vw, 92vw"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100"
            />
            {/* Story panel: fills the whole image. Gradient at rest, solid overlay on hover/focus (md+); always solid on mobile */}
            <div
              className="group/story absolute inset-0 isolate flex flex-col justify-end bg-gradient-to-t from-[#09271B] via-[#09271B]/55 to-transparent p-6 text-white before:absolute before:inset-0 before:-z-10 before:bg-[#09271B] before:opacity-90 before:transition-opacity before:duration-500 sm:p-8 lg:p-12 md:before:opacity-0 md:group-hover:before:opacity-[0.94] md:group-focus-within:before:opacity-[0.94] md:after:absolute md:after:right-6 md:after:top-6 md:after:rounded-full md:after:border md:after:border-white/40 md:after:px-3.5 md:after:py-1.5 md:after:text-xs md:after:font-semibold md:after:tracking-wide md:after:content-['Details_+'] md:after:transition-opacity md:after:duration-300 md:group-hover:after:opacity-0 md:group-focus-within:after:opacity-0 [&>*]:max-w-[52rem] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[-6px] focus-visible:outline-[#F4B323] motion-reduce:before:transition-none"
              role="group"
              tabIndex={0}
              aria-label="More about our timber frame craftsmanship"
            >
              <Eyebrow gold>Timber frame craftsmanship</Eyebrow>
              <h3 className="text-balance text-3xl font-extrabold leading-[1.02] tracking-[-.035em] lg:text-5xl">Crafted in the Mill. Raised on Your Land.</h3>
              <p className="mt-4 text-pretty text-base leading-[1.65] text-[#D3E2D9] sm:text-lg">Traditional mortise and tenon joinery pre-fit in our Comox Valley timber yard before delivery and raising.</p>
              <div className="mt-6 grid gap-6 overflow-hidden border-t border-white/20 pt-6 transition-[max-height,opacity,margin,padding] duration-500 ease-out md:mt-0 md:max-h-0 md:border-t-0 md:pt-0 md:opacity-0 md:group-hover:mt-6 md:group-hover:max-h-[26rem] md:group-hover:border-t md:group-hover:pt-6 md:group-hover:opacity-100 md:group-focus-within:mt-6 md:group-focus-within:max-h-[26rem] md:group-focus-within:border-t md:group-focus-within:pt-6 md:group-focus-within:opacity-100 lg:grid-cols-[1.1fr_.9fr] lg:gap-10 motion-reduce:transition-none">
                <p className="text-pretty text-sm leading-[1.7] text-[#B7CDBF] sm:text-base">Each frame is laid out and carefully prepared in our timber yard, so the pieces arrive ready to come together on your site.</p>
                <ul className="space-y-3 text-sm font-medium text-white sm:text-base">
                  <li className="flex items-center gap-3 border-b border-white/15 pb-3 before:size-2 before:shrink-0 before:rounded-full before:bg-[#F4B323] before:content-['']">Locally milled Douglas fir</li>
                  <li className="flex items-center gap-3 border-b border-white/15 pb-3 before:size-2 before:shrink-0 before:rounded-full before:bg-[#F4B323] before:content-['']">Traditional mortise and tenon joinery</li>
                  <li className="flex items-center gap-3 before:size-2 before:shrink-0 before:rounded-full before:bg-[#F4B323] before:content-['']">Prepared for a confident on-site raising</li>
                </ul>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-[#45564B]">From the workshop to your garden: traditional joinery, carefully prepared timbers.</figcaption>
        </figure>
      </section>
      {/* <section className={`${wrap} ${secPad}`}>
        <Eyebrow>Our shed service</Eyebrow>
        <h2 className={`${h2} cards-in max-w-[20ch]`}>A Douglas fir shed, built around your life.</h2>
        <p className={intro}>From practical garden storage to a dedicated workshop or a quiet backyard retreat, bring your space to life with a Douglas fir timber frame shaped around the way you want to use it.</p>
        <Cards type="services" items={services} className="!px-0 !py-0 !mt-12" gridClassName="!grid-cols-1 !gap-6 md:!grid-cols-3" />
        <figure className="cards-in mt-12 sm:mt-16">
          <div className="group relative min-h-[560px] overflow-hidden rounded-xl bg-[#09271B] shadow-[0_28px_48px_-28px_rgba(9,39,27,0.55)] sm:min-h-[560px] lg:min-h-[640px]">
            <Image
              src="/Images/DFSImg/img2.png"
              alt="Traditional joinery and carefully prepared Douglas fir timbers in the workshop"
              fill
              sizes="(max-width: 640px) 100vw, 92vw"
              className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div className="group/story absolute inset-x-3 bottom-3 max-w-[560px] rounded-lg bg-[#09271B]/90 p-6 text-white backdrop-blur-sm sm:inset-x-auto sm:bottom-6 sm:left-6 sm:p-8 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#F4B323]" role="group" tabIndex={0} aria-label="More about our timber frame craftsmanship">
              <Eyebrow gold>Timber frame craftsmanship</Eyebrow>
              <h3 className="text-balance text-2xl font-extrabold leading-[1.05] tracking-[-.03em] sm:text-3xl">Crafted in the Mill. Raised on Your Land.</h3>
              <p className="mt-3 text-pretty text-sm leading-[1.65] text-[#B7CDBF] sm:text-base">Traditional mortise and tenon joinery pre-fit in our Comox Valley timber yard before delivery and raising.</p>
              <div className="mt-4 space-y-4 overflow-hidden border-t border-white/15 pt-4 transition-[max-height,opacity] duration-500 ease-out md:mt-0 md:max-h-0 md:border-t-0 md:pt-0 md:opacity-0 md:group-hover/story:mt-4 md:group-hover/story:max-h-80 md:group-hover/story:border-t md:group-hover/story:pt-4 md:group-hover/story:opacity-100 md:group-focus/story:mt-4 md:group-focus/story:max-h-80 md:group-focus/story:border-t md:group-focus/story:pt-4 md:group-focus/story:opacity-100 motion-reduce:transition-none">
                <p className="text-pretty text-sm leading-[1.65] text-[#B7CDBF]">Each frame is laid out and carefully prepared in our timber yard, so the pieces arrive ready to come together on your site.</p>
                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-center gap-2.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-[#F4B323] before:content-['']">Locally milled Douglas fir</li>
                  <li className="flex items-center gap-2.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-[#F4B323] before:content-['']">Traditional mortise and tenon joinery</li>
                  <li className="flex items-center gap-2.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-[#F4B323] before:content-['']">Prepared for a confident on-site raising</li>
                </ul>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-[#45564B]">From the workshop to your garden: traditional joinery, carefully prepared timbers.</figcaption>
        </figure>
      </section> */}

      <section className={`${wrap} ${secPad} !pt-0`}>
        <div className="story-from-left mb-10 sm:mb-12"><Eyebrow>The process</Eyebrow><h2 className={`${h2} max-w-[20ch]`}>From your first idea to a raised frame.</h2></div>
        {/* <ol className="grid gap-4 md:grid-cols-3 md:gap-5">{steps.map(([title, text], index) => <li key={title} className="cards-in flex gap-5 rounded-lg border border-[#E4DAC6] bg-white p-6 shadow-sm sm:p-7"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#09271B] text-sm font-bold tabular-nums text-[#F4B323]">0{index + 1}</span><div><h3 className="text-lg font-bold leading-tight tracking-[-.01em]">{title}</h3><p className="mt-2 text-pretty text-sm leading-[1.65] text-[#45564B] sm:text-base">{text}</p></div></li>)}</ol> */}
        <Cards type='stepCard' steps={steps} />
      </section>

      <section className={`${bleedPad} flex flex-col gap-8 bg-[#09271B] py-14 text-white sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20`}>
        <div className="story-from-left"><Eyebrow gold>Start a conversation</Eyebrow><h2 className="text-balance text-[clamp(1.8rem,3.4vw,2.9rem)] font-extrabold leading-[1] tracking-[-.04em]">Let’s talk about your shed.</h2><p className="mt-4 max-w-[60ch] text-pretty text-base leading-[1.65] text-[#B7CDBF] sm:text-lg">Share your ideas, approximate size and location to start a conversation about<br className="hidden lg:inline" /> your project.</p></div>
        <Link href="/Contact#form" className="cards-in inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#F4B323] px-6 text-sm font-bold tracking-wide text-[#09271B] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#FFC53D] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white lg:self-center">Start an inquiry <ArrowUpRight size={21} /></Link>
      </section>

      <section className={`${wrap} ${secPad}`}>
        <Eyebrow>Continue reading</Eyebrow><h2 className={`${h2} cards-in`}>Recent Posts</h2>
        <p className={intro}>Stories from the forest, workshop and jobsite—made for people who care where wood comes from.</p>
        <Cards
          type="imagegrid"
          items={journalCards}
          className="!mt-10 !px-0 !py-0 sm:!mt-12"
          gridClassName="!grid-cols-1 !gap-6 md:!grid-cols-3"
        />
          {/* {posts.map(([category, title, text]) => <article className="cards-in overflow-hidden rounded-xl border border-[#E4DAC6] bg-white shadow-sm" key={title}>
          <div className={`aspect-[4/3] w-full !shadow-none ${placeholder}`} role="img" aria-label={`${title} image placeholder`} />
          <div className="p-6 sm:p-7"><Eyebrow>{category}</Eyebrow><h3 className="text-balance text-xl font-bold leading-[1.15] tracking-[-.02em]">{title}</h3><p className="mt-3 text-pretty text-sm leading-[1.65] text-[#45564B] sm:text-base">{text}</p></div>
        </article>)} */}
      </section>
    </main>
  );
}



// import Link from "next/link";
// import Image from "next/image";
// import { Clock3, Folder, MapPin, TreePine, Wrench, ArrowUpRight } from "lucide-react";
// import Cards from "@/Components/Ui/Cards";

// const services = [
//   { title: "More than storage", description: "A thoughtful working space or retreat with the warmth of real timber.", icon: <TreePine />, className: "shed-component-card" },
//   { title: "Made to last", description: "Traditional joinery and coastal-grade Douglas fir for decades outdoors.", icon: <Wrench />, className: "shed-component-card" },
//   { title: "Rooted here", description: "Designed and prepared with Vancouver Island’s landscape in mind.", icon: <MapPin />, className: "shed-component-card" },
// ];

// const steps = [
//   ["Share the site", "Tell us how you want the shed to work, where it will sit, and what it needs to hold."],
//   ["Shape the structure", "We help define scale, details, and a timber package suited to your project."],
//   ["Raise it with confidence", "Prepared components arrive ready for a clear, satisfying build."],
// ];

// const posts = [
//   ["Sustainable craft", "The Eco-Conscious Guide to Woodworking", "Practical ways to make better choices in the workshop."],
//   ["Forestry notes", "Responsible Wood Production Practices", "The care that starts long before a board reaches the mill."],
//   ["Mill journal", "Journeying Through Conscious Wood Manufacturing", "Following material from a working forest to a finished build."],
// ];

// function Eyebrow({ children, gold = false }) {
//   return <p className={`shed-eyebrow${gold ? " shed-eyebrow--gold" : ""}`}><span />{children}</p>;
// }

// export default function Douglasfirshed() {
//   return (
//     <main className="shed-page">
//       <section className="shed-hero">
//         <div className="shed-hero__copy">
//           <div>
//             <Eyebrow>Island Beam &amp; Timber · Shed Journal</Eyebrow>
//             <h1>Douglas Fir Sheds: Built With Generational Timber &amp; Traditional Joinery</h1>
//             <p className="shed-lede">Milled from coastal Vancouver Island Douglas fir, our timber-frame outbuilding packages, garden studios, and workshop sheds combine heavy structural bents, traditional mortise-and-tenon craftsmanship, and weather-tested resilience.</p>
//           </div>
//           <div className="shed-hero__image" role="img" aria-label="Douglas fir shed feature image placeholder" />
//         </div>
//         <div className="shed-meta"><span><Folder />Craft journal</span><i>·</i><span className="shed-meta__read"><Clock3 />6 min read</span></div>
//       </section>

//       <section className="shed-services shed-wrap">
//         <Eyebrow>Our shed service</Eyebrow>
//         <h2>A Douglas fir shed, built around your life.</h2>
//         <p className="shed-section-intro">From practical garden storage to a dedicated workshop or a quiet backyard retreat, bring your space to life with a Douglas fir timber frame shaped around the way you want to use it.</p>
//         <Cards type="services" items={services} className="!px-0 !py-0 !mt-12" gridClassName="!grid-cols-1 !gap-6 md:!grid-cols-3" />
//         <figure className="shed-workshop">
//           <div className="shed-workshop__placeholder">
//             <Image
//               src="/Images/DFSImg/img2.png"
//               alt="Traditional joinery and carefully prepared Douglas fir timbers in the workshop"
//               fill
//               sizes="(max-width: 640px) 100vw, 92vw"
//               className="shed-workshop__image"
//             />
//             <div className="shed-workshop__story" role="group" tabIndex={0} aria-label="More about our timber frame craftsmanship">
//               <Eyebrow gold>Timber frame craftsmanship</Eyebrow>
//               <h3>Crafted in the Mill. Raised on Your Land.</h3>
//               <p>Traditional mortise and tenon joinery pre-fit in our Comox Valley timber yard before delivery and raising.</p>
//               <div className="shed-workshop__details">
//                 <p>Each frame is laid out and carefully prepared in our timber yard, so the pieces arrive ready to come together on your site.</p>
//                 <ul>
//                   <li>Locally milled Douglas fir</li>
//                   <li>Traditional mortise and tenon joinery</li>
//                   <li>Prepared for a confident on-site raising</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <figcaption>From the workshop to your garden: traditional joinery, carefully prepared timbers.</figcaption>
//         </figure>
//       </section>

//       <section className="shed-process shed-wrap">
//         <div className="shed-process__heading"><Eyebrow>The process</Eyebrow><h2>From your first idea to a raised frame.</h2></div>
//         <ol className="shed-steps">{steps.map(([title, text], index) => <li key={title}><span className="shed-step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
//       </section>

//       <section className="shed-cta">
//         <div><Eyebrow gold>Start a conversation</Eyebrow><h2>Let’s talk about your shed.</h2><p>Share your ideas, approximate size and location to start a conversation about<br className="shed-desktop-break" /> your project.</p></div>
//         <Link href="/Contact#form" className="shed-cta__button">Start an inquiry <ArrowUpRight size={21} /></Link>
//       </section>

//       <section className="shed-recent shed-wrap">
//         <Eyebrow>Continue reading</Eyebrow><h2>Recent Posts</h2>
//         <p className="shed-section-intro">Stories from the forest, workshop and jobsite—made for people who care where wood comes from.</p>
//         <div className="shed-post-grid">{posts.map(([category, title, text]) => <article className="shed-post" key={title}>
//           <div className="shed-post__image" role="img" aria-label={`${title} image placeholder`} />
//           <div className="shed-post__body"><Eyebrow>{category}</Eyebrow><h3>{title}</h3><p>{text}</p></div>
//         </article>)}</div>
//       </section>
//     </main>
//   );
// }
