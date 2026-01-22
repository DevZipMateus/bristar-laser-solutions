import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Mídias da pasta public/fotos e videos/
const mediaItems = [
  { type: "video", src: "/fotos e videos/midia_1.mp4" },
  { type: "video", src: "/fotos e videos/midia_2.mp4" },
  { type: "video", src: "/fotos e videos/midia_3.mp4" },
  { type: "image", src: "/fotos e videos/midia_4.jpg" },
  { type: "image", src: "/fotos e videos/midia_5.jpg" },
  { type: "image", src: "/fotos e videos/midia_6.jpg" },
  { type: "image", src: "/fotos e videos/midia_7.jpg" },
  { type: "image", src: "/fotos e videos/midia_8.jpg" },
  { type: "image", src: "/fotos e videos/midia_9.jpg" },
  { type: "image", src: "/fotos e videos/midia_10.jpg" },
  { type: "image", src: "/fotos e videos/midia_11.jpg" },
  { type: "image", src: "/fotos e videos/midia_12.jpg" },
];

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  // Função para agendar próximo slide
  const scheduleNextSlide = useCallback((delay: number) => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
    autoplayTimeoutRef.current = setTimeout(() => {
      scrollToNext();
    }, delay);
  }, [scrollToNext]);

  // Quando o slide muda
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);

      // Pausa todos os vídeos
      videoRefs.current.forEach((video, index) => {
        if (index !== newIndex) {
          video.pause();
          video.currentTime = 0;
        }
      });

      const currentMedia = mediaItems[newIndex];
      
      if (currentMedia.type === "video") {
        const video = videoRefs.current.get(newIndex);
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Se o vídeo não puder ser reproduzido, avança após 4 segundos
            scheduleNextSlide(4000);
          });
        }
      } else {
        // Para imagens, avança após 4 segundos
        scheduleNextSlide(4000);
      }
    };

    api.on("select", onSelect);
    onSelect(); // Inicializa

    return () => {
      api.off("select", onSelect);
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [api, scheduleNextSlide]);

  // Handler quando o vídeo termina
  const handleVideoEnded = () => {
    scrollToNext();
  };

  // Abre o modal expandido
  const openExpanded = (index: number) => {
    setExpandedIndex(index);
    document.body.style.overflow = "hidden";
  };

  // Fecha o modal expandido
  const closeExpanded = () => {
    setExpandedIndex(null);
    document.body.style.overflow = "";
  };

  // Navegação no modal
  const navigateExpanded = (direction: "prev" | "next") => {
    if (expandedIndex === null) return;
    
    if (direction === "next") {
      setExpandedIndex((expandedIndex + 1) % mediaItems.length);
    } else {
      setExpandedIndex((expandedIndex - 1 + mediaItems.length) % mediaItems.length);
    }
  };

  // Keyboard navigation no modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedIndex === null) return;
      
      if (e.key === "Escape") closeExpanded();
      if (e.key === "ArrowRight") navigateExpanded("next");
      if (e.key === "ArrowLeft") navigateExpanded("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedIndex]);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="section-title text-foreground mb-3 sm:mb-4">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="section-subtitle mx-auto px-2">
            Conheça nossos trabalhos e processos de corte a laser de alta precisão.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {mediaItems.map((media, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-3 md:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className="cursor-pointer overflow-hidden border-border hover:border-primary transition-colors"
                    onClick={() => openExpanded(index)}
                  >
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                      {media.type === "video" ? (
                        <video
                          ref={(el) => {
                            if (el) videoRefs.current.set(index, el);
                          }}
                          src={media.src}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          onEnded={handleVideoEnded}
                        />
                      ) : (
                        <img
                          src={media.src}
                          alt={`Trabalho Bristar Laser ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 hover:opacity-100 transition-opacity font-medium">
                          Clique para expandir
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-6 md:-left-10 lg:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 sm:-right-6 md:-right-10 lg:-right-12" />
          </Carousel>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal Expandido */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeExpanded}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeExpanded}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navegação Anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateExpanded("prev");
              }}
              className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            {/* Mídia Expandida */}
            <motion.div
              key={expandedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {mediaItems[expandedIndex].type === "video" ? (
                <video
                  src={mediaItems[expandedIndex].src}
                  className="max-w-full max-h-[90vh] rounded-lg"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={mediaItems[expandedIndex].src}
                  alt={`Trabalho Bristar Laser ${expandedIndex + 1}`}
                  className="max-w-full max-h-[90vh] rounded-lg object-contain"
                />
              )}
            </motion.div>

            {/* Navegação Próximo */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateExpanded("next");
              }}
              className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {expandedIndex + 1} / {mediaItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
