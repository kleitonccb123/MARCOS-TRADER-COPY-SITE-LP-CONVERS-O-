import { Button } from "./ui/enhanced-button";
import { Shield, MessageCircle } from "lucide-react";

export const CheckoutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-card border border-accent-cyan/20 text-center relative overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-accent-orange px-3 md:px-6 py-2 rounded-full">
              <span className="text-primary-foreground font-bold text-xs md:text-sm">
                🔥 Vagas limitadas para novos copiadores
              </span>
            </div>
          </div>
          
          <div className="pt-4 md:pt-6">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 md:mb-8 px-2">
              Quero minha liberdade financeira agora
            </h2>
            
            <p className="text-text-muted text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Comece a copiar minhas operações com configuração guiada e suporte 24/5
            </p>
            
            <div className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-8 opacity-70">
              <div className="text-xs text-text-muted">VISA</div>
              <div className="text-xs text-text-muted">MASTERCARD</div>
              <div className="text-xs text-text-muted">PIX</div>
              <div className="text-xs text-text-muted">BOLETO</div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <Button variant="primary" size="lg" className="w-full text-sm md:text-base" asChild>
                <a href="https://forms.fillout.com/t/xjHcxRDUMAus">
                  Começar a copiar
                </a>
              </Button>
              
              <p className="text-text-muted text-xs md:text-sm">
                Configuração guiada + suporte 24/5
              </p>
              
              <Button variant="outline" size="lg" className="w-full text-sm md:text-base" asChild>
                <a href="https://t.me/priceprocopytrader" className="flex items-center gap-2 justify-center">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Falar no Telegram
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-text-muted text-xs md:text-sm mt-4 md:mt-6">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                <span>Capital no seu nome</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                <span>Controle total de risco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};