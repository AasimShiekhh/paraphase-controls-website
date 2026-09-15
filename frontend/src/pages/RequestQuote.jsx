import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { CONTACT, telLink, waLink } from "@/data/site";

export default function RequestQuote() {
  return (
    <div data-testid="request-quote-page">
      <SEO
        title="Request a Quote | ALPAS Servo Stabilizers & Transformers – Paraphase Controls"
        description="Request a quotation for ALPAS servo voltage stabilizers, isolation transformers, variacs and power conditioning equipment. Response within one working day."
      />

      <section className="grid-lines spotlight bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Request a Quote
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Tell us your requirement. <span className="text-brand">We'll quote it.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Share your application and capacity — our engineering team responds with pricing and specifications, usually within one working day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                data-testid="quote-page-call"
                href={telLink(CONTACT.phones[0])}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
              >
                <Phone className="h-4 w-4" /> +91 {CONTACT.phones[0]}
              </a>
              <a
                data-testid="quote-page-whatsapp"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <SectionHeading eyebrow="Quote request" title="Your Requirement" />
              <p className="mb-8 mt-3 text-sm text-slate-600">All fields marked * are required. You can attach a specification or requirement file if you have one.</p>
              <QuoteForm testidPrefix="page-quote" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
