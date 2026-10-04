import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About — Revanth Ajoe",
  description: "About Revanth Ajoe, an AI/ML Engineer and Software Developer interested in intelligent systems and thoughtful software.",
  path: "/about",
});

export default function AboutPage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="A little context" title="About" description="An engineering-oriented introduction, without the résumé theatre." /><div className="about-layout"><div className="about-copy">{profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><aside className="focus-panel"><p className="eyebrow">Current focus</p><ul>{profile.focus.map((item) => <li key={item}>{item}</li>)}</ul></aside></div></div>;
}
