import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Partner Benefits — Imperial Partners Club',
  description:
    'Explore the benefits of joining Imperial Partners Club, including commissions, premium solutions, partner portal access, marketing support, training, recognition, and Capital Club access.',
};

const benefits = [
  {
    number: '01',
    title: 'Commission Earning Opportunity',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing a premium business meeting, handshake, or financial growth.',
    value:
      'Create recurring revenue opportunities without needing to build internal processing capabilities.',
    items: [
      'Competitive referral commissions',
      'Performance bonuses',
      'Elite Partner incentives',
      'Campaign-based rewards',
    ],
  },
  {
    number: '02',
    title: 'Access To Premium Solutions',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image representing luxury travel, passports, global access, or private clients.',
    value:
      'Introduce clients to global mobility, wealth, business, real estate, and lifestyle solutions.',
    items: [
      'Citizenship by Investment',
      'Residency by Investment',
      'Golden Visas',
      'Family Office Services',
      'Wealth Structuring',
      'Company Formation',
      'Real Estate Opportunities',
      'Concierge, Education, Healthcare & Relocation',
    ],
  },
  {
    number: '03',
    title: 'Partner Portal Access',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing a dashboard, analytics screen, laptop, or business technology.',
    value:
      'Full visibility over referrals, opportunities, commissions, resources, and earnings.',
    items: [
      'Referral submission',
      'Referral tracking',
      'Commission tracking',
      'Training center',
      'Resource library',
      'Marketing studio',
    ],
  },
  {
    number: '04',
    title: 'Dedicated Partner Support',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing a professional advisor, support team, or executive meeting.',
    value:
      'Partners receive priority support from onboarding to referral completion.',
    items: [
      'Relationship manager',
      'Priority response',
      'Partner success team',
      'Executive escalation support',
    ],
  },
  {
    number: '05',
    title: 'Marketing Studio',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing creative work, campaign planning, or premium branded materials.',
    value:
      'Access professional resources designed to help partners generate more referrals.',
    items: [
      'Co-branded materials',
      'Social media content',
      'Landing pages',
      'Email templates',
      'Campaign resources',
    ],
  },
  {
    number: '06',
    title: 'Training & Certification',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing executive training, a workshop, or professional education.',
    value:
      'Build confidence, product knowledge, and credibility when speaking with clients.',
    items: [
      'Product training',
      'Industry updates',
      'Sales training',
      'Compliance training',
      'Partner certification',
    ],
  },
  {
    number: '07',
    title: 'Winners Circle Recognition',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing a VIP event, awards dinner, luxury networking, or recognition moment.',
    value:
      'Top-performing partners receive prestige, access, and recognition inside the Imperial ecosystem.',
    items: [
      'Elite Partner status',
      'Annual awards',
      'VIP events',
      'Executive networking',
      'Recognition programs',
    ],
  },
  {
    number: '08',
    title: 'Capital Club Access',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=75',
    imageNote: 'Use an image showing a private members club, luxury business setting, or global investors.',
    value:
      'Access opportunities beyond traditional referral programs.',
    items: [
      'Investor introductions',
      'Exclusive opportunities',
      'Family office network',
      'Strategic relationships',
    ],
  },
];

export default function BenefitsPage() {
  return (
    <>
      <Nav />

      <main>
        <section
          className="relative min-h-[78vh] flex items-center overflow-hidden bg-ink"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(23,26,32,.92), rgba(23,26,32,.72), rgba(23,26,32,.28)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="wrap relative z-10 py-24">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase font-medium mb-6">
              Imperial Partners Club
            </p>

            <h1 className="text-gold-soft max-w-[760px] text-[clamp(2.4rem,6vw,5rem)] leading-[1.05]">
              Partner Benefits
            </h1>

            <div className="w-24 h-px bg-gold-soft my-8" />

            <p className="max-w-[700px] text-white/80 text-[1.05rem] md:text-[1.15rem] leading-relaxed font-light">
              A premium global partnership ecosystem designed to help trusted professionals create more value for their clients, grow their network, and earn meaningful commissions.
            </p>

            <div className="mt-10">
              <Button href="/apply" arrow>
                Apply as Founding Partner
              </Button>
            </div>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="group bg-white border border-gold/15 overflow-hidden shadow-[0_20px_60px_rgba(23,26,32,.06)]"
                >
                  <div
                    className="relative h-[260px] bg-ink overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(23,26,32,.1), rgba(23,26,32,.78)), url('${benefit.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />

                    <div className="absolute left-7 bottom-7 right-7">
                      <span className="font-display text-gold-soft text-[1.5rem]">
                        {benefit.number}
                      </span>

                      <h2 className="text-gold-soft text-[1.35rem] md:text-[1.55rem] mt-2">
                        {benefit.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-7 md:p-9">
                    <p className="text-body font-light leading-relaxed mb-6">
                      {benefit.value}
                    </p>

                    <ul className="tier-list grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                      {benefit.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p className="mt-6 pt-5 border-t border-gold/15 text-[.72rem] leading-relaxed text-muted italic">
                      Image direction: {benefit.imageNote}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-ink overflow-hidden py-24 text-center">
          <img
            src="/ipc-logo.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-1/2 top-1/2 w-[560px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[.04]"
          />

          <div className="wrap relative z-10">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase mb-5">
              Partner Value Promise
            </p>

            <h2 className="text-gold-soft text-[clamp(1.8rem,4vw,3.2rem)] max-w-[900px] mx-auto leading-tight">
              Create More Value, Grow Your Network, And Earn Meaningful Commissions
            </h2>

            <p className="text-white/75 font-light mt-6 max-w-[740px] mx-auto leading-relaxed">
              Imperial Partners Club helps trusted professionals access world-class solutions through a premium global partnership ecosystem.
            </p>

            <div className="mt-10">
              <Button href="/apply" arrow>
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}