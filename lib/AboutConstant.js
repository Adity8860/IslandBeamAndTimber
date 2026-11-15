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
        "Our roots run deep in Vancouver Island’s forests, where hard work, timber knowledge, and craftsmanship are our greatest assets. As a locally owned and operated sawmill, we take pride in connecting local wood to the builders, families, and craftspeople who shape our island.",
        "Island Beam & Timber was founded with a clear purpose: to provide dependable, precision-sawn timber and custom milling while respecting the land that sustains us. From sourcing sustainable logs to precision-cutting 32-foot structural bents, we hold ourselves to the highest standard of woodcraft.",
        "Whether you're building a timber-frame family home, crafting exposed architectural trusses, or framing an honest outbuilding, we treat every order with personal care and integrity."
    ],
    image: {
        src: "/Images/BTImg/IMG1.png",
        alt: "Freshly milled timber stacked at a forest-side lumber yard on Vancouver Island"
    }
};

export const approachData = {
    label: "OUR APPROACH",
    title: "From Forest to",
    subtitle: "Future.",
    paragraphs: [
        "We take pride in turning raw logs into something meaningful—a Douglas fir beam centered above a family's living room, Western red cedar for a seaside patio, or yellow cedar decking that outlasts the coastal rains.",
        "We supply Douglas fir, Western red cedar, and yellow cedar, alongside planned lumber (S4S), tongue-and-groove panelling, and custom beams in lengths up to 32 feet. By managing the process from log selection to final cut, we ensure grain orientation, strength, and finish are perfectly matched to your blueprints."
    ],
    image: {
        src: "/Images/BTImg/img2.png",
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

