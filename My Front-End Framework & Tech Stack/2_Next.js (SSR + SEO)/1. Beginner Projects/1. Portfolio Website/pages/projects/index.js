import Link from "next/link";
import SEO from "../../components/SEO";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <>
      <SEO title="Projects" description="All my portfolio projects" />
      <main>
        <h1>Projects</h1>
        <ul>
          {projects.map(project => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
