'use client';

import { useState } from 'react';
import Logo from './Logo';
import Button from './Button';

const navLinks = [
  ['About', '/about'],
  ['Ecosystem', '/ecosystem'],
  ['Benefits', '/benefits'],
  ['Intelligence', '/intelligence'],
  ['Privileges', '/privileges'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] bg-cream/90 backdrop-blur border-b border-gold/15">
      <div className="wrap flex items-center gap-6 h-[90px]">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-9 xl:gap-[3.4rem]">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[.76rem] tracking-[.15em] uppercase font-medium text-body hover:text-gold transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0 ml-auto lg:ml-0">
          <span className="hidden lg:block">
            <Button href="/apply" arrow className="!py-[14px] !px-[26px]">
              Apply As Founding Partner
            </Button>
          </span>

          <button
            aria-label="Menu"
            className="lg:hidden relative w-8 h-8"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`absolute left-1 top-2 w-6 h-0.5 bg-body transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`absolute left-1 top-4 w-6 h-0.5 bg-body transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-1 top-6 w-6 h-0.5 bg-body transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-cream border-t border-gold/15 transition-all duration-500 ease-in-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-5 flex flex-col">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-4 text-[.78rem] tracking-[.14em] uppercase border-b border-gold/15 text-body"
            >
              {label}
            </a>
          ))}

          <a
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-5 text-center bg-gold text-white px-6 py-4 text-[.75rem] tracking-[.16em] uppercase font-medium"
          >
            Apply As Founding Partner
          </a>
        </div>
      </div>
    </header>
  );
}