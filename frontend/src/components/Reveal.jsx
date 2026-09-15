import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, eyebrow, title, dark = false, center = false }) => (
  <Reveal className={center ? "text-center" : ""}>
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      {index && (
        <span className={`font-mono text-sm ${dark ? "text-brand" : "text-brand"}`}>{index}</span>
      )}
      <span className={`font-mono text-xs uppercase tracking-[0.25em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {eyebrow}
      </span>
      <span className={`h-px w-16 ${dark ? "bg-slate-700" : "bg-slate-300"}`} />
    </div>
    <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance ${dark ? "text-white" : "text-navy-950"}`}>
      {title}
    </h2>
  </Reveal>
);
