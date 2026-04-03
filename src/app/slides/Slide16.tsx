import Image from "next/image";

export default function Slide16() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 2, background: "#c8952a" }}/>
        <div style={{ flex: 1, background: "#b5462a" }}/>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-12 py-8 gap-6" style={{ flex: "1 1 52%" }}>
          <div className="fade-up">
            <div className="tag-pill mb-3" style={{ background: "#c8952a" }}>Quick Breads / Slide 15</div>
            <h2
              className="font-playfair text-[#1a1510] font-bold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Cookies
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div style={{ width: 32, height: 2, background: "#c8952a", borderRadius: 2 }}/>
              <span className="font-inter text-[#c8952a] font-bold tracking-widest uppercase text-xs">
                Creaming Method
              </span>
            </div>
          </div>

          <p className="font-inter text-[#3d3428] leading-relaxed fade-up-d1" style={{ fontSize: "0.88rem", maxWidth: 400 }}>
            Cookies were our first full recipe of the course, and the first time we tried mise en place. The process was straightforward but set a great foundation. We used the creaming method to build a light, airy batter.
          </p>

          <div className="flex flex-col gap-2.5 fade-up-d2">
            {[
              { label: "Drop batter", desc: "Cookies are a drop batter, so we used a portion scoop to get consistent sizing" },
              { label: "Mise en place", desc: "Everything prepped and measured before we started — made it smooth and efficient" },
              { label: "The result", desc: "They turned out great and were a solid treat for everyone in class" },
            ].map((l, i) => (
              <div key={l.label} className="flex gap-3 items-start px-4 py-3 rounded-xl"
                style={{ background: "#f4ede0", border: "1.5px solid #ecddc8" }}>
                <div className="font-inter font-bold text-white text-xs shrink-0 flex items-center justify-center rounded-full"
                  style={{ width: 24, height: 24, background: "#c8952a", marginTop: 1 }}>{i+1}</div>
                <div>
                  <span className="font-inter font-semibold text-[#1a1510] text-sm">{l.label} </span>
                  <span className="font-inter text-[#6b5e4a]" style={{ fontSize: "0.79rem" }}>{l.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative flex items-center justify-center p-8 shrink-0"
          style={{ flex: "1 1 48%", borderLeft: "1.5px solid #d8c8ac", background: "#f4ede0" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl fade-up-d2 w-full"
            style={{ maxWidth: 380, aspectRatio: "4/3", border: "2px solid #d8c8ac" }}>
            <Image src="/assets/cookies.png" alt="Chocolate chip cookies" fill className="object-cover"/>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{ background: "rgba(26,21,16,0.75)", backdropFilter: "blur(4px)" }}>
              <div className="font-inter text-white font-semibold text-xs tracking-wide">Chocolate Chip Cookies</div>
              <div className="font-inter text-white/50 text-xs">Our first full recipe of the course</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }}/>
    </div>
  );
}
