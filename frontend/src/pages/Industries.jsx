import { Link } from "react-router-dom";
import {
  Factory, Building2, Snowflake, Leaf, Cog, Wheat, Flame, Shirt, Newspaper, Hotel,
  HeartPulse, Wrench, CircleDot, ChefHat, Pill, Stethoscope, Footprints, Cpu,
  Drill, Syringe, ScanLine, Tag, Printer, ArrowRight,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteContext";

const ICONS = {
  "Cement Plants": Factory, "High Rise Buildings": Building2, "Cold Storages": Snowflake,
  "Tea Estates": Leaf, "Tube Mills": Cog, "Flour Mills": Wheat, "Rolling Mills": Flame,
  "Textile Mills": Shirt, "Paper Mills": Newspaper, "Clubs & Hotels": Hotel, "Hospitals": HeartPulse,
  "Engineering Units": Wrench, "Rubber Industries": CircleDot, "Food Processing Units": ChefHat,
  "Pharmaceutical Units": Pill, "Medical Equipment": Stethoscope, "Footwear & Leather Units": Footprints,
  "CNC Machines": Cpu, "Lathe Machines": Drill, "Injection Moulding Machines": Syringe,
  "X-Ray Machines": ScanLine, "Label Machines": Tag, "Offset Machines": Printer,
};

import { INDUSTRIES } from "@/data/site";

export default function Industries() {
  const { openQuote } = useQuote();
  return (
    <div data-testid="industries-page">
      <SEO
        title="Industries & Applications | ALPAS Power Protection Across 23+ Sectors"
        description="ALPAS servo stabilizers and transformers serve cement plants, hospitals, CNC machines, textile mills, cold storages, pharmaceutical units and 23+ industries across India."
      />

      <section className="grid-lines bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Industries & Applications
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Wherever power quality matters, <span className="text-brand">ALPAS is there.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Our stabilizers, transformers and power conditioning equipment protect critical loads across 23+ industries and machine applications throughout India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid-lines-light bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICONS[ind] || Factory;
              return (
                <Reveal key={ind} delay={(i % 4) * 0.06}>
                  <div
                    data-testid={`industry-card-${ind.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="group flex h-full flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-700/40 hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 transition-colors group-hover:bg-brand">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </span>
                    <p className="font-heading text-base font-bold text-navy-950">{ind}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-navy-950 px-8 py-10 sm:flex-row">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">Your industry, our engineering.</h2>
                <p className="mt-2 text-sm text-slate-400">Tell us your application — we will recommend the right stabilizer or transformer for your load.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  data-testid="industries-quote-button"
                  onClick={() => openQuote()}
                  className="rounded-lg bg-brand px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                >
                  Request a Quote
                </button>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                >
                  View Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
