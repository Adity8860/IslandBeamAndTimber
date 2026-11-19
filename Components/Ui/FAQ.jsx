'use client';

import React, { useState } from 'react';

export default function FAQSection({
    data = [],
    className = '',
    defaultOpenId = null,
    defaultOpenIds = [],
    allowMultiple = false,
    tone = 'light',
}) {
    const [activeId, setActiveId] = useState(defaultOpenId);
    const [activeIds, setActiveIds] = useState(defaultOpenIds);
    const isDark = tone === 'dark';

    if (!data?.length) return null;

    const handleToggle = (id) => {
        if (allowMultiple) {
            setActiveIds((previous) => previous.includes(id)
                ? previous.filter((activeItemId) => activeItemId !== id)
                : [...previous, id]);
            return;
        }
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <div className={`bg-transparent ${className}`}>
            {data.map((item) => {
                const isOpen = allowMultiple ? activeIds.includes(item.id) : activeId === item.id;

                return (
                    <div
                        key={item.id}
                        className={`border-t last:border-b ${isDark ? 'border-white/20' : 'border-[#D0D2C8]'}`}
                    >
                        <h3>
                            <button
                                type="button"
                                id={`faq-question-${item.id}`}
                                onClick={() => handleToggle(item.id)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${item.id}`}
                                className={`flex w-full items-center justify-between gap-6 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98216] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:py-8 ${isDark ? 'text-white' : 'text-[#002B2B]'}`}
                            >
                                <span className="text-lg font-normal leading-snug sm:text-xl">
                                    {item.question}
                                </span>
                                <span data-reveal style={{ "--d": "220ms" }}
                                    aria-hidden="true"
                                    className={`relative grid size-4 shrink-0 place-items-center text-xl font-light leading-none ${isDark ? 'text-[#D9B258]' : 'text-[#B98216]'}`}
                                >
                                    <span className="absolute h-[1.5px] w-3.5 bg-current" />
                                    {!isOpen && <span className="absolute h-3.5 w-[1.5px] bg-current" />}
                                </span>
                            </button>
                        </h3>

                        <div
                            data-reveal
                            id={`faq-answer-${item.id}`}
                            role="region"
                            aria-labelledby={`faq-question-${item.id}`}
                            hidden={!isOpen}
                            className={`pb-7 pr-10 text-base leading-relaxed sm:pr-12 sm:text-lg ${isDark ? 'text-[#D4DED5]' : 'text-[#344054]'}`}
                        >
                            {item.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
