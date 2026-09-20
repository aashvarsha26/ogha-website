/**
 * Resources articles data — in a plain server-importable module so both the
 * client resources pages and server-side generateMetadata can read it.
 */
export interface ResourceArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export const RESOURCES_ARTICLES: ResourceArticle[] = [
  {
    slug: 'how-to-choose-ro-panel-capacity',
    title: 'How to Choose the Right RO Control Panel Capacity (LPH Sizing Guide)',
    category: 'Guide',
    date: 'September 2026',
    excerpt:
      'A step-by-step sizing guide for RO plant integrators comparing 500 LPH, 1000 LPH, 2000 LPH, and 6000 LPH control logic and pump contactor requirements.',
    readTime: '5 min read',
  },
  {
    slug: 'coin-vs-card-vs-upi-water-atm',
    title: 'Coin vs RFID Card vs UPI QR Water ATMs — ROI & Operator Comparison',
    category: 'Business Comparison',
    date: 'August 2026',
    excerpt:
      'Evaluate cash vs digital payment modes for commercial water vending stations. Learn why dynamic UPI QR modules increase daily operator revenue by 40%.',
    readTime: '7 min read',
  },
  {
    slug: 'understanding-ogha-sky-ampv-logic',
    title: 'Understanding OGHA SKY Series AMPV (Auto Multi-Port Valve) Automation',
    category: 'Technical Explainer',
    date: 'July 2026',
    excerpt:
      'Technical breakdown of auto-backwash cycles, TDS display sensors, and dry-run pump protections built into the OGHA SKY fully automatic series.',
    readTime: '6 min read',
  },
];
