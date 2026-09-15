import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, ChevronDown, Instagram } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { PRODUCTS, CONTACT, telLink, waLink } from "@/data/site";
import { useQuote } from "@/components/QuoteContext";
import { FaWhatsapp } from "react-icons/fa";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", dropdown: true },
  { to: "/industries", label: "Industries" },
  { to: "/clients", label: "Clients" },
  { to: "/quality", label: "Quality" },
  { to: "/dealer-enquiry", label: "Dealer Enquiry" },
  { to: "/contact", label: "Contact" },
];

const linkCls = ({ isActive }) =>
  `text-sm font-semibold transition-colors hover:text-navy-700 ${isActive ? "text-navy-700" : "text-slate-600"}`;

export const Header = () => {
  const { openQuote } = useQuote();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50" data-testid="site-header">
      <div className="hidden bg-navy-950 text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="font-mono uppercase tracking-[0.2em]">ALPAS — The Perfect Protection · 25+ Years · Made in India</p>
          <div className="flex items-center gap-5">
            <a data-testid="topbar-phone" href={telLink(CONTACT.phones[0])} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {CONTACT.phones[0]}
            </a>
            <a data-testid="topbar-email" href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
            </a>
            <a data-testid="topbar-instagram" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" data-testid="header-logo">
            <img src="/assets/alpas-logo.jpeg" alt="ALPAS – The Perfect Protection" className="h-11 w-auto object-contain" />
            <span className="hidden border-l border-slate-200 pl-3 text-[11px] font-semibold leading-tight text-slate-500 lg:block">
              Paraphase Controls<br />& Transformers
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" data-testid="desktop-nav">
            {NAV.map((item) =>
              item.dropdown ? (
                <div key={item.to} className="group relative">
                  <NavLink to={item.to} className={linkCls} data-testid="nav-products">
                    <span className="flex items-center gap-1">
                      Products <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </span>
                  </NavLink>
                  <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/products/${p.slug}`}
                          data-testid={`nav-product-${p.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy-700"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={linkCls} data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              data-testid="header-whatsapp"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-teal hover:text-teal md:inline-flex"
            >
              <FaWhatsapp className="h-4 w-4 text-teal" /> WhatsApp
            </a>
            <button
              data-testid="header-quote-button"
              onClick={() => openQuote()}
              className="hidden rounded-lg bg-brand px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark md:block"
            >
              Request a Quote
            </button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button data-testid="mobile-menu-button" className="rounded-lg border border-slate-300 p-2.5 lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5 text-navy-950" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="mt-6 flex flex-col gap-1">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      data-testid={`mobile-nav-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${location.pathname === item.to ? "bg-navy-950 text-white" : "text-slate-700 hover:bg-slate-100"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <p className="mt-4 px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">Products</p>
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/products/${p.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
