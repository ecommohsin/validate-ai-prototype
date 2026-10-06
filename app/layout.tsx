import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Validate AI — Building trust in responsible AI",
  description:
    "Validate AI CIC is an independent convening platform for responsible AI, assurance and trustworthy adoption across government, professional bodies, academia and industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="tiled-backdrop min-h-full font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <div className="relative mx-auto min-h-full max-w-[1600px] px-3 pb-3 pt-3 sm:px-4 sm:pb-5 sm:pt-4 lg:px-5">
          <Navbar />
          <main id="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
