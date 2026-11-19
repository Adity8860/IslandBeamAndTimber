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
  title: "Island Beam & Timber Ltd. | Lumber Yard & Sawmill",
  description: "Quality lumber and custom timber rooted on Vancouver Island.",

  icons: {
    icon: "/Icons/LOGO.svg",
    shortcut: "/Icons/LOGO.svg",
    apple: "/Icons/LOGO.svg",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-clip`}
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
