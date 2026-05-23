import type { Metadata } from "next";

import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Emergency STS and Cargo Transfer`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | Emergency STS and Cargo Transfer`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Emergency STS and Cargo Transfer`,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      {
        url: "/images/brand/aes-favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/brand/aes-favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="aes-shell min-h-screen">
          <ScrollProgress />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
