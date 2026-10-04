import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://revanthajoe.github.io";
  return ["", "/projects", "/experience", "/posts", "/posts/building-nexmarket-ai", "/posts/building-soosai-hardwares", "/about", "/resume"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() }));
}
