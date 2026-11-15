import { Ruler, ShieldCheck, TreePine } from "lucide-react";

export const finishedLumberSections = [
    {
        id: "finished-lumber",
        eyebrow: "Finished Lumber",
        title: "Built to your exact grain, grade, and dimension.",
        description:
            "Dependable dimensional lumber, finished with care at our mill and delivered ready for the work ahead. Specify the size, species, grade, and quantity your project demands.",
        imageSrc: "/Images/pageImg/img7.png",
        imageAlt: "Finished lumber stacked inside a timber mill",
        primaryAction: { label: "Request a lumber quote", href: "/Contact" },
        secondaryAction: { label: "Talk to our mill team", href: "/Contact" },
        specs: [
            { value: "4/4–12/4", label: "Stock thicknesses" },
            { value: "S4S", label: "Milled to order" },
        ],
    },
];

export const processCards = [
    {
        title: "Selected stock",
        description:
            "Douglas fir, western hemlock, cedar, and other regional species selected for strength and character.",
        icon: <TreePine size={27} strokeWidth={2.2} />,
    },
    {
        title: "True dimensions",
        description:
            "Order surfaced, eased-edge, or rough-sawn lumber in the dimensions that fit your drawings.",
        icon: <Ruler size={27} strokeWidth={2.2} />,
    },
    {
        title: "Reliable grading",
        description:
            "Clear, select structural, and appearance grades sorted to the needs of your build.",
        icon: <ShieldCheck size={27} strokeWidth={2.2} />,
    },
];

export const lumberOptions = [
    { label: "Common dimensions", value: "1×, 2×, 4×, 6×, 8×" },
    { label: "Available lengths", value: "6′–20′, random or specified" },
    { label: "Milling options", value: "Rough, S2S, S4S, eased edge" },
    { label: "Grades", value: "Clear, appearance, structural" },
];
