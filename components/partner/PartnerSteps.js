import SectionHead from '@/components/SectionHead';
import { partnerSteps } from '@/lib/partnerContent';

export default function PartnerSteps() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead title="How It Works" />
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-[1000px] mx-auto gap-8 md:gap-2">
          {partnerSteps.map((s, i) => (
            <div key={s.n} className="flex md:flex-col items-center md:text-center gap-4 md:gap-0 md:flex-1 relative">
              <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center font-display text-gold text-[.95rem] shrink-0 md:mb-4 bg-cream">{s.n}</div>
              <h4 className="text-gold text-[.9rem] uppercase tracking-[.06em]">{s.t}</h4>
              {i < partnerSteps.length - 1 && (
                <span className="hidden md:block absolute top-7 left-[calc(50%+34px)] right-[calc(-50%+34px)] h-px bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
