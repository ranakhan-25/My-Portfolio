import AboutSection from "@/components/shared/About";
import Banner from "@/components/shared/Banner";
import ServicesSection from "@/components/shared/Service";
import AllSkills from "@/components/shared/AllSkills";
import ProjectsSection from "@/components/shared/Projects";
import ContactSection from "@/components/shared/Contract";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="service">
        <ServicesSection />
      </section>
      <section id="skills">
        <AllSkills />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contract">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
