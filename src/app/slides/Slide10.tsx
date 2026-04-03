const zones = [
  {
    label: "Top Shelf",
    color: "#6b8f71",
    items: ["Ready-to-eat foods", "Leftovers and cooked items", "Dairy products"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="2" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
        <path d="M7 8 L7 4 Q11 2 15 4 L15 8" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Middle Shelf",
    color: "#c8952a",
    items: ["Fresh fruits and vegetables", "Packaged and processed foods"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="2" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <circle cx="14" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Bottom Shelf",
    color: "#b5462a",
    items: ["Raw chicken, beef, and fish — always on the lowest level to prevent dripping onto other food"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="2" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
        <path d="M7 6 Q11 3 15 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <line x1="11" y1="5" x2="11" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const extras = [
  {
    title: "Dry Storage",
    color: "#8a6a3a",
    items: ["Flour, rice, pasta, sugar, and canned goods", "Use sealed containers to block out pests and moisture"],
  },
  {
    title: "Freezer Storage",
    color: "#5a7a8a",
    items: [
      "Always label and date everything you freeze",
      "Store raw and cooked foods on separate shelves",
      "Use freezer-safe containers or bags",
    ],
  },
];

export default function Slide10() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 2, background: "#6b8f71" }}/>
        <div style={{ flex: 1, background: "#c8952a" }}/>
        <div style={{ flex: 1, background: "#b5462a" }}/>
        <div style={{ flex: 1, background: "#5a7a8a" }}/>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: title + fridge SVG */}
        <div
          className="flex flex-col justify-center px-10 py-8 shrink-0 relative"
          style={{ width: "32%", borderRight: "1.5px solid #d8c8ac", background: "#f4ede0" }}
        >
          <div
            className="absolute font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "9rem", color: "#1a1510", opacity: 0.04, bottom: 0, right: 8, lineHeight: 1 }}
          >10</div>

          <div className="flex flex-col gap-5">
            <div className="fade-up">
              <div className="tag-pill mb-3">Safety / Slide 09</div>
              <h2
                className="font-playfair text-[#1a1510] font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)" }}
              >
                Storing Food<br/>Properly
              </h2>
              <p className="font-inter text-[#6b5e4a] mt-2" style={{ fontSize: "0.8rem" }}>
                Where you store food is just as important as how you cook it.
              </p>
            </div>

            {/* Fridge SVG */}
            <div className="fade-up-d2" style={{ alignSelf: "center" }}>
              <svg width="90" height="130" viewBox="0 0 90 130" fill="none">
                {/* Body */}
                <rect x="10" y="5" width="70" height="120" rx="8" fill="#f0f8ff" stroke="#d8c8ac" strokeWidth="2"/>
                {/* Freezer section */}
                <rect x="10" y="5" width="70" height="38" rx="8" fill="#ddeeff" stroke="#d8c8ac" strokeWidth="2"/>
                {/* Divider */}
                <line x1="10" y1="43" x2="80" y2="43" stroke="#d8c8ac" strokeWidth="2"/>
                {/* Handles */}
                <rect x="62" y="20" width="6" height="16" rx="3" fill="#aab8c2" stroke="#d8c8ac" strokeWidth="1"/>
                <rect x="62" y="60" width="6" height="20" rx="3" fill="#aab8c2" stroke="#d8c8ac" strokeWidth="1"/>
                {/* Shelf lines in fridge */}
                <line x1="14" y1="70" x2="76" y2="70" stroke="#d8c8ac" strokeWidth="1" strokeDasharray="3 2"/>
                <line x1="14" y1="95" x2="76" y2="95" stroke="#d8c8ac" strokeWidth="1" strokeDasharray="3 2"/>
                {/* Color zone indicators */}
                <rect x="14" y="48" width="58" height="20" rx="3" fill="#6b8f71" opacity="0.2"/>
                <rect x="14" y="73" width="58" height="20" rx="3" fill="#c8952a" opacity="0.2"/>
                <rect x="14" y="98" width="58" height="20" rx="3" fill="#b5462a" opacity="0.2"/>
                {/* Freezer snowflake */}
                <line x1="45" y1="18" x2="45" y2="36" stroke="#2980b9" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                <line x1="36" y1="27" x2="54" y2="27" stroke="#2980b9" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                <line x1="39" y1="21" x2="51" y2="33" stroke="#2980b9" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
                <line x1="51" y1="21" x2="39" y2="33" stroke="#2980b9" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </div>

            <p className="font-inter text-[#1a1510]/30 text-xs fade-up-d3">
              Keep all food covered, labeled, and dated.
            </p>
          </div>
        </div>

        {/* Right: zones + extras */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-5">

          {/* Refrigerator shelves */}
          <div className="fade-up">
            <div className="font-inter font-bold tracking-widest uppercase text-[#1a1510]/35 text-xs mb-3">
              Refrigerator Order
            </div>
            <div className="flex flex-col gap-2">
              {zones.map((z) => (
                <div
                  key={z.label}
                  className="flex items-start gap-4 px-4 py-3 rounded-xl"
                  style={{ background: "#f4ede0", border: `1.5px solid ${z.color}30` }}
                >
                  <div style={{ color: z.color }} className="shrink-0 mt-0.5">{z.icon}</div>
                  <div>
                    <div className="font-inter font-bold tracking-widest uppercase text-xs mb-1" style={{ color: z.color }}>
                      {z.label}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {z.items.map((item, j) => (
                        <span key={j} className="font-inter text-[#3d3428]" style={{ fontSize: "0.78rem" }}>
                          {j > 0 ? "· " : ""}{item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dry + Freezer */}
          <div className="grid grid-cols-2 gap-4 fade-up-d2">
            {extras.map((e) => (
              <div
                key={e.title}
                className="flex flex-col gap-3 p-4 rounded-xl"
                style={{ background: "#f4ede0", border: `1.5px solid ${e.color}30` }}
              >
                <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: e.color }}>
                  {e.title}
                </div>
                <div style={{ height: 1, background: `${e.color}25` }} />
                <ul className="flex flex-col gap-1.5">
                  {e.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="shrink-0 mt-[6px]" style={{ width: 4, height: 4, borderRadius: "50%", background: e.color, display: "block" }} />
                      <span className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.76rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }} />
    </div>
  );
}
