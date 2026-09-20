'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrustStrip } from '@/components/ui/TrustStrip';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PRODUCTS } from '@/data/products';
import { Building2, ShieldCheck, Cpu, ArrowRight, Factory, Wrench, Truck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-shell text-[#1B365D]">
      {/* --- HERO: dark ambient with logo + stats --- */}
      <section className="relative bg-[#0D1D35] overflow-hidden border-b-4 border-[#FFB200]">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#0D1D35_0%,#152B4D_50%,#0A1626_100%)]" />
        <div className="hero-glow -top-[35%] left-[55%] w-[55%] h-[80%] bg-[#FFB200]/[0.10]" />
        <div className="hero-glow -bottom-[40%] -left-[15%] w-[60%] h-[90%] bg-[#3B82F6]/[0.14] [animation-delay:-7s]" />

        {/* Layered waves — same water treatment as the homepage hero */}
        <svg className="hero-wave hero-wave-back" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C120,15 240,65 360,40 C480,15 600,65 720,40 C840,15 960,65 1080,40 C1200,15 1320,65 1440,40 L1440,90 L0,90 Z" fill="rgba(59,130,246,0.10)" />
        </svg>
        <svg className="hero-wave hero-wave-mid" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,45 C160,15 320,75 480,45 C640,15 800,75 960,45 C1120,15 1280,75 1440,45 L1440,90 L0,90 Z" fill="rgba(56,189,248,0.10)" />
        </svg>
        <svg className="hero-wave hero-wave-front" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,55 C120,85 240,25 360,55 C480,85 600,25 720,55 C840,85 960,25 1080,55 C1200,85 1320,25 1440,55 L1440,90 L0,90 Z" fill="rgba(255,178,0,0.07)" />
          <path d="M0,55 C120,85 240,25 360,55 C480,85 600,25 720,55 C840,85 960,25 1080,55 C1200,85 1320,25 1440,55" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
          <path d="M0,62 C160,30 320,90 480,62 C640,34 800,90 960,62 C1120,34 1280,90 1440,62 L1440,90 L0,90 Z" fill="rgba(13,29,53,0.55)" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-[#FFB200] bg-[#FFB200]/10 px-4 py-1.5 rounded-full border border-[#FFB200]/30">
              About Ogha Power Solutions
            </span>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Engineering precision RO controls &amp; water ATMs since 2023
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Founded in Kamala Nagar, ECIL, Hyderabad by two electrical &amp; embedded-systems
              engineers — grown from a five-person R&amp;D bench into a 20+ member industrial
              manufacturer serving water OEMs across India.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <Link
                href="/about/story"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB200] hover:bg-[#E09D00] text-[#1B365D] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-colors"
              >
                Read the full story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 hover:border-[#FFB200] transition-colors"
              >
                Browse the catalog
                <ArrowRight className="w-4 h-4 text-[#FFB200]" />
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:col-span-5">
            <div className="panel-card rounded-2xl p-8 grid grid-cols-2 gap-6">
              {[
                { icon: Building2, value: '2023', label: 'Founded in Hyderabad' },
                { icon: Cpu, value: '20+', label: 'Engineers & staff' },
                { icon: ShieldCheck, value: '4.8★', label: 'IndiaMART rating' },
                { icon: Factory, value: `${PRODUCTS.length}`, label: 'SKUs in production' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="space-y-1.5">
                  <Icon className="w-5 h-5 text-[#1B365D]" />
                  <div className="text-2xl font-black text-[#1B365D]">{value}</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE: capability cards (renamed from "What we build" per PRD 2) --- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading
          eyebrow="Who we are"
          title="Our origin, our vision & why buyers choose Ogha"
          subtitle="Three pillars behind every panel and water ATM that leaves our Hyderabad factory."
          tone="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Building2,
              title: 'Our Origin & Milestones',
              desc: 'Engineered custom PCB logic boards for commercial RO OEMs struggling with power surge failures — and grew from there.',
              href: '/about/story',
              cta: 'Read Full Story',
            },
            {
              icon: Cpu,
              title: 'Vision & Mission',
              desc: 'In-house firmware, circuit schematics and dynamic UPI QR microcontrollers designed for extreme continuous reliability.',
              href: '/about/vision',
              cta: 'Explore Vision & Mission',
            },
            {
              icon: ShieldCheck,
              title: 'Why Choose Ogha',
              desc: 'IndiaMART 4.8★ with 15 verified reviews, TrustSEAL verification, active GST & CIN, and direct factory warranty support.',
              href: '/about/why-ogha',
              cta: 'View Credibility Facts',
            },
          ].map(({ icon: Icon, title, desc, href, cta }) => (
            <div key={href} className="panel-card rounded-2xl p-6 space-y-3 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-[#1B365D] text-[#FFB200] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed flex-1">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#1B365D] hover:text-[#FFB200] uppercase tracking-wide"
              >
                {cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOUNDERS (added per PRD 2) --- */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <SectionHeading
          eyebrow="Founders"
          title="The people behind Ogha"
          tone="light"
        />

        <div className="panel-card rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] max-w-xs mx-auto rounded-2xl overflow-hidden border-2 border-[#FFB200] shadow-lg">
              <Image
                src="/images/founders/bhairava-prasad.jpg"
                alt="Bhairava Prasad — Founder, Ogha Power Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-xl font-extrabold">Bhairava Prasad</h3>
            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#1B365D]/60">
              Founder &amp; Director
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bhairava Prasad holds a Bachelor of Engineering (Electrical and Electronics) from
              JNTU and a Master&apos;s degree from Azim Premji University. He has founded and
              continues to run multiple ventures in the infrastructure and electronics
              manufacturing space, bringing a strong entrepreneurial foundation to his work. At
              Kyro Metalix Private Limited, Bhairava leads strategic initiatives and marketing,
              shaping the company&apos;s growth trajectory and market presence. His blend of
              technical expertise and business leadership enables him to identify opportunities,
              build meaningful partnerships, and steer ventures through evolving industry
              landscapes with clarity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* --- FACTORY GALLERY --- */}
      <section className="bg-[#0D1D35] py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <SectionHeading
            eyebrow="Inside the catalog"
            title="Built, tested & dispatched from Hyderabad"
            tone="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Wrench className="w-6 h-6 text-[#FFB200] shrink-0" />
              <div className="space-y-2">
                <div className="text-sm font-extrabold text-white">In-house PCB &amp; firmware</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Boards are designed, populated and burn-in tested on our own benches — no
                  third-party assembly.
                </p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB200] font-bold">•</span>
                    <span>Own schematic design, firmware and enclosure engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB200] font-bold">•</span>
                    <span>Auto-voltage cutoff and surge protection engineered in-house</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB200] font-bold">•</span>
                    <span>Every board burn-in tested before it is fitted to a panel</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Truck className="w-6 h-6 text-[#FFB200] shrink-0" />
              <div className="space-y-2">
                <div className="text-sm font-extrabold text-white">Same-day dispatch</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  In-stock SKUs ship the day you order, with pan-India delivery in 3–5 working
                  days.
                </p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB200] font-bold">•</span>
                    <span>Factory-direct pricing with full GST invoice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB200] font-bold">•</span>
                    <span>12-month warranty with lifetime service support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB200] font-bold">•</span>
                    <span>Spares dispatched within 24 hours from Hyderabad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST STRIP --- */}
      <div className="py-20">
        <TrustStrip />
      </div>
    </div>
  );
}
