'use client';

// Stack-spread scroll animation for the Ogha homepage hero.
// Mechanism adapted from the Hyperiux Vault "stack-spread" component:
// a clustered card stack that fans out as you scroll. All five cards keep
// cycling — each through its own disjoint set of product photos dealt from
// the full 29-SKU catalog, so no two cards ever show the same image and no
// image repeats within a card until its pool has been fully shown. Cards
// also float gently forever.

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { PRODUCTS } from '@/data/products';

// The five featured SKUs — the hero product lineup (one per card).
const FEATURED_SLUGS = [
  'ogha-combo-coin-card',
  'ogha-sky-3-3-6000-lph',
  'ogha-jal-1-1-2000-lph',
  'ogha-upi-add-on-device',
  'ogha-sky-1-1-2000-lph',
];

const CARD_COUNT = FEATURED_SLUGS.length; // 5

interface StackSpreadItem {
  src: string;
  alt?: string;
}

const toItem = (p: { image: string; name: string }): StackSpreadItem => ({
  src: p.image,
  alt: p.name,
});

// Every SKU in the catalog, in data order.
const ALL_ITEMS: StackSpreadItem[] = PRODUCTS.map(toItem);

// Each card's featured (opening) image.
const FEATURED_ITEMS: StackSpreadItem[] = FEATURED_SLUGS.map(
  (slug) => PRODUCTS.find((p) => p.slug === slug) ?? PRODUCTS[0]
).map(toItem);

const CYCLE_MS = 2600;

// ---------------------------------------------------------------------------
// Layout of the five cards. Coordinates are vw/vh offsets from centre.
// Desktop spread: text sits centred (fading in as the stack disperses); the
// four corner cards frame it and the featured card sits BELOW the text block.
// Positions are computed so no card rectangle ever intersects the centred
// text block (~33vh tall).
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Mechanism
// ---------------------------------------------------------------------------

const SCATTER_START = 0.12;

const CARDS: StackSpreadCard[] = [
  {
    item: FEATURED_ITEMS[1],
    stackOffset: { x: -8, y: 2 },
    target: { x: -27, y: -30, rotate: 0, scale: 0.78, w: 19, h: 22 },
    targetSm: { x: -22, y: -16 },
    z: 2,
  },
  {
    item: FEATURED_ITEMS[4],
    stackOffset: { x: 6, y: 6 },
    target: { x: 27, y: -30, rotate: 0, scale: 0.78, w: 19, h: 22 },
    targetSm: { x: 22, y: -16 },
    z: 2,
  },
  // centre card — front of the cluster, featured slot below the headline
  {
    item: FEATURED_ITEMS[0],
    stackOffset: { x: 1, y: 10 },
    target: { x: 0, y: 35, rotate: 0, scale: 0.95, w: 22, h: 24 },
    targetSm: { x: 0, y: 6 },
    z: 5,
  },
  {
    item: FEATURED_ITEMS[2],
    stackOffset: { x: -6, y: 16 },
    target: { x: -27, y: 30, rotate: 0, scale: 0.78, w: 19, h: 22 },
    targetSm: { x: -22, y: 28 },
    z: 3,
  },
  {
    item: FEATURED_ITEMS[3],
    stackOffset: { x: 4, y: 20 },
    target: { x: 27, y: 30, rotate: 0, scale: 0.78, w: 19, h: 22 },
    targetSm: { x: 22, y: 28 },
    z: 3,
  },
];

// ---------------------------------------------------------------------------
// Per-card image pools: every card opens on the product assigned to it above
// (the centre card opens on the COMBO bestseller), then cycles through its
// own disjoint slice of the catalog — the 29 SKUs are split across the 5
// pools, so no image is ever shown on two cards at once and no card repeats
// an image until its whole pool has been shown.
// ---------------------------------------------------------------------------
const FEATURED_SRCS = new Set(CARDS.map((c) => c.item.src));
const CARD_POOLS: StackSpreadItem[][] = CARDS.map((card) => [card.item]);
{
  let next = 0;
  for (const item of ALL_ITEMS) {
    if (FEATURED_SRCS.has(item.src)) continue;
    CARD_POOLS[next % CARD_COUNT].push(item);
    next += 1;
  }
}

const SCATTER_END = 0.9;

const PARALLAX_X = 2.2;
const PARALLAX_Y = 1.8;
const PARALLAX_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };
const parallaxDepth = (i: number, total: number) =>
  total <= 1 ? 1 : 0.55 + (i / (total - 1)) * 0.75;

const HEADLINE_TOP = 'Industrial water tech,';
const HEADLINE_ACCENT = 'engineered to flow.';
const SUB =
  'RO control panels and water ATMs built in Hyderabad — 29 factory-certified SKUs, ready to ship.';

const RESPONSIVE = {
  desktop: {
    small: false,
    colX: null as number | null,
    card: null as { w: number; h: number } | null,
  },
  small: {
    small: true,
    colX: 22,
    card: { w: 42, h: 24 },
  },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    // Touch vs. mouse, not raw width: only real touch devices drop to the
    // stacked column layout; narrow mouse-driven frames keep the scatter.
    const mq = window.matchMedia('(pointer: coarse)');
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener('change', read);
    return () => mq.removeEventListener('change', read);
  }, []);
  return r;
}

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) return;

    if (!active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const onMove = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1);
      rawY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [active, enabled, rawX, rawY]);

  return { x, y };
}

export interface StackSpreadTarget {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  w: number;
  h: number;
}

export interface StackSpreadCard {
  item: StackSpreadItem;
  target: StackSpreadTarget;
  /** final x/y (vw/vh) for touch devices; falls back to `target` */
  targetSm?: { x: number; y: number };
  /** angle while clustered */
  stackRotate?: number;
  /** offset while clustered (vw/vh) */
  stackOffset?: { x: number; y: number };
  /** paint order, higher on top */
  z?: number;
}

function Card({
  card,
  cardIndex,
  progress,
  reduce,
  clusterRotation,
  isSmall,
  colX,
  fixedCard,
  stackScale,
  cardRadius,
  pointer,
  depth,
  pool,
}: {
  card: StackSpreadCard;
  cardIndex: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
  clusterRotation: boolean;
  isSmall: boolean;
  colX: number | null;
  fixedCard: { w: number; h: number } | null;
  /** scale of the cards while clustered, before the scatter */
  stackScale: number;
  /** corner radius on each card, in px (desktop) */
  cardRadius: number;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  depth: number;
  /** this card's own disjoint pool of product photos it cycles through */
  pool: StackSpreadItem[];
}) {
  const { item, target } = card;

  // Independent perpetual cycling: each card advances through its own pool
  // on its own timer. The first tick is phase-shifted per card so the five
  // cards change image in a cascade instead of all at once.
  const [poolIndex, setPoolIndex] = useState(0);
  useEffect(() => {
    if (isSmall || reduce === true || pool.length < 2) return;
    const delay =
      poolIndex === 0 ? CYCLE_MS + cardIndex * (CYCLE_MS / CARD_COUNT) : CYCLE_MS;
    const t = setTimeout(
      () => setPoolIndex((i) => (i + 1) % pool.length),
      delay
    );
    return () => clearTimeout(t);
  }, [pool, isSmall, reduce, poolIndex, cardIndex]);

  const shown: StackSpreadItem =
    !isSmall && pool.length > 0 ? pool[poolIndex % pool.length] : item;

  const flat = reduce === true;
  const stackRotate = flat ? 0 : clusterRotation ? card.stackRotate ?? 0 : 0;
  const stackOffset = card.stackOffset ?? { x: 0, y: 0 };
  const restScale = target.scale ?? 1;

  // final resting spot: column grid on small screens, scatter on desktop
  const sm = isSmall && card.targetSm ? card.targetSm : null;
  const endX = sm ? (colX != null ? Math.sign(sm.x) * colX : sm.x) : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate;

  // -50% keeps card centred on its anchor
  const translate = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, px, py]: number[]) => {
      const tx = stackOffset.x + (endX - stackOffset.x) * p;
      const ty = stackOffset.y + (endY - stackOffset.y) * p;
      const drift = depth * p;
      const dx = tx - px * PARALLAX_X * drift;
      const dy = ty - py * PARALLAX_Y * drift;
      return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
    }
  );
  const rotate = useTransform(progress, [0, 1], [stackRotate, endRotate]);
  const scale = useTransform(progress, [0, 1], [stackScale, restScale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform"
      style={{
        width: `${fixedCard ? fixedCard.w : target.w}vw`,
        height: `${fixedCard ? fixedCard.h : target.h}vh`,
        zIndex: card.z ?? 1,
        translate,
        rotate,
        scale,
      }}
    >
      {/* gentle perpetual float, desynchronised per card */}
      <div
        className="hero-card-float h-full w-full"
        style={{ animationDelay: `${-cardIndex * 1.3}s` }}
      >
        <CardFace
          item={shown}
          cardRadius={cardRadius}
          fading={!isSmall && pool.length > 1}
        />
      </div>
    </motion.div>
  );
}

function CardFace({
  item,
  cardRadius,
  fading,
}: {
  item: StackSpreadItem;
  cardRadius: number;
  fading: boolean;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl border-2 border-[#FFB200]/70 bg-white shadow-xl shadow-black/30 max-md:rounded-[4vw]"
      style={{ borderRadius: `${cardRadius}px` }}
    >
      {/* inner white mat: every product photo fits whole, centred, never cropped */}
      <div className="absolute inset-[5%] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- motion transforms the wrapper; next/image adds no benefit here */}
        <img
          key={item.src}
          src={item.src}
          alt={item.alt ?? ''}
          draggable={false}
          className={`max-h-full max-w-full object-contain ${fading ? 'hero-img-fade' : ''}`}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/25" />
    </div>
  );
}

interface HeroStackSpreadProps {
  /** scatter scroll distance, in vh */
  scrollLength?: number;
  /** fan the clustered stack (default) or start flat */
  clusterRotation?: boolean;
  /** scale of the cards while clustered, before the scatter */
  stackScale?: number;
  /** corner radius on each card, in px (desktop only — mobile keeps its responsive radius) */
  cardRadius?: number;
  /** show the "scroll to spread" hint at the bottom until the scatter begins */
  showScrollHint?: boolean;
}

export default function HeroStackSpread({
  scrollLength = 300,
  clusterRotation = true,
  stackScale = 0.72,
  cardRadius = 10,
  showScrollHint = true,
}: HeroStackSpreadProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { small: isSmall, colX, card: fixedCard } = useResponsive();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  });

  // hold, scatter, then settle
  const progress = useTransform(
    scrollYProgress,
    [0, SCATTER_START, SCATTER_END, 1],
    [0, 0, 1, 1]
  );

  // pointer parallax only engages once the cards have spread out
  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, 'change', (p) => {
    setSpread((was) => (was ? p >= 0.985 : p >= 0.985));
  });
  const parallaxEnabled = reduce !== true && !isSmall;
  const pointer = usePointerParallax(spread, parallaxEnabled);

  const noScale = reduce === true;

  // Headline fades in as the cluster disperses, so the stack owns the screen
  // first and the text is never covered by cards.
  const copyOpacity = useTransform(progress, [0.25, 0.6], [0, 1]);
  const copyScale = useTransform(progress, [0.25, 0.9], [0.9, 1]);

  // scroll hint: visible while clustered, gone by the time the scatter starts
  const hintOpacity = useTransform(progress, [0, SCATTER_START], [1, 0]);

  return (
    <section
      ref={wrapRef}
      className="relative w-full border-b-4 border-[#FFB200]"
      style={{ height: `${scrollLength}vh` }}
      aria-label="Ogha product showcase"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0D1D35]">
        {/* Water background: deep gradient + ambient glows + layered waves */}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#0D1D35_0%,#152B4D_45%,#0A1626_100%)]" />
        <div className="hero-glow -top-[30%] left-[55%] w-[55%] h-[80%] bg-[#FFB200]/[0.10]" />
        <div className="hero-glow -bottom-[40%] -left-[15%] w-[60%] h-[90%] bg-[#3B82F6]/[0.14] [animation-delay:-7s]" />
        <svg
          className="hero-wave hero-wave-back"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C120,15 240,65 360,40 C480,15 600,65 720,40 C840,15 960,65 1080,40 C1200,15 1320,65 1440,40 L1440,90 L0,90 Z"
            fill="rgba(59,130,246,0.10)"
          />
        </svg>
        <svg
          className="hero-wave hero-wave-mid"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,45 C160,15 320,75 480,45 C640,15 800,75 960,45 C1120,15 1280,75 1440,45 L1440,90 L0,90 Z"
            fill="rgba(56,189,248,0.10)"
          />
        </svg>
        <svg
          className="hero-wave hero-wave-front"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,55 C120,85 240,25 360,55 C480,85 600,25 720,55 C840,85 960,25 1080,55 C1200,85 1320,25 1440,55 L1440,90 L0,90 Z"
            fill="rgba(255,178,0,0.07)"
          />
          <path
            d="M0,55 C120,85 240,25 360,55 C480,85 600,25 720,55 C840,85 960,25 1080,55 C1200,85 1320,25 1440,55"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="2"
          />
          <path
            d="M0,62 C160,30 320,90 480,62 C640,34 800,90 960,62 C1120,34 1280,90 1440,62 L1440,90 L0,90 Z"
            fill="rgba(13,29,53,0.55)"
          />
        </svg>

        {/* scattering product cards */}
        <div className="absolute inset-0 z-10">
          {CARDS.map((card, i) => (
            <Card
              key={i}
              card={card}
              cardIndex={i}
              progress={progress}
              reduce={reduce}
              clusterRotation={clusterRotation}
              isSmall={isSmall}
              colX={colX}
              fixedCard={fixedCard}
              stackScale={stackScale}
              cardRadius={cardRadius}
              pointer={pointer}
              depth={parallaxEnabled ? parallaxDepth(i, CARDS.length) : 0}
              pool={CARD_POOLS[i] ?? []}
            />
          ))}
        </div>

        {/* headline — fades in above the cards as the stack disperses */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center max-md:px-8"
          style={{
            opacity: copyOpacity,
            scale: noScale ? 1 : copyScale,
          }}
        >
          {/* readability vignette on touch layouts, where cards sit behind the text */}
          {isSmall && (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,29,53,0.92)_0%,rgba(13,29,53,0.6)_45%,transparent_72%)]"
            />
          )}
          <span className="relative text-xs font-bold uppercase tracking-[0.3em] text-[#FFB200] mb-4 max-md:text-[3vw]">
            Ogha Power Solutions
          </span>
          <h2 className="relative w-full max-w-3xl whitespace-pre-line text-[3.4vw] font-black leading-[1.12]! tracking-tight text-white max-md:text-[8.5vw]">
            {HEADLINE_TOP}
            {'\n'}
            <span className="text-[#FFB200]">{HEADLINE_ACCENT}</span>
          </h2>
          <p className="relative mt-[1.2vw] w-full max-w-[52ch] text-[1vw] leading-relaxed tracking-tight text-gray-300 max-md:mt-3 max-md:text-[3.2vw]">
            {SUB}
          </p>
        </motion.div>

        {/* scroll hint */}
        {showScrollHint && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[3vh] z-20 flex flex-col items-center gap-[0.6vh] text-[0.8vw] font-medium uppercase tracking-[0.2em] text-gray-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] max-md:bottom-6 max-md:gap-1 max-md:text-[2.8vw]"
            style={{ opacity: hintOpacity }}
          >
            <span>Scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce max-md:h-[4vw] max-md:w-[4vw]"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
}
