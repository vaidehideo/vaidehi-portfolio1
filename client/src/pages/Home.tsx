import Layout from "@/components/Layout";
import { Hero, Competencies, Experience, Education, Projects, Skills, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Competencies />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}