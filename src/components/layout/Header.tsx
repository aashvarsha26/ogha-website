'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const pathname = usePathname();

  const activeClass = (path: string) =>
    pathname === path
      ? 'text-[#FFB200] font-bold border-b-2 border-[#FFB200] pb-1'
      : 'text-white hover:text-[#FFB200] transition-colors pb-1';

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Main Navbar — color matched to the official logo navy (PRD 2) */}
      <div className="bg-[#003C7B] text-white py-4 px-4 border-b-2 border-[#FFB200]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo using uploaded PNG */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-36 sm:w-44">
              <Image
                src="/ogha-logo.png"
                alt="Ogha Power Solutions Logo"
                fill
                sizes="176px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <Link href="/" className={activeClass('/')}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link href="/products" className={`flex items-center space-x-1 ${activeClass('/products')}`}>
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-[#FFB200]" />
              </Link>
              {productsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-[#0D1D35] border border-[#FFB200]/30 rounded-xl shadow-2xl p-2 z-50 text-xs">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products/${cat.slug}`}
                      className="block px-3 py-2 text-white hover:bg-[#152B4D] hover:text-[#FFB200] rounded-lg"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link href="/about" className={`flex items-center space-x-1 ${activeClass('/about')}`}>
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-[#FFB200]" />
              </Link>
              {aboutDropdown && (
                <div className="absolute top-full left-0 w-48 bg-[#0D1D35] border border-[#FFB200]/30 rounded-xl shadow-2xl p-2 z-50 text-xs">
                  <Link
                    href="/about/story"
                    className="block px-3 py-2 text-white hover:bg-[#152B4D] hover:text-[#FFB200] rounded-lg"
                  >
                    Our Journey
                  </Link>
                  <Link
                    href="/about/vision"
                    className="block px-3 py-2 text-white hover:bg-[#152B4D] hover:text-[#FFB200] rounded-lg"
                  >
                    Our Vision &amp; Mission
                  </Link>
                  <Link
                    href="/about/why-ogha"
                    className="block px-3 py-2 text-white hover:bg-[#152B4D] hover:text-[#FFB200] rounded-lg"
                  >
                    Why Ogha
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-3 py-2 text-white hover:bg-[#152B4D] hover:text-[#FFB200] rounded-lg"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link href="/dealer" className={activeClass('/dealer')}>
              Become A Dealer
            </Link>

            <Link href="/contact" className={activeClass('/contact')}>
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FFB200]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1D35] border-t border-white/10 px-4 py-4 space-y-3 text-sm">
          <Link href="/" className="block text-white py-1" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="block text-white py-1" onClick={() => setMobileMenuOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="block text-white py-1" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/blog" className="block text-white py-1" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/dealer" className="block text-white py-1" onClick={() => setMobileMenuOpen(false)}>
            Become A Dealer
          </Link>
          <Link href="/contact" className="block text-white py-1" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};
