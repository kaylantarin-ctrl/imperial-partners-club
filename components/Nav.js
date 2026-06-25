'use client';
import { useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '@/lib/content';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[60] bg-cream/90 backdrop-blur border-b border-gold/15">
      <div className="wrap flex items-center gap-6 h-[90px]">
        <a href="#top" className="shrink-0"><Logo /></a>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-9 xl:gap-[3.4rem]">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}
               className="text-[.76rem] tracking-[.15em] uppercase font-medium text-body hover:text-gold transition-colors whitespace-nowrap">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0 ml-auto lg:ml-0">
          <span className="hidden sm:block">
            <Button href="/apply" arrow className="!py-[14px] !px-[26px]">Apply as Founding Partner</Button>
          </span>
          <button aria-label="Menu" className="lg:hidden flex flex-col gap-[5px] p-1.5" onClick={() => setOpen(!open)}>
            <span className="w-6 h-0.5 bg-body" /><span className="w-6 h-0.5 bg-body" /><span className="w-6 h-0.5 bg-body" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden flex flex-col bg-cream border-t border-gold/15 px-8 pb-6">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
               className="py-3 text-[.78rem] tracking-[.12em] uppercase border-b border-gold/15 text-body">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
