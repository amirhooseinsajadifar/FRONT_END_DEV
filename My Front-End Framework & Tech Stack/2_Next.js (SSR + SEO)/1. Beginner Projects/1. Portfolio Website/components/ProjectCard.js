import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem"
    }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link href={`/projects/${project.slug}`}>View Details →</Link>
    </div>
  );
}
