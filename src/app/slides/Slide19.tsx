export default function Slide19() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex">
      {/* Left green panel */}
      <div className="relative flex flex-col items-center justify-center shrink-0"
        style={{ width: "42%", background: "#6b8f71" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}/>
        <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: "#b5462a" }}/>

        <div className="relative flex flex-col items-center gap-5">
          {/* Potato SVG */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <ellipse cx="38" cy="46" rx="22" ry="17" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.8"/>
            <ellipse cx="24" cy="38" rx="14" ry="12" fill="rgba(255,255,255,0.10)" stroke="white" strokeWidth="1.8"/>
            <ellipse cx="52" cy="34" rx="12" ry="10" fill="rgba(255,255,255,0.08)" stroke="white" strokeWidth="1.8"/>
            {/* Sprouts */}
            <path d="M28 26 Q26 20 28 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <path d="M28 20 Q24 18 22 20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
            <path d="M52 24 Q54 18 52 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            {/* Eyes */}
            <circle cx="34" cy="44" r="2" fill="rgba(255,255,255,0.3)"/>
            <circle cx="44" cy="48" r="1.5" fill="rgba(255,255,255,0.3)"/>
            <circle cx="25" cy="37" r="1.5" fill="rgba(255,255,255,0.3)"/>
          </svg>

          <div className="flex items-center justify-center rounded-full border-4 border-white/30"
            style={{ width: 72, height: 72 }}>
            <span className="font-playfair font-bold text-white" style={{ fontSize: "2rem" }}>03</span>
          </div>
          <div className="font-inter text-white/60 font-bold tracking-widest uppercase text-xs">Unit Three</div>
        </div>
      </div>

      {/* Right dark panel */}
      <div className="flex-1 flex flex-col justify-center px-14 relative">
        <div className="absolute top-8 right-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M48 0 L48 48 L0 48" stroke="#6b8f71" strokeWidth="1.5" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute right-8 bottom-8 font-playfair font-bold pointer-events-none select-none"
          style={{ fontSize: "14rem", color: "white", opacity: 0.03, lineHeight: 1 }}>03</div>

        <div className="flex flex-col gap-6">
          <div className="fade-up">
            <span className="tag-pill" style={{ background: "#6b8f71" }}>Unit Three</span>
          </div>
          <h1 className="font-playfair text-white font-bold tracking-tight leading-none fade-up-d1"
            style={{ fontSize: "clamp(2.8rem,6vw,4.5rem)" }}>
            Potatoes<br/>
            <span style={{ color: "#6b8f71", fontStyle: "italic" }}>&amp; Grains</span>
          </h1>
          <div className="flex items-center gap-4 fade-up-d2">
            <div style={{ width: 40, height: 2, background: "#6b8f71", borderRadius: 2 }}/>
            <div style={{ height: 1, flex: 1, maxWidth: 160, background: "rgba(255,255,255,0.08)" }}/>
          </div>
          <p className="font-inter text-white/40 leading-relaxed fade-up-d3"
            style={{ fontSize: "0.88rem", maxWidth: 280 }}>
            Exploring starches, cereals, and the versatile potato in culinary applications.
          </p>
          {/* Grain/wheat icons */}
          <div className="flex gap-4 items-center fade-up-d4" style={{ opacity: 0.25 }}>
            {[0,1,2].map(i => (
              <svg key={i} width="16" height="40" viewBox="0 0 16 40" fill="none">
                <line x1="8" y1="38" x2="8" y2="4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                {[8,14,20,26].map(y => (
                  <g key={y}>
                    <ellipse cx="5" cy={y} rx="4" ry="2.5" transform={`rotate(-20 5 ${y})`} stroke="white" strokeWidth="1" fill="none"/>
                    <ellipse cx="11" cy={y} rx="4" ry="2.5" transform={`rotate(20 11 ${y})`} stroke="white" strokeWidth="1" fill="none"/>
                  </g>
                ))}
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
