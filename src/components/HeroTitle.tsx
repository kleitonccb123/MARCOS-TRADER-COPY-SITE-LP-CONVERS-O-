"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";

export const HeroTitle = () => {
  return (
    <section className="relative w-full pt-20 md:pt-28 pb-8 md:pb-12 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.05] via-transparent to-accent-orange/[0.05] blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/[0.1] border border-accent-cyan/[0.2] mb-6 md:mb-8"
        >
          <Circle className="h-2 w-2 fill-accent-orange/80" />
          <span className="text-xs md:text-sm text-accent-cyan font-semibold tracking-wider uppercase">
            Forex • Copy Trader PricePro
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-4 md:mb-6 leading-[1.1] max-w-4xl mx-auto">
            Tenha lucros consistentes no Forex{" "}
            <span className="text-gradient">copiando minhas operações</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-text-muted text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            Copie automaticamente minhas entradas, saídas e gestão de risco com o Copy Trader PricePro. 
            Você controla o risco, o capital fica na sua corretora e pode pausar quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
