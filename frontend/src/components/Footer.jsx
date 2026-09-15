import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PRODUCTS, CONTACT, telLink, waLink } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

export const Footer = () => {
  const { openQuote } = useQuote();
  return (
    <footer className="bg-navy-950 text-slate-400" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-lg bg-white p-2.5">
              <img src="/assets/alpas-logo.jpeg" alt="ALPAS – The Perfect Protection" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-5 text-sm font-semibold text-white">Paraphase Controls & Transformers</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">ALPAS – The Perfect Protection</p>
            <p className="mt-4 text-sm leading-relaxed">
              Indian manufacturer of servo voltage stabilizers, transformers and power conditioning equipment. Manufacturing, sales and service for over 25 years.
            </p>
            <button
              data-testid="footer-quote-button"
              onClick={() => openQuote()}
              className="mt-6 rounded-lg bg-brand px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Request a Quote
            </button>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[["Home", "/"], ["About", "/about"], ["Products", "/products"], ["Industries", "/industries"], ["Clients", "/clients"], ["Quality", "/quality"], ["Become a Dealer", "/dealer-enquiry"], ["Contact", "/contact"]].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Products</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="transition-colors hover:text-white">{p.short}</Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="font-semibold text-slate-300 transition-colors hover:text-white">Other Products →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{CONTACT.address}</span>
              </li>
              {CONTACT.phones.map((p) => (
                <li key={p}>
                  <a href={telLink(p)} className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <Phone className="h-4 w-4 shrink-0 text-brand" /> +91 {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <FaWhatsapp className="h-4 w-4 shrink-0 text-teal" /> WhatsApp Business
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-brand" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Instagram className="h-4 w-4 shrink-0 text-brand" /> @alpasservovoltage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-7 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Paraphase Controls & Transformers. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">Quality · Commitment · Service</p>
        </div>
      </div>
    </footer>
  );
};
