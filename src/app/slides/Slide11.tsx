const temps = [
  { food: "Poultry", detail: "Chicken, turkey, all birds", temp: "74°C", imperial: "165°F", color: "#b5462a", icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="17" rx="9" ry="7" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M8 14 Q10 8 14 8 Q18 8 20 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M7 11 Q5 8 7 6 C9 4 11 6 9 8" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <path d="M10 22 L9 27 M14 23 L14 27 M18 22 L19 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { food: "Ground Meats", detail: "Beef, pork, lamb", temp: "71°C", imperial: "160°F", color: "#8a4a2a", icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 16 Q4 10 14 10 Q24 10 24 16 L22 22 L6 22 Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M8 10 Q10 6 14 6 Q18 6 20 10" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <line x1="9" y1="14" x2="9" y2="20" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      <line x1="14" y1="13" x2="14" y2="21" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      <line x1="19" y1="14" x2="19" y2="20" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    </svg>
  )},
  { food: "Fish", detail: "All whole fish and fillets", temp: "70°C", imperial: "158°F", color: "#5a7a8a", icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 14 Q8 8 16 10 Q22 11 24 14 Q22 17 16 18 Q8 20 4 14Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M4 14 L0 10 L0 18 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="20" cy="13" r="1.5" fill="currentColor"/>
      <path d="M12 11 Q14 14 12 17" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
    </svg>
  )},
  { food: "Reheated Foods", detail: "All previously cooked items", temp: "74°C", imperial: "165°F", color: "#6b8f71", icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 12 C8 6 20 6 20 12 L19 22 L9 22 Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M6 22 L22 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11 8 Q11 4 14 4 Q17 4 17 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M10 15 Q14 12 18 15" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
    </svg>
  )},
];

export default function Slide11() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      <div className="flex h-1 shrink-0">
        {temps.map(t => <div key={t.food} style={{ flex: 1, background: t.color }}/>)}
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: title + context */}
        <div
          className="flex flex-col justify-center px-10 py-8 shrink-0 relative"
          style={{ width: "35%", background: "#1a1510", borderRight: "3px solid #b5462a" }}
        >
          <div
            className="absolute font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "9rem", color: "white", opacity: 0.03, bottom: 0, right: 8, lineHeight: 1 }}
          >°C</div>

          <div className="flex flex-col gap-5">
            <div className="fade-up">
              <div className="tag-pill mb-3">Safety / Slide 10</div>
              <h2 className="font-playfair text-white font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.8rem,3.2vw,2.5rem)" }}>
                Correct Cooking<br/>Temperatures
              </h2>
            </div>

            {/* Thermometer SVG */}
            <div className="fade-up-d2" style={{ opacity: 0.6 }}>
              <svg width="50" height="120" viewBox="0 0 50 120" fill="none">
                <rect x="20" y="8" width="10" height="82" rx="5" fill="#2e261e" stroke="#c8952a" strokeWidth="1.5"/>
                {[20,35,50,65,80].map((y,i) => (
                  <line key={i} x1="30" y1={y} x2="36" y2={y} stroke="#c8952a" strokeWidth="1" opacity="0.6"/>
                ))}
                <rect x="21" y="30" width="8" height="58" rx="4" fill="#b5462a"/>
                <circle cx="25" cy="105" r="12" fill="#b5462a" stroke="#c8952a" strokeWidth="1.5"/>
                <circle cx="25" cy="105" r="7" fill="#d4623e"/>
              </svg>
            </div>

            <p className="font-inter text-white/40 leading-relaxed fade-up-d3" style={{ fontSize: "0.78rem" }}>
              Reaching the right internal temperature is the only reliable way to know food is safe to eat.
            </p>
          </div>
        </div>

        {/* Right: temp cards */}
        <div className="flex-1 grid grid-cols-2 gap-4 p-10 content-center">
          {temps.map((t, i) => (
            <div
              key={t.food}
              className="flex flex-col gap-3 p-5 rounded-xl relative overflow-hidden fade-up-d2"
              style={{ background: "#f4ede0", border: `1.5px solid ${t.color}30`, animationDelay: `${0.1*i}s` }}
            >
              <div
                className="absolute bottom-2 right-3 font-playfair font-bold pointer-events-none select-none"
                style={{ fontSize: "3.5rem", color: t.color, opacity: 0.08, lineHeight: 1 }}
              >{t.temp}</div>

              <div className="flex items-center gap-3">
                <div style={{ color: t.color }}>{t.icon}</div>
                <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: t.color }}>
                  {t.food}
                </div>
              </div>
              <div style={{ height: 1, background: `${t.color}25` }}/>
              <div className="font-inter text-[#6b5e4a] text-xs">{t.detail}</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-playfair font-bold text-[#1a1510]" style={{ fontSize: "1.6rem" }}>{t.temp}</span>
                <span className="font-inter text-[#6b5e4a] text-sm">/ {t.imperial}</span>
              </div>
            </div>
          ))}
          <p className="col-span-2 font-inter text-[#1a1510]/30 text-xs fade-up-d4 pt-1">
            A probe thermometer is the only way to verify internal temperature accurately.
          </p>
        </div>
      </div>

      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }}/>
    </div>
  );
}
