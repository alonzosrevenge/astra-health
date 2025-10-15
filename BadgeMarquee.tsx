'use client';

import React from 'react';

const MARQUEE_ITEMS = [
  'Private evaluations underway',
  'Traceable evidence graphs',
  'Safety-first, audit-friendly interfaces',
];

export default function BadgeMarquee() {
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-graphite/30 py-3">
      <div className="flex whitespace-nowrap marquee">
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center px-8 text-sm text-[#E6E7E8]/60"
          >
            <span className="mr-3 text-mint/40">•</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
