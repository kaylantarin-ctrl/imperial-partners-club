'use client';
import { useState } from 'react';
import SectionHead from '@/components/SectionHead';
import { faqs } from '@/lib/partnerContent';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section bg-white border-y border-gold/15">
      <div className="wrap max-w-[820px]">
        <SectionHead title="Frequently Asked Questions" />
        <div className="border-t border-gold/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-gold/15">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-gold text-[.95rem] uppercase tracking-[.04em]">{f.q}</span>
                  <span className="text-gold text-xl leading-none shrink-0">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="text-body font-light text-[.92rem] leading-relaxed pb-6 -mt-1 max-w-[680px]">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
