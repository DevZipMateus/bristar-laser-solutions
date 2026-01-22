import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#valores", label: "Valores" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a
            href="tel:+5519989233223"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span>(19) 98923-3223</span>
          </a>
          <a
            href="mailto:bristar.laser@gmail.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span>bristar.laser@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center">
            <img 
              src="/Captura_de_tela_de_2026-01-22_15-23-10-removebg-preview.png" 
              alt="Bristar Laser - Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-sm uppercase tracking-wider text-white/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/5519989233223"
            className="hidden md:inline-flex btn-primary px-6 py-3 rounded-md font-display uppercase text-sm tracking-wider"
          >
            Solicitar orçamento
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-md"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-display text-lg uppercase tracking-wider text-white/80 hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/5519989233223"
                  className="inline-flex btn-primary px-6 py-3 rounded-md font-display uppercase text-sm tracking-wider w-full justify-center"
                >
                  Solicitar orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;