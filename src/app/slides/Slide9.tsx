const types = [
  {
    num: "01",
    title: "Cross Contamination",
    color: "#b5462a",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 8 L24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 8 L8 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
    intro: "Bacteria hitchhike from one food to another, often without you ever noticing.",
    points: [
      "Chicken juices dripping onto ready-to-eat vegetables",
      "Reusing the same knife or cutting board for raw meat and fresh produce",
    ],
  },
  {
    num: "02",
    title: "Direct Contamination",
    color: "#8a6a3a",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C10 4 6 9 6 14 C6 18 8 21 16 28 C24 21 26 18 26 14 C26 9 22 4 16 4Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M12 14 L15 17 L21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    intro: "Food gets contaminated directly by a person or unclean surface touching it.",
    points: [
      "Dirty or unwashed hands transferring bacteria",
      "Hair, coughing, or sneezing near uncovered food",
      "Dirty equipment or utensils coming in contact with food",
    ],
  },
];

export default function Slide9() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex flex-col">
      <div className="h-1 shrink-0" style={{ background: "#b5462a" }} />

      <div className="flex-1 flex min-h-0">
        {/* Left: title */}
        <div
          className="flex flex-col justify-center px-10 py-8 shrink-0 relative"
          style={{ width: "30%", borderRight: "1.5px solid #3d3428" }}
        >
          <div
            className="absolute inset-0 flex items-end justify-end font-playfair font-bold pointer-events-none select-none p-4"
            style={{ fontSize: "7rem", color: "white", opacity: 0.03, lineHeight: 1 }}
          >
            09
          </div>

          <div className="flex flex-col gap-5">
            <div className="fade-up">
              <div className="tag-pill mb-3">Safety / Slide 08</div>
              <h2
                className="font-playfair text-white font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}
              >
                Contamination
              </h2>
              <p className="font-inter text-white/40 mt-2" style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>
                Two ways bacteria end up where they should not be.
              </p>
            </div>

            {/* Chicken SVG illustration */}
            <div className="fade-up-d2" style={{ opacity: 0.25 }}>
              <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
                {/* Simplified chicken */}
                <ellipse cx="40" cy="42" rx="24" ry="18" stroke="white" strokeWidth="1.5" fill="none"/>
                <ellipse cx="24" cy="36" rx="10" ry="8" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Drumsticks */}
                <path d="M22 58 L18 68 M32 60 L30 70 M48 60 L50 70 M58 58 L62 68" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                {/* Wings */}
                <path d="M40 38 Q50 28 60 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                {/* Head */}
                <circle cx="16" cy="30" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M12 28 L8 26" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="flex flex-col gap-2 fade-up-d3">
              <div className="font-inter text-white/20 text-xs tracking-wider uppercase">Remember</div>
              <p className="font-inter text-white/40 leading-relaxed" style={{ fontSize: "0.75rem" }}>
                Use separate boards and tools for raw meats vs. ready-to-eat foods. Wash hands before touching anything.
              </p>
            </div>
          </div>
        </div>

        {/* Right: two contamination type cards */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-5">
          {types.map((t, i) => (
            <div
              key={t.num}
              className="flex gap-5 p-6 rounded-2xl relative overflow-hidden fade-up-d2"
              style={{
                background: "#221c15",
                border: `1.5px solid ${t.color}40`,
                animationDelay: `${0.15 * i}s`,
              }}
            >
              <div
                className="absolute bottom-2 right-4 font-playfair font-bold pointer-events-none select-none"
                style={{ fontSize: "5rem", color: t.color, opacity: 0.06, lineHeight: 1 }}
              >
                {t.num}
              </div>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-xl shrink-0"
                  style={{ width: 52, height: 52, background: `${t.color}18`, color: t.color, border: `1.5px solid ${t.color}40` }}
                >
                  {t.icon}
                </div>
                <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: t.color }}>{t.num}</div>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div className="font-playfair text-white font-semibold" style={{ fontSize: "1.1rem" }}>
                  {t.title}
                </div>
                <div style={{ height: 1, background: `${t.color}25` }} />
                <p className="font-inter text-white/50 leading-snug" style={{ fontSize: "0.78rem" }}>{t.intro}</p>
                <ul className="flex flex-col gap-1.5">
                  {t.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="shrink-0 mt-[6px]" style={{ width: 4, height: 4, borderRadius: "50%", background: t.color, display: "block" }} />
                      <span className="font-inter text-white/60 leading-snug" style={{ fontSize: "0.78rem" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
