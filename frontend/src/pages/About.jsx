import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { PRODUCTS } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

const VALUES = [
  { title: "Quality", text: "100% copper wound construction, branded components and in-house testing on every product that leaves our works." },
  { title: "Commitment", text: "More than 25 years of standing behind every installation — from government presses to hospitals to heavy industry." },
  { title: "Service", text: "Manufacturing, sales and after-sales service under one roof, with full backing support for the life of the product." },
  { title: "Value for Money", text: "Honest engineering at honest prices — the principle the company was founded on and still follows today." },
];

export default function About() {
  const { openQuote } = useQuote();
  return (
    <div data-testid="about-page">
      <SEO
        title="About Us | Paraphase Controls & Transformers – 25+ Years of Power Protection"
        description="Paraphase Controls & Transformers (brand ALPAS) is an Indian manufacturer of servo voltage stabilizers, transformers and power conditioning equipment with 25+ years of experience in manufacturing, sales and service."
      />

      <section className="grid-lines bg-navy-950 py-20 lg:py-24" data-testid="about-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> About Us
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              25+ years of keeping India's power <span className="text-brand">stable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Paraphase Controls & Transformers is engaged in the manufacturing, sales and service of electrical and power-conditioning equipment — serving industrial, commercial and specialized applications across India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading index="01" eyebrow="Our story" title="Manufacturing, Sales & Service — Under One Roof" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                For more than 25 years, Paraphase Controls & Transformers has manufactured Servo Voltage Stabilizers, Isolation Transformers, Ultra Isolation Transformers, Digital Micro Controlled Servo Voltage Stabilizers, Furnace Ultra Isolation Transformers, Variable Auto Transformers (Variacs), Custom-Built Transformers, Toroidal Transformers, Servo Type DC Drives and Power Factor solutions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Because we manufacture what we sell, we control quality at every stage — from copper winding to final testing — and we back every product with genuine after-sales service. Our guiding principle is simple: quality products with full backing support, and true value for money.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <p className="font-heading text-lg font-bold text-navy-950">{v.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHw0fHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHBsYW50JTIwbWFjaGluZXxlbnwwfHx8fDE3ODk0ODYzNjR8MA&ixlib=rb-4.1.0&q=85"
                alt="Manufacturing facility"
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
              <div className="bg-navy-950 px-6 py-5">
                <p className="font-heading text-xl font-bold text-white">Quality · Commitment · Service</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">The ALPAS principle since day one</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="02" eyebrow="What we make" title="Our Complete Product Range" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-navy-700/40 hover:shadow-md"
                >
                  <div>
                    <p className="font-heading text-sm font-bold text-navy-950">{p.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">{p.range}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl bg-navy-950 px-8 py-10 text-center">
              <h3 className="font-heading text-2xl font-bold text-white">Have a power problem to solve?</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">Tell us your application and capacity requirement — we will recommend the right equipment and share a quotation.</p>
              <button
                data-testid="about-quote-button"
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
