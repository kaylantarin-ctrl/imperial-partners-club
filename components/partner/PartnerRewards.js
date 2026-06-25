import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { rewards } from '@/lib/partnerContent';

export default function PartnerRewards() {
  return (
    <section className="section bg-ink text-white">
      <div className="wrap">
        <div className="text-center mb-[54px]">
          <h2 className="section-title !text-gold-soft">Partner Rewards</h2>
          <div className="flourish"><i /></div>
        </div>
        <p className="text-center text-white/70 font-light max-w-[660px] mx-auto -mt-8 mb-14 leading-relaxed">
          When you refer a client who completes with Imperial, you are rewarded — meaningfully. Reward terms are clear,
          competitive, and shared privately with approved partners.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
          {rewards.map((r) => (
            <div key={r.title} className="bg-ink p-9 text-center flex flex-col items-center">
              <Icon name={r.icon} size={28} className="text-gold-soft mb-4" />
              <h3 className="text-gold-soft text-[1rem] uppercase tracking-[.06em] mb-3">{r.title}</h3>
              <p className="text-[.85rem] text-white/65 font-light leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="#apply" arrow>Apply for an Invitation</Button>
        </div>
      </div>
    </section>
  );
}
