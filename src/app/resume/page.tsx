import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/data/profile";
import { achievements, certifications, education, skills } from "@/data/resume";
import { experience } from "@/data/experience";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resume — Revanth Ajoe",
  description: "Resume of Revanth Ajoe, including education, engineering experience, projects, AI and web skills, achievements, and certifications.",
  path: "/resume",
});

export default function ResumePage() {
  return <div className="shell page-wrap"><PageIntro eyebrow="Curriculum vitae" title="Resume" description="A web version of my current resume. Add the final PDF to public/resume.pdf when it is ready." /><div className="resume-grid"><section className="resume-section"><h2>Education</h2><p><strong>{education.degree}</strong><br />{education.institution}, {education.location}<br />{education.detail} · {education.date}</p></section><section className="resume-section"><h2>Experience</h2>{experience.map((item) => <p key={item.company}><strong>{item.role}</strong><br />{item.company} · {item.date}</p>)}</section><section className="resume-section"><h2>Projects</h2><p>Selected projects are available on the <a href="/projects">projects page</a>.</p></section><section className="resume-section"><h2>Technical skills</h2><SkillGroup label="Languages" items={skills.languages} /><SkillGroup label="AI & ML" items={skills.ai} /><SkillGroup label="Libraries" items={skills.libraries} /><SkillGroup label="Web & backend" items={skills.web} /><SkillGroup label="Databases & tools" items={skills.tools} /></section><section className="resume-section"><h2>Achievements</h2><ul className="resume-list">{achievements.map((item) => <li key={item}>{item}</li>)}</ul></section><section className="resume-section"><h2>Certifications</h2><ul className="resume-list">{certifications.map((item) => <li key={item}>{item}</li>)}</ul></section></div><div className="resume-contact"><p><a href={profile.social.email}>{profile.contact.email}</a> · <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a></p><a className="button-link" href="/resume.pdf">Download resume <span aria-hidden="true">↓</span></a></div></div>;
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return <div className="skill-group"><span>{label}</span><p>{items.join(" · ")}</p></div>;
}
