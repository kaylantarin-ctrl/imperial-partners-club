import SectionHead from '@/components/SectionHead';
import { whyImperial } from '@/lib/partnerContent';

export default function WhyImperial() {
  return (
    <section className="section bg-white border-y border-gold/15">
      <div className="wrap">
        <SectionHead title="Why Imperial" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-[940px] mx-auto">
          {whyImperial.map((w) => (
            <div key={w} className="flex items-center gap-4 py-3 border-b border-gold/10">
              <span className="text-gold text-lg">✓</span>
              <span className="font-display text-[.95rem] uppercase tracking-[.05em] text-body">{w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
