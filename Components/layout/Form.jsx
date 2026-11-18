
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function EnquiryForm({
    email,
    services = [],
    className = "",
    fieldClass = "w-full rounded-[3px] border-0 bg-[#EAE8DE] px-4 py-4 text-sm font-normal text-[#173D2C] placeholder:text-[#747B73] outline-none transition focus:bg-white focus:ring-2 focus:ring-[#E8B51E]",
    selectedService: selectedServiceProp,
    onServiceChange,
    buttonText = "Review my enquiry",
}) {
    const [localSelectedService, setLocalSelectedService] = useState("");
    const selectedService = selectedServiceProp ?? localSelectedService;

    if (!email) return null;

    return (
        <form
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            className={`mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2 ${className}`}
        >
            {/* Name */}
            <label className="block text-[13px] font-normal text-[#173D2C]">
                Your name *
                <input
                    name="Name"
                    autoComplete="name"
                    required
                    placeholder="Full name"
                    className={`${fieldClass} mt-2`}
                />
            </label>

            {/* Email */}
            <label className="block text-[13px] font-normal text-[#173D2C]">
                Email address *
                <input
                    name="Email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={`${fieldClass} mt-2`}
                />
            </label>

            {/* Phone */}
            <label className="block text-[13px] font-normal text-[#173D2C]">
                Phone number
                <input
                    name="Phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Best number to reach you"
                    className={`${fieldClass} mt-2`}
                />
            </label>

            {/* Service */}
            <label className="block text-[13px] font-normal text-[#173D2C]">
                I'm enquiring about *
                <select
                    name="Service"
                    required
                    value={selectedService}
                    onChange={(e) => onServiceChange?.(e.target.value)}
                    className={`${fieldClass} mt-2`}
                >
                    <option value="" disabled>
                        Choose a service
                    </option>

                    {services.map((service) => (
                        <option key={service.value} value={service.value}>
                            {service.label}
                        </option>
                    ))}
                </select>
                {/* <select
                    name="Service"
                    required
                    value={selectedService}
                    onChange={(e) => {
                        setLocalSelectedService(e.target.value);
                        onServiceChange?.(e.target.value);
                    }}
                    className={`${fieldClass} mt-2`}
                >
                    <option value="" disabled>
                        Choose a service
                    </option>

                    {services.map((service) => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select> */}
            </label>

            {/* Location */}
            <label className="block text-[13px] font-normal text-[#173D2C] sm:col-span-2">
                Project or delivery location
                <input
                    name="Location"
                    placeholder="Town or delivery destination"
                    className={`${fieldClass} mt-2`}
                />
            </label>

            {/* Message */}
            <label className="block text-[13px] font-normal text-[#173D2C] sm:col-span-2">
                Your message *
                <textarea
                    name="Message"
                    required
                    rows={5}
                    placeholder="Sizes, quantities, preferred timing and anything else we should know"
                    className={`${fieldClass} mt-2 resize-y`}
                />
            </label>

            {/* Submit */}
            <div className="sm:col-span-2">
                <button
                    type="submit"
                    className="group inline-flex min-h-[68px] items-center gap-6 rounded-full bg-[#F2BF1B] px-8 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B]"
                >
                    {buttonText}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="mt-4 text-xs leading-relaxed text-[#697267]">
                    Review your details, then open an email draft to our team.
                    You can attach photos and drawings in your email app.
                </p>

                <a
                    className="mt-4 inline-block text-xs text-[#173D2C] underline underline-offset-4"
                    href={`mailto:${email}`}
                >
                    {email}
                </a>
            </div>
        </form>
    );
}
