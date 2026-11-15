import { Clock3, Folder, MapPin, TreePine, Wrench, ArrowUpRight } from "lucide-react";


export const journalCards = [
    {
        id: 1,
        image: "/Images/pageImg/img1.png",
        imageAlt: "Sustainable woodworking",
        tag: "Sustainable Craft",
        title: "The Eco-Conscious Guide to Woodworking",
        description: "Practical ways to make better choices in the workshop.",
    },
    {
        id: 2,
        image: "/Images/pageImg/img2.png",
        imageAlt: "Responsible forestry",
        tag: "Forestry Notes",
        title: "Responsible Wood Production Practices",
        description: "The care that starts long before a board reaches the mill.",
    },
    {
        id: 3,
        image: "/Images/pageImg/img3.png",
        imageAlt: "Lumber prepared for woodworking",
        tag: "Mill Journal",
        title: "Journeying Through Conscious Wood Manufacturing",
        description: "Follow the material from a working forest through the mill and into a finished build.",
    },
];
const cardClass = "!min-h-[220px] !bg-white !p-7 sm:!p-8";

export const services = [
    { title: "More than storage", description: "A thoughtful working space or retreat with the warmth of real timber.", icon: <TreePine />, className: cardClass },
    { title: "Made to last", description: "Traditional joinery and coastal-grade Douglas fir for decades outdoors.", icon: <Wrench />, className: cardClass },
    { title: "Rooted here", description: "Designed and prepared with Vancouver Island’s landscape in mind.", icon: <MapPin />, className: cardClass },
];

export const steps = [
    ["Share the site", "Tell us how you want the shed to work, where it will sit, and what it needs to hold."],
    ["Shape the structure", "We help define scale, details, and a timber package suited to your project."],
    ["Raise it with confidence", "Prepared components arrive ready for a clear, satisfying build."],
];

export const posts = [
    ["Sustainable craft", "The Eco-Conscious Guide to Woodworking", "Practical ways to make better choices in the workshop."],
    ["Forestry notes", "Responsible Wood Production Practices", "The care that starts long before a board reaches the mill."],
    ["Mill journal", "Journeying Through Conscious Wood Manufacturing", "Following material from a working forest to a finished build."],
];
