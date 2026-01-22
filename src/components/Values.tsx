import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Gem,
  Lightbulb,
  Clock,
  Handshake,
  Shield,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Precisão e qualidade",
    description:
      "Compromisso absoluto com tolerâncias rigorosas, acabamento superior e repetibilidade em cada matriz produzida.",
  },
  {
    icon: Lightbulb,
    title: "Tecnologia e inovação",
    description:
      "Investimento contínuo em equipamentos, processos e conhecimento técnico para entregar soluções modernas e eficientes.",
  },
  {
    icon: Clock,
    title: "Confiabilidade e prazo",
    description:
      "Cumprimento rigoroso de prazos e especificações técnicas, garantindo segurança e previsibilidade ao cliente.",
  },
  {
    icon: Handshake,
    title: "Parceria com o cliente",
    description:
      "Atuação próxima e colaborativa, entendendo as necessidades produtivas de cada facaria para oferecer soluções sob medida.",
  },
  {
    icon: Shield,
    title: "Ética e transparência",
    description:
      "Relações baseadas em honestidade, clareza técnica e responsabilidade em todas as etapas do trabalho.",
  },
  {
    icon: TrendingUp,
    title: "Excelência operacional",
    description:
      "Busca constante pela melhoria dos processos, redução de desperdícios e alto padrão de entrega.",
  },
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valores" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-primary p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl text-primary-foreground"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Target className="w-8 h-8 sm:w-10 sm:h-10" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold">Missão</h3>
            </div>
            <p className="leading-relaxed text-primary-foreground/90 text-sm sm:text-base">
              Fornecer soluções em corte a laser de matrizes para facarias com
              alta precisão, qualidade e confiabilidade, contribuindo para a
              eficiência produtiva e a padronização dos processos industriais de
              nossos clientes, por meio de tecnologia avançada, conhecimento
              técnico e atendimento especializado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl text-dark-foreground"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold">Visão</h3>
            </div>
            <p className="leading-relaxed text-dark-foreground/90 text-sm sm:text-base">
              Ser reconhecida como referência nacional no corte de matrizes a
              laser para o setor de facarias, destacando-se pela excelência
              técnica, inovação contínua e relacionamento de longo prazo com
              clientes e parceiros, acompanhando a evolução tecnológica da
              indústria metalmecânica.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title text-foreground mb-3 sm:mb-4">
            Nossos <span className="text-primary">valores</span>
          </h2>
          <p className="section-subtitle mx-auto px-2">
            Princípios que guiam nosso trabalho e nosso relacionamento com
            clientes e parceiros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="value-card"
            >
              <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4" />
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;