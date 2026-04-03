export default function Slide1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#f4ede0] grid-bg flex">

      {/* Left dark sidebar */}
      <div
        className="relative flex flex-col justify-between py-12 px-8 shrink-0"
        style={{ width: 220, background: "#1a1510" }}
      >
        {/* Decorative vertical rule */}
        <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: "#b5462a" }} />

        {/* Top: chef hat SVG */}
        <div className="flex flex-col gap-6">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <ellipse cx="26" cy="22" rx="20" ry="17" fill="#2e261e" stroke="#b5462a" strokeWidth="1.5"/>
            <ellipse cx="14" cy="28" rx="11" ry="13" fill="#2e261e" stroke="#b5462a" strokeWidth="1.5"/>
            <ellipse cx="38" cy="28" rx="11" ry="13" fill="#2e261e" stroke="#b5462a" strokeWidth="1.5"/>
            <rect x="8" y="36" width="36" height="11" rx="3" fill="#3d3428" stroke="#b5462a" strokeWidth="1.2"/>
            <ellipse cx="20" cy="17" rx="6" ry="4" fill="white" opacity="0.08"/>
          </svg>

          {/* Vertical label */}
          <div className="font-inter text-[#c8952a] font-semibold tracking-[0.22em] uppercase" style={{ fontSize: "0.6rem", writingMode: "vertical-lr", letterSpacing: "0.25em" }}>
            TFJ20I &nbsp; · &nbsp; April 2nd
          </div>
        </div>

        {/* Bottom: utensil strip */}
        <div className="flex flex-col items-center gap-4">
          {/* Tiny rolling pin */}
          <svg width="36" height="16" viewBox="0 0 80 30" fill="none">
            <rect x="0" y="10" width="16" height="10" rx="5" fill="#c8952a" opacity="0.5"/>
            <rect x="64" y="10" width="16" height="10" rx="5" fill="#c8952a" opacity="0.5"/>
            <rect x="14" y="6" width="52" height="18" rx="9" fill="#3d3428" stroke="#c8952a" strokeWidth="1" opacity="0.8"/>
          </svg>
          {/* Tiny fork */}
          <svg width="14" height="40" viewBox="0 0 14 40" fill="none">
            <line x1="3" y1="2" x2="3" y2="14" stroke="#c8952a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <line x1="7" y1="2" x2="7" y2="15" stroke="#c8952a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <line x1="11" y1="2" x2="11" y2="14" stroke="#c8952a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <path d="M3 13 Q7 18 11 13" fill="none" stroke="#c8952a" strokeWidth="1.5" opacity="0.6"/>
            <rect x="5.5" y="18" width="3" height="20" rx="1.5" fill="#c8952a" opacity="0.5"/>
          </svg>
          <div className="font-inter text-white/20 text-[9px] tracking-widest">PORTFOLIO</div>
        </div>
      </div>

      {/* Right main area */}
      <div className="flex-1 flex flex-col justify-center px-16 py-12 relative">

        {/* Decorative large watermark number */}
        <div
          className="absolute right-8 bottom-8 font-playfair select-none pointer-events-none"
          style={{ fontSize: "18rem", lineHeight: 1, color: "#1a1510", opacity: 0.04, fontWeight: 700 }}
        >
          01
        </div>

        {/* Corner accent top right */}
        <div className="absolute top-10 right-10 fade-up">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M60 0 L60 60 L0 60" stroke="#b5462a" strokeWidth="1.5" fill="none" opacity="0.4"/>
          </svg>
        </div>

        <div className="flex flex-col gap-8">
          {/* Eyebrow tag */}
          <div className="fade-up">
            <span className="tag-pill">Hospitality Portfolio</span>
          </div>

          {/* Main title */}
          <div className="fade-up-d1">
            <h1
              className="font-playfair text-[#1a1510] leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", fontWeight: 700 }}
            >
              The Art of<br />
              <span style={{ color: "#b5462a", fontStyle: "italic" }}>Hospitality</span>
            </h1>
          </div>

          {/* Ruled divider */}
          <div className="flex items-center gap-4 fade-up-d2">
            <div style={{ height: 2, width: 40, background: "#b5462a", borderRadius: 2 }} />
            <div style={{ height: 1, flex: 1, maxWidth: 200, background: "#d8c8ac" }} />
          </div>

          {/* Info block */}
          <div className="flex flex-col gap-3 fade-up-d3">
            {[
              { label: "Student",  value: "Abdullah Shaikh" },
              { label: "Teacher",  value: "Ms Prasad" },
              { label: "Course",   value: "TFJ20I" },
              { label: "Date",     value: "Thursday, April 2nd" },
            ].map(row => (
              <div key={row.label} className="flex items-baseline gap-3">
                <span
                  className="font-inter uppercase shrink-0"
                  style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "#c8952a", width: 60 }}
                >
                  {row.label}
                </span>
                <span className="font-playfair text-[#1a1510]" style={{ fontSize: "1.05rem", fontWeight: 500 }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="flex gap-3 items-center fade-up-d4">
            {/* Tiny starburst */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1 L10.5 7 L16 4 L12.5 9 L18 9.5 L12.5 11 L16 16 L10.5 12.5 L9 18 L7.5 12.5 L2 16 L5.5 11 L0 9.5 L5.5 9 L2 4 L7.5 7 Z" fill="#c8952a" opacity="0.7"/>
            </svg>
            <span className="font-inter text-[#3d3428]/50 tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>
              Food &amp; Nutrition Studies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
