import { motion } from "framer-motion";
import { Headphones, BookOpen, Shield } from "lucide-react";

const timelineItems = [
  {
    title: "MAPFRE Seguros",
    description:
      "Minha jornada começou no atendimento ao público, lidando com pessoas em momentos difíceis, o que me ensinou responsabilidade, empatia e clareza na comunicação sob pressão.",
    icon: Headphones,
    period: "Início da Carreira",
  },
  {
    title: "Estratégia Educacional",
    description:
      "Em seguida, atuei com suporte e atendimento educacional, desenvolvendo a habilidade de explicar processos e soluções de forma simples, acessível e objetiva.",
    icon: BookOpen,
    period: "Desenvolvimento",
  },
  {
    title: "SSI Automação e Controle",
    description:
      "Hoje atuo na Segurança do Trabalho, realizando análises de risco, validações de máquinas, medições ocupacionais e treinamentos, com foco na prevenção e no cuidado real com o trabalhador.",
    icon: Shield,
    period: "Atualmente",
    current: true,
  },
];

const Timeline = () => {
  return (
    <section id="trajetoria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Minha História
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma jornada construída com dedicação, aprendizado contínuo e, acima de tudo, 
            cuidado genuíno com as pessoas.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10">
                {item.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-soft backdrop-blur-sm hover:shadow-glow transition-all duration-300"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  {item.current && (
                    <span className="inline-block mt-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      Posição Atual
                    </span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
