import PartnerNav from '@/components/partner/PartnerNav';
import PartnerHero from '@/components/partner/PartnerHero';
import WhyJoin from '@/components/partner/WhyJoin';
import WhoWeWorkWith from '@/components/partner/WhoWeWorkWith';
import Services from '@/components/partner/Services';
import PartnerSteps from '@/components/partner/PartnerSteps';
import WhyImperial from '@/components/partner/WhyImperial';
import PartnerRewards from '@/components/partner/PartnerRewards';
import WinnersCircle from '@/components/partner/WinnersCircle';
import Faq from '@/components/partner/Faq';
import FinalCta from '@/components/partner/FinalCta';
import ApplicationForm from '@/components/partner/ApplicationForm';
import StickyCta from '@/components/partner/StickyCta';
import SectionHead from '@/components/SectionHead';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Become a Partner — Imperial Partners Club',
  description:
    'Turn trusted relationships into new revenue. Join Imperial Partners Club to help clients access citizenship, residency, real estate, and private client solutions while being rewarded for successful introductions.',
};

export default function PartnerPage() {
  return (
    <>
      <PartnerNav />
      <main>
        <PartnerHero />
        <WhyJoin />
        <WhoWeWorkWith />
        <Services />
        <PartnerSteps />
        <WhyImperial />
        <PartnerRewards />
        <WinnersCircle />
        <Faq />
        <FinalCta />
        <section id="apply" className="section bg-cream-alt scroll-mt-[86px]">
          <div className="wrap">
            <SectionHead title="Apply To Become A Partner" />
            <ApplicationForm />
          </div>
        </section>
      </main>
      <div className="h-20 lg:hidden" />
      <Footer />
      <StickyCta />
    </>
  );
}
