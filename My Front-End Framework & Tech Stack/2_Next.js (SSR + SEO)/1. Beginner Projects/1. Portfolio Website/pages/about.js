import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn more about me" />
      <main>
        <h1>About Me</h1>
        <p>
          I’m a full-stack developer with experience in React, Next.js, and Node.js.
          I enjoy solving real-world problems with clean code.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Tailwind / CSS Modules</li>
        </ul>
      </main>
    </>
  );
}
