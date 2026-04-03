const chapters = [
  {
    num: "01", label: "Safety",
    desc: "Kitchen hazards & WHMIS",
    color: "#b5462a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2 L25 7 L25 16 C25 22 19 27 14 29 C9 27 3 22 3 16 L3 7 Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M9 15 L12.5 19 L20 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02", label: "Quick / Yeast Breads",
    desc: "Baking fundamentals",
    color: "#c8952a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 18 Q7 8 14 8 Q21 8 24 18" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <ellipse cx="14" cy="19" rx="11" ry="7" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M8 12 Q11 8 14 9 Q17 8 20 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "03", label: "Potatoes & Grains",
    desc: "Starches and cereals",
    color: "#6b8f71",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="11" cy="16" rx="8" ry="6" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <ellipse cx="19" cy="13" rx="6" ry="5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M14 22 Q18 24 22 22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "04", label: "Sandwiches",
    desc: "Cold & hot preparations",
    color: "#8a6a3a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="19" width="20" height="6" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <rect x="5" y="15" width="18" height="4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <rect x="5" y="11" width="18" height="4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4"/>
        <rect x="4" y="5" width="20" height="6" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
];

export default function Slide2() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] grid-bg flex flex-col justify-center px-16 gap-10">

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#b5462a" }} />

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "#d8c8ac" }} />

      {/* Large watermark */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center font-playfair pointer-events-none select-none"
        style={{ fontSize: "22rem", color: "#1a1510", opacity: 0.03, fontWeight: 700, lineHeight: 1, paddingRight: "2rem" }}
      >
        TOC
      </div>

      {/* Header */}
      <div className="flex items-end justify-between fade-up">
        <div>
          <div className="tag-pill mb-3">Contents</div>
          <h2
            className="font-playfair text-[#1a1510] font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Table of Contents
          </h2>
        </div>
        {/* Decorative spoon */}
        <svg width="28" height="100" viewBox="0 0 28 100" fill="none" style={{ opacity: 0.3 }}>
          <ellipse cx="14" cy="15" rx="13" ry="14" stroke="#1a1510" strokeWidth="1.5" fill="none"/>
          <rect x="12" y="28" width="4" height="65" rx="2" stroke="#1a1510" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* Chapter grid */}
      <div className="grid grid-cols-2 gap-4 fade-up-d2" style={{ maxWidth: 780 }}>
        {chapters.map((ch, i) => (
          <div
            key={ch.num}
            className="flex gap-5 items-start p-5 rounded-xl relative overflow-hidden"
            style={{
              background: "#f4ede0",
              border: `1.5px solid ${ch.color}22`,
              animationDelay: `${0.08 * i}s`,
            }}
          >
            {/* Number accent */}
            <div
              className="absolute top-3 right-4 font-playfair font-bold leading-none pointer-events-none select-none"
              style={{ fontSize: "3.5rem", color: ch.color, opacity: 0.08 }}
            >
              {ch.num}
            </div>

            {/* Icon circle */}
            <div
              className="flex items-center justify-center shrink-0 rounded-full"
              style={{ width: 48, height: 48, background: `${ch.color}15`, color: ch.color, border: `1.5px solid ${ch.color}` }}
            >
              {ch.icon}
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-inter text-xs font-bold tracking-widest uppercase" style={{ color: ch.color }}>
                {ch.num}
              </div>
              <div className="font-playfair font-semibold text-[#1a1510]" style={{ fontSize: "1.05rem" }}>
                {ch.label}
              </div>
              <div className="font-inter text-[#6b5e4a] text-xs">{ch.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer rule */}
      <div className="flex items-center gap-3 fade-up-d4">
        <div style={{ height: 1, width: 32, background: "#b5462a" }} />
        <span className="font-inter text-xs tracking-widest uppercase text-[#1a1510]/30">Hospitality Portfolio · TFJ20I</span>
      </div>
    </div>
  );
}
