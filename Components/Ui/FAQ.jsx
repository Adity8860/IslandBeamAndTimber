'use client';

import React, { useState } from 'react';

export default function FAQSection({
    data = [],
    className = '',
    defaultOpenId = null,
    tone = 'light',
    revealItems = true,
}) {
    const [activeId, setActiveId] = useState(defaultOpenId);
    const isDark = tone === 'dark';

    if (!data?.length) return null;

    const handleToggle = (id) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <div className={`bg-transparent ${className}`}>
            {data.map((item, index) => {
                const isOpen = activeId === item.id;

                return (
                    <div
                        key={item.id}
                        data-reveal={revealItems ? '' : undefined}
                        style={{ '--d': `${index * 70}ms` }}
                        //  className={`group/item relative border-t ${isDark ? 'border-white/15' : 'border-[#D5D2CC]'} last:border-b`}
                        className="group/item relative border-t border-[#D5D2CC] last:border-b"

                    >
                        {/* Accent bar that grows when open */}
                        <span
                            aria-hidden="true"
                            className={`absolute left-0 top-0 h-full w-[3px] origin-top ${isDark ? 'bg-[#D9B258]' : 'bg-[#E87900]'} transition-transform duration-500 ease-out ${isOpen ? 'scale-y-100' : 'scale-y-0'
                                }`}
                        />

                        <h3>
                            <button
                                type="button"
                                id={`faq-question-${item.id}`}
                                onClick={() => handleToggle(item.id)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${item.id}`}
                                className={`flex w-full items-center gap-4 py-6 text-left transition-[padding,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87900] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:gap-6 sm:py-7 ${isOpen ? 'pl-5 sm:pl-6' : 'pl-0 hover:pl-2'
                                    }`}
                            >
                                <span
                                    className={`hidden w-8 shrink-0 text-sm font-bold tabular-nums tracking-wider transition-colors duration-300 sm:block ${isOpen
                                        ? (isDark ? 'text-[#D9B258]' : 'text-[#E87900]')
                                        : (isDark ? 'text-white/50 group-hover/item:text-[#D9B258]' : 'text-[#98A2B3] group-hover/item:text-[#E87900]')
                                        }`}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span
                                    className={`flex-1 text-lg font-semibold transition-colors duration-300 sm:text-xl ${isOpen
                                        ? (isDark ? 'text-white' : 'text-[#002B2B]')
                                        : (isDark ? 'text-white group-hover/item:text-[#D9B258]' : 'text-[#002B2B] group-hover/item:text-[#E87900]')
                                        }`}
                                >
                                    {item.question}
                                </span>

                                {/* Animated plus → cross */}
                                <span
                                    aria-hidden="true"
                                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                        ? (isDark ? 'border-[#D9B258] bg-[#D9B258] text-[#1d3024]' : 'border-[#E87900] bg-[#E87900] text-white')
                                        : (isDark ? 'border-white/25 text-[#D9B258] group-hover/item:border-[#D9B258]' : 'border-[#D5D2CC] text-[#E87900] group-hover/item:border-[#E87900]')
                                        }`}
                                >
                                    <span className="absolute h-[2px] w-3.5 rounded bg-current" />
                                    <span
                                        className={`absolute h-[2px] w-3.5 rounded bg-current transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'
                                            }`}
                                    />
                                    <span
                                        className={`absolute inset-0 rounded-full transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'
                                            }`}
                                    />
                                </span>
                            </button>
                        </h3>

                        {/* Smooth height animation via grid rows */}
                        <div
                            id={`faq-answer-${item.id}`}
                            role="region"
                            aria-labelledby={`faq-question-${item.id}`}
                            aria-hidden={!isOpen}
                            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                                ? 'grid-rows-[1fr] opacity-100'
                                : 'invisible grid-rows-[0fr] opacity-0 [transition:grid-template-rows_500ms_cubic-bezier(0.22,1,0.36,1),opacity_300ms,visibility_0s_500ms]'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p
                                    className={`pb-7 pr-12 text-base font-light leading-relaxed ${isDark ? 'text-[#d4ded5]' : 'text-[#344054]'} transition-all duration-500 sm:pr-16 sm:text-lg ${isOpen
                                        ? 'translate-y-0 pl-5 delay-100 sm:pl-[3.75rem]'
                                        : '-translate-y-2 pl-5 sm:pl-[3.75rem]'
                                        }`}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
