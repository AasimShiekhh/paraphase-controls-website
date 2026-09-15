import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
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

export const QuoteForm = ({ defaultProduct = "", compact = false, testidPrefix = "quote" }) => {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", whatsapp: "", email: "", city: "", state: "",
    product: defaultProduct, capacity: "", application: "", message: "",
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append("attachment", file);
      await axios.post(`${API}/enquiries/quote`, fd);
      toast.success("Quote request sent. Our team will contact you shortly.");
      setForm({ name: "", company: "", phone: "", whatsapp: "", email: "", city: "", state: "", product: defaultProduct, capacity: "", application: "", message: "" });
      setFile(null);
    } catch (err) {
      toast.error("Could not send your request. Please call or WhatsApp us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4" data-testid={`${testidPrefix}-form`}>
      <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        <Field label="Name" required>
          <input data-testid={`${testidPrefix}-name`} required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
        </Field>
        <Field label="Company Name">
          <input data-testid={`${testidPrefix}-company`} value={form.company} onChange={set("company")} className={inputCls} placeholder="Company / organization" />
        </Field>
        <Field label="Phone Number" required>
          <input data-testid={`${testidPrefix}-phone`} required type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91" />
        </Field>
        <Field label="WhatsApp Number">
          <input data-testid={`${testidPrefix}-whatsapp`} type="tel" value={form.whatsapp} onChange={set("whatsapp")} className={inputCls} placeholder="+91" />
        </Field>
        <Field label="Email" required>
          <input data-testid={`${testidPrefix}-email`} required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
        </Field>
        <Field label="Product Required">
          <select data-testid={`${testidPrefix}-product`} value={form.product} onChange={set("product")} className={inputCls}>
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </Field>
        <Field label="City">
          <input data-testid={`${testidPrefix}-city`} value={form.city} onChange={set("city")} className={inputCls} placeholder="City" />
        </Field>
        <Field label="State">
          <input data-testid={`${testidPrefix}-state`} value={form.state} onChange={set("state")} className={inputCls} placeholder="State" />
        </Field>
        <Field label="Required Capacity / KVA / Ampere">
          <input data-testid={`${testidPrefix}-capacity`} value={form.capacity} onChange={set("capacity")} className={inputCls} placeholder="e.g. 100 KVA, 3 Phase" />
        </Field>
        <Field label="Application / Industry">
          <input data-testid={`${testidPrefix}-application`} value={form.application} onChange={set("application")} className={inputCls} placeholder="e.g. CNC Machines, Hospital" />
        </Field>
      </div>
      <Field label="Message">
        <textarea data-testid={`${testidPrefix}-message`} rows={compact ? 3 : 4} value={form.message} onChange={set("message")} className={inputCls} placeholder="Tell us about your requirement" />
      </Field>
      <Field label="Attach Requirement / Specification (optional)">
        <input
          data-testid={`${testidPrefix}-file`}
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-navy-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-navy-800 file:cursor-pointer"
        />
      </Field>
      <button
        data-testid={`${testidPrefix}-submit-button`}
        type="submit"
        disabled={submitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Request a Quote"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
};
