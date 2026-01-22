import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteSelector from "@/components/SiteSelector";

const Index = () => {
  const [showSelector, setShowSelector] = useState(true);

  // URL do site externo - substituir quando o link for fornecido
  const externalSiteUrl = ""; // Ex: "https://outro-site.com.br"

  const handleSelectCurrent = () => {
    setShowSelector(false);
  };

  return (
    <>
      <AnimatePresence>
        {showSelector && (
          <SiteSelector
            onSelectCurrent={handleSelectCurrent}
            externalSiteUrl={externalSiteUrl || undefined}
          />
        )}
      </AnimatePresence>

      {!showSelector && (
        <main className="overflow-x-hidden">
          <Header />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Values />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </main>
      )}
    </>
  );
};

export default Index;