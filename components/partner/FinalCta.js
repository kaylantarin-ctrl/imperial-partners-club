import Button from '@/components/Button';

export default function FinalCta() {
  return (
    <section className="bg-ink text-center py-20 md:py-24">
      <div className="wrap">
        <h2 className="text-gold-soft text-[clamp(1.7rem,3.4vw,2.5rem)] capitalize tracking-[.03em] max-w-[20ch] mx-auto leading-tight">
          Build New Revenue Streams For Your Business
        </h2>
        <p className="text-white/80 font-light mt-4">Join Imperial Partners Club today.</p>
        <div className="mt-9 flex justify-center">
          <Button href="#apply" arrow className="!text-[.8rem] !px-9 !py-[18px]">Apply Now</Button>
        </div>
      </div>
    </section>
  );
}
