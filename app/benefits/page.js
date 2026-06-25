import PartnerNav from '@/components/partner/PartnerNav';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Partner Benefits — Imperial Partners Club',
  description:
    'Explore the core benefits of joining Imperial Partners Club, including commissions, partner portal access, premium solutions, training, marketing support, and Capital Club access.',
};

const benefits = [
  {
    number: '01',
    title: 'Commission Earning Opportunity',
    value:
      'Create recurring revenue opportunities without building internal processing capabilities.',
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
    value:
      'Introduce clients to a complete ecosystem of global mobility, wealth, business, real estate, and lifestyle solutions.',
    items: [
      'Citizenship by Investment',
      'Residency by Investment',
      'Golden Visas',
      'Family Office Services',
      'Wealth Structuring',
      'Company Formation',
      'International Expansion',
      'Real Estate Opportunities',
      'Concierge, Education, Healthcare & Relocation',
    ],
  },
  {
    number: '03',
    title: 'Partner Portal Access',
    value:
      'Full visibility over opportunities, referral progress, and earnings.',
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
    value:
      'Partners are supported by a dedicated team from onboarding to referral completion.',
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
    value:
      'Professional resources designed to help partners generate more referrals.',
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
    value:
      'Top-performing partners receive recognition, access, and prestige inside the Imperial ecosystem.',
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
      <PartnerNav />

      <main>
        <section className="relative overflow-hidden bg-cream pt-28 pb-20 md:pt-32 md:pb-24 text-center">
          <img
            src="/ipc-logo.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-1/2 top-1/2 w-[560px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[.045]"
          />

          <div className="wrap relative z-10">
            <p className="text-gold text-[.72rem] tracking-[.34em] uppercase font-medium mb-6">
              Imperial Partners Club
            </p>

            <h1 className="text-gold mx-auto max-w-[14ch] text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.12]">
              Partner Benefits
            </h1>

            <div className="w-20 h-px bg-gold mx-auto my-7" />

            <p className="mx-auto max-w-[720px] text-[1.02rem] leading-relaxed text-body font-light">
              Imperial Partners Club helps trusted professionals create more value for their clients,
              grow their network, access world-class solutions, and earn meaningful commissions through
              a premium global partnership ecosystem.
            </p>

            <div className="mt-9 flex justify-center">
              <Button href="/apply" arrow className="!text-[.8rem] !px-9 !py-[18px]">
                Apply To Become A Partner
              </Button>
            </div>
          </div>
        </section>

        <section className="section bg-white border-y border-gold/15">
          <div className="wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/20 border border-gold/20">
              {benefits.map((benefit) => (
                <article key={benefit.number} className="bg-white p-8 md:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <span className="font-display text-gold text-[1.45rem] leading-none">
                      {benefit.number}
                    </span>

                    <div>
                      <h2 className="text-gold text-[1.05rem] uppercase tracking-[.06em] mb-3">
                        {benefit.title}
                      </h2>
                      <p className="text-body font-light leading-relaxed">
                        {benefit.value}
                      </p>
                    </div>
                  </div>

                  <ul className="tier-list border-t border-gold/15 pt-4">
                    {benefit.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-center py-20 md:py-24">
          <div className="wrap">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase mb-5">
              Partner Value Promise
            </p>

            <h2 className="text-gold-soft text-[clamp(1.6rem,3.4vw,2.5rem)] capitalize tracking-[.03em] max-w-[24ch] mx-auto leading-tight">
              Create More Value, Grow Your Network, Earn Meaningful Commissions
            </h2>

            <p className="text-white/75 font-light mt-5 max-w-[680px] mx-auto leading-relaxed">
              Join a premium global partnership ecosystem built for trusted professionals,
              private client advisors, family offices, consultants, and strategic introducers.
            </p>

            <div className="mt-9 flex justify-center">
              <Button href="/apply" arrow className="!text-[.8rem] !px-9 !py-[18px]">
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