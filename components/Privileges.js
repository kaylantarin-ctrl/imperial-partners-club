import Button from './Button';
import { privileges } from '@/lib/content';

export default function Privileges() {
  return (
    <section id="privileges" className="section">
      <div className="wrap">
        <div className="max-w-[560px]">
          <h2 className="text-[1.85rem] uppercase tracking-[.05em]">Imperial Privileges</h2>
          <p className="font-display text-gold text-[.92rem]">Beyond Business. A Lifestyle Reserved for Partners.</p>
          <p className="text-muted font-light text-[.9rem] my-4 mb-6">Enjoy exclusive access to luxury experiences, events, and partner-only privileges worldwide.</p>
          <Button href="#" variant="ghost" arrow>View All Privileges</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-9">
          {privileges.map((p) => (
            <div key={p.title} className="tile h-[200px] p-[18px]" style={{ backgroundImage: `url(${p.img})` }}>
              <h4 className="font-display text-white text-[.73rem] uppercase tracking-[.06em] leading-tight">{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
