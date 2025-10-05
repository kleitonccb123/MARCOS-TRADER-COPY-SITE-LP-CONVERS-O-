import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
          <p className="text-text-muted text-xs md:text-sm leading-relaxed text-center">
            <strong className="text-amber-500">Aviso de Risco:</strong> Rentabilidade passada não garante resultados futuros. 
            Operar no mercado financeiro envolve riscos. Não invista valores que não possa perder.
            O Copy Trader PricePro copia operações, mas seus resultados dependem do capital, risco configurado e condições de mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-text-primary mb-3 md:mb-4">
              Copy Trader PricePro
            </h3>
            <div className="space-y-2">
              <a href="/termos" className="block text-text-muted hover:text-accent-cyan transition-colors text-sm md:text-base">
                Termos de Uso
              </a>
              <a 
                href="https://t.me/+hovOygBawbg5YWIx" 
                className="flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm md:text-base"
              >
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                Suporte
              </a>
              <a href="/privacidade" className="block text-text-muted hover:text-accent-cyan transition-colors text-sm md:text-base">
                Política de Privacidade
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-text-primary mb-3 md:mb-4">
              Aviso Legal
            </h3>
            <p className="text-text-muted text-sm md:text-base">
              Material educativo. Não é recomendação de investimento. 
              Operar no mercado financeiro envolve riscos. Resultados 
              passados não são garantia de resultados futuros.
            </p>
          </div>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-text-muted text-xs md:text-sm">
            © 2024 Copy Trader PricePro — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};