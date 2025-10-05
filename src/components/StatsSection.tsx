export const StatsSection = () => {
  const stats = [{
    label: "copiadores ativos",
    value: "1.200+"
  }, {
    label: "satisfação no suporte",
    value: "98%"
  }, {
    label: "monitoramento",
    value: "24/5"
  }, {
    label: "controle de risco",
    value: "Total"
  }];
  return <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center animate-scale-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-cyan mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm md:text-base px-1">
                {stat.label}
              </div>
            </div>)}
        </div>
        
        
      </div>
    </section>;
};