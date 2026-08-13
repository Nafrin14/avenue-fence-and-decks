import React, { useState, useEffect } from 'react';

const cards = [
  {
    id: 0,
    title: 'Custom Decks',
    sub: 'Cedar & Composite',
    image: '/services_deck_1786481182671.webp',
    icon: '🪵',
    panelFrom: '#16092a',
    panelTo:   '#26124a',
    blob1: 'rgba(139,92,246,0.32)',
    blob2: 'rgba(109,40,217,0.22)',
    accent: '#a855f7',
    outerBg: '#2d1060',
  },
  {
    id: 1,
    title: 'Privacy Fencing',
    sub: 'Vinyl, wood & metal',
    image: '/services_fence_1786481230809.webp',
    icon: '🏡',
    panelFrom: '#091c2c',
    panelTo:   '#0d2840',
    blob1: 'rgba(14,165,233,0.32)',
    blob2: 'rgba(2,132,199,0.22)',
    accent: '#38bdf8',
    outerBg: '#062040',
  },
  {
    id: 2,
    title: 'Smart Lighting',
    sub: 'App-controlled LEDs',
    image: '/services_lighting_1786481805892.webp',
    icon: '✨',
    panelFrom: '#18180a',
    panelTo:   '#28280e',
    blob1: 'rgba(234,179,8,0.32)',
    blob2: 'rgba(202,138,4,0.22)',
    accent: '#facc15',
    outerBg: '#282000',
  },
  {
    id: 3,
    title: 'Gate Installation',
    sub: 'Driveway & walkways',
    image: '/hero_fence_deck_1786481154195.webp',
    icon: '🚪',
    panelFrom: '#1a0a0a',
    panelTo:   '#2e0e0e',
    blob1: 'rgba(239,68,68,0.32)',
    blob2: 'rgba(220,38,38,0.22)',
    accent: '#f87171',
    outerBg: '#300808',
  },
  {
    id: 4,
    title: 'Pergolas & Arbors',
    sub: 'Elegant shade builds',
    image: '/about_team_1786481775672.webp',
    icon: '🌿',
    panelFrom: '#0a180a',
    panelTo:   '#0e2c0e',
    blob1: 'rgba(34,197,94,0.32)',
    blob2: 'rgba(22,163,74,0.22)',
    accent: '#4ade80',
    outerBg: '#062010',
  },
  {
    id: 5,
    title: 'Repairs & Staining',
    sub: 'Restore & protect',
    image: '/services_deck_1786481182671.webp',
    icon: '🔧',
    panelFrom: '#1a100a',
    panelTo:   '#2c1a0c',
    blob1: 'rgba(249,115,22,0.32)',
    blob2: 'rgba(234,88,12,0.22)',
    accent: '#fb923c',
    outerBg: '#241000',
  },
];

const TOTAL = cards.length;
const AUTO_MS = 2400;

export default function Home() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const [active, setActive] = useState(0);

  /* Auto-advance */
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % TOTAL), AUTO_MS);
    return () => clearInterval(t);
  }, []);

  const c = cards[active];

  /*
   * ARC MATH
   * We paint 6 cards on a semicircle whose bottom touches the container bottom.
   * The arc radius is relative to container width so it's responsive.
   * Each card index maps to an angle; active card → 90° (bottom-center).
   *
   * We offset all angles so the active card is always at 270° (bottom of circle).
   */
  const SPREAD_HALF = 56; // degrees each side from center

  return (
    <div
      className="p-3 md:p-5 min-h-screen transition-colors duration-700"
      style={{
        background: `linear-gradient(160deg, ${c.outerBg}dd 0%, #FFE4F0 100%)`,
      }}
    >
      {/* Dark panel */}
      <div
        className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[calc(100vh-2.5rem)] flex flex-col transition-all duration-700"
        style={{
          background: `linear-gradient(165deg, ${c.panelFrom} 0%, ${c.panelTo} 100%)`,
        }}
      >
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
          <div
            className="absolute -top-10 -left-10 w-96 h-96 rounded-full blur-[100px] transition-all duration-700"
            style={{ background: c.blob1 }}
          />
          <div
            className="absolute top-16 right-0 w-72 h-72 rounded-full blur-[90px] transition-all duration-700"
            style={{ background: c.blob2 }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 rounded-full blur-[110px] transition-all duration-700"
            style={{ background: c.blob1 }}
          />
        </div>

        {/* ── NAVBAR ── */}
        <nav className="relative z-10 flex items-center justify-center px-8 md:px-12 py-5">
          <div className="flex items-center gap-6">
            {['About', 'Services', 'Reviews', 'Contact'].map((l) => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                className="text-white/60 hover:text-white text-sm font-semibold transition-colors">
                {l}
              </button>
            ))}
          </div>
        </nav>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center px-6 pt-3">

          {/* Headline — FIXED, never changes */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight text-center mb-3"
            style={{ textShadow: `0 0 60px ${c.accent}55` }}
          >
            BUILD YOUR<br />
            <span style={{ color: c.accent }}>DREAM YARD</span>
          </h1>

          {/* Fixed description */}
          <p className="text-white/50 text-sm md:text-base text-center max-w-md mb-3 leading-relaxed">
            Premium fencing, custom decks &amp; outdoor living spaces — crafted to last a lifetime.
          </p>

          {/* Stats — FIXED */}
          <div className="flex justify-end w-full max-w-2xl px-4 mb-3">
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">500+ Projects</p>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-x-8 bottom-0 h-24 blur-3xl rounded-full transition-all duration-700"
              style={{ background: `${c.accent}60` }} />
            <img
              key={`img-${active}`}
              src={c.image}
              alt={c.title}
              width={320}
              height={240}
              fetchpriority={active === 0 ? 'high' : 'auto'}
              className="relative z-10 w-full h-48 md:h-60 object-cover rounded-2xl shadow-2xl shadow-black/60"
              style={{ filter: `drop-shadow(0 0 24px ${c.accent}80)` }}
            />
          </div>

          {/* ── ARC CAROUSEL ──────────────────────────────────────────────── */}
          {/*
           * Container: we place a div that is 60% of viewport height tall.
           * The circle center is below the container, so only the TOP arc
           * is visible — creating a rainbow/arc shape.
           * We use vw-based radius for responsiveness.
           */}
          <ArcCarousel
            cards={cards}
            active={active}
            accent={c.accent}
          />

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pb-5 mt-1 relative z-30">
            {cards.map((_, idx) => (
              <div
                key={idx}
                className="rounded-full transition-all duration-500"
                style={{
                  width:  active === idx ? '22px' : '6px',
                  height: '6px',
                  background: active === idx ? c.accent : 'rgba(255,255,255,0.22)',
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── ARC CAROUSEL COMPONENT ───────────────────────────────────────────── */
function ArcCarousel({ cards, active, accent }) {
  const TOTAL   = cards.length;
  const SPREAD  = 120;
  const CARD_W  = 84;
  const CARD_H  = 106;

  // Arc expressed as a fraction of container width via CSS custom property.
  // We use a fixed aspect container (padding-bottom trick) so height is
  // determined purely by CSS — no JS measurement needed → zero CLS.
  const angleOf = (idx) => {
    const offset  = idx - active;
    const wrapped = ((offset % TOTAL) + TOTAL) % TOTAL;
    const shifted = wrapped > TOTAL / 2 ? wrapped - TOTAL : wrapped;
    return 270 + (SPREAD / (TOTAL - 1)) * shifted;
  };

  return (
    // Container height = 32vw clamped, set via CSS only
    <div
      className="relative w-full"
      style={{ height: 'clamp(160px, 32vw, 285px)' }}
    >
      {cards.map((card, idx) => {
        const deg = angleOf(idx);
        const isActive = idx === active;
        const dist = Math.abs(
          ((idx - active + TOTAL) % TOTAL > TOTAL / 2
            ? (idx - active + TOTAL) % TOTAL - TOTAL
            : (idx - active + TOTAL) % TOTAL)
        );
        const scale   = isActive ? 1.25 : dist === 1 ? 0.90 : 0.72;
        const opacity = isActive ? 1.0  : dist === 1 ? 0.72 : 0.42;

        // Position using CSS transform from the arc center (bottom-center of container).
        // radius = 52vw clamped — all CSS, no JS.
        // translateX/Y move along the arc, then we shift back by half card size.
        const rad  = (deg * Math.PI) / 180;
        // Use a fixed reference radius in px that matches the CSS clamp midpoint
        const r    = 310; // px — matches ~52vw at ~600px wide
        const tx   = r * Math.cos(rad) - CARD_W / 2;
        const ty   = r * Math.sin(rad) - CARD_H / 2;

        return (
          <div
            key={card.id}
            className="absolute"
            style={{
              // Anchor at bottom-center of container, then offset along arc
              bottom: 0,
              left: '50%',
              width:  `${CARD_W}px`,
              height: `${CARD_H}px`,
              transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
              transformOrigin: 'center center',
              opacity,
              zIndex:  isActive ? 20 : 10 - dist,
              transition: 'transform 0.65s cubic-bezier(0.34,1.4,0.64,1), opacity 0.65s ease',
              willChange: 'transform, opacity',
            }}
          >
            <div
              className="w-full h-full rounded-2xl overflow-hidden shadow-xl"
              style={{
                outline:   isActive ? `2.5px solid ${accent}` : 'none',
                boxShadow: isActive ? `0 6px 30px ${accent}80` : undefined,
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  width={CARD_W}
                  height={CARD_H}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
