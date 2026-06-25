import Logo from './Logo';
import { footer } from '@/lib/content';

export default function Footer() {
  return (
    <footer id="contact" className="bg-cream pt-16">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-9 pb-[50px]">
          <div className="col-span-2 lg:col-span-1"><Logo stacked /></div>
          {footer.cols.map((c) => (
            <div key={c.h}>
              <h5 className="text-gold text-[.69rem] tracking-[.18em] uppercase mb-[18px] font-semibold">{c.h}</h5>
              {c.links.map((l) => (
                <a key={l} href="#" className="block text-[.82rem] text-muted font-light py-[5px] hover:text-gold transition-colors">{l}</a>
              ))}
            </div>
          ))}
          <div>
            <h5 className="text-gold text-[.69rem] tracking-[.18em] uppercase mb-[18px] font-semibold">Contact</h5>
            <p className="text-[.82rem] text-muted font-light leading-[1.9]">
              {footer.contact.map((line) => <span key={line} className="block">{line}</span>)}
            </p>
          </div>
        </div>
        <div className="border-t border-gold/15 py-[22px] flex flex-col sm:flex-row justify-between gap-2.5 text-[.72rem] text-muted">
          <span>© 2026 Imperial Partners Club. All Rights Reserved.</span>
          <span><a href="#" className="ml-0 sm:ml-5">Privacy Policy</a><a href="#" className="ml-5">Terms of Use</a></span>
        </div>
      </div>
    </footer>
  );
}
