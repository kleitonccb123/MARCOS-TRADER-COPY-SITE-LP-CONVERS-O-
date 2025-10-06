// src/pages/Index.tsx
import { useEffect } from "react";
import VideoHero from "@/components/VideoHero";
import SellFluxForm from "@/components/SellFluxForm";
import { HeroTitle } from "@/components/HeroTitle";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="max-w-6xl mx-auto text-center">
          <HeroTitle />
        </div>
      </section>

      <VideoHero />

      {/* Formulário conectado ao SellFlux */}
      <SellFluxForm />
    </main>
  );
}
