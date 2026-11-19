import { siteConfig } from "./siteConfig";

const mobileMillingHero = {
    id: "mobile-milling",
    badge: "Milling services",
    title: ["From your logs.", "To your plans.", "We make the cut."],
    description: "Custom milling at our yard or mobile milling at your property. We turn timber into useful lumber—and help with loading and delivery along the way.",
    location: { left: "Comox Valley, BC", right: "Milling · mobile milling · delivery" },
    primaryAction: { label: "Discuss your milling project", href: "#enquiry" },
    secondaryAction: { label: "Explore our services", href: "#services" },
    specs: [
        { value: "At our mill", description: "Custom cuts & beams up to 32 ft" },
        { value: "At your site", description: "Mobile milling by arrangement" },
        { value: "On the move", description: "Delivery & forklift loading" },
    ],
};

export const mobileMillingData = [
    { ...mobileMillingHero, id: "milling-yard", image: { src: "/Images/milling/milling-running.jpg", alt: "Sawmill equipment beneath a timber frame shelter" }, imageCaption: "WHERE LOGS BECOME YOUR NEXT PROJECT" },
    { ...mobileMillingHero, id: "milling-mobile", image: { src: "/Images/milling/IMG_4734.JPEG", alt: "Mobile milling equipment at work" }, imageCaption: "LOADING SUPPORT AT OUR YARD" },
    { ...mobileMillingHero, id: "milling-lumber", image: { src: "/Images/milling/milling-beams.jpg", alt: "Freshly milled lumber ready for a project" }, imageCaption: "TIMBER CUT AROUND YOUR PLANS" },
];

export const mobileMillingCards = [
    { id: "yard", number: "01", eyebrow: "At our yard", title: "Custom milling.\nYour dimensions.", description: "Boards, posts, beams and slabs cut for your project. We work with Douglas fir, red cedar, yellow cedar and maple, with beam lengths up to 32 feet at our mill." },
    { id: "property", number: "02", eyebrow: "At your property", title: "Mobile milling.\nCloser to your logs.", description: "Have logs on your land? We offer mobile milling by arrangement. Send your location, log sizes, photos and the lumber you’re hoping to produce." },
    { id: "delivery", number: "03", eyebrow: "Loading & delivery", title: "We deliver.\nWe help you load.", description: "We deliver lumber and timber orders, and have a forklift at the yard to assist with loading. We’ll confirm transport, site access and delivery charges." },
];

export const mobileMillingFaqs = [
    { id: "property", question: "Can you mill logs from my property?", answer: "Mobile milling is available by arrangement. Send photos, log sizes and your location so we can discuss access and scheduling." },
    { id: "delivery", question: "Do you deliver lumber and beams?", answer: "Yes. Tell us where the order is going and we’ll confirm delivery options, access requirements and charges." },
    { id: "loading", question: "Can you help load my order?", answer: "We have forklift loading available at our yard for suitable orders." },
    { id: "finish", question: "Can you plane or dry the lumber as well?", answer: "Ask about planing, kiln drying and other finishing options when you send your project details." },
];

export const mobileMillingEnquiry = {
    email: siteConfig.email,
    services: [
        { label: "Custom milling at your yard", value: "Yard milling" },
        { label: "Mobile milling at my property", value: "Mobile milling" },
        { label: "Loading or delivery", value: "Loading and delivery" },
    ],
};
