import { siteConfig } from "./siteConfig";

const customLumberSlide = {
    id: "custom-lumber",
    badge: "Custom lumber",
    title: ["Your project.", "Your dimensions.", "Our mill."],
    description: "Douglas fir, red cedar and yellow cedar. Cut to your list, with the care and personal service of a local Vancouver Island mill.",
    location: {
        left: "Comox Valley, BC",
        right: "Real wood. Real possibilities.",
    },
    primaryAction: { label: "Let’s plan your order", href: "/contact" },
    secondaryAction: { label: "Explore the wood", href: "#services" },
    specs: [
        { value: "32 ft", description: "Custom beam lengths up to 32 feet" },
        { value: "3 species", description: "Douglas fir · Red cedar · Yellow cedar" },
        { value: "Your finish", description: "Rough-sawn · Planed · S4S · T&G" },
    ],
};

export const customLumberData = [
    {
        ...customLumberSlide,
        id: "custom-lumber-mill",
        image: {
            src: "/Images/customlumberimg/IMG_0257.JPEG",
            alt: "Freshly milled lumber being moved through a Vancouver Island sawmill yard",
        },
        imageCaption: "From our mill to your next build",
    },
    {
        ...customLumberSlide,
        id: "custom-lumber-beams",
        image: {
            src: "/Images/customlumberimg/IMG_0310.JPEG",
            alt: "Large custom milled timber beams stacked at the sawmill",
        },
        imageCaption: "Milled to your dimensions",
    },
    {
        ...customLumberSlide,
        id: "custom-lumber-workshop",
        image: {
            src: "/Images/customlumberimg/IMG_4666.JPEG",
            alt: "Timber frame and sawmill equipment beneath the mill shelter",
        },
        imageCaption: "Built with local timber",
    },
];

export const lumberSpecies = [
    {
        id: "douglas-fir",
        number: "01",
        name: "Douglas fir",
        eyebrow: "Our beam specialty",
        title: ["Douglas fir.", "Big possibilities."],
        copy: "Custom beams, posts, timbers and dimensional lumber for your next build. From exposed timber details to outdoor structures, tell us the sizes and lengths your project calls for.",
        tags: ["Beams & posts", "Dimensional lumber", "Custom lengths"],
    },
    {
        id: "red-cedar",
        number: "02",
        name: "Red cedar",
        eyebrow: "Naturally suited to the outdoors",
        title: ["Red cedar.", "Made to weather well."],
        copy: "A practical choice for cladding, fencing, garden structures and custom exterior details, with the warm character cedar is known for.",
        tags: ["Exterior projects", "Siding & decking", "Custom profiles"],
    },
    {
        id: "yellow-cedar",
        number: "03",
        name: "Yellow cedar",
        eyebrow: "A distinctive timber option",
        title: ["Yellow cedar.", "More possibilities."],
        copy: "Bring yellow cedar into your custom woodwork and outdoor projects. Tell us the application and required sizes so we can confirm suitable material and current availability.",
        tags: ["Custom dimensions", "Outdoor details", "Specialty requests"],
    },
];

export const customLumberFaqs = [
    {
        id: "requested-size",
        question: "Can you make my requested size?",
        answer: "Send us the species, thickness, width, length and quantity. We’ll confirm what we can produce from available material. Our custom beam capability includes lengths up to 32 feet; final dimensions are confirmed for each order.",
    },
    {
        id: "dry-or-graded",
        question: "Is lumber supplied dry or graded?",
        answer: "Drying condition and grading vary by product and order. Tell us your intended use, moisture needs and any structural specifications so these can be confirmed before you order.",
    },
    {
        id: "delivery",
        question: "Can you arrange delivery?",
        answer: "Share your location, order size and site access details. We’ll confirm delivery options and charges as part of your quote.",
    },
];



export const services = [
    { tag: "CUSTOM BEAMS", title: "Custom Milling & Long Beams", copy: "Made-to-order beams milled to your exact dimensions, species, and finish. Built for the details that make a project yours." },
    { tag: "LIVE EDGE", title: "Live Edge Wood for Your Project", copy: "One-of-a-kind slabs with natural character, carefully selected and prepared for tables, counters, and statement pieces." },
    { tag: "SAWN TO SIZE", title: "Planed Lumber & Finished Profiles", copy: "From rough sawn boards to a smooth, finished profile, get the material and finish your build calls for." },
    { tag: "MILLING", title: "Maple Slabs & Kiln Drying", copy: "Locally sourced maple slabs, air and kiln dried with care for dependable, ready-to-work lumber." },
    { tag: "SAW MILLING", title: "Slab Wood That’s a Bit Different", copy: "Bring us your idea. We can help turn unique logs and special dimensions into useful, beautiful wood." },
    { tag: "CUT TO FIT", title: "Local Roots & Craftsmanship", copy: "A small, hands-on team with the tools and experience to help from the first cut through delivery." },
];

export const values = [
    { title: "Sustainability and Environmental Resource", copy: "We make thoughtful use of local wood, milling with care and respect for the Island’s forests and the people who depend on them." },
    { title: "Versatility and Adaptability", copy: "Every project is different. Our custom milling gives you the flexibility to choose the species, dimensions, and finish that fit." },
    { title: "Natural Beauty and Lasting Character", copy: "Grain, knots, and edge detail make each piece unique. We help bring out what makes your wood worth keeping." },
];



export const enquiryDatCustomLumbera = {
    email: `${siteConfig?.email}`,


    services: [
        { label: "Custom lumber & beams", value: "Custom Lumber" },
        { label: "Milling & mobile milling", value: "Milling services" },
        { label: "Ready-to-go & custom sheds", value: "Garden sheds" },
        { label: "Firewood delivery", value: "Firewood delivery" },
        { label: "Planed lumber / S4S / tongue & groove", value: "Planed lumber" },
        { label: "Delivery & loading", value: "Delivery & loading" },
        { label: "Something else", value: "Something else" },
    ],

    // services: [
    //     "Custom Lumber",
    //     "Beam & Timber",
    //     "Live Edge Slabs",
    //     "Custom Milling",
    //     "Other Enquiries",
    // ],
};
