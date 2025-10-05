import { useState } from "react";
import { ChevronDown } from "lucide-react";
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: "Meu dinheiro fica com você?",
    answer: "Não. Fica na sua corretora, no seu nome. Você mantém controle total do capital."
  }, {
    question: "Posso pausar a cópia?",
    answer: "Sim, a qualquer momento. Você tem controle total para pausar ou retomar."
  }, {
    question: "Qual o valor mínimo?",
    answer: "A partir de US$ 500, mas recomendamos capital maior para melhor gestão de risco."
  }, {
    question: "Quais são as taxas?",
    answer: "Plano de assinatura mensal. Consulte os detalhes no formulário de inscrição."
  }, {
    question: "Como funciona o controle de risco?",
    answer: "Você define multiplicador/lote e limites de perda diária. Tem controle total."
  }, {
    question: "Como faço saque e depósito?",
    answer: "Direto na sua corretora. Você mantém controle total da sua conta."
  }, {
    question: "Preciso deixar o PC ligado?",
    answer: "Não. A execução roda em nossa infraestrutura na nuvem 24/5."
  }, {
    question: "Funciona em conta demo?",
    answer: "Sim, para testes. Recomendamos testar antes de operar com capital real."
  }, {
    question: "Quais plataformas são compatíveis?",
    answer: "MT4/MT5 via provedor de cópia. Veja a lista completa de corretoras compatíveis no tutorial."
  }];
  
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-12 px-2">
          Perguntas Frequentes
        </h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
              <button
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-card/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground text-sm md:text-base pr-2">{faq.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 md:w-5 md:h-5 text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-3 md:pb-4">
                  <p className="text-muted-foreground text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};