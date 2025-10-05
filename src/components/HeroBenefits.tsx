"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const HeroBenefits = () => {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-background">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {[
            "Configuração em ~5 minutos",
            "Capital 100% no seu nome",
            "Risco por lote / fator / drawdown",
            "Resultados ao vivo e histórico auditável",
            "Suporte humano para onboarding"
          ].map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 bg-card/40 backdrop-blur-sm border border-accent-cyan/10 rounded-xl p-3 md:p-4 hover:border-accent-cyan/30 transition-all"
            >
              <Check className="w-5 h-5 text-accent-green flex-shrink-0" />
              <span className="text-text-primary text-sm md:text-base text-left">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
