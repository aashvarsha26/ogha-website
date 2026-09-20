/**
 * ============================================================================
 *  BLOG POSTS — EDIT YOUR ARTICLE TEXT HERE (website manager's file)
 * ============================================================================
 *  HOW TO EDIT:
 *  • Each article lives inside one { ... } block in the list below.
 *  • Change ONLY the words between quotes: 'like this'.
 *  • Add a new paragraph: add a new line 'Your text here', inside
 *    paragraphs: [ ... ] — put a comma after every line except the last.
 *  • bullets: [ ... ] works the same way for bulleted lists.
 *  • To publish a new article: copy a whole { ... } block, paste it ABOVE
 *    the existing one, change its slug, title and text. (slug = the words
 *    after /blog/ in the address — use small letters and dashes only.)
 *  • Do not delete the punctuation: quotes ' ', commas ,, brackets [ ]
 *    and braces { } — they hold the structure together.
 * ============================================================================
 */

export interface BlogSection {
  /** Optional heading shown above this block of text */
  heading?: string;
  paragraphs: string[];
  /** Optional bulleted list shown after the paragraphs */
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  /** Short summary shown on the blog list page and in Google results */
  excerpt: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'manual-vs-semi-automatic-vs-fully-automatic-ro-panels',
    title:
      'Manual vs Semi-Automatic vs Fully Automatic RO Control Panels: Which One Does Your Plant Need?',
    category: 'Buying Guide',
    date: 'September 2026',
    readTime: '5 min read',
    excerpt:
      "If you run an RO plant - or you're an OEM specifying panels for one - the control panel is the single component that decides how much you spend on electricity, pump maintenance, and manual supervision over the next five years.",
    sections: [
      {
        paragraphs: [
          "If you run an RO plant - or you're an OEM specifying panels for one - the control panel is the single component that decides how much you spend on electricity, pump maintenance, and manual supervision over the next five years. Yet most buyers pick a panel the same way they'd pick a light switch: whatever's cheapest and in stock.",
          "That's a mistake. Here's how to actually choose.",
        ],
      },
      {
        heading: 'What an RO control panel does',
        paragraphs: [
          'At its core, every RO control panel protects your high-pressure pump and manages the water flow through the membrane housing. It monitors pressure, prevents dry-running (which burns out pumps in minutes), and - depending on the tier - automates the entire filling, flushing, and shutoff cycle.',
          'The three tiers differ in how much of that process is automated, and that automation is what separates a ₹3,500 panel from a ₹9,500 one.',
        ],
      },
      {
        heading: 'Manual panels: lowest cost, highest supervision',
        paragraphs: [
          'Manual panels give you basic on/off control and pump protection at the lowest price point. They make sense for small setups - home RO systems, tiny commercial units - where someone is on-site to start and stop the plant and keep an eye on tank levels.',
          'The trade-off is labor. Every fill cycle needs a human decision. For a plant running multiple shifts, that adds up in wages and in the risk of a missed dry-run.',
        ],
      },
      {
        heading: 'Semi-automatic panels: the workhorse tier',
        paragraphs: [
          'This is where most small-to-mid commercial RO plants in India actually sit. Our OGHA JAL 1:1 2000 LPH is a good example of the category: a heavy-duty relay-based panel with an LED 4-digit display, live TDS monitoring, and auto-ampere setting, rated up to 2000 LPH.',
          'Semi-automatic panels handle pump protection and give you real-time TDS and current readings, but tank-level control and cycle sequencing still need a set of float switches and occasional manual intervention. For plants with a supervisor on-site during operating hours, this is usually the sweet spot on cost versus capability.',
        ],
      },
      {
        heading: 'Fully automatic - the OGHA SKY series',
        paragraphs: [
          "Once a plant is running unattended, or the owner wants to stop losing pumps to dry-running at 2 AM, it's time for a fully automatic panel. Our OGHA SKY series runs the entire fill-flush-shutoff cycle on LCD-based logic with no manual triggering required - from the 1 kW SKY 1:1 2000 LPH for small plants up to the SKY 3:3 6000 LPH, built for multi-port valve industrial systems.",
          'Fully automatic panels cost more upfront, but for continuous-duty plants they pay for themselves in reduced pump replacement and reduced staffing needs within a year or two, which is the math most buyers skip.',
        ],
      },
      {
        heading: 'What to check before you buy - regardless of tier',
        paragraphs: [],
        bullets: [
          "Rated capacity (LPH) should comfortably exceed your plant's actual output, not just match it on paper.",
          'Enclosure build - look for MS powder-coated heavy-duty cabinets if the panel will sit in a humid plant room.',
          'Warranty and service reach - a panel is only as good as the support behind it when a relay fails at 11 PM.',
          'In-house design vs. outsourced assembly - panels where the PCB, firmware, and enclosure come from one manufacturer are easier to get warranty support and spares for than reassembled third-party boards.',
        ],
      },
      {
        heading: 'Built and warrantied out of Hyderabad',
        paragraphs: [
          "Every Ogha panel - manual through SKY-series - is designed and assembled in-house by our own engineering team in Hyderabad, ships with a full 12-month warranty, and leaves the factory the same day for in-stock SKUs. If you're not sure which tier fits your plant's LPH and duty cycle, our team will size it for you at no cost.",
        ],
      },
    ],
  },
];
