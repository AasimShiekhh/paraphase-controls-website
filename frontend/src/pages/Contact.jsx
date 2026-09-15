import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { CONTACT, telLink, waLink } from "@/data/site";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <SEO
        title="Contact Us | Paraphase Controls & Transformers – ALPAS, Delhi India"
        description="Contact ALPAS – Paraphase Controls & Transformers, Delhi. Call +91 9210638205 or WhatsApp for servo voltage stabilizer and transformer quotations across India."
      />

      <section className="grid-lines bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Contact Us
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Talk to the people who <span className="text-brand">build it.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Call, WhatsApp or send an enquiry — you will speak directly with our manufacturing and sales team, not a call centre.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <Reveal>
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h2 className="font-heading text-lg font-bold text-navy-950">Speak With Us</h2>
                  <div className="mt-5 space-y-4">
                    <a data-testid="contact-proprietor" href={telLink(CONTACT.proprietor.phone)} className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-navy-700/40">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                        <Phone className="h-4.5 w-4.5 text-white" />
                      </span>
                      <span>
                        <span className="block font-heading text-sm font-bold text-navy-950">{CONTACT.proprietor.name}</span>
                        <span className="block text-xs text-slate-500">{CONTACT.proprietor.role}</span>
                        <span className="mt-1 block text-sm font-semibold text-navy-700">+91 {CONTACT.proprietor.phone}</span>
                      </span>
                    </a>
                    <a data-testid="contact-sales" href={telLink(CONTACT.sales.phone)} className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-navy-700/40">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                        <Phone className="h-4.5 w-4.5 text-white" />
                      </span>
                      <span>
                        <span className="block font-heading text-sm font-bold text-navy-950">{CONTACT.sales.name}</span>
                        <span className="block text-xs text-slate-500">{CONTACT.sales.role}</span>
                        <span className="mt-1 block text-sm font-semibold text-navy-700">+91 {CONTACT.sales.phone}</span>
                      </span>
                    </a>
                    <a
                      data-testid="contact-whatsapp"
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl bg-teal p-4 text-white transition-opacity hover:opacity-90"
                    >
                      <FaWhatsapp className="h-6 w-6" />
                      <span>
                        <span className="block font-heading text-sm font-bold">WhatsApp Business</span>
                        <span className="text-xs opacity-90">+91 {CONTACT.sales.whatsapp} — chat now</span>
                      </span>
                    </a>
                    <div className="grid grid-cols-3 gap-2.5">
                      {CONTACT.phones.map((p) => (
                        <a key={p} href={telLink(p)} data-testid={`contact-phone-${p}`} className="rounded-lg border border-slate-200 px-3 py-2.5 text-center text-xs font-semibold text-navy-950 transition-colors hover:border-navy-700/40">
                          +91 {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h2 className="font-heading text-lg font-bold text-navy-950">Reach Us</h2>
                  <div className="mt-5 space-y-4 text-sm">
                    <a data-testid="contact-email" href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-700 transition-colors hover:text-navy-700">
                      <Mail className="h-4.5 w-4.5 shrink-0 text-brand" /> {CONTACT.email}
                    </a>
                    <a data-testid="contact-instagram" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 transition-colors hover:text-navy-700">
                      <Instagram className="h-4.5 w-4.5 shrink-0 text-brand" /> @alpasservovoltage
                    </a>
                    <p className="flex items-start gap-3 text-slate-700">
                      <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
                      <span><strong className="text-navy-950">Registered Office:</strong><br />{CONTACT.address}</span>
                    </p>
                    <p className="flex items-center gap-3 text-slate-700">
                      <Clock className="h-4.5 w-4.5 shrink-0 text-brand" /> Manufacturing, Sales & Service — Delhi, India
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm" data-testid="contact-map">
                  <iframe
                    title="Paraphase Controls & Transformers location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
                    className="h-72 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <SectionHeading eyebrow="Send an enquiry" title="Get in Touch" />
                <p className="mb-8 mt-3 text-sm text-slate-600">Fill in the form below — we respond within one working day.</p>
                <QuoteForm testidPrefix="contact-quote" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
