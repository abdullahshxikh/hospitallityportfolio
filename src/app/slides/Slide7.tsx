const letters = [
  {
    letter: "F",
    word: "Food",
    desc: "Bacteria feed on proteins and carbohydrates found in most everyday foods.",
    color: "#b5462a",
  },
  {
    letter: "A",
    word: "Acidity",
    desc: "Low-acid foods create a friendlier environment for bacterial growth.",
    color: "#c8952a",
  },
  {
    letter: "T",
    word: "Time",
    desc: "Given enough time, even small colonies of bacteria can multiply rapidly.",
    color: "#8a6a3a",
  },
  {
    letter: "T",
    word: "Temperature",
    desc: "Bacteria thrive in the danger zone between 4\u00b0C and 60\u00b0C.",
    color: "#6b8f71",
  },
  {
    letter: "O",
    word: "Oxygen",
    desc: "Some bacteria require oxygen to grow while others actually prefer none.",
    color: "#5a7a8a",
  },
  {
    letter: "M",
    word: "Moisture",
    desc: "Bacteria need water to survive, so moist environments accelerate growth.",
    color: "#7a5a8a",
  },
];

export default function Slide7() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex flex-col">

      {/* Top accent */}
      <div className="h-1 shrink-0" style={{ background: "#b5462a" }} />

      <div className="flex-1 flex gap-0 min-h-0">
        {/* Left: title block */}
        <div
          className="flex flex-col justify-center px-10 py-8 shrink-0 relative"
          style={{ width: "34%", borderRight: "1.5px solid #3d3428" }}
        >
          {/* Ghost F A T T O M */}
          <div
            className="absolute inset-0 flex items-center justify-center font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "10rem", color: "white", opacity: 0.03, letterSpacing: "-0.04em" }}
          >
            FATTOM
          </div>

          <div className="flex flex-col gap-5">
            <div className="fade-up">
              <div className="tag-pill mb-3">Safety / Slide 06</div>
              <h2
                className="font-playfair text-white font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                FATTOM
              </h2>
              <p className="font-inter text-white/50 mt-2" style={{ fontSize: "0.8rem" }}>
                The six conditions bacteria need to grow and multiply
              </p>
            </div>

            <div style={{ height: 1, background: "#3d3428" }} />

            {/* Bacteria SVG */}
            <div className="fade-up-d2" style={{ opacity: 0.4 }}>
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                <circle cx="30" cy="30" r="14" stroke="#b5462a" strokeWidth="1.5" fill="none"/>
                <circle cx="30" cy="30" r="7" stroke="#b5462a" strokeWidth="1" fill="none" strokeDasharray="3 2"/>
                <line x1="30" y1="16" x2="30" y2="10" stroke="#b5462a" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="44" y1="30" x2="50" y2="30" stroke="#b5462a" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="16" y1="30" x2="10" y2="30" stroke="#b5462a" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="30" y1="44" x2="30" y2="50" stroke="#b5462a" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="40" y1="20" x2="45" y2="15" stroke="#b5462a" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="20" y1="20" x2="15" y2="15" stroke="#b5462a" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="56" cy="20" r="6" stroke="#c8952a" strokeWidth="1.2" fill="none"/>
                <circle cx="65" cy="40" r="4" stroke="#6b8f71" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>

            <p className="font-inter text-white/30 text-xs fade-up-d3" style={{ lineHeight: 1.6 }}>
              Understanding FATTOM helps you control any of these six conditions to stop bacteria from growing in the first place.
            </p>
          </div>
        </div>

        {/* Right: letter grid */}
        <div className="flex-1 grid grid-cols-2 gap-0 min-h-0">
          {letters.map((l, i) => (
            <div
              key={`${l.letter}-${i}`}
              className="flex items-start gap-4 p-6 fade-up-d2"
              style={{
                borderRight: i % 2 === 0 ? "1px solid #2e261e" : "none",
                borderBottom: i < 4 ? "1px solid #2e261e" : "none",
                animationDelay: `${0.06 * i}s`,
              }}
            >
              {/* Big letter */}
              <div
                className="font-playfair font-bold shrink-0 leading-none"
                style={{ fontSize: "3.5rem", color: l.color, lineHeight: 1 }}
              >
                {l.letter}
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <div className="font-inter font-bold tracking-widest uppercase text-xs" style={{ color: l.color }}>
                  {l.word}
                </div>
                <div className="font-inter text-white/50 leading-snug" style={{ fontSize: "0.8rem" }}>
                  {l.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
