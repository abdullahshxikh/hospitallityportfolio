export default function Slide8() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      {/* Top tricolor bar */}
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 1, background: "#2980b9" }} />
        <div style={{ flex: 1, background: "#b5462a" }} />
        <div style={{ flex: 1, background: "#2980b9" }} />
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: title + context */}
        <div
          className="flex flex-col justify-center px-10 py-8 shrink-0 relative"
          style={{ width: "38%", borderRight: "1.5px solid #d8c8ac" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "9rem", color: "#b5462a", opacity: 0.05, lineHeight: 1 }}
          >
            DZ
          </div>

          <div className="flex flex-col gap-5">
            <div className="fade-up">
              <div className="tag-pill mb-3" style={{ background: "#b5462a" }}>Safety / Slide 07</div>
              <h2
                className="font-playfair text-[#1a1510] font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                The Danger Zone
              </h2>
            </div>

            {/* Temperature range hero */}
            <div
              className="flex flex-col gap-1 p-5 rounded-xl fade-up-d1"
              style={{ background: "#b5462a", color: "white" }}
            >
              <div className="font-inter text-white/70 text-xs font-semibold tracking-widest uppercase">Temperature Range</div>
              <div className="font-playfair font-bold" style={{ fontSize: "2rem", lineHeight: 1.1 }}>
                4°C — 60°C
              </div>
              <div className="font-inter text-white/80 text-sm">40°F to 140°F</div>
            </div>

            <div className="flex flex-col gap-3 fade-up-d2">
              <div
                className="flex gap-3 items-start p-4 rounded-xl"
                style={{ background: "#fff0ed", border: "1.5px solid #b5462a30" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                  <path d="M10 2 L18 18 L2 18 Z" stroke="#b5462a" strokeWidth="1.6" fill="none"/>
                  <line x1="10" y1="8" x2="10" y2="13" stroke="#b5462a" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="10" cy="15.5" r="1" fill="#b5462a"/>
                </svg>
                <p className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.8rem" }}>
                  Bacteria multiply fastest inside this range. Never leave food here for more than <strong>2 hours</strong>.
                </p>
              </div>
            </div>

            <p className="font-inter text-[#1a1510]/30 text-xs fade-up-d3">
              Time above 60°C or below 4°C is safe territory.
            </p>
          </div>
        </div>

        {/* Right: visual zones + thermometer */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-6">

          <div className="font-inter font-bold tracking-widest uppercase text-[#1a1510]/35 text-xs fade-up">
            Temperature Map
          </div>

          {/* Zone strips */}
          <div className="flex gap-6 items-stretch fade-up-d1" style={{ maxWidth: 440 }}>
            {/* Thermometer SVG */}
            <div className="flex flex-col items-center justify-end shrink-0" style={{ paddingBottom: 6 }}>
              <svg width="40" height="220" viewBox="0 0 40 220" fill="none">
                {/* Tube */}
                <rect x="16" y="10" width="8" height="170" rx="4" fill="#f4ede0" stroke="#d8c8ac" strokeWidth="1.5"/>
                {/* Scale ticks */}
                {[20,50,80,110,140,165].map((y,i) => (
                  <line key={i} x1="24" y1={y} x2="30" y2={y} stroke="#d8c8ac" strokeWidth="1"/>
                ))}
                {/* Cold fill */}
                <rect x="17" y="100" width="6" height="78" rx="3" fill="#2980b9"/>
                {/* Bulb */}
                <circle cx="20" cy="192" r="12" fill="#b5462a" stroke="#d8c8ac" strokeWidth="1.5"/>
                {/* Hot fill indicator */}
                <rect x="17" y="10" width="6" height="90" rx="3" fill="#b5462a" opacity="0.25"/>
              </svg>
            </div>

            {/* Zone labels */}
            <div className="flex flex-col justify-between flex-1 py-1">
              {[
                { label: "Hot food zone", temp: "Above 60°C", color: "#b5462a", bg: "#fff0ed", border: "#b5462a25", safe: true, icon: "✓" },
                { label: "DANGER ZONE", temp: "4°C – 60°C", color: "#b5462a", bg: "#fdf2e9", border: "#b5462a", safe: false, icon: "⚠" },
                { label: "Cold food zone", temp: "Below 4°C", color: "#2980b9", bg: "#edf4fd", border: "#2980b925", safe: true, icon: "✓" },
              ].map((zone) => (
                <div
                  key={zone.label}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{
                    background: zone.bg,
                    border: `${zone.safe ? "1.5px" : "2px"} solid ${zone.border}`,
                    flex: zone.safe ? "0 0 auto" : "1",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{zone.icon}</span>
                  <div>
                    <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: zone.color }}>
                      {zone.label}
                    </div>
                    <div className="font-playfair font-semibold text-[#1a1510]" style={{ fontSize: "0.95rem" }}>
                      {zone.temp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keep rules */}
          <div className="flex gap-4 fade-up-d3">
            {[
              { rule: "Keep cold food", temp: "Below 4°C", icon: "❄", color: "#2980b9" },
              { rule: "Keep hot food", temp: "Above 60°C", icon: "🔥", color: "#b5462a" },
            ].map((r) => (
              <div
                key={r.rule}
                className="flex items-center gap-3 px-5 py-3 rounded-xl"
                style={{ background: "#f4ede0", border: "1.5px solid #d8c8ac" }}
              >
                <span style={{ fontSize: "1.2rem" }}>{r.icon}</span>
                <div>
                  <div className="font-inter text-xs text-[#6b5e4a]">{r.rule}</div>
                  <div className="font-inter font-bold" style={{ color: r.color, fontSize: "0.9rem" }}>{r.temp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }} />
    </div>
  );
}
