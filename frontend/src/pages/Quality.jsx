import { BadgeCheck, Factory, ClipboardCheck, Handshake } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteContext";

const PILLARS = [
  { icon: Factory, title: "In-House Manufacturing", text: "Copper winding, assembly and testing are done in our own works — giving us complete control over quality at every stage." },
  { icon: ClipboardCheck, title: "Tested Before Dispatch", text: "Every unit is tested before it leaves our facility, so it performs from the day it is installed at your site." },
  { icon: Handshake, title: "After-Sales Service", text: "Full backing support for after-sales service is a founding principle — not an afterthought." },
  { icon: BadgeCheck, title: "Value for Money", text: "Quality-focused manufacturing at honest prices, engineered for a long and reliable service life." },
];

export default function Quality() {
  const { openQuote } = useQuote();
  return (
    <div data-testid="quality-page">
      <SEO
        title="Quality & Certifications | ISO 9001 & MSME | ALPAS – Paraphase Controls & Transformers"
        description="ALPAS power protection equipment is manufactured by Paraphase Controls & Transformers with an ISO 9001 quality focus and MSME registration. 100% copper wound, tested before dispatch."
      />

      <section className="grid-lines spotlight bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Quality & Certifications
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Quality is not a department. <span className="text-brand">It's the product.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-slate-700 bg-navy-900/60 px-8 py-6" data-testid="cert-iso">
                <p className="font-heading text-2xl font-black text-white">ISO 9001</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">Quality Management Focus</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-navy-900/60 px-8 py-6" data-testid="cert-msme">
                <p className="font-heading text-2xl font-black text-white">MSME</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">Registered Indian Manufacturer</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="01" eyebrow="How we build" title="Our Quality Commitment" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950">
                    <p.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy-950">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 grid gap-8 rounded-2xl bg-navy-950 px-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Quality · Commitment · Service</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                  These three words have guided Paraphase Controls & Transformers for more than 25 years. Certificate copies and registration details are shared on request during the quotation process.
                </p>
              </div>
              <button
                data-testid="quality-quote-button"
                onClick={() => openQuote()}
                className="rounded-lg bg-brand px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
