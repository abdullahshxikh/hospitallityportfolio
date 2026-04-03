import Image from "next/image";

export default function Slide15() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 2, background: "#c8952a" }}/>
        <div style={{ flex: 1, background: "#b5462a" }}/>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: text block */}
        <div className="flex flex-col justify-center px-12 py-8 gap-6" style={{ flex: "1 1 50%" }}>

          <div className="fade-up">
            <div className="tag-pill mb-3" style={{ background: "#c8952a" }}>Quick Breads / Slide 14</div>
            <h2
              className="font-playfair text-[#1a1510] font-bold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Pancakes
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div style={{ width: 32, height: 2, background: "#c8952a", borderRadius: 2 }}/>
              <span className="font-inter text-[#c8952a] font-bold tracking-widest uppercase text-xs">
                Shrove Tuesday
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 fade-up-d2" style={{ maxWidth: 400 }}>
            <p className="font-inter text-[#3d3428] leading-relaxed" style={{ fontSize: "0.88rem" }}>
              Pancakes kicked off our first lab of the course, done for Shrove Tuesday. The batter came to us pre-made, but that left us free to focus on the actual technique involved in cooking them right.
            </p>

            {/* Key learnings */}
            <div className="flex flex-col gap-2">
              {[
                { label: "The flip", desc: "Learned the correct motion to flip without deflating or tearing" },
                { label: "Light and fluffy", desc: "How to keep pancakes airy even after they come off the pan" },
                { label: "Bubble cue", desc: "Small bubbles forming on the surface are your signal that it's time to flip" },
              ].map((l, i) => (
                <div
                  key={l.label}
                  className="flex gap-3 items-start px-4 py-3 rounded-xl"
                  style={{ background: "#f4ede0", border: "1.5px solid #ecddc8" }}
                >
                  <div
                    className="font-inter font-bold text-white text-xs shrink-0 flex items-center justify-center rounded-full"
                    style={{ width: 24, height: 24, background: "#c8952a", marginTop: 1 }}
                  >{i+1}</div>
                  <div>
                    <span className="font-inter font-semibold text-[#1a1510] text-sm">{l.label} </span>
                    <span className="font-inter text-[#6b5e4a]" style={{ fontSize: "0.79rem" }}>{l.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-inter text-[#1a1510]/35 text-xs fade-up-d3">
              A solid start to the course that introduced the importance of timing and observation in the kitchen.
            </p>
          </div>
        </div>

        {/* Right: photo */}
        <div
          className="relative flex items-center justify-center p-8 shrink-0"
          style={{ flex: "1 1 50%", borderLeft: "1.5px solid #d8c8ac", background: "#f4ede0" }}
        >
          {/* Ghost watermark */}
          <div
            className="absolute font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "10rem", color: "#c8952a", opacity: 0.04, lineHeight: 1 }}
          >🥞</div>

          <div
            className="relative rounded-2xl overflow-hidden shadow-xl fade-up-d2"
            style={{ width: "100%", maxWidth: 380, aspectRatio: "4/3", border: "2px solid #d8c8ac" }}
          >
            <Image
              src="/assets/pancakes.png"
              alt="Pancakes made for Shrove Tuesday"
              fill
              className="object-cover"
            />
            {/* Caption bar */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{ background: "rgba(26,21,16,0.75)", backdropFilter: "blur(4px)" }}
            >
              <div className="font-inter text-white font-semibold text-xs tracking-wide">Shrove Tuesday Pancakes</div>
              <div className="font-inter text-white/50 text-xs">Our first recipe of the course</div>
            </div>
          </div>

          {/* Bubble cue callout */}
          <div
            className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-full fade-up-d3"
            style={{ background: "#c8952a", boxShadow: "0 4px 16px rgba(200,149,42,0.35)" }}
          >
            <span className="font-inter text-white font-bold text-xs">Bubbles = flip time</span>
          </div>
        </div>
      </div>

      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }}/>
    </div>
  );
}
