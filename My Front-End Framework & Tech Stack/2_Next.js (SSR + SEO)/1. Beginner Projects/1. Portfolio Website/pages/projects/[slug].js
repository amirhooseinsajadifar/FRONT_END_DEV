import { useRouter } from "next/router";
import SEO from "../../components/SEO";
import projects from "../../data/projects";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find(p => p.slug === slug);

  if (!project) return <p>Loading...</p>;

  return (
    <>
      <SEO title={project.title} description={project.description} />
      <main>
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} width={600} />
        <p>{project.description}</p>
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Live
          </a>
        </p>
      </main>
    </>
  );
}
