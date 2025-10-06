// src/components/VideoHero.tsx
export default function VideoHero() {
  return (
    <section className="px-4 pb-10">
      <div className="max-w-6xl mx-auto rounded-2xl border border-accent-cyan/20 bg-card p-5 md:p-8 shadow-card">
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/60 grid place-items-center">
          {/* Troque o iframe pelo seu vídeo quando quiser */}
          <p className="text-text-muted text-sm">Área de vídeo/hero</p>
        </div>
      </div>
    </section>
  );
}
