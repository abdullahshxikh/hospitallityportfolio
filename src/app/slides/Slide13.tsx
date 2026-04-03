const boardPoints = [
  "Set a damp cloth or paper towel underneath the cutting board before you start",
  "This stops the board from sliding, lowering your chance of slipping and getting cut",
];

const knifePoints = [
  { label: "Claw grip", desc: "Curl your fingertips under and let your knuckles guide the blade" },
  { label: "Thumb placement", desc: "Keep your thumb tucked behind your fingers at all times" },
  { label: "Rocking motion", desc: "Rock the knife tip-first for smooth, controlled chopping" },
  { label: "Pivot technique", desc: "Use a pivot-and-drag motion when finely mincing herbs or garlic" },
  { label: "Stable surface", desc: "Never cut on an unsecured or wobbly board" },
  { label: "Footwear", desc: "Always wear closed-toe shoes — dropped knives happen" },
];

export default function Slide13() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 1, background: "#b5462a" }}/>
        <div style={{ flex: 2, background: "#c8952a" }}/>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: cutting board section */}
        <div
          className="flex flex-col justify-center px-10 py-8 shrink-0 relative"
          style={{ width: "38%", borderRight: "1.5px solid #d8c8ac" }}
        >
          <div
            className="absolute font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "8rem", color: "#1a1510", opacity: 0.04, bottom: 0, right: 8, lineHeight: 1 }}
          >13</div>

          <div className="flex flex-col gap-5">
            <div className="fade-up">
              <div className="tag-pill mb-3">Safety / Slide 12</div>
              <h2 className="font-playfair text-[#1a1510] font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.6rem,2.8vw,2.1rem)" }}>
                Securing Cutting Boards
              </h2>
            </div>

            {/* Cutting board SVG */}
            <div className="fade-up-d1">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                {/* Cloth underneath */}
                <rect x="5" y="58" width="90" height="18" rx="4" fill="#c8952a" opacity="0.3" stroke="#c8952a" strokeWidth="1.5" strokeDasharray="4 3"/>
                {/* Board */}
                <rect x="10" y="12" width="80" height="50" rx="6" fill="#f4ede0" stroke="#d8c8ac" strokeWidth="2"/>
                <rect x="14" y="16" width="72" height="42" rx="4" fill="#ecdcc8" opacity="0.5"/>
                {/* Handle */}
                <rect x="75" y="28" width="20" height="14" rx="4" fill="#e8c89a" stroke="#c8a870" strokeWidth="1.5"/>
                {/* Knife lines */}
                <line x1="25" y1="22" x2="70" y2="22" stroke="#d8c8ac" strokeWidth="1" strokeDasharray="3 2"/>
                <line x1="25" y1="30" x2="70" y2="30" stroke="#d8c8ac" strokeWidth="1" strokeDasharray="3 2"/>
                <line x1="25" y1="38" x2="70" y2="38" stroke="#d8c8ac" strokeWidth="1" strokeDasharray="3 2"/>
                <line x1="25" y1="46" x2="70" y2="46" stroke="#d8c8ac" strokeWidth="1" strokeDasharray="3 2"/>
                {/* Lock icon */}
                <circle cx="48" cy="56" r="4" fill="#b5462a" opacity="0.4"/>
              </svg>
            </div>

            <div className="flex flex-col gap-2 fade-up-d2">
              {boardPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="shrink-0 mt-[6px]" style={{ width: 5, height: 5, borderRadius: "50%", background: "#b5462a", display: "block" }}/>
                  <span className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.82rem" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: knife handling */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-5">
          <div className="fade-up">
            <h2 className="font-playfair text-[#1a1510] font-bold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.6rem,2.8vw,2.1rem)" }}>
              Knife Handling Techniques
            </h2>
            <p className="font-inter text-[#6b5e4a] mt-1" style={{ fontSize: "0.8rem" }}>
              Good form prevents cuts and builds real kitchen confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 fade-up-d2">
            {knifePoints.map((k, i) => (
              <div
                key={k.label}
                className="flex gap-3 items-start p-4 rounded-xl"
                style={{ background: "#f4ede0", border: "1.5px solid #d8c8ac", animationDelay: `${0.07*i}s` }}
              >
                <div
                  className="flex items-center justify-center shrink-0 rounded-lg font-inter font-bold text-xs"
                  style={{ width: 28, height: 28, background: "#c8952a", color: "white" }}
                >
                  {i+1}
                </div>
                <div>
                  <div className="font-inter font-semibold text-[#1a1510] text-sm">{k.label}</div>
                  <div className="font-inter text-[#6b5e4a] leading-snug" style={{ fontSize: "0.75rem" }}>{k.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }}/>
    </div>
  );
}
