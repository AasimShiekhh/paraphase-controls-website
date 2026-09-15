export const Marquee = ({ items, className = "" }) => {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} data-testid="editorial-marquee">
      <div className="inline-flex animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-8 font-heading text-sm font-semibold uppercase tracking-[0.3em]">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
};
