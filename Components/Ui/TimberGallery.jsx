
import React from 'react';

export default function TimberGallery({
    data,
    className = '',
}) {
    if (!data?.images?.length) return null;

    return (
        <section
            className={`w-full bg-[#FAF8F5] py-20 lg:py-28 px-6 sm:px-8 md:px-12 ${className}`}
        >
            <div data-reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

                {data.images.map((item, index) => (
                    <div
                        key={item.id || index}
                        className={`group cursor-pointer flex flex-col ${item.size === 'large'
                            ? 'md:col-span-7'
                            : 'md:col-span-5'
                            }`}
                    >
                        {/* Image */}

                        <div className="relative overflow-hidden h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] bg-stone-200 shadow-sm">

                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={
                                        item.alt ||
                                        item.caption ||
                                        'Timber gallery image'
                                    }
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            )}

                        </div>

                        {/* Caption */}

                        {item.caption && (
                            <p className="mt-3.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#55635B] uppercase transition-colors duration-300 group-hover:text-[#0E2117]">
                                {String(index + 1).padStart(2, '0')} — {item.caption}
                            </p>
                        )}

                    </div>
                ))}

            </div>
        </section>
    );
}
