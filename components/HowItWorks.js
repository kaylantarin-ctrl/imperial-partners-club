import SectionHead from './SectionHead';
import Icon from './Icon';
import { steps } from '@/lib/content';

const icons = ['doc', 'search', 'leader', 'group', 'growth'];

export default function HowItWorks() {
  return (
    <section className="section bg-cream-alt">
      <div className="wrap">
        <SectionHead title="How It Works" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-2 gap-y-8 items-start">
          {steps.map((s, i) => (
            <div key={s.num} className={`text-center px-3 relative ${i < steps.length - 1 ? 'step-arrow' : ''}`}>
              <Icon name={icons[i]} size={30} className="text-gold mb-3.5 mx-auto" />
              <div className="font-display text-gold text-[.78rem] tracking-[.1em]">{s.num}</div>
              <h4 className="text-gold text-[.81rem] uppercase tracking-[.06em] my-1.5 mb-2">{s.title}</h4>
              <p className="text-[.78rem] text-muted font-light">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
