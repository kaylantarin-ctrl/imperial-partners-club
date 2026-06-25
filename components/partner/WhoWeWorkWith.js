import SectionHead from '@/components/SectionHead';
import { whoWeWorkWith } from '@/lib/partnerContent';

export default function WhoWeWorkWith() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead title="Who We Work With" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[980px] mx-auto">
          {whoWeWorkWith.map((w) => (
            <div key={w} className="flex items-center gap-3 bg-white border border-gold/15 px-5 py-4">
              <span className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />
              <span className="font-display text-[.86rem] uppercase tracking-[.05em] text-body">{w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
