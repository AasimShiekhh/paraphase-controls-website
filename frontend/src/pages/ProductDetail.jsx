import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, CONTACT, telLink, waLink } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const { openQuote } = useQuote();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const others = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div data-testid={`product-page-${slug}`}>
      <SEO title={product.seoTitle} description={product.seoDescription} />

      {/* HERO */}
      <section className="grid-lines spotlight bg-navy-950 py-16 lg:py-20" data-testid="product-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal y={12}>
            <Link to="/products" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-white" data-testid="back-to-products">
              <ArrowLeft className="h-3.5 w-3.5" /> All Products
            </Link>
          </Reveal>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span className="h-px w-10 bg-brand" /> {product.range}
                </p>
                <h1 className="mt-4 font-heading text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg text-slate-300">{product.tagline}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[product.range, product.phase, product.cooling].filter(Boolean).map((chip) => (
                    <span key={chip} className="rounded-full border border-slate-700 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-slate-300">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    data-testid="product-quote-button"
                    onClick={() => openQuote(product.name)}
                    className="rounded-lg bg-brand px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                  >
                    Request a Quote for {product.short}
                  </button>
                  <a
                    data-testid="product-whatsapp-button"
                    href={waLink(`Hello ALPAS, I am interested in ${product.name}. Please share a quote.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  >
                    <FaWhatsapp className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    data-testid="product-call-button"
                    href={telLink(CONTACT.phones[0])}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <motion.div whileHover={{ scale: 1.015 }} className="overflow-hidden rounded-2xl border border-slate-700/60 bg-white shadow-2xl">
                <img src={product.image} alt={product.name} className="h-[380px] w-full object-contain p-8" />
                <div className="flex items-center justify-between bg-navy-950/95 px-5 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">ALPAS · Made in India</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">{product.range}</span>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            {product.description.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={`text-base leading-relaxed text-slate-600 ${i > 0 ? "mt-4" : ""}`}>{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <h2 className="mt-12 font-heading text-2xl font-bold text-navy-950">
                {product.specs.length > 2 ? "Technical Specifications" : "Product Range"}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200" data-testid="product-specs-table">
                {product.specs.map(([label, value], i) => (
                  <div key={label} className={`grid grid-cols-2 gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                    <span className="font-semibold text-slate-700">{label}</span>
                    <span className="text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-12 font-heading text-2xl font-bold text-navy-950">Key Features</h2>
            </Reveal>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((f, i) => (
                <Reveal key={f} delay={(i % 4) * 0.05}>
                  <div className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm font-medium text-slate-700">{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <h2 className="mt-12 font-heading text-2xl font-bold text-navy-950">Typical Applications</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {product.applications.map((a) => (
                  <Link
                    key={a}
                    to="/industries"
                    className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-brand hover:text-brand"
                  >
                    {a}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ENQUIRY SIDEBAR */}
          <div>
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm" data-testid="product-enquiry-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950">
                    <Zap className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-bold text-navy-950">Get a quotation</p>
                    <p className="text-xs text-slate-500">Response usually within one working day</p>
                  </div>
                </div>
                <button
                  data-testid="sidebar-quote-button"
                  onClick={() => openQuote(product.name)}
                  className="mt-6 w-full rounded-lg bg-brand px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                >
                  Request a Quote
                </button>
                <a
                  data-testid="sidebar-whatsapp-button"
                  href={waLink(`Hello ALPAS, I am interested in ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                >
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
                </a>
                <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">Talk to our team</p>
                  <a href={telLink(CONTACT.proprietor.phone)} className="block font-semibold text-navy-950 hover:text-brand" data-testid="sidebar-phone-1">
                    {CONTACT.proprietor.name} — +91 {CONTACT.proprietor.phone}
                  </a>
                  <a href={telLink(CONTACT.sales.phone)} className="block font-semibold text-navy-950 hover:text-brand" data-testid="sidebar-phone-2">
                    {CONTACT.sales.name} — +91 {CONTACT.sales.phone}
                  </a>
                  <div className="flex gap-2 pt-2">
                    {["ISO 9001", "MSME", "25+ Years"].map((b) => (
                      <span key={b} className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-2xl font-bold text-navy-950 sm:text-3xl">Related Products</h2>
            <Link to="/products" className="group hidden items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-navy-700 sm:inline-flex">
              All products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
