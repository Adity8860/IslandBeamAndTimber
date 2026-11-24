
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/layout/Header";
import Footer from "@/Components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://islandbeamandtimber.com"),

  // Canonical URL for homepage
  alternates: {
    canonical: "/",
  },

  title: {
    default: "Island Beam & Timber | Custom Lumber & Sawmill in Comox Valley",
    template: "%s | Island Beam & Timber",
  },

  description:
    "Island Beam & Timber provides custom lumber, Douglas fir beams, cedar timber, mobile milling and sawmill services in Courtenay and the Comox Valley, Vancouver Island, BC.",

  keywords: [
    "island beam and timber",
    "Island Beam and Timber",
    "custom lumber Comox Valley",
    "lumber yard Courtenay BC",
    "custom beams Vancouver Island",
    "Douglas fir lumber",
    "red cedar lumber",
    "yellow cedar timber",
    "mobile sawmill Vancouver Island",
    "custom sawmilling BC",
    "timber supplier Courtenay",
  ],

  authors: [{ name: "Island Beam & Timber" }],
  creator: "Island Beam & Timber",

  icons: {
    icon: "/Icons/LOGO.svg",
    shortcut: "/Icons/LOGO.svg",
    apple: "/Icons/LOGO.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://islandbeamandtimber.com",
    siteName: "Island Beam & Timber",
    title: "Island Beam & Timber | Custom Lumber & Sawmill",
    description:
      "Locally owned sawmill providing custom lumber, beams, cedar timber and milling services in the Comox Valley, BC.",
    images: [
      {
        url: "/images/sawmill-sign.jpg",
        width: 1200,
        height: 630,
        alt: "Island Beam & Timber sawmill on Vancouver Island",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Island Beam & Timber | Custom Lumber & Sawmill",
    description:
      "Custom lumber, beams, cedar timber and mobile milling in the Comox Valley, BC.",
    images: ["/images/sawmill-sign.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-clip scroll-smooth`}
    >
      <body className="min-h-full flex flex-col w-full max-w-full overflow-x-clip">
        <Header />
        <main className="flex-1 w-full max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
