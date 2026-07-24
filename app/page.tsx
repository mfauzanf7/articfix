import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}