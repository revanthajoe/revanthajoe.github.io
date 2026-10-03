import { PageIntro } from "@/components/PageIntro";
import { ProjectList } from "@/components/ProjectList";

export default function ProjectsPage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="Selected work" title="Projects" description="A selection of AI systems, developer tools, and full-stack applications. Project links will be connected as the repositories and demos are added." /><ProjectList /></div>;
}
