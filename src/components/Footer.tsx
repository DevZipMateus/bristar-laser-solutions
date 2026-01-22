import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <span className="font-display text-xl sm:text-2xl font-bold">
              <span className="text-primary">BRISTAR</span> LASER
            </span>
            <p className="mt-3 sm:mt-4 text-dark-foreground/70 leading-relaxed text-sm sm:text-base">
              Soluções em corte a laser de alta precisão para matrizes de
              facarias. Tecnologia avançada e qualidade superior.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Navegação
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-dark-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-dark-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-dark-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#valores"
                  className="text-dark-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Valores
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-dark-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Serviços
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-dark-foreground/70 text-sm sm:text-base">
              <li>Corte de precisão</li>
              <li>Corte em MDF</li>
              <li>Gabaritos e moldes</li>
              <li>Prototipagem</li>
              <li>Padronização</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contato
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-dark-foreground/70 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <a href="https://wa.me/5519989233223" className="hover:text-primary transition-colors">
                  (19) 98923-3223
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-dark-foreground/70 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <a href="mailto:bristar.laser@gmail.com" className="hover:text-primary transition-colors break-all">
                  bristar.laser@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-dark-foreground/70 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  R. Ver. Walter Obmer Woelzke, 745
                  <br />
                  Valinhos - SP
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-dark-foreground/70 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <span>Seg a sex: 09h às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="text-dark-foreground/50 text-xs sm:text-sm text-center">
              © {currentYear} Bristar Laser LTDA. CNPJ: 30.301.966/0001-20.
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;