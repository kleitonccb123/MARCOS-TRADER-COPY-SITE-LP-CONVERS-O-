"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/enhanced-button";

export const HeroActions = () => {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-background">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm md:text-base px-8 py-6 text-base font-semibold" asChild>
            <a href="#form-sellflux">Quero copiar as operações agora</a>
          </Button>
          <Button variant="soft" size="lg" className="w-full sm:w-auto text-sm md:text-base px-8 py-6" asChild>
            <a href="https://t.me/+hovOygBawbg5YWIx" className="flex items-center gap-2 justify-center">
              <MessageCircle className="w-5 h-5" />
              Telegram
            </a>
          </Button>
        </motion.div>
        <p className="text-text-muted text-sm md:text-base mt-6">
          acesso imediato • passo a passo incluso
        </p>
      </div>
    </section>
  );
};
