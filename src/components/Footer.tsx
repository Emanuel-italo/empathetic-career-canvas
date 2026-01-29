import { motion } from "framer-motion";
import { Mail, Linkedin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vamos Conversar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Estou sempre aberta a novas oportunidades e conexões. 
              Não hesite em entrar em contato!
            </p>

            <div className="flex justify-center gap-4">
              <motion.a
                href="mailto:seuemail@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-soft"
              >
                <Mail className="w-4 h-4" />
                Enviar Email
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-primary/20 rounded-full mx-auto mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> em 2026
            </p>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sarah Camila. Todos os direitos reservados.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
