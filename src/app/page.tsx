import Link from "next/link";
import { profile } from "@/data/profile";
import { ProjectList } from "@/components/ProjectList";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata, siteDescription, siteTitle } from "@/lib/seo";

export const metadata = createPageMetadata({ title: siteTitle, description: siteDescription, path: "/" });

export default function Home() {
  return (
    <div className="shell home-wrap">
      <section className="hero" aria-labelledby="intro-title">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 id="intro-title">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-description">{profile.description}</p>
        <div className="hero-actions"><Link className="button-link" href="/projects">View projects <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/resume">Resume <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="home-section" aria-labelledby="selected-projects"><SectionHeading title="Selected projects" href="/projects" /><ProjectList limit={4} /></section>
      <section className="home-note"><p className="eyebrow">Working at the intersection of</p><p className="note-line">Machine learning <span>/</span> backend systems <span>/</span> thoughtful interfaces</p></section>
    </div>
  );
}
