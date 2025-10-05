export const BenefitsHighlight = () => {
  const benefits = [
    {
      title: "1. Abra sua conta",
      subtitle: "Corretora compatível",
      description: "Tenha conta na corretora indicada",
      detail: "Lista de corretoras compatíveis disponível"
    },
    {
      title: "2. Conecte-se", 
      subtitle: "Plataforma de cópia",
      description: "Conecte ao Copy Trader PricePro",
      detail: "Onboarding guiado passo a passo"
    },
    {
      title: "3. Defina seu risco",
      subtitle: "Controle total",
      description: "Configure lotes/multiplicador/limite",
      detail: "Você controla o risco e pode pausar"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Como começar
          </h2>
          <p className="text-text-muted text-lg">
            3 passos simples para configurar e iniciar
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-card border border-accent-cyan/20 hover-lift"
            >
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <div className="text-accent-cyan font-semibold mb-2">
                  {benefit.subtitle}
                </div>
                <div className="text-lg text-text-primary mb-1">
                  {benefit.description}
                </div>
                <div className="text-text-muted text-sm">
                  {benefit.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};