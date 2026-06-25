import SectionHead from './SectionHead';
import Icon from './Icon';

const items = [
  { icon: 'network', title: 'Global Network', body: 'Access a vetted network of elite advisors and institutions across key global markets.' },
  { icon: 'shield', title: 'Cross-Border Referrals', body: 'Receive high-quality introductions and referrals from trusted partners.' },
  { icon: 'chart', title: 'Proprietary Deal Flow', body: 'Gain early access to exclusive investment opportunities and private placements.' },
  { icon: 'leader', title: 'Thought Leadership', body: 'Position yourself as a leader through content, summits, and global forums.' },
  { icon: 'nodes', title: 'Enhanced Client Value', body: 'Deliver more value with exclusive solutions, insights, and global access.' },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section bg-cream-alt">
      <div className="wrap">
        <SectionHead title="Partner Benefits" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 lg:gap-[30px]">
          {items.map((b) => (
            <div key={b.title}>
              <Icon name={b.icon} size={26} className="text-gold mb-4" />
              <h3 className="text-gold text-[.84rem] uppercase tracking-[.07em] mb-2.5">{b.title}</h3>
              <p className="text-[.82rem] text-muted font-light">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
