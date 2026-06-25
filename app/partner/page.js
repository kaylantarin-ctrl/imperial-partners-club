import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Partner Program — Imperial Partners Club',
  description:
    'Join Imperial Partners Club and turn trusted relationships into new revenue through a premium global partnership ecosystem.',
};

const partnerTypes = [
  'Wealth Managers',
  'Family Offices',
  'Lawyers',
  'Tax Advisors',
  'Accountants',
  'Immigration Consultants',
  'Corporate Service Providers',
  'Luxury Real Estate Advisors',
  'Insurance Advisors',
];

const steps = [
  ['01', 'Apply', 'Submit your interest through the partner application.'],
  ['02', 'Get Approved', 'Our team reviews your profile and client network.'],
  ['03', 'Onboard', 'Receive guidance, training, and partner resources.'],
  ['04', 'Refer Clients', 'Introduce qualified clients to Imperial.'],
  ['05', 'Earn Rewards', 'Receive commissions and unlock partner incentives.'],
];

const pillars = [
  {
    title: 'You Keep The Relationship',
    text: 'Your client relationship stays protected while Imperial handles the technical execution, processing, and program guidance.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    note: 'Replace with a premium advisor/client meeting image.',
  },
  {
    title: 'Imperial Handles Execution',
    text: 'Our team supports the client journey across citizenship, residency, real estate, company formation, and private client solutions.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    note: 'Replace with a professional consulting or executive support image.',
  },
  {
    title: 'You Earn From Introductions',
    text: 'Partners can earn meaningful commissions and performance incentives when referred clients complete successfully.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    note: 'Replace with a finance, growth, or signing/handshake image.',
  },
];

export default function PartnerPage() {
  return (
    <>
      <Nav />

      <main>
        <section
          className="relative min-h-[82vh] flex items-center overflow-hidden bg-ink"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(23,26,32,.94), rgba(23,26,32,.75), rgba(23,26,32,.25)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="wrap relative z-10 py-24">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase font-medium mb-6">
              Imperial Partners Club
            </p>

            <h1 className="text-gold-soft max-w-[850px] text-[clamp(2.4rem,6vw,5rem)] leading-[1.05]">
              Turn Trusted Relationships Into New Revenue
            </h1>

            <div className="w-24 h-px bg-gold-soft my-8" />

            <p className="max-w-[720px] text-white/80 text-[1.05rem] md:text-[1.15rem] leading-relaxed font-light">
              Join a premium global partnership ecosystem built for trusted professionals,
              private client advisors, family offices, consultants, and strategic introducers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/apply" arrow>
                Apply As Founding Partner
              </Button>

              <Button href="/benefits" className="bg-transparent border border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ink">
                View Benefits
              </Button>
            </div>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
              <div>
                <p className="text-gold text-[.72rem] tracking-[.32em] uppercase mb-5">
                  Who We Work With
                </p>

                <h2 className="text-gold text-[clamp(1.9rem,4vw,3.2rem)] leading-tight mb-6">
                  Built For Professionals With Trusted Client Networks
                </h2>

                <p className="text-body font-light leading-relaxed max-w-[620px]">
                  Imperial Partners Club is designed for professionals who already serve
                  high-value clients and want to introduce them to premium global mobility,
                  real estate, business, and private client solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/20 border border-gold/20">
                {partnerTypes.map((item) => (
                  <div key={item} className="bg-white px-6 py-5 text-body font-light">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`grid grid-cols-1 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div
                className="min-h-[420px] bg-ink"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(23,26,32,.05), rgba(23,26,32,.55)), url('${pillar.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="flex items-center p-8 md:p-14 lg:p-20 bg-white">
                <div className="max-w-[560px]">
                  <p className="text-gold text-[.72rem] tracking-[.32em] uppercase mb-5">
                    Partner Advantage 0{index + 1}
                  </p>

                  <h2 className="text-gold text-[clamp(1.7rem,3vw,2.6rem)] leading-tight mb-5">
                    {pillar.title}
                  </h2>

                  <p className="text-body font-light leading-relaxed mb-6">
                    {pillar.text}
                  </p>

                  <p className="text-muted text-[.75rem] italic border-t border-gold/15 pt-5">
                    Image direction: {pillar.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="section bg-cream">
          <div className="wrap">
            <div className="text-center max-w-[760px] mx-auto mb-14">
              <p className="text-gold text-[.72rem] tracking-[.32em] uppercase mb-5">
                How It Works
              </p>

              <h2 className="text-gold text-[clamp(1.9rem,4vw,3.2rem)] leading-tight">
                A Simple Path From Application To Rewards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gold/20 border border-gold/20">
              {steps.map(([number, title, text]) => (
                <article key={number} className="bg-white p-7 min-h-[230px]">
                  <span className="font-display text-gold text-[1.7rem]">
                    {number}
                  </span>

                  <h3 className="text-gold mt-6 mb-3 text-[1rem] uppercase tracking-[.08em]">
                    {title}
                  </h3>

                  <p className="text-body font-light text-[.92rem] leading-relaxed">
                    {text}
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
              Premium Partnership Ecosystem
            </p>

            <h2 className="text-gold-soft text-[clamp(1.8rem,4vw,3.2rem)] max-w-[880px] mx-auto leading-tight">
              More Than Referrals. A Long-Term Strategic Partnership.
            </h2>

            <p className="text-white/75 font-light mt-6 max-w-[720px] mx-auto leading-relaxed">
              Partners gain access to Imperial’s global expertise, premium client solutions,
              marketing resources, training, support, and recognition opportunities.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/benefits" arrow>
                Explore Benefits
              </Button>

              <Button href="/apply" className="bg-transparent border border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ink">
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