export const ReasonsGrid = () => {
  const reasons = [{
    title: "Execução Automática",
    description: "Copie entradas e saídas sem intervir."
  }, {
    title: "Seu Capital, Sua Corretora",
    description: "Dinheiro fica no seu nome, zero custódia."
  }, {
    title: "Risco Configurável",
    description: "Defina limites de perda e multiplicadores."
  }, {
    title: "Histórico Auditável",
    description: "Transparência total em resultados."
  }, {
    title: "Suporte Humano",
    description: "Onboarding e dúvidas respondidas rápido."
  }, {
    title: "Sem PC Ligado",
    description: "Infraestrutura roda na nuvem 24/5."
  }];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reasons.map((reason, index) => (
        <div key={index} className="bg-card p-6 rounded-lg">
          <h3 className="font-semibold text-text-primary mb-2">{reason.title}</h3>
          <p className="text-text-secondary">{reason.description}</p>
        </div>
      ))}
    </div>
  );
};