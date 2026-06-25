import Button from './Button';
import { reports } from '@/lib/content';

export default function Intelligence() {
  return (
    <section id="intelligence" className="section">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[.85fr_1.6fr] gap-9 lg:gap-[50px] items-center">
        <div>
          <h2 className="text-[1.85rem] uppercase tracking-[.05em] mb-2">Imperial Intelligence</h2>
          <p className="font-display text-gold text-[.92rem] tracking-[.04em]">Exclusive Research. Actionable Insights. Global Perspective.</p>
          <p className="text-muted font-light text-[.9rem] my-4 mb-[26px]">Stay ahead with proprietary reports and market intelligence curated for trusted advisors.</p>
          <Button href="#" arrow>Explore Intelligence Library</Button>
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-start">
            {reports.map((r) => (
              <div key={r.title} className="cursor-pointer group">
                <div className="h-[130px] bg-ink bg-cover bg-center mb-3 transition group-hover:brightness-110" style={{ backgroundImage: `url(${r.img})` }} />
                <h4 className="font-display text-gold text-[.77rem] uppercase tracking-[.05em] leading-tight">{r.title}</h4>
                <span className="text-[.62rem] tracking-[.18em] text-muted uppercase block mt-1.5">{r.period}</span>
              </div>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[.67rem] tracking-[.18em] uppercase text-gold font-semibold mt-[22px]">View All Reports →</a>
        </div>
      </div>
    </section>
  );
}
