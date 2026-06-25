import Button from '@/components/Button';
import { commissions } from '@/lib/partnerContent';

export default function Commissions() {
  return (
    <section className="section bg-ink text-white">
      <div className="wrap">
        <div className="text-center mb-[54px]">
          <h2 className="section-title !text-gold-soft">Commission Overview</h2>
          <div className="flourish"><i /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 border border-gold/20">
          {commissions.map((c) => (
            <div key={c.label} className="bg-ink p-8 text-center flex flex-col items-center">
              <p className="text-[.72rem] tracking-[.16em] uppercase text-white/55 mb-4">{c.label}</p>
              <p className="font-display text-gold-soft text-[1.7rem] leading-tight">{c.value}</p>
              <p className="text-[.8rem] text-white/60 font-light mt-2">{c.sub}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="#apply" arrow>Apply To Become A Partner</Button>
        </div>
      </div>
    </section>
  );
}
