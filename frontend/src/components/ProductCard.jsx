import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useQuote } from "@/components/QuoteContext";

export const ProductCard = ({ product, index = 0 }) => {
  const { openQuote } = useQuote();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
      data-testid={`product-card-${product.slug}`}
    >
      <Link to={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
          {product.range}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-navy-950">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>
        <div className="mt-5 flex gap-2.5">
          <Link
            to={`/products/${product.slug}`}
            data-testid={`product-view-${product.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-navy-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          >
            View Product <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            data-testid={`product-quote-${product.slug}`}
            onClick={() => openQuote(product.name)}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Request Quote
          </button>
        </div>
      </div>
    </motion.article>
  );
};
