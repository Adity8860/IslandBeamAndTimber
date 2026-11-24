
function FacebookIcon({ size = 19 }) {
    return (
        <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.019 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.98h-1.513c-1.49 0-1.956.93-1.956 1.885v2.259h3.328l-.532 3.49h-2.796V24C19.612 23.092 24 18.092 24 12.073Z" />
        </svg>
    );
}

function InstagramIcon({ size = 19 }) {
    return (
        <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.848 0 3.204-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.848.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
        </svg>
    );
}


// export const siteConfig = {
//     name: "Island Beam",
//     name1: "Timber",
//     phone: "250-703-3473",
//     phoneLink: "tel:+12507033473",
//     email: "info@islandbeamandtimber.com",
//     emailLink: "mailto:info@islandbeamandtimber.com",
//     address: "5110 Dove Creek Road, Courtenay BC V9J1P4",
//     Logo: '/Icons/LOGO.svg',
//     socialLinks = {
//     // Your existing configuration...
//     // Social Media Links
//     socialLinks: [
//         {
//             name: "Facebook",
//             href: "https://www.facebook.com/YOUR_PAGE",
//             icon: "Facebook",
//         },
//         {
//             name: "Instagram",
//             href: "https://www.instagram.com/YOUR_PAGE",
//             icon: "Instagram",
//         },
//     ],




// };
export const siteConfig = {
    name: "Island Beam",
    name1: "Timber",
    phone: "250-703-3473",
    phoneLink: "tel:+12507033473",
    email: "info@islandbeamandtimber.com",
    emailLink: "mailto:info@islandbeamandtimber.com",
    address: "5110 Dove Creek Road, Courtenay BC V9J1P4",
    Logo: "/Icons/LOGO.svg",

    // Social Media Links
    socialLinks: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61591989005445",
            icon: FacebookIcon,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/islandbeamandtimber/",
            icon: InstagramIcon,
        },
    ],
};

export const productLinks = [
    { name: 'Rough Cut Lumber', href: '/products/rough-cut' },
    { name: 'Heavy Timber & Beams', href: '/products/timber-beams' },
    { name: 'Custom Slabs & Mantels', href: '/products/custom-slabs' },
    { name: 'Tongue & Groove Paneling', href: '/products/tongue-and-groove' },
];

export const NavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Custom lumber', href: '/CustomLumber' },
    { name: 'Milling services', href: '/MobileMilling' },
    { name: 'About us', href: '/About' },
    { name: 'Garden sheds', href: '/GardenShed' },
    { name: 'Firewood', href: '/Firewood' },
    { name: 'Contact us', href: '/Contact' },
];
export const Emailservices = [
    { label: "Custom lumber & beams", value: "Custom Lumber" },
    { label: "Ready-to-go & custom sheds", value: "Garden sheds" },
    { label: "Firewood delivery", value: "Firewood delivery" },
    { label: "Planed lumber / S4S / tongue & groove", value: "Planed lumber" },
    { label: "Delivery & loading", value: "Delivery & loading" },
    { label: "Milling & mobile milling", value: "Milling services" },
    { label: "Something else", value: "Something else" },
]


export const socialLinks = {
    // Your existing configuration...

    socialLinks: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/YOUR_PAGE",
            icon: "Facebook",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/YOUR_PAGE",
            icon: "Instagram",
        },
    ],
};


