'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSawmill({
    data,
    className = '',
}) {
    if (!data) return null;

    const {
        eyebrow,
        title,
        paragraphs = [],
        footer,
        image = {},
    } = data;

    const titleLines = title ? title.split('\n') : [];

    return (
        <section
            className={`w-full bg-[#F4EFEA] py-16 md:py-28 px-6 sm:px-10 lg:px-16 ${className}`}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                {/* Left Column: Image */}

                <div data-reveal className="lg:col-span-6 relative rounded-md overflow-hidden bg-[#14261C] shadow-[0_24px_48px_-20px_rgba(20,38,28,0.45)] ring-1 ring-[#14261C]/10 group">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">

                        {image.src && (
                            <Image
                                src={image.src}
                                alt={image.alt || image.caption || 'About our sawmill'}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                            />
                        )}

                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                            aria-hidden="true"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white">

                            {image.location && (
                                <p className="text-xs sm:text-[13px] font-semibold tracking-[0.18em] text-[#E3AE5C] uppercase mb-2">
                                    {image.location}
                                </p>
                            )}

                            {image.caption && (
                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
                                    {image.caption}
                                </h3>
                            )}

                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}

                <div className="lg:col-span-6 flex flex-col justify-center lg:pl-2">

                    {/* Eyebrow */}

                    {eyebrow && (
                        <div data-reveal className="flex items-center gap-3 mb-5">
                            <span
                                className="w-8 h-[2px] bg-[#C28535]"
                                aria-hidden="true"
                            />

                            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#9A5F1F] uppercase">
                                {eyebrow}
                            </span>
                        </div>
                    )}

                    {/* Heading */}

                    {title && (
                        <h2 data-reveal className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#14261C] leading-[1.1] tracking-[-0.02em] mb-7 text-balance">
                            {titleLines.map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index !== titleLines.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h2>
                    )}

                    {/* Paragraphs */}

                    {paragraphs.length > 0 && (
                        <div data-reveal className="space-y-5 max-w-[60ch] text-[#4A4F46] text-base sm:text-[17px] leading-[1.75]">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === 0
                                            ? 'text-[#2F3A31] text-lg sm:text-xl leading-[1.6] font-medium'
                                            : ''
                                    }
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* Footer */}

                    {footer && (
                        <div data-reveal className="mt-10 pt-6 border-t border-[#DBD5C9] relative">
                            <span
                                className="absolute -top-px left-0 w-14 h-[2px] bg-[#C28535]"
                                aria-hidden="true"
                            />
                            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#1C2C20] uppercase">
                                {footer}
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
// 'use client';

// import React from 'react';
// import Image from 'next/image';

// export default function AboutSawmill({
//     data,
//     className = '',
// }) {
//     if (!data) return null;

//     const {
//         eyebrow,
//         title,
//         paragraphs = [],
//         footer,
//         image = {},
//     } = data;

//     return (
//         <section
//             className={`w-full bg-[#F4EFEA] py-16 md:py-24 px-6 sm:px-10 lg:px-16 ${className}`}
//         >
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//                 {/* Left Column: Image */}

//                 <div className="lg:col-span-6 relative rounded-sm overflow-hidden shadow-xl group">
//                     <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">

//                         {image.src && (
//                             <Image
//                                 src={image.src}
//                                 alt={image.alt || image.caption || 'About our sawmill'}
//                                 fill
//                                 priority
//                                 sizes="(max-width: 1024px) 100vw, 50vw"
//                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//                             />
//                         )}

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

//                         <div className="absolute bottom-6 left-6 right-6 text-white">

//                             {image.location && (
//                                 <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#D49B45] uppercase mb-1.5">
//                                     {image.location}
//                                 </p>
//                             )}

//                             {image.caption && (
//                                 <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
//                                     {image.caption}
//                                 </h3>
//                             )}

//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column: Content */}

//                 <div className="lg:col-span-6 flex flex-col justify-center">

//                     {/* Eyebrow */}

//                     {eyebrow && (
//                         <div className="flex items-center gap-3 mb-4">
//                             <span
//                                 className="w-6 h-[2px] bg-[#C28535]"
//                                 aria-hidden="true"
//                             />

//                             <span className="text-xs sm:text-sm font-bold tracking-widest text-[#B5732A] uppercase">
//                                 {eyebrow}
//                             </span>
//                         </div>
//                     )}

//                     {/* Heading */}

//                     {title && (
//                         <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#14261C] leading-[1.12] tracking-tight mb-6">
//                             {title.split('\n').map((line, index) => (
//                                 <React.Fragment key={index}>
//                                     {line}
//                                     {index !== title.split('\n').length - 1 && <br />}
//                                 </React.Fragment>
//                             ))}
//                         </h2>
//                     )}

//                     {/* Paragraphs */}

//                     {paragraphs.length > 0 && (
//                         <div className="space-y-4 text-[#4A4F46] text-sm sm:text-base leading-relaxed">
//                             {paragraphs.map((paragraph, index) => (
//                                 <p key={index}>
//                                     {paragraph}
//                                 </p>
//                             ))}
//                         </div>
//                     )}

//                     {/* Footer */}

//                     {footer && (
//                         <div className="mt-8 pt-6 border-t border-[#DBD5C9]">
//                             <p className="text-xs sm:text-sm font-bold tracking-wider text-[#1C2C20] uppercase">
//                                 {footer}
//                             </p>
//                         </div>
//                     )}

//                 </div>
//             </div>
//         </section>
//     );
// }
