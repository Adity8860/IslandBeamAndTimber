import CustomLumber from "./CustomLumber";

export const metadata = {
    title: "Custom Lumber & Cedar in Courtenay, Comox Valley, BC",

    description:
        "Order custom-cut Douglas fir, red cedar and yellow cedar lumber from Island Beam & Timber. Quality rough and finished lumber, custom dimensions and timber solutions in the Comox Valley, Vancouver Island.",

    keywords: [
        "custom lumber Comox Valley",
        "custom lumber Courtenay BC",
        "Douglas fir lumber Vancouver Island",
        "red cedar lumber BC",
        "yellow cedar timber",
        "custom cut lumber",
        "rough cut lumber Courtenay",
        "finished lumber Vancouver Island",
        "Island Beam and Timber",
    ],

    openGraph: {
        title: "Custom Lumber | Island Beam & Timber",
        description:
            "Custom-cut Douglas fir, red cedar and yellow cedar lumber in Courtenay and the Comox Valley, BC.",
        url: "https://islandbeamandtimber.com/CustomLumber",
        type: "website",
    },
};

export default function Page() {
    return <CustomLumber />;
}
