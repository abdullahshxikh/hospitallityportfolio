export default function Slide18() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex items-center justify-center">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(#2e261e 1px,transparent 1px),linear-gradient(90deg,#2e261e 1px,transparent 1px)",
        backgroundSize: "48px 48px",
        opacity: 0.5,
      }}/>

      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#c8952a" }}/>
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "#3d3428" }}/>

      {/* Corner brackets */}
      {[
        { t: 8, l: 8, d: "M0 36 L0 0 L36 0" },
        { t: 8, r: 8, d: "M36 36 L36 0 L0 0" },
        { b: 8, l: 8, d: "M0 0 L0 36 L36 36" },
        { b: 8, r: 8, d: "M36 0 L36 36 L0 36" },
      ].map((c, i) => (
        <div key={i} className="absolute" style={{ top: c.t, bottom: c.b, left: c.l, right: c.r }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <path d={c.d} stroke="#c8952a" strokeWidth="1.5" fill="none" opacity="0.35"/>
          </svg>
        </div>
      ))}

      {/* Ghost watermark */}
      <div className="absolute font-playfair font-bold pointer-events-none select-none"
        style={{ fontSize: "18rem", color: "white", opacity: 0.025, lineHeight: 1 }}>
        —
      </div>

      {/* Center */}
      <div className="relative flex flex-col items-center gap-7 text-center px-16 fade-up">

        {/* Crossed-out scone icon */}
        <div className="relative" style={{ opacity: 0.5 }}>
          <svg width="72" height="60" viewBox="0 0 72 60" fill="none">
            {/* Scone triangle shape */}
            <path d="M8 52 Q8 20 36 8 Q64 20 64 52 Z" stroke="#c8952a" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
            <path d="M20 48 Q28 36 36 34 Q44 36 52 48" stroke="#c8952a" strokeWidth="1.3" fill="none" opacity="0.5"/>
            {/* X across it */}
            <line x1="10" y1="10" x2="62" y2="56" stroke="#b5462a" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="62" y1="10" x2="10" y2="56" stroke="#b5462a" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="flex flex-col gap-3">
          <div className="tag-pill" style={{ alignSelf: "center", background: "#c8952a" }}>Quick Breads / Slide 17</div>
          <h2 className="font-playfair text-white font-bold tracking-tight"
            style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
            Scones
          </h2>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4" style={{ width: 300 }}>
          <div style={{ flex: 1, height: 1, background: "#3d3428" }}/>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b5462a" }}/>
          <div style={{ flex: 1, height: 1, background: "#3d3428" }}/>
        </div>

        <p className="font-inter text-white/50 leading-relaxed" style={{ fontSize: "0.95rem", maxWidth: 380 }}>
          I was unable to participate in the scones lab.
        </p>
      </div>
    </div>
  );
}
