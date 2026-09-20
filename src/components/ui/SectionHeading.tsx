import React from 'react';

interface SectionHeadingProps {
  /** Small uppercase eyebrow above the title, e.g. "Why Ogha" */
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  /** Dark sections use white title text; light sections use navy */
  tone?: 'dark' | 'light';
  /** Extra classes on the wrapper */
  className?: string;
}

/**
 * Single source of truth for section headlines: identical eyebrow, title and
 * subtitle styles plus a guaranteed minimum gap to the content below, so no
 * headline ever sits too close to (or touches) the next block.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-[#1B365D]';

  return (
    <div
      className={`space-y-3 mb-12 md:mb-14 ${isCenter ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}
    >
      <span className="block text-xs font-bold uppercase tracking-widest text-[#FFB200]">
        {eyebrow}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-black leading-tight ${titleColor} text-balance`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-sm leading-relaxed ${tone === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
