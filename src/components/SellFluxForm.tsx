// src/pages/Index.tsx
import SellFluxForm from "@/components/SellFluxForm";
import { ArrowRight, CheckCircle, Shield, TrendingUp } from "lucide-react";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent-cyan/[0.03] text-text-primary">
      {/* HERO */}
      <section className="px-4 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan mb-4">
              <TrendingUp className="w-4 h-4" />
              Copy Trader PricePro
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight">
              Copie minhas operações com
              <span className="text-accent-cyan"> segurança</span> e
              <span className="text-accent-cyan"> praticidade</span>.
            </h1>
            <p className="mt-4 text-text-muted md:text-lg">
              Configure em poucos minutos, receba os sinais automaticamente e
              acompanhe em tempo real. Feito para quem quer simplicidade.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#form-sellflux"
                className="inline-flex items-center gap-2 bg-accent-cyan text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Começar agora <ArrowRight className="w-5 h-5" />
              </a>
              <div className="text-xs md:text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Dados protegidos
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-accent-cyan/20 bg-card p-5 md:p-8 shadow-card">
            <div className="aspect-video w-full rounded-xl bg-black/50 grid place-items-center">
              <p className="text-text-muted text-sm">
                (Coloque aqui sua imagem/vídeo de demonstração)
              </p>
            </div>
            <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-accent-cyan w-4 h-4" />
                Integração rápida
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-accent-cyan w-4 h-4" />
                Zero complicação
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-accent-cyan w-4 h-4" />
                Acompanhamento em tempo real
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-accent-cyan w-4 h-4" />
                Suporte humano
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-accent-cyan/20">
            <h3 className="font-semibold text-lg mb-2">Configuração simples</h3>
            <p className="text-text-muted text-sm">
              Em poucos passos você conecta e começa a copiar as operações.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-accent-cyan/20">
            <h3 className="font-semibold text-lg mb-2">Controle total</h3>
            <p className="text-text-muted text-sm">
              Defina limites, risco e volume conforme seu perfil.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-accent-cyan/20">
            <h3 className="font-semibold text-lg mb-2">Acesso imediato</h3>
            <p className="text-text-muted text-sm">
              Preencha o formulário e receba instruções direto no Telegram.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO (SellFlux) */}
      <SellFluxForm />

      {/* CTA FINAL */}
      <section className="px-4 py-14 md:py-20">
        <div className="max-w-5xl mx-auto bg-card border border-accent-cyan/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold">
            Pronto para começar?
          </h3>
          <p className="text-text-muted mt-2 md:text-lg">
            Leva menos de 2 minutos para enviar seus dados e receber o acesso.
          </p>
          <a
            href="#form-sellflux"
            className="inline-flex items-center gap-2 bg-accent-cyan text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition mt-6"
          >
            Iniciar agora <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
