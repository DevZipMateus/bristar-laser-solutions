import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="section-padding section-accent" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title text-foreground mb-3 sm:mb-4">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="section-subtitle mx-auto px-2">
            Estamos prontos para atender você. Entre em contato e solicite um
            orçamento sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">
                  Telefone / WhatsApp
                </h3>
                <a
                  href="https://wa.me/5519989233223"
                  className="text-primary hover:underline text-base sm:text-lg"
                >
                  (19) 98923-3223
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:bristar.laser@gmail.com"
                  className="text-primary hover:underline text-sm sm:text-base md:text-lg break-all"
                >
                  bristar.laser@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  R. Ver. Walter Obmer Woelzke, 745
                  <br />
                  Fonte Nova, Valinhos - SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">
                  Horário de funcionamento
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Segunda a sexta: 09h às 17h
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 sm:pt-6">
              <a
                href="https://wa.me/5519989233223"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-display uppercase tracking-wider text-sm sm:text-base inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Solicitar orçamento
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[300px]"
          >
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3!2d-46.9953!3d-22.9589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6b7d3c7a5af%3A0x5e6f8a9c3d2e1f0b!2sR.%20Ver.%20Walter%20Obmer%20Woelzke%2C%20745%20-%20Fonte%20Nova%2C%20Valinhos%20-%20SP%2C%2013270-110!5e0!3m2!1spt-BR!2sbr!4v1737535200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Bristar Laser - R. Ver. Walter Obmer Woelzke, 745, Valinhos - SP"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;