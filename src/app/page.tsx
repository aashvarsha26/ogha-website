'use client';

import React from 'react';
import Link from 'next/link';
import HeroStackSpread from '@/components/ui/HeroStackSpread';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  ArrowRight,
  Cpu,
  CreditCard,
  Wrench,
  ShieldCheck,
  Users,
  MapPin,
  Sparkles,
  Clock,
} from 'lucide-react';

const CATEGORY_CARDS = [
  {
    href: '/products/ro-control-panels',
    icon: Cpu,
    title: 'RO Control Panels',
    desc: 'Manual, semi-automatic and fully automatic SKY-series panels engineered to protect pumps and plant equipment across every capacity.',
  },
  {
    href: '/products/water-vending-machines',
    icon: CreditCard,
    title: 'Water Vending Machines',
    desc: 'Coin, card and UPI-enabled water ATMs that make clean drinking water accessible in rural and urban communities alike.',
  },
  {
    href: '/products/accessories',
    icon: Wrench,
    title: 'Accessories',
    desc: 'Genuine Ogha replacement parts — coin validators, turbine flow sensors, RFID smart cards and solenoid valves.',
  },
];

const WHY_POINTS = [
  {
    icon: ShieldCheck,
    title: '12-Month Warranty',
    desc: 'Every panel ships with a full one-year warranty and lifetime service support from our Hyderabad team.',
  },
  {
    icon: Cpu,
    title: 'In-House R&D',
    desc: 'PCBs, firmware and enclosures are designed and assembled by our own engineers — nothing is outsourced.',
  },
  {
    icon: Users,
    title: '20+ Engineer Team',
    desc: 'A dedicated team of 20+ professionals supporting water OEMs across India since 2023.',
  },
  {
    icon: Clock,
    title: 'Same-Day Dispatch',
    desc: 'In-stock SKUs leave the factory the same day, with pan-India delivery in 3–5 working days.',
  },
  {
    icon: Sparkles,
    title: 'Custom Builds',
    desc: 'Need something non-standard? We tailor panel specs, enclosures and logic up to 10,000 LPH.',
  },
  {
    icon: MapPin,
    title: 'Make in India',
    desc: 'Proudly designed, manufactured and supported entirely in Hyderabad, Telangana.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#1B365D] text-white">
      {/* --- HERO PRODUCT STACK-SPREAD (scroll animation) --- */}
      <HeroStackSpread />

      {/* --- WHY OGHA --- */}
      <section className="bg-[#F5F6F8] text-[#1B365D] py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Ogha"
            tone="light"
            title={
              <>
                Engineered in Hyderabad.
                <br />
                Trusted across India.
              </>
            }
            subtitle="Two engineers started Ogha in 2023 with a simple goal — industrial-grade water automation at factory-direct prices. Six reasons buyers stay with us:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {WHY_POINTS.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1B365D] text-[#FFB200] flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base">{point.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about/why-ogha"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1B365D] text-white font-black text-xs uppercase tracking-wider rounded-lg hover:bg-[#152B4D] transition-colors"
            >
              <span>Learn more about us</span>
              <ArrowRight className="w-4 h-4 text-[#FFB200]" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHAT WE BUILD (categories) --- */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <SectionHeading
          eyebrow="What We Build"
          title="Three product lines, one factory"
          subtitle="Everything ships from our Hyderabad plant with the same engineering discipline, warranty and factory-direct pricing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORY_CARDS.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-[#152B4D] rounded-2xl p-7 border border-white/10 hover:border-[#FFB200]/60 shadow-lg flex flex-col justify-between gap-6 transition-all hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1D35] text-[#FFB200] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white leading-snug">{cat.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{cat.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#FFB200] uppercase tracking-wider">
                Explore
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
