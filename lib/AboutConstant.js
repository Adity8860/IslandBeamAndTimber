import React from "react";
import { TreePine, ShieldCheck, Users, Leaf, Axe, Compass, Award, CheckCircle2 } from "lucide-react";

export const storyParagraphs = [
    'Our roots run deep in Vancouver Island’s forests, where hard work and expertise are our greatest assets. As a locally owned and operated company, we’re proud to support our community through responsible forestry, sustainable practices, and quality craftsmanship.',
    'Island Beam & Timber was founded with a clear purpose: to provide reliable, high-quality timber and forest products while caring for the land that sustains us. Our commitment to the region drives everything we do — from sustainable harvesting to delivering exceptional products.',
    'From our working forests to building a better tomorrow, our story continues to grow.',
];

export const visionCards = [
    {
        id: 1,
        tag: "01 / SOURCING",
        icon: <TreePine className="w-6 h-6 " />,
        title: "Local Timber Supply",
        desc: "Sourcing logs directly from Vancouver Island working forests to keep materials and economic value right here in our community.",
        description: "Sourcing logs directly from Vancouver Island working forests to keep materials and economic value right here in our community.",
    },
    {
        id: 2,
        tag: "02 / STEWARDSHIP",
        icon: <ShieldCheck className="w-6 h-6 " />,
        title: "Sustainable Practices",
        desc: "Low-impact processing, salvage wood recovery, and selective milling that honors the forest and minimizes waste.",
        description: "Low-impact processing, salvage wood recovery, and selective milling that honors the forest and minimizes waste.",
    },
    {
        id: 3,
        tag: "03 / COMMUNITY",
        icon: <Users className="w-6 h-6 " />,
        title: "Local Partnerships",
        desc: "Proudly supporting Vancouver Island homebuilders, timber framers, craftspeople, and civic infrastructure projects.",
        description: "Proudly supporting Vancouver Island homebuilders, timber framers, craftspeople, and civic infrastructure projects.",
    },
    {
        id: 4,
        tag: "04 / LONGEVITY",
        icon: <Leaf className="w-6 h-6 " />,
        title: "Built for Generations",
        desc: "Milling structural beams and dimensional lumber engineered for coastal weather, designed to endure for decades.",
        description: "Milling structural beams and dimensional lumber engineered for coastal weather, designed to endure for decades.",
    },
];

export const storyData = {
    label: "OUR STORY",
    title: "Built on Experience.",
    subtitle: "Driven by Community.",
    paragraphs: [
        "Island Beam & Timber began with a simple belief: good wood has more to give. Our story brings together Daniel’s more than 15 years in the firewood business and our shared vision for a dependable local sawmill.",
        "Daniel’s strong connections within the forestry community, practical knowledge of timber and years of hands-on work are the foundation of this new chapter. From working with logs to helping keep homes warm, that experience has shaped how we see the material—and the possibilities within it.",
        "Today, we’re bringing that same care into sawmilling. A log can become a beam above a family’s living room, cedar for an outdoor gathering place or lumber for a workshop someone has imagined for years. Being part of that journey is what gives our work meaning.",
        "We’re a growing mill, proud of our roots and committed to learning, improving and building lasting relationships with the people who choose our wood."],
    image: {
        src: "/Images/About/forestry.webp",
        alt: "Freshly milled timber stacked at a forest-side lumber yard on Vancouver Island"
    }
};

export const approachData = {
    label: "OUR APPROACH",
    title: "From Forest to",
    subtitle: "Future.",
    paragraphs: [
        "We work with homeowners, builders and woodworkers who want the right material for their project and a clear conversation about what’s possible. We take the time to understand your cut list, discuss sizes and finishes, and confirm the details before work begins.",
        "Our lumber includes Douglas fir, red cedar and yellow cedar, with custom beams up to 32 feet, rough-sawn and planed lumber, S4S, tongue & groove and maple slabs. Whether you need a few boards or timber for a larger build, we bring the same practical, personal approach to the order.",
        "Our vision reaches beyond the lumber we sell. We want to make thoughtful use of wood, grow opportunities close to home and become a mill our community can rely on—one beam, one project and one relationship at a time."],
    image: {
        src: "/Images/About/mill-wide.webp",
        alt: "Woodworker shaping a heavy timber beam in the sawmill workshop"
    }
};

export const millMilestones = [
    { value: "20+", label: "Years in Forestry & Milling", detail: "Decades of hands-on West Coast timber experience." },
    { value: "32 ft", label: "Max Clear-Span Length", detail: "Custom long-length beams sawn for bold architectural designs." },
    { value: "3", label: "Core Native Species", detail: "Specializing in Coastal Douglas fir, Red cedar, and Yellow cedar." },
    { value: "100%", label: "Island Sourced & Operated", detail: "Keeping timber value and skilled employment on Vancouver Island." },
];

export const valuesPillars = [
    {
        title: "Custom Cut Precision",
        text: "Every project has unique requirements. We cut to your exact schedule and specifications, not standard big-box limitations.",
    },
    {
        title: "Full Forest Utilization",
        text: "From structural feature beams down to firewood and clean cedar mulch, we maximize every cubic foot of wood we mill.",
    },
    {
        title: "Direct Sawmill Guidance",
        text: "Speak directly with the sawyers handling your order. We help select the right species, moisture content, and finish profile.",
    },
];



// import React from "react";
// import { TreePine, ShieldCheck, Users, Leaf, Axe, Compass, Award, CheckCircle2 } from "lucide-react";

// export const storyParagraphs = [
//     'Our roots run deep in Vancouver Island’s forests, where hard work and expertise are our greatest assets. As a locally owned and operated company, we’re proud to support our community through responsible forestry, sustainable practices, and quality craftsmanship.',
//     'Island Beam & Timber was founded with a clear purpose: to provide reliable, high-quality timber and forest products while caring for the land that sustains us. Our commitment to the region drives everything we do — from sustainable harvesting to delivering exceptional products.',
//     'From our working forests to building a better tomorrow, our story continues to grow.',
// ];

// export const visionCards = [
//     {
//         id: 1,
//         tag: "01 / SOURCING",
//         icon: <TreePine className="w-6 h-6 " />,
//         title: "Local Timber Supply",
//         desc: "Sourcing logs directly from Vancouver Island working forests to keep materials and economic value right here in our community.",
//         description: "Sourcing logs directly from Vancouver Island working forests to keep materials and economic value right here in our community.",
//     },
//     {
//         id: 2,
//         tag: "02 / STEWARDSHIP",
//         icon: <ShieldCheck className="w-6 h-6 " />,
//         title: "Sustainable Practices",
//         desc: "Low-impact processing, salvage wood recovery, and selective milling that honors the forest and minimizes waste.",
//         description: "Low-impact processing, salvage wood recovery, and selective milling that honors the forest and minimizes waste.",
//     },
//     {
//         id: 3,
//         tag: "03 / COMMUNITY",
//         icon: <Users className="w-6 h-6 " />,
//         title: "Local Partnerships",
//         desc: "Proudly supporting Vancouver Island homebuilders, timber framers, craftspeople, and civic infrastructure projects.",
//         description: "Proudly supporting Vancouver Island homebuilders, timber framers, craftspeople, and civic infrastructure projects.",
//     },
//     {
//         id: 4,
//         tag: "04 / LONGEVITY",
//         icon: <Leaf className="w-6 h-6 " />,
//         title: "Built for Generations",
//         desc: "Milling structural beams and dimensional lumber engineered for coastal weather, designed to endure for decades.",
//         description: "Milling structural beams and dimensional lumber engineered for coastal weather, designed to endure for decades.",
//     },
// ];

// export const storyData = {
//     label: "OUR STORY",
//     title: "Built on Experience.",
//     subtitle: "Driven by Community.",
//     paragraphs: [
//         "Our roots run deep in Vancouver Island’s forests, where hard work, timber knowledge, and craftsmanship are our greatest assets. As a locally owned and operated sawmill, we take pride in connecting local wood to the builders, families, and craftspeople who shape our island.",
//         "Island Beam & Timber was founded with a clear purpose: to provide dependable, precision-sawn timber and custom milling while respecting the land that sustains us. From sourcing sustainable logs to precision-cutting 32-foot structural bents, we hold ourselves to the highest standard of woodcraft.",
//         "Whether you're building a timber-frame family home, crafting exposed architectural trusses, or framing an honest outbuilding, we treat every order with personal care and integrity."
//     ],
//     image: {
//         src: "/Images/BTImg/IMG1.png",
//         alt: "Freshly milled timber stacked at a forest-side lumber yard on Vancouver Island"
//     }
// };

// export const approachData = {
//     label: "OUR APPROACH",
//     title: "From Forest to",
//     subtitle: "Future.",
//     paragraphs: [
//         "We take pride in turning raw logs into something meaningful—a Douglas fir beam centered above a family's living room, Western red cedar for a seaside patio, or yellow cedar decking that outlasts the coastal rains.",
//         "We supply Douglas fir, Western red cedar, and yellow cedar, alongside planned lumber (S4S), tongue-and-groove panelling, and custom beams in lengths up to 32 feet. By managing the process from log selection to final cut, we ensure grain orientation, strength, and finish are perfectly matched to your blueprints."
//     ],
//     image: {
//         src: "/Images/BTImg/img2.png",
//         alt: "Woodworker shaping a heavy timber beam in the sawmill workshop"
//     }
// };

// export const millMilestones = [
//     { value: "20+", label: "Years in Forestry & Milling", detail: "Decades of hands-on West Coast timber experience." },
//     { value: "32 ft", label: "Max Clear-Span Length", detail: "Custom long-length beams sawn for bold architectural designs." },
//     { value: "3", label: "Core Native Species", detail: "Specializing in Coastal Douglas fir, Red cedar, and Yellow cedar." },
//     { value: "100%", label: "Island Sourced & Operated", detail: "Keeping timber value and skilled employment on Vancouver Island." },
// ];

// export const valuesPillars = [
//     {
//         title: "Custom Cut Precision",
//         text: "Every project has unique requirements. We cut to your exact schedule and specifications, not standard big-box limitations.",
//     },
//     {
//         title: "Full Forest Utilization",
//         text: "From structural feature beams down to firewood and clean cedar mulch, we maximize every cubic foot of wood we mill.",
//     },
//     {
//         title: "Direct Sawmill Guidance",
//         text: "Speak directly with the sawyers handling your order. We help select the right species, moisture content, and finish profile.",
//     },
// ];

