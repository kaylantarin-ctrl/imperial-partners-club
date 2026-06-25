import Icon from './Icon';

const items = [
  { icon: 'people', title: "Who It's For",
    body: 'Trusted Advisors, Family Offices, Wealth Managers, Legal & Tax Experts, Investors, and Private Banks seeking meaningful partnerships and exclusive opportunities.' },
  { icon: 'opportunity', title: 'The Opportunity',
    body: 'Join a curated global network that opens doors to cross-border collaboration, high-value client referrals, and proprietary deals unavailable anywhere else.' },
  { icon: 'globe', title: 'The Ecosystem',
    body: 'A fully integrated platform combining intelligence, connections, and privileges to help you serve clients better and scale your advisory business globally.' },
];

export default function ValueProps() {
  return (
    <section id="about" className="bg-white border-y border-gold/15">
      <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 py-20">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`md:px-12 first:md:pl-0 last:md:pr-0 ${
              i ? 'md:border-l border-gold/15 pt-12 border-t md:pt-0 md:border-t-0' : ''
            }`}
          >
            <Icon name={it.icon} size={32} className="text-gold mb-6" />
            <h3 className="text-gold text-[1.05rem] uppercase tracking-[.1em] mb-4">{it.title}</h3>
            <p className="text-[.9rem] leading-relaxed text-muted font-light max-w-[34ch]">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
