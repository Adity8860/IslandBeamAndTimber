"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const RESET_MS = 5000;

function Status({ status }) {
    if (!status) return null;
    return (
        <p role="alert" className="enquiry-shake mt-4 rounded-[3px] bg-red-50 px-4 py-3 text-sm text-red-800">
            {status.message}
        </p>
    );
}

function SuccessPanel({ message, height, className }) {
    return (
        <div className={className}>
            <div
                role="status"
                style={{ minHeight: height || undefined }}
                className="enquiry-rise relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-[3px] bg-[#173D2C] px-6 py-12 text-center text-white sm:col-span-2"
            >
                <span className="enquiry-pop grid size-16 place-items-center rounded-full bg-[#F4B323] text-[#102D1F] ring-8 ring-[#F4B323]/25">
                    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path className="enquiry-check" d="M5 12.5 10 17.5 19 7" />
                    </svg>
                </span>
                <h3 className="text-2xl font-normal tracking-[-0.03em] text-[#F4B323]">Thank you!</h3>
                <p className="max-w-md text-sm leading-relaxed text-white/85">{message}</p>
                <p className="text-xs text-white/60">The form will be available again in a few seconds.</p>

                {/* Countdown bar */}
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                    <span className="enquiry-countdown block h-full bg-[#F4B323]" style={{ animationDuration: `${RESET_MS}ms` }} />
                </span>
            </div>
        </div>
    );
}

function ButtonIcon({ loading, className }) {
    if (loading) {
        return (
            <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }
    return <ArrowUpRight className={`${className} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} aria-hidden="true" />;
}

export default function EnquiryForm({
    email,
    services = [],
    className = "",
    fieldClass = "w-full min-h-[57px] rounded-[3px] border-0 bg-[#EAE8DE] px-4 py-4 text-sm font-normal text-[#173D2C] placeholder:text-[#747B73] outline-none transition focus:bg-white focus:ring-2 focus:ring-[#E8B51E] disabled:cursor-not-allowed disabled:opacity-60",
    selectedService: selectedServiceProp,
    onServiceChange,
    buttonText = "Review my enquiry",
    variant = "default",
}) {
    const [localSelectedService, setLocalSelectedService] = useState("");
    const selectedService = selectedServiceProp ?? localSelectedService;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [panelHeight, setPanelHeight] = useState(0);
    const formRef = useRef(null);

    const lock = { disabled: loading };
    const label = loading ? "Submitting..." : buttonText;

    // After success, show the form again once the timer ends.
    // The form remounts, so every field starts empty.
    useEffect(() => {
        if (!submitted) return;
        const t = setTimeout(() => setSubmitted(false), RESET_MS);
        return () => clearTimeout(t);
    }, [submitted]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);
        const fields = Object.fromEntries(formData.entries());
        const additionalDetails = Object.entries(fields)
            .filter(([key]) => !["Name", "Email", "Phone", "Service", "Location", "Message"].includes(key))
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");

        const payload = {
            formType: "Contact Enquiry",
            name: fields.Name || "",
            email: fields.Email || "",
            phone: fields.Phone || "",
            service: fields.Service || fields.Interest || "",
            location: fields.Location || "",
            message: [fields.Message, additionalDetails].filter(Boolean).join("\n"),
        };

        try {
            setError(null);
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to submit enquiry");
            }

            // Keep the panel the same height as the form so the page doesn't jump
            setPanelHeight(formRef.current?.offsetHeight || 0);
            setLocalSelectedService("");
            onServiceChange?.("");
            setSubmitted(true);

        } catch (err) {
            console.error("Enquiry submission error:", err);
            setError({ message: err.message || "Something went wrong. Please try again." });

        } finally {
            setLoading(false);
        }
    };

    const sheen = loading && (
        <span aria-hidden="true" className="enquiry-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    );

    if (submitted) {
        return (
            <SuccessPanel
                className={className}
                height={panelHeight}
                message="Your enquiry has been submitted successfully. We will be in touch soon."
            />
        );
    }

    if (variant === "garden-shed") {
        return (
            <form ref={formRef} onSubmit={handleSubmit} className={className}>
                <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">What would you like to build?</h3>
                <div className="mt-7 grid gap-x-4 gap-y-5 sm:grid-cols-2">
                    <label className="text-xs font-semibold">Your name<input {...lock} required name="Name" autoComplete="name" placeholder="Name" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold">I’m interested in<select {...lock} name="Interest" defaultValue="Ready-to-go sheds" className={`${fieldClass} mt-2`}><option>Ready-to-go sheds</option><option>Custom shed</option><option>Delivery</option><option>Not sure yet</option></select></label>
                    <label className="text-xs font-semibold">Preferred size<input {...lock} name="Preferred size" placeholder="Width × length, or please advise" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold">Preferred style<select {...lock} name="Preferred style" defaultValue="Please advise" className={`${fieldClass} mt-2`}><option>Please advise</option><option>Gable roof</option><option>Single-slope roof</option><option>Custom style</option></select></label>
                    <label className="text-xs font-semibold sm:col-span-2">Your location<input {...lock} name="Location" placeholder="Town / delivery destination" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold sm:col-span-2">Preferred timing<input {...lock} name="Preferred timing" placeholder="When would you like your shed?" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold sm:col-span-2">Ideas, features &amp; access details<textarea {...lock} name="Details" rows="3" placeholder="Intended use, door layout, style ideas or delivery access" className={`${fieldClass} mt-2 resize-y`} /></label>
                </div>
                <button type="submit" {...lock} aria-busy={loading} className="group relative mt-6 flex min-h-[62px] !w-full items-center justify-center overflow-hidden rounded-full bg-[#f2c31b] px-7 text-sm font-bold text-[#073d28] transition-colors hover:bg-[#f5cc3b] disabled:cursor-wait">{sheen}{label}<ButtonIcon loading={loading} className="absolute right-7 size-4" /></button>
                <Status status={error} />
                <p className="mt-4 text-xs leading-relaxed text-[#778078]">Review your enquiry here, then open an email draft. You can attach inspiration and site photos in your email app.</p>
                <a className="mt-5 inline-block text-xs underline underline-offset-4" href={`mailto:${email}`}>Or email {email}</a>
            </form>
        );
    }

    if (variant === "custom-lumber") {
        return (
            <form ref={formRef} onSubmit={handleSubmit} className={className}>

                <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">What are you building?</h3>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <label className="text-xs font-semibold">Your name<input {...lock} required name="Name" placeholder="Name" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold">Wood species<select {...lock} name="Wood species" defaultValue="Douglas fir" className={`${fieldClass} mt-2`}><option>Douglas fir</option><option>Red cedar</option><option>Yellow cedar</option></select></label>
                    <label className="text-xs font-semibold sm:col-span-2">Dimensions & quantities<textarea {...lock} required name="Dimensions" rows="3" placeholder="Example: 8” × 8” × 16 ft — 6 pieces" className={`${fieldClass} mt-2 resize-y`} /></label>
                    <label className="text-xs font-semibold">Surface / finish<select {...lock} name="Surface / finish" defaultValue="Rough-sawn" className={`${fieldClass} mt-2`}><option>Rough-sawn</option><option>Planed</option><option>S4S</option><option>Tongue & groove</option></select></label>
                    <label className="text-xs font-semibold">Preferred timing<input {...lock} name="Preferred timing" placeholder="When do you need it?" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold sm:col-span-2">Project location / delivery<input {...lock} name="Location" placeholder="Town and pickup or delivery preference" className={`${fieldClass} mt-2`} /></label>
                    <label className="text-xs font-semibold sm:col-span-2">Project details<textarea {...lock} name="Project details" rows="3" placeholder="Intended use, finished size requirements or other notes" className={`${fieldClass} mt-2 resize-y`} /></label>
                </div>
                <button type="submit" {...lock} aria-busy={loading} className="group relative mt-8 flex min-h-[62px] !w-full items-center justify-center overflow-hidden rounded-full bg-[#f2c31b] px-7 text-sm font-bold text-[#073d28] transition-colors hover:bg-[#f5cc3b] disabled:cursor-wait">{sheen}{label}<ButtonIcon loading={loading} className="absolute right-7 size-4" /></button>
                <Status status={error} />
                <p className="mt-5 text-xs leading-relaxed text-[#778078]">Review your details, then open an email draft to send to our mill. You can attach drawings or photos in your email app.</p>
                <a className="mt-5 inline-block text-xs underline underline-offset-4" href={`mailto:${email}`}>Or email {email}</a>
            </form>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className={className}>

            {/* Name */}
            <label className="block text-[13px] font-normal text-[#173D2C]">
                Your name *
                <input
                    {...lock}
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
                    {...lock}
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
                    {...lock}
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
                    {...lock}
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
                        <option key={service.value} value={service.value}>
                            {service.label}
                        </option>
                    ))}
                </select>
            </label>

            {/* Location */}
            {/* <label className="block text-[13px] font-normal text-[#173D2C] sm:col-span-2">
                Project or delivery location
                <input
                    {...lock}
                    name="Location"
                    placeholder="Town or delivery destination"
                    className={`${fieldClass} mt-2`}
                />
            </label> */}

            {/* Message */}
            <label className="block text-[13px] font-normal text-[#173D2C] sm:col-span-2">
                Your message *
                <textarea
                    {...lock}
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
                    {...lock}
                    aria-busy={loading}
                    className="group relative flex min-h-[68px] !w-full items-center justify-center overflow-hidden rounded-full bg-[#F2BF1B] px-8 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B] disabled:cursor-wait"
                >
                    {sheen}
                    {label}

                    <ButtonIcon loading={loading} className="absolute right-8 size-4" />
                </button>

                <Status status={error} />

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
// "use client";

// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// export default function EnquiryForm({
//     email,
//     services = [],
//     className = "",
//     fieldClass = "w-full rounded-[3px] border-0 bg-[#EAE8DE] px-4 py-4 text-sm font-normal text-[#173D2C] placeholder:text-[#747B73] outline-none transition focus:bg-white focus:ring-2 focus:ring-[#E8B51E]",
//     selectedService: selectedServiceProp,
//     onServiceChange,
//     buttonText = "Review my enquiry",
//     variant = "default",
// }) {
//     const [localSelectedService, setLocalSelectedService] = useState("");
//     const selectedService = selectedServiceProp ?? localSelectedService;

//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const form = e.currentTarget;

//         const formData = new FormData(form);
//         const fields = Object.fromEntries(formData.entries());
//         const additionalDetails = Object.entries(fields)
//             .filter(([key]) => !["Name", "Email", "Phone", "Service", "Location", "Message"].includes(key))
//             .map(([key, value]) => `${key}: ${value}`)
//             .join("\n");

//         const payload = {
//             formType: "Contact Enquiry",
//             name: fields.Name || "",
//             email: fields.Email || "",
//             phone: fields.Phone || "",
//             service: fields.Service || fields.Interest || "",
//             location: fields.Location || "",
//             message: [fields.Message, additionalDetails].filter(Boolean).join("\n"),
//         };

//         try {
//             setLoading(true);

//             const response = await fetch("/api/contact", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });

//             const result = await response.json();

//             if (!response.ok || !result.success) {
//                 throw new Error(result.message || "Failed to submit enquiry");
//             }

//             alert("Your enquiry has been submitted successfully!");

//             form.reset();

//             setLocalSelectedService("");
//             onServiceChange?.("");

//         } catch (error) {
//             console.error("Enquiry submission error:", error);
//             alert(error.message || "Something went wrong. Please try again.");

//         } finally {
//             setLoading(false);
//         }
//     };



//     // if (!email) return null;

//     if (variant === "garden-shed") {
//         return (
//             // <form action={`mailto:${email}`} method="post" encType="text/plain" className={className}>
//             <form onSubmit={handleSubmit} className={className}>
//                 <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">What would you like to build?</h3>
//                 <div className="mt-7 grid gap-x-4 gap-y-5 sm:grid-cols-2">
//                     <label className="text-xs font-semibold">Your name<input required name="Name" autoComplete="name" placeholder="Name" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold">I’m interested in<select name="Interest" defaultValue="Ready-to-go sheds" className={`${fieldClass} mt-2`}><option>Ready-to-go sheds</option><option>Custom shed</option><option>Delivery</option><option>Not sure yet</option></select></label>
//                     <label className="text-xs font-semibold">Preferred size<input name="Preferred size" placeholder="Width × length, or please advise" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold">Preferred style<select name="Preferred style" defaultValue="Please advise" className={`${fieldClass} mt-2`}><option>Please advise</option><option>Gable roof</option><option>Single-slope roof</option><option>Custom style</option></select></label>
//                     <label className="text-xs font-semibold sm:col-span-2">Your location<input name="Location" placeholder="Town / delivery destination" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold sm:col-span-2">Preferred timing<input name="Preferred timing" placeholder="When would you like your shed?" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold sm:col-span-2">Ideas, features &amp; access details<textarea name="Details" rows="3" placeholder="Intended use, door layout, style ideas or delivery access" className={`${fieldClass} mt-2 resize-y`} /></label>
//                 </div>
//                 <button type="submit" className="group relative mt-6 flex min-h-[62px] w-full items-center justify-center rounded-full bg-[#f2c31b] px-7 text-sm font-bold text-[#073d28] transition-colors hover:bg-[#f5cc3b]">{buttonText}<ArrowUpRight className="absolute right-7 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
//                 <p className="mt-4 text-xs leading-relaxed text-[#778078]">Review your enquiry here, then open an email draft. You can attach inspiration and site photos in your email app.</p>
//                 <a className="mt-5 inline-block text-xs underline underline-offset-4" href={`mailto:${email}`}>Or email {email}</a>
//             </form>
//         );
//     }

//     if (variant === "custom-lumber") {
//         return (
//             //        <form action={`mailto:${email}`} method="post" encType="text/plain" className={`rounded-[3px] bg-[#fbfaf3] p-7 shadow-[0_20px_50px_-40px_rgba(7,61,40,.45)] sm:p-10 ${className}`}>
//             <form onSubmit={handleSubmit} className={className}>

//                 <h3 className="text-[clamp(2rem,3vw,3rem)] font-normal tracking-[-0.055em]">What are you building?</h3>
//                 <div className="mt-8 grid gap-5 sm:grid-cols-2">
//                     <label className="text-xs font-semibold">Your name<input required name="Name" placeholder="Name" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold">Wood species<select name="Wood species" defaultValue="Douglas fir" className={`${fieldClass} mt-2`}><option>Douglas fir</option><option>Red cedar</option><option>Yellow cedar</option></select></label>
//                     <label className="text-xs font-semibold sm:col-span-2">Dimensions & quantities<textarea required name="Dimensions" rows="3" placeholder="Example: 8” × 8” × 16 ft — 6 pieces" className={`${fieldClass} mt-2 resize-y`} /></label>
//                     <label className="text-xs font-semibold">Surface / finish<select name="Surface / finish" defaultValue="Rough-sawn" className={`${fieldClass} mt-2`}><option>Rough-sawn</option><option>Planed</option><option>S4S</option><option>Tongue & groove</option></select></label>
//                     <label className="text-xs font-semibold">Preferred timing<input name="Preferred timing" placeholder="When do you need it?" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold sm:col-span-2">Project location / delivery<input name="Location" placeholder="Town and pickup or delivery preference" className={`${fieldClass} mt-2`} /></label>
//                     <label className="text-xs font-semibold sm:col-span-2">Project details<textarea name="Project details" rows="3" placeholder="Intended use, finished size requirements or other notes" className={`${fieldClass} mt-2 resize-y`} /></label>
//                 </div>
//                 <button type="submit" className="group relative mt-8 flex min-h-[62px] w-full items-center justify-center rounded-full bg-[#f2c31b] px-7 text-sm font-bold text-[#073d28] transition-colors hover:bg-[#f5cc3b]">{buttonText}<ArrowUpRight className="absolute right-7 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
//                 <p className="mt-5 text-xs leading-relaxed text-[#778078]">Review your details, then open an email draft to send to our mill. You can attach drawings or photos in your email app.</p>
//                 <a className="mt-5 inline-block text-xs underline underline-offset-4" href={`mailto:${email}`}>Or email {email}</a>
//             </form>
//         );
//     }

//     return (
//         // <form
//         //     action={`mailto:${email}`}
//         //     method="post"
//         //     encType="text/plain"
//         //     className={`mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2 ${className}`}
//         // >
//         <form onSubmit={handleSubmit} className={className}>

//             {/* Name */}
//             <label className="block text-[13px] font-normal text-[#173D2C]">
//                 Your name *
//                 <input
//                     name="Name"
//                     autoComplete="name"
//                     required
//                     placeholder="Full name"
//                     className={`${fieldClass} mt-2`}
//                 />
//             </label>

//             {/* Email */}
//             <label className="block text-[13px] font-normal text-[#173D2C]">
//                 Email address *
//                 <input
//                     name="Email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     placeholder="you@example.com"
//                     className={`${fieldClass} mt-2`}
//                 />
//             </label>

//             {/* Phone */}
//             <label className="block text-[13px] font-normal text-[#173D2C]">
//                 Phone number
//                 <input
//                     name="Phone"
//                     type="tel"
//                     autoComplete="tel"
//                     placeholder="Best number to reach you"
//                     className={`${fieldClass} mt-2`}
//                 />
//             </label>

//             {/* Service */}
//             <label className="block text-[13px] font-normal text-[#173D2C]">
//                 I'm enquiring about *
//                 <select
//                     name="Service"
//                     required
//                     value={selectedService}
//                     //    onChange={(e) => onServiceChange?.(e.target.value)}
//                     onChange={(e) => {
//                         setLocalSelectedService(e.target.value);
//                         onServiceChange?.(e.target.value);
//                     }}
//                     className={`${fieldClass} mt-2`}
//                 >
//                     <option value="" disabled>
//                         Choose a service
//                     </option>

//                     {services.map((service) => (
//                         <option key={service.value} value={service.value}>
//                             {service.label}
//                         </option>
//                     ))}
//                 </select>
//                 {/* <select
//                     name="Service"
//                     required
//                     value={selectedService}
//                     onChange={(e) => {
//                         setLocalSelectedService(e.target.value);
//                         onServiceChange?.(e.target.value);
//                     }}
//                     className={`${fieldClass} mt-2`}
//                 >
//                     <option value="" disabled>
//                         Choose a service
//                     </option>

//                     {services.map((service) => (
//                         <option key={service} value={service}>
//                             {service}
//                         </option>
//                     ))}
//                 </select> */}
//             </label>

//             {/* Location */}
//             <label className="block text-[13px] font-normal text-[#173D2C] sm:col-span-2">
//                 Project or delivery location
//                 <input
//                     name="Location"
//                     placeholder="Town or delivery destination"
//                     className={`${fieldClass} mt-2`}
//                 />
//             </label>

//             {/* Message */}
//             <label className="block text-[13px] font-normal text-[#173D2C] sm:col-span-2">
//                 Your message *
//                 <textarea
//                     name="Message"
//                     required
//                     rows={5}
//                     placeholder="Sizes, quantities, preferred timing and anything else we should know"
//                     className={`${fieldClass} mt-2 resize-y`}
//                 />
//             </label>

//             {/* Submit */}
//             <div className="sm:col-span-2">
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="group relative flex min-h-[68px] w-full items-center justify-center rounded-full bg-[#F2BF1B] px-8 text-sm font-bold text-[#102D1F] transition-colors hover:bg-[#F5CC3B]"
//                 >
//                     {loading ? "Submitting..." : buttonText}

//                     <ArrowUpRight className="absolute right-8 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </button>

//                 <p className="mt-4 text-xs leading-relaxed text-[#697267]">
//                     Review your details, then open an email draft to our team.
//                     You can attach photos and drawings in your email app.
//                 </p>

//                 <a
//                     className="mt-4 inline-block text-xs text-[#173D2C] underline underline-offset-4"
//                     href={`mailto:${email}`}
//                 >
//                     {email}
//                 </a>
//             </div>
//         </form>
//     );
// }
