import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="A little context" title="About" description="An engineering-oriented introduction, without the résumé theatre." /><div className="about-layout"><div className="about-copy">{profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><aside className="focus-panel"><p className="eyebrow">Current focus</p><ul>{profile.focus.map((item) => <li key={item}>{item}</li>)}</ul></aside></div></div>;
}
