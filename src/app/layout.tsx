import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { StructuredData } from "@/components/StructuredData";
import { profile } from "@/data/profile";
import { siteDescription, siteName, siteTitle, siteUrl, socialImageUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ["Revanth Ajoe", "AI/ML Engineer", "Software Developer", "machine learning", "full-stack development"],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteShell>
          <StructuredData
            data={[
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Revanth Ajoe",
                url: siteUrl,
                jobTitle: profile.title,
                sameAs: [profile.social.github, profile.social.linkedin],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteName,
                url: siteUrl,
                description: siteDescription,
              },
            ]}
          />
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
