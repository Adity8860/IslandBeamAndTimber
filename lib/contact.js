import { siteConfig } from "./siteConfig";
export const enquiryData = {
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
