export default function Slide3() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex">

      {/* Left: full-bleed terracotta panel */}
      <div
        className="relative flex flex-col items-center justify-center shrink-0"
        style={{ width: "42%", background: "#b5462a" }}
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Number */}
        <div className="relative flex flex-col items-center gap-4">
          <span
            className="font-playfair font-bold text-white leading-none"
            style={{ fontSize: "9rem", opacity: 0.12, lineHeight: 1, position: "absolute", top: "-4rem" }}
          >
            01
          </span>
          <div
            className="flex items-center justify-center rounded-full border-4 border-white/30"
            style={{ width: 100, height: 100 }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25 4 L45 13 L45 28 C45 39 35 47 25 50 C15 47 5 39 5 28 L5 13 Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M16 26 L22 33 L36 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="font-inter text-white/60 font-semibold tracking-[0.25em] uppercase text-xs mt-2">
            Unit One
          </div>
        </div>
      </div>

      {/* Right: dark typographic panel */}
      <div className="flex-1 flex flex-col justify-center px-14 relative">

        {/* Decorative corner */}
        <div className="absolute top-8 right-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M48 0 L48 48 L0 48" stroke="#b5462a" strokeWidth="1.5" fill="none" opacity="0.5"/>
          </svg>
        </div>

        <div className="flex flex-col gap-6">
          <div className="tag-pill fade-up" style={{ alignSelf: "flex-start" }}>
            Section 01
          </div>

          <h1
            className="font-playfair text-white font-bold leading-none tracking-tight fade-up-d1"
            style={{ fontSize: "clamp(4rem, 8vw, 6.5rem)" }}
          >
            Safety
          </h1>

          <div className="flex items-center gap-4 fade-up-d2">
            <div style={{ width: 40, height: 2, background: "#b5462a", borderRadius: 2 }} />
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)", maxWidth: 180 }} />
          </div>

          <p
            className="font-inter text-white/40 leading-relaxed fade-up-d3"
            style={{ fontSize: "0.9rem", maxWidth: 280 }}
          >
            Covering hazards, WHMIS, and keeping the kitchen safe for everyone.
          </p>

          {/* Utensil icons row */}
          <div className="flex gap-5 items-center fade-up-d4" style={{ opacity: 0.25 }}>
            {/* Knife */}
            <svg width="16" height="60" viewBox="0 0 16 60" fill="none">
              <path d="M8 4 L13 14 L11 48 L5 48 L3 14 Z" stroke="white" strokeWidth="1.5" fill="none"/>
              <rect x="4" y="47" width="8" height="12" rx="3" stroke="white" strokeWidth="1.2" fill="none"/>
            </svg>
            {/* Spoon */}
            <svg width="16" height="60" viewBox="0 0 16 60" fill="none">
              <ellipse cx="8" cy="10" rx="7" ry="9" stroke="white" strokeWidth="1.5" fill="none"/>
              <rect x="6.5" y="19" width="3" height="38" rx="1.5" stroke="white" strokeWidth="1.2" fill="none"/>
            </svg>
            {/* Fork */}
            <svg width="16" height="60" viewBox="0 0 16 60" fill="none">
              <line x1="4" y1="3" x2="4" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="3" x2="8" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="12" y1="3" x2="12" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 17 Q8 23 12 17" stroke="white" strokeWidth="1.5" fill="none"/>
              <rect x="6.5" y="23" width="3" height="35" rx="1.5" stroke="white" strokeWidth="1.2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
