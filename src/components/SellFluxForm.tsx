import { useState, FormEvent } from "react";
export default function SellFluxForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    termos: false,
  });

  const formatWhatsApp = (value: string) => {
    let numbers = value.replace(/\D/g, "");
    if (numbers.startsWith("55")) numbers = numbers.slice(2);
    if (!numbers) return "";
    if (numbers.length <= 2) return `+55 (${numbers}`;
    if (numbers.length <= 7) return `+55 (${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `+55 (${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const getUrlParams = () => {
    const p = new URLSearchParams(location.search);
    return {
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      page_url: location.href,
    };
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const qs = new URLSearchParams();

      if (formData.email) qs.set("email", formData.email.trim().toLowerCase());
      qs.set("nome", formData.nome.trim());
      qs.set("whatsapp", formData.whatsapp.replace(/\D/g, "")); // só dígitos
      qs.set("tag", "copy-ativo"); // mude para "saiu-do-copy" ou "copytrade-tradeprice"

      const utm = getUrlParams();
      if (utm.utm_source) qs.set("utm_source", utm.utm_source);
      if (utm.utm_medium) qs.set("utm_medium", utm.utm_medium);
      if (utm.utm_campaign) qs.set("utm_campaign", utm.utm_campaign);
      qs.set("page_url", utm.page_url);

      const WEBHOOK =
        "https://webhook.sellflux.app/webhook/lead/bc3cc1f71780180f4cc04578f72064a9";

      await fetch(`${WEBHOOK}?${qs.toString()}`, { method: "GET", mode: "no-cors" });

      alert("Sucesso! Vamos te levar para o Telegram.");
      location.href = "https://t.me/+hovOygBawbg5YWIx";
    } catch (err) {
      alert("Não foi possível enviar agora. Tente novamente.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-[680px] mx-auto">
        <div className="bg-card rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Comece agora seu Copy Trader</h2>
          <p className="text-sm opacity-80 mb-8">Preencha os dados abaixo para acesso imediato</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Nome completo *</label>
              <input
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">WhatsApp *</label>
              <input
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10"
                placeholder="+55 (11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">E-mail (opcional)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10"
                placeholder="seu@email.com"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.termos}
                onChange={(e) => setFormData({ ...formData, termos: e.target.checked })}
                required
              />
              <span className="text-sm opacity-80">
                Li e aceito os Termos de Uso e o Aviso de Risco. *
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 font-semibold rounded-lg bg-cyan-500 disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Quero iniciar meu Copy Trader"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
