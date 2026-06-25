import SectionHead from '@/components/SectionHead';
import Icon from '@/components/Icon';
import { whyJoin } from '@/lib/partnerContent';

export default function WhyJoin() {
  return (
    <section className="section bg-white border-y border-gold/15">
      <div className="wrap">
        <SectionHead title="Why Join Imperial Partners Club" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
          {whyJoin.map((b) => (
            <div key={b.title}>
              <Icon name={b.icon} size={28} className="text-gold mb-5" />
              <h3 className="text-gold text-[.92rem] uppercase tracking-[.07em] mb-3">{b.title}</h3>
              <p className="text-[.86rem] leading-relaxed text-muted font-light">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
