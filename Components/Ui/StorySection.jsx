import React from "react";
import Image from "next/image";

export default function StorySection({ data, reverse = false }) {
    if (!data) return null;

    return (
        <section className="overflow-x-clip bg-[#F7F3EB] px-6 py-16 text-[#09271B] sm:px-10 sm:py-20 lg:px-16 lg:py-28">

            <div className="mx-auto grid max-w-[1420px] items-center gap-10 lg:grid-cols-2 lg:gap-20">

                {/* Text Content */}
                <div className={`${reverse ? "story-from-right lg:order-2" : "story-from-left lg:order-1"}`}>

                    <div className="mb-5 flex items-center gap-4">
                        <span className="text-xs font-semibold tracking-[0.1em] text-[#09271B]">
                            {data.label}
                        </span>

                        <span className="story-line h-px w-12 origin-left bg-[#F4B323]" />
                    </div>

                    <h2 className="mb-6 text-balance text-4xl font-bold leading-[1] tracking-[-0.04em] text-[#09271B] sm:mb-8 sm:text-5xl lg:text-[52px]">
                        {data.title}

                        {data.subtitle && (
                            <>
                                <br className="hidden sm:block" />
                                {data.subtitle}
                            </>
                        )}
                    </h2>

                    <div className="max-w-[640px] space-y-5 text-pretty text-base leading-[1.65] text-[#45564B] sm:text-lg [&>p:first-child]:text-lg [&>p:first-child]:font-medium [&>p:first-child]:text-[#09271B] sm:[&>p:first-child]:text-xl">
                        {data.paragraphs?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                </div>

                {/* Image */}
                {data.image?.src && (
                    <div className={`${reverse ? "story-from-left" : "story-from-right"} cl-zoom relative aspect-square w-full overflow-hidden rounded-md bg-[#09271B]/10 shadow-[0_28px_48px_-28px_rgba(9,39,27,0.5)] ring-1 ring-[#09271B]/10 lg:aspect-[5/6] ${reverse ? "lg:order-1" : "lg:order-2"
                        }`}>
                        <Image
                            src={data.image.src}
                            alt={data.image.alt || "Timber and forestry"}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </div>
                )}

            </div>
        </section>
    );
}
// import React from "react";
// import Image from "next/image";

// export default function StorySection({ data, reverse = false }) {
//     if (!data) return null;

//     return (
//         <section className="bg-[#F7F3EB] px-6 py-16 text-[#09271B] sm:px-10 sm:py-20 lg:px-16 lg:py-24">

//             <div className="mx-auto grid max-w-[1420px] items-center gap-10 lg:grid-cols-2 lg:gap-16">

//                 {/* Text Content */}
//                 <div className={reverse ? "lg:order-2" : "lg:order-1"}>

//                     <div className="mb-5 flex items-center gap-4">
//                         <span className="text-xs font-semibold tracking-[0.08em] text-[#09271B]">
//                             {data.label}
//                         </span>

//                         <span className="h-px w-10 bg-[#F4B323]" />
//                     </div>

//                     <h2 className="mb-8 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#09271B] sm:text-5xl lg:text-[52px]">
//                         {data.title}

//                         {data.subtitle && (
//                             <>
//                                 <br className="hidden sm:block" />
//                                 {data.subtitle}
//                             </>
//                         )}
//                     </h2>

//                     <div className="max-w-[640px] space-y-5 text-base leading-[1.55] text-[#45564B] sm:text-lg">
//                         {data.paragraphs?.map((paragraph, index) => (
//                             <p key={index}>{paragraph}</p>
//                         ))}
//                     </div>

//                 </div>

//                 {/* Image */}
//                 {data.image?.src && (
//                     <div className={`relative aspect-square w-full overflow-hidden rounded-sm ${reverse ? "lg:order-1" : "lg:order-2"
//                         }`}>
//                         <Image
//                             src={data.image.src}
//                             alt={data.image.alt || "Timber and forestry"}
//                             fill
//                             sizes="(max-width: 1024px) 100vw, 50vw"
//                             className="object-cover object-center"
//                         />
//                     </div>
//                 )}

//             </div>
//         </section>
//     );
// }
