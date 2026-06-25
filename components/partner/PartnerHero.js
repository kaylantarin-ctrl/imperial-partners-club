import Button from '@/components/Button';

export default function PartnerHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream text-center pt-28 pb-24 md:pt-32 md:pb-28">
      <img src="/ipc-logo.png" alt="" aria-hidden="true"
           className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] max-w-none opacity-[.045]" />
      <div className="wrap relative z-10">
        <p className="text-gold text-[.72rem] tracking-[.34em] uppercase font-medium mb-6">Imperial Partners Club</p>
        <h1 className="text-gold mx-auto max-w-[16ch] text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.12]">
          Turn Trusted Relationships Into New Revenue Opportunities
        </h1>
        <p className="mx-auto max-w-[640px] mt-7 text-[1.02rem] leading-relaxed text-body font-light">
          Join Imperial Partners Club and help your clients access citizenship, residency, real estate, and private
          client solutions — while being rewarded for every successful introduction and deepening your client relationships.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="#apply" arrow className="!text-[.8rem] !px-9 !py-[18px]">Apply To Become A Partner</Button>
        </div>
        <p className="mt-5 text-[.72rem] tracking-[.16em] uppercase text-muted">
          No joining fee · Rewarded when your referred clients complete
        </p>
      </div>
    </section>
  );
}
