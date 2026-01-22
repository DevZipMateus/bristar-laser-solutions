import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crosshair, Layers, Wrench, Settings, Box, FileCheck } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Crosshair,
    title: "Corte de precisão",
    description:
      "Cortes a laser de alta precisão, servindo de base para as etapas de produção, montagem e ajuste das matrizes.",
  },
  {
    icon: Layers,
    title: "Corte em MDF",
    description:
      "Corte a laser em MDF para prototipagem, validação de geometrias e padronização de modelos.",
  },
  {
    icon: Wrench,
    title: "Gabaritos e moldes",
    description:
      "Desenvolvimento de gabaritos, moldes e matrizes de referência para fabricação de facas.",
  },
  {
    icon: Settings,
    title: "Conjuntos auxiliares",
    description:
      "Fabricação de conjuntos auxiliares utilizados na produção de matrizes para facaria.",
  },
  {
    icon: Box,
    title: "Prototipagem",
    description:
      "Desenvolvimento rápido de protótipos para validação antes da produção em escala.",
  },
  {
    icon: FileCheck,
    title: "Padronização",
    description:
      "Padronização de modelos para produções artesanais até demandas industriais.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="relative section-padding overflow-hidden" ref={ref}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-dark/90" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title text-dark-foreground mb-3 sm:mb-4">
            Nossos <span className="text-primary">serviços</span>
          </h2>
          <p className="section-subtitle mx-auto text-dark-foreground/70 px-2">
            Oferecemos soluções completas em corte a laser para o setor de
            facarias, atendendo desde produções artesanais até demandas
            industriais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-dark-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-dark-foreground/70 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10 sm:mt-12 md:mt-16 px-4"
        >
          <p className="text-dark-foreground/70 mb-4 sm:mb-6 text-base sm:text-lg">
            Precisa de um orçamento personalizado para seu projeto?
          </p>
          <a
            href="https://wa.me/5519989233223"
            className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-display uppercase tracking-wider text-sm sm:text-base md:text-lg inline-flex"
          >
            Fale conosco pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;