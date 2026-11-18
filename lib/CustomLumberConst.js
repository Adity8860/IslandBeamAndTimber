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
            src: "/Images/pageImg/img7.png",
            alt: "Freshly milled lumber being moved through a Vancouver Island sawmill yard",
        },
        imageCaption: "From our mill to your next build",
    },
    {
        ...customLumberSlide,
        id: "custom-lumber-beams",
        image: {
            src: "/Images/pageImg/IMG_0280.JPEG",
            alt: "Large custom milled timber beams stacked at the sawmill",
        },
        imageCaption: "Milled to your dimensions",
    },
    {
        ...customLumberSlide,
        id: "custom-lumber-workshop",
        image: {
            src: "/Images/pageImg/IMG_0311.JPEG",
            alt: "Timber frame and sawmill equipment beneath the mill shelter",
        },
        imageCaption: "Built with local timber",
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
