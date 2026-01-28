import { motion } from "framer-motion";
import { Award, Users, Calendar } from "lucide-react";
import eventSafety from "@/assets/event-safety.jpeg";
import eventPresentation from "@/assets/event-presentation.jpeg";
import eventTeam from "@/assets/event-team.jpeg";

const Projects = () => {
  const images = [eventSafety, eventPresentation, eventTeam];

  return (
    <section id="projetos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Destaques
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos e Protagonismo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Momentos que marcaram minha trajetória e demonstram meu compromisso 
            com a excelência e a liderança.
          </p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div 
            className="rounded-3xl overflow-hidden bg-card border border-border shadow-soft"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-accent font-medium text-sm">Liderança Acadêmica</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Chefe de Sala e Organização da SIPAT
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Atuei como chefe de sala e liderei a organização da SIPAT, 
                  coordenando atividades, pessoas e cronogramas, sendo a linha de frente 
                  na promoção da cultura de segurança.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Coordenação de equipes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Gestão de cronogramas</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-auto order-1 md:order-2">
                <img
                  src={eventSafety}
                  alt="Apresentação sobre Segurança do Trabalho"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent md:bg-gradient-to-l" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
            Momentos Marcantes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl aspect-video"
              >
                <img
                  src={image}
                  alt={`Evento ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
