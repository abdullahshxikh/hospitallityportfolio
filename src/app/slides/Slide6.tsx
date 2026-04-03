const rights = [
  {
    num: "01",
    title: "Right to Know",
    color: "#b5462a",
    points: [
      "Be informed about every hazard present in your workplace",
      "Receive proper safety training and access to information",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <line x1="14" y1="10" x2="14" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="14" cy="7.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Right to Participate",
    color: "#c8952a",
    points: [
      "Actively help identify and flag hazards on the job",
      "Ask questions freely and raise safety concerns without fear",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M6 24 C6 19 9 17 14 17 C19 17 22 19 22 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M19 12 L22 9 L25 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="22" y1="9" x2="22" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Right to Refuse",
    color: "#6b8f71",
    points: [
      "Decline any task that could reasonably cause injury or illness",
      "The law protects you from any punishment for refusing unsafe work",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <line x1="8" y1="8" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="8" x2="8" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Slide6() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 1, background: "#b5462a" }}/>
        <div style={{ flex: 1, background: "#c8952a" }}/>
        <div style={{ flex: 1, background: "#6b8f71" }}/>
      </div>

      <div className="flex-1 flex gap-0">
        {/* Dark left panel */}
        <div
          className="relative flex flex-col justify-center items-center py-12 px-8 shrink-0"
          style={{ width: 200, background: "#1a1510" }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: "#c8952a" }} />
          {/* Shield icon */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M28 4 L50 13 L50 30 C50 42 40 52 28 56 C16 52 6 42 6 30 L6 13 Z" stroke="#c8952a" strokeWidth="1.8" fill="none"/>
            <path d="M18 29 L24 36 L40 21" stroke="#c8952a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="mt-6 font-playfair text-white/70 font-semibold text-center" style={{ fontSize: "1rem", lineHeight: 1.3 }}>
            Young<br/>Worker
          </div>
          <div className="mt-2 font-inter text-[#c8952a] font-bold tracking-widest uppercase text-xs text-center">
            Awareness
          </div>
          {/* Ghost watermark */}
          <div
            className="absolute bottom-4 font-playfair font-bold text-white pointer-events-none select-none"
            style={{ fontSize: "6rem", opacity: 0.04, lineHeight: 1 }}
          >06</div>
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-10 gap-7">
          <div className="fade-up">
            <div className="tag-pill mb-3">Safety / Slide 05</div>
            <h2
              className="font-playfair text-[#1a1510] font-bold tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Young Worker Awareness
            </h2>
            <p className="font-inter text-[#6b5e4a] mt-2" style={{ fontSize: "0.85rem" }}>
              As a young worker, you are protected by three non-negotiable rights in every Canadian workplace.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 fade-up-d2">
            {rights.map((r, i) => (
              <div
                key={r.num}
                className="flex flex-col gap-3 p-5 rounded-xl relative overflow-hidden"
                style={{ background: "#f4ede0", border: `1.5px solid ${r.color}30` }}
              >
                <div
                  className="absolute bottom-2 right-3 font-playfair font-bold pointer-events-none select-none"
                  style={{ fontSize: "4rem", color: r.color, opacity: 0.07, lineHeight: 1 }}
                >
                  {r.num}
                </div>
                <div className="flex items-center gap-3">
                  <div className="shrink-0" style={{ color: r.color }}>{r.icon}</div>
                  <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: r.color }}>
                    {r.num}
                  </div>
                </div>
                <div className="font-playfair text-[#1a1510] font-semibold" style={{ fontSize: "0.95rem" }}>
                  {r.title}
                </div>
                <div style={{ height: 1, background: `${r.color}25` }} />
                <ul className="flex flex-col gap-2">
                  {r.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="shrink-0 mt-[6px]" style={{ width: 4, height: 4, borderRadius: "50%", background: r.color, display: "block" }}/>
                      <span className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.78rem" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="font-inter text-[#1a1510]/30 text-xs fade-up-d4">
            These rights are guaranteed under Ontario&apos;s Occupational Health and Safety Act (OHSA).
          </p>
        </div>
      </div>

      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }} />
    </div>
  );
}
