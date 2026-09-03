import type { Metadata } from "next";
import { LenisProvider } from "@/components/LenisProvider";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maie Salameh | Editorial Portfolio",
  description:
    "Garments, objects, and stories rooted in culture, craft, and Palestinian heritage.",
  openGraph: {
    title: "Maie Salameh",
    description:
      "Designing garments, objects, and stories rooted in culture, craft, and heritage.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
