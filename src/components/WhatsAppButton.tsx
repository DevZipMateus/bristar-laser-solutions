import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519989233223"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  );
};

export default WhatsAppButton;