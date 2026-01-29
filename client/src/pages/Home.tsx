import Layout from "@/components/Layout";
import { Hero, Experience, Projects, Skills, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
