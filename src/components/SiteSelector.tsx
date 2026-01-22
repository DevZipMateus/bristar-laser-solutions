import { motion } from "framer-motion";

interface SiteSelectorProps {
  onSelectCurrent: () => void;
  externalSiteUrl?: string;
}

const SiteSelector = ({ onSelectCurrent, externalSiteUrl }: SiteSelectorProps) => {
  const handleExternalClick = () => {
    if (externalSiteUrl) {
      window.location.href = externalSiteUrl;
    } else {
      // Placeholder - quando o link for fornecido, substituir aqui
      alert("Link do site externo ainda não configurado.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
    >
      {/* Background com efeito */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <img
            src="/Captura_de_tela_de_2026-01-22_15-23-10-removebg-preview.png"
            alt="Bristar Laser - Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mx-auto"
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2"
        >
          Bem-vindo à <span className="text-primary">Bristar Matrizes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto px-2"
        >
          Escolha para qual site você deseja ir:
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          {/* Botão Site Atual */}
          <button
            onClick={onSelectCurrent}
            className="group relative w-full max-w-[280px] sm:w-64 md:w-72 overflow-hidden rounded-xl bg-primary p-[2px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]"
          >
            <div className="relative rounded-xl bg-primary px-6 sm:px-8 py-4 sm:py-5 transition-all duration-300 group-hover:bg-primary/90">
              <span className="font-display text-base sm:text-lg font-semibold text-primary-foreground uppercase tracking-wider">
                Bristar Matrizes
              </span>
              <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">
                Site institucional
              </p>
            </div>
          </button>

          {/* Divisor */}
          <span className="text-white/40 text-base sm:text-lg font-display">ou</span>

          {/* Botão Site Externo */}
          <button
            onClick={handleExternalClick}
            className="group relative w-full max-w-[280px] sm:w-64 md:w-72 overflow-hidden rounded-xl border-2 border-white/30 p-[2px] transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]"
          >
            <div className="relative rounded-xl bg-transparent px-6 sm:px-8 py-4 sm:py-5 transition-all duration-300 group-hover:bg-white/5">
              <span className="font-display text-base sm:text-lg font-semibold text-white uppercase tracking-wider">
                Bristar Laser
              </span>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Acesse o site Bristar Laser
              </p>
            </div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SiteSelector;
