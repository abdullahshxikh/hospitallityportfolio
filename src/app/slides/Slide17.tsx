import Image from "next/image";

export default function Slide17() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1a1510] flex flex-col">
      <div className="h-1 shrink-0" style={{ background: "#c8952a" }}/>

      <div className="flex-1 flex min-h-0">
        {/* Left: title + body */}
        <div className="flex flex-col justify-center px-10 py-8 gap-5 shrink-0 relative"
          style={{ width: "40%", borderRight: "1.5px solid #3d3428" }}>
          <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: "#c8952a" }}/>
          <div
            className="absolute font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "9rem", color: "white", opacity: 0.03, bottom: 0, right: 8, lineHeight: 1 }}>17</div>

          <div className="fade-up">
            <div className="tag-pill mb-3" style={{ background: "#c8952a" }}>Quick Breads / Slide 16</div>
            <h2 className="font-playfair text-white font-bold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>
              Biscuits
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div style={{ width: 28, height: 2, background: "#c8952a", borderRadius: 2 }}/>
              <span className="font-inter text-[#c8952a] font-bold tracking-widest uppercase text-xs">Cut-in Method</span>
            </div>
          </div>

          <p className="font-inter text-white/60 leading-relaxed fade-up-d1" style={{ fontSize: "0.84rem" }}>
            Biscuits use the cut-in method, where cold butter gets worked into the dough to create distinct layers. The soft dough is then cut into circles and baked.
          </p>

          <div className="flex flex-col gap-2 fade-up-d2">
            {[
              { k: "Layers", v: "Cold butter cut into the dough creates a flaky, layered texture" },
              { k: "Don't overwork", v: "Working the dough too much makes biscuits tough — gentle hands only" },
              { k: "The verdict", v: "These turned out better than most restaurant biscuits — a huge win" },
            ].map(item => (
              <div key={item.k} className="flex gap-3 items-start px-4 py-2.5 rounded-xl"
                style={{ background: "#221c15", border: "1.5px solid #3d3428" }}>
                <span className="font-inter font-bold text-[#c8952a] text-xs shrink-0 mt-0.5 tracking-widest uppercase">{item.k}</span>
                <span className="font-inter text-white/50 leading-snug" style={{ fontSize: "0.76rem" }}>{item.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 2x2 photo grid */}
        <div className="flex-1 grid grid-cols-2 gap-3 p-8 content-center">
          {["biscuits1","biscuits2","biscuits3"].map((img, i) => (
            <div key={img}
              className={`relative rounded-xl overflow-hidden fade-up-d${i+1}`}
              style={{
                border: "1.5px solid #3d3428",
                aspectRatio: i === 2 ? "2/1" : "4/3",
                gridColumn: i === 2 ? "span 2" : "span 1",
              }}>
              <Image src={`/assets/${img}.png`} alt={`Biscuits step ${i+1}`} fill className="object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
