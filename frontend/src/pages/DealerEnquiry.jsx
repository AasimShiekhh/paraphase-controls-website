import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Handshake, Truck, Wrench, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { PRODUCTS } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20 transition";

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
      {label} {required && <span className="text-brand">*</span>}
    </span>
    {children}
  </label>
);

const BENEFITS = [
  { icon: Handshake, title: "Manufacturer Partnership", text: "Deal directly with the manufacturer — no middle layers, transparent pricing and genuine product backing." },
  { icon: TrendingUp, title: "Growing Demand", text: "Power quality problems are rising across Indian industry. Represent a 25+ year brand with proven demand." },
  { icon: Truck, title: "Complete Product Range", text: "Nine product lines from 5 KVA stabilizers to 1000 KVA industrial systems — one brand for every requirement." },
  { icon: Wrench, title: "Service Backing", text: "Full after-sales service support from the factory, so your customers stay your customers." },
];

export default function DealerEnquiry() {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", whatsapp: "", email: "", city: "", state: "",
    current_business: "", products_interested: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries/dealer`, form);
      toast.success("Dealer enquiry submitted. Our team will contact you shortly.");
      setForm({ name: "", company: "", phone: "", whatsapp: "", email: "", city: "", state: "", current_business: "", products_interested: "", message: "" });
    } catch (err) {
      toast.error("Could not submit your enquiry. Please call or WhatsApp us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="dealer-enquiry-page">
      <SEO
        title="Become a Dealer / Distributor | ALPAS – Paraphase Controls & Transformers"
        description="Partner with ALPAS as a dealer or distributor for servo voltage stabilizers, transformers and power conditioning equipment across India. 25+ year manufacturer with full service backing."
      />

      <section className="grid-lines spotlight bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-10 bg-brand" /> Dealer / Distributor Enquiry
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
              Grow with a brand that <span className="text-brand">backs every sale.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We are expanding our dealer and distributor network across India. Partner with a manufacturer that has stood behind its products for over 25 years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="01" eyebrow="Why partner with us" title="The ALPAS Dealer Advantage" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950">
                    <b.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy-950">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="rounded-2xl bg-navy-950 p-8 lg:sticky lg:top-28">
                <h2 className="font-heading text-2xl font-bold text-white">Submit Dealer Enquiry</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Fill in the form and our team will reach out to discuss territory, product range and partnership terms.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2.5"><span className="text-brand">—</span> Open to dealers & distributors across India</li>
                  <li className="flex gap-2.5"><span className="text-brand">—</span> Electrical / industrial trade background preferred</li>
                  <li className="flex gap-2.5"><span className="text-brand">—</span> Factory-backed service and technical support</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm" data-testid="dealer-form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input data-testid="dealer-name" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
                  </Field>
                  <Field label="Company Name">
                    <input data-testid="dealer-company" value={form.company} onChange={set("company")} className={inputCls} placeholder="Firm / company" />
                  </Field>
                  <Field label="Phone" required>
                    <input data-testid="dealer-phone" required type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91" />
                  </Field>
                  <Field label="WhatsApp">
                    <input data-testid="dealer-whatsapp" type="tel" value={form.whatsapp} onChange={set("whatsapp")} className={inputCls} placeholder="+91" />
                  </Field>
                  <Field label="Email" required>
                    <input data-testid="dealer-email" required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
                  </Field>
                  <Field label="City">
                    <input data-testid="dealer-city" value={form.city} onChange={set("city")} className={inputCls} placeholder="City" />
                  </Field>
                  <Field label="State">
                    <input data-testid="dealer-state" value={form.state} onChange={set("state")} className={inputCls} placeholder="State" />
                  </Field>
                  <Field label="Current Business / Industry">
                    <input data-testid="dealer-business" value={form.current_business} onChange={set("current_business")} className={inputCls} placeholder="e.g. Electrical goods trading" />
                  </Field>
                </div>
                <Field label="Products Interested In">
                  <select data-testid="dealer-products" value={form.products_interested} onChange={set("products_interested")} className={inputCls}>
                    <option value="">Select product range</option>
                    <option value="Complete ALPAS Range">Complete ALPAS Range</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message">
                  <textarea data-testid="dealer-message" rows={4} value={form.message} onChange={set("message")} className={inputCls} placeholder="Tell us about your business, territory and experience" />
                </Field>
                <button
                  data-testid="dealer-submit-button"
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit Dealer Enquiry"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
