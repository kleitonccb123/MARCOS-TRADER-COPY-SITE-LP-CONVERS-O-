import { Clock, Target, ShieldCheck, Sparkles } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Gestão Profissional",
      description: "Entradas com método PricePro e regras claras."
    },
    {
      icon: ShieldCheck,
      title: "Transparência",
      description: "Histórico e sessões ao vivo."
    },
    {
      icon: Clock,
      title: "Controle Total",
      description: "Pause, ajuste risco e saque quando quiser."
    },
    {
      icon: Sparkles,
      title: "Suporte Rápido",
      description: "Onboarding guiado e respostas no mesmo dia."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-accent-cyan/20 rounded-full mb-3 md:mb-4 group-hover:bg-accent-cyan/30 transition-colors">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent-cyan" />
                </div>
                <h3 className="font-semibold text-text-primary text-base md:text-lg mb-1 md:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};