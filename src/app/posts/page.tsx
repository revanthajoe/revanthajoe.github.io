import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { posts } from "@/data/posts";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Engineering Notes — Revanth Ajoe",
  description: "Technical notes about AI engineering, machine learning systems, full-stack applications, and the decisions behind building them.",
  path: "/posts",
});

export default function PostsPage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="Writing" title="Posts" description="Technical notes on AI engineering, machine learning systems, and the decisions behind building them." /><div className="post-list">{posts.length ? posts.map((post) => <Link className="post-item" href={`/posts/${post.slug}`} key={post.slug}><div><p className="post-date">{post.date}</p><h2>{post.title}</h2><p>{post.excerpt}</p></div><span>{post.readingTime}</span></Link>) : <div className="empty-state empty-posts"><p>No published notes yet.</p><span>New writing on AI engineering and machine learning systems will appear here.</span></div>}</div></div>;
}
