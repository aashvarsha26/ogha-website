import type { LucideIcon } from 'lucide-react';
import {
  Medal,
  CircleDollarSign,
  WandSparkles,
  Handshake,
  Gauge,
  Wrench,
  Zap,
  Truck,
  Leaf,
  ShieldCheck,
  Headset,
  BadgeCheck,
} from 'lucide-react';

export interface WhyOghaFeature {
  icon: LucideIcon;
  label: string;
  description: string;
}

/**
 * The 12 promises shown in the Why Ogha infographic — shared by the wheel
 * component and the explainer grid on the Why Ogha page.
 * (Plain module — no 'use client' — so server components can import it too.)
 */
export const WHY_OGHA_FEATURES: WhyOghaFeature[] = [
  {
    icon: ShieldCheck,
    label: '12 months warranty',
    description:
      'Every control panel and vending machine ships with a full one-year warranty covering parts and labour — backed by lifetime service support from our Hyderabad factory team.',
  },
  {
    icon: Medal,
    label: 'Premium Quality',
    description:
      'Industrial-grade components — sealed relays, automotive-grade PCBs and UV-stable enclosures — chosen to survive years of continuous duty, not just the showroom.',
  },
  {
    icon: WandSparkles,
    label: 'User Friendly Design',
    description:
      'Clear displays, labelled wiring and plug-and-play connectors mean plant operators can install, operate and troubleshoot without an engineer on call.',
  },
  {
    icon: Handshake,
    label: 'Trustworthy brand',
    description:
      'IndiaMART TrustSEAL-verified manufacturer with active GST and CIN registration — rated 4.8★ by real buyers across India since 2023.',
  },
  {
    icon: Gauge,
    label: 'Customized features',
    description:
      'Need non-standard logic, enclosures or capacity? We tailor control panels and vending controllers up to 10,000 LPH around your plant’s exact requirements.',
  },
  {
    icon: BadgeCheck,
    label: 'Reliable performance',
    description:
      'Every unit is burn-in tested on our own benches against voltage spikes, surges and continuous pump loads before it is allowed to leave the factory.',
  },
  {
    icon: Headset,
    label: '24/7 customer service',
    description:
      'Phone and WhatsApp support from the same engineers who built your panel — real answers the same day, not ticket queues.',
  },
  {
    icon: Leaf,
    label: 'Make in India',
    description:
      'Proudly designed, manufactured and supported entirely in Hyderabad, Telangana — supporting local industry and faster spares availability.',
  },
  {
    icon: Wrench,
    label: 'Easy installation',
    description:
      'Colour-coded terminals, mounting templates and plain-English manuals make fitment a same-day job for any trained technician.',
  },
  {
    icon: Truck,
    label: 'Faster delivery rate',
    description:
      'In-stock SKUs are dispatched the same day you order, with pan-India delivery in 3–5 working days.',
  },
  {
    icon: Zap,
    label: 'Power efficient',
    description:
      'Low-standby microcontrollers and efficient switch-mode power designs cut running costs and keep panels cool in continuous operation.',
  },
  {
    icon: CircleDollarSign,
    label: 'Low-cost maintenance',
    description:
      'Modular design — relays, sensors and displays are individually replaceable, so servicing costs rupees, not whole-unit replacements.',
  },
];
