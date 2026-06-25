import SectionHead from './SectionHead';
import { ecosystem } from '@/lib/content';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section">
      <div className="wrap">
        <SectionHead title="The Ecosystem" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {ecosystem.map((t) => (
            <div key={t.title} className="tile h-[330px] p-[18px] pb-[22px]" style={{ backgroundImage: `url(${t.img})` }}>
              <h3 className="text-white text-[.95rem] uppercase tracking-[.07em] leading-tight">{t.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
