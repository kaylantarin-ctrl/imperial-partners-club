import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'About — Imperial Partners Club',
  description:
    'Imperial Partners Club is a premium global partnership ecosystem by Imperial Citizenship, built for trusted professionals serving high-value clients.',
};

const stats = [
  ['2,000+', 'Clients Supported'],
  ['40+', 'Countries Served'],
  ['Global', 'Partner Ecosystem'],
  ['Premium', 'Private Client Solutions'],
];

const values = [
  {
    title: 'Built For Trusted Professionals',
    text: 'Imperial Partners Club is designed for advisors, consultants, family offices, and strategic introducers who serve high-value clients and want to provide access to premium global solutions.',
  },
  {
    title: 'Powered By Imperial Citizenship',
    text: 'The club is backed by Imperial Citizenship’s experience in citizenship, residency, real estate, company formation, and private client advisory.',
  },
  {
    title: 'A Partnership Ecosystem',
    text: 'This is not only a referral program. It is a premium ecosystem built around trust, client value, education, support, recognition, and long-term growth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>
        <section
          className="relative min-h-[82vh] flex items-center overflow-hidden bg-ink"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(23,26,32,.94), rgba(23,26,32,.76), rgba(23,26,32,.28)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="wrap relative z-10 py-24">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase font-medium mb-6">
              About Imperial Partners Club
            </p>

            <h1 className="text-gold-soft max-w-[850px] text-[clamp(2.4rem,6vw,5rem)] leading-[1.05]">
              A Premium Partnership Ecosystem For Trusted Professionals
            </h1>

            <div className="w-24 h-px bg-gold-soft my-8" />

            <p className="max-w-[720px] text-white/80 text-[1.05rem] md:text-[1.15rem] leading-relaxed font-light">
              Imperial Partners Club helps professionals create more value for their clients,
              grow their network, and access premium global solutions through Imperial’s trusted ecosystem.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/benefits" arrow>
                Explore Benefits
              </Button>

              <Button
                href="/apply"
                className="bg-transparent border border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ink"
              >
                Apply As Founding Partner
              </Button>
            </div>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
              <div>
                <p className="text-gold text-[.72rem] tracking-[.32em] uppercase mb-5">
                  Who We Are
                </p>

                <h2 className="text-gold text-[clamp(1.9rem,4vw,3.2rem)] leading-tight mb-6">
                  The Partner Platform Behind Premium Global Opportunities
                </h2>

                <p className="text-body font-light leading-relaxed mb-5">
                  Imperial Partners Club was created to give trusted professionals a structured,
                  elegant, and rewarding way to introduce their clients to global mobility,
                  private client, business, real estate, and lifestyle solutions.
                </p>

                <p className="text-body font-light leading-relaxed">
                  Partners benefit from Imperial’s expertise, resources, support, and global reach,
                  while staying focused on what matters most: their client relationships.
                </p>
              </div>

              <div
                className="min-h-[520px] bg-ink border border-gold/20"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(23,26,32,.05), rgba(23,26,32,.58)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="h-full min-h-[520px] flex items-end p-8">
                  <p className="text-white/75 text-[.78rem] leading-relaxed italic max-w-[360px]">
                    Image direction: replace with a premium image of executives, advisors, or partners in a luxury business setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gold/15">
          <div className="wrap grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 border-x border-gold/20">
            {stats.map(([number, label]) => (
              <div key={label} className="bg-white px-6 py-10 text-center">
                <p className="font-display text-gold text-[2rem] mb-3">
                  {number}
                </p>
                <p className="text-body text-[.78rem] tracking-[.14em] uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section bg-cream">
          <div className="wrap">
            <div className="text-center max-w-[760px] mx-auto mb-14">
              <p className="text-gold text-[.72rem] tracking-[.32em] uppercase mb-5">
                Our Positioning
              </p>

              <h2 className="text-gold text-[clamp(1.9rem,4vw,3.2rem)] leading-tight">
                More Than A Referral Program
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
              {values.map((item) => (
                <article key={item.title} className="bg-white p-8 md:p-10 min-h-[300px]">
                  <h3 className="text-gold text-[1.1rem] uppercase tracking-[.08em] mb-5">
                    {item.title}
                  </h3>

                  <p className="text-body font-light leading-relaxed">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative py-24 overflow-hidden bg-ink text-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(23,26,32,.88), rgba(23,26,32,.94)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="wrap relative z-10">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase mb-5">
              Join The Ecosystem
            </p>

            <h2 className="text-gold-soft text-[clamp(1.8rem,4vw,3.2rem)] max-w-[880px] mx-auto leading-tight">
              Build Client Value Through A Premium Global Partnership
            </h2>

            <p className="text-white/75 font-light mt-6 max-w-[720px] mx-auto leading-relaxed">
              Imperial Partners Club gives trusted professionals access to the support,
              solutions, and structure needed to grow with confidence.
            </p>

            <div className="mt-10">
              <Button href="/apply" arrow>
                Apply As Founding Partner
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}