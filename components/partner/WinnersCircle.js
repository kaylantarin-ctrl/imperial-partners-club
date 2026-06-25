import Icon from '@/components/Icon';
import { winners } from '@/lib/partnerContent';

function Award() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="9" r="5" /><path d="M9 13l-2 8 5-3 5 3-2-8" />
    </svg>
  );
}

export default function WinnersCircle() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="bg-cream-alt border border-gold/20 px-7 py-14 md:px-16 text-center">
          <p className="text-gold text-[.72rem] tracking-[.34em] uppercase mb-4">Imperial Winners Circle</p>
          <h2 className="text-gold text-[clamp(1.6rem,3vw,2.2rem)] uppercase tracking-[.04em]">Rewarding Top Performers</h2>
          <p className="text-muted font-light mt-4 max-w-[560px] mx-auto">The first qualifying partners each quarter unlock:</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-[860px] mx-auto">
            {winners.map((w) => (
              <div key={w} className="flex flex-col items-center">
                <span className="text-gold mb-4"><Award /></span>
                <span className="font-display text-[.86rem] uppercase tracking-[.05em] text-body leading-snug">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
