import SectionHead from './SectionHead';
import Button from './Button';
import Icon from './Icon';
import { membership } from '@/lib/content';

export default function Membership() {
  return (
    <section id="membership" className="section">
      <div className="wrap">
        <SectionHead title="Membership by Invitation" />
        <p className="text-center text-muted font-light max-w-[680px] mx-auto -mt-8 mb-14 leading-relaxed">
          {membership.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membership.pillars.map((p) => (
            <div key={p.title} className="bg-white border border-gold/15 p-9 text-center flex flex-col items-center">
              <Icon name={p.icon} size={30} className="text-gold mb-5" />
              <h3 className="text-gold text-[1.05rem] uppercase tracking-[.07em] mb-3">{p.title}</h3>
              <p className="text-[.88rem] text-muted font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/apply" arrow>Request an Invitation</Button>
        </div>
      </div>
    </section>
  );
}
