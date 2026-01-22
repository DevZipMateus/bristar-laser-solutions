import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Award } from "lucide-react";
import heroImage from "@/assets/hero-laser.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-white mb-4 sm:mb-6"
          >
            Bristar Laser
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light mb-6 sm:mb-8 leading-relaxed px-2"
          >
            Soluções em corte a laser de alta precisão para matrizes de facarias.
            Tecnologia avançada, qualidade superior e atendimento especializado.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 px-4"
          >
            <a
              href="https://wa.me/5519989233223"
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-display uppercase tracking-wider text-sm sm:text-base md:text-lg flex items-center justify-center gap-2"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#sobre"
              className="btn-outline-light px-6 sm:px-8 py-3 sm:py-4 rounded-md font-display uppercase tracking-wider text-sm sm:text-base md:text-lg"
            >
              Conheça a empresa
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 mx-auto" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2">
                Alta precisão
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">
                Tolerâncias rigorosas e acabamento superior
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 mx-auto" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2">
                Tecnologia avançada
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">
                Equipamentos de última geração
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 sm:col-span-2 md:col-span-1">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 mx-auto" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2">
                Desde 2017
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">
                Experiência e confiabilidade no mercado
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;