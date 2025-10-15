import GlowCard from '@/components/GlowCard';
import BadgeMarquee from '@/components/BadgeMarquee';
import EmailCapture from '@/components/EmailCapture';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen gridlines">
      <div className="radial-glow">
        <section className="container mx-auto px-4 pt-24 pb-32 fade-in">
          <p className="text-xs uppercase tracking-widecaps text-mint/60 mb-6">Astra Health</p>
          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-[1.1] tracking-tight text-[#E6E7E8]">
            Reasoning for care.
          </h1>
          <p className="text-lg md:text-xl text-[#E6E7E8]/80 max-w-2xl mb-12 leading-relaxed">
            We design interfaces that teach machines how to care — building a transparent reasoning 
            layer that helps clinicians move from data → decisions with calibrated uncertainty.
          </p>
          <EmailCapture />
        </section>
      </div>

      <BadgeMarquee />

      <section className="container mx-auto px-4 py-24 fade-in">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <GlowCard title="Reasoning Engine" subtitle="Module A">
            Multi-source ingestion, tool-use, and evidence graphs tuned for clinical QA. 
            Outputs are traceable and calibrated — not performative.
          </GlowCard>
          <GlowCard title="Signal Interface" subtitle="Module B">
            A minimal surface for triage, differentials, and next-best actions. 
            Designed to surface uncertainty, not hide it.
          </GlowCard>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 fade-in">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widecaps text-mint/60 mb-4">Thesis</p>
          <p className="text-lg text-[#E6E7E8]/80 leading-relaxed">
            Healthcare is full of signal, trapped in noise. Astra builds a reasoning layer and a 
            signal-clean interface so care teams can move from data → decisions with confidence. 
            We work with systems that value safety, auditability, and taste.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <p className="text-xs uppercase tracking-widecaps text-mint/60">Research Notes</p>
            <div className="space-y-4">
              <p className="text-[#E6E7E8]/70 leading-relaxed">
                • Uncertainty is a feature — clinicians calibrate, models assist.
              </p>
              <p className="text-[#E6E7E8]/70 leading-relaxed">
                • Evidence graphs &gt; monolithic answers. Show the trail.
              </p>
              <p className="text-[#E6E7E8]/70 leading-relaxed">
                • Interfaces should avoid confident wrongness at all costs.
              </p>
              <a 
                href="/notes" 
                className="inline-block mt-6 text-sm text-mint/80 hover:text-mint transition-colors border border-mint/30 px-4 py-2 rounded hover:border-mint/50 focus:outline-none focus:ring-2 focus:ring-mint/50"
                aria-label="Read research memo version 0.1"
              >
                Memo v0.1 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 fade-in">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widecaps text-mint/60 mb-4">Safety</p>
          <p className="text-[#E6E7E8]/70 leading-relaxed">
            Astra Health is not a medical device. Clinical use requires licensed supervision. 
            We actively evaluate bias, robustness, and failure modes.
          </p>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t border-white/5 fade-in">
        <p className="text-xs text-[#E6E7E8]/40 text-center">
          © {currentYear} Astra Health — tiny, quiet.
        </p>
      </footer>
    </main>
  );
}
