import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AngularExpertise from "@/components/AngularExpertise";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AngularExpertise />
        <Projects />
        <TechStack />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
