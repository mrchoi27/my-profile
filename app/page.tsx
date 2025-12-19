import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <main>
      <AnimatedSection animation="fade">
        <Hero />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={100}>
        <About />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={100}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={100}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={100}>
        <Contact />
      </AnimatedSection>
    </main>
  );
}
