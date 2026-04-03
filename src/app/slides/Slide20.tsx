import Image from "next/image";

export default function Slide20() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex flex-col">
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 1, background: "#6b8f71" }}/>
        <div style={{ flex: 1, background: "#c8952a" }}/>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-10 py-8 gap-5 shrink-0 relative"
          style={{ width: "40%", borderRight: "1.5px solid #3d3428" }}>
          <div className="absolute font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "8rem", color: "white", opacity: 0.03, bottom: 0, right: 8, lineHeight: 1 }}>20</div>

          <div className="fade-up">
            <div className="tag-pill mb-3" style={{ background: "#6b8f71" }}>Potatoes &amp; Grains / Slide 19</div>
            <h2 className="font-playfair text-white font-bold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>
              Homefries
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div style={{ width: 28, height: 2, background: "#6b8f71", borderRadius: 2 }}/>
              <span className="font-inter text-[#6b8f71] font-bold tracking-widest uppercase text-xs">Mise en Place</span>
            </div>
          </div>

          <p className="font-inter text-white/60 leading-relaxed fade-up-d1" style={{ fontSize: "0.84rem" }}>
            We started by cleaning the station and setting up our mise en place. Using a stable base, we practiced the rolling technique to slice potatoes and onions, then the pivot technique for the parsley. Everything got stored in the fridge overnight.
          </p>

          <div className="flex flex-col gap-2 fade-up-d2">
            {[
              { k: "Day 2", v: "The next day we boiled and then pan-fried the home fries, adding all the other ingredients at the right stage" },
              { k: "Technique", v: "Rolling cut for potatoes and onions, pivot cut for parsley — good knife skill practice" },
              { k: "The result", v: "They turned out great — a real hands-on learning experience from prep to plate" },
            ].map(item => (
              <div key={item.k} className="flex gap-3 items-start px-4 py-2.5 rounded-xl"
                style={{ background: "#221c15", border: "1.5px solid #3d3428" }}>
                <span className="font-inter font-bold text-[#6b8f71] text-xs shrink-0 mt-0.5 tracking-widest uppercase">{item.k}</span>
                <span className="font-inter text-white/50 leading-snug" style={{ fontSize: "0.76rem" }}>{item.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3 photo layout */}
        <div className="flex-1 grid gap-3 p-8 content-center"
          style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
          {/* Top left: large */}
          <div className="relative rounded-xl overflow-hidden fade-up-d1"
            style={{ gridRow: "span 2", border: "1.5px solid #3d3428" }}>
            <Image src="/assets/homefries1.png" alt="Homefries cooking" fill className="object-cover"/>
          </div>
          <div className="relative rounded-xl overflow-hidden fade-up-d2"
            style={{ border: "1.5px solid #3d3428" }}>
            <Image src="/assets/homefries2.png" alt="Homefries plated" fill className="object-cover"/>
          </div>
          <div className="relative rounded-xl overflow-hidden fade-up-d3"
            style={{ border: "1.5px solid #3d3428" }}>
            <Image src="/assets/homefries3.png" alt="Mise en place" fill className="object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}
