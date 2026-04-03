const whmisPoints = [
  {
    num: "01",
    title: "Labels",
    desc: "Every hazardous product gets a warning label with symbols and clear instructions so you know what you're handling before you open the container.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "SDS Sheets",
    desc: "Safety Data Sheets give you in-depth details: health risks, emergency steps, proper storage, and disposal methods for each chemical.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 2 L16 2 L20 6 L20 22 L4 22 Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        <path d="M16 2 L16 6 L20 6" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Training",
    desc: "Workers must complete hands-on training to correctly use, store, and handle chemicals, cutting down the risk of accidents before they happen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M5 21 C5 17 8 15 12 15 C16 15 19 17 19 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

const symbols = [
  { label: "Exploding Bomb",    path: "M14 4 L16 0 L12 2 L15 -2 M14 8 C10 8 6 11 6 15 C6 19 10 22 14 22 C18 22 22 19 22 15 C22 11 18 8 14 8Z" },
  { label: "Flame",             path: "M12 24 C7 24 4 20 4 16 C4 11 8 8 10 5 C10 9 12 11 12 11 C13 8 14 6 16 3 C17 7 18 11 15 14 C17 13 18 11 18 9 C20 12 21 16 21 18 C21 22 16 24 12 24Z" },
  { label: "Oxidizing",         path: "M12 4 A8 8 0 1 0 12 20 A8 8 0 1 0 12 4Z M8 10 L12 4 L16 10 M6 16 C6 18 9 22 12 22 C15 22 18 18 18 16" },
  { label: "Gas Cylinder",      path: "M9 8 L9 20 A5 5 0 0 0 15 20 L15 8 M9 8 L10 5 L14 5 L15 8 M12 3 L12 5 M15 10 L19 8" },
  { label: "Corrosion",         path: "M6 4 L11 4 L11 10 C11 12 8 14 8 16 M8 19 C8 21 10 23 12 23 M18 8 L20 10 L18 12 M18 12 C18 15 16 17 16 19 M16 21 C16 23 18 23 20 23" },
  { label: "Skull",             path: "M12 3 A7 7 0 1 0 12 17 A7 7 0 1 0 12 3Z M9 10 A2 2 0 1 0 9.01 10 M15 10 A2 2 0 1 0 15.01 10 M9 17 L9 23 L15 23 L15 17 M8 20 L16 20" },
  { label: "Health Hazard",     path: "M12 3 A4 4 0 1 0 12 11 A4 4 0 1 0 12 3Z M8 14 C8 12 10 11 12 11 C14 11 16 12 16 14 L16 24 L14 24 L14 18 L10 18 L10 24 L8 24 Z M16 17 L20 14 L22 16" },
  { label: "Exclamation",       path: "M12 2 L22 22 L2 22 Z M12 10 L12 17 M12 19.5 A0.5 0.5 0 1 0 12.01 19.5" },
  { label: "Environment",       path: "M12 2 A10 10 0 1 0 12 22 A10 10 0 1 0 12 2Z M8 18 C8 14 11 9 17 8 C15 12 17 16 12 18 C15 18 18 16 18 13" },
  { label: "Biohazard",         path: "M12 10 A3 3 0 1 0 12 16 A3 3 0 1 0 12 10Z M12 7 C12 4 8 2 5 4 C3 6 3 10 6 11 M17 11 C19 9 22 10 22 14 C22 18 19 20 17 19 M10 20 C8 22 9 25 12 25 C15 25 17 22 16 19 M10 25 L14 25 M12 23 L12 27" },
];

export default function Slide5() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">

      {/* Top bar */}
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 2, background: "#b5462a" }}/>
        <div style={{ flex: 1, background: "#c8952a" }}/>
      </div>

      <div className="flex-1 flex gap-0">

        {/* Left column */}
        <div className="flex flex-col justify-center px-12 py-8 gap-6" style={{ width: "42%", borderRight: "1.5px solid #d8c8ac" }}>

          {/* Ghost watermark */}
          <div
            className="absolute left-0 bottom-0 font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "14rem", color: "#1a1510", opacity: 0.03, lineHeight: 1, paddingLeft: "2rem" }}
          >
            W
          </div>

          <div className="fade-up">
            <div className="tag-pill mb-3">Safety / Slide 04</div>
            <h2
              className="font-playfair text-[#1a1510] font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              WHMIS
            </h2>
            <p className="font-inter text-[#6b5e4a] mt-1" style={{ fontSize: "0.82rem" }}>
              <strong>W</strong>orkplace <strong>H</strong>azardous <strong>M</strong>aterial <strong>I</strong>nformation <strong>S</strong>ystem
            </p>
          </div>

          <div className="flex flex-col gap-3 fade-up-d2">
            {whmisPoints.map((pt) => (
              <div
                key={pt.num}
                className="flex gap-3 items-start p-4 rounded-xl"
                style={{ background: "#f4ede0", border: "1.5px solid #d8c8ac" }}
              >
                <div className="shrink-0 mt-0.5 text-[#b5462a]">{pt.icon}</div>
                <div>
                  <div className="font-inter font-bold text-[#b5462a] text-xs tracking-widest uppercase mb-0.5">
                    {pt.num} &mdash; {pt.title}
                  </div>
                  <div className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.78rem" }}>
                    {pt.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — symbol grid */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-5">
          <div className="fade-up-d1">
            <p className="font-inter font-bold tracking-widest uppercase text-[#1a1510]/40 text-xs mb-3">
              10 WHMIS Pictograms
            </p>
          </div>

          <div
            className="grid gap-3 fade-up-d2"
            style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {symbols.map((sym) => (
              <div
                key={sym.label}
                className="flex flex-col items-center gap-2 p-3 rounded-xl group cursor-default transition-all"
                style={{
                  background: "#f4ede0",
                  border: "1.5px solid #d8c8ac",
                }}
                title={sym.label}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d={sym.path} stroke="#1a1510" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span
                  className="font-inter text-center text-[#6b5e4a] leading-tight"
                  style={{ fontSize: "0.55rem", fontWeight: 500 }}
                >
                  {sym.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-inter text-[#1a1510]/30 text-xs fade-up-d4">
            Each symbol appears on product labels to warn users at a glance.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }} />
    </div>
  );
}
