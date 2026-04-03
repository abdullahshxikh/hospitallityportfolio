export default function Slide21() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex items-center justify-center">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(#2e261e 1px,transparent 1px),linear-gradient(90deg,#2e261e 1px,transparent 1px)",
        backgroundSize: "48px 48px",
        opacity: 0.5,
      }}/>

      {/* Terracotta top + bottom bars */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#b5462a" }}/>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "#b5462a" }}/>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M0 36 L0 0 L36 0" stroke="#b5462a" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M36 36 L36 0 L0 0" stroke="#b5462a" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-8">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M0 0 L0 36 L36 36" stroke="#b5462a" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-8">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M36 0 L36 36 L0 36" stroke="#b5462a" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>

      {/* Ghost watermark */}
      <div className="absolute font-playfair font-bold pointer-events-none select-none text-center"
        style={{ fontSize: "22rem", color: "white", opacity: 0.025, lineHeight: 1, letterSpacing: "-0.04em" }}>
        TY
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8 text-center px-12 fade-up">

        {/* Small chef hat */}
        <svg width="56" height="52" viewBox="0 0 56 52" fill="none" style={{ opacity: 0.5 }}>
          <ellipse cx="28" cy="22" rx="22" ry="17" stroke="#c8952a" strokeWidth="1.8" fill="none"/>
          <ellipse cx="14" cy="28" rx="12" ry="13" stroke="#c8952a" strokeWidth="1.8" fill="none"/>
          <ellipse cx="42" cy="28" rx="12" ry="13" stroke="#c8952a" strokeWidth="1.8" fill="none"/>
          <rect x="9" y="37" width="38" height="12" rx="3" stroke="#c8952a" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="flex flex-col gap-2">
          <div className="tag-pill" style={{ alignSelf: "center", background: "#b5462a" }}>End of Presentation</div>
          <h1 className="font-playfair text-white font-bold leading-tight"
            style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "-0.02em" }}>
            Thank You
          </h1>
        </div>

        {/* Ruled divider */}
        <div className="flex items-center gap-4" style={{ width: 340 }}>
          <div style={{ flex: 1, height: 1, background: "#3d3428" }}/>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1 L10.5 7 L16 4 L12.5 9 L18 9.5 L12.5 11 L16 16 L10.5 12.5 L9 18 L7.5 12.5 L2 16 L5.5 11 L0 9.5 L5.5 9 L2 4 L7.5 7 Z" fill="#c8952a" opacity="0.7"/>
          </svg>
          <div style={{ flex: 1, height: 1, background: "#3d3428" }}/>
        </div>

        {/* Name block */}
        <div className="flex flex-col gap-1">
          <p className="font-playfair text-white font-semibold" style={{ fontSize: "1.5rem" }}>
            Abdullah Shaikh
          </p>
          <p className="font-inter text-white/40 tracking-widest uppercase text-xs">
            Ms Prasad &nbsp;·&nbsp; TFJ20I &nbsp;·&nbsp; June 26th, 2026
          </p>
        </div>

        {/* Bottom row of utensil icons */}
        <div className="flex gap-8 items-end" style={{ opacity: 0.2 }}>
          {/* Fork */}
          <svg width="14" height="48" viewBox="0 0 14 48" fill="none">
            <line x1="3" y1="2" x2="3" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="7" y1="2" x2="7" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="11" y1="2" x2="11" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 13 Q7 19 11 13" fill="none" stroke="white" strokeWidth="1.5"/>
            <rect x="5.5" y="19" width="3" height="26" rx="1.5" stroke="white" strokeWidth="1.2" fill="none"/>
          </svg>
          {/* Knife */}
          <svg width="14" height="56" viewBox="0 0 14 56" fill="none">
            <path d="M7 3 L10 10 L9 38 L5 38 L4 10 Z" stroke="white" strokeWidth="1.5" fill="none"/>
            <rect x="4" y="37" width="6" height="16" rx="3" stroke="white" strokeWidth="1.2" fill="none"/>
          </svg>
          {/* Spoon */}
          <svg width="14" height="52" viewBox="0 0 14 52" fill="none">
            <ellipse cx="7" cy="10" rx="6" ry="8" stroke="white" strokeWidth="1.5" fill="none"/>
            <rect x="5.5" y="18" width="3" height="32" rx="1.5" stroke="white" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
