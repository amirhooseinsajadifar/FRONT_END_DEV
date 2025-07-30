import Link from "next/link";
import SEO from "../components/SEO";
import projects from "../data/projects";

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Welcome to my portfolio!" />
      <main>
        <h1>👋 Hi, I'm [amirhooseinsajadifar]</h1>
        <p>I’m a web developer passionate about building cool stuff.</p>

        <h2>Featured Projects</h2>
        <ul>
          {projects.slice(0, 3).map(project => (
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
