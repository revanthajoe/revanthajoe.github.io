import { PageIntro } from "@/components/PageIntro";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="Background" title="Experience" description="A concise record of engineering work and practical learning. Details will be added here as they become available." /><div className="timeline">{experience.length ? experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.role}`}><div><p className="timeline-date">{item.date}</p><h2>{item.role}</h2><p className="muted">{item.company}</p></div><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>) : <p className="empty-state">Experience entries have not been added yet.</p>}</div></div>;
}
