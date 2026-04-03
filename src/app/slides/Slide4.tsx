const hazards = [
  {
    num: "01",
    title: "Physical",
    color: "#b5462a",
    bg: "#fdf6f1",
    points: [
      "Burns from stoves, hot pans, steam, and boiling oil",
      "Cuts from knives, slicers, graters, and shattered glass",
      "Slips and falls due to wet floors or cluttered walkways",
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <line x1="18" y1="10" x2="18" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="18" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Chemical",
    color: "#c8952a",
    bg: "#fdfaf1",
    points: [
      "Improper use or mixing of cleaners can cause burns, poisoning, or lung damage",
      "Common examples: dish soap, bleach, and oven or surface cleaners",
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M13 8 L13 16 L8 26 L28 26 L23 16 L23 8 Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <line x1="13" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="22" r="1.5" fill="currentColor"/>
        <circle cx="21" cy="22" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Biological",
    color: "#6b8f71",
    bg: "#f3f9f4",
    points: [
      "Microorganisms like bacteria (Salmonella, E. coli), mold, yeast, and parasites",
      "They thrive in warm, moist conditions and spread through poor food handling",
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="18" cy="8"  r="2.5" fill="currentColor"/>
        <circle cx="26" cy="24" r="2.5" fill="currentColor"/>
        <circle cx="10" cy="24" r="2.5" fill="currentColor"/>
        <line x1="18" y1="11" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="23" y1="21" x2="21" y2="19.5" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="13" y1="21" x2="15" y2="19.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Slide4() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">

      {/* Top accent bar */}
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 1, background: "#b5462a" }}/>
        <div style={{ flex: 1, background: "#c8952a" }}/>
        <div style={{ flex: 1, background: "#6b8f71" }}/>
      </div>

      <div className="flex-1 flex flex-col justify-center px-14 gap-8">

        {/* Header row */}
        <div className="flex items-end justify-between fade-up">
          <div>
            <div className="tag-pill mb-3">Safety / Slide 03</div>
            <h2
              className="font-playfair text-[#1a1510] font-bold tracking-tight"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
            >
              Hazards in the Kitchen
            </h2>
          </div>
          {/* Decorative flame SVG */}
          <svg width="32" height="48" viewBox="0 0 32 48" fill="none" style={{ opacity: 0.2 }}>
            <path d="M16 46 C8 46 4 40 4 34 C4 26 9 21 12 17 C12 22 15 25 16 26 C17 21 18 18 21 14 C22 19 24 24 20 29 C23 28 24 25 24 22 C27 26 28 32 28 36 C28 42 22 46 16 46Z" stroke="#b5462a" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        {/* Three hazard cards */}
        <div className="grid grid-cols-3 gap-5 fade-up-d2">
          {hazards.map((h) => (
            <div
              key={h.title}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{ background: h.bg, border: `1.5px solid ${h.color}30`, position: "relative", overflow: "hidden" }}
            >
              {/* Ghost number */}
              <div
                className="absolute bottom-3 right-4 font-playfair font-bold pointer-events-none select-none"
                style={{ fontSize: "5rem", color: h.color, opacity: 0.07, lineHeight: 1 }}
              >
                {h.num}
              </div>

              <div className="flex items-center gap-3">
                <div style={{ color: h.color }}>{h.icon}</div>
                <div>
                  <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: h.color }}>
                    {h.num}
                  </div>
                  <div className="font-playfair font-semibold text-[#1a1510]" style={{ fontSize: "1.1rem" }}>
                    {h.title}
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: `${h.color}30` }} />

              <ul className="flex flex-col gap-2.5">
                {h.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-[7px]"
                      style={{ width: 4, height: 4, borderRadius: "50%", background: h.color, display: "block" }}
                    />
                    <span className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.8rem" }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="font-inter text-[#1a1510]/35 text-xs tracking-wide fade-up-d4" style={{ maxWidth: 560 }}>
          Understanding all three hazard types is the first step to running a safe and professional kitchen.
        </p>
      </div>

      {/* Bottom accent */}
      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }} />
    </div>
  );
}
