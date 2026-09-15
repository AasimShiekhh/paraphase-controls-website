import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { CLIENTS } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

export default function Clients() {
  const { openQuote } = useQuote();
  return (
    <div data-testid="clients-page">
      <SEO
        title="Our Clients | Trusted by Government, Banks, Railways & Industry | ALPAS"
        description="ALPAS power protection equipment is trusted by the Ministry of Home Affairs, MES, Northern Railway, Punjab National Bank, Union Bank of India, universities, hospitals and industry across India."
      />

      <section className="grid-lines bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Clients
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Trusted by institutions that <span className="text-brand">cannot afford downtime.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From government presses and ministries to banks, railways, universities and industry — ALPAS equipment serves organizations where reliability is non-negotiable.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-b border-slate-200 bg-white py-5 text-slate-500">
        <Marquee items={CLIENTS} />
      </div>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="01" eyebrow="Client references" title="A Track Record Built on Trust" center />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {CLIENTS.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 0.06}>
                <div
                  data-testid={`client-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="font-mono text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-heading text-sm font-bold text-navy-950 sm:text-base">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
              Client names are listed as per our company brochure. References available on request during the enquiry process.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-16 rounded-2xl bg-navy-950 px-8 py-10 text-center">
              <h2 className="font-heading text-2xl font-bold text-white">Join the institutions that trust ALPAS.</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">Request a quotation for your facility — our team responds within one working day.</p>
              <button
                data-testid="clients-quote-button"
                onClick={() => openQuote()}
                className="mt-6 rounded-lg bg-brand px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
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
