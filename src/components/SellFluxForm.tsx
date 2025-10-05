import { useState, FormEvent } from "react";
import { Button } from "./ui/enhanced-button";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { z } from "zod";

export const SellFluxForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    termos: false,
  });

  const formatWhatsApp = (value: string) => {
    // Remove all non-digits
    let numbers = value.replace(/\D/g, "");
    
    // Remove leading 55 if present (country code) to avoid duplication
    if (numbers.startsWith("55")) {
      numbers = numbers.slice(2);
    }
    
    // Format with +55 prefix
    if (numbers.length === 0) return "";
    if (numbers.length <= 2) return `+55 (${numbers}`;
    if (numbers.length <= 7) return `+55 (${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `+55 (${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      page_url: window.location.href,
    };
  };

  const formSchema = z.object({
    nome: z.string().trim().min(2, { message: "Informe seu nome completo." }).max(100),
    whatsapp: z
      .string()
      .trim()
      .transform((v) => {
        // Remove todos os caracteres não-numéricos
        let digits = v.replace(/\D/g, "");
        // Remove o prefixo 55 se o número tiver mais de 11 dígitos
        if (digits.startsWith("55") && digits.length > 11) {
          digits = digits.slice(2);
        }
        return digits;
      })
      .refine((v) => v.length >= 10 && v.length <= 11, { message: "WhatsApp inválido." }),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .max(255)
      .optional()
      .refine((v) => !v || /.+@.+\..+/.test(v), { message: "E-mail inválido." }),
    termos: z.boolean().refine((v) => v, { message: "Você precisa aceitar os termos para continuar." }),
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // validação
      const parsed = formSchema.safeParse(formData);
      if (!parsed.success) {
        const msg = parsed.error.issues[0]?.message ?? "Dados inválidos. Confira os campos.";
        toast({ title: "Atenção", description: msg, variant: "destructive" });
        return;
      }

      const urlParams = getUrlParams();

      // Endpoint correto do SellFlux (lead)
      const webhookBase =
        "https://webhook.sellflux.app/webhook/lead/bc3cc1f71780180f4cc04578f72064a9";

      // Monta query string (inclui email conforme exigido e demais dados úteis)
      const qs = new URLSearchParams();
      if (parsed.data.email) qs.set("email", parsed.data.email);
      qs.set("nome", formData.nome.trim());
      qs.set("whatsapp", parsed.data.whatsapp); // apenas dígitos
      if (urlParams.utm_source) qs.set("utm_source", urlParams.utm_source);
      if (urlParams.utm_medium) qs.set("utm_medium", urlParams.utm_medium);
      if (urlParams.utm_campaign) qs.set("utm_campaign", urlParams.utm_campaign);
      qs.set("page_url", urlParams.page_url);

      const finalUrl = `${webhookBase}?${qs.toString()}`;

      // Dispara GET (no-cors para evitar bloqueio de CORS do provedor)
      await fetch(finalUrl, { method: "GET", mode: "no-cors" });

      toast({
        title: "Sucesso!",
        description: "Recebido! Agora acesse nosso Telegram.",
      });

      setTimeout(() => {
        window.location.href = "https://t.me/+hovOygBawbg5YWIx";
      }, 1200);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não deu certo agora. Tente novamente ou fale no suporte.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form-sellflux" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-accent-cyan/[0.02]">
      <div className="max-w-[680px] mx-auto">
        <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-card border border-accent-cyan/20 hover:border-accent-cyan/30 transition-all">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
              Comece agora seu Copy Trader
            </h2>
            <p className="text-text-muted text-base md:text-lg">
              Preencha os dados abaixo para receber acesso imediato
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm md:text-base font-medium text-text-primary mb-2.5">
                Nome completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3.5 md:py-4 rounded-xl bg-background border-2 border-accent-cyan/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all text-base"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm md:text-base font-medium text-text-primary mb-2.5">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })}
                className="w-full px-4 py-3.5 md:py-4 rounded-xl bg-background border-2 border-accent-cyan/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all text-base"
                placeholder="+55 (11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-text-primary mb-2.5">
                E-mail (opcional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 md:py-4 rounded-xl bg-background border-2 border-accent-cyan/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all text-base"
                placeholder="seu@email.com"
              />
            </div>

            <div className="flex items-start gap-3 pt-3">
              <input
                type="checkbox"
                id="termos"
                name="termos"
                required
                checked={formData.termos}
                onChange={(e) => setFormData({ ...formData, termos: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-2 border-accent-cyan/20 text-accent-cyan focus:ring-accent-cyan/50 cursor-pointer"
              />
              <label htmlFor="termos" className="text-sm md:text-base text-text-muted cursor-pointer">
                Li e aceito os{" "}
                <a href="#" className="text-accent-cyan hover:text-accent-cyan/80 underline transition-colors">
                  Termos de Uso
                </a>{" "}
                e o{" "}
                <a href="#" className="text-accent-cyan hover:text-accent-cyan/80 underline transition-colors">
                  Aviso de Risco
                </a>
                . *
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full mt-8 py-4 md:py-5 text-base md:text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero iniciar meu Copy Trader"
              )}
            </Button>

            <p className="text-center text-xs md:text-sm text-text-muted mt-6">
              🔒 Seus dados estão protegidos e não serão compartilhados.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
