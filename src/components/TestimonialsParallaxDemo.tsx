import React from "react";
import { TestimonialsParallax } from "@/components/ui/testimonials-parallax";
import resultIuriZek from "@/assets/testimonials/resultado-iuri-zek.png";
import resultTurma2 from "@/assets/testimonials/resultado-turma-2.png";
import resultDiego from "@/assets/testimonials/resultado-diego.png";
import resultCopyPremium from "@/assets/testimonials/resultado-copy-premium.png";
import resultGabriel from "@/assets/testimonials/resultado-gabriel.png";

export default function TestimonialsParallaxDemo() {
  return (
    <div>
      <TestimonialsParallax testimonials={testimonials} />
      <div className="text-center py-8 px-4">
        <p className="text-text-muted text-sm max-w-2xl mx-auto">
          Resultados variam conforme capital e risco.
        </p>
      </div>
    </div>
  );
}

export const testimonials = [
  {
    title: "Iuri Zek - Resultados Reais",
    content: "Meus alunos colocando dólares no bolso todos os dias 🚀🚀🚀 Lucro: $56.24 e $134.10",
    image: resultIuriZek,
  },
  {
    title: "Copy Turma 2 - Sucesso Contínuo", 
    content: "Parabéns pelo trabalho do Price copy trade, já perdi grana com outros que prometeram ganhos e não cumpriram. Até o momento o Price está sendo ótimo. Está valendo muito a pena!!",
    image: resultTurma2,
  },
  {
    title: "Aluno Copy Diego - $10.66 de Lucro",
    content: "Bom dia! Muito bom. Parabéns viu! Excelente. Muito obrigado pela confiança meu amigo 🙏💰🤖",
    image: resultDiego,
  },
  {
    title: "Copy Trading Premium - $93.42",
    content: "Copy espetacular, surreal, já testei vários copys por aí e perdi muita grana, nunca imaginava encontrar esse Copy Price PRO fx, até o momento está sendo o melhor de todos que passei sem dúvidas, bora ganhar dinheiro sem perder tempo 🚀🚀💰💲",
    image: resultCopyPremium,
  },
  {
    title: "Gabriel Copy - $35.67 de Lucro",
    content: "Meta betida? Mas já? Avê!!! Turmaaaaaaaaaa batemos a meta cedo hoje. Que semana linda pessoal. Mais uma semana finalizada com sucesso",
    image: resultGabriel,
  },
  // Duplicando para ter mais conteúdo no parallax
  {
    title: "Resultados Consistentes - Iuri Zek",
    content: "Screenshots reais dos resultados diários",
    image: resultIuriZek,
  },
  {
    title: "Comunidade Ativa - Turma 2",
    content: "Feedback real dos nossos alunos",
    image: resultTurma2,
  },
  {
    title: "Sucesso Comprovado - Diego",
    content: "Operações documentadas e transparentes",
    image: resultDiego,
  },
  {
    title: "Performance Excepcional",
    content: "Copy espetacular com resultados reais",
    image: resultCopyPremium,
  },
  {
    title: "Estratégia Vencedora - Gabriel",
    content: "Metas batidas consistentemente",
    image: resultGabriel,
  },
  {
    title: "Lucros Reais Verificados",
    content: "Transparência total nos resultados",
    image: resultIuriZek,
  },
  {
    title: "Comunidade Premium",
    content: "Acesso exclusivo aos melhores sinais",
    image: resultTurma2,
  },
  {
    title: "Resultados Documentados",
    content: "Cada operação registrada",
    image: resultDiego,
  },
  {
    title: "Copy Trading Profissional",
    content: "Metodologia testada e aprovada",
    image: resultCopyPremium,
  },
];