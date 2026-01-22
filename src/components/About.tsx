import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Sobre a <span className="text-primary">Bristar Laser</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Desde 2017, somos especialistas em soluções a laser de alta precisão
            para o setor de facarias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* História */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Nossa história
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2017, a Bristar Laser é uma empresa especializada em
                soluções a laser de alta precisão, atuando com foco em
                tecnologia, eficiência e qualidade. Nosso compromisso é oferecer
                serviços modernos e confiáveis, utilizando equipamentos de
                última geração e processos rigorosamente controlados para
                garantir resultados superiores.
              </p>
              <p>
                Com uma equipe técnica qualificada e em constante atualização, a
                Bristar Laser atende diferentes segmentos, sempre buscando
                personalização, segurança e excelência operacional. A empresa se
                destaca pela agilidade no atendimento, pelo cumprimento de
                prazos e pela busca contínua por inovação.
              </p>
              <p>
                Guiada por princípios de ética, transparência e parceria, a
                Bristar Laser constrói relacionamentos duradouros e se posiciona
                como uma referência em seu mercado, unindo tecnologia a um
                atendimento próximo e profissional.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-card p-8 rounded-lg border border-border text-center card-hover">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-primary mb-2">
                2017
              </div>
              <p className="text-muted-foreground text-sm">Ano de fundação</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center card-hover">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-primary mb-2">
                100+
              </div>
              <p className="text-muted-foreground text-sm">Clientes atendidos</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-center card-hover">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-primary mb-2">
                1000+
              </div>
              <p className="text-muted-foreground text-sm">Projetos entregues</p>
            </div>
          </motion.div>
        </div>

        {/* Market */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-card p-8 md:p-12 rounded-2xl border border-border"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
            Mercado de atuação
          </h3>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              A Bristar Laser atua no mercado industrial metalmecânico, com
              especialização no corte a laser de matrizes para facarias. A
              empresa atende fabricantes de facas e ferramentas de corte que
              exigem alta precisão dimensional, repetibilidade e acabamento
              superior em seus processos produtivos.
            </p>
            <p>
              Utilizando tecnologia de corte a laser de alta performance, a
              Bristar Laser produz matrizes com geometria precisa, excelente
              definição de contornos e tolerâncias rigorosas, garantindo maior
              eficiência no processo de estampagem, forjamento ou conformação
              das lâminas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;