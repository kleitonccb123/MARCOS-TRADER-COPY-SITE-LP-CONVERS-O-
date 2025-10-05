import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube } from "lucide-react";
import { motion } from "framer-motion";
import traderPhoto from "@/assets/trader-price-photo.jpg";

export const AboutTrader = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Conheça o Trader Price
          </h2>
          <p className="text-base md:text-xl text-text-muted">
            O mentor por trás dos resultados extraordinários
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <Card className="p-4 sm:p-6 md:p-8 bg-card border-border shadow-card">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                    Trader Profissional - 30 anos
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                    Trader profissional há 10 anos, especialista em price action e gestão de risco. 
                    Minha missão é tornar seus resultados mais consistentes com disciplina e clareza.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                  <div className="bg-muted/30 p-3 md:p-4 rounded-lg border border-border">
                    <h4 className="font-heading font-semibold text-primary mb-1 text-sm md:text-base">Experiência</h4>
                    <p className="text-foreground text-xs md:text-sm">10 anos no mercado financeiro</p>
                  </div>
                  
                  <div className="bg-muted/30 p-3 md:p-4 rounded-lg border border-border">
                    <h4 className="font-heading font-semibold text-primary mb-1 text-sm md:text-base">Especialidade</h4>
                    <p className="text-foreground text-xs md:text-sm">Forex & Copy Trading</p>
                  </div>
                  
                  <div className="bg-muted/30 p-3 md:p-4 rounded-lg border border-border">
                    <h4 className="font-heading font-semibold text-primary mb-1 text-sm md:text-base">Origem</h4>
                    <p className="text-foreground text-xs md:text-sm">Rio de Janeiro, Brasil</p>
                  </div>
                  
                  <div className="bg-muted/30 p-3 md:p-4 rounded-lg border border-border">
                    <h4 className="font-heading font-semibold text-primary mb-1 text-sm md:text-base">Método</h4>
                    <p className="text-foreground text-xs md:text-sm">Desenvolvido em 1 ano</p>
                  </div>
                </div>

                <div className="pt-2 md:pt-4">
                  <Button 
                    asChild
                    className="gradient-primary hover:opacity-90 text-foreground font-semibold px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto text-sm md:text-base"
                  >
                    <a 
                      href="https://www.youtube.com/@traderpriceforex/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                      Conheça o Canal no YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-xl rounded-full"></div>
              <Card className="relative overflow-hidden border-2 border-primary/20 shadow-card">
                <img
                  src={traderPhoto}
                  alt="Trader Price - Profissional de Forex"
                  className="w-full h-auto object-cover aspect-[3/4] sm:aspect-auto"
                />
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};