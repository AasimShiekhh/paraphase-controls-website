import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT, telLink, waLink } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";

export const MobileStickyBar = () => {
  const { openQuote } = useQuote();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden" data-testid="mobile-sticky-bar">
      <a
        data-testid="sticky-call-button"
        href={telLink(CONTACT.phones[0])}
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-bold uppercase tracking-wider text-navy-950 active:bg-slate-100"
      >
        <Phone className="h-5 w-5" /> Call
      </a>
      <a
        data-testid="sticky-whatsapp-button"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-slate-200 bg-teal py-3 text-[11px] font-bold uppercase tracking-wider text-white active:opacity-90"
      >
        <FaWhatsapp className="h-5 w-5" /> WhatsApp
      </a>
      <button
        data-testid="sticky-quote-button"
        onClick={() => openQuote()}
        className="flex flex-col items-center gap-1 bg-brand py-3 text-[11px] font-bold uppercase tracking-wider text-white active:bg-brand-dark"
      >
        <span className="font-heading text-lg leading-none">“</span> Request Quote
      </button>
    </div>
  );
};
