import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Values />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;