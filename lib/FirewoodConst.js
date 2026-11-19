import { siteConfig } from "./siteConfig";



const firewoodHero = {
    badge: "Firewood",
    title: ["Island roots.", "Honest work.", "Real warmth."],
    description: "Firewood is where our story began. Today, we bring the same hands-on care to every enquiry—from your first call to planning the load you need.",
    location: {
        left: "Comox Valley, BC",
        right: "From our yard to your woodpile.",
    },
    primaryAction: { label: "Enquire about firewood", href: "#enquiry" },
    secondaryAction: { label: "Call our yard", href: "tel:+12507033473" },
    specs: [
        { value: "15+ years", description: "Daniel’s experience in the firewood business" },
        { value: "Island owned", description: "Rooted in the Comox Valley" },
        { value: "Let’s talk", description: "Firewood delivered to your property" },
    ],
};

export const FirewoodData = [
    {
        ...firewoodHero,
        id: "firewood-story",
        image: {
            src: "/Images/FirewoodImg/IMG_5281.JPEG",
            alt: "Firewood prepared at the Island Beam and Timber yard",
        },
        imageCaption: "Firewood. Prepared at our yard.",
    },
    {
        ...firewoodHero,
        id: "firewood-yard",
        image: {
            src: "/Images/FirewoodImg/fire-bins.jpg",
            alt: "Firewood loads ready for delivery from our yard",
        },
        imageCaption: "Firewood. Prepared at our yard.",
    },
    {
        ...firewoodHero,
        id: "firewood-delivery",
        image: {
            src: "/Images/FirewoodImg/fire-truck.jpg",
            alt: "Seasoned firewood ready for a home delivery",
        },
        imageCaption: "From our yard to your woodpile.",
    },
];

export const FirewoodBodyData = [
    {
        id: "seasoning",
        intro: "Our firewood begins not as waste, but as an intentional continuation of the forest lifecycle. Every cord we produce is reclaimed from local forest thinning, selective salvage, and sawmill trimmings—cured with patience and cut with reverence for the hearth.",
        quote: "“Every piece of seasoned hardwood holds months of forest sunlight and patient air curing. The flame is only as true as the care given to the split.”",
        title: "The Science and Patience of Seasoning",
        description: "Wood crafting is a canvas of patient observation. Moisture testing ensures our split hardwood falls consistently below 18% internal moisture content prior to delivery. Stored on raised cedar bunks with open cross-stack ventilation, coastal winds and seasonal solar warming remove green water gradually without cracking log structural density or scorching essential sapwood sugars.",
        features: [
            {
                title: "Naturally Seasoned",
                description: "Slow air drying through sun and coastal breeze achieves optimum moisture without artificial forced heat.",
                icon: "🌿",
            },
            {
                title: "Selected for Heat Density",
                description: "Hardwood species chosen specifically for clean, soot-free combustion and sustained evening ember beds.",
                icon: "🔥",
            },
        ],
        detail: "Whether stoked in an efficient masonry wood stove, an outdoor stone fireplace, or a wood-fired bread oven, consistent seasoning delivers high thermal output while dramatically minimizing chimney creosote and fine particulate smoke. Each bundle lights quickly, coal beds establish steadily, and heat radiates cleanly well into the cool evening hours.",
        imageSrc: "/Images/FirewoodImg/img3.png",
        imageAlt: "Seasoned firewood stacked in a rustic open-sided woodshed",
        closing: "As we traverse each changing season, we celebrate the role of wood gathering in sustaining community warmth and shared gatherings. From neighborhood deliveries to long-standing island campfires, our firewood pairs traditional woodland stewardship with reliable, unhurried craft.",
    },
];

export const firewoodCards = [
    {
        id: "firewood-order",
        number: "01",
        label: "Your firewood",
        title: "Know what\nyou’re getting.",
        description: "Ask us about the species, cut length, split size and drying condition of the wood currently available. We’ll work through those details before you commit.",
    },
    {
        id: "firewood-quantity",
        number: "02",
        label: "Your quantity",
        title: "A clear order.\nA clear quote.",
        description: "Tell us how much you need—or ask for help with quantities. We’ll confirm the amount, how it’s measured and the price for your order.",
    },
    {
        id: "firewood-location",
        number: "03",
        label: "Your location",
        title: "Plan the load.\nPlan the delivery.",
        description: "Share your town, preferred timing and site access. Our firewood is available by delivery only. We’ll confirm delivery arrangements and charges with your quote.",
    },
];

export const firewoodEnquiry = {
    email: siteConfig.email,
    services: [
        { label: "Custom milling at your yard", value: "Yard milling" },
        { label: "Mobile milling at my property", value: "Mobile milling" },
        { label: "Loading or delivery", value: "Loading and delivery" },
    ],
};

export const firewoodFaqs = [
    {
        id: "availability",
        question: "What firewood is available?",
        answer: "Stock changes. Contact us for current species, quantities, cut lengths, split sizes and pricing. We’ll confirm what’s available for your order."
    },
    {
        id: "seasoned",
        question: "Is the wood seasoned and ready to burn?",
        answer: "Please tell us when you intend to use it. Drying condition varies by load, so we’ll discuss the condition of available wood and whether further drying is needed before you order."
    },
    {
        id: "delivery",
        question: "Can you deliver to my property?",
        answer: "Send your location and quantity, along with access details such as driveway width, slope and where you would like the load placed. We’ll confirm delivery availability, charges and suitable arrangements."
    },
];
