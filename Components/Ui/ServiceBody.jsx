import Image from "next/image";

export default function ServiceBody({ data = [] }) {
    if (!Array.isArray(data) || data.length === 0) return null;

    return (
        <div className="mx-auto w-[min(100%-2.5rem,1280px)] text-[#173024] sm:w-[min(100%-4rem,1280px)] lg:w-[min(100%-6rem,1280px)]">
            {data.map((section, sectionIndex) => (
                <article
                    className="mt-14 first:mt-0 sm:mt-20 sm:first:mt-0"
                    key={section.id ?? section.title ?? sectionIndex}
                >
                    {section.intro && (
                        <p className="text-pretty py-8 text-lg leading-[1.7] text-[#2F3F36] sm:py-12 sm:text-xl lg:text-[1.45rem]">{section.intro}</p>
                    )}

                    {section.quote && (
                        <blockquote className="cards-in border border-[#e7ad00]/45 border-l-[6px] border-l-[#F4B323] bg-[#faf8f3] px-6 py-7 sm:px-10 sm:py-9">
                            <p className="text-pretty text-lg font-bold leading-relaxed tracking-[-0.01em] text-[#173024] sm:text-xl">{section.quote}</p>
                        </blockquote>
                    )}

                    {(section.title || section.description) && (
                        <div className="cards-in pt-12 first:pt-0 sm:pt-16 sm:first:pt-0">
                            {section.title && <h2 className="text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] before:mb-5 before:block before:h-1 before:w-12 before:bg-[#F4B323] before:content-[''] sm:text-4xl lg:text-[2.75rem]">{section.title}</h2>}
                            {section.description && <p className="mt-5 text-pretty text-base leading-[1.75] text-[#59635b] sm:text-lg">{section.description}</p>}
                        </div>
                    )}

                    {section.features?.length > 0 && (
                        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5 sm:gap-6">
                            {section.features.map((feature, featureIndex) => (
                                <section
    className="cards-in group border border-[#e6dfd0] bg-[#f5f2ea] p-7 transition-[background-color,border-color,box-shadow] duration-300 hover:border-[#F4B323] hover:bg-white hover:shadow-[0_18px_32px_-24px_rgba(9,39,27,0.45)] motion-reduce:transition-none sm:min-h-[230px] sm:p-9"
    key={feature.id ?? feature.title ?? featureIndex}
>
    {feature.icon && (
        <span
            aria-hidden="true"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#09271B]/10 text-[#09271B] ring-[6px] ring-[#09271B]/5 transition-[background-color,color,box-shadow] duration-300 group-hover:bg-[#09271B] group-hover:text-[#F4B323] group-hover:ring-[#09271B]/15 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6"
        >
            {feature.icon}
        </span>
    )}
    <h3 className="mt-6 text-balance text-xl font-bold leading-tight tracking-[-0.02em]">{feature.title}</h3>
    <p className="mt-3 max-w-xl text-pretty text-base leading-[1.65] text-[#59635b]">{feature.description}</p>
</section>
                           
                            ))}
                        </div>
                    )}

                    {section.detail && <p className="mt-8 text-pretty text-base leading-[1.75] text-[#59635b] sm:text-lg">{section.detail}</p>}

                    {section.imageSrc && (
                        <figure className="cards-in my-8 overflow-hidden bg-[#173024]/5 shadow-[0_24px_40px_-30px_rgba(9,39,27,0.55)] sm:my-14">
                            <Image
                                src={section.imageSrc}
                                alt={section.imageAlt ?? ""}
                                width={1600}
                                height={700}
                                sizes="(max-width: 700px) 100vw, 90vw"
                                className="h-auto w-full"
                            />
                        </figure>
                    )}

                    {section.closing && <p className="text-pretty border-t border-[#173024]/10 pt-8 text-base font-medium leading-[1.75] text-[#2F3F36] sm:pt-10 sm:text-lg">{section.closing}</p>}
                </article>
            ))}
        </div>
    );
}

// import Image from "next/image";

 
// export default function ServiceBody({ data = [] }) {
//     if (!Array.isArray(data) || data.length === 0) return null;

//     return (
//         <div className="service-body">
//             {data.map((section, sectionIndex) => (
//                 <article
//                     className="service-body__section"
//                     key={section.id ?? section.title ?? sectionIndex}
//                 >
//                     {section.intro && <p className="service-body__intro">{section.intro}</p>}

//                     {section.quote && (
//                         <blockquote className="service-body__quote">
//                             <p>{section.quote}</p>
//                         </blockquote>
//                     )}

//                     {(section.title || section.description) && (
//                         <div className="service-body__copy">
//                             {section.title && <h2>{section.title}</h2>}
//                             {section.description && <p>{section.description}</p>}
//                         </div>
//                     )}

//                     {section.features?.length > 0 && (
//                         <div className="service-body__features">
//                             {section.features.map((feature, featureIndex) => (
//                                 <section
//                                     className="service-body__feature"
//                                     key={feature.id ?? feature.title ?? featureIndex}
//                                 >
//                                     {feature.icon && (
//                                         <span className="service-body__icon" aria-hidden="true">
//                                             {feature.icon}
//                                         </span>
//                                     )}
//                                     <h3>{feature.title}</h3>
//                                     <p>{feature.description}</p>
//                                 </section>
//                             ))}
//                         </div>
//                     )}

//                     {section.detail && <p className="service-body__detail">{section.detail}</p>}

//                     {section.imageSrc && (
//                         <figure className="service-body__figure">
//                             <Image
//                                 src={section.imageSrc}
//                                 alt={section.imageAlt ?? ""}
//                                 width={1600}
//                                 height={700}
//                                 sizes="(max-width: 700px) 100vw, 90vw"
//                             />
//                         </figure>
//                     )}

//                     {section.closing && <p className="service-body__closing">{section.closing}</p>}
//                 </article>
//             ))}
//         </div>
//     );
// }
