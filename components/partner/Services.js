import SectionHead from '@/components/SectionHead';
import { services } from '@/lib/partnerContent';

export default function Services() {
  return (
    <section className="section bg-cream-alt">
      <div className="wrap">
        <SectionHead title="Services Available" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-white border border-gold/15 p-8 flex flex-col">
              <h3 className="font-display text-gold text-[1.1rem] uppercase tracking-[.06em] pb-5 mb-5 border-b border-gold/15">{s.name}</h3>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[.9rem] text-body font-light">
                    <span className="text-gold mt-[2px]">✓</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
