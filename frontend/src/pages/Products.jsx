import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

export default function Products() {
  const { openQuote } = useQuote();
  return (
    <div data-testid="products-page">
      <SEO
        title="Products | Servo Stabilizers, Transformers, Variacs & Power Conditioning | ALPAS"
        description="Complete ALPAS range: digital servo voltage stabilizers (5–1000 KVA), isolation & ultra isolation transformers, furnace transformers, variacs (10–3000A), toroidal and custom-built transformers, DC drives and power factor solutions."
      />

      <section className="grid-lines bg-navy-950 py-20" data-testid="products-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Products
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Power Protection & Conditioning Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Nine product lines, one standard: 100% in-house manufacturing, quality-focused engineering and full after-sales service backing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid-lines-light bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
              <SectionHeading eyebrow="Custom requirements" title="Can't find exactly what you need?" center />
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
                We manufacture custom-built transformers and application-specific power conditioning equipment. Share your requirement and our team will engineer a solution.
              </p>
              <button
                data-testid="products-custom-quote-button"
                onClick={() => openQuote("Custom-Built Transformers")}
                className="mt-7 rounded-lg bg-brand px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Discuss a Custom Requirement
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
