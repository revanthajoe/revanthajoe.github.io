import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { getPostBySlug, posts } from "@/data/posts";
import { absoluteUrl, createPageMetadata, siteName } from "@/lib/seo";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: `${post.title} — Revanth Ajoe`,
    description: post.description,
    path: `/posts/${post.slug}`,
    type: "article",
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="post-page">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Person", name: siteName, url: absoluteUrl("/") },
          mainEntityOfPage: absoluteUrl(`/posts/${post.slug}`),
          url: absoluteUrl(`/posts/${post.slug}`),
        }}
      />
      <div className="post-shell">
        <Link className="post-back" href="/posts">Writing <span aria-hidden="true">↖</span></Link>
        <header className="post-header">
          <p className="eyebrow">Technical note</p>
          <h1>{post.title}</h1>
          <p className="post-meta">{post.date} <span aria-hidden="true">·</span> {post.readingTime}</p>
          <p className="post-intro">{post.intro}</p>
          {post.projectHref && post.projectLabel && <Link className="text-link" href={post.projectHref}>Related project: {post.projectLabel} <span aria-hidden="true">↗</span></Link>}
        </header>
        <div className="post-content">
          {post.sections.map((section, index) => {
            if (section.type === "heading") {
              return <h2 key={`${section.type}-${index}`}>{section.title}</h2>;
            }

            if (section.type === "list") {
              return <ul key={`${section.type}-${index}`}>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            }

            if (section.type === "diagram") {
              return <pre className="post-diagram" key={`${section.type}-${index}`}><code>{section.text}</code></pre>;
            }

            return <p key={`${section.type}-${index}`}>{section.text}</p>;
          })}
        </div>
      </div>
    </article>
  );
}