import { PageIntro } from "@/components/PageIntro";
import { ProjectList } from "@/components/ProjectList";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects — Revanth Ajoe",
  description: "Selected AI, machine learning, and full-stack projects built with Python, Next.js, React, FastAPI, and PostgreSQL.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="Selected work" title="Projects" description="A selection of AI systems, developer tools, and full-stack applications built across machine learning and web development." /><ProjectList /></div>;
}
