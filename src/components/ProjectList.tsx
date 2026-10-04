import { projects } from "@/data/projects";
import Link from "next/link";

export function ProjectList({ limit }: { limit?: number }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-list">
      {visibleProjects.map((project, index) => (
        <article className="project-item" id={project.name.toLowerCase().replaceAll(" ", "-")} key={project.name}>
          <div className="project-index">0{index + 1}</div>
          <div className="project-body">
            <div className="project-heading"><div><h3>{project.name}</h3>{project.date && <span className="project-date">{project.date}</span>}</div></div>
            <p>{project.description}</p>
            <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="project-links">
              {project.github ? <a href={project.github}>GitHub <span aria-hidden="true">↗</span></a> : <span className="placeholder">GitHub link to be added</span>}
              {project.demo && <a href={project.demo}>Demo <span aria-hidden="true">↗</span></a>}
              {project.postSlug && <Link href={`/posts/${project.postSlug}`}>Technical note <span aria-hidden="true">↗</span></Link>}
            </div>
          </div>
        </article>
      ))}
      {!visibleProjects.length && <p className="empty-state">No projects have been added yet.</p>}
    </div>
  );
}
