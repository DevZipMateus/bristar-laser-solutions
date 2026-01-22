import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold">
              <span className="text-primary">BRISTAR</span> LASER
            </span>
            <p className="mt-4 text-dark-foreground/70 leading-relaxed">
              Soluções em corte a laser de alta precisão para matrizes de
              facarias. Tecnologia avançada e qualidade superior.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-dark-foreground/70 hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-dark-foreground/70 hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-dark-foreground/70 hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#valores"
                  className="text-dark-foreground/70 hover:text-primary transition-colors"
                >
                  Valores
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-dark-foreground/70 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-dark-foreground/70">
              <li>Corte de precisão</li>
              <li>Corte em MDF</li>
              <li>Gabaritos e moldes</li>
              <li>Prototipagem</li>
              <li>Padronização</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-dark-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/5519989233223" className="hover:text-primary transition-colors">
                  (19) 98923-3223
                </a>
              </li>
              <li className="flex items-center gap-3 text-dark-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:bristar.laser@gmail.com" className="hover:text-primary transition-colors">
                  bristar.laser@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  R. Ver. Walter Obmer Woelzke, 745
                  <br />
                  Valinhos - SP
                </span>
              </li>
              <li className="flex items-center gap-3 text-dark-foreground/70">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Seg a sex: 09h às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-foreground/50 text-sm">
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