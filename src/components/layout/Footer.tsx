'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const socialIconProps = {
  className: 'w-4 h-4',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

const InstagramIcon = () => (
  <svg {...socialIconProps}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg {...socialIconProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg {...socialIconProps}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg {...socialIconProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B365D] text-white pt-12 pb-28 sm:pb-12 px-4 border-t-2 border-[#FFB200]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        {/* Col 1: Ogha Logo, Story & Socials */}
        <div className="space-y-4">
          <div className="relative h-12 w-40">
            <Image
              src="/ogha-logo.png"
              alt="Ogha Power Solutions"
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </div>

          <p className="text-gray-300 leading-relaxed text-xs">
            Industrial RO control panels and water vending machines — engineered in Hyderabad
            since 2023 for OEMs and water plants across India.
          </p>

          {/* Social Links with redirects */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://www.instagram.com/oghapowersolutions.pvt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB200] flex items-center justify-center transition-colors text-[#FFB200] hover:text-[#1B365D]"
              title="Follow us on Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/people/Ogha-Power-Solutions-Pvt-Ltd/100089827943587/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB200] flex items-center justify-center transition-colors text-[#FFB200] hover:text-[#1B365D]"
              title="Follow us on Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://youtube.com/@oghapowersolutionsprivateltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB200] flex items-center justify-center transition-colors text-[#FFB200] hover:text-[#1B365D]"
              title="Subscribe on YouTube"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/ogha-power-solutions-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB200] flex items-center justify-center transition-colors text-[#FFB200] hover:text-[#1B365D]"
              title="Connect on LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Col 2: Our Products */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm">Our Products</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/products/ro-control-panels" className="hover:text-[#FFB200]">
                RO Control Panels
              </Link>
            </li>
            <li>
              <Link href="/products/water-vending-machines" className="hover:text-[#FFB200]">
                Water Vending Machines
              </Link>
            </li>
            <li>
              <Link href="/products/accessories" className="hover:text-[#FFB200]">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about" className="hover:text-[#FFB200]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about/why-ogha" className="hover:text-[#FFB200]">
                Why Ogha
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#FFB200]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/dealer" className="hover:text-[#FFB200]">
                Become A Dealer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFB200]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm">Contact Info</h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-[#FFB200] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Phone number</strong>
                <a href="tel:+919052797900" className="hover:text-[#FFB200]">
                  +91 9052 797 900
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Mail className="w-4 h-4 text-[#FFB200] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Email Address</strong>
                <a href="mailto:support@oghapowersolutions.com" className="hover:text-[#FFB200]">
                  support@oghapowersolutions.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#FFB200] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Office Address</strong>
                <span>
                  1-7-170/5, 1st, 2nd and 3rd Floors, Beside More Super market Kamala Nagar, ECIL, Hyderabad, Telangana 500062
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-8 pt-4 text-center text-[11px] text-gray-400">
        © {new Date().getFullYear()} Ogha Power Solutions Private Limited. All Rights Reserved.
      </div>
    </footer>
  );
};
