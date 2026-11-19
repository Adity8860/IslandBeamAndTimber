import { siteConfig } from "./siteConfig";


export const GoldenshedEnquiry = {
    email: siteConfig.email,
    services: [
        { label: "Custom milling at your yard", value: "Yard milling" },
        { label: "Mobile milling at my property", value: "Mobile milling" },
        { label: "Loading or delivery", value: "Loading and delivery" },
    ],
};


export const shedCards = [
    {
        id: 1,
        number: "01",
        label: "Gable roof",
        title: "Classic garden style.",
        description:
            "A familiar roofline and natural wood character. Ask about available sizes or a custom version for your property.",
        image: "/Images/DFSImg/shed-gable.jpg",
        alt: "Douglas fir garden shed with a classic gable roof",
        action: "Enquire about this style",
        href: "#enquiry",
    },
    {
        id: 2,
        number: "02",
        label: "Single-slope roof",
        title: "Simple. Solid. Useful.",
        description:
            "A clean profile for practical backyard storage. Tell us the space you have and the size you’re looking for.",
        image: "/Images/DFSImg/shed-board.jpg",
        alt: "Douglas fir garden shed with a single-slope roof",
        action: "Enquire about this style",
        href: "#enquiry",
    },
    {
        id: 3,
        number: "03",
        label: "Custom builds",
        title: "Make it your own.",
        description:
            "Have a different look in mind? Discuss your preferred footprint, roof style, door layout and finishing details with us.",
        image: "/Images/DFSImg/IMG_5069.JPEG",
        alt: "Custom Douglas fir garden shed built at our mill",
        action: "Discuss a custom shed",
        href: "#enquiry",
    },
];


export const GoldenshedFaqs = [
    {
        id: "availability",
        question: "Do you have sheds ready to go?",
        answer: "Yes, some sheds are ready to go. Contact us for current sizes, styles, pricing and availability. We’ll confirm which sheds are available when you enquire."
    },
    {
        id: "custom-order",
        question: "Can I order a custom size or style?",
        answer: "Yes. Tell us your preferred dimensions, intended use and style ideas. We’ll discuss what we can build and confirm the features, price and timing before the order goes ahead."
    },
    {
        id: "wood-type",
        question: "What wood do you use?",
        answer: "We use premium Douglas fir from our mill for our sheds. Ask us about the construction and finish details for the shed you’re considering."
    },
    {
        id: "delivery",
        question: "Can you deliver to my property?",
        answer: "Delivery services are available. We’ll review your location, access and intended placement, then confirm transport, charges and site preparation before scheduling."
    },
];

const gardenShedHero = {
    badge: "Garden sheds",
    title: ["Built solid.", "Made for you.", "Delivered."],
    description: "Premium Douglas fir sheds, built with lumber from our mill. Choose a ready-to-go option or talk to us about a custom size and style for your backyard.",
    location: {
        left: "Comox Valley, BC",
        right: "Premium Douglas fir · Built on skids",
    },
    primaryAction: { label: "Explore our sheds", href: "#styles" },
    secondaryAction: { label: "Plan a custom shed", href: "#enquiry" },
    specs: [
        { value: "Douglas fir", description: "Premium lumber from our mill" },
        { value: "Your style", description: "Ready-to-go & custom options" },
        { value: "We deliver", description: "Delivery services available" },
    ],
};
export const gardenShedData = [
    {
        ...gardenShedHero,
        id: "garden-shed-gable",
        image: {
            src: "/Images/DFSImg/shed-gable.jpg",
            alt: "Douglas fir post and beam shed under construction at the mill",
        },
        imageCaption: "Solid wood. Natural character.",
    },
    {
        ...gardenShedHero,
        id: "garden-shed-timber-frame",
        image: {
            src: "/Images/DFSImg/shed-board.jpg",
            alt: "Timber gable structure built from Douglas fir",
        },
        imageCaption: "Built with Douglas fir from our mill.",
    },
    {
        ...gardenShedHero,
        id: "garden-shed-custom",
        image: {
            src: "/Images/DFSImg/IMG_5462.JPEG",
            alt: "Douglas fir timber frame prepared at our yard",
        },
        imageCaption: "Ready-to-go or made to suit your plans.",
    },
];
