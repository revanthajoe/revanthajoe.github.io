import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/projects", "/experience", "/posts", "/about", "/resume"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() }));
}
