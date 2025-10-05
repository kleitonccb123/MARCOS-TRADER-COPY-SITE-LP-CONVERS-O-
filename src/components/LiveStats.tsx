export const LiveStats = () => {
  return (
    <section className="py-6 md:py-8 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div>
            <div className="text-lg md:text-2xl font-bold text-primary">1.200+</div>
            <div className="text-xs md:text-sm text-muted-foreground">copiadores ativos</div>
          </div>
          <div>
            <div className="text-lg md:text-2xl font-bold text-primary">98%</div>
            <div className="text-xs md:text-sm text-muted-foreground">satisfação no suporte</div>
          </div>
          <div>
            <div className="text-lg md:text-2xl font-bold text-primary">24/5</div>
            <div className="text-xs md:text-sm text-muted-foreground">monitoramento das operações</div>
          </div>
          <div>
            <div className="text-lg md:text-2xl font-bold text-primary">Controle de risco</div>
            <div className="text-xs md:text-sm text-muted-foreground">por trade e diário</div>
          </div>
        </div>
      </div>
    </section>
  );
};