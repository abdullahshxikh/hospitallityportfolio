const rules = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 4 L14 10 L13 19 L9 19 L8 10 Z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <rect x="8" y="18" width="6" height="4" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <path d="M11 4 L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "Always carry knives blade-down with the sharp edge facing behind you",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M5 20 C5 16 7.5 14 11 14 C14.5 14 17 16 17 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
        <path d="M17 10 Q20 10 20 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M19 10.5 L20 10 L20.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Call out "hot" or "sharp behind" whenever you move past others in the kitchen',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="7" y1="7" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 12 L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    text: "Never run — always walk in the kitchen, no matter how busy it gets",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 18 Q4 12 7 10 L11 9 L15 10 Q18 12 18 18" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M7 10 Q7 6 11 5 Q15 6 15 10" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <line x1="4" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    text: "Use dry oven mitts or folded cloths when handling hot pots, pans, or trays",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="14" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="6" y1="14" x2="6" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="11" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="14" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 10 Q8 7 11 8 Q14 7 16 11" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.5"/>
      </svg>
    ),
    text: "Keep your station clean and tidy at all times — clutter causes accidents",
  },
];

export default function Slide12() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex flex-col">
      <div className="h-1 shrink-0" style={{ background: "#b5462a" }}/>

      <div className="flex-1 flex min-h-0">
        {/* Left terracotta strip */}
        <div
          className="flex flex-col justify-center items-center px-6 shrink-0 relative"
          style={{ width: 180, background: "#b5462a" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="flex flex-col items-center gap-5 relative">
            {/* Chef hat outline */}
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <ellipse cx="26" cy="22" rx="20" ry="16" stroke="white" strokeWidth="1.8" fill="none" opacity="0.7"/>
              <ellipse cx="14" cy="27" rx="11" ry="12" stroke="white" strokeWidth="1.8" fill="none" opacity="0.7"/>
              <ellipse cx="38" cy="27" rx="11" ry="12" stroke="white" strokeWidth="1.8" fill="none" opacity="0.7"/>
              <rect x="9" y="35" width="34" height="11" rx="3" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
            </svg>
            <div
              className="font-playfair text-white font-bold text-center leading-tight"
              style={{ fontSize: "1rem", writingMode: "vertical-lr", letterSpacing: "0.12em" }}
            >
              Shop Safety
            </div>
            <div className="font-inter text-white/50 font-bold tracking-widest uppercase text-xs text-center" style={{ writingMode: "vertical-lr" }}>
              Rules
            </div>
          </div>
        </div>

        {/* Right: rules list */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-4">
          <div className="fade-up mb-2">
            <div className="tag-pill mb-3">Safety / Slide 11</div>
            <h2 className="font-playfair text-white font-bold tracking-tight"
              style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              Shop Safety Rules
            </h2>
            <p className="font-inter text-white/40 mt-1" style={{ fontSize: "0.8rem" }}>
              Five rules every person in the kitchen must follow, every single class.
            </p>
          </div>

          <div className="flex flex-col gap-3 fade-up-d2">
            {rules.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-3.5 rounded-xl"
                style={{
                  background: "#221c15",
                  border: "1.5px solid #3d3428",
                  animationDelay: `${0.08*i}s`,
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0 rounded-full"
                  style={{ width: 40, height: 40, background: "#b5462a18", color: "#b5462a", border: "1.5px solid #b5462a40" }}
                >
                  {r.icon}
                </div>
                <span className="font-inter text-white/70 leading-snug" style={{ fontSize: "0.82rem" }}>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
