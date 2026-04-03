import Image from "next/image";

const whmisPoints = [
  {
    num: "01",
    title: "Labels",
    desc: "Every hazardous product gets a warning label with symbols and clear instructions so you know what you're handling before you open the container.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "SDS Sheets",
    desc: "Safety Data Sheets give you in-depth details: health risks, emergency steps, proper storage, and disposal methods for each chemical.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 2 L16 2 L20 6 L20 22 L4 22 Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        <path d="M16 2 L16 6 L20 6" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Training",
    desc: "Workers must complete hands-on training to correctly use, store, and handle chemicals, cutting down the risk of accidents before they happen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M5 21 C5 17 8 15 12 15 C16 15 19 17 19 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

export default function Slide5() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#fdfaf5] flex flex-col">

      {/* Top bar */}
      <div className="flex h-1 shrink-0">
        <div style={{ flex: 2, background: "#b5462a" }}/>
        <div style={{ flex: 1, background: "#c8952a" }}/>
      </div>

      <div className="flex-1 flex gap-0">

        {/* Left column */}
        <div className="flex flex-col justify-center px-12 py-8 gap-6" style={{ width: "42%", borderRight: "1.5px solid #d8c8ac" }}>

          {/* Ghost watermark */}
          <div
            className="absolute left-0 bottom-0 font-playfair font-bold pointer-events-none select-none"
            style={{ fontSize: "14rem", color: "#1a1510", opacity: 0.03, lineHeight: 1, paddingLeft: "2rem" }}
          >W</div>

          <div className="fade-up">
            <div className="tag-pill mb-3">Safety / Slide 04</div>
            <h2
              className="font-playfair text-[#1a1510] font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              WHMIS
            </h2>
            <p className="font-inter text-[#6b5e4a] mt-1" style={{ fontSize: "0.82rem" }}>
              <strong>W</strong>orkplace <strong>H</strong>azardous <strong>M</strong>aterial <strong>I</strong>nformation <strong>S</strong>ystem
            </p>
          </div>

          <div className="flex flex-col gap-3 fade-up-d2">
            {whmisPoints.map((pt) => (
              <div
                key={pt.num}
                className="flex gap-3 items-start p-4 rounded-xl"
                style={{ background: "#f4ede0", border: "1.5px solid #d8c8ac" }}
              >
                <div className="shrink-0 mt-0.5 text-[#b5462a]">{pt.icon}</div>
                <div>
                  <div className="font-inter font-bold text-[#b5462a] text-xs tracking-widest uppercase mb-0.5">
                    {pt.num} &mdash; {pt.title}
                  </div>
                  <div className="font-inter text-[#3d3428] leading-snug" style={{ fontSize: "0.78rem" }}>
                    {pt.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — real WHMIS image */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 py-8 gap-4">
          <p className="font-inter font-bold tracking-widest uppercase text-[#1a1510]/40 text-xs fade-up-d1">
            10 WHMIS Pictograms
          </p>
          <div
            className="relative w-full fade-up-d2 rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid #d8c8ac" }}
          >
            <Image
              src="/assets/whms.png"
              alt="WHMIS pictogram symbols chart"
              width={800}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="font-inter text-[#1a1510]/30 text-xs fade-up-d4">
            Each symbol appears on product labels to warn users at a glance.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-[2px] shrink-0" style={{ background: "#d8c8ac" }} />
    </div>
  );
}
