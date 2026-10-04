import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", "/experience", "/posts", "/about", "/resume", ...posts.map((post) => `/posts/${post.slug}`)];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path.startsWith("/posts/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/posts/") ? 0.7 : 0.8,
  }));
}
