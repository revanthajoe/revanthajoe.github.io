import type { Metadata } from "next";

export const siteUrl = "https://revanthajoe.github.io";
export const siteName = "Revanth Ajoe";
export const siteTitle = "Revanth Ajoe — AI/ML Engineer & Software Developer";
export const siteDescription =
  "AI/ML Engineer and Software Developer building practical AI systems, machine learning applications, and full-stack software.";
export const socialImageUrl = `${siteUrl}/opengraph-image`;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({ title, description, path, type = "website" }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      type,
      images: [{ url: socialImageUrl, width: 1200, height: 630, alt: siteTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImageUrl],
    },
  };
}
