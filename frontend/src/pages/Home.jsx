import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Factory, Wrench, BadgeCheck, MapPin, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, INDUSTRIES, CLIENTS, CONTACT, telLink, waLink } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

const heroLine = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FACTS = [
  { icon: Award, label: "25+ Years", sub: "Industry Experience" },
  { icon: Factory, label: "Indian Manufacturer", sub: "Made in India" },
  { icon: Wrench, label: "Sales & Service", sub: "Manufacturing to After-Sales" },
  { icon: BadgeCheck, label: "ISO 9001", sub: "Quality Focused · MSME" },
  { icon: MapPin, label: "Pan-India", sub: "Customers Across India" },
];

const WHY = [
  "More than 25 years of industry experience",
  "Manufacturer-focused expertise",
  "Wide range of power-conditioning products",
  "Quality-focused manufacturing",
  "After-sales service support",
  "Custom-built solutions",
  "Strong customer orientation",
  "Dealer / distributor network",
  "Applications across multiple industries",
];

export default function Home() {
  const { openQuote } = useQuote();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div data-testid="home-page">
      <SEO
        title="Servo Voltage Stabilizer & Transformer Manufacturer India | ALPAS – Paraphase Controls & Transformers"
        description="ALPAS – The Perfect Protection. Indian manufacturer of digital servo voltage stabilizers, isolation transformers, variacs and power conditioning equipment. 25+ years, ISO 9001, pan-India service. Request a quote."
      />

      {/* HERO */}
      <section ref={heroRef} className="grid-lines spotlight relative overflow-hidden bg-navy-950" data-testid="hero-section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div style={{ y: textY }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400"
            >
              <span className="h-px w-10 bg-brand" /> Paraphase Controls & Transformers
            </motion.p>

            <h1 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {["Reliable Power Protection", "Solutions", "Made in India"].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span custom={i} variants={heroLine} initial="hidden" animate="visible" className="block">
                    {i === 2 ? <span className="text-brand">{line}</span> : line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Servo Voltage Stabilizers, Transformers and Custom Power Conditioning Solutions for Industrial, Commercial and Specialized Applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <button
                data-testid="hero-quote-button"
                onClick={() => openQuote()}
                className="group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                data-testid="hero-explore-button"
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
              >
                Explore Products
              </Link>
              <a
                data-testid="hero-whatsapp-button"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="mt-8 flex items-center gap-2 text-sm text-slate-400"
            >
              <Phone className="h-4 w-4 text-brand" /> Prefer to talk?
              <a href={telLink(CONTACT.phones[0])} className="font-semibold text-white underline-offset-4 hover:underline" data-testid="hero-call-link">
                +91 {CONTACT.phones[0]}
              </a>
            </motion.p>
          </motion.div>

          <motion.div style={{ y: imgY }} className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-white shadow-2xl"
            >
              <img
                src="/assets/product-stabilizer-oil.jpeg"
                alt="ALPAS Digital Servo Voltage Stabilizer – oil cooled, three phase"
                className="h-[460px] w-full object-contain p-8"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-navy-950/95 px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">Digital Servo Voltage Stabilizer</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand">5 – 1000 KVA</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -left-10 top-10 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl"
            >
              <p className="font-heading text-3xl font-black text-navy-950">98%</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Efficiency</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST FACTS */}
      <section className="border-b border-slate-200 bg-white" data-testid="trust-facts-section">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-slate-200 px-4 sm:px-6 md:grid-cols-5 md:divide-x lg:px-8">
          {FACTS.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="flex flex-col items-center gap-2 px-4 py-8 text-center">
              <f.icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              <p className="font-heading text-lg font-bold text-navy-950">{f.label}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{f.sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-b border-slate-800 bg-navy-950 py-4 text-slate-300">
        <Marquee items={["Servo Voltage Stabilizers", "Isolation Transformers", "Variacs & Dimmers", "Toroidal Transformers", "Custom-Built Transformers", "25+ Years of Engineering", "Made in India", "Quality · Commitment · Service"]} />
      </div>

      {/* FEATURED PRODUCTS */}
      <section className="grid-lines-light bg-slate-50 py-20 lg:py-28" data-testid="featured-products-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading index="01" eyebrow="What we manufacture" title="Power Protection & Conditioning Solutions" />
            <Reveal delay={0.15}>
              <Link to="/products" className="group inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-navy-700" data-testid="view-all-products-link">
                View all products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 lg:py-28" data-testid="about-section">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading index="02" eyebrow="Who we are" title="About Paraphase Controls & Transformers" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Paraphase Controls & Transformers is engaged in the manufacturing, sales and service of electrical and power-conditioning equipment. The company has been in the industry for more than 25 years and manufactures Servo Voltage Stabilizers, Isolation Transformers, Ultra Isolation Transformers, Digital Micro Controlled Servo Voltage Stabilizers, Furnace Ultra Isolation Transformers, Variable Auto Transformers (Variacs), Custom-Built Transformers, Toroidal Transformers, Servo Type DC Drives and Power Factor solutions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The company focuses on quality products with full backing support for after-sales service and follows the principle of providing value for money.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-4">
                  <p className="font-heading text-2xl font-black text-navy-950">25+</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Years of Experience</p>
                </div>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-4">
                  <p className="font-heading text-sm font-bold uppercase tracking-widest text-navy-950">Quality · Commitment · Service</p>
                </div>
              </div>
              <Link to="/about" data-testid="about-read-more" className="group mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-brand">
                Read our story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwdHJhbnNmb3JtZXIlMjBwb3dlciUyMGVxdWlwbWVudCUyMGZhY3Rvcnl8ZW58MHx8fHwxNzg5NDg2MzU2fDA&ixlib=rb-4.1.0&q=85"
                alt="Industrial power equipment manufacturing"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-navy-950 px-6 py-5 shadow-2xl sm:block">
              <p className="font-heading text-lg font-bold text-white">Manufacturing · Sales · Service</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Delhi, India</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-navy-950 py-20 lg:py-28" data-testid="industries-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="03" eyebrow="Where our products work" title="Industries We Serve" dark />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              From cement plants to hospitals, ALPAS equipment protects critical loads across 23+ industries and applications throughout India.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind} delay={(i % 8) * 0.05}>
                <Link
                  to="/industries"
                  data-testid={`industry-chip-${ind.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-navy-900/60 px-4 py-3.5 transition-colors hover:border-brand/60 hover:bg-navy-900"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white">{ind}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 lg:py-28" data-testid="why-choose-section">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading index="04" eyebrow="Why trust us" title="Why Choose ALPAS" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                A quarter-century of manufacturing discipline, in-house winding and testing, and an after-sales service culture that treats every installation as a long-term relationship.
              </p>
              <button
                data-testid="why-quote-button"
                onClick={() => openQuote()}
                className="mt-8 rounded-lg bg-brand px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </button>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {WHY.map((item, i) => (
              <Reveal key={item} delay={(i % 4) * 0.07}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-colors hover:border-navy-700/40">
                  <span className="font-mono text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-semibold leading-snug text-navy-950">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24" data-testid="clients-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="05" eyebrow="Trusted by" title="Clients Who Rely on ALPAS" center />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {CLIENTS.map((c, i) => (
              <Reveal key={c} delay={(i % 7) * 0.05}>
                <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center">
              <Link to="/clients" className="group inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-navy-700" data-testid="clients-view-all">
                View client references <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUALITY BANNER + CTA */}
      <section className="grid-lines relative overflow-hidden bg-navy-950 py-20 lg:py-24" data-testid="quality-cta-section">
        <div className="spotlight absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-lg items-center justify-center gap-4">
              <span className="rounded-lg border border-slate-700 px-5 py-3 font-heading text-lg font-bold text-white">ISO 9001</span>
              <span className="rounded-lg border border-slate-700 px-5 py-3 font-heading text-lg font-bold text-white">MSME</span>
            </div>
            <h2 className="mt-8 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to protect your power?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              Share your requirement and get a quotation from our engineering team — usually within one working day.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <button
                data-testid="cta-quote-button"
                onClick={() => openQuote()}
                className="rounded-lg bg-brand px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </button>
              <a
                data-testid="cta-call-button"
                href={telLink(CONTACT.phones[0])}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
